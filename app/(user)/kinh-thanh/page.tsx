'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Search,
  Menu,
  X,
  Bookmark,
  Share2,
  Sparkles,
  Cross,
  Calendar,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

// Dữ liệu Kinh Thánh
const bibleBooks = [
  { id: 'genesis', name: 'Sáng Thế', nameEn: 'Genesis', testament: 'old', chapters: 50 },
  { id: 'exodus', name: 'Xuất Hành', nameEn: 'Exodus', testament: 'old', chapters: 40 },
  { id: 'psalms', name: 'Thánh Vịnh', nameEn: 'Psalms', testament: 'old', chapters: 150 },
  { id: 'proverbs', name: 'Châm Ngôn', nameEn: 'Proverbs', testament: 'old', chapters: 31 },
  { id: 'matthew', name: 'Mátthêu', nameEn: 'Matthew', testament: 'new', chapters: 28 },
  { id: 'mark', name: 'Máccô', nameEn: 'Mark', testament: 'new', chapters: 16 },
  { id: 'luke', name: 'Luca', nameEn: 'Luke', testament: 'new', chapters: 24 },
  { id: 'john', name: 'Gioan', nameEn: 'John', testament: 'new', chapters: 21 },
  { id: 'romans', name: 'Rôma', nameEn: 'Romans', testament: 'new', chapters: 16 },
  { id: 'corinthians', name: 'Côrintô', nameEn: 'Corinthians', testament: 'new', chapters: 16 },
];

// Dữ liệu câu Kinh Thánh
const verses = [
  {
    id: 1,
    book: "Gioan",
    bookEn: "John",
    chapter: 3,
    verse: 16,
    viet: "Thiên Chúa yêu thế gian đến nỗi đã ban Con Một của Người, để ai tin vào Con của Người thì khỏi phải chết, nhưng được sống muôn đời.",
    eng: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    tags: ["tình yêu", "sự sống"],
    popular: true,
  },
  {
    id: 2,
    book: "Thánh Vịnh",
    bookEn: "Psalms",
    chapter: 23,
    verse: 1,
    viet: "Chúa là mục tử chăn dắt tôi, tôi chẳng thiếu thốn gì.",
    eng: "The Lord is my shepherd, I lack nothing.",
    tags: ["bình an"],
    popular: true,
  },
  {
    id: 3,
    book: "Mátthêu",
    bookEn: "Matthew",
    chapter: 5,
    verse: 3,
    viet: "Phúc thay ai có tâm hồn nghèo khó, vì Nước Trời là của họ.",
    eng: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
    tags: ["phúc"],
    popular: true,
  },
  {
    id: 4,
    book: "Rôma",
    bookEn: "Romans",
    chapter: 8,
    verse: 28,
    viet: "Chúng ta biết rằng mọi sự đều sinh ích cho những ai yêu mến Thiên Chúa.",
    eng: "And we know that in all things God works for the good of those who love him.",
    tags: ["hy vọng"],
    popular: true,
  },
  {
    id: 5,
    book: "Gioan",
    bookEn: "John",
    chapter: 14,
    verse: 6,
    viet: "Chúa Giêsu đáp: 'Thầy là con đường, là sự thật và là sự sống. Không ai đến được với Chúa Cha mà không qua Thầy.'",
    eng: "Jesus answered: 'I am the way and the truth and the life. No one comes to the Father except through me.'",
    tags: ["con đường", "chân lý"],
    popular: false,
  },
  {
    id: 6,
    book: "Thánh Vịnh",
    bookEn: "Psalms",
    chapter: 121,
    verse: 1,
    viet: "Tôi ngước mắt lên nhìn núi, ơn cứu giúp tôi đến từ đâu?",
    eng: "I lift up my eyes to the mountains—where does my help come from?",
    tags: ["cứu giúp", "hy vọng"],
    popular: false,
  },
];

// Component background động Công Giáo (xử lý hydration error)
function CatholicAnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [randomValues, setRandomValues] = useState({
    crosses: [] as Array<{ top: string; left: string; delay: string; duration: string }>,
    roses: [] as Array<{ top: string; left: string; delay: string; duration: string }>,
    dusts: [] as Array<{ width: string; height: string; top: string; left: string; opacity: string; delay: string; duration: string }>,
  });

  useEffect(() => {
    setMounted(true);
    // Tạo giá trị random sau khi mount để tránh hydration error
    setRandomValues({
      crosses: Array.from({ length: 12 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${15 + Math.random() * 15}s`,
      })),
      roses: Array.from({ length: 20 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${12 + Math.random() * 18}s`,
      })),
      dusts: Array.from({ length: 80 }).map(() => ({
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: `${0.3 + Math.random() * 0.4}`,
        delay: `${Math.random() * 15}s`,
        duration: `${10 + Math.random() * 15}s`,
      })),
    });
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
    );
  }

  return (
    <>
      {/* Lớp nền chính */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 animate-gradient" />
      
      {/* Ánh sáng Thánh Thể */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl animate-pulse-center" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-300/5 rounded-full blur-2xl animate-pulse-center-slow" />
      </div>

      {/* Thánh giá bay */}
      <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
        {randomValues.crosses.map((style, i) => (
          <div
            key={`cross-${i}`}
            className="absolute text-amber-400/20 text-2xl animate-float-cross"
            style={{
              top: style.top,
              left: style.left,
              animationDelay: style.delay,
              animationDuration: style.duration,
            }}
          >
            ✝
          </div>
        ))}
      </div>

      {/* Chim Bồ Câu */}
      <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
        <div className="absolute top-1/4 left-1/4 text-white/10 text-6xl animate-dove-1">🕊️</div>
        <div className="absolute top-1/3 right-1/3 text-white/10 text-5xl animate-dove-2">🕊️</div>
        <div className="absolute bottom-1/4 left-1/3 text-white/10 text-4xl animate-dove-3">🕊️</div>
      </div>

      {/* Hoa Mân Côi */}
      <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
        {randomValues.roses.map((style, i) => (
          <div
            key={`rose-${i}`}
            className="absolute text-pink-400/15 text-xl animate-float-rose"
            style={{
              top: style.top,
              left: style.left,
              animationDelay: style.delay,
              animationDuration: style.duration,
            }}
          >
            🌹
          </div>
        ))}
      </div>

      {/* Tia sáng */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-amber-400/40 to-transparent animate-light-ray-1" />
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-amber-300/30 to-transparent animate-light-ray-2" />
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-amber-400/25 to-transparent animate-light-ray-3" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/20 to-transparent animate-light-ray-4" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/15 to-transparent animate-light-ray-5" />
      </div>

      {/* Hạt bụi vàng */}
      <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
        {randomValues.dusts.map((style, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full animate-float-bless"
            style={{
              width: style.width,
              height: style.height,
              top: style.top,
              left: style.left,
              background: `rgba(251, 191, 36, ${style.opacity})`,
              boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(251, 191, 36, 0.5)`,
              animationDelay: style.delay,
              animationDuration: style.duration,
            }}
          />
        ))}
      </div>

      {/* Biểu tượng cố định */}
      <div className="fixed bottom-10 right-10 text-amber-400/15 text-7xl animate-float-bible pointer-events-none select-none">📖</div>
      <div className="fixed top-10 left-10 text-amber-400/10 text-6xl animate-float-bible-delayed pointer-events-none select-none">⛪</div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes pulse-center {
          0%, 100% { opacity: 0.05; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.3); }
        }
        @keyframes pulse-center-slow {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.1; transform: translate(-50%, -50%) scale(1.8); }
        }
        @keyframes float-cross {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-150px) rotate(15deg); opacity: 0; }
        }
        @keyframes dove-1 {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          25% { opacity: 0.4; }
          75% { opacity: 0.4; }
          100% { transform: translateX(150px) translateY(-100px); opacity: 0; }
        }
        @keyframes dove-2 {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          25% { opacity: 0.3; }
          75% { opacity: 0.3; }
          100% { transform: translateX(-120px) translateY(-80px); opacity: 0; }
        }
        @keyframes dove-3 {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          25% { opacity: 0.35; }
          75% { opacity: 0.35; }
          100% { transform: translateX(100px) translateY(-120px); opacity: 0; }
        }
        @keyframes float-rose {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
        }
        @keyframes light-ray-1 {
          0% { transform: translateY(-100%) rotate(10deg); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(1000%) rotate(10deg); opacity: 0; }
        }
        @keyframes light-ray-2 {
          0% { transform: translateY(-100%) rotate(-5deg); opacity: 0; }
          25% { opacity: 0.5; }
          75% { opacity: 0.5; }
          100% { transform: translateY(1000%) rotate(-5deg); opacity: 0; }
        }
        @keyframes light-ray-3 {
          0% { transform: translateY(-100%) rotate(8deg); opacity: 0; }
          30% { opacity: 0.4; }
          70% { opacity: 0.4; }
          100% { transform: translateY(1000%) rotate(8deg); opacity: 0; }
        }
        @keyframes light-ray-4 {
          0% { transform: translateY(-100%) rotate(-3deg); opacity: 0; }
          35% { opacity: 0.35; }
          65% { opacity: 0.35; }
          100% { transform: translateY(1000%) rotate(-3deg); opacity: 0; }
        }
        @keyframes light-ray-5 {
          0% { transform: translateY(-100%) rotate(6deg); opacity: 0; }
          28% { opacity: 0.3; }
          72% { opacity: 0.3; }
          100% { transform: translateY(1000%) rotate(6deg); opacity: 0; }
        }
        @keyframes float-bless {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          25% { opacity: 0.8; }
          75% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(30px); opacity: 0; }
        }
        @keyframes float-bible {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-bible-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-5deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 20s ease infinite;
        }
        .animate-pulse-center {
          animation: pulse-center 6s ease-in-out infinite;
        }
        .animate-pulse-center-slow {
          animation: pulse-center-slow 10s ease-in-out infinite;
        }
        .animate-float-cross {
          animation: float-cross linear infinite;
        }
        .animate-dove-1 {
          animation: dove-1 18s ease-in-out infinite;
        }
        .animate-dove-2 {
          animation: dove-2 20s ease-in-out infinite;
        }
        .animate-dove-3 {
          animation: dove-3 22s ease-in-out infinite;
        }
        .animate-float-rose {
          animation: float-rose linear infinite;
        }
        .animate-light-ray-1 {
          animation: light-ray-1 12s linear infinite;
        }
        .animate-light-ray-2 {
          animation: light-ray-2 14s linear infinite;
        }
        .animate-light-ray-3 {
          animation: light-ray-3 16s linear infinite;
        }
        .animate-light-ray-4 {
          animation: light-ray-4 11s linear infinite;
        }
        .animate-light-ray-5 {
          animation: light-ray-5 13s linear infinite;
        }
        .animate-float-bless {
          animation: float-bless linear infinite;
        }
        .animate-float-bible {
          animation: float-bible 6s ease-in-out infinite;
        }
        .animate-float-bible-delayed {
          animation: float-bible-delayed 7s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default function KinhThanhPage() {
  const [selectedBook, setSelectedBook] = useState('john');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState('text-lg');
  const [activeTab, setActiveTab] = useState<'all' | 'popular' | 'saved'>('all');
  const [savedVerses, setSavedVerses] = useState<number[]>([]);

  // Load saved verses from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedVerses');
    if (saved) {
      setSavedVerses(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when savedVerses changes
  useEffect(() => {
    localStorage.setItem('savedVerses', JSON.stringify(savedVerses));
  }, [savedVerses]);

  const filteredVerses = verses.filter((verse) => {
    const matchesSearch = 
      verse.viet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verse.eng.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verse.book.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verse.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (activeTab === 'popular') return matchesSearch && verse.popular;
    if (activeTab === 'saved') return matchesSearch && savedVerses.includes(verse.id);
    return matchesSearch;
  });

  const toggleSave = (id: number) => {
    setSavedVerses(prev => 
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const verseOfDay = verses[new Date().getDate() % verses.length];

  return (
    <div className="relative min-h-screen">
      <CatholicAnimatedBackground />
      
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-white/20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Cross className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="font-serif text-lg font-bold text-slate-800">Kinh Thánh Song Ngữ</h1>
                  <p className="text-[10px] text-slate-500 tracking-wide">VIETNAMESE — ENGLISH</p>
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm câu Kinh Thánh..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-80 px-4 py-2 pl-10 bg-white/90 rounded-full text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>

                <div className="flex items-center gap-1 bg-white/90 rounded-full p-1">
                  <button
                    onClick={() => setFontSize('text-base')}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${fontSize === 'text-base' ? 'bg-amber-600 text-white' : 'text-slate-500'}`}
                  >
                    Nhỏ
                  </button>
                  <button
                    onClick={() => setFontSize('text-lg')}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${fontSize === 'text-lg' ? 'bg-amber-600 text-white' : 'text-slate-500'}`}
                  >
                    Vừa
                  </button>
                  <button
                    onClick={() => setFontSize('text-xl')}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${fontSize === 'text-xl' ? 'bg-amber-600 text-white' : 'text-slate-500'}`}
                  >
                    Lớn
                  </button>
                </div>
              </div>

              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-all"
              >
                <Menu className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className={`
              fixed inset-y-0 left-0 z-50 w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-72 lg:shadow-none lg:bg-white/80
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-slate-100 flex justify-between items-center lg:hidden">
                  <h2 className="font-semibold text-slate-800">Danh mục sách</h2>
                  <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-lg hover:bg-slate-100">
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  <div>
                    <h3 className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">Cựu Ước</h3>
                    <div className="space-y-1">
                      {bibleBooks.filter(b => b.testament === 'old').map((book) => (
                        <button
                          key={book.id}
                          onClick={() => { setSelectedBook(book.id); setIsSidebarOpen(false); }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                            selectedBook === book.id ? 'bg-amber-50 text-amber-700 font-medium border-l-2 border-amber-600' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{book.name}</span>
                            <span className="text-xs text-slate-400">{book.chapters} ch</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">Tân Ước</h3>
                    <div className="space-y-1">
                      {bibleBooks.filter(b => b.testament === 'new').map((book) => (
                        <button
                          key={book.id}
                          onClick={() => { setSelectedBook(book.id); setIsSidebarOpen(false); }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                            selectedBook === book.id ? 'bg-amber-50 text-amber-700 font-medium border-l-2 border-amber-600' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{book.name}</span>
                            <span className="text-xs text-slate-400">{book.chapters} ch</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Overlay cho mobile sidebar */}
            {isSidebarOpen && (
              <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Main Content */}
            <main className="flex-1">
              {/* Verse of the Day */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/30 p-6 mb-8 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Câu Kinh Thánh hôm nay</span>
                </div>
                <p className={`${fontSize} text-slate-700 leading-relaxed font-serif mb-4`}>
                  "{verseOfDay.viet}"
                </p>
                <p className="text-slate-500 italic mb-3">
                  {verseOfDay.eng}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-amber-600 font-medium">
                    — {verseOfDay.book} {verseOfDay.chapter}:{verseOfDay.verse} —
                  </p>
                </div>
              </motion.div>

              {/* Tabs */}
              <div className="flex items-center gap-2 mb-6 border-b border-white/30">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    activeTab === 'all' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-white/70 hover:text-white'
                  }`}
                >
                  Tất cả
                </button>
                <button
                  onClick={() => setActiveTab('popular')}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    activeTab === 'popular' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-white/70 hover:text-white'
                  }`}
                >
                  Phổ biến
                </button>
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    activeTab === 'saved' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-white/70 hover:text-white'
                  }`}
                >
                  Đã lưu
                  {savedVerses.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-amber-100 text-amber-600 rounded-full">
                      {savedVerses.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Verse List */}
              {filteredVerses.length > 0 ? (
                <div className="space-y-4">
                  {filteredVerses.map((verse, idx) => (
                    <motion.div
                      key={verse.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group bg-white/90 backdrop-blur-md rounded-xl border border-white/20 p-5 hover:shadow-xl transition-all duration-300 hover:bg-white/95"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                              {verse.book} {verse.chapter}:{verse.verse}
                            </span>
                            {verse.popular && (
                              <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                                🔥 Phổ biến
                              </span>
                            )}
                          </div>
                          <p className={`${fontSize} text-slate-700 leading-relaxed mb-3 font-serif`}>
                            {verse.viet}
                          </p>
                          <p className="text-slate-500 text-sm italic leading-relaxed">
                            {verse.eng}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {verse.tags.map((tag, i) => (
                              <span key={i} className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => toggleSave(verse.id)}
                            className="p-2 rounded-lg hover:bg-slate-100 transition-all"
                          >
                            <Bookmark className={`w-4 h-4 ${savedVerses.includes(verse.id) ? 'text-amber-600 fill-amber-600' : 'text-slate-400'}`} />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-slate-100 transition-all">
                            <Share2 className="w-4 h-4 text-slate-400" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl">
                  <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Không tìm thấy câu Kinh Thánh nào.</p>
                </div>
              )}
            </main>

            {/* Right Sidebar */}
            <aside className="hidden xl:block w-64">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-semibold text-slate-700">Thống kê nhanh</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tổng câu</span>
                      <span className="font-medium text-slate-700">{verses.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Đã lưu</span>
                      <span className="font-medium text-slate-700">{savedVerses.length}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-4 border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-semibold text-slate-700">Câu cảm hứng</h3>
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "Hãy siêng năng học hỏi Lời Chúa, đó là ngọn đèn soi cho con bước."
                  </p>
                  <p className="text-xs text-slate-400 mt-2">— Thánh Vịnh 119:105 —</p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Nút back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-10 h-10 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition-all flex items-center justify-center z-20"
        >
          ↑
        </button>
      </div>
    </div>
  );
}