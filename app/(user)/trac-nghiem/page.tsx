import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BrainIcon, 
  ArrowRightIcon,
  BookOpenIcon,
  ChurchIcon,
  UsersIcon,
} from '@/components/icons';
import { mockQuizCategories } from '@/lib/mock-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'book': BookOpenIcon,
  'book-open': BookOpenIcon,
  'graduation-cap': BrainIcon,
  'church': ChurchIcon,
  'history': BookOpenIcon,
  'users': UsersIcon,
};

export default function TracNghiemPage() {
  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
          <BrainIcon className="w-7 h-7 text-primary" />
          Trắc Nghiệm Giáo Lý
        </h1>
        <p className="text-muted-foreground mt-1">
          Kiểm tra kiến thức giáo lý qua các bài trắc nghiệm
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-primary">0</p>
            <p className="text-sm text-muted-foreground mt-1">Bài đã làm</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-accent-foreground">0%</p>
            <p className="text-sm text-muted-foreground mt-1">Tỷ lệ đúng</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-chart-4">0</p>
            <p className="text-sm text-muted-foreground mt-1">Điểm cao nhất</p>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Chọn Chủ Đề</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockQuizCategories.map((category) => {
            const IconComponent = iconMap[category.icon || 'book'] || BookOpenIcon;
            return (
              <Card key={category.id} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {category.questionCount} câu
                    </span>
                  </div>
                  <CardTitle className="text-lg mt-4">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/trac-nghiem/${category.id}`}>
                      Bắt đầu
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
