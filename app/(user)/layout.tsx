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

// const navItems = [
//   { href: '/dashboard',   label: 'Trang chủ',         icon: HomeIcon },
//   { href: '/lich-le',     label: 'Lịch lễ',            icon: CalendarIcon },
//   { href: '/nha-tho',     label: 'Nhà Thờ',            icon: UserIcon },
//   { href: '/loi-chua',    label: 'Lời Chúa',           icon: BookOpenIcon },
//   { href: '/su-kien',     label: 'Sự kiện',            icon: CalendarIcon },
//   { href: '/xem-le',      label: 'Xem lễ',             icon: CalendarIcon },
//   { href: '/nhac-mua',    label: 'Thánh Ca',           icon: BookOpenIcon },
//   { href: '/trac-nghiem', label: 'Trắc nghiệm',        icon: BrainIcon },
// ];

// export default function UserLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return (
//     <div className="min-h-screen" style={{ background: '#FAF6F1', fontFamily: "'DM Sans', 'Inter', sans-serif" }}>

//       {/* ── Warm ambient blobs ── */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full"
//              style={{ background: 'radial-gradient(circle, rgba(210,160,90,0.18) 0%, transparent 70%)', filter: 'blur(50px)' }} />
//         <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full"
//              style={{ background: 'radial-gradient(circle, rgba(180,110,70,0.13) 0%, transparent 70%)', filter: 'blur(50px)' }} />
//         <div className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full"
//              style={{ background: 'radial-gradient(circle, rgba(230,195,130,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }} />
//       </div>

//       {/* ── Top Navbar (Horizontal) ── */}
//       <header className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
//         scrolled
//           ? 'shadow-sm border-b'
//           : 'border-b border-transparent'
//       )} style={{ background: 'rgba(250,246,241,0.94)', backdropFilter: 'blur(16px)', borderColor: 'rgba(180,140,90,0.15)' }}>
        
//         <div className="px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* LEFT: Logo */}
//             <div className="flex items-center w-[200px] lg:w-[240px]">
//               <Link href="/dashboard" className="flex items-center gap-2.5 group">
//                 <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200"
//                      style={{ background: 'linear-gradient(145deg, #D4914A, #A85C28)' }}>
//                   <CrossIcon className="w-4 h-4 text-white" />
//                 </div>
//                 <span className="font-bold text-base tracking-tight hidden sm:inline-block" style={{ color: '#3D2410' }}>
//                   Giáo Xứ Yên Lộ
//                 </span>
//                 <span className="font-bold text-base tracking-tight sm:hidden" style={{ color: '#3D2410' }}>
//                   GX Yên Lộ
//                 </span>
//               </Link>
//             </div>

//             {/* CENTER: Desktop Navigation */}
//             <nav className="hidden lg:flex items-center justify-center gap-0.5">
//               {navItems.map((item) => {
//                 const isActive = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="group relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
//                     style={isActive
//                       ? { background: 'linear-gradient(135deg, #D4914A18, #A85C2812)', color: '#8B4A18' }
//                       : { color: '#7A5535' }
//                     }
//                   >
//                     {isActive && (
//                       <div className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
//                            style={{ background: 'linear-gradient(90deg, #D4914A, #A85C28)' }} />
//                     )}

//                     <div className={cn(
//                       'w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200',
//                       isActive ? 'shadow-sm' : 'group-hover:scale-105'
//                     )}
//                     style={isActive
//                       ? { background: 'linear-gradient(145deg, #D4914A, #A85C28)', color: 'white' }
//                       : { background: 'rgba(180,120,60,0.08)', color: '#A07040' }
//                     }>
//                       <item.icon className="w-3.5 h-3.5" />
//                     </div>

//                     <span className={cn(
//                       'text-sm whitespace-nowrap transition-all duration-200',
//                       isActive ? 'font-semibold' : 'font-medium group-hover:text-[#5C3010]'
//                     )}>
//                       {item.label}
//                     </span>
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* RIGHT: User Menu + Mobile button */}
//             <div className="flex items-center justify-end gap-2 w-[200px] lg:w-[240px]">
//               <div className="hidden lg:flex items-center gap-2">
//                 <Link
//                   href="/profile"
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-black/5"
//                   style={{ color: '#7A5535' }}
//                 >
//                   <div className="w-7 h-7 rounded-lg flex items-center justify-center"
//                        style={{ background: 'rgba(180,120,60,0.08)', color: '#A07040' }}>
//                     <UserIcon className="w-3.5 h-3.5" />
//                   </div>
//                   <span className="text-sm font-medium hidden xl:inline">Hồ sơ</span>
//                 </Link>

//                 <button
//                   onClick={() => { window.location.href = '/'; }}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-black/5"
//                   style={{ color: '#B05040' }}
//                 >
//                   <div className="w-7 h-7 rounded-lg flex items-center justify-center"
//                        style={{ background: 'rgba(180,80,60,0.08)', color: '#B05040' }}>
//                     <LogOutIcon className="w-3.5 h-3.5" />
//                   </div>
//                   <span className="text-sm font-medium hidden xl:inline">Đăng xuất</span>
//                 </button>
//               </div>

//               {/* Mobile menu button */}
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="lg:hidden p-2 rounded-xl transition-all duration-200 active:scale-95"
//                 style={{ background: mobileMenuOpen ? 'rgba(180,120,60,0.12)' : 'transparent' }}
//                 aria-label="Toggle menu"
//               >
//                 {mobileMenuOpen
//                   ? <XIcon className="w-5 h-5" style={{ color: '#8B5E2F' }} />
//                   : <MenuIcon className="w-5 h-5" style={{ color: '#8B5E2F' }} />
//                 }
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t animate-in slide-in-from-top-2 duration-200"
//                style={{ borderColor: 'rgba(180,140,90,0.15)', background: 'rgba(250,246,241,0.98)' }}>
//             <nav className="px-3 py-3 max-h-[calc(100vh-64px)] overflow-y-auto">
//               {navItems.map((item) => {
//                 const isActive = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
//                     style={isActive
//                       ? { background: 'rgba(180,110,50,0.12)', color: '#7A3A10' }
//                       : { color: '#7A5535' }
//                     }
//                   >
//                     <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
//                          style={isActive
//                            ? { background: 'linear-gradient(145deg, #D4914A, #A85C28)', color: 'white' }
//                            : { background: 'rgba(180,120,60,0.08)', color: '#A07040' }
//                          }>
//                       <item.icon className="w-4 h-4" />
//                     </div>
//                     <span className={cn('text-sm', isActive ? 'font-semibold' : 'font-medium')}>{item.label}</span>
//                   </Link>
//                 );
//               })}
//               <div className="h-px my-3" style={{ background: 'rgba(180,140,90,0.15)' }} />
//               <Link
//                 href="/profile"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200"
//                 style={{ color: '#7A5535' }}
//               >
//                 <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(180,120,60,0.08)', color: '#A07040' }}>
//                   <UserIcon className="w-4 h-4" />
//                 </div>
//                 <span className="text-sm font-medium">Hồ sơ cá nhân</span>
//               </Link>
//               <button
//                 onClick={() => { window.location.href = '/'; }}
//                 className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200"
//                 style={{ color: '#B05040' }}
//               >
//                 <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(180,80,60,0.08)', color: '#B05040' }}>
//                   <LogOutIcon className="w-4 h-4" />
//                 </div>
//                 <span className="text-sm font-medium">Đăng xuất</span>
//               </button>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* ── Main Content ── */}
//       <main className="pt-16 min-h-screen relative z-10">
//         <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
//           {children}
//         </div>
//       </main>

//       {/* ── Mobile Bottom Navigation Bar ── */}
//       <nav className="lg:hidden fixed bottom-3 left-3 right-3 flex items-center justify-around px-2 py-2 rounded-2xl z-30"
//            style={{
//              background: 'rgba(253,243,232,0.97)',
//              backdropFilter: 'blur(20px)',
//              border: '1px solid rgba(180,140,90,0.2)',
//              boxShadow: '0 8px 32px rgba(120,60,10,0.14)'
//            }}>
//         {navItems.slice(0, 5).map((item) => {
//           const isActive = pathname === item.href;
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-xl transition-all duration-200"
//               style={isActive ? { color: '#8B4A18' } : { color: '#A07848' }}
//             >
//               <div className={cn(
//                 'w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200',
//                 isActive ? 'shadow-sm scale-105' : ''
//               )}
//               style={isActive
//                 ? { background: 'linear-gradient(145deg, #D4914A, #A85C28)', color: 'white' }
//                 : { background: 'rgba(180,120,60,0.08)' }
//               }>
//                 <item.icon className="w-4 h-4" />
//               </div>
//               <span className="text-[10px] font-medium leading-tight text-center">{item.label}</span>
//             </Link>
//           );
//         })}
//       </nav>
//     </div>
//   );
// }
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
//   // PaletteIcon,
// } from '@/components/icons';

// // ─────────────────────────────────────────────────────────────
// // MÙA PHỤNG VỤ CÔNG GIÁO
// // ─────────────────────────────────────────────────────────────
// type LiturgicalSeason = 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';

// interface ThemeColors {
//   primary: string;
//   primaryDark: string;
//   background: string;
//   surface: string;
//   text: string;
//   textMuted: string;
//   accent: string;
//   border: string;
//   glow: string;
// }

// const liturgicalThemes: Record<LiturgicalSeason, ThemeColors> = {
//   // 🕯️ MÙA VỌNG - Tím
//   advent: {
//     primary: '#7B2D8E',
//     primaryDark: '#5B1F6B',
//     background: '#F8F2FA',
//     surface: '#FCF8FF',
//     text: '#3D1F4A',
//     textMuted: '#9B6DA8',
//     accent: '#B87DC9',
//     border: 'rgba(123,45,142,0.2)',
//     glow: 'rgba(123,45,142,0.12)',
//   },
//   // 🎄 MÙA GIÁNG SINH - Vàng / Trắng
//   christmas: {
//     primary: '#E8D492',
//     primaryDark: '#C4A658',
//     background: '#FFFDF5',
//     surface: '#FFFFFA',
//     text: '#4A3B1A',
//     textMuted: '#B8A468',
//     accent: '#F5E6B8',
//     border: 'rgba(232,212,146,0.3)',
//     glow: 'rgba(232,212,146,0.15)',
//   },
//   // ✝️ MÙA CHAY - Tím sẫm
//   lent: {
//     primary: '#4A2560',
//     primaryDark: '#2E1540',
//     background: '#F5F0F8',
//     surface: '#FAF5FF',
//     text: '#2E1540',
//     textMuted: '#8B6B9E',
//     accent: '#6B3D85',
//     border: 'rgba(74,37,96,0.2)',
//     glow: 'rgba(74,37,96,0.12)',
//   },
//   // 🌅 MÙA PHỤC SINH - Vàng sáng
//   easter: {
//     primary: '#F5D76E',
//     primaryDark: '#E8B530',
//     background: '#FFFEF5',
//     surface: '#FFFFFF',
//     text: '#4A3B1A',
//     textMuted: '#C4B070',
//     accent: '#F5E6A8',
//     border: 'rgba(245,215,110,0.3)',
//     glow: 'rgba(245,215,110,0.18)',
//   },
//   // 🌿 MÙA THƯỜNG NIÊN - Xanh lá
//   ordinary: {
//     primary: '#3D8F40',
//     primaryDark: '#2A6B2D',
//     background: '#F2F8F2',
//     surface: '#F8FCF8',
//     text: '#1A3B1A',
//     textMuted: '#7BA87B',
//     accent: '#68B368',
//     border: 'rgba(61,143,64,0.2)',
//     glow: 'rgba(61,143,64,0.12)',
//   },
// };

// const navItems = [
//   { href: '/dashboard',   label: 'Trang chủ',         icon: HomeIcon },
//   { href: '/lich-le',     label: 'Lịch lễ',            icon: CalendarIcon },
//   { href: '/nha-tho',     label: 'Nhà Thờ',            icon: UserIcon },
//   { href: '/loi-chua',    label: 'Lời Chúa',           icon: BookOpenIcon },
//   { href: '/su-kien',     label: 'Sự kiện',            icon: CalendarIcon },
//   { href: '/xem-le',      label: 'Xem lễ',             icon: CalendarIcon },
//   { href: '/nhac-mua',    label: 'Thánh Ca',           icon: BookOpenIcon },
//   { href: '/trac-nghiem', label: 'Trắc nghiệm',        icon: BrainIcon },
// ];

// // Component chọn mùa phụng vụ
// function SeasonPicker({ currentSeason, onSeasonChange }: { 
//   currentSeason: LiturgicalSeason; 
//   onSeasonChange: (season: LiturgicalSeason) => void;
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const theme = liturgicalThemes[currentSeason];
  
//   const seasonLabels: Record<LiturgicalSeason, { label: string; icon: string }> = {
//     advent: { label: 'Mùa Vọng', icon: '🕯️' },
//     christmas: { label: 'Giáng Sinh', icon: '🎄' },
//     lent: { label: 'Mùa Chay', icon: '✝️' },
//     easter: { label: 'Phục Sinh', icon: '🌅' },
//     ordinary: { label: 'Thường Niên', icon: '🌿' },
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-black/5"
//         style={{ color: theme.textMuted }}
//       >
//         {/* <PaletteIcon className="w-4 h-4" /> */}
//         <span className="text-sm font-medium hidden sm:inline">
//           {seasonLabels[currentSeason].icon} {seasonLabels[currentSeason].label}
//         </span>
//       </button>
      
//       {isOpen && (
//         <>
//           <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
//           <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
//                style={{ background: theme.surface, border: `1px solid ${theme.border}` }}>
//             {Object.entries(seasonLabels).map(([key, { label, icon }]) => {
//               const seasonTheme = liturgicalThemes[key as LiturgicalSeason];
//               return (
//                 <button
//                   key={key}
//                   onClick={() => {
//                     onSeasonChange(key as LiturgicalSeason);
//                     setIsOpen(false);
//                   }}
//                   className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150 hover:bg-black/5"
//                   style={{ color: currentSeason === key ? seasonTheme.primary : seasonTheme.textMuted }}
//                 >
//                   <span className="text-lg">{icon}</span>
//                   <span className={currentSeason === key ? 'font-semibold' : ''}>{label}</span>
//                   {currentSeason === key && (
//                     <span className="ml-auto text-xs">✓</span>
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

// function hexToRgb(hex: string): string {
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   if (!result) return '250,246,241';
//   return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
// }

// export default function UserLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [currentSeason, setCurrentSeason] = useState<LiturgicalSeason>('ordinary');
  
//   const theme = liturgicalThemes[currentSeason];

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const handleSeasonChange = (season: LiturgicalSeason) => {
//     setCurrentSeason(season);
//     // TODO: Sau này gọi API lưu season
//     // fetch('/api/user/season', { method: 'POST', body: JSON.stringify({ season }) })
//   };

//   return (
//     <div className="min-h-screen transition-colors duration-500" 
//          style={{ background: theme.background, fontFamily: "'DM Sans', 'Inter', sans-serif" }}>

//       {/* Hiệu ứng nền mờ theo màu mùa */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full transition-all duration-500"
//              style={{ background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`, filter: 'blur(50px)' }} />
//         <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full transition-all duration-500"
//              style={{ background: `radial-gradient(circle, ${theme.glow.replace('0.12', '0.08')} 0%, transparent 70%)`, filter: 'blur(50px)' }} />
//       </div>

//       {/* Header Navbar */}
//       <header className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
//         scrolled ? 'shadow-sm border-b' : 'border-b border-transparent'
//       )} style={{ background: `rgba(${hexToRgb(theme.surface)}, 0.94)`, backdropFilter: 'blur(16px)', borderColor: theme.border }}>
        
//         <div className="px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo trái */}
//             <div className="flex items-center w-[200px] lg:w-[240px]">
//               <Link href="/dashboard" className="flex items-center gap-2.5 group">
//                 <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200"
//                      style={{ background: `linear-gradient(145deg, ${theme.primary}, ${theme.primaryDark})` }}>
//                   <CrossIcon className="w-4 h-4 text-white" />
//                 </div>
//                 <span className="font-bold text-base tracking-tight hidden sm:inline-block" style={{ color: theme.text }}>
//                   Giáo Xứ Yên Lộ
//                 </span>
//                 <span className="font-bold text-base tracking-tight sm:hidden" style={{ color: theme.text }}>
//                   GX Yên Lộ
//                 </span>
//               </Link>
//             </div>

//             {/* Menu giữa - Desktop */}
//             <nav className="hidden lg:flex items-center justify-center gap-0.5">
//               {navItems.map((item) => {
//                 const isActive = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="group relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
//                     style={isActive
//                       ? { background: `${theme.primary}18`, color: theme.primaryDark }
//                       : { color: theme.textMuted }
//                     }
//                   >
//                     {isActive && (
//                       <div className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
//                            style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.primaryDark})` }} />
//                     )}

//                     <div className={cn(
//                       'w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200',
//                       isActive ? 'shadow-sm' : 'group-hover:scale-105'
//                     )}
//                     style={isActive
//                       ? { background: `linear-gradient(145deg, ${theme.primary}, ${theme.primaryDark})`, color: 'white' }
//                       : { background: `${theme.primary}14`, color: theme.primary }
//                     }>
//                       <item.icon className="w-3.5 h-3.5" />
//                     </div>

//                     <span className={cn(
//                       'text-sm whitespace-nowrap transition-all duration-200',
//                       isActive ? 'font-semibold' : 'font-medium'
//                     )}>
//                       {item.label}
//                     </span>
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* Bên phải: Chọn mùa + User + Mobile menu */}
//             <div className="flex items-center justify-end gap-2 w-[200px] lg:w-[240px]">
//               <div className="hidden lg:flex items-center gap-1">
//                 <SeasonPicker currentSeason={currentSeason} onSeasonChange={handleSeasonChange} />
                
//                 <Link
//                   href="/profile"
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-black/5"
//                   style={{ color: theme.textMuted }}
//                 >
//                   <div className="w-7 h-7 rounded-lg flex items-center justify-center"
//                        style={{ background: `${theme.primary}14`, color: theme.primary }}>
//                     <UserIcon className="w-3.5 h-3.5" />
//                   </div>
//                   <span className="text-sm font-medium hidden xl:inline">Hồ sơ</span>
//                 </Link>

//                 <button
//                   onClick={() => { window.location.href = '/'; }}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-black/5"
//                   style={{ color: '#B05040' }}
//                 >
//                   <div className="w-7 h-7 rounded-lg flex items-center justify-center"
//                        style={{ background: 'rgba(180,80,60,0.08)', color: '#B05040' }}>
//                     <LogOutIcon className="w-3.5 h-3.5" />
//                   </div>
//                   <span className="text-sm font-medium hidden xl:inline">Đăng xuất</span>
//                 </button>
//               </div>

//               {/* Mobile menu button */}
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="lg:hidden p-2 rounded-xl transition-all duration-200 active:scale-95"
//                 style={{ background: mobileMenuOpen ? `${theme.primary}18` : 'transparent' }}
//               >
//                 {mobileMenuOpen
//                   ? <XIcon className="w-5 h-5" style={{ color: theme.primaryDark }} />
//                   : <MenuIcon className="w-5 h-5" style={{ color: theme.primaryDark }} />
//                 }
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t animate-in slide-in-from-top-2 duration-200"
//                style={{ borderColor: theme.border, background: theme.surface }}>
//             <nav className="px-3 py-3 max-h-[calc(100vh-64px)] overflow-y-auto">
//               {/* Chọn mùa trên mobile */}
//               <div className="px-4 py-2 mb-2">
//                 <p className="text-xs font-medium mb-2" style={{ color: theme.textMuted }}>MÙA PHỤNG VỤ</p>
//                 <div className="grid grid-cols-2 gap-2">
//                   {(['advent', 'christmas', 'lent', 'easter', 'ordinary'] as LiturgicalSeason[]).map((season) => (
//                     <button
//                       key={season}
//                       onClick={() => handleSeasonChange(season)}
//                       className={cn(
//                         'py-2 px-2 rounded-lg text-sm transition-all duration-200',
//                         currentSeason === season ? 'font-semibold shadow-sm' : ''
//                       )}
//                       style={{
//                         background: currentSeason === season ? liturgicalThemes[season].primary : `${liturgicalThemes[season].primary}20`,
//                         color: currentSeason === season ? 'white' : liturgicalThemes[season].primaryDark,
//                       }}
//                     >
//                       {season === 'advent' && '🕯️ Vọng'}
//                       {season === 'christmas' && '🎄 Giáng Sinh'}
//                       {season === 'lent' && '✝️ Chay'}
//                       {season === 'easter' && '🌅 Phục Sinh'}
//                       {season === 'ordinary' && '🌿 Thường Niên'}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div className="h-px my-2" style={{ background: theme.border }} />
              
//               {navItems.map((item) => {
//                 const isActive = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
//                     style={isActive
//                       ? { background: `${theme.primary}18`, color: theme.primaryDark }
//                       : { color: theme.textMuted }
//                     }
//                   >
//                     <div className="w-8 h-8 rounded-lg flex items-center justify-center"
//                          style={isActive
//                            ? { background: `linear-gradient(145deg, ${theme.primary}, ${theme.primaryDark})`, color: 'white' }
//                            : { background: `${theme.primary}14`, color: theme.primary }
//                          }>
//                       <item.icon className="w-4 h-4" />
//                     </div>
//                     <span className={cn('text-sm', isActive ? 'font-semibold' : 'font-medium')}>{item.label}</span>
//                   </Link>
//                 );
//               })}
              
//               <div className="h-px my-3" style={{ background: theme.border }} />
//               <Link
//                 href="/profile"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="flex items-center gap-3 px-4 py-3 rounded-xl"
//                 style={{ color: theme.textMuted }}
//               >
//                 <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${theme.primary}14`, color: theme.primary }}>
//                   <UserIcon className="w-4 h-4" />
//                 </div>
//                 <span className="text-sm font-medium">Hồ sơ</span>
//               </Link>
//               <button
//                 onClick={() => { window.location.href = '/'; }}
//                 className="w-full flex items-center gap-3 px-4 py-3 rounded-xl"
//                 style={{ color: '#B05040' }}
//               >
//                 <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(180,80,60,0.08)', color: '#B05040' }}>
//                   <LogOutIcon className="w-4 h-4" />
//                 </div>
//                 <span className="text-sm font-medium">Đăng xuất</span>
//               </button>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Nội dung chính */}
//       <main className="pt-16 min-h-screen relative z-10">
//         <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
//           {children}
//         </div>
//       </main>

//       {/* Bottom Nav cho mobile */}
//       <nav className="lg:hidden fixed bottom-3 left-3 right-3 flex items-center justify-around px-2 py-2 rounded-2xl z-30"
//            style={{
//              background: `rgba(${hexToRgb(theme.surface)}, 0.97)`,
//              backdropFilter: 'blur(20px)',
//              border: `1px solid ${theme.border}`,
//              boxShadow: '0 8px 32px rgba(120,60,10,0.14)'
//            }}>
//         {navItems.slice(0, 5).map((item) => {
//           const isActive = pathname === item.href;
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-xl transition-all duration-200"
//               style={isActive ? { color: theme.primaryDark } : { color: theme.textMuted }}
//             >
//               <div className={cn(
//                 'w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200',
//                 isActive ? 'shadow-sm scale-105' : ''
//               )}
//               style={isActive
//                 ? { background: `linear-gradient(145deg, ${theme.primary}, ${theme.primaryDark})`, color: 'white' }
//                 : { background: `${theme.primary}14` }
//               }>
//                 <item.icon className="w-4 h-4" />
//               </div>
//               <span className="text-[10px] font-medium text-center">{item.label}</span>
//             </Link>
//           );
//         })}
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
// MÙA PHỤNG VỤ CÔNG GIÁO
// ─────────────────────────────────────────────────────────────
type LiturgicalSeason = 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';

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

const liturgicalThemes: Record<LiturgicalSeason, ThemeColors> = {
  advent: {
    primary: '#6B3FA0',
    primaryLight: '#8B5CC8',
    primaryDark: '#4A2870',
    background: '#F4F0FA',
    surface: '#FEFCFF',
    surfaceGlass: 'rgba(254,252,255,0.92)',
    text: '#1E1230',
    textMuted: '#7A5A98',
    accent: '#F5C842',
    border: 'rgba(107,63,160,0.12)',
    glowA: 'radial-gradient(ellipse at 80% -10%, rgba(107,63,160,0.18) 0%, transparent 60%)',
    glowB: 'radial-gradient(ellipse at -10% 100%, rgba(245,200,66,0.10) 0%, transparent 55%)',
    navPill: 'rgba(107,63,160,0.10)',
    badge: '#6B3FA0',
  },
  christmas: {
    primary: '#C8962A',
    primaryLight: '#E8B84A',
    primaryDark: '#9A6E18',
    background: '#FDFAF3',
    surface: '#FFFEFB',
    surfaceGlass: 'rgba(255,254,251,0.92)',
    text: '#2A1F08',
    textMuted: '#9A7A3A',
    accent: '#C0392B',
    border: 'rgba(200,150,42,0.12)',
    glowA: 'radial-gradient(ellipse at 90% -5%, rgba(200,150,42,0.18) 0%, transparent 55%)',
    glowB: 'radial-gradient(ellipse at -5% 90%, rgba(192,57,43,0.08) 0%, transparent 55%)',
    navPill: 'rgba(200,150,42,0.10)',
    badge: '#C8962A',
  },
  lent: {
    primary: '#7D3C6A',
    primaryLight: '#A05088',
    primaryDark: '#561E4A',
    background: '#F5EEF5',
    surface: '#FDF8FD',
    surfaceGlass: 'rgba(253,248,253,0.92)',
    text: '#1E0C1C',
    textMuted: '#9A6888',
    accent: '#A0522D',
    border: 'rgba(125,60,106,0.12)',
    glowA: 'radial-gradient(ellipse at 75% -15%, rgba(125,60,106,0.15) 0%, transparent 60%)',
    glowB: 'radial-gradient(ellipse at 10% 95%, rgba(160,82,45,0.08) 0%, transparent 55%)',
    navPill: 'rgba(125,60,106,0.10)',
    badge: '#7D3C6A',
  },
  easter: {
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
  ordinary: {
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

const seasonMeta: Record<LiturgicalSeason, { label: string; icon: string; desc: string }> = {
  advent:    { label: 'Mùa Vọng',       icon: '🕯️', desc: 'Chờ đợi & hy vọng' },
  christmas: { label: 'Giáng Sinh',     icon: '✨', desc: 'Ngôi Lời nhập thể' },
  lent:      { label: 'Mùa Chay',       icon: '✝️', desc: 'Sám hối & thinh lặng' },
  easter:    { label: 'Phục Sinh',      icon: '🌅', desc: 'Ánh sáng & niềm vui' },
  ordinary:  { label: 'Thường Niên',    icon: '🌿', desc: 'Lớn lên trong đức tin' },
};

const navItems = [
  { href: '/dashboard',   label: 'Trang chủ',   icon: HomeIcon },
  { href: '/lich-le',     label: 'Lịch lễ',     icon: CalendarIcon },
  { href: '/nha-tho',     label: 'Nhà Thờ',     icon: UserIcon },
  { href: '/loi-chua',    label: 'Lời Chúa',    icon: BookOpenIcon },
  { href: '/su-kien',     label: 'Sự kiện',     icon: CalendarIcon },
  { href: '/xem-le',      label: 'Xem lễ',      icon: CalendarIcon },
  { href: '/nhac-mua',    label: 'Thánh Ca',    icon: BookOpenIcon },
  { href: '/trac-nghiem', label: 'Trắc nghiệm', icon: BrainIcon },
];

// ─── Season Picker ───────────────────────────────────────────
function SeasonPicker({
  currentSeason,
  onSeasonChange,
}: {
  currentSeason: LiturgicalSeason;
  onSeasonChange: (s: LiturgicalSeason) => void;
}) {
  const [open, setOpen] = useState(false);
  const theme = liturgicalThemes[currentSeason];
  const meta  = seasonMeta[currentSeason];

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
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                Năm Phụng Vụ
              </p>
            </div>

            {(Object.keys(seasonMeta) as LiturgicalSeason[]).map((key) => {
              const m  = seasonMeta[key];
              const t  = liturgicalThemes[key];
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
                        <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

// ─── Helper ──────────────────────────────────────────────────
function hexToRgb(hex: string): string {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!r) return '248,252,249';
  return `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`;
}

// ─── Main Layout ─────────────────────────────────────────────
export default function UserLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [season, setSeason] = useState<LiturgicalSeason>('ordinary');

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
      {/* Ambient glow background */}
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

            {/* Desktop Nav - Center */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-black/5"
                    style={{
                      background: active ? theme.navPill : 'transparent',
                      color: active ? theme.primaryDark : theme.textMuted,
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center"
                      style={
                        active
                          ? { background: `linear-gradient(135deg, ${theme.primaryLight}, ${theme.primaryDark})`, color: 'white' }
                          : { background: `${theme.primary}10`, color: theme.primary }
                      }
                    >
                      <item.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-1">
                <SeasonPicker currentSeason={season} onSeasonChange={setSeason} />
                
                <div className="w-px h-5 mx-0.5" style={{ background: theme.border }} />

                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-black/5"
                  style={{ color: theme.textMuted }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `${theme.primary}10`, color: theme.primary }}>
                    <UserIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="hidden xl:inline">Hồ sơ</span>
                </Link>

                <button
                  onClick={() => { window.location.href = '/'; }}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-red-50/50"
                  style={{ color: '#B04040' }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(176,64,64,0.08)', color: '#B04040' }}>
                    <LogOutIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="hidden xl:inline">Đăng xuất</span>
                </button>
              </div>

              {/* Mobile season picker */}
              <div className="lg:hidden">
                <SeasonPicker currentSeason={season} onSeasonChange={setSeason} />
              </div>

              {/* Mobile menu button */}
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
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200"
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
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className={cn('text-sm', active && 'font-semibold')}>{item.label}</span>
                  </Link>
                );
              })}

              <div className="h-px my-2" style={{ background: theme.border }} />

              <Link
                href="/profile"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200"
                style={{ color: theme.textMuted }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${theme.primary}10`, color: theme.primary }}>
                  <UserIcon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Hồ sơ</span>
              </Link>

              <button
                onClick={() => { window.location.href = '/'; }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200"
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
        {navItems.slice(0, 5).map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 active:scale-90"
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
                <item.icon className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-medium leading-tight text-center">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}