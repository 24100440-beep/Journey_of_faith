'use client';
import Image from 'next/image';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
} from '@/components/icons';
import { Spinner } from '@/components/ui/spinner';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (formData.email === 'admin@example.com' && formData.password === 'admin123') {
        router.push('/admin');
      } else if (formData.email && formData.password) {
        router.push('/dashboard');
      } else {
        setError('Vui lòng nhập đầy đủ thông tin');
      }
    } catch {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b1020]">
      {/* Background kiểu kính màu nhà thờ */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,120,0.15),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(147,51,234,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#0b1020_0%,_#131a2f_45%,_#1f1037_100%)]" />

      {/* Lưới kính mờ */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

      {/* Ánh sáng vàng */}
      <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />

      {/* Glow tím */}
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          
          {/* Header nhỏ gọn */}
          <div className="mb-6 text-center text-white">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl shadow-lg backdrop-blur-md">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="object-contain drop-shadow-lg"
              />
            </div>
            <h1 className="text-3xl font-serif font-semibold tracking-wide">
              Hành Trình Đức Tin
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Đồng hành cùng đời sống đức tin mỗi ngày
            </p>
          </div>

          {/* Form card */}
          <Card className="border border-white/15 bg-white/10 shadow-2xl backdrop-blur-2xl rounded-3xl text-white">
            <CardHeader className="space-y-2 text-center pb-4">
              <CardTitle className="text-2xl font-serif tracking-wide">
                Đăng nhập
              </CardTitle>
              <CardDescription className="text-slate-200/80">
                Nhập thông tin để tiếp tục
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-5">
                {error && (
                  <div className="rounded-2xl border border-red-300/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                )}

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-100">
                    Email
                  </Label>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      className="h-12 rounded-2xl border border-white/15 bg-white/10 pl-10 text-white placeholder:text-slate-300/60 backdrop-blur-md focus-visible:ring-2 focus-visible:ring-amber-400"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-slate-100">
                      Mật khẩu
                    </Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-amber-300 hover:underline"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>

                  <div className="relative">
                    <LockIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Nhập mật khẩu"
                      className="h-12 rounded-2xl border border-white/15 bg-white/10 pl-10 pr-10 text-white placeholder:text-slate-300/60 backdrop-blur-md focus-visible:ring-2 focus-visible:ring-amber-400"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 transition hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex-col gap-4 pt-2">
                <Button
                  type="submit"
                  className="h-12 w-full rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-slate-950 font-semibold shadow-lg transition hover:scale-[1.02] hover:shadow-amber-500/30"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner className="mr-2" />
                      Đang xử lý...
                    </>
                  ) : (
                    'Đăng nhập'
                  )}
                </Button>

                <div className="text-center text-sm text-slate-200/80">
                  Chưa có tài khoản?{' '}
                  <Link
                    href="/register"
                    className="font-semibold text-amber-300 hover:underline"
                  >
                    Đăng ký ngay
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>

          {/* Câu Kinh Thánh nhỏ bên dưới */}
          <div className="mt-6 text-center text-sm text-slate-300/80">
            <p className="italic">
              “Ta là ánh sáng thế gian. Ai theo Ta, sẽ không đi trong tối tăm.”
            </p>
            <p className="mt-2 text-xs tracking-[0.25em] text-amber-300/80">
              GIOAN 8:12
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}