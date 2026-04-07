import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CalendarIcon, 
  BookOpenIcon, 
  BrainIcon, 
  ChurchIcon,
  ArrowRightIcon,
  ClockIcon,
} from '@/components/icons';
import { mockDailyGospel, mockMasses } from '@/lib/mock-data';

export default function DashboardPage() {
  const todayGospel = mockDailyGospel;
  const upcomingMasses = mockMasses.slice(0, 3);

  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
            Xin chào, Giáo Dân
          </h1>
          <p className="text-muted-foreground mt-1">
            Chúc bạn một ngày bình an trong Chúa
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString('vi-VN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-sm font-medium text-primary">
            {todayGospel.liturgicalSeason}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <Link href="/lich-le">
          <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <CalendarIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-sm">Lịch Lễ</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/loi-chua">
          <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BookOpenIcon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-medium text-sm">Lời Chúa</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/trac-nghiem">
          <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BrainIcon className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="font-medium text-sm">Trắc Nghiệm</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/nha-tho">
          <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ChurchIcon className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="font-medium text-sm">Nhà Thờ</h3>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Today's Gospel Preview */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BookOpenIcon className="w-5 h-5 text-primary" />
            Lời Chúa Hôm Nay
          </CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/loi-chua" className="flex items-center gap-1">
              Xem thêm
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground line-clamp-4 leading-relaxed">
              {todayGospel.gospel.split('\n\n')[1] || todayGospel.gospel.substring(0, 300)}...
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm italic text-muted-foreground">
              &ldquo;{todayGospel.reflection?.split('\n')[2] || 'Xin Chua cho con mot trai tim biet lang nghe va thuc hanh Loi Ngai.'}&rdquo;
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Masses */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            Thánh Lễ Sắp Tới
          </CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/lich-le" className="flex items-center gap-1">
              Xem tất cả
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingMasses.map((mass) => (
              <div 
                key={mass.id} 
                className="flex items-start gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div 
                  className="w-2 h-full min-h-[60px] rounded-full"
                  style={{ 
                    backgroundColor: mass.liturgicalColor === 'green' ? 'var(--liturgical-green)' :
                      mass.liturgicalColor === 'white' ? 'var(--liturgical-white)' :
                      mass.liturgicalColor === 'purple' ? 'var(--liturgical-purple)' :
                      mass.liturgicalColor === 'red' ? 'var(--liturgical-red)' :
                      'var(--liturgical-gold)'
                  }}
                />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{mass.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {mass.church?.name}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {mass.massTime}
                    </span>
                    <span>
                      {mass.massDate.toLocaleDateString('vi-VN', { weekday: 'short', day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
