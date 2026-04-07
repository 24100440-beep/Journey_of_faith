import Link from 'next/link';
import { CrossIcon } from '@/components/icons';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Panel - Branding + Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/anh-chua.jpg"
          alt="Nhà thờ lớn Hà Nội"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_30%)]" />

        {/* Blur lights */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <CrossIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="block font-serif text-2xl font-semibold text-white">
                Giáo Xứ Yên Lộ Online
              </span>
              <span className="text-sm text-white/70">
                Sống đức tin mỗi ngày
              </span>
            </div>
          </Link>

          {/* Quote */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-2 text-sm text-white/85 mb-6">
              <span>✝</span>
              Đồng hành cùng đời sống đức tin
            </div>

            <blockquote className="font-sans text-3xl xl:text-4xl text-white/95 leading-relaxed mb-6">
              “Ta là đường, là sự thật và là sự sống.
              Không ai đến được với Cha mà không qua Ta.”
            </blockquote>

            <cite className="text-white/75 text-lg not-italic block mb-8">
              — Ga 14:6
            </cite>

            {/* Mini Card */}
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-5 py-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-xl">
                📖
              </div>
              <div>
                <p className="font-semibold text-white">Lời Chúa mỗi ngày</p>
                <p className="text-sm text-white/70">Bình an • Hy vọng • Đức tin</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-white/55 text-sm">
            &copy; {new Date().getFullYear()} Giáo Xứ Yên Lộ Online
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <CrossIcon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <span className="block font-serif text-xl font-semibold text-foreground">
                  Giáo Xứ Yên Lộ Online
                </span>
                <span className="text-xs text-muted-foreground">
                  Sống đức tin mỗi ngày
                </span>
              </div>
            </Link>
          </div>

          {/* Form Card */}
          <div className="rounded-[2rem] border border-border/60 bg-white/80 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}