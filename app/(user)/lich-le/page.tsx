'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CalendarIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ClockIcon,
  MapPinIcon,
  ChurchIcon,
} from '@/components/icons';
import { cn } from '@/lib/utils';
import { mockMasses, mockChurches } from '@/lib/mock-data';
import type { Mass } from '@/types';

const DAYS_OF_WEEK = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
const MONTHS = [
  'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
  'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function LichLePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedChurch, setSelectedChurch] = useState<number | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    );
  };

  // Filter masses for selected date and church
  const filteredMasses = mockMasses.filter((mass) => {
    const matchesDate = mass.massDate.toDateString() === selectedDate.toDateString();
    const matchesChurch = selectedChurch === null || mass.churchId === selectedChurch;
    return matchesDate && matchesChurch;
  });

  // Get all masses (if no filter, show all upcoming)
  const displayMasses = filteredMasses.length > 0 ? filteredMasses : mockMasses.filter(m => {
    if (selectedChurch !== null) {
      return m.churchId === selectedChurch;
    }
    return true;
  });

  const getLiturgicalColorClass = (color?: string) => {
    switch (color) {
      case 'white': return 'bg-white border border-border';
      case 'purple': return 'bg-[var(--liturgical-purple)]';
      case 'red': return 'bg-[var(--liturgical-red)]';
      case 'green': return 'bg-[var(--liturgical-green)]';
      case 'gold': return 'bg-[var(--liturgical-gold)]';
      case 'rose': return 'bg-[var(--liturgical-rose)]';
      default: return 'bg-primary';
    }
  };

  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground flex items-center gap-3">
          <CalendarIcon className="w-7 h-7 text-primary" />
          Lịch Thánh Lễ
        </h1>
        <p className="text-muted-foreground mt-1">
          Xem lịch thánh lễ các nhà thờ trong giáo phận
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeftIcon className="w-4 h-4" />
              </Button>
              <h2 className="text-lg font-semibold min-w-[140px] text-center">
                {MONTHS[month]} {year}
              </h2>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm" onClick={goToToday}>
              Hôm nay
            </Button>
          </CardHeader>
          <CardContent>
            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAYS_OF_WEEK.map((day) => (
                <div
                  key={day}
                  className="h-10 flex items-center justify-center text-sm font-medium text-muted-foreground"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty cells for days before first day of month */}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="h-10" />
              ))}

              {/* Days of month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const hasMass = mockMasses.some(
                  (m) => 
                    m.massDate.getDate() === day &&
                    m.massDate.getMonth() === month &&
                    m.massDate.getFullYear() === year
                );

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(new Date(year, month, day))}
                    className={cn(
                      'h-10 rounded-lg flex flex-col items-center justify-center text-sm transition-colors relative',
                      isToday(day) && !isSelected(day) && 'bg-primary/10 text-primary font-semibold',
                      isSelected(day) && 'bg-primary text-primary-foreground font-semibold',
                      !isToday(day) && !isSelected(day) && 'hover:bg-secondary',
                    )}
                  >
                    {day}
                    {hasMass && !isSelected(day) && (
                      <div className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Filter by Church */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ChurchIcon className="w-5 h-5" />
              Chọn Nhà Thờ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant={selectedChurch === null ? 'default' : 'outline'}
              className="w-full justify-start"
              onClick={() => setSelectedChurch(null)}
            >
              Tất cả nhà thờ
            </Button>
            {mockChurches.map((church) => (
              <Button
                key={church.id}
                variant={selectedChurch === church.id ? 'default' : 'outline'}
                className="w-full justify-start text-left"
                onClick={() => setSelectedChurch(church.id)}
              >
                <span className="truncate">{church.name}</span>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Masses List */}
      <Card>
        <CardHeader>
          <CardTitle>
            Thánh Lễ ngày {selectedDate.toLocaleDateString('vi-VN', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {displayMasses.length > 0 ? (
            <div className="space-y-4">
              {displayMasses.map((mass: Mass) => (
                <div
                  key={mass.id}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div
                    className={cn(
                      'w-3 h-full min-h-[80px] rounded-full flex-shrink-0',
                      getLiturgicalColorClass(mass.liturgicalColor)
                    )}
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{mass.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {mass.description}
                        </p>
                      </div>
                      <span className={cn(
                        'px-2.5 py-1 rounded-full text-xs font-medium',
                        mass.massType === 'sunday' ? 'bg-primary/10 text-primary' :
                        mass.massType === 'special' ? 'bg-accent/20 text-accent-foreground' :
                        'bg-muted text-muted-foreground'
                      )}>
                        {mass.massType === 'sunday' ? 'Chúa Nhật' : 
                         mass.massType === 'special' ? 'Lễ Trọng' : 'Ngày Thường'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4" />
                        {mass.massTime}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ChurchIcon className="w-4 h-4" />
                        {mass.church?.name}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon className="w-4 h-4" />
                        {mass.church?.address}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <CalendarIcon className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Không có thánh lễ nào trong ngày hôm nay
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
