import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CrossIcon } from '@/components/icons';
import Image from 'next/image';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-16 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/10 mb-8 shadow-sm">
              <CrossIcon className="w-4 h-4" />
              <span className="text-sm font-medium">
                Ứng dụng dành cho giáo dân Công giáo
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] mb-6">
              Sống Đức Tin
              <br />
              <span className="text-primary">Mỗi Ngày</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Ứng dụng toàn diện dành cho giáo dân Công giáo Việt Nam —
              từ lịch lễ, Lời Chúa hằng ngày, học giáo lý đến kết nối cộng đoàn,
              tất cả trong một nền tảng duy nhất.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button
                size="lg"
                asChild
                className="text-base px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/register">
                  Bắt đầu ngay
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 py-6 rounded-2xl border-border/70 bg-background/70 backdrop-blur-sm hover:bg-primary/5"
              >
                <Link href="#features">Khám phá tính năng</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto lg:mx-0">
              <div className="rounded-2xl border border-border/60 bg-white/70 backdrop-blur-md p-5 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground mt-1">Giáo dân</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-white/70 backdrop-blur-md p-5 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Nhà thờ</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-white/70 backdrop-blur-md p-5 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Câu hỏi</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://ik.imagekit.io/tvlk/blog/2022/08/nha-tho-lon-ha-noi-4.jpg?tr=dpr-2,w-675"
                  alt="Nhà thờ lớn Hà Nội"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>

              {/* Overlay quote */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-white/50 shadow-lg p-5">
                  <blockquote className="font-sans text-lg md:text-xl text-foreground italic leading-relaxed">
                    “Hãy để ánh sáng đức tin soi đường
                    <br />
                    trong từng ngày sống.”
                  </blockquote>
                  <cite className="block mt-3 text-sm text-muted-foreground not-italic">
                    — Giáo Xứ Yên Lộ
                  </cite>
                </div>
              </div>
            </div>

            {/* Floating top card */}
            <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border/60 bg-white/90 backdrop-blur-md px-5 py-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                ✝
              </div>
              <div>
                <p className="font-semibold text-foreground">Đức tin mỗi ngày</p>
                <p className="text-sm text-muted-foreground">Gần gũi • Bình an • Hy vọng</p>
              </div>
            </div>

            {/* Floating bottom card */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border/60 bg-white/90 backdrop-blur-md px-5 py-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                📖
              </div>
              <div>
                <p className="font-semibold text-foreground">Lời Chúa hôm nay</p>
                <p className="text-sm text-muted-foreground">Khám phá • Suy ngẫm • Cầu nguyện</p>
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -top-10 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}