// // 'use client';

// // import { useState } from 'react';
// // import Link from 'next/link';
// // import { Button } from '@/components/ui/button';
// // import { CrossIcon, MenuIcon, XIcon } from '@/components/icons';
// // import { cn } from '@/lib/utils';

// // const navLinks = [
// //   { href: '#features', label: 'Tính năng' },
// //   { href: '#about', label: 'Giới thiệu' },
// //   { href: '#contact', label: 'Liên hệ' },
// // ];

// // export function LandingHeader() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   return (
// //     <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="rounded-2xl border border-white/20 bg-background/75 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-background/60">
// //           <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            
// //             {/* Logo */}
// //             <Link href="/" className="flex items-center gap-3 group">
// //               <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
// //                 <CrossIcon className="w-6 h-6 text-primary" />
// //               </div>
// //               <div className="leading-tight">
// //                 <span className="block font-serif text-lg sm:text-xl font-semibold text-foreground">
// //                   Giáo Xứ Yên Lộ
// //                 </span>
// //                 <span className="hidden sm:block text-xs text-muted-foreground">
// //                   Sống đức tin mỗi ngày
// //                 </span>
// //               </div>
// //             </Link>

// //             {/* Desktop Navigation */}
// //             <nav className="hidden md:flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-2 py-2 backdrop-blur-sm">
// //               {navLinks.map((link) => (
// //                 <a
// //                   key={link.href}
// //                   href={link.href}
// //                   className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
// //                 >
// //                   {link.label}
// //                 </a>
// //               ))}
// //             </nav>

// //             {/* Desktop Auth Buttons */}
// //             <div className="hidden md:flex items-center gap-3">
// //               <Button
// //                 variant="ghost"
// //                 asChild
// //                 className="rounded-full px-5 text-muted-foreground hover:text-foreground hover:bg-primary/10"
// //               >
// //                 <Link href="/login">Đăng nhập</Link>
// //               </Button>

// //               <Button
// //                 asChild
// //                 className="rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
// //               >
// //                 <Link href="/register">Đăng ký</Link>
// //               </Button>
// //             </div>

// //             {/* Mobile Menu Button */}
// //             <button
// //               className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-background/70 text-foreground shadow-sm hover:bg-primary/10 transition"
// //               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //               aria-label="Toggle menu"
// //             >
// //               {mobileMenuOpen ? (
// //                 <XIcon className="w-5 h-5" />
// //               ) : (
// //                 <MenuIcon className="w-5 h-5" />
// //               )}
// //             </button>
// //           </div>

// //           {/* Mobile Menu */}
// //           <div
// //             className={cn(
// //               'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
// //               mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
// //             )}
// //           >
// //             <div className="px-4 pb-5 pt-2">
// //               <div className="rounded-2xl border border-border/60 bg-background/80 backdrop-blur-md p-3 shadow-md">
// //                 <nav className="flex flex-col gap-2">
// //                   {navLinks.map((link) => (
// //                     <a
// //                       key={link.href}
// //                       href={link.href}
// //                       className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
// //                       onClick={() => setMobileMenuOpen(false)}
// //                     >
// //                       {link.label}
// //                     </a>
// //                   ))}

// //                   <div className="flex flex-col gap-3 mt-4">
// //                     <Button
// //                       variant="outline"
// //                       asChild
// //                       className="w-full rounded-xl"
// //                     >
// //                       <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
// //                         Đăng nhập
// //                       </Link>
// //                     </Button>

// //                     <Button
// //                       asChild
// //                       className="w-full rounded-xl"
// //                     >
// //                       <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
// //                         Đăng ký
// //                       </Link>
// //                     </Button>
// //                   </div>
// //                 </nav>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { CrossIcon, MenuIcon, XIcon } from '@/components/icons';
// import { cn } from '@/lib/utils';

// // Link chính trên thanh nav
// const navLinks = [
//   { href: '#features', label: 'Tính năng' },
//   { href: '#about', label: 'Giới thiệu' },
//   { href: '#contact', label: 'Liên hệ' },
// ];

// // Link trong dropdown "Khám phá"
// const exploreLinks = [
//   { href: '/trac-nghiem', label: '📝 Trắc Nghiệm Giáo Lý', desc: 'Kiểm tra kiến thức' },
//   { href: '/ai-ho-tro', label: '🤖 AI Trợ Tá Đức Tin', desc: 'Hỏi đáp Kinh Thánh' },
//   { href: '/thanh-ca', label: '🎵 Thánh Ca Tuyển Chọn', desc: 'Nghe nhạc thánh' },
//   { href: '/thi-co-thuong', label: '🏆 Thi Có Thưởng', desc: 'Nhận quà hấp dẫn', isNew: true },
//   { href: '/qua-tang', label: '🎁 Kho Quà Tặng', desc: 'Đổi điểm lấy quà', isNew: true },
//   { href: '/kinh-thanh', label: '📖 Kinh Thánh Song Ngữ', desc: 'Việt - Anh' },
// ];

// export function LandingHeader() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isExploreOpen, setIsExploreOpen] = useState(false);

//   // Đóng dropdown khi bấm ra ngoài
//   const toggleExplore = () => setIsExploreOpen(!isExploreOpen);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3">
//       <div className="max-w-7xl mx-auto">
//         <div className="rounded-2xl border border-white/20 bg-background/75 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-background/60">
//           <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-3 group">
//               <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
//                 <CrossIcon className="w-6 h-6 text-primary" />
//               </div>
//               <div className="leading-tight">
//                 <span className="block font-serif text-lg sm:text-xl font-semibold text-foreground">
//                   Giáo Xứ Yên Lộ
//                 </span>
//                 <span className="hidden sm:block text-xs text-muted-foreground">
//                   Sống đức tin mỗi ngày
//                 </span>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-2 py-2 backdrop-blur-sm">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
//                 >
//                   {link.label}
//                 </a>
//               ))}

//               {/* Dropdown Khám phá - Bấm để mở/đóng */}
//               <div className="relative">
//                 <button
//                   onClick={toggleExplore}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
//                     isExploreOpen 
//                       ? 'text-foreground bg-primary/10' 
//                       : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
//                   }`}
//                 >
//                   🌟 Khám phá
//                   <svg 
//                     className={`w-3 h-3 transition-transform duration-200 ${isExploreOpen ? 'rotate-180' : ''}`}
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isExploreOpen && (
//                   <>
//                     {/* Lớp overlay bắt sự kiện click ra ngoài */}
//                     <div 
//                       className="fixed inset-0 z-40" 
//                       onClick={() => setIsExploreOpen(false)}
//                     />
//                     <div className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl py-2 z-50">
//                       {exploreLinks.map((link) => (
//                         <Link
//                           key={link.href}
//                           href={link.href}
//                           className="flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
//                           onClick={() => setIsExploreOpen(false)}
//                         >
//                           <span>{link.label}</span>
//                           {link.isNew && (
//                             <span className="text-[10px] bg-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded-full">Mới</span>
//                           )}
//                         </Link>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>
//             </nav>

//             {/* Desktop Auth Buttons */}
//             <div className="hidden md:flex items-center gap-3">
//               <Button
//                 variant="ghost"
//                 asChild
//                 className="rounded-full px-5 text-muted-foreground hover:text-foreground hover:bg-primary/10"
//               >
//                 <Link href="/login">Đăng nhập</Link>
//               </Button>

//               <Button
//                 asChild
//                 className="rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 <Link href="/register">Đăng ký</Link>
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-background/70 text-foreground shadow-sm hover:bg-primary/10 transition"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <XIcon className="w-5 h-5" />
//               ) : (
//                 <MenuIcon className="w-5 h-5" />
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={cn(
//               'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
//               mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
//             )}
//           >
//             <div className="px-4 pb-5 pt-2">
//               <div className="rounded-2xl border border-border/60 bg-background/80 backdrop-blur-md p-3 shadow-md">
//                 <nav className="flex flex-col gap-2">
//                   {navLinks.map((link) => (
//                     <a
//                       key={link.href}
//                       href={link.href}
//                       className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       {link.label}
//                     </a>
//                   ))}

//                   {/* Mobile: Nhóm Khám phá */}
//                   <div className="mt-2">
//                     <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
//                       🌟 Khám phá
//                     </p>
//                     <div className="flex flex-col gap-1">
//                       {exploreLinks.map((link) => (
//                         <Link
//                           key={link.href}
//                           href={link.href}
//                           className="px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 flex items-center justify-between"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           <span>{link.label}</span>
//                           {link.isNew && (
//                             <span className="text-[10px] bg-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded-full">Mới</span>
//                           )}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-3 mt-4">
//                     <Button
//                       variant="outline"
//                       asChild
//                       className="w-full rounded-xl"
//                     >
//                       <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
//                         Đăng nhập
//                       </Link>
//                     </Button>

//                     <Button
//                       asChild
//                       className="w-full rounded-xl"
//                     >
//                       <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
//                         Đăng ký
//                       </Link>
//                     </Button>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CrossIcon, MenuIcon, XIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

// 5 mục chính hiển thị trực tiếp
const mainLinks = [
  { href: '/lich-le', label: 'Lịch lễ' },
  { href: '/loi-chua', label: 'Lời Chúa' },
  { href: '/su-kien', label: 'Sự kiện' },
  { href: '/nha-tho', label: 'Nhà thờ' },
  { href: '/xem-le', label: 'Xem lễ' },
];

// Link trong dropdown "Khám phá"
const exploreLinks = [
  { href: '/trac-nghiem', label: '📝 Trắc Nghiệm Giáo Lý', needLogin: true },
  { href: '/ai-ho-tro', label: '🤖 AI Trợ Tá Đức Tin', needLogin: false },
  { href: '/nhac-mua', label: '🎵 Thánh Ca ', needLogin: false },
  { href: '/thi-co-thuong', label: '🏆 Thi Có Thưởng', needLogin: true, isNew: true },
  { href: '/qua-tang', label: '🎁 Kho Quà Tặng', needLogin: true, isNew: true },
  { href: '/kinh-thanh', label: '📖 Kinh Thánh Song Ngữ', needLogin: false },
];

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleExplore = () => setIsExploreOpen(!isExploreOpen);

  const handleLinkClick = (needLogin: boolean, href: string) => {
    if (needLogin && !isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', href);
      window.location.href = '/login';
      return;
    }
    window.location.href = href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-white/20 bg-background/75 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <CrossIcon className="w-6 h-6 text-primary" />
              </div>
              <div className="leading-tight">
                <span className="block font-serif text-lg sm:text-xl font-semibold text-foreground">
                  Giáo Xứ Yên Lộ
                </span>
                <span className="hidden sm:block text-xs text-muted-foreground">
                  Sống đức tin mỗi ngày
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-2 py-2 backdrop-blur-sm">
              {/* 5 mục chính hiển thị trực tiếp */}
              {mainLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}

              {/* Dropdown Khám phá */}
              <div className="relative">
                <button
                  onClick={toggleExplore}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    isExploreOpen 
                      ? 'text-foreground bg-primary/10' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                  }`}
                >
                  🌟 Khám phá
                  <svg 
                    className={`w-3 h-3 transition-transform duration-200 ${isExploreOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExploreOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsExploreOpen(false)} />
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl py-2 z-50">
                      {exploreLinks.map((link) => (
                        <button
                          key={link.href}
                          onClick={() => {
                            setIsExploreOpen(false);
                            handleLinkClick(link.needLogin, link.href);
                          }}
                          className="w-full text-left block px-4 py-3 hover:bg-primary/10 transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{link.label}</span>
                            {link.isNew && (
                              <span className="text-[10px] bg-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded-full">Mới</span>
                            )}
                          </div>
                          {link.desc && (
                            <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {!isLoggedIn ? (
                <>
                  <Button
                    variant="ghost"
                    asChild
                    className="rounded-full px-5 text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  >
                    <Link href="/login">Đăng nhập</Link>
                  </Button>
                  <Button
                    asChild
                    className="rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="/register">Đăng ký</Link>
                  </Button>
                </>
              ) : (
                <Button
                  asChild
                  className="rounded-full px-6 bg-primary/20 text-primary hover:bg-primary/30"
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-background/70 text-foreground shadow-sm hover:bg-primary/10 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
              mobileMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="px-4 pb-5 pt-2">
              <div className="rounded-2xl border border-border/60 bg-background/80 backdrop-blur-md p-3 shadow-md">
                <nav className="flex flex-col gap-2">
                  {/* 5 mục chính */}
                  {mainLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Mobile: Khám phá */}
                  <div className="mt-2">
                    <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      🌟 Khám phá
                    </p>
                    {exploreLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleLinkClick(link.needLogin, link.href);
                        }}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">{link.label}</span>
                          {link.isNew && (
                            <span className="text-[10px] bg-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded-full">Mới</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 mt-4">
                    {!isLoggedIn ? (
                      <>
                        <Button variant="outline" asChild className="w-full rounded-xl">
                          <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Đăng nhập</Link>
                        </Button>
                        <Button asChild className="w-full rounded-xl">
                          <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Đăng ký</Link>
                        </Button>
                      </>
                    ) : (
                      <Button asChild className="w-full rounded-xl">
                        <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                      </Button>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}