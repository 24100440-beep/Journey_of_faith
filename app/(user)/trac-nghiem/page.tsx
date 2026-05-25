'use client';

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

const stats = [
  { value: '0', label: 'Bài đã làm', color: 'text-primary', bg: 'bg-primary/10' },
  { value: '0%', label: 'Tỷ lệ đúng', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10' },
  { value: '0', label: 'Điểm cao nhất', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10' },
];

export default function TracNghiemPage() {
  return (
    <div className="space-y-8 pb-20 lg:pb-0">

      {/* Header */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/90 to-primary px-6 py-8 text-primary-foreground shadow-lg">
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-24 h-24 rounded-full bg-white/5 blur-lg pointer-events-none" />

        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner flex-shrink-0">
            <BrainIcon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
              Trắc Nghiệm Giáo Lý
            </h1>
            <p className="text-primary-foreground/80 mt-0.5 text-sm sm:text-base">
              Kiểm tra kiến thức giáo lý qua các bài trắc nghiệm
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="border border-border/60 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-5 pb-4 text-center">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${s.bg} mx-auto mb-2`}>
                <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Categories */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Chọn Chủ Đề</h2>
          <span className="text-sm text-muted-foreground">{mockQuizCategories.length} chủ đề</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockQuizCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon || 'book'] || BookOpenIcon;
            return (
              <Card
                key={category.id}
                className="group relative overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 bg-card"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Subtle top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border/40">
                      {category.questionCount} câu
                    </span>
                  </div>
                  <CardTitle className="text-base mt-3 leading-snug">{category.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{category.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    asChild
                    className="w-full gap-2 group/btn transition-all duration-200"
                    variant="default"
                  >
                    <Link href={`/trac-nghiem/${category.id}`}>
                      Bắt đầu
                      <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
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
