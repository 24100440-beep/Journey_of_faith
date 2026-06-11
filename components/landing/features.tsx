
// 'use client';

// import { Card, CardContent } from '@/components/ui/card';
// import {
//   CalendarIcon,
//   BookOpenIcon,
//   BrainIcon,
//   MusicIcon,
//   UsersIcon,
//   BellIcon,
//   MessageCircleIcon,
//   TrophyIcon,
//   ChurchIcon,
//   // BibleIcon,
//   SparklesIcon,
//   ShieldIcon,
//   // GiftIcon,
//   // HeartHandshakeIcon,
//   ClockIcon,
//   // StarIcon,
// } from '@/components/icons';
// import { useRouter } from 'next/navigation';
// import { ArrowUpRight, PlayCircle, Award, UsersRound, Sparkle, Zap, GiftIcon } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const features = [
//   {
//     icon: CalendarIcon,
//     title: 'Lịch Lễ',
//     description: 'Xem lịch thánh lễ các nhà thờ, nhận nhắc nhở tự động trước giờ hành lễ.',
//     gradient: 'from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400',
//     iconColor: 'text-blue-500',
//     href: '/lich-le',
//     badge: 'Phổ biến',
//     stats: '1.2K lịch/tháng',
//   },
//   {
//     icon: BookOpenIcon,
//     title: 'Lời Chúa Hàng Ngày',
//     description: 'Đọc bài đọc, đáp ca, Tin Mừng và suy niệm lắng đọng mỗi ngày.',
//     gradient: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400',
//     iconColor: 'text-amber-500',
//     href: '/loi-chua',
//     badge: 'Mỗi ngày',
//     stats: '365 ngày/năm',
//   },
//   {
//     icon: BrainIcon,
//     title: 'Trắc Nghiệm Giáo Lý',
//     description: 'Kiểm tra và củng cố kiến thức giáo lý qua các bộ câu hỏi sinh động.',
//     gradient: 'from-purple-500/20 to-indigo-500/20 text-purple-600 dark:text-purple-400',
//     iconColor: 'text-purple-500',
//     href: '/trac-nghiem',
//     badge: 'Mới',
//     stats: '500+ câu hỏi',
//   },
//   {
//     icon: MessageCircleIcon,
//     title: 'AI Trợ Tá Đức Tin',
//     description: 'Trò chuyện với Chatbot AI thông thái về Kinh Thánh và thần học.',
//     gradient: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400',
//     iconColor: 'text-emerald-500',
//     href: '/ai-ho-tro',
//     badge: 'AI 24/7',
//     stats: 'Trả lời tức thì',
//   },
//   {
//     icon: MusicIcon,
//     title: 'Thánh Ca Tuyển Chọn',
//     description: 'Nghe nhạc thánh ca chất lượng cao kèm lời nhạc chạy chữ tiện lợi.',
//     gradient: 'from-rose-500/20 to-pink-500/20 text-rose-600 dark:text-rose-400',
//     iconColor: 'text-rose-500',
//     href: '/thanh-ca',
//     badge: 'Hot',
//     stats: '100+ bài hát',
//   },
//   {
//     icon: UsersIcon,
//     title: 'Sự Kiện',
//     description: 'Tham gia các hội nhóm giáo xứ, chia sẻ và đồng hành cùng nhau.',
//     gradient: 'from-violet-500/20 to-fuchsia-500/20 text-violet-600 dark:text-violet-400',
//     iconColor: 'text-violet-500',
//     href: '/su-kien',
//     badge: 'Cộng đồng',
//     stats: '10K+ thành viên',
//   },
//   {
//     icon: BellIcon,
//     title: 'Nhắc Nhở Bổn Mạng',
//     description: 'Không bao giờ quên ngày lễ quan trọng, sinh nhật, ngày bổn mạng.',
//     gradient: 'from-amber-500/20 to-yellow-500/20 text-amber-600 dark:text-amber-400',
//     iconColor: 'text-amber-500',
//     href: '/nhac-nho',
//     badge: 'Tiện lợi',
//     stats: 'Nhắc nhở thông minh',
//   },
//   {
//     icon: TrophyIcon,
//     title: 'Thi Có Thưởng',
//     description: 'Tham gia các giải đấu giáo lý lớn để rinh về những phần quà ý nghĩa.',
//     gradient: 'from-orange-500/20 to-red-500/20 text-orange-600 dark:text-orange-400',
//     iconColor: 'text-orange-500',
//     href: '/thi-co-thuong',
//     badge: 'Cơ hội',
//     stats: 'Quà hấp dẫn',
//   },
// ];

// // Features mới bổ sung
// const extraFeatures = [
//   {
//     icon: ChurchIcon,
//     title: 'Tra Cứu Nhà Thờ',
//     description: 'Tìm kiếm các nhà thờ gần bạn với chỉ đường chi tiết.',
//     gradient: 'from-sky-500/20 to-blue-500/20',
//     href: '/nha-tho',
//   },
//   {
//     // icon: BibleIcon,
//     title: 'Kinh Thánh Song Ngữ',
//     description: 'Đọc Kinh Thánh Việt - Anh, so sánh các bản dịch dễ dàng.',
//     gradient: 'from-indigo-500/20 to-purple-500/20',
//     href: '/kinh-thanh',
//   },
//   {
//     icon: ShieldIcon,
//     title: 'Xem Lễ Trực Tuyến',
//     description: 'Hướng dẫn xưng tội và tra cứu giờ xưng tội các nhà thờ.',
//     gradient: 'from-green-500/20 to-emerald-500/20',
//     href: '/xem-le',
//   },
//   {
//     // icon: GiftIcon,
//     title: 'Kho Quà Tặng',
//     description: 'Nhận các phần quà thiêng liêng và vật phẩm đức tin.',
//     gradient: 'from-pink-500/20 to-rose-500/20',
//     href: '/qua-tang',
//   },
// ];

// export function LandingFeatures() {
//   const router = useRouter();
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <section id="features" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
//       {/* Đèn màu nghệ thuật làm nền (Glow effects) */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header với animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
//             {/* <Sparkles className="w-4 h-4 text-primary" /> */}
//             <span className="text-xs font-bold tracking-widest text-primary uppercase">
//               Hệ Sinh Thái Đức Tin 4.0
//             </span>
//           </div>
          
//           <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
//             <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
//               Tính Năng Nổi Bật
//             </span>
//           </h2>
          
//           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
//             Tất cả những gì bạn cần để sống trọn vẹn đời sống đức tin mỗi ngày, 
//             <span className="text-primary font-semibold"> gói gọn trong một ứng dụng duy nhất</span>.
//           </p>

//           {/* Thống kê nhanh */}
//           <div className="flex flex-wrap justify-center gap-8 mt-12">
//             <div className="flex items-center gap-2">
//               <ClockIcon className="w-5 h-5 text-primary" />
//               <span className="text-sm text-muted-foreground">Cập nhật hàng ngày</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <UsersRound className="w-5 h-5 text-accent" />
//               <span className="text-sm text-muted-foreground">10,000+ Người dùng</span>
//             </div>
//             <div className="flex items-center gap-2">
//               {/* <StarIcon className="w-5 h-5 text-yellow-500" /> */}
//               <span className="text-sm text-muted-foreground">4.9/5 Đánh giá</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Features Grid chính */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               onHoverStart={() => setHoveredCard(index)}
//               onHoverEnd={() => setHoveredCard(null)}
//             >
//               <Card
//                 className="group relative overflow-hidden bg-card/60 backdrop-blur-md border-border/40 hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 h-[300px] shadow-sm hover:shadow-2xl hover:shadow-primary/10"
//                 onClick={() => router.push(feature.href)}
//               >
//                 {/* Hiệu ứng nền khi hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 {/* Animated border gradient */}
//                 <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 <CardContent className="p-0 h-full flex flex-col justify-between relative z-10">
//                   <div>
//                     {/* Icon & Badge */}
//                     <div className="flex items-start justify-between mb-5">
//                       <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner relative`}>
//                         <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
//                         {/* Ripple effect */}
//                         <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
//                       </div>
                      
//                       {/* Badge */}
//                       <div className="flex flex-col items-end gap-2">
//                         <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary/10 text-primary">
//                           {feature.badge}
//                         </span>
//                         {/* Mũi tên góc */}
//                         <div className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
//                           <ArrowUpRight className="w-5 h-5" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Tiêu đề & Mô tả */}
//                     <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
//                       {feature.title}
//                     </h3>
//                     <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">
//                       {feature.description}
//                     </p>

//                     {/* Stats */}
//                     <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
//                       <Zap className="w-3 h-3" />
//                       <span>{feature.stats}</span>
//                     </div>
//                   </div>

//                   {/* Dòng chữ hành động tinh tế */}
//                   <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
//                     <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-all duration-500">
//                       Khám phá ngay 
//                       <PlayCircle className="w-3 h-3" />
//                     </span>
//                   </div>
//                 </CardContent>

//                 {/* Hover effect overlay */}
//                 {hoveredCard === index && (
//                   <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
//                 )}
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Phần features bổ sung */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-16"
//         >
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 mb-4">
//               <Sparkle className="w-5 h-5 text-primary" />
//               <h3 className="text-2xl font-bold text-foreground">Còn Nhiều Hơn Thế Nữa</h3>
//             </div>
//             <p className="text-muted-foreground">Khám phá thêm các tính năng đang được phát triển</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {extraFeatures.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Card
//                   className="group cursor-pointer bg-card/40 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300"
//                   onClick={() => router.push(feature.href)}
//                 >
//                   <CardContent className="p-4 flex items-center gap-4">
//                     <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
//                       {/* <feature.icon className="w-5 h-5 text-primary" /> */}
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
//                         {feature.title}
//                       </h4>
//                       <p className="text-xs text-muted-foreground line-clamp-1">
//                         {feature.description}
//                       </p>
//                     </div>
//                     <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center"
//         >
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 px-8 py-4 rounded-full backdrop-blur-sm border border-primary/20">
//             {/* <HeartHandshakeIcon className="w-5 h-5 text-primary" /> */}
//             <span className="text-foreground font-medium">Trải nghiệm miễn phí ngay hôm nay</span>
//             <Award className="w-5 h-5 text-accent" />
//           </div>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 0.8; }
//         }
//         .animate-pulse {
//           animation: pulse 3s ease-in-out infinite;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   );
// }
'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  CalendarIcon,
  BookOpenIcon,
  BrainIcon,
  MusicIcon,
  UsersIcon,
  BellIcon,
  MessageCircleIcon,
  TrophyIcon,
  ChurchIcon,
  SparklesIcon,
  ShieldIcon,
  ClockIcon,
} from '@/components/icons';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, PlayCircle, Award, UsersRound, Sparkle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const features = [
  {
    icon: CalendarIcon,
    title: 'Lịch Lễ',
    description: 'Xem lịch thánh lễ các nhà thờ, nhận nhắc nhở tự động trước giờ hành lễ.',
    gradient: 'from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400',
    iconColor: 'text-blue-500',
    href: '/lich-le',
    badge: 'Phổ biến',
    stats: '1.2K lịch/tháng',
    needLogin: false, // ✅ Không cần
  },
  {
    icon: BookOpenIcon,
    title: 'Lời Chúa Hàng Ngày',
    description: 'Đọc bài đọc, đáp ca, Tin Mừng và suy niệm lắng đọng mỗi ngày.',
    gradient: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400',
    iconColor: 'text-amber-500',
    href: '/loi-chua',
    badge: 'Mỗi ngày',
    stats: '365 ngày/năm',
    needLogin: false, // ✅ Không cần
  },
  {
    icon: BrainIcon,
    title: 'Trắc Nghiệm Giáo Lý',
    description: 'Kiểm tra và củng cố kiến thức giáo lý qua các bộ câu hỏi sinh động.',
    gradient: 'from-purple-500/20 to-indigo-500/20 text-purple-600 dark:text-purple-400',
    iconColor: 'text-purple-500',
    href: '/trac-nghiem',
    badge: 'Mới',
    stats: '500+ câu hỏi',
    needLogin: true, // 🔒 Cần đăng nhập
  },
  {
    icon: MessageCircleIcon,
    title: 'AI Trợ Tá Đức Tin',
    description: 'Trò chuyện với Chatbot AI thông thái về Kinh Thánh và thần học.',
    gradient: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400',
    iconColor: 'text-emerald-500',
    href: '/ai-ho-tro',
    badge: 'AI 24/7',
    stats: 'Trả lời tức thì',
    needLogin: false, // ✅ Không cần
  },
  {
    icon: MusicIcon,
    title: 'Thánh Ca Tuyển Chọn',
    description: 'Nghe nhạc thánh ca chất lượng cao kèm lời nhạc chạy chữ tiện lợi.',
    gradient: 'from-rose-500/20 to-pink-500/20 text-rose-600 dark:text-rose-400',
    iconColor: 'text-rose-500',
    href: '/thanh-ca',
    badge: 'Hot',
    stats: '100+ bài hát',
    needLogin: false, // ✅ Không cần
  },
  {
    icon: UsersIcon,
    title: 'Sự Kiện',
    description: 'Tham gia các hội nhóm giáo xứ, chia sẻ và đồng hành cùng nhau.',
    gradient: 'from-violet-500/20 to-fuchsia-500/20 text-violet-600 dark:text-violet-400',
    iconColor: 'text-violet-500',
    href: '/su-kien',
    badge: 'Cộng đồng',
    stats: '10K+ thành viên',
    needLogin: true, // 🔒 Cần đăng nhập
  },
  {
    icon: BellIcon,
    title: 'Nhắc Nhở Bổn Mạng',
    description: 'Không bao giờ quên ngày lễ quan trọng, sinh nhật, ngày bổn mạng.',
    gradient: 'from-amber-500/20 to-yellow-500/20 text-amber-600 dark:text-amber-400',
    iconColor: 'text-amber-500',
    href: '/nhac-nho',
    badge: 'Tiện lợi',
    stats: 'Nhắc nhở thông minh',
    needLogin: false, // ✅ Không cần (nhắc nhở cơ bản)
  },
  {
    icon: TrophyIcon,
    title: 'Thi Có Thưởng',
    description: 'Tham gia các giải đấu giáo lý lớn để rinh về những phần quà ý nghĩa.',
    gradient: 'from-orange-500/20 to-red-500/20 text-orange-600 dark:text-orange-400',
    iconColor: 'text-orange-500',
    href: '/thi-co-thuong',
    badge: 'Cơ hội',
    stats: 'Quà hấp dẫn',
    needLogin: true, // 🔒 Cần đăng nhập
  },
];

// Features mới bổ sung (giữ nguyên)
const extraFeatures = [
  {
    icon: ChurchIcon,
    title: 'Tra Cứu Nhà Thờ',
    description: 'Tìm kiếm các nhà thờ gần bạn với chỉ đường chi tiết.',
    gradient: 'from-sky-500/20 to-blue-500/20',
    href: '/nha-tho',
    needLogin: false,
  },
  {
    title: 'Kinh Thánh Song Ngữ',
    description: 'Đọc Kinh Thánh Việt - Anh, so sánh các bản dịch dễ dàng.',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    href: '/kinh-thanh',
    needLogin: false,
  },
  {
    icon: ShieldIcon,
    title: 'Xem Lễ Trực Tuyến',
    description: 'Hướng dẫn xưng tội và tra cứu giờ xưng tội các nhà thờ.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    href: '/xem-le',
    needLogin: false,
  },
  {
    title: 'Kho Quà Tặng',
    description: 'Nhận các phần quà thiêng liêng và vật phẩm đức tin.',
    gradient: 'from-pink-500/20 to-rose-500/20',
    href: '/qua-tang',
    needLogin: false,
  },
];

export function LandingFeatures() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kiểm tra đăng nhập bằng token trong localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleFeatureClick = (feature: { href: string; needLogin: boolean }) => {
    // Nếu feature cần đăng nhập VÀ chưa đăng nhập
    if (feature.needLogin && !isLoggedIn) {
      // Lưu lại trang muốn đến sau khi đăng nhập
      localStorage.setItem('redirectAfterLogin', feature.href);
      router.push('/login');
      return;
    }
    // Đã đăng nhập hoặc không cần đăng nhập → vào thẳng trang
    router.push(feature.href);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Đèn màu nghệ thuật làm nền (Glow effects) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header với animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Hệ Sinh Thái Đức Tin 4.0
            </span>
          </div>
          
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tính Năng Nổi Bật
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Tất cả những gì bạn cần để sống trọn vẹn đời sống đức tin mỗi ngày, 
            <span className="text-primary font-semibold"> gói gọn trong một ứng dụng duy nhất</span>.
          </p>

          {/* Thống kê nhanh */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Cập nhật hàng ngày</span>
            </div>
            <div className="flex items-center gap-2">
              <UsersRound className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">10,000+ Người dùng</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">4.9/5 Đánh giá</span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid chính */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card
                className={`group relative overflow-hidden bg-card/60 backdrop-blur-md border-border/40 hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 h-[300px] shadow-sm hover:shadow-2xl hover:shadow-primary/10 ${
                  feature.needLogin && !isLoggedIn ? 'opacity-90' : ''
                }`}
                onClick={() => handleFeatureClick(feature)}
              >
                {/* Hiệu ứng nền khi hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-0 h-full flex flex-col justify-between relative z-10">
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner relative`}>
                        <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                        {/* Ripple effect */}
                        <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
                      </div>
                      
                      {/* Badge */}
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {feature.badge}
                        </span>
                        {/* Mũi tên góc */}
                        <div className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Tiêu đề & Mô tả */}
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                      {feature.needLogin && !isLoggedIn && (
                        <span className="inline-block ml-2 text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded-full align-middle">
                          🔒
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">
                      {feature.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                      <Zap className="w-3 h-3" />
                      <span>{feature.stats}</span>
                    </div>
                  </div>

                  {/* Dòng chữ hành động tinh tế */}
                  <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-all duration-500">
                      Khám phá ngay 
                      <PlayCircle className="w-3 h-3" />
                    </span>
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Phần features bổ sung */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkle className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Còn Nhiều Hơn Thế Nữa</h3>
            </div>
            <p className="text-muted-foreground">Khám phá thêm các tính năng đang được phát triển</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {extraFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className="group cursor-pointer bg-card/40 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300"
                  onClick={() => handleFeatureClick(feature)}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                      {feature.icon && <feature.icon className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {feature.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 px-8 py-4 rounded-full backdrop-blur-sm border border-primary/20">
            <span className="text-foreground font-medium">Trải nghiệm miễn phí ngay hôm nay</span>
            <Award className="w-5 h-5 text-accent" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}