// User types
export interface User {
  id: number;
  email: string;
  fullName: string;
  phone?: string;
  birthDate?: Date;
  churchId?: number;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreateInput {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
  birthDate?: Date;
  churchId?: number;
}

// Church types
export interface Church {
  id: number;
  name: string;
  address?: string;
  diocese?: string; // Giáo phận
  parish?: string; // Giáo xứ
  phone?: string;
  createdAt: Date;
}

export interface ChurchCreateInput {
  name: string;
  address?: string;
  diocese?: string;
  parish?: string;
  phone?: string;
}

// Mass types
export type MassType = 'daily' | 'sunday' | 'special';
export type LiturgicalColor = 'white' | 'purple' | 'red' | 'green' | 'gold' | 'rose' | 'black';

export interface Mass {
  id: number;
  churchId: number;
  church?: Church;
  title: string;
  description?: string;
  massDate: Date;
  massTime: string;
  massType: MassType;
  liturgicalColor?: LiturgicalColor;
  createdAt: Date;
}

export interface MassCreateInput {
  churchId: number;
  title: string;
  description?: string;
  massDate: Date;
  massTime: string;
  massType: MassType;
  liturgicalColor?: LiturgicalColor;
}

// Daily Gospel types
export interface DailyGospel {
  id: number;
  date: Date;
  firstReading?: string; // Bài đọc 1
  psalm?: string; // Đáp ca
  secondReading?: string; // Bài đọc 2
  gospel: string; // Tin Mừng
  reflection?: string; // Suy niệm
  liturgicalSeason?: string; // Mùa phụng vụ
  createdAt: Date;
}

export interface DailyGospelCreateInput {
  date: Date;
  firstReading?: string;
  psalm?: string;
  secondReading?: string;
  gospel: string;
  reflection?: string;
  liturgicalSeason?: string;
}

// Quiz types
export interface QuizCategory {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  questionCount?: number;
  createdAt: Date;
}

export interface QuizCategoryCreateInput {
  name: string;
  description?: string;
  icon?: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';
export type CorrectAnswer = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  categoryId: number;
  category?: QuizCategory;
  question: string;
  optionA: string;
  optionB: string;
  optionC?: string;
  optionD?: string;
  correctAnswer: CorrectAnswer;
  explanation?: string;
  difficulty: Difficulty;
  createdAt: Date;
}

export interface QuestionCreateInput {
  categoryId: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC?: string;
  optionD?: string;
  correctAnswer: CorrectAnswer;
  explanation?: string;
  difficulty?: Difficulty;
}

export interface QuizResult {
  id: number;
  userId: number;
  user?: User;
  categoryId: number;
  category?: QuizCategory;
  score: number;
  totalQuestions: number;
  timeTaken?: number; // seconds
  completedAt: Date;
}

export interface QuizResultCreateInput {
  userId: number;
  categoryId: number;
  score: number;
  totalQuestions: number;
  timeTaken?: number;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Quiz Session
export interface QuizSession {
  categoryId: number;
  questions: Question[];
  currentIndex: number;
  answers: Record<number, CorrectAnswer>;
  startTime: Date;
}
