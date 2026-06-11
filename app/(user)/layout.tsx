
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { cn } from '@/lib/utils';
// import {
//   CrossIcon,
//   HomeIcon,
//   CalendarIcon,
//   BookOpenIcon,
//   BrainIcon,
//   UserIcon,
//   LogOutIcon,
//   MenuIcon,
//   XIcon,
// } from '@/components/icons';

// // ─────────────────────────────────────────────────────────────
// // MÙA PHỤNG VỤ CÔNG GIÁO
// // ─────────────────────────────────────────────────────────────
// type LiturgicalSeason = 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';

// interface ThemeColors {
//   primary: string;
//   primaryLight: string;
//   primaryDark: string;
//   background: string;
//   surface: string;
//   surfaceGlass: string;
//   text: string;
//   textMuted: string;
//   accent: string;
//   border: string;
//   glowA: string;
//   glowB: string;
//   navPill: string;
//   badge: string;
// }

// const liturgicalThemes: Record<LiturgicalSeason, ThemeColors> = {
//   advent: {
//     primary: '#6B3FA0',
//     primaryLight: '#8B5CC8',
//     primaryDark: '#4A2870',
//     background: '#F4F0FA',
//     surface: '#FEFCFF',
//     surfaceGlass: 'rgba(254,252,255,0.92)',
//     text: '#1E1230',
//     textMuted: '#7A5A98',
//     accent: '#F5C842',
//     border: 'rgba(107,63,160,0.12)',
//     glowA: 'radial-gradient(ellipse at 80% -10%, rgba(107,63,160,0.18) 0%, transparent 60%)',
//     glowB: 'radial-gradient(ellipse at -10% 100%, rgba(245,200,66,0.10) 0%, transparent 55%)',
//     navPill: 'rgba(107,63,160,0.10)',
//     badge: '#6B3FA0',
//   },
//   christmas: {
//     primary: '#C8962A',
//     primaryLight: '#E8B84A',
//     primaryDark: '#9A6E18',
//     background: '#FDFAF3',
//     surface: '#FFFEFB',
//     surfaceGlass: 'rgba(255,254,251,0.92)',
//     text: '#2A1F08',
//     textMuted: '#9A7A3A',
//     accent: '#C0392B',
//     border: 'rgba(200,150,42,0.12)',
//     glowA: 'radial-gradient(ellipse at 90% -5%, rgba(200,150,42,0.18) 0%, transparent 55%)',
//     glowB: 'radial-gradient(ellipse at -5% 90%, rgba(192,57,43,0.08) 0%, transparent 55%)',
//     navPill: 'rgba(200,150,42,0.10)',
//     badge: '#C8962A',
//   },
//   lent: {
//     primary: '#7D3C6A',
//     primaryLight: '#A05088',
//     primaryDark: '#561E4A',
//     background: '#F5EEF5',
//     surface: '#FDF8FD',
//     surfaceGlass: 'rgba(253,248,253,0.92)',
//     text: '#1E0C1C',
//     textMuted: '#9A6888',
//     accent: '#A0522D',
//     border: 'rgba(125,60,106,0.12)',
//     glowA: 'radial-gradient(ellipse at 75% -15%, rgba(125,60,106,0.15) 0%, transparent 60%)',
//     glowB: 'radial-gradient(ellipse at 10% 95%, rgba(160,82,45,0.08) 0%, transparent 55%)',
//     navPill: 'rgba(125,60,106,0.10)',
//     badge: '#7D3C6A',
//   },
//   easter: {
//     primary: '#D4AF37',
//     primaryLight: '#F0CE5C',
//     primaryDark: '#A88520',
//     background: '#FDFBF0',
//     surface: '#FFFEF8',
//     surfaceGlass: 'rgba(255,254,248,0.92)',
//     text: '#1A1600',
//     textMuted: '#9A8830',
//     accent: '#2E8B57',
//     border: 'rgba(212,175,55,0.12)',
//     glowA: 'radial-gradient(ellipse at 80% -10%, rgba(212,175,55,0.18) 0%, transparent 55%)',
//     glowB: 'radial-gradient(ellipse at 5% 100%, rgba(46,139,87,0.08) 0%, transparent 50%)',
//     navPill: 'rgba(212,175,55,0.10)',
//     badge: '#D4AF37',
//   },
//   ordinary: {
//     primary: '#2E7D52',
//     primaryLight: '#4A9E70',
//     primaryDark: '#1C5438',
//     background: '#F0F7F2',
//     surface: '#F8FCF9',
//     surfaceGlass: 'rgba(248,252,249,0.92)',
//     text: '#0E2018',
//     textMuted: '#5A8C6A',
//     accent: '#8B6914',
//     border: 'rgba(46,125,82,0.12)',
//     glowA: 'radial-gradient(ellipse at 85% -10%, rgba(46,125,82,0.15) 0%, transparent 58%)',
//     glowB: 'radial-gradient(ellipse at -5% 90%, rgba(139,105,20,0.08) 0%, transparent 55%)',
//     navPill: 'rgba(46,125,82,0.08)',
//     badge: '#2E7D52',
//   },
// };

// const seasonMeta: Record<LiturgicalSeason, { label: string; icon: string; desc: string }> = {
//   advent: { label: 'Mùa Vọng', icon: '🕯️', desc: 'Chờ đợi & hy vọng' },
//   christmas: { label: 'Giáng Sinh', icon: '✨', desc: 'Ngôi Lời nhập thể' },
//   lent: { label: 'Mùa Chay', icon: '✝️', desc: 'Sám hối & thinh lặng' },
//   easter: { label: 'Phục Sinh', icon: '🌅', desc: 'Ánh sáng & niềm vui' },
//   ordinary: { label: 'Thường Niên', icon: '🌿', desc: 'Lớn lên trong đức tin' },
// };

// // Các mục chính (hiển thị trực tiếp)
// const mainNavItems = [
//   { href: '/dashboard', label: 'Trang chủ', icon: '🏠' },
//   { href: '/lich-le', label: 'Lịch lễ', icon: '📅' },
//   { href: '/loi-chua', label: 'Lời Chúa', icon: '📖' },
//   { href: '/su-kien', label: 'Sự kiện', icon: '🎪' },
//   { href: '/nha-tho', label: 'Nhà Thờ', icon: '⛪' },
//   { href: '/xem-le', label: 'Xem lễ', icon: '📺' },
// ];

// // Các mục trong dropdown "Khám phá"
// const exploreItems = [
//   { href: '/trac-nghiem', label: 'Trắc nghiệm', icon: '📝', desc: 'Kiểm tra giáo lý', isNew: true },
//   { href: '/thi-co-thuong', label: 'Thi có thưởng', icon: '🏆', desc: 'Nhận quà hấp dẫn', isNew: true },
//   { href: '/qua-tang', label: 'Kho quà tặng', icon: '🎁', desc: 'Đổi điểm lấy quà', isNew: true },
//   { href: '/ai-ho-tro', label: 'AI Trợ Tá', icon: '🤖', desc: 'Hỏi đáp Kinh Thánh' },
//   { href: '/nhac-mua', label: 'Thánh Ca', icon: '🎵', desc: 'Nghe nhạc thánh' },
//   { href: '/kinh-thanh', label: 'Kinh Thánh', icon: '📖', desc: 'Song ngữ Việt-Anh' },
// ];

// // ─── Dropdown Khám phá ───────────────────────────────────────
// function ExploreDropdown({ theme }: { theme: ThemeColors }) {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Kiểm tra token
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   // Xác định những trang cần đăng nhập
//   const needLoginPaths = ['/trac-nghiem', '/thi-co-thuong', '/qua-tang'];

//   const handleLinkClick = (e: React.MouseEvent, href: string) => {
//     if (needLoginPaths.includes(href) && !isLoggedIn) {
//       e.preventDefault();
//       localStorage.setItem('redirectAfterLogin', href);
//       window.location.href = '/login';
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setOpen(!open)}
//         className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-black/5 ${open ? 'bg-black/5' : ''}`}
//         style={{ color: theme.textMuted }}
//       >
//         <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `${theme.primary}10`, color: theme.primary }}>
//           <span className="text-sm">🌟</span>
//         </div>
//         <span>Khám phá</span>
//         <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={cn("transition-transform duration-200", open && "rotate-180")}>
//           <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </button>

//       {open && (
//         <>
//           <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
//           <div
//             className="absolute top-full left-0 mt-2 w-56 rounded-xl z-50 overflow-hidden shadow-lg"
//             style={{
//               background: theme.surface,
//               border: `1px solid ${theme.border}`,
//               boxShadow: `0 10px 40px rgba(0,0,0,0.1)`,
//             }}
//           >
//             <div className="px-4 py-2 border-b" style={{ borderColor: theme.border }}>
//               <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.textMuted }}>
//                 🌟 Khám phá thêm
//               </p>
//             </div>
//             {exploreItems.map((item) => {
//               const active = pathname === item.href;
//               const needLogin = needLoginPaths.includes(item.href);
              
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={(e) => handleLinkClick(e, item.href)}
//                   className="w-full flex items-center gap-3 px-4 py-2.5 transition-all duration-150 hover:bg-black/5"
//                   style={{
//                     background: active ? `${theme.badge}10` : 'transparent',
//                     borderLeft: active ? `2px solid ${theme.badge}` : '2px solid transparent',
//                   }}
//                 >
//                   <div
//                     className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
//                     style={{ background: `${theme.primary}10`, color: theme.primary }}
//                   >
//                     <span className="text-sm">{item.icon}</span>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-1.5">
//                       <p className="text-sm font-medium" style={{ color: active ? theme.primaryDark : theme.text }}>
//                         {item.label}
//                       </p>
//                       {item.isNew && (
//                         <span className="text-[9px] bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded-full">Mới</span>
//                       )}
//                       {needLogin && !isLoggedIn && (
//                         <span className="text-[8px] bg-red-500/20 text-red-500 px-1 py-0.5 rounded-full">🔒</span>
//                       )}
//                     </div>
//                     <p className="text-[10px] leading-tight mt-0.5" style={{ color: theme.textMuted }}>
//                       {item.desc}
//                     </p>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // ─── Season Picker ───────────────────────────────────────────
// function SeasonPicker({
//   currentSeason,
//   onSeasonChange,
// }: {
//   currentSeason: LiturgicalSeason;
//   onSeasonChange: (s: LiturgicalSeason) => void;
// }) {
//   const [open, setOpen] = useState(false);
//   const theme = liturgicalThemes[currentSeason];
//   const meta = seasonMeta[currentSeason];

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-95"
//         style={{
//           background: `${theme.badge}12`,
//           color: theme.primary,
//           border: `1px solid ${theme.border}`,
//         }}
//       >
//         <span className="text-base leading-none">{meta.icon}</span>
//         <span className="hidden sm:inline">{meta.label}</span>
//         <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={cn("transition-transform duration-200", open && "rotate-180")}>
//           <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </button>

//       {open && (
//         <>
//           <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
//           <div
//             className="absolute right-0 mt-2 w-56 rounded-xl z-50 overflow-hidden shadow-lg"
//             style={{
//               background: theme.surface,
//               border: `1px solid ${theme.border}`,
//               boxShadow: `0 10px 40px rgba(0,0,0,0.1)`,
//             }}
//           >
//             <div className="px-4 py-2 border-b" style={{ borderColor: theme.border }}>
//               <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.textMuted }}>
//                 Năm Phụng Vụ
//               </p>
//             </div>

//             {(Object.keys(seasonMeta) as LiturgicalSeason[]).map((key) => {
//               const m = seasonMeta[key];
//               const t = liturgicalThemes[key];
//               const active = currentSeason === key;
//               return (
//                 <button
//                   key={key}
//                   onClick={() => { onSeasonChange(key); setOpen(false); }}
//                   className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-150 hover:bg-black/5"
//                   style={{
//                     background: active ? `${t.badge}10` : 'transparent',
//                     borderLeft: active ? `2px solid ${t.badge}` : '2px solid transparent',
//                   }}
//                 >
//                   <span className="text-lg leading-none">{m.icon}</span>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium" style={{ color: active ? t.primary : t.textMuted }}>
//                       {m.label}
//                     </p>
//                     <p className="text-[10px] leading-tight mt-0.5" style={{ color: t.textMuted }}>
//                       {m.desc}
//                     </p>
//                   </div>
//                   {active && (
//                     <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
//                       style={{ background: t.badge }}>
//                       <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
//                         <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                       </svg>
//                     </div>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // ─── Main Layout ─────────────────────────────────────────────
// export default function UserLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [season, setSeason] = useState<LiturgicalSeason>('ordinary');

//   const theme = liturgicalThemes[season];

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 8);
//     window.addEventListener('scroll', fn, { passive: true });
//     return () => window.removeEventListener('scroll', fn);
//   }, []);

//   return (
//     <div
//       className="min-h-screen transition-colors duration-500"
//       style={{
//         background: theme.background,
//         fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
//       }}
//     >
//       {/* Ambient glow background */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
//         <div className="absolute inset-0 transition-opacity duration-700" style={{ background: theme.glowA }} />
//         <div className="absolute inset-0 transition-opacity duration-700" style={{ background: theme.glowB }} />
//       </div>

//       {/* ══ HEADER ═══════════════════════════════════════════ */}
//       <header
//         className={cn(
//           'fixed top-0 inset-x-0 z-50 transition-all duration-300',
//           scrolled && 'shadow-sm'
//         )}
//         style={{
//           background: theme.surfaceGlass,
//           backdropFilter: 'blur(20px)',
//           borderBottom: `1px solid ${theme.border}`,
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16">

//             {/* Logo */}
//             <Link href="/dashboard" className="flex items-center gap-2.5 group shrink-0">
//               <div
//                 className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm transition-all duration-200 group-hover:scale-105"
//                 style={{
//                   background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`,
//                 }}
//               >
//                 <CrossIcon className="w-4 h-4 text-white" />
//               </div>
//               <div className="hidden sm:block">
//                 <p className="text-sm font-semibold tracking-tight" style={{ color: theme.text }}>
//                   Giáo Xứ Yên Lộ
//                 </p>
//                 <p className="text-[9px] leading-tight uppercase tracking-wide" style={{ color: theme.textMuted }}>
//                   {seasonMeta[season].icon} {seasonMeta[season].label}
//                 </p>
//               </div>
//               <p className="sm:hidden text-sm font-semibold" style={{ color: theme.text }}>GX Yên Lộ</p>
//             </Link>

//             {/* Desktop Nav - KHUNG TRÒN NHỎ GỌN NHƯ HEADER */}
//             <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/40 bg-background/60 px-1.5 py-1 backdrop-blur-sm">
//               {mainNavItems.map((item) => {
//                 const active = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:bg-black/5"
//                     style={{
//                       background: active ? theme.navPill : 'transparent',
//                       color: active ? theme.primaryDark : theme.textMuted,
//                     }}
//                   >
//                     <div
//                       className="w-5 h-5 rounded-md flex items-center justify-center"
//                       style={
//                         active
//                           ? { background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`, color: 'white' }
//                           : { background: `${theme.primary}10`, color: theme.primary }
//                       }
//                     >
//                       <span className="text-xs">{item.icon}</span>
//                     </div>
//                     <span className="text-xs sm:text-sm whitespace-nowrap">{item.label}</span>
//                   </Link>
//                 );
//               })}

//               {/* Dropdown Khám phá */}
//               <ExploreDropdown theme={theme} />
//             </div>

//             {/* Right controls - Hồ sơ & Đăng xuất ở BÊN NGOÀI khung */}
//             <div className="flex items-center gap-2">
//               <div className="hidden lg:flex items-center gap-1">
//                 <SeasonPicker currentSeason={season} onSeasonChange={setSeason} />

//                 <div className="w-px h-5 mx-0.5" style={{ background: theme.border }} />

//                 <Link
//                   href="/profile"
//                   className="flex items-center gap-2 px-2.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-black/5"
//                   style={{ color: theme.textMuted }}
//                 >
//                   <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `${theme.primary}10`, color: theme.primary }}>
//                     <UserIcon className="w-3.5 h-3.5" />
//                   </div>
//                   <span className="hidden xl:inline">Hồ sơ</span>
//                 </Link>

//                 <button
//                   onClick={() => { window.location.href = '/'; }}
//                   className="flex items-center gap-2 px-2.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-red-50/50"
//                   style={{ color: '#B04040' }}
//                 >
//                   <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(176,64,64,0.08)', color: '#B04040' }}>
//                     <LogOutIcon className="w-3.5 h-3.5" />
//                   </div>
//                   <span className="hidden xl:inline">Đăng xuất</span>
//                 </button>
//               </div>

//               {/* Mobile season picker */}
//               <div className="lg:hidden">
//                 <SeasonPicker currentSeason={season} onSeasonChange={setSeason} />
//               </div>

//               {/* Mobile menu button */}
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 active:scale-90"
//                 style={{ background: mobileOpen ? `${theme.primary}12` : 'transparent', color: theme.primaryDark }}
//               >
//                 {mobileOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Drawer (giữ nguyên, đã có khám phá riêng) */}
//         {mobileOpen && (
//           <div className="lg:hidden border-t mt-1" style={{ borderColor: theme.border, background: theme.surfaceGlass }}>
//             <div className="px-4 py-3 space-y-1 max-h-[calc(100dvh-60px)] overflow-y-auto">
//               {mainNavItems.map((item) => {
//                 const active = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="flex items-center gap-3 px-3 py-2.5 rounded-full transition-all duration-200"
//                     style={{
//                       background: active ? theme.navPill : 'transparent',
//                       color: active ? theme.primaryDark : theme.textMuted,
//                     }}
//                   >
//                     <div
//                       className="w-8 h-8 rounded-lg flex items-center justify-center"
//                       style={
//                         active
//                           ? { background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`, color: 'white' }
//                           : { background: `${theme.primary}10`, color: theme.primary }
//                       }
//                     >
//                       <span className="text-base">{item.icon}</span>
//                     </div>
//                     <span className={cn('text-sm', active && 'font-semibold')}>{item.label}</span>
//                   </Link>
//                 );
//               })}

//               {/* Mobile: Khám phá section */}
//               <div className="mt-2 pt-2 border-t" style={{ borderColor: theme.border }}>
//                 <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.textMuted }}>
//                   🌟 Khám phá
//                 </p>
//                 {exploreItems.map((item) => {
//                   const active = pathname === item.href;
//                   return (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       onClick={() => setMobileOpen(false)}
//                       className="flex items-center gap-3 px-3 py-2.5 rounded-full transition-all duration-200"
//                       style={{
//                         background: active ? theme.navPill : 'transparent',
//                         color: active ? theme.primaryDark : theme.textMuted,
//                       }}
//                     >
//                       <div
//                         className="w-8 h-8 rounded-lg flex items-center justify-center"
//                         style={{ background: `${theme.primary}10`, color: theme.primary }}
//                       >
//                         <span className="text-base">{item.icon}</span>
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-1.5">
//                           <span className={cn('text-sm', active && 'font-semibold')}>{item.label}</span>
//                           {item.isNew && <span className="text-[9px] bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded-full">Mới</span>}
//                         </div>
//                         <p className="text-[10px]" style={{ color: theme.textMuted }}>{item.desc}</p>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>

//               <div className="h-px my-2" style={{ background: theme.border }} />

//               <Link
//                 href="/profile"
//                 onClick={() => setMobileOpen(false)}
//                 className="flex items-center gap-3 px-3 py-2.5 rounded-full transition-all duration-200"
//                 style={{ color: theme.textMuted }}
//               >
//                 <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${theme.primary}10`, color: theme.primary }}>
//                   <UserIcon className="w-4 h-4" />
//                 </div>
//                 <span className="text-sm font-medium">Hồ sơ</span>
//               </Link>

//               <button
//                 onClick={() => { window.location.href = '/'; }}
//                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-full transition-all duration-200"
//                 style={{ color: '#B04040' }}
//               >
//                 <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(176,64,64,0.08)', color: '#B04040' }}>
//                   <LogOutIcon className="w-4 h-4" />
//                 </div>
//                 <span className="text-sm font-medium">Đăng xuất</span>
//               </button>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* ══ MAIN CONTENT ═════════════════════════════════════ */}
//       <main className="pt-14 sm:pt-16 min-h-screen relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
//           {children}
//         </div>
//       </main>

//       {/* ══ BOTTOM NAV (mobile) ═══════════════════════════════ */}
//       <nav
//         className="lg:hidden fixed bottom-3 left-3 right-3 flex items-center justify-around py-1.5 px-2 rounded-xl z-40"
//         style={{
//           background: theme.surfaceGlass,
//           backdropFilter: 'blur(20px)',
//           border: `1px solid ${theme.border}`,
//           boxShadow: `0 4px 20px rgba(0,0,0,0.08)`,
//         }}
//       >
//         {mainNavItems.slice(0, 4).map((item) => {
//           const active = pathname === item.href;
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-full transition-all duration-200 active:scale-90"
//               style={{ color: active ? theme.primaryDark : theme.textMuted }}
//             >
//               <div
//                 className={cn(
//                   'w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200',
//                   active && 'scale-105'
//                 )}
//                 style={
//                   active
//                     ? { background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`, color: 'white', boxShadow: `0 2px 8px ${theme.badge}30` }
//                     : { background: `${theme.primary}8`, color: theme.primary }
//                 }
//               >
//                 <span className="text-base">{item.icon}</span>
//               </div>
//               <span className="text-[9px] font-medium leading-tight text-center">{item.label}</span>
//             </Link>
//           );
//         })}

//         {/* Nút Khám phá trên mobile nav */}
//         <button
//           onClick={() => {
//             const exploreBtn = document.querySelector('.lg\\:flex .relative button');
//             if (exploreBtn) (exploreBtn as HTMLButtonElement).click();
//           }}
//           className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-full transition-all duration-200 active:scale-90"
//           style={{ color: theme.textMuted }}
//         >
//           <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${theme.primary}8`, color: theme.primary }}>
//             <span className="text-base">🌟</span>
//           </div>
//           <span className="text-[9px] font-medium leading-tight text-center">Khám phá</span>
//         </button>
//       </nav>
//     </div>
//   );
// }
      'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  CrossIcon,
  HomeIcon,
  CalendarIcon,
  BookOpenIcon,
  BrainIcon,
  UserIcon,
  LogOutIcon,
  MenuIcon,
  XIcon,
} from '@/components/icons';

// ─────────────────────────────────────────────────────────────
// PHONG CÁCH THEO 5 SẮC MÀU TÂM LINH
// ─────────────────────────────────────────────────────────────
type LiturgicalSeason = 'khoi-dau' | 'binh-an' | 'tinh-tam' | 'vui-mung' | 'tien-buoc';

interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  background: string;
  surface: string;
  surfaceGlass: string;
  text: string;
  textMuted: string;
  accent: string;
  border: string;
  glowA: string;
  glowB: string;
  navPill: string;
  badge: string;
}

// Bộ màu mới - Hiện đại và đúng cảm hứng
const liturgicalThemes: Record<LiturgicalSeason, ThemeColors> = {
  'khoi-dau': { // Khởi Đầu - Tím thanh lịch, kết hợp chút vàng ước mơ
    primary: '#8B5CF6', // Violet 500
    primaryLight: '#A78BFA', // Violet 400
    primaryDark: '#7C3AED', // Violet 600
    background: '#F5F3FF', // Violet 50
    surface: '#FFFFFF',
    surfaceGlass: 'rgba(255,255,255,0.85)',
    text: '#1E1B4B',
    textMuted: '#6B7280',
    accent: '#C084FC',
    border: 'rgba(139,92,246,0.12)',
    glowA: 'radial-gradient(ellipse at 80% -10%, rgba(139,92,246,0.12) 0%, transparent 60%)',
    glowB: 'radial-gradient(ellipse at -10% 100%, rgba(192,132,252,0.08) 0%, transparent 55%)',
    navPill: 'rgba(139,92,246,0.06)',
    badge: '#8B5CF6',
  },
  'binh-an': { // Bình An - Cyan xanh biển sáng
    primary: '#D4AF37',
    primaryLight: '#F0CE5C',
    primaryDark: '#A88520',
    background: '#FDFBF0',
    surface: '#FFFEF8',
    surfaceGlass: 'rgba(255,254,248,0.92)',
    text: '#1A1600',
    textMuted: '#9A8830',
    accent: '#2E8B57',
    border: 'rgba(212,175,55,0.12)',
    glowA: 'radial-gradient(ellipse at 80% -10%, rgba(212,175,55,0.18) 0%, transparent 55%)',
    glowB: 'radial-gradient(ellipse at 5% 100%, rgba(46,139,87,0.08) 0%, transparent 50%)',
    navPill: 'rgba(212,175,55,0.10)',
    badge: '#D4AF37',
  },
  'tinh-tam': { // Tĩnh Tâm - Stone xám ấm, tối giản
    primary: '#78716C', // Stone 600
    primaryLight: '#A8A29E', // Stone 400
    primaryDark: '#57534E', // Stone 700
    background: '#F5F5F4', // Stone 50
    surface: '#FFFFFF',
    surfaceGlass: 'rgba(255,255,255,0.85)',
    text: '#292524',
    textMuted: '#8B8A88',
    accent: '#D6D3D1',
    border: 'rgba(120,113,108,0.1)',
    glowA: 'radial-gradient(ellipse at 75% -15%, rgba(120,113,108,0.06) 0%, transparent 60%)',
    glowB: 'radial-gradient(ellipse at 10% 95%, rgba(214,211,209,0.4) 0%, transparent 55%)',
    navPill: 'rgba(120,113,108,0.05)',
    badge: '#78716C',
  },
  'vui-mung': { // Vui Mừng - Rose hồng san hô rực rỡ
    primary: '#F43F5E', // Rose 500
    primaryLight: '#FB7185', // Rose 400
    primaryDark: '#E11D48', // Rose 600
    background: '#FFF1F2', // Rose 50
    surface: '#FFFFFF',
    surfaceGlass: 'rgba(255,255,255,0.85)',
    text: '#4C0519',
    textMuted: '#9A7A8A',
    accent: '#FDA4AF',
    border: 'rgba(244,63,94,0.12)',
    glowA: 'radial-gradient(ellipse at 80% -10%, rgba(244,63,94,0.1) 0%, transparent 55%)',
    glowB: 'radial-gradient(ellipse at 5% 100%, rgba(253,164,175,0.3) 0%, transparent 50%)',
    navPill: 'rgba(244,63,94,0.06)',
    badge: '#F43F5E',
  },
  'tien-buoc': { // Tiến Bước - Emerald xanh lá tươi sáng
     primary: '#2E7D52',
    primaryLight: '#4A9E70',
    primaryDark: '#1C5438',
    background: '#F0F7F2',
    surface: '#F8FCF9',
    surfaceGlass: 'rgba(248,252,249,0.92)',
    text: '#0E2018',
    textMuted: '#5A8C6A',
    accent: '#8B6914',
    border: 'rgba(46,125,82,0.12)',
    glowA: 'radial-gradient(ellipse at 85% -10%, rgba(46,125,82,0.15) 0%, transparent 58%)',
    glowB: 'radial-gradient(ellipse at -5% 90%, rgba(139,105,20,0.08) 0%, transparent 55%)',
    navPill: 'rgba(46,125,82,0.08)',
    badge: '#2E7D52',
  },
};

// Metadata cho 5 giai đoạn mới
const seasonMeta: Record<LiturgicalSeason, { label: string; icon: string; desc: string }> = {
  'khoi-dau': { label: 'Khởi Đầu', icon: '🌱', desc: 'Nguyện ước & Hy vọng' },
  'binh-an': { label: 'Bình An', icon: '🕊️', desc: 'Yêu thương & Hiền hòa' },
  'tinh-tam': { label: 'Tĩnh Tâm', icon: '🍃', desc: 'Lắng đọng & Suy tư' },
  'vui-mung': { label: 'Vui Mừng', icon: '🌟', desc: 'Rạng ngời & Sức sống' },
  'tien-buoc': { label: 'Tiến Bước', icon: '⛰️', desc: 'Kiên trung & Trưởng thành' },
};

// Các mục chính (hiển thị trực tiếp)
const mainNavItems = [
  { href: '/dashboard', label: 'Trang chủ', icon: '🏠' },
  { href: '/lich-le', label: 'Lịch lễ', icon: '📅' },
  { href: '/loi-chua', label: 'Lời Chúa', icon: '📖' },
  { href: '/su-kien', label: 'Sự kiện', icon: '🎪' },
  { href: '/nha-tho', label: 'Nhà Thờ', icon: '⛪' },
  { href: '/xem-le', label: 'Xem lễ', icon: '📺' },
];

// Các mục trong dropdown "Khám phá"
const exploreItems = [
  { href: '/trac-nghiem', label: 'Trắc nghiệm', icon: '📝', desc: 'Kiểm tra giáo lý', isNew: true },
  { href: '/thi-co-thuong', label: 'Thi có thưởng', icon: '🏆', desc: 'Nhận quà hấp dẫn', isNew: true },
  { href: '/qua-tang', label: 'Kho quà tặng', icon: '🎁', desc: 'Đổi điểm lấy quà', isNew: true },
  { href: '/ai-ho-tro', label: 'AI Trợ Tá', icon: '🤖', desc: 'Hỏi đáp Kinh Thánh' },
  { href: '/nhac-mua', label: 'Thánh Ca', icon: '🎵', desc: 'Nghe nhạc thánh' },
  { href: '/kinh-thanh', label: 'Kinh Thánh', icon: '📖', desc: 'Song ngữ Việt-Anh' },
];

// ─────────────────────────────────────────────────────────────
// CÁC COMPONENT CON (GIỮ NGUYÊN LOGIC, CẬP NHẬT THEO THEME MỚI)
// ─────────────────────────────────────────────────────────────

// Dropdown Khám phá (không thay đổi nhiều, chỉ dùng theme truyền vào)
function ExploreDropdown({ theme }: { theme: ThemeColors }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const needLoginPaths = ['/trac-nghiem', '/thi-co-thuong', '/qua-tang'];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (needLoginPaths.includes(href) && !isLoggedIn) {
      e.preventDefault();
      localStorage.setItem('redirectAfterLogin', href);
      window.location.href = '/login';
      return;
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-black/5 ${open ? 'bg-black/5' : ''}`}
        style={{ color: theme.textMuted }}
      >
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `${theme.primary}10`, color: theme.primary }}>
          <span className="text-sm">🌟</span>
        </div>
        <span>Khám phá</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={cn("transition-transform duration-200", open && "rotate-180")}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className="absolute top-full left-0 mt-2 w-56 rounded-xl z-50 overflow-hidden shadow-lg"
            style={{
              background: theme.surface,
              border: `1px solid ${theme.border}`,
              boxShadow: `0 10px 40px rgba(0,0,0,0.1)`,
            }}
          >
            <div className="px-4 py-2 border-b" style={{ borderColor: theme.border }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.textMuted }}>
                🌟 Khám phá thêm
              </p>
            </div>
            {exploreItems.map((item) => {
              const active = pathname === item.href;
              const needLogin = needLoginPaths.includes(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 transition-all duration-150 hover:bg-black/5"
                  style={{
                    background: active ? `${theme.badge}10` : 'transparent',
                    borderLeft: active ? `2px solid ${theme.badge}` : '2px solid transparent',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${theme.primary}10`, color: theme.primary }}
                  >
                    <span className="text-sm">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-medium" style={{ color: active ? theme.primaryDark : theme.text }}>
                        {item.label}
                      </p>
                      {item.isNew && (
                        <span className="text-[9px] bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded-full">Mới</span>
                      )}
                      {needLogin && !isLoggedIn && (
                        <span className="text-[8px] bg-red-500/20 text-red-500 px-1 py-0.5 rounded-full">🔒</span>
                      )}
                    </div>
                    <p className="text-[10px] leading-tight mt-0.5" style={{ color: theme.textMuted }}>
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// Season Picker (CHỌN 5 MÀU MỚI)
function SeasonPicker({
  currentSeason,
  onSeasonChange,
}: {
  currentSeason: LiturgicalSeason;
  onSeasonChange: (s: LiturgicalSeason) => void;
}) {
  const [open, setOpen] = useState(false);
  const theme = liturgicalThemes[currentSeason];
  const meta = seasonMeta[currentSeason];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-95"
        style={{
          background: `${theme.badge}12`,
          color: theme.primary,
          border: `1px solid ${theme.border}`,
        }}
      >
        <span className="text-base leading-none">{meta.icon}</span>
        <span className="hidden sm:inline">{meta.label}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={cn("transition-transform duration-200", open && "rotate-180")}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 mt-2 w-56 rounded-xl z-50 overflow-hidden shadow-lg"
            style={{
              background: theme.surface,
              border: `1px solid ${theme.border}`,
              boxShadow: `0 10px 40px rgba(0,0,0,0.1)`,
            }}
          >
            <div className="px-4 py-2 border-b" style={{ borderColor: theme.border }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.textMuted }}>
                Hành Trình Đức Tín
              </p>
            </div>

            {(Object.keys(seasonMeta) as LiturgicalSeason[]).map((key) => {
              const m = seasonMeta[key];
              const t = liturgicalThemes[key];
              const active = currentSeason === key;
              return (
                <button
                  key={key}
                  onClick={() => { onSeasonChange(key); setOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-150 hover:bg-black/5"
                  style={{
                    background: active ? `${t.badge}10` : 'transparent',
                    borderLeft: active ? `2px solid ${t.badge}` : '2px solid transparent',
                  }}
                >
                  <span className="text-lg leading-none">{m.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium" style={{ color: active ? t.primary : t.textMuted }}>
                      {m.label}
                    </p>
                    <p className="text-[10px] leading-tight mt-0.5" style={{ color: t.textMuted }}>
                      {m.desc}
                    </p>
                  </div>
                  {active && (
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: t.badge }}>
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ─── MAIN LAYOUT (CẬP NHẬT) ─────────────────────────────────────────────
export default function UserLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [season, setSeason] = useState<LiturgicalSeason>('binh-an'); // Mặc định là Bình An

  const theme = liturgicalThemes[season];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        background: theme.background,
        fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Hiệu ứng nền mờ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute inset-0 transition-opacity duration-700" style={{ background: theme.glowA }} />
        <div className="absolute inset-0 transition-opacity duration-700" style={{ background: theme.glowB }} />
      </div>

      {/* ══ HEADER ═══════════════════════════════════════════ */}
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled && 'shadow-sm'
        )}
        style={{
          background: theme.surfaceGlass,
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2.5 group shrink-0">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm transition-all duration-200 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`,
                }}
              >
                <CrossIcon className="w-4 h-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold tracking-tight" style={{ color: theme.text }}>
                  Giáo Xứ Yên Lộ
                </p>
                <p className="text-[9px] leading-tight uppercase tracking-wide" style={{ color: theme.textMuted }}>
                  {seasonMeta[season].icon} {seasonMeta[season].label}
                </p>
              </div>
              <p className="sm:hidden text-sm font-semibold" style={{ color: theme.text }}>GX Yên Lộ</p>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/40 bg-background/60 px-1.5 py-1 backdrop-blur-sm">
              {mainNavItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:bg-black/5"
                    style={{
                      background: active ? theme.navPill : 'transparent',
                      color: active ? theme.primaryDark : theme.textMuted,
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center"
                      style={
                        active
                          ? { background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`, color: 'white' }
                          : { background: `${theme.primary}10`, color: theme.primary }
                      }
                    >
                      <span className="text-xs">{item.icon}</span>
                    </div>
                    <span className="text-xs sm:text-sm whitespace-nowrap">{item.label}</span>
                  </Link>
                );
              })}
              <ExploreDropdown theme={theme} />
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-1">
                <SeasonPicker currentSeason={season} onSeasonChange={setSeason} />
                <div className="w-px h-5 mx-0.5" style={{ background: theme.border }} />
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-black/5"
                  style={{ color: theme.textMuted }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `${theme.primary}10`, color: theme.primary }}>
                    <UserIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="hidden xl:inline">Hồ sơ</span>
                </Link>
                <button
                  onClick={() => { window.location.href = '/'; }}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-red-50/50"
                  style={{ color: '#B04040' }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(176,64,64,0.08)', color: '#B04040' }}>
                    <LogOutIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="hidden xl:inline">Đăng xuất</span>
                </button>
              </div>
              <div className="lg:hidden">
                <SeasonPicker currentSeason={season} onSeasonChange={setSeason} />
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 active:scale-90"
                style={{ background: mobileOpen ? `${theme.primary}12` : 'transparent', color: theme.primaryDark }}
              >
                {mobileOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t mt-1" style={{ borderColor: theme.border, background: theme.surfaceGlass }}>
            <div className="px-4 py-3 space-y-1 max-h-[calc(100dvh-60px)] overflow-y-auto">
              {mainNavItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-full transition-all duration-200"
                    style={{
                      background: active ? theme.navPill : 'transparent',
                      color: active ? theme.primaryDark : theme.textMuted,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={
                        active
                          ? { background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`, color: 'white' }
                          : { background: `${theme.primary}10`, color: theme.primary }
                      }
                    >
                      <span className="text-base">{item.icon}</span>
                    </div>
                    <span className={cn('text-sm', active && 'font-semibold')}>{item.label}</span>
                  </Link>
                );
              })}
              <div className="mt-2 pt-2 border-t" style={{ borderColor: theme.border }}>
                <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.textMuted }}>
                  🌟 Khám phá
                </p>
                {exploreItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-full transition-all duration-200"
                      style={{
                        background: active ? theme.navPill : 'transparent',
                        color: active ? theme.primaryDark : theme.textMuted,
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${theme.primary}10`, color: theme.primary }}
                      >
                        <span className="text-base">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className={cn('text-sm', active && 'font-semibold')}>{item.label}</span>
                          {item.isNew && <span className="text-[9px] bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded-full">Mới</span>}
                        </div>
                        <p className="text-[10px]" style={{ color: theme.textMuted }}>{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="h-px my-2" style={{ background: theme.border }} />
              <Link
                href="/profile"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-full transition-all duration-200"
                style={{ color: theme.textMuted }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${theme.primary}10`, color: theme.primary }}>
                  <UserIcon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Hồ sơ</span>
              </Link>
              <button
                onClick={() => { window.location.href = '/'; }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-full transition-all duration-200"
                style={{ color: '#B04040' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(176,64,64,0.08)', color: '#B04040' }}>
                  <LogOutIcon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Đăng xuất</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ══ MAIN CONTENT ═════════════════════════════════════ */}
      <main className="pt-14 sm:pt-16 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {children}
        </div>
      </main>

      {/* ══ BOTTOM NAV (mobile) ═══════════════════════════════ */}
      <nav
        className="lg:hidden fixed bottom-3 left-3 right-3 flex items-center justify-around py-1.5 px-2 rounded-xl z-40"
        style={{
          background: theme.surfaceGlass,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${theme.border}`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.08)`,
        }}
      >
        {mainNavItems.slice(0, 4).map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-full transition-all duration-200 active:scale-90"
              style={{ color: active ? theme.primaryDark : theme.textMuted }}
            >
              <div
                className={cn(
                  'w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200',
                  active && 'scale-105'
                )}
                style={
                  active
                    ? { background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`, color: 'white', boxShadow: `0 2px 8px ${theme.badge}30` }
                    : { background: `${theme.primary}8`, color: theme.primary }
                }
              >
                <span className="text-base">{item.icon}</span>
              </div>
              <span className="text-[9px] font-medium leading-tight text-center">{item.label}</span>
            </Link>
          );
        })}
        <button
          onClick={() => {
            const exploreBtn = document.querySelector('.lg\\:flex .relative button');
            if (exploreBtn) (exploreBtn as HTMLButtonElement).click();
          }}
          className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-full transition-all duration-200 active:scale-90"
          style={{ color: theme.textMuted }}
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${theme.primary}8`, color: theme.primary }}>
            <span className="text-base">🌟</span>
          </div>
          <span className="text-[9px] font-medium leading-tight text-center">Khám phá</span>
        </button>
      </nav>
    </div>
  );
}