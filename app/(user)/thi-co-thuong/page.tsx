'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Trophy, Clock, Medal, Gift, Star, Award, CheckCircle, XCircle,
    AlertCircle, Crown, Sparkles, Heart, Shield, ChevronRight, RotateCcw,
    Home, Diamond, Gem, Church, Cross, Flame, Zap, Sun, Moon
} from 'lucide-react';

// Background Component
function ChurchBackground() {
    return (
        <>
            <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
            <div className="fixed inset-0 opacity-30">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="stainedGlass" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <rect width="200" height="200" fill="none" />
                            <polygon points="100,20 120,50 180,60 140,100 160,160 100,130 40,160 60,100 20,60 80,50" fill="rgba(251,191,36,0.05)" stroke="rgba(251,191,36,0.1)" strokeWidth="1" />
                            <circle cx="100" cy="100" r="15" fill="rgba(236,72,153,0.05)" stroke="rgba(236,72,153,0.1)" strokeWidth="1" />
                            <rect x="80" y="80" width="40" height="40" fill="rgba(59,130,246,0.03)" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="crossPattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                            <line x1="150" y1="0" x2="150" y2="300" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                            <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                            <text x="140" y="158" fontSize="24" fill="rgba(255,255,255,0.03)">✝</text>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#stainedGlass)" />
                    <rect width="100%" height="100%" fill="url(#crossPattern)" />
                </svg>
            </div>
            <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-amber-400/20 to-transparent rotate-12" />
                <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-amber-400/20 to-transparent -rotate-6" />
                <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-amber-400/20 to-transparent rotate-12" />
            </div>
            <div className="fixed inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-300/40 rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}

// Quiz Data (giữ nguyên như cũ)
const quizQuestions = [
    { id: 1, question: "Bí tích Thánh Thể được Chúa Giêsu thiết lập vào lúc nào?", options: ["Trong Bữa Tiệc Ly", "Trên đồi Canvari", "Khi chịu phép rửa", "Khi hóa nước thành rượu"], correct: 0, explanation: "Chúa Giêsu thiết lập Bí tích Thánh Thể trong Bữa Tiệc Ly...", scripture: "Mt 26, 26-28", points: 10 },
    { id: 2, question: "Ai là vị Tông đồ đầu tiên được Chúa Giêsu đặt làm thủ lãnh?", options: ["Thánh Gioan", "Thánh Phaolô", "Thánh Phêrô", "Thánh Giacôbê"], correct: 2, explanation: "Thánh Phêrô được Chúa Giêsu đặt làm đá tảng xây Hội Thánh", scripture: "Mt 16, 18", points: 10 },
    { id: 3, question: "Giáo Hội Công Giáo có bao nhiêu Bí tích?", options: ["5 bí tích", "6 bí tích", "7 bí tích", "8 bí tích"], correct: 2, explanation: "Giáo Hội Công Giáo có 7 bí tích", scripture: "Sách Giáo lý số 1210", points: 10 },
    { id: 4, question: "Kinh Lạy Cha được Chúa Giêsu dạy khi nào?", options: ["Khi còn nhỏ", "Trong Bài Giảng trên Núi", "Trước khi chịu chết", "Sau khi sống lại"], correct: 1, explanation: "Kinh Lạy Cha được dạy trong Bài Giảng trên Núi", scripture: "Mt 6, 9-13", points: 10 },
    { id: 5, question: "Mầu nhiệm nào là trung tâm của đức tin Công Giáo?", options: ["Chúa Giêsu sinh ra", "Chúa Giêsu chịu chết", "Chúa Giêsu sống lại", "Chúa Giêsu lên trời"], correct: 2, explanation: "Mầu nhiệm Chúa Kitô Phục Sinh là trung tâm", scripture: "1 Cr 15, 14", points: 10 }
];

const rewards = [
    { minScore: 0, maxScore: 15, title: "Người Học Việc", icon: "🌱", color: "from-emerald-500 to-teal-500", prize: "Huy hiệu Người Học Việc" },
    { minScore: 16, maxScore: 35, title: "Chiến Binh Đức Tin", icon: "⚔️", color: "from-blue-500 to-indigo-500", prize: "Huy hiệu Chiến Binh + Kinh Sách Điện Tử" },
    { minScore: 36, maxScore: 45, title: "Kỵ Sĩ Thánh Giá", icon: "🛡️", color: "from-purple-500 to-violet-500", prize: "Huy hiệu Kỵ Sĩ + 3 Kinh Sách + Hoa Hồng" },
    { minScore: 46, maxScore: 50, title: "Hiệp Sĩ Chúa Kitô", icon: "👑", color: "from-amber-500 to-orange-500", prize: "Huy hiệu Hiệp Sĩ + 5 Kinh Sách + Quà Đặc Biệt" }
];

export default function ThiCoThuongPage() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isAnswered, setIsAnswered] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [userAnswers, setUserAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1));

    useEffect(() => {
        if (quizCompleted || isAnswered) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) { clearInterval(timer); handleTimeOut(); return 0; }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [currentQuestion, quizCompleted, isAnswered]);

    const handleTimeOut = () => {
        if (!isAnswered) {
            setIsAnswered(true);
            setShowExplanation(true);
            setUserAnswers(prev => { const newAnswers = [...prev]; newAnswers[currentQuestion] = -1; return newAnswers; });
        }
    };

    const handleAnswer = (answerIndex: number) => {
        if (isAnswered) return;
        setIsAnswered(true);
        setSelectedAnswer(answerIndex);
        if (answerIndex === quizQuestions[currentQuestion].correct) setScore(prev => prev + quizQuestions[currentQuestion].points);
        setUserAnswers(prev => { const newAnswers = [...prev]; newAnswers[currentQuestion] = answerIndex; return newAnswers; });
        setShowExplanation(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < quizQuestions.length) {
            setCurrentQuestion(prev => prev + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
            setShowExplanation(false);
            setTimeLeft(30);
        } else {
            setQuizCompleted(true);
        }
    };

    const getReward = () => rewards.find(r => score >= r.minScore && score <= r.maxScore) || rewards[0];
    const handleRestart = () => { setCurrentQuestion(0); setSelectedAnswer(null); setScore(0); setQuizCompleted(false); setTimeLeft(30); setIsAnswered(false); setShowExplanation(false); setUserAnswers(Array(quizQuestions.length).fill(-1)); };

    // Start Screen
    if (!quizCompleted && currentQuestion === 0 && !isAnswered) {
        return (
            <>
                <ChurchBackground />
                <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-2xl w-full bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 text-center shadow-2xl">
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6 shadow-2xl">
                            <Trophy className="w-16 h-16 text-white" />
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🏆 Thi Có Thưởng</h1>
                        <p className="text-amber-200/80 text-lg mb-8">Kiểm tra kiến thức giáo lý và nhận phần thưởng hấp dẫn</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white/10 rounded-xl p-3"><Clock className="w-6 h-6 text-amber-400 mx-auto mb-1" /><p className="text-white text-sm">30s/câu</p></div>
                            <div className="bg-white/10 rounded-xl p-3"><Diamond className="w-6 h-6 text-amber-400 mx-auto mb-1" /><p className="text-white text-sm">{quizQuestions.length} câu</p></div>
                            <div className="bg-white/10 rounded-xl p-3"><Gift className="w-6 h-6 text-amber-400 mx-auto mb-1" /><p className="text-white text-sm">Quà hấp dẫn</p></div>
                            <div className="bg-white/10 rounded-xl p-3"><Cross className="w-6 h-6 text-amber-400 mx-auto mb-1" /><p className="text-white text-sm">Giáo lý</p></div>
                        </div>
                        <button onClick={() => setCurrentQuestion(1)} className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-gray-900 text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/25 transition-all">Bắt đầu <ChevronRight className="w-5 h-5" /></button>
                        <button onClick={() => router.push('/')} className="w-full mt-3 py-3 bg-white/10 rounded-xl text-white/80 hover:bg-white/20 transition-all">Về trang chủ</button>
                    </motion.div>
                </div>
                <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          }
          .animate-float { animation: float linear infinite; }
        `}</style>
            </>
        );
    }

    // Quiz Screen
    if (!quizCompleted && currentQuestion > 0) {
        const question = quizQuestions[currentQuestion - 1];
        const progress = ((currentQuestion) / quizQuestions.length) * 100;
        return (
            <>
                <ChurchBackground />
                <div className="relative z-10 min-h-screen py-8 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Cross className="w-4 h-4 text-amber-400" /><span className="text-white text-sm">Câu {currentQuestion}/{quizQuestions.length}</span></div>
                            <div className="flex gap-3">
                                <div className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full ${timeLeft <= 10 ? 'bg-red-500/30' : ''}`}><Clock className={`w-4 h-4 ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} /><span className={`font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>{timeLeft}s</span></div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Star className="w-4 h-4 text-yellow-400" /><span className="text-white font-bold">{score}</span></div>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-full h-2 mb-8"><motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full" /></div>
                        <motion.div key={currentQuestion} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed text-center">{question.question}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {question.options.map((option, idx) => {
                                    const isCorrect = idx === question.correct;
                                    const isSelected = selectedAnswer === idx;
                                    const isWrong = isSelected && !isCorrect;
                                    return (
                                        <motion.button key={idx} whileHover={!isAnswered ? { scale: 1.02 } : {}} whileTap={!isAnswered ? { scale: 0.98 } : {}} onClick={() => handleAnswer(idx)} disabled={isAnswered} className={`p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${!isAnswered ? 'bg-white/5 border border-white/20 hover:bg-white/15 cursor-pointer' : ''} ${isAnswered && isCorrect ? 'bg-green-500/30 border-green-500' : ''} ${isAnswered && isWrong ? 'bg-red-500/30 border-red-500' : ''}`}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${!isAnswered ? 'bg-white/20 text-white' : ''} ${isAnswered && isCorrect ? 'bg-green-500 text-white' : ''} ${isAnswered && isWrong ? 'bg-red-500 text-white' : ''}`}>{String.fromCharCode(65 + idx)}</div>
                                                <span className={`text-white ${isWrong ? 'line-through' : ''}`}>{option}</span>
                                                {isAnswered && isCorrect && <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />}
                                                {isAnswered && isWrong && <XCircle className="w-5 h-5 text-red-400 ml-auto" />}
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                            {showExplanation && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 p-5 bg-white/10 rounded-2xl border border-amber-500/30">
                                    <div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center"><Sparkles className="w-5 h-5 text-amber-400" /></div><div><p className="text-amber-200 font-semibold mb-1">📖 Giải thích:</p><p className="text-white/80 text-sm">{question.explanation}</p><p className="text-amber-400/80 text-xs mt-2">✨ {question.scripture}</p></div></div>
                                </motion.div>
                            )}
                        </motion.div>
                        {isAnswered && (
                            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onClick={handleNextQuestion} className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-gray-900 text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                                {currentQuestion === quizQuestions.length ? "Hoàn thành" : "Câu tiếp theo"} <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        )}
                    </div>
                </div>
                <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          }
          .animate-float { animation: float linear infinite; }
        `}</style>
            </>
        );
    }

    // Result Screen
    const reward = getReward();
    const percentage = (score / (quizQuestions.length * 10)) * 100;
    return (
        <>
            <ChurchBackground />
            <div className="relative z-10 min-h-screen py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 text-center">
                        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-flex items-center justify-center w-36 h-36 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6 shadow-2xl"><Trophy className="w-20 h-20 text-white" /></motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{score >= 40 ? '🎉 Chúc mừng! 🎉' : '🙏 Cố gắng lần sau nhé!'}</h2>
                        <p className="text-amber-200/80 text-lg mb-8">Bạn đã hoàn thành bài thi</p>
                        <div className="relative w-48 h-48 mx-auto mb-8">
                            <svg className="w-full h-full transform -rotate-90"><circle cx="96" cy="96" r="88" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" /><motion.circle cx="96" cy="96" r="88" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeLinecap="round" initial={{ strokeDasharray: 553, strokeDashoffset: 553 }} animate={{ strokeDashoffset: 553 - (553 * percentage) / 100 }} transition={{ duration: 1, delay: 0.5 }} /><defs><linearGradient id="gradient"><stop offset="0%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#f97316" /></linearGradient></defs></svg>
                            <div className="absolute inset-0 flex items-center justify-center"><div><span className="text-5xl font-bold text-white">{score}</span><span className="text-white/60 text-xl">/{quizQuestions.length * 10}</span></div></div>
                        </div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className={`inline-flex items-center gap-3 bg-gradient-to-r ${reward.color} px-6 py-3 rounded-full mb-6 shadow-lg`}><span className="text-2xl">{reward.icon}</span><span className="text-white font-bold text-xl">{reward.title}</span></motion.div>
                        <div className="bg-white/10 rounded-2xl p-6 mb-8"><div className="flex items-center justify-center gap-3 mb-3"><Gift className="w-6 h-6 text-pink-400" /><h3 className="text-xl font-semibold text-white">🎁 Phần thưởng của bạn</h3></div><p className="text-amber-200 text-lg">{reward.prize}</p></div>
                        <div className="grid grid-cols-5 gap-2 mb-8 max-w-md mx-auto">
                            {userAnswers.map((answer, idx) => (
                                <motion.div key={idx} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: idx * 0.05 }} className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white ${answer === quizQuestions[idx].correct ? 'bg-green-500 shadow-lg shadow-green-500/30' : answer === -1 ? 'bg-gray-500' : 'bg-red-500 shadow-lg shadow-red-500/30'}`}>
                                    {answer === quizQuestions[idx].correct ? '✓' : answer === -1 ? '⏱️' : '✗'}
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={handleRestart} className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all"><RotateCcw className="w-5 h-5" />Thi lại</button>
                            <button onClick={() => router.push('/')} className="flex items-center gap-2 px-6 py-3 bg-amber-500 rounded-xl text-gray-900 font-semibold hover:bg-amber-400 transition-all"><Home className="w-5 h-5" />Về trang chủ</button>
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 p-5 bg-white/5 rounded-2xl"><Heart className="w-6 h-6 text-rose-400 mx-auto mb-2" /><p className="text-white/60 text-sm italic">"Hãy siêng năng học hỏi Lời Chúa, đó là ngọn đèn soi cho con bước, ánh sáng chỉ đường con đi."<br />— Thánh Vịnh 119:105 —</p></motion.div>
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        .animate-float { animation: float linear infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
        </>
    );
}