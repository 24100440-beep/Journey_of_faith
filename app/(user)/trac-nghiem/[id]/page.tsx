'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BrainIcon, 
  ClockIcon,
  CheckIcon,
  XIcon,
  ArrowRightIcon,
} from '@/components/icons';
import { cn } from '@/lib/utils';
import { mockQuizCategories, getQuestionsByCategory } from '@/lib/mock-data';
import type { Question, CorrectAnswer } from '@/types';

type QuizState = 'setup' | 'playing' | 'result';

interface QuizResult {
  score: number;
  total: number;
  answers: Record<number, { selected: CorrectAnswer; correct: CorrectAnswer; isCorrect: boolean }>;
  timeTaken: number;
}

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const categoryId = parseInt(resolvedParams.id);
  const category = mockQuizCategories.find(c => c.id === categoryId);
  const allQuestions = getQuestionsByCategory(categoryId);

  const [state, setState] = useState<QuizState>('setup');
  const [questionCount, setQuestionCount] = useState(5);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<CorrectAnswer | null>(null);
  const [answers, setAnswers] = useState<Record<number, CorrectAnswer>>({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Timer
  useEffect(() => {
    if (state !== 'playing' || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, timeRemaining]);

  const handleStart = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    setQuestions(selected);
    setTimeRemaining(questionCount * 30); // 30 seconds per question
    setStartTime(new Date());
    setState('playing');
  };

  const handleSelectAnswer = (answer: CorrectAnswer) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
  };

  const handleConfirm = () => {
    if (!selectedAnswer) return;

    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedAnswer
    }));
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    const timeTaken = startTime ? Math.floor((new Date().getTime() - startTime.getTime()) / 1000) : 0;
    
    let score = 0;
    const resultAnswers: QuizResult['answers'] = {};
    
    questions.forEach(q => {
      const selected = answers[q.id] || selectedAnswer;
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) score++;
      resultAnswers[q.id] = {
        selected: selected || 'A',
        correct: q.correctAnswer,
        isCorrect
      };
    });

    // Include current answer if not yet saved
    if (selectedAnswer && questions[currentIndex]) {
      const current = questions[currentIndex];
      const isCorrect = selectedAnswer === current.correctAnswer;
      if (isCorrect && !answers[current.id]) score++;
      resultAnswers[current.id] = {
        selected: selectedAnswer,
        correct: current.correctAnswer,
        isCorrect
      };
    }

    setResult({
      score,
      total: questions.length,
      answers: resultAnswers,
      timeTaken
    });
    setState('result');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!category) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Không tìm thấy chủ đề</p>
        <Button onClick={() => router.push('/trac-nghiem')} className="mt-4">
          Quay lại
        </Button>
      </div>
    );
  }

  // Setup Screen
  if (state === 'setup') {
    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-20 lg:pb-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
            <BrainIcon className="w-7 h-7 text-primary" />
            {category.name}
          </h1>
          <p className="text-muted-foreground mt-1">{category.description}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cài đặt bài thi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-3 block">Số câu hỏi</label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 15, 20].map(num => (
                  <Button
                    key={num}
                    variant={questionCount === num ? 'default' : 'outline'}
                    onClick={() => setQuestionCount(num)}
                    disabled={num > allQuestions.length}
                  >
                    {num} câu
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Có {allQuestions.length} câu hỏi trong chủ đề này
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ClockIcon className="w-4 h-4" />
              <span>Thời gian: {formatTime(questionCount * 30)} (30 giây/câu)</span>
            </div>

            <Button onClick={handleStart} className="w-full" size="lg">
              Bắt đầu làm bài
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Playing Screen
  if (state === 'playing' && questions.length > 0) {
    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;
    const options: { key: CorrectAnswer; value: string }[] = [
      { key: 'A', value: currentQuestion.optionA },
      { key: 'B', value: currentQuestion.optionB },
      ...(currentQuestion.optionC ? [{ key: 'C' as CorrectAnswer, value: currentQuestion.optionC }] : []),
      ...(currentQuestion.optionD ? [{ key: 'D' as CorrectAnswer, value: currentQuestion.optionD }] : []),
    ];

    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-20 lg:pb-0">
        {/* Progress Header */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">
            Câu {currentIndex + 1}/{questions.length}
          </span>
          <span className={cn(
            'flex items-center gap-1 text-sm font-medium',
            timeRemaining < 60 ? 'text-destructive' : 'text-muted-foreground'
          )}>
            <ClockIcon className="w-4 h-4" />
            {formatTime(timeRemaining)}
          </span>
        </div>
        <Progress value={progress} className="h-2" />

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {options.map(({ key, value }) => {
              const isSelected = selectedAnswer === key;
              const isCorrect = key === currentQuestion.correctAnswer;
              const showCorrect = showExplanation && isCorrect;
              const showWrong = showExplanation && isSelected && !isCorrect;

              return (
                <button
                  key={key}
                  onClick={() => handleSelectAnswer(key)}
                  disabled={showExplanation}
                  className={cn(
                    'w-full p-4 rounded-xl border-2 text-left transition-all flex items-start gap-3',
                    !showExplanation && isSelected && 'border-primary bg-primary/5',
                    !showExplanation && !isSelected && 'border-border hover:border-primary/50 hover:bg-secondary/50',
                    showCorrect && 'border-green-500 bg-green-50 dark:bg-green-950/20',
                    showWrong && 'border-destructive bg-destructive/5'
                  )}
                >
                  <span className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0',
                    !showExplanation && isSelected && 'bg-primary text-primary-foreground',
                    !showExplanation && !isSelected && 'bg-secondary text-foreground',
                    showCorrect && 'bg-green-500 text-white',
                    showWrong && 'bg-destructive text-white'
                  )}>
                    {showCorrect ? <CheckIcon className="w-4 h-4" /> : 
                     showWrong ? <XIcon className="w-4 h-4" /> : key}
                  </span>
                  <span className="flex-1 pt-1">{value}</span>
                </button>
              );
            })}

            {/* Explanation */}
            {showExplanation && currentQuestion.explanation && (
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm font-medium text-primary mb-2">Giải thích:</p>
                <p className="text-sm text-foreground">{currentQuestion.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-3">
          {!showExplanation ? (
            <Button 
              onClick={handleConfirm} 
              className="flex-1" 
              disabled={!selectedAnswer}
            >
              Xác nhận
            </Button>
          ) : (
            <Button onClick={handleNext} className="flex-1">
              {currentIndex < questions.length - 1 ? (
                <>
                  Câu tiếp theo
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </>
              ) : (
                'Xem kết quả'
              )}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Result Screen
  if (state === 'result' && result) {
    const percentage = Math.round((result.score / result.total) * 100);
    const isPassed = percentage >= 70;

    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-20 lg:pb-0">
        <Card className={cn(
          'text-center',
          isPassed ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' : 
                    'bg-destructive/5 border-destructive/20'
        )}>
          <CardContent className="pt-8 pb-6">
            <div className={cn(
              'w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4',
              isPassed ? 'bg-green-100 dark:bg-green-900/50' : 'bg-destructive/10'
            )}>
              {isPassed ? (
                <CheckIcon className="w-10 h-10 text-green-600 dark:text-green-400" />
              ) : (
                <XIcon className="w-10 h-10 text-destructive" />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {isPassed ? 'Xuat sac!' : 'Hay co gang hon!'}
            </h2>
            <p className="text-muted-foreground">
              Bạn trả lời đúng {result.score}/{result.total} câu ({percentage}%)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Thời gian: {formatTime(result.timeTaken)}
            </p>
          </CardContent>
        </Card>

        {/* Answer Review */}
        <Card>
          <CardHeader>
            <CardTitle>Chi tiết câu trả lời</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {questions.map((q, index) => {
              const answer = result.answers[q.id];
              return (
                <div 
                  key={q.id}
                  className={cn(
                    'p-3 rounded-lg border',
                    answer?.isCorrect ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' : 
                                       'bg-destructive/5 border-destructive/20'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className={cn(
                      'w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0',
                      answer?.isCorrect ? 'bg-green-500 text-white' : 'bg-destructive text-white'
                    )}>
                      {answer?.isCorrect ? <CheckIcon className="w-3 h-3" /> : <XIcon className="w-3 h-3" />}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Cau {index + 1}: {q.question}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Đáp án: {q.correctAnswer}. {
                          q.correctAnswer === 'A' ? q.optionA :
                          q.correctAnswer === 'B' ? q.optionB :
                          q.correctAnswer === 'C' ? q.optionC :
                          q.optionD
                        }
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => router.push('/trac-nghiem')} className="flex-1">
            Chọn chủ đề khác
          </Button>
          <Button onClick={() => {
            setState('setup');
            setCurrentIndex(0);
            setSelectedAnswer(null);
            setAnswers({});
            setShowExplanation(false);
            setResult(null);
          }} className="flex-1">
            Làm lại
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
