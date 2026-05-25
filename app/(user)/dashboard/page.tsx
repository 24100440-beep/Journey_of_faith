// // import Link from 'next/link';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { 
// //   CalendarIcon, 
// //   BookOpenIcon, 
// //   BrainIcon, 
// //   ChurchIcon,
// //   ArrowRightIcon,
// //   ClockIcon,
// // } from '@/components/icons';
// // import { mockDailyGospel, mockMasses } from '@/lib/mock-data';

// // export default function DashboardPage() {
// //   const todayGospel = mockDailyGospel;
// //   const upcomingMasses = mockMasses.slice(0, 3);

// //   return (
// //     <div className="space-y-6 pb-20 lg:pb-0">
// //       {/* Welcome Header */}
// //       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //         <div>
// //           <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
// //             Xin chào, Giáo Dân
// //           </h1>
// //           <p className="text-muted-foreground mt-1">
// //             Chúc bạn một ngày bình an trong Chúa
// //           </p>
// //         </div>
// //         <div className="text-right">
// //           <p className="text-sm text-muted-foreground">
// //             {new Date().toLocaleDateString('vi-VN', { 
// //               weekday: 'long', 
// //               year: 'numeric', 
// //               month: 'long', 
// //               day: 'numeric' 
// //             })}
// //           </p>
// //           <p className="text-sm font-medium text-primary">
// //             {todayGospel.liturgicalSeason}
// //           </p>
// //         </div>
// //       </div>

// //       {/* Quick Actions */}
// //       <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
// //         <Link href="/lich-le">
// //           <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
// //             <CardContent className="pt-6 flex flex-col items-center text-center">
// //               <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
// //                 <CalendarIcon className="w-6 h-6 text-primary" />
// //               </div>
// //               <h3 className="font-medium text-sm">Lịch Lễ</h3>
// //             </CardContent>
// //           </Card>
// //         </Link>
// //         <Link href="/loi-chua">
// //           <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
// //             <CardContent className="pt-6 flex flex-col items-center text-center">
// //               <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
// //                 <BookOpenIcon className="w-6 h-6 text-accent-foreground" />
// //               </div>
// //               <h3 className="font-medium text-sm">Lời Chúa</h3>
// //             </CardContent>
// //           </Card>
// //         </Link>
// //         <Link href="/trac-nghiem">
// //           <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
// //             <CardContent className="pt-6 flex flex-col items-center text-center">
// //               <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
// //                 <BrainIcon className="w-6 h-6 text-chart-3" />
// //               </div>
// //               <h3 className="font-medium text-sm">Trắc Nghiệm</h3>
// //             </CardContent>
// //           </Card>
// //         </Link>
// //         <Link href="/nha-tho">
// //           <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
// //             <CardContent className="pt-6 flex flex-col items-center text-center">
// //               <div className="w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
// //                 <ChurchIcon className="w-6 h-6 text-chart-4" />
// //               </div>
// //               <h3 className="font-medium text-sm">Nhà Thờ</h3>
// //             </CardContent>
// //           </Card>
// //         </Link>
// //       </div>

// //       {/* Today's Gospel Preview */}
// //       <Card>
// //         <CardHeader className="flex flex-row items-center justify-between">
// //           <CardTitle className="flex items-center gap-2">
// //             <BookOpenIcon className="w-5 h-5 text-primary" />
// //             Lời Chúa Hôm Nay
// //           </CardTitle>
// //           <Button variant="ghost" size="sm" asChild>
// //             <Link href="/loi-chua" className="flex items-center gap-1">
// //               Xem thêm
// //               <ArrowRightIcon className="w-4 h-4" />
// //             </Link>
// //           </Button>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="prose prose-sm max-w-none">
// //             <p className="text-muted-foreground line-clamp-4 leading-relaxed">
// //               {todayGospel.gospel.split('\n\n')[1] || todayGospel.gospel.substring(0, 300)}...
// //             </p>
// //           </div>
// //           <div className="mt-4 pt-4 border-t border-border">
// //             <p className="text-sm italic text-muted-foreground">
// //               &ldquo;{todayGospel.reflection?.split('\n')[2] || 'Xin Chua cho con mot trai tim biet lang nghe va thuc hanh Loi Ngai.'}&rdquo;
// //             </p>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       {/* Upcoming Masses */}
// //       <Card>
// //         <CardHeader className="flex flex-row items-center justify-between">
// //           <CardTitle className="flex items-center gap-2">
// //             <CalendarIcon className="w-5 h-5 text-primary" />
// //             Thánh Lễ Sắp Tới
// //           </CardTitle>
// //           <Button variant="ghost" size="sm" asChild>
// //             <Link href="/lich-le" className="flex items-center gap-1">
// //               Xem tất cả
// //               <ArrowRightIcon className="w-4 h-4" />
// //             </Link>
// //           </Button>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="space-y-4">
// //             {upcomingMasses.map((mass) => (
// //               <div 
// //                 key={mass.id} 
// //                 className="flex items-start gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
// //               >
// //                 <div 
// //                   className="w-2 h-full min-h-[60px] rounded-full"
// //                   style={{ 
// //                     backgroundColor: mass.liturgicalColor === 'green' ? 'var(--liturgical-green)' :
// //                       mass.liturgicalColor === 'white' ? 'var(--liturgical-white)' :
// //                       mass.liturgicalColor === 'purple' ? 'var(--liturgical-purple)' :
// //                       mass.liturgicalColor === 'red' ? 'var(--liturgical-red)' :
// //                       'var(--liturgical-gold)'
// //                   }}
// //                 />
// //                 <div className="flex-1">
// //                   <h4 className="font-medium text-foreground">{mass.title}</h4>
// //                   <p className="text-sm text-muted-foreground mt-1">
// //                     {mass.church?.name}
// //                   </p>
// //                   <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
// //                     <span className="flex items-center gap-1">
// //                       <ClockIcon className="w-3.5 h-3.5" />
// //                       {mass.massTime}
// //                     </span>
// //                     <span>
// //                       {mass.massDate.toLocaleDateString('vi-VN', { weekday: 'short', day: 'numeric', month: 'short' })}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }
// // app/page.tsx (Dashboard)
// 'use client';
// import Link from 'next/link';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { 
//   CalendarIcon, 
//   BookOpenIcon, 
//   BrainIcon, 
//   ChurchIcon,
//   ArrowRightIcon,
//   ClockIcon,
//   // HeartIcon,
//   CrossIcon,
//   // SunIcon,
// } from '@/components/icons';
// import { mockDailyGospel, mockMasses } from '@/lib/mock-data';

// export default function DashboardPage() {
//   const todayGospel = mockDailyGospel;
//   const upcomingMasses = mockMasses.slice(0, 3);
  
//   // Lấy giờ trong ngày để chào phù hợp
//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return 'Buổi sáng tốt lành';
//     if (hour < 18) return 'Buổi chiều bình an';
//     return 'Buổi tối an lành';
//   };

//   // Màu sắc theo mùa (giả lập - có thể lấy từ API sau)
//   const seasonalColor = {
//     primary: 'text-red-800',
//     primaryBg: 'bg-red-800',
//     primaryLight: 'bg-red-50',
//     accent: 'text-amber-600',
//     accentBg: 'bg-amber-100',
//     gradient: 'from-amber-50 via-white to-red-50',
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
//       <div className="space-y-6 pb-20 lg:pb-0 p-4 md:p-6 max-w-7xl mx-auto">
        
//         {/* Welcome Header - Nổi bật hơn */}
//         <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900 via-red-800 to-amber-800 p-6 md:p-8 text-white shadow-xl">
//           {/* Background decoration */}
//           <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
//             <CrossIcon className="w-full h-full" />
//           </div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
//             <ChurchIcon className="w-full h-full" />
//           </div>
          
//           <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 {/* <SunIcon className="w-5 h-5 text-amber-300" /> */}
//                 <span className="text-amber-200 text-sm font-medium">{getGreeting()}</span>
//               </div>
//               <h1 className="text-2xl sm:text-4xl font-serif font-bold">
//                 Xin chào, Giáo Dân
//               </h1>
//               <p className="text-amber-100 mt-2 text-sm sm:text-base">
//                 Nguyện xin Chúa ban bình an đến cùng bạn
//               </p>
//             </div>
//             <div className="text-left sm:text-right">
//               <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
//                 <p className="text-sm font-medium">
//                   {new Date().toLocaleDateString('vi-VN', { 
//                     weekday: 'long', 
//                     year: 'numeric', 
//                     month: 'long', 
//                     day: 'numeric' 
//                   })}
//                 </p>
//                 <p className="text-xs text-amber-200 mt-1">
//                   📖 {todayGospel.liturgicalSeason}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions - Đẹp hơn với hover effects */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
//           {[
//             { href: "/lich-le", icon: CalendarIcon, title: "Lịch Lễ", color: "from-red-500 to-red-700", bgColor: "bg-red-50", textColor: "text-red-700" },
//             { href: "/loi-chua", icon: BookOpenIcon, title: "Lời Chúa", color: "from-amber-500 to-amber-700", bgColor: "bg-amber-50", textColor: "text-amber-700" },
//             { href: "/trac-nghiem", icon: BrainIcon, title: "Trắc Nghiệm", color: "from-emerald-500 to-emerald-700", bgColor: "bg-emerald-50", textColor: "text-emerald-700" },
//             { href: "/nha-tho", icon: ChurchIcon, title: "Nhà Thờ", color: "from-purple-500 to-purple-700", bgColor: "bg-purple-50", textColor: "text-purple-700" },
//           ].map((item) => (
//             <Link href={item.href} key={item.href}>
//               <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 shadow-md hover:-translate-y-1">
//                 <div className={`h-1 bg-gradient-to-r ${item.color}`} />
//                 <CardContent className="pt-6 pb-4 flex flex-col items-center text-center">
//                   <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
//                     <item.icon className={`w-7 h-7 ${item.textColor}`} />
//                   </div>
//                   <h3 className={`font-semibold text-sm ${item.textColor}`}>{item.title}</h3>
//                   <p className="text-xs text-stone-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                     Khám phá →
//                   </p>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>

//         {/* Today's Gospel - Đẹp và ấn tượng */}
//         <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
//           <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
//             <CrossIcon className="w-full h-full" />
//           </div>
//           <CardHeader className="relative bg-gradient-to-r from-amber-50 to-red-50 dark:from-stone-800 dark:to-stone-800">
//             <div className="flex flex-row items-center justify-between">
//               <CardTitle className="flex items-center gap-2 text-red-800 dark:text-amber-400">
//                 <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
//                   <BookOpenIcon className="w-5 h-5" />
//                 </div>
//                 <span className="font-serif text-xl">Lời Chúa Hôm Nay</span>
//               </CardTitle>
//               <Button variant="ghost" size="sm" asChild className="text-red-600 hover:text-red-700 hover:bg-red-50">
//                 <Link href="/loi-chua" className="flex items-center gap-1">
//                   Xem thêm
//                   <ArrowRightIcon className="w-4 h-4" />
//                 </Link>
//               </Button>
//             </div>
//             <p className="text-sm text-stone-500 mt-1">
//               📖 {todayGospel.gospel.split('\n')[0] || "Bài đọc hôm nay"}
//             </p>
//           </CardHeader>
//           <CardContent className="pt-6">
//             <div className="prose prose-sm max-w-none">
//               <div className="bg-amber-50/50 dark:bg-stone-800/50 rounded-xl p-5 mb-4 border-l-4 border-amber-500">
//                 <p className="text-stone-700 dark:text-stone-300 leading-relaxed italic">
//                   &ldquo;{todayGospel.gospel.split('\n\n')[1]?.substring(0, 200) || 'Hãy yêu thương nhau như Thầy đã yêu thương các con.'}...&rdquo;
//                 </p>
//               </div>
//               <div className="flex items-start gap-3 mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
//                 {/* <HeartIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> */}
//                 <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
//                   <span className="font-semibold">Suy niệm:</span>{' '}
//                   {todayGospel.reflection?.split('\n')[2]?.substring(0, 150) || 
//                    'Lạy Chúa, xin cho con biết lắng nghe và thực hành Lời Chúa trong đời sống hằng ngày. Amen.'}
//                 </p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Upcoming Masses - Sang trọng */}
//         <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//           <CardHeader className="bg-gradient-to-r from-stone-100 to-stone-50 dark:from-stone-800 dark:to-stone-800/50">
//             <div className="flex flex-row items-center justify-between">
//               <CardTitle className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
//                 <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
//                   <CalendarIcon className="w-5 h-5 text-red-600 dark:text-amber-400" />
//                 </div>
//                 <span className="text-xl font-semibold tracking-wide">Thánh Lễ Sắp Tới</span>
//               </CardTitle>
//               <Button variant="ghost" size="sm" asChild className="text-red-600 hover:text-red-700 hover:bg-red-50">
//                 <Link href="/lich-le" className="flex items-center gap-1">
//                   Xem tất cả
//                   <ArrowRightIcon className="w-4 h-4" />
//                 </Link>
//               </Button>
//             </div>
//             <p className="text-sm text-stone-500 mt-1">
//               🕊️ Các thánh lễ trong tuần
//             </p>
//           </CardHeader>
//           <CardContent className="pt-6">
//             <div className="space-y-4">
//               {upcomingMasses.map((mass, index) => {
//                 // Màu sắc theo phụng vụ
//                 const massColors = {
//                   green: { bg: "bg-emerald-50", border: "border-emerald-500", text: "text-emerald-700" },
//                   white: { bg: "bg-stone-50", border: "border-stone-400", text: "text-stone-700" },
//                   purple: { bg: "bg-purple-50", border: "border-purple-500", text: "text-purple-700" },
//                   red: { bg: "bg-red-50", border: "border-red-500", text: "text-red-700" },
//                   gold: { bg: "bg-amber-50", border: "border-amber-500", text: "text-amber-700" },
//                 };
//                 const colors = massColors[mass.liturgicalColor as keyof typeof massColors] || massColors.green;
                
//                 return (
//                   <div 
//                     key={mass.id} 
//                     className={`group relative flex items-start gap-4 p-4 rounded-xl ${colors.bg} hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5`}
//                   >
//                     {/* Thanh màu bên trái */}
//                     <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${colors.border}`} />
                    
//                     {/* Ngày tháng nổi bật */}
//                     <div className="flex flex-col items-center justify-center min-w-[60px]">
//                       <div className={`text-2xl font-bold ${colors.text}`}>
//                         {mass.massDate.getDate()}
//                       </div>
//                       <div className="text-xs text-stone-500 uppercase">
//                         {mass.massDate.toLocaleDateString('vi-VN', { month: 'short' })}
//                       </div>
//                     </div>
                    
//                     {/* Nội dung chính */}
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <h4 className={`font-semibold text-stone-800 dark:text-stone-200 group-hover:${colors.text} transition-colors`}>
//                             {mass.title}
//                           </h4>
//                           <p className="text-sm text-stone-500 mt-1 flex items-center gap-1">
//                             <ChurchIcon className="w-3.5 h-3.5" />
//                             {mass.church?.name || "Nhà thờ Chính Tòa"}
//                           </p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <div className={`w-2 h-2 rounded-full ${colors.border}`} />
//                           <span className={`text-xs font-medium ${colors.text}`}>
//                             {mass.liturgicalColor === 'green' ? 'Thường Niên' :
//                              mass.liturgicalColor === 'white' ? 'Lễ Trọng' :
//                              mass.liturgicalColor === 'purple' ? 'Mùa Chay' :
//                              mass.liturgicalColor === 'red' ? 'Lễ Tử Đạo' : 'Lễ Trọng'}
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center gap-4 mt-3 text-sm">
//                         <div className="flex items-center gap-1.5 text-stone-600">
//                           <ClockIcon className="w-4 h-4" />
//                           <span>{mass.massTime || "07:00"}</span>
//                         </div>
//                         <div className="flex items-center gap-1.5 text-stone-600">
//                           <CalendarIcon className="w-4 h-4" />
//                           <span>{mass.massDate.toLocaleDateString('vi-VN', { weekday: 'short' })}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Icon mũi tên khi hover */}
//                     <ArrowRightIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
//                   </div>
//                 );
//               })}
              
//               {/* Thiệp mời tham dự lễ */}
//               <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-red-50 dark:from-stone-800 dark:to-stone-800 rounded-xl text-center border border-amber-200 dark:border-stone-700">
//                 <p className="text-sm text-stone-600 dark:text-stone-300">
//                   🙏 <span className="font-semibold">"Ngày của Chúa"</span> - Hãy đến tham dự Thánh lễ và nhận ơn lành từ Chúa
//                 </p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Footer tâm linh */}
//         <div className="text-center py-8">
//           <div className="inline-flex items-center gap-2 text-xs text-stone-400">
//             <CrossIcon className="w-3 h-3" />
//             <span>Đức Tin Công Giáo Việt Nam</span>
//             {/* <HeartIcon className="w-3 h-3 text-red-400" /> */}
//             <span>Cầu nguyện - Chia sẻ - Yêu thương</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CalendarIcon, 
  BookOpenIcon, 
  BrainIcon, 
  ChurchIcon,
  ArrowRightIcon,
  ClockIcon,
  CrossIcon,
} from '@/components/icons';
import { mockDailyGospel, mockMasses } from '@/lib/mock-data';

// Bạn có thể thay URL ảnh nhà thờ của mình vào đây
// Cách dùng:
// 1. Upload ảnh vào thư mục public/images/
// 2. Hoặc dùng URL ảnh từ internet
const churchImages = {
  // Ảnh chính - thay link này bằng ảnh nhà thờ bạn
  main: '/images/anh-chua.jpg',  // ← THAY LINK ẢNH CỦA BẠN VÀO ĐÂY
  
  // Ảnh phụ - có thể thay nếu muốn
  banner: '/images/church-banner.jpg',
  thumbnail: '/images/church-thumb.jpg',
  
  // Ảnh dự phòng nếu ảnh chính lỗi
  fallback: 'https://images.unsplash.com/photo-1438032008730-3a1d31fb9e37?q=80&w=2070&auto=format'
};

export default function DashboardPage() {
  const todayGospel = mockDailyGospel;
  const upcomingMasses = mockMasses.slice(0, 3);
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buổi sáng tốt lành';
    if (hour < 18) return 'Buổi chiều bình an';
    return 'Buổi tối an lành';
  };

  // State để xử lý lỗi ảnh
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="space-y-6 pb-20 lg:pb-0 p-4 md:p-6 max-w-7xl mx-auto">
        
        {/* Banner với ảnh nhà thờ - Nổi bật và có thể thay ảnh */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl h-[200px] sm:h-[280px] group">
          {/* Ảnh nhà thờ - THAY ẢNH TẠI ĐÂY */}
          <Image
            src={imgError ? churchImages.fallback : churchImages.main}
            alt="Nhà thờ Giáo Xứ Yên Lộ"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
            onError={() => setImgError(true)}
          />
          
          {/* Lớp phủ gradient để chữ nổi */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Nội dung trên banner */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ChurchIcon className="w-5 h-5 text-amber-300" />
              <span className="text-amber-200 text-sm font-medium">Giáo Xứ Yên Lộ</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold">
              TGP Hà Nội
            </h1>
            <p className="text-white/80 mt-1 text-sm sm:text-base max-w-2xl">
              🙏 {getGreeting()}, xin Chúa chúc lành cho bạn và gia đình
            </p>
          </div>
          
          {/* Nút đổi ảnh (chỉ hiện khi dev, sau này có thể bỏ) */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => {
                // TODO: Mở modal upload ảnh sau
                alert('Sau này bạn có thể upload ảnh nhà thờ ở đây');
              }}
              className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full hover:bg-white/30 transition"
            >
              📷 Đổi ảnh nhà thờ
            </button>
          </div>
        </div>

        {/* Welcome Card nhỏ gọn hơn */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900 via-red-800 to-amber-800 p-5 md:p-6 text-white shadow-lg">
          <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
            <CrossIcon className="w-full h-full" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-amber-200 text-sm">{getGreeting()}</span>
              </div>
              <p className="text-amber-100 text-sm">
                Nguyện xin Chúa ban bình an
              </p>
            </div>
            <div className="text-left sm:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-block">
                <p className="text-xs font-medium">
                  {new Date().toLocaleDateString('vi-VN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-[10px] text-amber-200 mt-0.5">
                  📖 {todayGospel.liturgicalSeason}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { href: "/lich-le", icon: CalendarIcon, title: "Lịch Lễ", desc: "Thánh lễ trong tuần", color: "from-red-500 to-red-700", bgColor: "bg-red-50", textColor: "text-red-700" },
            { href: "/loi-chua", icon: BookOpenIcon, title: "Lời Chúa", desc: "Bài đọc hôm nay", color: "from-amber-500 to-amber-700", bgColor: "bg-amber-50", textColor: "text-amber-700" },
            { href: "/trac-nghiem", icon: BrainIcon, title: "Trắc Nghiệm", desc: "Tìm hiểu giáo lý", color: "from-emerald-500 to-emerald-700", bgColor: "bg-emerald-50", textColor: "text-emerald-700" },
            { href: "/nha-tho", icon: ChurchIcon, title: "Nhà Thờ", desc: "Giờ lễ & địa chỉ", color: "from-purple-500 to-purple-700", bgColor: "bg-purple-50", textColor: "text-purple-700" },
          ].map((item) => (
            <Link href={item.href} key={item.href}>
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 shadow-md hover:-translate-y-1">
                <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                <CardContent className="pt-5 pb-4 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.textColor}`} />
                  </div>
                  <h3 className={`font-semibold text-sm ${item.textColor}`}>{item.title}</h3>
                  <p className="text-[10px] text-stone-400 mt-0.5">{item.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Today's Gospel */}
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-red-50 dark:from-stone-800 dark:to-stone-800">
            <div className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-red-800 dark:text-amber-400">
                <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <BookOpenIcon className="w-5 h-5" />
                </div>
                <span className="font-serif text-xl">Lời Chúa Hôm Nay</span>
              </CardTitle>
              <Button variant="ghost" size="sm" asChild className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <Link href="/loi-chua" className="flex items-center gap-1">
                  Xem thêm
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-amber-50/50 dark:bg-stone-800/50 rounded-xl p-5 border-l-4 border-amber-500">
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed italic text-sm">
                &ldquo;{todayGospel.gospel.split('\n\n')[1]?.substring(0, 200) || 'Hãy yêu thương nhau như Thầy đã yêu thương các con.'}...&rdquo;
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <span className="font-semibold">💭 Suy niệm:</span>{' '}
                {todayGospel.reflection?.split('\n')[2]?.substring(0, 150) || 
                 'Lạy Chúa, xin cho con biết lắng nghe và thực hành Lời Chúa trong đời sống hằng ngày. Amen.'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Masses + Hình nhà thờ nhỏ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Danh sách thánh lễ */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg h-full">
              <CardHeader className="bg-gradient-to-r from-stone-100 to-stone-50 dark:from-stone-800 dark:to-stone-800/50">
                <div className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                    <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <CalendarIcon className="w-5 h-5 text-red-600 dark:text-amber-400" />
                    </div>
                    <span className="text-lg font-semibold">Thánh Lễ Sắp Tới</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild className="text-red-600">
                    <Link href="/lich-le">Xem tất cả →</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-5">
                <div className="space-y-3">
                  {upcomingMasses.map((mass, index) => {
                    const massColors = {
                      green: { bg: "bg-emerald-50", border: "border-emerald-500", text: "text-emerald-700" },
                      white: { bg: "bg-stone-50", border: "border-stone-400", text: "text-stone-700" },
                      purple: { bg: "bg-purple-50", border: "border-purple-500", text: "text-purple-700" },
                      red: { bg: "bg-red-50", border: "border-red-500", text: "text-red-700" },
                      gold: { bg: "bg-amber-50", border: "border-amber-500", text: "text-amber-700" },
                    };
                    const colors = massColors[mass.liturgicalColor as keyof typeof massColors] || massColors.green;
                    
                    return (
                      <div 
                        key={mass.id} 
                        className={`flex items-center gap-4 p-3 rounded-xl ${colors.bg} hover:shadow-md transition-all cursor-pointer`}
                      >
                        <div className="flex flex-col items-center min-w-[50px]">
                          <div className={`text-xl font-bold ${colors.text}`}>
                            {mass.massDate.getDate()}
                          </div>
                          <div className="text-[10px] text-stone-500 uppercase">
                            {mass.massDate.toLocaleDateString('vi-VN', { month: 'short' })}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className={`font-semibold text-sm ${colors.text}`}>
                            {mass.title}
                          </h4>
                          <div className="flex items-center gap-3 mt-1 text-xs text-stone-500">
                            <span className="flex items-center gap-1">🕘 {mass.massTime || "07:00"}</span>
                            <span>⛪ {mass.church?.name || "Nhà thờ Chính Tòa"}</span>
                          </div>
                        </div>
                        
                        <ArrowRightIcon className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card giới thiệu nhà thờ với ảnh */}
          <div>
            <Card className="border-0 shadow-lg overflow-hidden h-full">
              <div className="relative h-40 w-full">
                <Image
                  src={imgError ? churchImages.fallback : churchImages.main}
                  alt="Nhà thờ Giáo Xứ Yên Lộ"
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-medium">⛪ Nhà Thờ</p>
                  <p className="text-sm font-bold">Giáo Xứ Yên Lộ</p>
                </div>
              </div>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-stone-800 dark:text-stone-200">Thông Tin Giáo Xứ</h4>
                <div className="mt-2 space-y-2 text-sm text-stone-600 dark:text-stone-400">
                  <p>📍 Địa chỉ: [Tổ 11 Yên Nghĩa Hà Đông]</p>
                  <p>🕊️ Linh mục quản xứ: [Phero Nguyễn Văn Lanh]</p>
                  <p>📞 Liên hệ: [Số điện thoại]</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 border-red-200 text-red-600 hover:bg-red-50"
                  asChild
                >
                  <Link href="/nha-tho">
                    Xem chi tiết
                    <ArrowRightIcon className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer tâm linh */}
        <div className="text-center py-6">
          <div className="inline-flex items-center gap-2 text-xs text-stone-400">
            <CrossIcon className="w-3 h-3" />
            <span>Giáo Xứ Yên Lộ - Giáo Phận Hà Nội</span>
            <span>🙏 Cầu nguyện - Chia sẻ - Yêu thương</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Thêm useState ở đầu file
import { useState } from 'react';