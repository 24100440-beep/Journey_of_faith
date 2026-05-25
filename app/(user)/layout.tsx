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

const navItems = [
  { href: '/dashboard',   label: 'Trang chủ',         icon: HomeIcon },
  { href: '/lich-le',     label: 'Lịch lễ',            icon: CalendarIcon },
  { href: '/nha-tho',     label: 'Nhà Thờ',            icon: UserIcon },
  { href: '/loi-chua',    label: 'Lời Chúa',           icon: BookOpenIcon },
  { href: '/su-kien',     label: 'Sự kiện',            icon: CalendarIcon },
  { href: '/xem-le',      label: 'Xem lễ',             icon: CalendarIcon },
  { href: '/nhac-mua',    label: 'Thánh Ca',           icon: BookOpenIcon },
  { href: '/trac-nghiem', label: 'Trắc nghiệm',        icon: BrainIcon },
];

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#FAF6F1', fontFamily: "'DM Sans', 'Inter', sans-serif" }}>

      {/* ── Warm ambient blobs ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(210,160,90,0.18) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(180,110,70,0.13) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(230,195,130,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* ── Top Navbar (Horizontal) ── */}
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'shadow-sm border-b'
          : 'border-b border-transparent'
      )} style={{ background: 'rgba(250,246,241,0.94)', backdropFilter: 'blur(16px)', borderColor: 'rgba(180,140,90,0.15)' }}>
        
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LEFT: Logo */}
            <div className="flex items-center w-[200px] lg:w-[240px]">
              <Link href="/dashboard" className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200"
                     style={{ background: 'linear-gradient(145deg, #D4914A, #A85C28)' }}>
                  <CrossIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-base tracking-tight hidden sm:inline-block" style={{ color: '#3D2410' }}>
                  Giáo Xứ Yên Lộ
                </span>
                <span className="font-bold text-base tracking-tight sm:hidden" style={{ color: '#3D2410' }}>
                  GX Yên Lộ
                </span>
              </Link>
            </div>

            {/* CENTER: Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
                    style={isActive
                      ? { background: 'linear-gradient(135deg, #D4914A18, #A85C2812)', color: '#8B4A18' }
                      : { color: '#7A5535' }
                    }
                  >
                    {isActive && (
                      <div className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                           style={{ background: 'linear-gradient(90deg, #D4914A, #A85C28)' }} />
                    )}

                    <div className={cn(
                      'w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200',
                      isActive ? 'shadow-sm' : 'group-hover:scale-105'
                    )}
                    style={isActive
                      ? { background: 'linear-gradient(145deg, #D4914A, #A85C28)', color: 'white' }
                      : { background: 'rgba(180,120,60,0.08)', color: '#A07040' }
                    }>
                      <item.icon className="w-3.5 h-3.5" />
                    </div>

                    <span className={cn(
                      'text-sm whitespace-nowrap transition-all duration-200',
                      isActive ? 'font-semibold' : 'font-medium group-hover:text-[#5C3010]'
                    )}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: User Menu + Mobile button */}
            <div className="flex items-center justify-end gap-2 w-[200px] lg:w-[240px]">
              <div className="hidden lg:flex items-center gap-2">
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-black/5"
                  style={{ color: '#7A5535' }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                       style={{ background: 'rgba(180,120,60,0.08)', color: '#A07040' }}>
                    <UserIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium hidden xl:inline">Hồ sơ</span>
                </Link>

                <button
                  onClick={() => { window.location.href = '/'; }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-black/5"
                  style={{ color: '#B05040' }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                       style={{ background: 'rgba(180,80,60,0.08)', color: '#B05040' }}>
                    <LogOutIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium hidden xl:inline">Đăng xuất</span>
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl transition-all duration-200 active:scale-95"
                style={{ background: mobileMenuOpen ? 'rgba(180,120,60,0.12)' : 'transparent' }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen
                  ? <XIcon className="w-5 h-5" style={{ color: '#8B5E2F' }} />
                  : <MenuIcon className="w-5 h-5" style={{ color: '#8B5E2F' }} />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t animate-in slide-in-from-top-2 duration-200"
               style={{ borderColor: 'rgba(180,140,90,0.15)', background: 'rgba(250,246,241,0.98)' }}>
            <nav className="px-3 py-3 max-h-[calc(100vh-64px)] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
                    style={isActive
                      ? { background: 'rgba(180,110,50,0.12)', color: '#7A3A10' }
                      : { color: '#7A5535' }
                    }
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={isActive
                           ? { background: 'linear-gradient(145deg, #D4914A, #A85C28)', color: 'white' }
                           : { background: 'rgba(180,120,60,0.08)', color: '#A07040' }
                         }>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className={cn('text-sm', isActive ? 'font-semibold' : 'font-medium')}>{item.label}</span>
                  </Link>
                );
              })}
              <div className="h-px my-3" style={{ background: 'rgba(180,140,90,0.15)' }} />
              <Link
                href="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200"
                style={{ color: '#7A5535' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(180,120,60,0.08)', color: '#A07040' }}>
                  <UserIcon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Hồ sơ cá nhân</span>
              </Link>
              <button
                onClick={() => { window.location.href = '/'; }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200"
                style={{ color: '#B05040' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(180,80,60,0.08)', color: '#B05040' }}>
                  <LogOutIcon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Đăng xuất</span>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ── Main Content ── */}
      <main className="pt-16 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>

      {/* ── Mobile Bottom Navigation Bar ── */}
      <nav className="lg:hidden fixed bottom-3 left-3 right-3 flex items-center justify-around px-2 py-2 rounded-2xl z-30"
           style={{
             background: 'rgba(253,243,232,0.97)',
             backdropFilter: 'blur(20px)',
             border: '1px solid rgba(180,140,90,0.2)',
             boxShadow: '0 8px 32px rgba(120,60,10,0.14)'
           }}>
        {navItems.slice(0, 5).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-xl transition-all duration-200"
              style={isActive ? { color: '#8B4A18' } : { color: '#A07848' }}
            >
              <div className={cn(
                'w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200',
                isActive ? 'shadow-sm scale-105' : ''
              )}
              style={isActive
                ? { background: 'linear-gradient(145deg, #D4914A, #A85C28)', color: 'white' }
                : { background: 'rgba(180,120,60,0.08)' }
              }>
                <item.icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-medium leading-tight text-center">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}