'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CrossIcon, MenuIcon, XIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#features', label: 'Tính năng' },
  { href: '#about', label: 'Giới thiệu' },
  { href: '#contact', label: 'Liên hệ' },
];

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
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
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-background/70 text-foreground shadow-sm hover:bg-primary/10 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
              mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="px-4 pb-5 pt-2">
              <div className="rounded-2xl border border-border/60 bg-background/80 backdrop-blur-md p-3 shadow-md">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}

                  <div className="flex flex-col gap-3 mt-4">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full rounded-xl"
                    >
                      <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                        Đăng nhập
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="w-full rounded-xl"
                    >
                      <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                        Đăng ký
                      </Link>
                    </Button>
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