// 'use client';

// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { ArrowRightIcon, CrossIcon } from '@/components/icons';
// import Image from 'next/image';

// export function LandingHero() {
//   return (
//     <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-36 bg-background">
      
//       {/* Background Đốm Đèn Màu Nghệ Thuật (Ambient Glow) */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
//       <div className="absolute inset-0 opacity-50 dark:opacity-30 pointer-events-none">
//         <div className="absolute top-12 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] animate-pulse duration-[6000ms]" />
//         <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent/20 rounded-full blur-[140px] animate-pulse duration-[6000ms] delay-1000" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
//           {/* Left Content (Khối nội dung bên trái) */}
//           <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            
//             {/* Badge thông tin nhỏ nhắn, tinh tế */}
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 shadow-sm backdrop-blur-md">
//               <CrossIcon className="w-3.5 h-3.5" />
//               <span className="text-xs font-bold tracking-wider uppercase">
//                 Ứng dụng dành cho giáo dân Công giáo
//               </span>
//             </div>

//             {/* Tiêu đề chính cân đối Typography */}
//             <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-black text-foreground leading-[1.1] tracking-tight mb-6">
//               Sống Đức Tin
//               <br />
//               <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
//                 Mỗi Ngày
//               </span>
//             </h1>

//             {/* Đoạn văn mô tả với font-light tạo độ thoáng */}
//             <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
//               Ứng dụng toàn diện dành cho giáo dân Công giáo Việt Nam — tích hợp lịch lễ, Lời Chúa hằng ngày, học giáo lý và kết nối cộng đoàn trong một trải nghiệm duy nhất.
//             </p>

//             {/* Khối nút bấm CTA chính */}
//             <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
//               <Button
//                 size="lg"
//                 asChild
//                 className="group w-full sm:w-auto text-sm font-semibold px-8 py-6 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
//               >
//                 <Link href="/register">
//                   Bắt đầu ngay
//                   <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Link>
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 asChild
//                 className="w-full sm:w-auto text-sm font-semibold px-8 py-6 rounded-2xl border-border/60 bg-card/40 backdrop-blur-md hover:bg-accent transition-all duration-300"
//               >
//                 <Link href="#features">Khám phá tính năng</Link>
//               </Button>
//             </div>

//             {/* Khối số liệu thống kê (Stats Grid) */}
//             <div className="grid grid-cols-3 gap-4 w-full max-w-md">
//               {[
//                 { number: "10K+", label: "Giáo dân", icon: "👥" },
//                 { number: "200+", label: "Nhà thờ", icon: "⛪" },
//                 { number: "1000+", label: "Câu hỏi", icon: "📚" },
//               ].map((stat, idx) => (
//                 <div
//                   key={idx}
//                   className="group relative rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
//                 >
//                   <div className="text-xl mb-1.5 opacity-90 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
//                   <div className="text-xl sm:text-2xl font-black text-foreground">
//                     {stat.number}
//                   </div>
//                   <div className="text-[10px] sm:text-xs text-muted-foreground font-semibold mt-0.5 tracking-wider uppercase">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Visual (Khối hình ảnh nghệ thuật bên phải) */}
//           <div className="relative w-full max-w-[480px] mx-auto lg:max-w-none lg:ml-4">
            
//             {/* Khung chứa ảnh chính */}
//             <div className="relative overflow-hidden rounded-[32px] border border-border/40 bg-muted shadow-2xl group">
//               <div className="relative aspect-[4/5] w-full">
//                 <Image
//                   src="https://ik.imagekit.io/tvlk/blog/2022/08/nha-tho-lon-ha-noi-4.jpg?tr=dpr-2,w-675"
//                   alt="Nhà thờ lớn Hà Nội"
//                   fill
//                   className="object-cover rounded-[32px] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
//                   priority
//                 />
//                 {/* Lớp phủ chuyển màu dịu mắt che chân ảnh */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//               </div>

//               {/* Lớp thẻ trích dẫn Lời Chúa lồng dưới chân ảnh */}
//               <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
//                 <div className="rounded-2xl bg-background/80 dark:bg-background/90 backdrop-blur-xl border border-border/40 shadow-xl p-5">
//                   <blockquote className="font-serif text-base sm:text-lg text-foreground italic leading-relaxed">
//                     “Hãy để ánh sáng đức tin soi đường trong từng ngày sống.”
//                   </blockquote>
//                   <cite className="block mt-2 text-xs font-bold text-primary not-italic uppercase tracking-wider">
//                     — Giáo Xứ Yên Lộ
//                   </cite>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Top Card (Thẻ nổi góc trên bên trái) */}
//             <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border/40 bg-background/90 backdrop-blur-md px-5 py-3.5 shadow-xl transition-transform duration-500 hover:scale-105">
//               <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg font-bold shadow-inner">
//                 ✝
//               </div>
//               <div>
//                 <p className="font-bold text-sm text-foreground">Đức tin mỗi ngày</p>
//                 <p className="text-[11px] text-muted-foreground font-medium">Bình an • Hy vọng</p>
//               </div>
//             </div>

//             {/* Floating Bottom Card (Thẻ nổi góc dưới bên phải) */}
//             <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border/40 bg-background/90 backdrop-blur-md px-5 py-3.5 shadow-xl transition-transform duration-500 hover:scale-105">
//               <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg font-bold shadow-inner">
//                 📖
//               </div>
//               <div>
//                 <p className="font-bold text-sm text-foreground">Lời Chúa hôm nay</p>
//                 <p className="text-[11px] text-muted-foreground font-medium">Suy ngẫm • Cầu nguyện</p>
//               </div>
//             </div>

//             {/* Đốm mờ trang trí xung quanh ảnh */}
//             <div className="absolute -top-10 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
//             <div className="absolute -bottom-10 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
//           </div>

//         </div>
//       </div>

//       {/* Chuẩn hóa nút cuộn trang (Scroll Indicator) ở đáy màn hình */}
//       <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none select-none">
//         <span className="text-[10px] font-bold tracking-widest text-muted-foreground/50 uppercase">Cuộn để khám phá</span>
//         <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5 animate-bounce">
//           <div className="w-1 h-2 bg-primary/60 rounded-full" />
//         </div>
//       </div>
      
//     </section>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CrossIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Danh sách ảnh slideshow
const heroImages = [
  {
    url: "https://ik.imagekit.io/tvlk/blog/2022/08/nha-tho-lon-ha-noi-4.jpg?tr=dpr-2,w-675",
    alt: "Nhà thờ lớn Hà Nội",
    caption: "Thánh đường cổ kính",
    location: "Hà Nội"
  },
  {
    url: "https://sacotravel.com/wp-content/uploads/2021/04/du-khach-thich-thu-vuon-hoa-truoc-nha-tho-duc-ba-o-sai-gon-ivivu-2.jpg",
    alt: "Nhà thờ Đức Bà Sài Gòn",
    caption: "Trái tim Công giáo Sài Gòn",
    location: "TP. Hồ Chí Minh"
  },
  {
    url: "https://cdn.justfly.vn/1080x1080/media/202301/05/1672918533-nha-tho-chinh-toa-da-nang-dia-diem-du-lich-da-nang-attdad15-11.jpg",
    alt: "Nhà thờ Chính tòa Đà Nẵng",
    caption: "Nhà thờ giữa lòng thành phốbiển",
    location: "Đà Nẵng"
  },
  {
    url: "https://saoviettravel.com.vn/blog/wp-content/uploads/2012/12/nha-tho-phat-diem-ninh-binh-1.jpg",
    alt: "Nhà thờ Phát Diệm",
    caption: "Kiệt tác giữa núi đá",
    location: "Ninh Bình"
  },
  {
    url: "https://ticotravel.com.vn/wp-content/uploads/2022/04/Nha-tho-da-Sapa-14.jpg",
    alt: "Nhà thờ Sapa",
    caption: "Thánh đường giữa núi rừng",
    location: "Lào Cai"
  },
];

export function LandingHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Tự động chuyển ảnh sau mỗi 5 giây
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000); // 2 giây chuyển 1 ảnh

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Hàm chuyển ảnh tiếp theo
  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    // Tự động bật lại auto play sau 10 giây không thao tác
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Hàm chuyển ảnh trước đó
  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Chuyển đến ảnh cụ thể
  const goToImage = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-36 bg-background">
      
      {/* Background Đốm Đèn Màu Nghệ Thuật (Ambient Glow) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute inset-0 opacity-50 dark:opacity-30 pointer-events-none">
        <div className="absolute top-12 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent/20 rounded-full blur-[140px] animate-pulse duration-[6000ms] delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content (Khối nội dung bên trái) */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Badge thông tin nhỏ nhắn, tinh tế */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 shadow-sm backdrop-blur-md">
              <CrossIcon className="w-3.5 h-3.5" />
              <span className="text-xs font-bold tracking-wider uppercase">
                Ứng dụng dành cho giáo dân Công giáo
              </span>
            </div>

            {/* Tiêu đề chính cân đối Typography */}
            <h1 className="font-sans text-5xl sm:text-6xl xl:text-7xl font-black text-foreground leading-[1.1] tracking-tight mb-6">
              Sống Đức Tin
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                Mỗi Ngày
              </span>
            </h1>

            {/* Đoạn văn mô tả với font-light tạo độ thoáng */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
              Ứng dụng toàn diện dành cho giáo dân Công giáo Việt Nam — tích hợp lịch lễ, Lời Chúa hằng ngày, học giáo lý và kết nối cộng đoàn trong một trải nghiệm duy nhất.
            </p>

            {/* Khối nút bấm CTA chính */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="group w-full sm:w-auto text-sm font-semibold px-8 py-6 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Link href="/register">
                  Bắt đầu ngay
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto text-sm font-semibold px-8 py-6 rounded-2xl border-border/60 bg-card/40 backdrop-blur-md hover:bg-accent transition-all duration-300"
              >
                <Link href="#features">Khám phá tính năng</Link>
              </Button>
            </div>

            {/* Khối số liệu thống kê (Stats Grid) */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              {[
                { number: "10K+", label: "Giáo dân", icon: "👥" },
                { number: "200+", label: "Nhà thờ", icon: "⛪" },
                { number: "1000+", label: "Câu hỏi", icon: "📚" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="text-xl mb-1.5 opacity-90 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-black text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-semibold mt-0.5 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Slideshow Ảnh */}
          <div className="relative w-full max-w-[480px] mx-auto lg:max-w-none lg:ml-4">
            
            {/* Khung chứa ảnh chính với hiệu ứng chuyển động */}
            <div className="relative overflow-hidden rounded-[32px] border border-border/40 bg-muted shadow-2xl group">
              <div className="relative aspect-[4/5] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[currentIndex].url}
                      alt={heroImages[currentIndex].alt}
                      fill
                      className="object-cover rounded-[32px]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Lớp phủ chuyển màu dịu mắt che chân ảnh */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Nút điều khiển slideshow */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>

                {/* Chấm tròn chỉ vị trí ảnh */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToImage(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentIndex 
                          ? 'w-6 h-2 bg-white' 
                          : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thông tin địa điểm */}
              <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-amber-400 text-xs">📍</span>
                  <span className="text-white text-xs font-medium">
                    {heroImages[currentIndex].location}
                  </span>
                </div>
              </div>

              {/* Lớp thẻ trích dẫn Lời Chúa lồng dưới chân ảnh */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="rounded-2xl bg-background/80 dark:bg-background/90 backdrop-blur-xl border border-border/40 shadow-xl p-5">
                  <blockquote className="font-serif text-base sm:text-lg text-foreground italic leading-relaxed">
                    “{heroImages[currentIndex].caption}”
                  </blockquote>
                  <cite className="block mt-2 text-xs font-bold text-primary not-italic uppercase tracking-wider">
                    — {heroImages[currentIndex].location}
                  </cite>
                </div>
              </div>
            </div>

            {/* Floating Top Card (Thẻ nổi góc trên bên trái) */}
            <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border/40 bg-background/90 backdrop-blur-md px-5 py-3.5 shadow-xl transition-transform duration-500 hover:scale-105">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg font-bold shadow-inner">
                ✝
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Đức tin mỗi ngày</p>
                <p className="text-[11px] text-muted-foreground font-medium">Bình an • Hy vọng</p>
              </div>
            </div>

            {/* Floating Bottom Card (Thẻ nổi góc dưới bên phải) */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border/40 bg-background/90 backdrop-blur-md px-5 py-3.5 shadow-xl transition-transform duration-500 hover:scale-105">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg font-bold shadow-inner">
                📖
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Lời Chúa hôm nay</p>
                <p className="text-[11px] text-muted-foreground font-medium">Suy ngẫm • Cầu nguyện</p>
              </div>
            </div>

            {/* Đốm mờ trang trí xung quanh ảnh */}
            <div className="absolute -top-10 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Chuẩn hóa nút cuộn trang (Scroll Indicator) ở đáy màn hình */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none select-none">
        <span className="text-[10px] font-bold tracking-widest text-muted-foreground/50 uppercase">Cuộn để khám phá</span>
        <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5 animate-bounce">
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </div>
      </div>
      
    </section>
  );
}