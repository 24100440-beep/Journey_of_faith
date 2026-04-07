import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@/components/icons';

export function LandingCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-primary-foreground">
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl px-6 sm:px-10 lg:px-16 py-14 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-medium text-white/90 mb-6">
            <span className="text-base">✝</span>
            Đồng hành cùng đời sống đức tin
          </div>

          {/* Heading */}
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Sẵn Sàng <span className="text-white">Bắt Đầu?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tham gia cộng đồng giáo dân để sống đức tin mỗi ngày —
            từ lịch lễ, Lời Chúa, giáo lý đến kết nối cộng đoàn,
            tất cả chỉ trong một nền tảng duy nhất.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              size="lg"
              asChild
              className="text-base px-8 py-6 rounded-2xl bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/register">
                Đăng ký miễn phí
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 py-6 rounded-2xl border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <Link href="/login">Đã có tài khoản? Đăng nhập</Link>
            </Button>
          </div>

          {/* Mini info cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 backdrop-blur-md">
              <p className="text-2xl font-bold">10.000+</p>
              <p className="text-sm text-primary-foreground/80 mt-1">Người dùng đồng hành</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 backdrop-blur-md">
              <p className="text-2xl font-bold">365</p>
              <p className="text-sm text-primary-foreground/80 mt-1">Lời Chúa mỗi ngày</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 backdrop-blur-md">
              <p className="text-2xl font-bold">Miễn phí</p>
              <p className="text-sm text-primary-foreground/80 mt-1">Bắt đầu dễ dàng ngay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}