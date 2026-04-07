import { Card, CardContent } from '@/components/ui/card';
import {
  CalendarIcon,
  BookOpenIcon,
  BrainIcon,
  MusicIcon,
  UsersIcon,
  BellIcon,
  MessageCircleIcon,
  TrophyIcon,
} from '@/components/icons';

const features = [
  {
    icon: CalendarIcon,
    title: 'Lịch Lễ',
    description: 'Xem lịch thánh lễ các nhà thờ, nhận nhắc nhở trước giờ lễ.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: BookOpenIcon,
    title: 'Lời Chúa Hàng Ngày',
    description: 'Đọc bài đọc, đáp ca, Tin Mừng và suy niệm mỗi ngày.',
    color: 'bg-accent/10 text-accent-foreground',
  },
  {
    icon: BrainIcon,
    title: 'Trắc Nghiệm Giáo Lý',
    description: 'Làm bài trắc nghiệm để kiểm tra kiến thức giáo lý.',
    color: 'bg-chart-3/10 text-chart-3',
  },
  {
    icon: MessageCircleIcon,
    title: 'AI Hỗ Trợ',
    description: 'Chatbot AI trả lời các câu hỏi về Kinh Thánh, giáo lý.',
    color: 'bg-chart-4/10 text-chart-4',
  },
  {
    icon: MusicIcon,
    title: 'Thánh Ca',
    description: 'Nghe nhạc thánh ca với lời bài hát đi kèm.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: UsersIcon,
    title: 'Kết Nối Cộng Đồng',
    description: 'Tạo và tham gia các hội nhóm giáo xứ, chia sẻ đức tin.',
    color: 'bg-accent/10 text-accent-foreground',
  },
  {
    icon: BellIcon,
    title: 'Nhắc Nhở',
    description: 'Nhắc nhở sinh nhật, ngày buồn mang, sự kiện quan trọng.',
    color: 'bg-chart-3/10 text-chart-3',
  },
  {
    icon: TrophyIcon,
    title: 'Thi Có Thưởng',
    description: 'Tham gia các kỳ thi giao lý có cơ hội nhận giải thưởng.',
    color: 'bg-chart-4/10 text-chart-4',
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tính Năng Nổi Bật
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tất cả những gì bạn cần để sống đức tin mỗi ngày, trong một trải nghiệm duy nhất.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
