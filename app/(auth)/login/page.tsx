'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Cross, 
  Church, 
  Heart,
  Shield,
  LogIn
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
const response = await fetch(
  'https://church.codex.pro.vn/Journey_of_faith/Auth',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: formData.username,
      password: formData.password,
    }),
  }
);

const data = await response.json();

console.log(data);

if (response.ok) {
  // lưu token
  localStorage.setItem('token', data.token);

  // chuyển trang
  router.push('/dashboard');
} else {
  setError(data.detail || 'Đăng nhập thất bại');
}

    } catch {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      
      {/* Hiệu ứng kính màu nhà thờ */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Hoa văn thánh giá */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-6xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ✝
          </div>
        ))}
      </div>

      {/* Lưới ánh sáng */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-lg">
          
          {/* Thánh giá và tiêu đề */}
          <div className="text-center mb-8 animate-fadeInDown">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-45">
                  <Cross className="w-12 h-12 text-white -rotate-45" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
              Chào Mừng Trở Lại
            </h1>
            <p className="text-amber-200/80 text-sm">
              Đăng nhập để tiếp tục hành trình đức tin
            </p>
          </div>

          {/* Card đăng nhập */}
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl animate-fadeInUp">
            
            {/* Thông báo lỗi */}
            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 animate-shake">
                <div className="flex items-center gap-3 text-red-300">
                  <Shield className="w-5 h-5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  Tên đăng nhập
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all duration-300"
                    placeholder="nhap@email.com"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/0 to-amber-400/0 group-focus-within:from-amber-400/10 group-focus-within:via-amber-400/5 group-focus-within:to-transparent pointer-events-none transition-all duration-500" />
                </div>
              </div>

              {/* Mật khẩu */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-amber-400" />
                    Mật khẩu
                  </label>
                  <Link 
                    href="/forgot-password" 
                    className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="relative group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full h-12 px-4 pr-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all duration-300"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/0 to-amber-400/0 group-focus-within:from-amber-400/10 group-focus-within:via-amber-400/5 group-focus-within:to-transparent pointer-events-none transition-all duration-500" />
                </div>
              </div>

              {/* Ghi nhớ đăng nhập */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500 focus:ring-offset-0" />
                  <span className="text-sm text-gray-300">Ghi nhớ đăng nhập</span>
                </label>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Heart className="w-3 h-3" />
                  <span>Chúa yêu bạn</span>
                </div>
              </div>

              {/* Nút đăng nhập */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl font-semibold text-gray-900 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    <span>Đang đăng nhập...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <LogIn className="w-4 h-4" />
                    <span>Đăng nhập</span>
                  </div>
                )}
              </button>
            </form>

            {/* Đăng ký */}
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Chưa có tài khoản?{' '}
                <Link 
                  href="/register" 
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors inline-flex items-center gap-1 group"
                >
                  Đăng ký ngay
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </p>
            </div>

            {/* Đường kẻ trang trí */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-transparent text-gray-400">hoặc</span>
              </div>
            </div>

            {/* Nút đăng nhập nhanh */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                <Church className="w-4 h-4 group-hover:text-amber-400 transition-colors" />
                Giáo xứ
              </button>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                <Heart className="w-4 h-4 group-hover:text-rose-400 transition-colors" />
                Hội đoàn
              </button>
            </div>
          </div>

          {/* Câu Kinh Thánh */}
          <div className="mt-8 text-center">
            <div className="inline-block p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-gray-200 text-sm italic leading-relaxed max-w-md">
                “Hãy đến với Ta, tất cả những ai đang vất vả mang gánh nặng nề, 
                Ta sẽ cho nghỉ ngơi bồi dưỡng.”
              </p>
              <p className="text-amber-400/80 text-xs mt-2 font-semibold tracking-wider">
                — MATTHÊU 11:28 —
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
}