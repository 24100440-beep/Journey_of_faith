import { CheckIcon } from '@/components/icons';

const highlights = [
  'Giao diện thân thiện, dễ sử dụng',
  'Hỗ trợ tiếng Việt đầy đủ',
  'Đồng bộ dữ liệu trên nhiều thiết bị',
  'Nội dung được cập nhật thường xuyên',
  'Bảo mật thông tin người dùng',
  'Hoàn toàn miễn phí các tính năng cơ bản',
];

export function LandingAbout() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span className="text-lg">✝ </span>
              Đồng hành cùng đời sống đức tin
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
             Về Chúng Tôi
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl">
              <span className="font-semibold text-foreground">
                Giáo Xứ Yên Lộ Online
              </span>{' '}
              được xây dựng với tâm niệm phục vụ cộng đồng giáo dân Công giáo Việt Nam,
              mang đến một nền tảng số giúp mọi người dễ dàng tiếp cận với đời sống đức tin mỗi ngày.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Từ việc xem lịch thánh lễ, đọc Lời Chúa, học giáo lý cho đến kết nối với cộng đồng —
              tất cả đều được thiết kế để trở nên gần gũi, dễ dùng và hữu ích trong đời sống thường nhật.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-white/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition">
                    <CheckIcon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <img
                  src="https://phunugioi.com/wp-content/uploads/2021/01/tai-hinh-anh-cong-giao-dep-nhat-cho-may.jpg"
                  alt="Hình ảnh Công giáo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-white/50 shadow-lg p-5">
                  <blockquote className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed">
                    “Lời Chúa là đèn soi con bước,
                    <br />
                    là ánh sáng soi đường con đi.”
                  </blockquote>
                  <cite className="block mt-3 text-sm text-muted-foreground not-italic">
                    — Thánh Vịnh 119:105
                  </cite>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border/60 bg-white/90 backdrop-blur-md px-5 py-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
              💒 
              </div>
              <div>
                <p className="font-semibold text-foreground">Lời Chúa mỗi ngày</p>
                <p className="text-sm text-muted-foreground">Gần gũi • Dễ tiếp cận • Hữu ích</p>
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-4 w-36 h-36 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}