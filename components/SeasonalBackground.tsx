// // 'use client';

// // import { useState, useEffect } from 'react';

// // export function SeasonalBackground() {
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   if (!mounted) {
// //     return <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100" />;
// //   }

// //   return (
// //     <>
// //       {/* Lớp nền chính */}
// //       <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100" />
      
// //       {/* Thánh giá bay */}
// //       <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
// //         {[...Array(20)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute text-2xl animate-float"
// //             style={{
// //               top: `${Math.random() * 100}%`,
// //               left: `${Math.random() * 100}%`,
// //               animationDelay: `${Math.random() * 10}s`,
// //               animationDuration: `${10 + Math.random() * 15}s`,
// //               opacity: 0.4,
// //             }}
// //           >
// //             ✝
// //           </div>
// //         ))}
// //       </div>

// //       {/* Chim Bồ Câu */}
// //       <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
// //         <div className="absolute top-1/4 left-1/4 text-6xl animate-dove-1 opacity-30">🕊️</div>
// //         <div className="absolute top-1/3 right-1/4 text-5xl animate-dove-2 opacity-25">🕊️</div>
// //         <div className="absolute bottom-1/4 left-1/3 text-5xl animate-dove-3 opacity-25">🕊️</div>
// //       </div>

// //       {/* Hoa Mân Côi */}
// //       <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
// //         {[...Array(25)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute text-xl animate-float-rose"
// //             style={{
// //               top: `${Math.random() * 100}%`,
// //               left: `${Math.random() * 100}%`,
// //               animationDelay: `${Math.random() * 12}s`,
// //               animationDuration: `${12 + Math.random() * 15}s`,
// //               opacity: 0.3,
// //             }}
// //           >
// //             🌹
// //           </div>
// //         ))}
// //       </div>

// //       {/* Tia sáng */}
// //       <div className="fixed inset-0 overflow-hidden pointer-events-none">
// //         {[...Array(6)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute top-0 w-0.5 h-full animate-light-ray"
// //             style={{
// //               left: `${15 + i * 12}%`,
// //               animationDelay: `${i * 2}s`,
// //               animationDuration: `${10 + i}s`,
// //               background: `linear-gradient(to bottom, #7C3A5C40, transparent)`,
// //             }}
// //           />
// //         ))}
// //       </div>

// //       {/* Biểu tượng cố định */}
// //       <div className="fixed bottom-8 right-8 text-5xl animate-bounce-slow pointer-events-none select-none opacity-20">📖</div>
// //       <div className="fixed top-8 left-8 text-5xl animate-bounce-slow-delayed pointer-events-none select-none opacity-15">⛪</div>

// //       <style jsx>{`
// //         @keyframes float {
// //           0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
// //           20% { opacity: 0.6; }
// //           80% { opacity: 0.6; }
// //           100% { transform: translateY(-200px) rotate(20deg); opacity: 0; }
// //         }
// //         @keyframes dove-1 {
// //           0% { transform: translateX(-100px); opacity: 0; }
// //           20% { opacity: 0.5; }
// //           80% { opacity: 0.5; }
// //           100% { transform: translateX(300px) translateY(-100px); opacity: 0; }
// //         }
// //         @keyframes dove-2 {
// //           0% { transform: translateX(100px); opacity: 0; }
// //           20% { opacity: 0.45; }
// //           80% { opacity: 0.45; }
// //           100% { transform: translateX(-250px) translateY(-80px); opacity: 0; }
// //         }
// //         @keyframes dove-3 {
// //           0% { transform: translateX(-50px); opacity: 0; }
// //           20% { opacity: 0.4; }
// //           80% { opacity: 0.4; }
// //           100% { transform: translateX(200px) translateY(-120px); opacity: 0; }
// //         }
// //         @keyframes float-rose {
// //           0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
// //           20% { opacity: 0.5; }
// //           80% { opacity: 0.5; }
// //           100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
// //         }
// //         @keyframes light-ray {
// //           0% { transform: translateY(-100%); opacity: 0; }
// //           30% { opacity: 0.6; }
// //           70% { opacity: 0.6; }
// //           100% { transform: translateY(1000%); opacity: 0; }
// //         }
// //         @keyframes bounce-slow {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-15px); }
// //         }
// //         @keyframes bounce-slow-delayed {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-12px); }
// //         }
// //         .animate-float {
// //           animation: float linear infinite;
// //         }
// //         .animate-dove-1 {
// //           animation: dove-1 15s ease-in-out infinite;
// //         }
// //         .animate-dove-2 {
// //           animation: dove-2 18s ease-in-out infinite;
// //         }
// //         .animate-dove-3 {
// //           animation: dove-3 20s ease-in-out infinite;
// //         }
// //         .animate-float-rose {
// //           animation: float-rose linear infinite;
// //         }
// //         .animate-light-ray {
// //           animation: light-ray linear infinite;
// //         }
// //         .animate-bounce-slow {
// //           animation: bounce-slow 5s ease-in-out infinite;
// //         }
// //         .animate-bounce-slow-delayed {
// //           animation: bounce-slow-delayed 6s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </>
// //   );
// // }
// 'use client';

// import { useState, useEffect } from 'react';

// // Định nghĩa màu sắc theo mùa
// const seasonColorMap = {
//   advent: { primary: '#7C3A5C', secondary: '#C4A5B8', light: '#F5E6F0' },      // Mùa Vọng - Tím
//   christmas: { primary: '#C8402A', secondary: '#F5C542', light: '#FEF5E6' },    // Giáng Sinh - Đỏ/Vàng
//   lent: { primary: '#5A4A6E', secondary: '#B8A8C8', light: '#F0EAF5' },          // Mùa Chay - Tím nhạt
//   easter: { primary: '#D4AF37', secondary: '#F0E8C8', light: '#FEFBF0' },       // Phục Sinh - Vàng
//   ordinary: { primary: '#2E7D52', secondary: '#A8C8B8', light: '#F0F7F2' },     // Thường Niên - Xanh
// };

// type Season = 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';

// export function SeasonalBackground({ season = 'ordinary' }: { season?: Season }) {
//   const [mounted, setMounted] = useState(false);
//   const colors = seasonColorMap[season];

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100" />;
//   }

//   return (
//     <>
//       {/* Lớp nền chính theo mùa */}
//       <div 
//         className="fixed inset-0 bg-gradient-to-br animate-gradient-slow"
//         style={{
//           background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.light} 50%, #f5f5f0 100%)`,
//           backgroundSize: '200% 200%',
//         }}
//       />
      
//       {/* Vân giấy cổ */}
//       <div className="fixed inset-0 opacity-20 pointer-events-none">
//         <svg className="absolute inset-0 w-full h-full">
//           <defs>
//             <pattern id="paperTextureSeasonal" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
//               <rect width="200" height="200" fill="none" />
//               <path d="M0 100 L200 100 M100 0 L100 200" stroke="#8B6914" strokeWidth="0.5" strokeDasharray="2 8" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#paperTextureSeasonal)" />
//         </svg>
//       </div>

//       {/* Ánh sáng trung tâm theo màu mùa */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-center"
//           style={{ background: `radial-gradient(circle, ${colors.primary}30, transparent 70%)` }}
//         />
//       </div>

//       {/* Thánh giá bay theo màu mùa */}
//       <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-2xl font-bold animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 10}s`,
//               animationDuration: `${10 + Math.random() * 15}s`,
//               color: `${colors.primary}40`,
//               textShadow: `0 0 5px ${colors.primary}20`,
//             }}
//           >
//             ✝
//           </div>
//         ))}
//       </div>

//       {/* Chim Bồ Câu */}
//       <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
//         <div className="absolute top-1/4 left-1/4 text-6xl animate-dove-1" style={{ color: `${colors.secondary}50` }}>🕊️</div>
//         <div className="absolute top-1/3 right-1/4 text-5xl animate-dove-2" style={{ color: `${colors.secondary}45` }}>🕊️</div>
//         <div className="absolute bottom-1/4 left-1/3 text-5xl animate-dove-3" style={{ color: `${colors.secondary}40` }}>🕊️</div>
//       </div>

//       {/* Hoa Mân Côi */}
//       <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
//         {[...Array(25)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-xl animate-float-rose"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 12}s`,
//               animationDuration: `${12 + Math.random() * 15}s`,
//               color: `rgba(236, 72, 153, 0.25)`,
//             }}
//           >
//             🌹
//           </div>
//         ))}
//       </div>

//       {/* Tia sáng theo màu mùa */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute top-0 w-0.5 h-full animate-light-ray"
//             style={{
//               left: `${15 + i * 12}%`,
//               animationDelay: `${i * 2}s`,
//               animationDuration: `${10 + i}s`,
//               background: `linear-gradient(to bottom, ${colors.primary}40, transparent)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Biểu tượng cố định theo màu mùa */}
//       <div className="fixed bottom-8 right-8 text-5xl animate-bounce-slow pointer-events-none select-none" style={{ color: `${colors.primary}25` }}>📖</div>
//       <div className="fixed top-8 left-8 text-5xl animate-bounce-slow-delayed pointer-events-none select-none" style={{ color: `${colors.primary}20` }}>⛪</div>

//       <style jsx>{`
//         @keyframes gradient-slow {
//           0% { background-position: 0% 0%; }
//           50% { background-position: 100% 100%; }
//           100% { background-position: 0% 0%; }
//         }
//         @keyframes pulse-center {
//           0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); }
//           50% { opacity: 0.35; transform: translate(-50%, -50%) scale(1.35); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
//           20% { opacity: 0.6; }
//           80% { opacity: 0.6; }
//           100% { transform: translateY(-200px) rotate(20deg); opacity: 0; }
//         }
//         @keyframes dove-1 {
//           0% { transform: translateX(-100px); opacity: 0; }
//           20% { opacity: 0.5; }
//           80% { opacity: 0.5; }
//           100% { transform: translateX(300px) translateY(-100px); opacity: 0; }
//         }
//         @keyframes dove-2 {
//           0% { transform: translateX(100px); opacity: 0; }
//           20% { opacity: 0.45; }
//           80% { opacity: 0.45; }
//           100% { transform: translateX(-250px) translateY(-80px); opacity: 0; }
//         }
//         @keyframes dove-3 {
//           0% { transform: translateX(-50px); opacity: 0; }
//           20% { opacity: 0.4; }
//           80% { opacity: 0.4; }
//           100% { transform: translateX(200px) translateY(-120px); opacity: 0; }
//         }
//         @keyframes float-rose {
//           0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
//           20% { opacity: 0.5; }
//           80% { opacity: 0.5; }
//           100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
//         }
//         @keyframes light-ray {
//           0% { transform: translateY(-100%); opacity: 0; }
//           30% { opacity: 0.6; }
//           70% { opacity: 0.6; }
//           100% { transform: translateY(1000%); opacity: 0; }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes bounce-slow-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-12px); }
//         }
//         .animate-gradient-slow {
//           animation: gradient-slow 20s ease infinite;
//         }
//         .animate-pulse-center {
//           animation: pulse-center 6s ease-in-out infinite;
//         }
//         .animate-float {
//           animation: float linear infinite;
//         }
//         .animate-dove-1 {
//           animation: dove-1 15s ease-in-out infinite;
//         }
//         .animate-dove-2 {
//           animation: dove-2 18s ease-in-out infinite;
//         }
//         .animate-dove-3 {
//           animation: dove-3 20s ease-in-out infinite;
//         }
//         .animate-float-rose {
//           animation: float-rose linear infinite;
//         }
//         .animate-light-ray {
//           animation: light-ray linear infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 5s ease-in-out infinite;
//         }
//         .animate-bounce-slow-delayed {
//           animation: bounce-slow-delayed 6s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   );
// }
'use client';

import { useState, useEffect } from 'react';

const seasonColorMap = {
  advent: { primary: '#7C3A5C', secondary: '#C4A5B8', light: '#F5E6F0' },
  christmas: { primary: '#C8402A', secondary: '#F5C542', light: '#FEF5E6' },
  lent: { primary: '#5A4A6E', secondary: '#B8A8C8', light: '#F0EAF5' },
  easter: { primary: '#D4AF37', secondary: '#F0E8C8', light: '#FEFBF0' },
  ordinary: { primary: '#2E7D52', secondary: '#A8C8B8', light: '#F0F7F2' },
};

type Season = 'advent' | 'christmas' | 'lent' | 'easter' | 'ordinary';

export function SeasonalBackground({ season = 'ordinary' }: { season?: Season }) {
  const [mounted, setMounted] = useState(false);
  const [dustParticles, setDustParticles] = useState<Array<{ top: string; left: string; delay: string; duration: string; size: string }>>([]);
  const colors = seasonColorMap[season];

  useEffect(() => {
    setMounted(true);
    // Tạo hạt bụi vàng sau khi mount
    const particles = Array.from({ length: 60 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${8 + Math.random() * 12}s`,
      size: `${2 + Math.random() * 4}px`,
    }));
    setDustParticles(particles);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100" />;
  }

  return (
    <>
      {/* Lớp nền chính */}
      <div 
        className="fixed inset-0 bg-gradient-to-br animate-gradient-slow"
        style={{
          background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.light} 50%, #f5f5f0 100%)`,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Vân giấy cổ */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="paperTextureSeasonal" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="none" />
              <path d="M0 100 L200 100 M100 0 L100 200" stroke="#8B6914" strokeWidth="0.5" strokeDasharray="2 8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#paperTextureSeasonal)" />
        </svg>
      </div>

      {/* Ánh sáng trung tâm */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-center"
          style={{ background: `radial-gradient(circle, ${colors.primary}30, transparent 70%)` }}
        />
      </div>

      {/* Thánh giá bay */}
      <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl font-bold animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              color: `${colors.primary}40`,
            }}
          >
            ✝
          </div>
        ))}
      </div>

      {/* Chim Bồ Câu */}
      <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
        <div className="absolute top-1/4 left-1/4 text-6xl animate-dove-1" style={{ color: `${colors.secondary}50` }}>🕊️</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-dove-2" style={{ color: `${colors.secondary}45` }}>🕊️</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl animate-dove-3" style={{ color: `${colors.secondary}40` }}>🕊️</div>
      </div>

      {/* Hoa Mân Côi */}
      <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl animate-float-rose"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 15}s`,
              color: `rgba(236, 72, 153, 0.25)`,
            }}
          >
            🌹
          </div>
        ))}
      </div>

      {/* ⭐ HẠT BỤI VÀNG - CHẤM VÀNG LẤP LÁNH ⭐ */}
      <div className="fixed inset-0 pointer-events-none" suppressHydrationWarning>
        {dustParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-dust"
            style={{
              width: particle.size,
              height: particle.size,
              top: particle.top,
              left: particle.left,
              background: `rgba(251, 191, 36, 0.7)`,
              boxShadow: `0 0 ${parseInt(particle.size) * 2}px rgba(251, 191, 36, 0.6)`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Tia sáng */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-0.5 h-full animate-light-ray"
            style={{
              left: `${15 + i * 12}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${10 + i}s`,
              background: `linear-gradient(to bottom, ${colors.primary}40, transparent)`,
            }}
          />
        ))}
      </div>

      {/* Biểu tượng cố định */}
      <div className="fixed bottom-8 right-8 text-5xl animate-bounce-slow pointer-events-none select-none" style={{ color: `${colors.primary}25` }}>📖</div>
      <div className="fixed top-8 left-8 text-5xl animate-bounce-slow-delayed pointer-events-none select-none" style={{ color: `${colors.primary}20` }}>⛪</div>

      <style jsx>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes pulse-center {
          0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.35; transform: translate(-50%, -50%) scale(1.35); }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-200px) rotate(20deg); opacity: 0; }
        }
        @keyframes dove-1 {
          0% { transform: translateX(-100px); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateX(300px) translateY(-100px); opacity: 0; }
        }
        @keyframes dove-2 {
          0% { transform: translateX(100px); opacity: 0; }
          20% { opacity: 0.45; }
          80% { opacity: 0.45; }
          100% { transform: translateX(-250px) translateY(-80px); opacity: 0; }
        }
        @keyframes dove-3 {
          0% { transform: translateX(-50px); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { transform: translateX(200px) translateY(-120px); opacity: 0; }
        }
        @keyframes float-rose {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
        }
        @keyframes float-dust {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateY(-150px) translateX(30px); opacity: 0; }
        }
        @keyframes light-ray {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 0.6; }
          70% { opacity: 0.6; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-gradient-slow {
          animation: gradient-slow 20s ease infinite;
        }
        .animate-pulse-center {
          animation: pulse-center 6s ease-in-out infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-dove-1 {
          animation: dove-1 15s ease-in-out infinite;
        }
        .animate-dove-2 {
          animation: dove-2 18s ease-in-out infinite;
        }
        .animate-dove-3 {
          animation: dove-3 20s ease-in-out infinite;
        }
        .animate-float-rose {
          animation: float-rose linear infinite;
        }
        .animate-float-dust {
          animation: float-dust linear infinite;
        }
        .animate-light-ray {
          animation: light-ray linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .animate-bounce-slow-delayed {
          animation: bounce-slow-delayed 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}