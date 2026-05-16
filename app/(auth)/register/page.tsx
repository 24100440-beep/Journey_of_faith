'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  XCircle,
  Shield,
  Heart,
  Cross
} from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Password strength checker
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: '',
    hasMinLength: false,
    hasNumber: false,
    hasUpperCase: false,
    hasSpecialChar: false,
  });

  const checkPasswordStrength = (password: string) => {
    const hasMinLength = password.length >= 6;
    const hasNumber = /[0-9]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    let score = 0;
    if (hasMinLength) score++;
    if (hasNumber) score++;
    if (hasUpperCase) score++;
    if (hasSpecialChar) score++;
    
    let message = '';
    if (score === 0) message = 'Rất yếu';
    else if (score === 1) message = 'Yếu';
    else if (score === 2) message = 'Trung bình';
    else if (score === 3) message = 'Mạnh';
    else if (score === 4) message = 'Rất mạnh';
    
    setPasswordStrength({
      score,
      message,
      hasMinLength,
      hasNumber,
      hasUpperCase,
      hasSpecialChar,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    checkPasswordStrength(newPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('✝ Mật khẩu xác nhận không khớp');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('✝ Mật khẩu phải có ít nhất 6 ký tự');
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push('/login?registered=true');
    } catch {
      setError('Đăng ký thất bại. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header với cross icon */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
          <Cross className="w-8 h-8 text-white" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
          Gia Nhập Gia Đình
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Tạo tài khoản để đồng hành cùng cộng đoàn
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error Message */}
        {error && (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 animate-shake">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
              <XCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Họ và tên */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <User className="w-4 h-4 text-amber-500" />
            Họ và tên
          </label>
          <div className="relative group">
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full h-12 px-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all duration-300"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/0 to-amber-400/0 group-focus-within:from-amber-400/5 group-focus-within:via-amber-400/5 group-focus-within:to-transparent pointer-events-none transition-all duration-500" />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-500" />
            Email
          </label>
          <div className="relative group">
            <input
              type="email"
              placeholder="nguyenvana@email.com"
              className="w-full h-12 px-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all duration-300"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/0 to-amber-400/0 group-focus-within:from-amber-400/5 group-focus-within:via-amber-400/5 group-focus-within:to-transparent pointer-events-none transition-all duration-500" />
          </div>
        </div>

        {/* Mật khẩu */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-500" />
            Mật khẩu
          </label>
          <div className="relative group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Ít nhất 6 ký tự"
              className="w-full h-12 px-4 pr-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all duration-300"
              value={formData.password}
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Password Strength Indicator */}
          {formData.password && (
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      passwordStrength.score === 1 ? 'w-1/4 bg-red-500' :
                      passwordStrength.score === 2 ? 'w-2/4 bg-orange-500' :
                      passwordStrength.score === 3 ? 'w-3/4 bg-yellow-500' :
                      passwordStrength.score === 4 ? 'w-full bg-green-500' : 'w-0'
                    }`}
                  />
                </div>
                <span className={`text-xs ${
                  passwordStrength.score === 1 ? 'text-red-500' :
                  passwordStrength.score === 2 ? 'text-orange-500' :
                  passwordStrength.score === 3 ? 'text-yellow-500' :
                  passwordStrength.score === 4 ? 'text-green-500' : 'text-gray-400'
                }`}>
                  {passwordStrength.message}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1">
                  {passwordStrength.hasMinLength ? 
                    <CheckCircle className="w-3 h-3 text-green-500" /> : 
                    <XCircle className="w-3 h-3 text-gray-300" />
                  }
                  <span className="text-gray-500">Ít nhất 6 ký tự</span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordStrength.hasNumber ? 
                    <CheckCircle className="w-3 h-3 text-green-500" /> : 
                    <XCircle className="w-3 h-3 text-gray-300" />
                  }
                  <span className="text-gray-500">Có số</span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordStrength.hasUpperCase ? 
                    <CheckCircle className="w-3 h-3 text-green-500" /> : 
                    <XCircle className="w-3 h-3 text-gray-300" />
                  }
                  <span className="text-gray-500">Chữ hoa</span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordStrength.hasSpecialChar ? 
                    <CheckCircle className="w-3 h-3 text-green-500" /> : 
                    <XCircle className="w-3 h-3 text-gray-300" />
                  }
                  <span className="text-gray-500">Ký tự đặc biệt</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Xác nhận mật khẩu */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-500" />
            Xác nhận mật khẩu
          </label>
          <div className="relative group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Nhập lại mật khẩu"
              className="w-full h-12 px-4 pr-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all duration-300"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {formData.confirmPassword && formData.password !== formData.confirmPassword && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <XCircle className="w-3 h-3" />
              Mật khẩu xác nhận không khớp
            </p>
          )}
          {formData.confirmPassword && formData.password === formData.confirmPassword && formData.password && (
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <CheckCircle className="w-3 h-3" />
              Mật khẩu khớp
            </p>
          )}
        </div>

        {/* Nút đăng ký */}
        <button
          type="submit"
          disabled={isLoading}
          className="relative w-full h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl font-semibold text-gray-900 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
              <span>Đang xử lý...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              <span>Đăng ký thành viên</span>
            </div>
          )}
        </button>

        {/* Terms & Conditions */}
        <div className="text-center space-y-3">
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Bằng việc đăng ký, bạn đồng ý với{' '}
            <Link href="/terms" className="text-amber-600 dark:text-amber-400 hover:underline">
              Điều khoản sử dụng
            </Link>{' '}
            và{' '}
            <Link href="/privacy" className="text-amber-600 dark:text-amber-400 hover:underline">
              Chính sách bảo mật
            </Link>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Shield className="w-3 h-3" />
            <span>Bảo vệ bởi đức tin</span>
          </div>
        </div>

        {/* Link to Login */}
        <div className="text-center pt-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Đã có tài khoản?{' '}
            <Link href="/login" className="text-amber-600 dark:text-amber-400 hover:underline font-semibold">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </form>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}