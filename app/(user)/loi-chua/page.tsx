'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpenIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
} from '@/components/icons';
import { mockDailyGospel } from '@/lib/mock-data';
import Image from 'next/image';

export default function LoiChuaPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const gospel = mockDailyGospel;

  const prevDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const nextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = currentDate.toDateString() === new Date().toDateString();

  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
          <BookOpenIcon className="w-7 h-7 text-primary" />
          Lời Chúa Hàng Ngày
        </h1>
        <p className="text-muted-foreground mt-1">
          Đọc và suy niệm Lời Chúa mỗi ngày
        </p>
        <div className="mt-4">
          <Image
            src="https://tse3.mm.bing.net/th/id/OIP.0nCJ6J_J9qQA3aSxmiQlggHaDg?pid=Api&P=0&h=220"
            alt="Lời Chúa là đèn soi con bước"
            width={400}
            height={220}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>

      {/* Date Navigation */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="icon" onClick={prevDay}>
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <div className="text-center">
              <p className="text-lg font-semibold">
                {currentDate.toLocaleDateString('vi-VN', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
              <p className="text-sm text-primary font-medium mt-1">
                {gospel.liturgicalSeason}
              </p>
            </div>
            <Button variant="outline" size="icon" onClick={nextDay}>
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
          {!isToday && (
            <div className="text-center mt-4">
              <Button variant="link" onClick={goToToday} className="text-sm">
                Quay về hôm nay
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Readings Tabs */}
      <Tabs defaultValue="gospel" className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="first">Bài Đọc 1</TabsTrigger>
          <TabsTrigger value="psalm">Đáp Ca</TabsTrigger>
          <TabsTrigger value="gospel">Tin Mừng</TabsTrigger>
          <TabsTrigger value="reflection">Suy Niệm</TabsTrigger>
        </TabsList>

        <TabsContent value="first">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bài Đọc 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose max-w-none">
                {gospel.firstReading?.split('\n').map((line, index) => (
                  <p key={index} className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="psalm">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Đáp Ca</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose max-w-none">
                {gospel.psalm?.split('\n').map((line, index) => (
                  <p 
                    key={index} 
                    className={`leading-relaxed whitespace-pre-wrap ${
                      line.startsWith('Dap:') ? 'font-semibold text-primary' : 
                      line.startsWith('Xuong:') ? 'text-foreground' : 
                      'text-foreground'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gospel">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tin Mừng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose max-w-none">
                {gospel.gospel.split('\n').map((line, index) => (
                  <p 
                    key={index} 
                    className={`leading-relaxed whitespace-pre-wrap ${
                      index === 0 ? 'font-semibold text-primary' : 'text-foreground'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reflection">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Suy Niệm</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose max-w-none">
                {gospel.reflection?.split('\n').map((line, index) => (
                  <p 
                    key={index} 
                    className={`leading-relaxed whitespace-pre-wrap ${
                      index === 0 ? 'font-semibold text-primary' : 'text-foreground'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Daily Prayer */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="font-serif text-lg italic text-foreground mb-4">
              &ldquo;Lạy Chúa, xin mở lòng con ra để con lắng nghe và thực hành Loi Ngai trong cuộc sống hàng ngày. Amen.&rdquo;
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-0.5 bg-primary/30 rounded-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
