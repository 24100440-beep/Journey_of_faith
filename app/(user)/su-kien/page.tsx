// 'use client';

// import { useState, useEffect } from 'react';
// import { 
//   Calendar, 
//   MapPin, 
//   Users, 
//   Heart, 
//   Share2, 
//   Clock,
//   Filter,
//   Search,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Church,
//   Cross,
//   Ticket
// } from 'lucide-react';

// type EventItem = {
//   id: number;
//   title: string;
//   date: string;
//   time?: string;
//   location: string;
//   description: string;
//   image: string;
//   category: string;
//   organizer?: string;
//   isNew?: boolean;
// };

// type RegisterResult = {
//   success: boolean;
//   message: string;
// };

// // API Service
// const eventService = {
//   fetchEvents: async (): Promise<EventItem[]> => {
//     // TODO: Replace with actual API call
//     // const response = await fetch('/api/events');
//     // return response.json();
    
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(events as EventItem[]);
//       }, 500);
//     });
//   },
  
//   registerForEvent: async (eventId: number): Promise<RegisterResult> => {
//     // TODO: Replace with actual API call
//     // const response = await fetch(`/api/events/${eventId}/register`, {
//     //   method: 'POST',
//     //   body: JSON.stringify({ userId: 'current-user-id' })
//     // });
//     // return response.json();
    
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ success: true, message: 'Đăng ký thành công' });
//       }, 1000);
//     });
//   }
// };

// const categories = [
//   { id: 'all', name: 'Tất cả', icon: Church, color: 'bg-gray-500' },
//   { id: 'Giới trẻ', name: 'Giới trẻ', icon: Users, color: 'bg-blue-500' },
//   { id: 'Hành hương', name: 'Hành hương', icon: Cross, color: 'bg-green-500' },
//   { id: 'Tĩnh tâm', name: 'Tĩnh tâm', icon: Heart, color: 'bg-purple-500' },
//   { id: 'Phụng vụ', name: 'Phụng vụ', icon: Church, color: 'bg-amber-500' },
//   { id: 'Bác ái', name: 'Bác ái', icon: Heart, color: 'bg-red-500' },
// ];

// export default function SuKienPage() {
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
//   const [registering, setRegistering] = useState(false);
//   const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = async () => {
//     setLoading(true);
//     try {
//       const data = await eventService.fetchEvents();
//       setEvents(data);
//     } catch (error) {
//       console.error('Error loading events:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (eventId: number) => {
//     setRegistering(true);
//     try {
//       const result = await eventService.registerForEvent(eventId);
//       if (result.success) {
//         setRegisteredEvents([...registeredEvents, eventId]);
//         alert('Đăng ký tham gia sự kiện thành công!');
//       }
//     } catch (error) {
//       console.error('Error registering:', error);
//       alert('Có lỗi xảy ra, vui lòng thử lại sau.');
//     } finally {
//       setRegistering(false);
//     }
//   };

//   const filteredEvents = events.filter(event => {
//     const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
//     const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const formatDate = (dateStr: string) => {
//     const parts = dateStr.split('/');
//     if (parts.length === 3) {
//       return `${parts[0]}/${parts[1]}/${parts[2]}`;
//     }
//     return dateStr;
//   };

//   const isRegistered = (eventId: number) => registeredEvents.includes(eventId);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-amber-700 to-orange-800 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600')] bg-cover bg-center opacity-10" />
        
//         <div className="relative container mx-auto px-4 py-16 md:py-20">
//           <div className="text-center space-y-4">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
//               <Church className="w-4 h-4" />
//               <span className="text-sm">Cập nhật liên tục</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold font-serif">
//               Tin Tức - Sự Kiện
//             </h1>
//             <p className="text-lg text-white/90 max-w-2xl mx-auto">
//               Cập nhật các hoạt động mới nhất của Giáo xứ Yên Lộ
//             </p>
//           </div>
//         </div>
        
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg className="w-full h-12 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
//           </svg>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
        
//         {/* Filters Section */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
//           <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
//             {/* Search */}
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Tìm kiếm sự kiện..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition"
//               />
//             </div>
            
//             {/* Category Filter */}
//             <div className="flex gap-2 flex-wrap">
//               {categories.map((cat) => {
//                 const Icon = cat.icon;
//                 const isActive = selectedCategory === cat.id;
//                 return (
//                   <button
//                     key={cat.id}
//                     onClick={() => setSelectedCategory(cat.id)}
//                     className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
//                       isActive
//                         ? 'bg-amber-500 text-white shadow-md'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     <Icon className="w-4 h-4" />
//                     <span className="text-sm font-medium">{cat.name}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Events Grid */}
//         {loading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
//                 <div className="h-48 bg-gray-200"></div>
//                 <div className="p-5 space-y-3">
//                   <div className="h-4 bg-gray-200 rounded w-24"></div>
//                   <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-full"></div>
//                   <div className="h-4 bg-gray-200 rounded w-2/3"></div>
//                   <div className="flex gap-3">
//                     <div className="h-10 bg-gray-200 rounded-xl flex-1"></div>
//                     <div className="h-10 bg-gray-200 rounded-xl flex-1"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : filteredEvents.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Calendar className="w-10 h-10 text-gray-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">Không tìm thấy sự kiện</h3>
//             <p className="text-gray-500">Vui lòng thử lại với bộ lọc khác</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredEvents.map((event) => (
//               <div
//                 key={event.id}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               >
//                 {/* Image */}
//                 <div className="relative h-52 overflow-hidden">
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute top-3 right-3">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
//                       event.category === 'Giới trẻ' ? 'bg-blue-500' :
//                       event.category === 'Hành hương' ? 'bg-green-500' :
//                       event.category === 'Tĩnh tâm' ? 'bg-purple-500' : 'bg-amber-500'
//                     }`}>
//                       {event.category}
//                     </span>
//                   </div>
//                   {event.isNew && (
//                     <div className="absolute top-3 left-3">
//                       <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full animate-pulse">
//                         Mới
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition">
//                     {event.title}
//                   </h3>
                  
//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <Calendar className="w-4 h-4 text-amber-500" />
//                       <span>{formatDate(event.date)}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <MapPin className="w-4 h-4 text-amber-500" />
//                       <span className="line-clamp-1">{event.location}</span>
//                     </div>
//                     {event.time && (
//                       <div className="flex items-center gap-2 text-sm text-gray-500">
//                         <Clock className="w-4 h-4 text-amber-500" />
//                         <span>{event.time}</span>
//                       </div>
//                     )}
//                   </div>

//                   <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
//                     {event.description}
//                   </p>

//                   {/* Actions */}
//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => handleRegister(event.id)}
//                       disabled={registering || isRegistered(event.id)}
//                       className={`flex-1 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
//                         isRegistered(event.id)
//                           ? 'bg-green-500 text-white cursor-default'
//                           : 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg'
//                       }`}
//                     >
//                       <Ticket className="w-4 h-4" />
//                       {isRegistered(event.id) ? 'Đã đăng ký' : 'Đăng ký'}
//                     </button>
//                     <button
//                       onClick={() => setSelectedEvent(event)}
//                       className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition flex items-center justify-center gap-2"
//                     >
//                       Chi tiết
//                       <ChevronRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* View More Button */}
//         {filteredEvents.length > 0 && (
//           <div className="text-center mt-12">
//             <button className="px-8 py-3 bg-white border-2 border-amber-500 text-amber-600 rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
//               Xem thêm sự kiện
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Event Detail Modal */}
//       {selectedEvent && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
//           onClick={() => setSelectedEvent(null)}
//         >
//           <div 
//             className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="relative h-64">
//               <img 
//                 src={selectedEvent.image} 
//                 alt={selectedEvent.title}
//                 className="w-full h-full object-cover"
//               />
//               <button
//                 onClick={() => setSelectedEvent(null)}
//                 className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
            
//             <div className="p-6">
//               <div className="flex items-center gap-2 mb-4">
//                 <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
//                   selectedEvent.category === 'Giới trẻ' ? 'bg-blue-500' :
//                   selectedEvent.category === 'Hành hương' ? 'bg-green-500' :
//                   selectedEvent.category === 'Tĩnh tâm' ? 'bg-purple-500' : 'bg-amber-500'
//                 }`}>
//                   {selectedEvent.category}
//                 </span>
//               </div>
              
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 {selectedEvent.title}
//               </h2>
              
//               <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <Calendar className="w-5 h-5 text-amber-500" />
//                   <span>{formatDate(selectedEvent.date)}</span>
//                   {selectedEvent.time && <span>• {selectedEvent.time}</span>}
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <MapPin className="w-5 h-5 text-amber-500" />
//                   <span>{selectedEvent.location}</span>
//                 </div>
//                 {selectedEvent.organizer && (
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <Users className="w-5 h-5 text-amber-500" />
//                     <span>Ban tổ chức: {selectedEvent.organizer}</span>
//                   </div>
//                 )}
//               </div>
              
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Thông tin chi tiết</h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {selectedEvent.description}
//                 </p>
//               </div>
              
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => {
//                     handleRegister(selectedEvent.id);
//                     setSelectedEvent(null);
//                   }}
//                   disabled={registering || isRegistered(selectedEvent.id)}
//                   className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     isRegistered(selectedEvent.id)
//                       ? 'bg-green-500 text-white cursor-default'
//                       : 'bg-amber-500 text-white hover:bg-amber-600'
//                   }`}
//                 >
//                   {isRegistered(selectedEvent.id) ? 'Đã đăng ký' : 'Đăng ký tham gia'}
//                 </button>
//                 <button
//                   onClick={() => {
//                     navigator.share?.({
//                       title: selectedEvent.title,
//                       text: selectedEvent.description,
//                       url: window.location.href
//                     });
//                   }}
//                   className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition flex items-center gap-2"
//                 >
//                   <Share2 className="w-4 h-4" />
//                   Chia sẻ
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Mock data
// const events = [
//   {
//     id: 1,
//     title: "Đại hội Giới trẻ Giáo xứ",
//     date: "10/04/2026",
//     time: "08:00 - 17:00",
//     location: "Nhà thờ Giáo xứ Yên Lộ",
//     description: "Chương trình sinh hoạt, cầu nguyện và giao lưu dành cho giới trẻ trong giáo xứ. Các hoạt động bao gồm: Thánh lễ, tọa đàm, trò chơi lớn, văn nghệ và cắm trại qua đêm.",
//     image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1200",
//     category: "Giới trẻ",
//     organizer: "Ban Mục vụ Giới trẻ",
//     isNew: true,
//   },
//   {
//     id: 2,
//     title: "Hành hương Năm Thánh",
//     date: "01/05/2026",
//     time: "05:00 - 18:00",
//     location: "Trung tâm Hành hương Đức Mẹ La Vang",
//     description: "Cộng đoàn cùng nhau tham dự hành hương, cầu nguyện và lãnh nhận ơn toàn xá. Chương trình bao gồm: lần hạt Mân Côi, Thánh lễ, và tham quan khuôn viên trung tâm hành hương.",
//     image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200",
//     category: "Hành hương",
//     organizer: "Hội đồng Giáo xứ",
//     isNew: false,
//   },
//   {
//     id: 3,
//     title: "Tĩnh tâm Mùa Chay",
//     date: "15/04/2026",
//     time: "08:00 - 16:00",
//     location: "Hội trường Giáo xứ",
//     description: "Buổi tĩnh tâm giúp cộng đoàn chuẩn bị tâm hồn sống Mùa Chay sốt sắng hơn. Các nội dung: chiêm niệm Lời Chúa, xưng tội, suy niệm cuộc thương khó của Chúa Giêsu.",
//     image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
//     category: "Tĩnh tâm",
//     organizer: "Ban Linh đạo",
//     isNew: false,
//   },
// ];
'use client';

import { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Heart, 
  Share2, 
  Clock,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Church,
  Cross,
  Ticket
} from 'lucide-react';

type EventItem = {
  id: number;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  category: string;
  organizer?: string;
  isNew?: boolean;
};

type RegisterResult = {
  success: boolean;
  message: string;
};

// API Service
const eventService = {
  fetchEvents: async (): Promise<EventItem[]> => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/events');
    // return response.json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(events as EventItem[]);
      }, 500);
    });
  },
  
  registerForEvent: async (eventId: number): Promise<RegisterResult> => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/events/${eventId}/register`, {
    //   method: 'POST',
    //   body: JSON.stringify({ userId: 'current-user-id' })
    // });
    // return response.json();
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Đăng ký thành công' });
      }, 1000);
    });
  }
};

const categories = [
  { id: 'all', name: 'Tất cả', icon: Church, color: 'bg-gray-500' },
  { id: 'Giới trẻ', name: 'Giới trẻ', icon: Users, color: 'bg-blue-500' },
  { id: 'Hành hương', name: 'Hành hương', icon: Cross, color: 'bg-green-500' },
  { id: 'Tĩnh tâm', name: 'Tĩnh tâm', icon: Heart, color: 'bg-purple-500' },
  { id: 'Phụng vụ', name: 'Phụng vụ', icon: Church, color: 'bg-amber-500' },
  { id: 'Bác ái', name: 'Bác ái', icon: Heart, color: 'bg-red-500' },
];

export default function SuKienPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [registering, setRegistering] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    setLoading(true);
    try {
      const data = await eventService.fetchEvents();
      setEvents(data);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (eventId: number) => {
    setRegistering(true);
    try {
      const result = await eventService.registerForEvent(eventId);
      if (result.success) {
        setRegisteredEvents([...registeredEvents, eventId]);
        alert('Đăng ký tham gia sự kiện thành công!');
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Có lỗi xảy ra, vui lòng thử lại sau.');
    } finally {
      setRegistering(false);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateStr: string) => {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      return `${parts[0]}/${parts[1]}/${parts[2]}`;
    }
    return dateStr;
  };

  const isRegistered = (eventId: number) => registeredEvents.includes(eventId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-700 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600')] bg-cover bg-center opacity-10" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Church className="w-4 h-4" />
              <span className="text-sm">Cập nhật liên tục</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">
              Tin Tức - Sự Kiện
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Cập nhật các hoạt động mới nhất của Giáo xứ Yên Lộ
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm sự kiện..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-amber-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="flex gap-3">
                    <div className="h-10 bg-gray-200 rounded-xl flex-1"></div>
                    <div className="h-10 bg-gray-200 rounded-xl flex-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Không tìm thấy sự kiện</h3>
            <p className="text-gray-500">Vui lòng thử lại với bộ lọc khác</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      event.category === 'Giới trẻ' ? 'bg-blue-500' :
                      event.category === 'Hành hương' ? 'bg-green-500' :
                      event.category === 'Tĩnh tâm' ? 'bg-purple-500' : 'bg-amber-500'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  {event.isNew && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full animate-pulse">
                        Mới
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-amber-500" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span>{event.time}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleRegister(event.id)}
                      disabled={registering || isRegistered(event.id)}
                      className={`flex-1 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        isRegistered(event.id)
                          ? 'bg-green-500 text-white cursor-default'
                          : 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg'
                      }`}
                    >
                      <Ticket className="w-4 h-4" />
                      {isRegistered(event.id) ? 'Đã đăng ký' : 'Đăng ký'}
                    </button>
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition flex items-center justify-center gap-2"
                    >
                      Chi tiết
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More Button */}
        {filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border-2 border-amber-500 text-amber-600 rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
              Xem thêm sự kiện
            </button>
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                  selectedEvent.category === 'Giới trẻ' ? 'bg-blue-500' :
                  selectedEvent.category === 'Hành hương' ? 'bg-green-500' :
                  selectedEvent.category === 'Tĩnh tâm' ? 'bg-purple-500' : 'bg-amber-500'
                }`}>
                  {selectedEvent.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedEvent.title}
              </h2>
              
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  <span>{formatDate(selectedEvent.date)}</span>
                  {selectedEvent.time && <span>• {selectedEvent.time}</span>}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span>{selectedEvent.location}</span>
                </div>
                {selectedEvent.organizer && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5 text-amber-500" />
                    <span>Ban tổ chức: {selectedEvent.organizer}</span>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thông tin chi tiết</h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    handleRegister(selectedEvent.id);
                    setSelectedEvent(null);
                  }}
                  disabled={registering || isRegistered(selectedEvent.id)}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isRegistered(selectedEvent.id)
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-amber-500 text-white hover:bg-amber-600'
                  }`}
                >
                  {isRegistered(selectedEvent.id) ? 'Đã đăng ký' : 'Đăng ký tham gia'}
                </button>
                <button
                  onClick={() => {
                    navigator.share?.({
                      title: selectedEvent.title,
                      text: selectedEvent.description,
                      url: window.location.href
                    });
                  }}
                  className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// Mock data
const events = [
  {
    id: 1,
    title: "Đại hội Giới trẻ Giáo xứ",
    date: "10/04/2026",
    time: "08:00 - 17:00",
    location: "Nhà thờ Giáo xứ Yên Lộ",
    description: "Chương trình sinh hoạt, cầu nguyện và giao lưu dành cho giới trẻ trong giáo xứ. Các hoạt động bao gồm: Thánh lễ, tọa đàm, trò chơi lớn, văn nghệ và cắm trại qua đêm.",
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1200",
    category: "Giới trẻ",
    organizer: "Ban Mục vụ Giới trẻ",
    isNew: true,
  },
  {
    id: 2,
    title: "Hành hương Năm Thánh",
    date: "01/05/2026",
    time: "05:00 - 18:00",
    location: "Trung tâm Hành hương Đức Mẹ La Vang",
    description: "Cộng đoàn cùng nhau tham dự hành hương, cầu nguyện và lãnh nhận ơn toàn xá. Chương trình bao gồm: lần hạt Mân Côi, Thánh lễ, và tham quan khuôn viên trung tâm hành hương.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200",
    category: "Hành hương",
    organizer: "Hội đồng Giáo xứ",
    isNew: false,
  },
  {
    id: 3,
    title: "Tĩnh tâm Mùa Chay",
    date: "15/04/2026",
    time: "08:00 - 16:00",
    location: "Hội trường Giáo xứ",
    description: "Buổi tĩnh tâm giúp cộng đoàn chuẩn bị tâm hồn sống Mùa Chay sốt sắng hơn. Các nội dung: chiêm niệm Lời Chúa, xưng tội, suy niệm cuộc thương khó của Chúa Giêsu.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
    category: "Tĩnh tâm",
    organizer: "Ban Linh đạo",
    isNew: false,
  },
];