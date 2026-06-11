'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Gift, 
  Star, 
  Award, 
  Crown,
  Sparkles,
  Heart,
  Cross,
  Church,
  BookOpen,
  Music,
  ShoppingBag,
  Coins,
  Gem,
  Ticket,
  Flame,
  Shield,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  RotateCcw,
  Home,
  Plus,
  Minus,
  X
} from 'lucide-react';

// Dữ liệu quà tặng
const gifts = [
  {
    id: 1,
    name: "Huy hiệu Tân Tòng",
    description: "Huy hiệu dành cho những người mới bắt đầu hành trình đức tin",
    price: 50,
    originalPrice: 100,
    icon: "🌟",
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-900/30 to-teal-900/30",
    category: "huy-hieu",
    stock: 100,
    popular: true
  },
  {
    id: 2,
    name: "Kinh Sách Điện Tử",
    description: "Bộ Kinh Thánh và Sách Giáo Lý bản điện tử cao cấp",
    price: 100,
    originalPrice: 200,
    icon: "📖",
    color: "from-blue-500 to-indigo-500",
    bg: "from-blue-900/30 to-indigo-900/30",
    category: "sach",
    stock: 50,
    popular: true
  },
  {
    id: 3,
    name: "Hoa Hồng Thiêng",
    description: "Hoa hồng đặc biệt được làm phép, tượng trưng cho lòng thành kính",
    price: 150,
    originalPrice: 300,
    icon: "🌹",
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-900/30 to-rose-900/30",
    category: "hoa",
    stock: 30,
    popular: false
  },
  {
    id: 4,
    name: "Áo Dòng Tập Sự",
    description: "Áo dòng cao cấp dành cho các thành viên nhiệt thành",
    price: 300,
    originalPrice: 500,
    icon: "👘",
    color: "from-purple-500 to-violet-500",
    bg: "from-purple-900/30 to-violet-900/30",
    category: "ao",
    stock: 20,
    popular: true
  },
  {
    id: 5,
    name: "Hạt Mân Côi Pha Lê",
    description: "Tràng hạt Mân Côi làm từ pha lê cao cấp, được làm phép",
    price: 200,
    originalPrice: 400,
    icon: "📿",
    color: "from-cyan-500 to-blue-500",
    bg: "from-cyan-900/30 to-blue-900/30",
    category: "hat",
    stock: 40,
    popular: false
  },
  {
    id: 6,
    name: "Thánh Giá Treo Tường",
    description: "Thánh giá gỗ cao cấp, chạm khắc tinh xảo",
    price: 250,
    originalPrice: 450,
    icon: "✝️",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-900/30 to-orange-900/30",
    category: "thanh-gia",
    stock: 25,
    popular: true
  },
  {
    id: 7,
    name: "Sổ Tay Cầu Nguyện",
    description: "Sổ tay ghi chép lời cầu nguyện, da cao cấp",
    price: 80,
    originalPrice: 150,
    icon: "📓",
    color: "from-green-500 to-emerald-500",
    bg: "from-green-900/30 to-emerald-900/30",
    category: "so",
    stock: 60,
    popular: false
  },
  {
    id: 8,
    name: "Nhang Thánh Cao Cấp",
    description: "Bộ nhang thánh với hương trầm tự nhiên",
    price: 120,
    originalPrice: 220,
    icon: "🕯️",
    color: "from-yellow-500 to-amber-500",
    bg: "from-yellow-900/30 to-amber-900/30",
    category: "nhang",
    stock: 35,
    popular: false
  }
];

// Lịch sử đổi quà mẫu
const historyItems = [
  { id: 1, name: "Huy hiệu Tân Tòng", points: 50, date: "2024-01-15", status: "completed" },
  { id: 2, name: "Kinh Sách Điện Tử", points: 100, date: "2024-01-20", status: "completed" },
];

// Removed erroneous duplicate default export class declaration

// Component chính
export default function QuaTangPage() {
  const router = useRouter();
  const [userPoints, setUserPoints] = useState(420); // Điểm của người dùng
  const [cart, setCart] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedGift, setSelectedGift] = useState<any>(null);

  // Lọc quà theo danh mục
  const filteredGifts = selectedCategory === 'all' 
    ? gifts 
    : gifts.filter(g => g.category === selectedCategory);

  // Thêm vào giỏ
  const addToCart = (giftId: number) => {
    setCart(prev => [...prev, giftId]);
  };

  // Xóa khỏi giỏ
  const removeFromCart = (giftId: number) => {
    setCart(prev => prev.filter(id => id !== giftId));
  };

  // Tính tổng điểm trong giỏ
  const totalPoints = cart.reduce((sum, id) => {
    const gift = gifts.find(g => g.id === id);
    return sum + (gift?.price || 0);
  }, 0);

  // Xử lý đổi quà
  const handleCheckout = () => {
    if (totalPoints > userPoints) {
      alert("Bạn không đủ điểm để đổi những quà này!");
      return;
    }
    setShowCheckout(false);
    setShowSuccess(true);
    setUserPoints(prev => prev - totalPoints);
    setCart([]);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Background component
  const ChurchBackground = () => (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
      <div className="fixed inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="stainedGlass" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="none" />
              <polygon points="100,20 120,50 180,60 140,100 160,160 100,130 40,160 60,100 20,60 80,50" fill="rgba(251,191,36,0.05)" stroke="rgba(251,191,36,0.1)" strokeWidth="1" />
              <circle cx="100" cy="100" r="15" fill="rgba(236,72,153,0.05)" stroke="rgba(236,72,153,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stainedGlass)" />
        </svg>
      </div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
    </>
  );

  return (
    <>
      <ChurchBackground />
      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ rotate: -10, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Gift className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">🎁 Kho Quà Tặng</h1>
                <p className="text-amber-200/80">Đổi điểm để nhận những phần quà ý nghĩa</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              {/* Giỏ hàng */}
              <button
                onClick={() => setShowCart(true)}
                className="relative flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <span className="text-white font-semibold">Giỏ quà</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              
              {/* Điểm của bạn */}
              <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl border border-amber-500/30">
                <Coins className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-amber-200 text-xs">Điểm của bạn</p>
                  <p className="text-white font-bold text-xl">{userPoints}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Danh mục */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'all', name: 'Tất cả', icon: '🎁' },
              { id: 'huy-hieu', name: 'Huy hiệu', icon: '🏅' },
              { id: 'sach', name: 'Sách', icon: '📚' },
              { id: 'ao', name: 'Áo dòng', icon: '👘' },
              { id: 'hat', name: 'Tràng hạt', icon: '📿' },
              { id: 'thanh-gia', name: 'Thánh giá', icon: '✝️' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid quà tặng */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredGifts.map((gift, index) => (
              <motion.div
                key={gift.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${gift.bg} backdrop-blur-xl rounded-2xl border border-white/20 p-5 relative overflow-hidden cursor-pointer`}
                onClick={() => setSelectedGift(gift)}
              >
                {gift.popular && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">🔥 Hot</div>
                )}
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${gift.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg mb-4`}>
                    {gift.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{gift.name}</h3>
                  <p className="text-white/60 text-xs mb-3 line-clamp-2">{gift.description}</p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 font-bold">{gift.price}</span>
                    <span className="text-white/40 line-through text-xs">{gift.originalPrice}</span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(gift.id); }}
                    className="w-full py-2 bg-white/10 rounded-xl text-white text-sm font-semibold hover:bg-white/20 transition-all"
                  >
                    + Thêm vào giỏ
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Modal giỏ hàng */}
          {showCart && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowCart(false)}>
              <div className="bg-gradient-to-br from-indigo-900/95 to-purple-900/95 rounded-3xl border border-white/20 max-w-md w-full max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">🛒 Giỏ quà của bạn</h2>
                    <button onClick={() => setShowCart(false)} className="text-white/60 hover:text-white"><X className="w-6 h-6" /></button>
                  </div>
                  {cart.length === 0 ? (
                    <p className="text-white/60 text-center py-8">Giỏ quà trống</p>
                  ) : (
                    <>
                      {cart.map((id) => {
                        const gift = gifts.find(g => g.id === id);
                        return (
                          <div key={id} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl mb-2">
                            <div className={`w-10 h-10 bg-gradient-to-br ${gift?.color} rounded-lg flex items-center justify-center`}>{gift?.icon}</div>
                            <div className="flex-1"><p className="text-white font-medium">{gift?.name}</p><p className="text-amber-400 text-sm">{gift?.price} điểm</p></div>
                            <button onClick={() => removeFromCart(id)} className="text-red-400 hover:text-red-300"><Minus className="w-5 h-5" /></button>
                          </div>
                        );
                      })}
                      <div className="border-t border-white/20 pt-4 mt-4">
                        <div className="flex justify-between text-white mb-4"><span>Tổng:</span><span className="text-amber-400 font-bold">{totalPoints} điểm</span></div>
                        <button
                          onClick={() => { setShowCart(false); setShowCheckout(true); }}
                          className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-gray-900"
                        >Xác nhận đổi quà</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Modal xác nhận */}
          {showCheckout && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowCheckout(false)}>
              <div className="bg-gradient-to-br from-indigo-900/95 to-purple-900/95 rounded-3xl border border-white/20 max-w-md w-full p-6 text-center" onClick={(e) => e.stopPropagation()}>
                <div className="w-20 h-20 mx-auto bg-amber-500 rounded-full flex items-center justify-center mb-4"><Gift className="w-10 h-10 text-white" /></div>
                <h2 className="text-2xl font-bold text-white mb-2">Xác nhận đổi quà</h2>
                <p className="text-white/60 mb-4">Bạn có chắc muốn đổi {cart.length} món quà này?</p>
                <div className="flex gap-3">
                  <button onClick={() => setShowCheckout(false)} className="flex-1 py-3 bg-white/10 rounded-xl text-white">Hủy</button>
                  <button onClick={handleCheckout} className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-gray-900">Xác nhận</button>
                </div>
              </div>
            </div>
          )}

          {/* Modal thành công */}
          {showSuccess && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-gradient-to-br from-green-900/95 to-emerald-900/95 rounded-3xl border border-green-500/30 max-w-md w-full p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4"><CheckCircle className="w-10 h-10 text-white" /></div>
                <h2 className="text-2xl font-bold text-white mb-2">🎉 Đổi quà thành công!</h2>
                <p className="text-white/60">Quà sẽ được gửi đến bạn trong thời gian sớm nhất.</p>
              </motion.div>
            </div>
          )}

          {/* Modal chi tiết quà */}
          {selectedGift && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedGift(null)}>
              <div className="bg-gradient-to-br from-indigo-900/95 to-purple-900/95 rounded-3xl border border-white/20 max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${selectedGift.color} rounded-2xl flex items-center justify-center text-5xl shadow-lg mb-4`}>{selectedGift.icon}</div>
                <h2 className="text-2xl font-bold text-white text-center mb-2">{selectedGift.name}</h2>
                <p className="text-white/60 text-center text-sm mb-4">{selectedGift.description}</p>
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="flex justify-between mb-2"><span className="text-white/60">Giá gốc:</span><span className="text-white line-through">{selectedGift.originalPrice} điểm</span></div>
                  <div className="flex justify-between"><span className="text-white/60">Giá đổi:</span><span className="text-amber-400 font-bold text-xl">{selectedGift.price} điểm</span></div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setSelectedGift(null)} className="flex-1 py-3 bg-white/10 rounded-xl text-white">Đóng</button>
                  <button onClick={() => { addToCart(selectedGift.id); setSelectedGift(null); }} className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-gray-900">+ Thêm vào giỏ</button>
                </div>
              </div>
            </div>
          )}

          {/* Nút về trang chủ */}
          <div className="mt-12 text-center">
            <button onClick={() => router.push('/')} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all"><Home className="w-5 h-5" />Về trang chủ</button>
          </div>
        </div>
      </div>
    </>
  );
}