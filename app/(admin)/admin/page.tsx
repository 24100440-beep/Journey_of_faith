import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChurchIcon, CalendarIcon, BookOpenIcon, QuestionIcon, UsersIcon, TrendingUpIcon } from "@/components/icons"
import Link from "next/link"

const stats = [
  {
    title: "Nhà Thờ",
    value: "12",
    description: "Đang hoạt động",
    icon: ChurchIcon,
    href: "/admin/churches",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Lịch Lễ",
    value: "48",
    description: "Tháng này",
    icon: CalendarIcon,
    href: "/admin/masses",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Bài Lời Chúa",
    value: "365",
    description: "Đã đăng",
    icon: BookOpenIcon,
    href: "/admin/gospels",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    title: "Câu Hỏi",
    value: "520",
    description: "Trong kho đề",
    icon: QuestionIcon,
    href: "/admin/questions",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    title: "Người Dùng",
    value: "1,234",
    description: "Đã đăng ký",
    icon: UsersIcon,
    href: "/admin/users",
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "Lượt Truy Cập",
    value: "5,678",
    description: "Tuần này",
    icon: TrendingUpIcon,
    href: "/admin",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
]

const recentActivities = [
  { action: "Thêm lịch lễ mới", target: "Chúa Nhật XV TN - Nhà thờ Đức Bà", time: "5 phút trước" },
  { action: "Cập nhật Lời Chúa", target: "Tin Mừng ngày 15/03/2026", time: "1 giờ trước" },
  { action: "Thêm câu hỏi mới", target: "10 câu hỏi - Giáo lý Hôn Nhân", time: "2 giờ trước" },
  { action: "Người dùng mới đăng ký", target: "nguyenvana@gmail.com", time: "3 giờ trước" },
  { action: "Cập nhật thông tin nhà thờ", target: "Nhà thờ Tân Định", time: "5 giờ trước" },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Tổng quan</h1>
        <p className="text-muted-foreground">Chào mừng trở lại! Đây là tổng quan hệ thống.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Hoạt động gần đây</CardTitle>
          <CardDescription>Các thay đổi mới nhất trong hệ thống</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 last:pb-0 last:border-0 border-b">
                <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.target}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Thao tác nhanh</CardTitle>
          <CardDescription>Các tác vụ thường dùng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link 
              href="/admin/churches/new"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <ChurchIcon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Thêm nhà thờ</span>
            </Link>
            <Link 
              href="/admin/masses/new"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <CalendarIcon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Thêm lịch lễ</span>
            </Link>
            <Link 
              href="/admin/gospels/new"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <BookOpenIcon className="h-5 w-5 text-chart-4" />
              <span className="text-sm font-medium">Thêm Lời Chúa</span>
            </Link>
            <Link 
              href="/admin/questions/new"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <QuestionIcon className="h-5 w-5 text-chart-3" />
              <span className="text-sm font-medium">Thêm câu hỏi</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
