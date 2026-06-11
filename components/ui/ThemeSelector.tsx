'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CalendarIcon, CheckIcon } from '@/components/icons';

// Các mùa phụng vụ
export type LiturgicalSeason = 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';

// Cấu hình màu sắc và style cho từng mùa
export const liturgicalSeasons: Record<LiturgicalSeason, {
  name: string;
  icon: string;
  description: string;
  // Màu sắc
  primary: string;
  primaryLight: string;
  primaryDark: string;
  // Background
  bgGradient: string;
  bgColor: string;
  // Card
  cardBg: string;
  cardBorder: string;
  // Text
  text: string;
  textMuted: string;
  // Tab
  tabActiveBg: string;
  tabActiveText: string;
  tabInactiveBg: string;
  tabInactiveText: string;
  // Hiệu ứng đặc biệt
  glowEffect?: string;
}> = {
  advent: {
    name: 'Mùa Vọng',
    icon: '🕯️',
    description: 'Chờ đợi & hy vọng',
    primary: '#6B3FA0',
    primaryLight: '#8B5CC8',
    primaryDark: '#4A2870',
    bgGradient: 'from-purple-50 via-purple-100/30 to-purple-50',
    bgColor: 'bg-purple-50',
    cardBg: 'bg-white/90',
    cardBorder: 'border-purple-200',
    text: 'text-purple-900',
    textMuted: 'text-purple-600',
    tabActiveBg: '#6B3FA0',
    tabActiveText: '#ffffff',
    tabInactiveBg: 'rgba(107,63,160,0.1)',
    tabInactiveText: '#7A5A98',
    glowEffect: 'radial-gradient(ellipse at 80% -10%, rgba(107,63,160,0.15) 0%, transparent 60%)',
  },
  christmas: {
    name: 'Giáng Sinh',
    icon: '🎄',
    description: 'Ngôi Lời nhập thể',
    primary: '#C8962A',
    primaryLight: '#E8B84A',
    primaryDark: '#9A6E18',
    bgGradient: 'from-red-50 via-green-50/30 to-red-50',
    bgColor: 'bg-gradient-to-br from-red-50 to-green-50',
    cardBg: 'bg-white/95',
    cardBorder: 'border-amber-200',
    text: 'text-red-900',
    textMuted: 'text-red-600',
    tabActiveBg: '#C8962A',
    tabActiveText: '#ffffff',
    tabInactiveBg: 'rgba(200,150,42,0.1)',
    tabInactiveText: '#9A7A3A',
    glowEffect: 'radial-gradient(ellipse at 90% -5%, rgba(200,150,42,0.2) 0%, transparent 55%)',
  },
  lent: {
    name: 'Mùa Chay',
    icon: '✝️',
    description: 'Sám hối & thinh lặng',
    primary: '#7D3C6A',
    primaryLight: '#A05088',
    primaryDark: '#561E4A',
    bgGradient: 'from-rose-50 via-purple-50/30 to-rose-50',
    bgColor: 'bg-gradient-to-br from-rose-50 to-purple-50',
    cardBg: 'bg-white/90',
    cardBorder: 'border-rose-200',
    text: 'text-rose-900',
    textMuted: 'text-rose-600',
    tabActiveBg: '#7D3C6A',
    tabActiveText: '#ffffff',
    tabInactiveBg: 'rgba(125,60,106,0.1)',
    tabInactiveText: '#9A6888',
    glowEffect: 'radial-gradient(ellipse at 75% -15%, rgba(125,60,106,0.15) 0%, transparent 60%)',
  },
  easter: {
    name: 'Mùa Phục Sinh',
    icon: '🐣',
    description: 'Ánh sáng & niềm vui',
    primary: '#D4AF37',
    primaryLight: '#F0CE5C',
    primaryDark: '#A88520',
    bgGradient: 'from-yellow-50 via-pink-50/30 to-yellow-50',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-pink-50',
    cardBg: 'bg-white/95',
    cardBorder: 'border-yellow-200',
    text: 'text-yellow-800',
    textMuted: 'text-yellow-600',
    tabActiveBg: '#D4AF37',
    tabActiveText: '#ffffff',
    tabInactiveBg: 'rgba(212,175,55,0.1)',
    tabInactiveText: '#9A8830',
    glowEffect: 'radial-gradient(ellipse at 80% -10%, rgba(212,175,55,0.2) 0%, transparent 55%)',
  },
  ordinary: {
    name: 'Mùa Thường Niên',
    icon: '🌿',
    description: 'Lớn lên trong đức tin',
    primary: '#2E7D52',
    primaryLight: '#4A9E70',
    primaryDark: '#1C5438',
    bgGradient: 'from-green-50 via-emerald-50/30 to-green-50',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    cardBg: 'bg-white/95',
    cardBorder: 'border-green-200',
    text: 'text-green-900',
    textMuted: 'text-green-600',
    tabActiveBg: '#2E7D52',
    tabActiveText: '#ffffff',
    tabInactiveBg: 'rgba(46,125,82,0.08)',
    tabInactiveText: '#5A8C6A',
    glowEffect: 'radial-gradient(ellipse at 85% -10%, rgba(46,125,82,0.12) 0%, transparent 58%)',
  },
};

// Component chọn mùa
export function SeasonSelector({ 
  currentSeason, 
  onSeasonChange 
}: { 
  currentSeason: LiturgicalSeason; 
  onSeasonChange: (season: LiturgicalSeason) => void;
}) {
  const [open, setOpen] = useState(false);
  const current = liturgicalSeasons[currentSeason];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95"
        style={{
          background: current.primary,
          color: 'white',
        }}
      >
        <CalendarIcon className="w-4 h-4" />
        <span className="hidden sm:inline">{current.name}</span>
        <span className="text-base">{current.icon}</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-64 rounded-2xl z-50 overflow-hidden shadow-2xl bg-white border">
            <div className="px-4 py-3 border-b bg-gradient-to-r from-amber-50 to-orange-50">
              <p className="text-sm font-semibold">🌸 Mùa phụng vụ</p>
              <p className="text-[10px] text-gray-500">Chọn mùa để thay đổi giao diện</p>
            </div>
            <div className="p-2">
              {(Object.keys(liturgicalSeasons) as LiturgicalSeason[]).map((key) => {
                const season = liturgicalSeasons[key];
                const active = currentSeason === key;
                return (
                  <button
                    key={key}
                    onClick={() => { onSeasonChange(key); setOpen(false); }}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all hover:scale-102",
                      active && "ring-1 ring-amber-500 bg-amber-50"
                    )}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                      style={{ background: season.primary, color: 'white' }}
                    >
                      {season.icon}
                    </div>
                    <div className="flex-1">
                      <p className={cn("text-sm font-medium", active && "text-amber-600")}>{season.name}</p>
                      <p className="text-[10px] text-gray-400">{season.description}</p>
                    </div>
                    {active && <CheckIcon className="w-4 h-4 text-amber-500" />}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Hook sử dụng mùa
export function useSeason() {
  const [season, setSeason] = useState<LiturgicalSeason>('ordinary');

  useEffect(() => {
    const saved = localStorage.getItem('liturgicalSeason') as LiturgicalSeason;
    if (saved && liturgicalSeasons[saved]) setSeason(saved);
  }, []);

  const changeSeason = (newSeason: LiturgicalSeason) => {
    setSeason(newSeason);
    localStorage.setItem('liturgicalSeason', newSeason);
  };

  return { season, changeSeason, seasonConfig: liturgicalSeasons[season] };
}