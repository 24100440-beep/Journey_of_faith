// app/nha-tho/page.tsx
'use client';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChurchIcon, MapPinIcon } from '@/components/icons';
import { mockChurches } from '@/lib/mock-data';
import React,{useState,useEffect} from 'react';
export interface Response{
  data: Church[];
  message: string;
}
interface Church {
  id: number;
  name: string;
  address: string;
}
export default function NhaThoPage() {
const [churches, setChurches] = useState<Response>({ data: [], message: '' });
useEffect(() => {
  const fetchChurches = async () => {
    try {
      const response = await fetch('https://church.codex.pro.vn/Journey_of_faith/Church/search');
      if (!response.ok) {
        throw new Error('Failed to fetch churches');
      }
      const data = await response.json();
      setChurches(data);      
    } catch (error) {
      console.error('Error fetching churches:', error);
    }
  };

  fetchChurches();
}, []);
const dataview=churches.data ?? []
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-stone-900 dark:to-stone-950">
      <div className="space-y-6 p-4 md:p-6 max-w-6xl mx-auto">
        {/* Header với đường kẻ trang trí */}
        <div className="relative text-center md:text-left">
          <div className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 top-0 w-16 h-0.5 bg-red-700/40 rounded-full" />
          <h1 className="pt-4 text-3xl md:text-4xl font-serif font-bold text-red-800 dark:text-amber-400">
            Danh sách Nhà Thờ
          </h1>
          <p className="text-stone-600 dark:text-stone-300 text-sm mt-2 font-medium">
            Các Thánh Đường Công Giáo Việt Nam
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dataview.map((church: Church) => (
            <Card
              key={church.id}
              className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-stone-900 rounded-2xl overflow-hidden"
            >
              {/* Thanh màu đỏ nâu trên cùng (tượng trưng áo lễ) */}
              <div className="h-2 bg-gradient-to-r from-red-800 to-amber-700" />

              <CardContent className="p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-950/60 text-red-800 dark:text-amber-400">
                    <ChurchIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-stone-800 dark:text-stone-100 group-hover:text-red-700 dark:group-hover:text-amber-400 transition">
                      {church.name}
                    </h3>
                    <div className="flex items-start gap-2 text-sm text-stone-500 dark:text-stone-400 mt-1">
                      <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-500" />
                      <span className="leading-relaxed">{church.address}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-3 border-amber-200 dark:border-stone-700 text-red-800 dark:text-amber-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-900 dark:hover:text-amber-300 hover:border-red-300 dark:hover:border-amber-700 rounded-full font-medium transition-all duration-200 group/btn"
                  asChild
                >
                  <Link href={`/lich-le?churchId=${church.id}`}>
                    <span className="relative z-10">⛪ Xem lịch lễ</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer trang trí */}
        <div className="pt-8 text-center text-xs text-stone-400 dark:text-stone-500 border-t border-amber-100 dark:border-stone-800 font-serif">
          <p>✝️ Danh sách các nhà thờ Công Giáo ✝️</p>
        </div>
      </div>
    </div>
  );
}