'use client';

import { useState, useEffect, type SyntheticEvent } from 'react';
import { 
  Youtube, 
  Radio, 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Church, 
  Heart,
  Play,
  ChevronRight,
  Wifi,
  WifiOff,
  ExternalLink,
  Search  // ← ĐÃ THÊM IMPORT SEARCH
} from 'lucide-react';

type Channel = {
  id: number;
  name: string;
  description: string;
  image: string;
  channelLink: string;
  isLive: boolean;
};

type LiveStatus = {
  isLive: boolean;
  liveTitle: string;
  viewerCount: number;
  startTime: string;
};

type Mass = {
  id: number;
  title: string;
  date: string;
  videoId: string;
  views: number;
  duration: string;
};

// API Service
const massService = {
  // Fetch all channels
  fetchChannels: async (): Promise<Channel[]> => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/channels');
    // return response.json();
    
    // Mock data for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(churchChannels);
      }, 500);
    });
  },
  
  // Fetch live status
  fetchLiveStatus: async (channelId: number): Promise<LiveStatus> => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/channels/${channelId}/live`);
    // return response.json();
    
    return {
      isLive: Math.random() > 0.5,
      liveTitle: "Thánh lễ Chúa Nhật",
      viewerCount: Math.floor(Math.random() * 1000),
      startTime: new Date().toISOString()
    };
  },
  
  // Fetch past masses
  fetchPastMasses: async (channelId: number): Promise<Mass[]> => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/channels/${channelId}/masses`);
    // return response.json();
    
    return [
      {
        id: 1,
        title: "Thánh lễ Chúa Nhật Lễ Lá",
        date: "2026-03-24T17:00:00",
        videoId: "QT1da6GbHKo",
        views: 1234,
        duration: "1:15:23"
      },
      {
        id: 2,
        title: "Thánh lễ Truyền Dầu",
        date: "2026-03-31T18:30:00",
        videoId: "MqMEk9_PMik",
        views: 856,
        duration: "1:08:42"
      },
      {
        id: 3,
        title: "Thánh lễ Bữa Tiệc Ly",
        date: "2026-04-02T09:30:00",
        videoId: "mNfvRveB53Y",
        views: 2103,
        duration: "1:22:15"
      }
    ];
  }
};

// Component chính
export default function LiveMassPage() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [loading, setLoading] = useState(true);
  const [liveStatus, setLiveStatus] = useState<LiveStatus | null>(null);
  const [pastMasses, setPastMasses] = useState<Mass[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Mass | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Load channels
  useEffect(() => {
    loadChannels();
  }, []);

  // Load channel details when selected
  useEffect(() => {
    if (selectedChannel) {
      loadChannelDetails(selectedChannel.id);
    }
  }, [selectedChannel]);

  const loadChannels = async () => {
    setLoading(true);
    try {
      const data = await massService.fetchChannels();
      setChannels(data);
      if (data.length > 0) {
        setSelectedChannel(data[0]);
      }
    } catch (error) {
      console.error('Error loading channels:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadChannelDetails = async (channelId: number) => {
    try {
      const [live, past] = await Promise.all([
        massService.fetchLiveStatus(channelId),
        massService.fetchPastMasses(channelId)
      ]);
      setLiveStatus(live);
      setPastMasses(past);
    } catch (error) {
      console.error('Error loading channel details:', error);
    }
  };

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Hôm nay';
    if (days === 1) return 'Hôm qua';
    if (days < 7) return `${days} ngày trước`;
    return date.toLocaleDateString('vi-VN');
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      
      {/* Header với hình nền nhà thờ */}
      <div className="relative bg-gradient-to-r from-amber-700 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438036745737-3e9ac2c6ab01?w=1600')] bg-cover bg-center opacity-10" />
        
        <div className="relative container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Church className="w-4 h-4" />
              <span className="text-sm uppercase tracking-widest font-semibold text-white/90">Thánh lễ trực tuyến</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              Thánh Lễ Trực Tuyến
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Hiệp thông cầu nguyện cùng cộng đoàn qua các Thánh lễ trực tiếp
            </p>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Danh sách nhà thờ */}
          <div className="lg:w-80 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm nhà thờ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition"
              />
            </div>

            {/* Channel list */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Danh sách nhà thờ</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {channels.length} giáo xứ 
                </p>
              </div>
              
              <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                {loading ? (
                  [...Array(3)].map((_, i) => (
                    <div key={i} className="p-4 animate-pulse">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  filteredChannels.map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setSelectedChannel(channel)}
                      className={`w-full p-4 text-left transition-all duration-300 hover:bg-amber-50 group ${
                        selectedChannel?.id === channel.id 
                          ? 'bg-amber-50 border-l-4 border-l-amber-500' 
                          : ''
                      }`}
                    >
                      <div className="flex gap-3">
                        <img 
                          src={channel.image} 
                          alt={channel.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">
                            {channel.name}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {channel.description}
                          </p>
                          {channel.isLive && (
                            <span className="inline-flex items-center gap-1 text-xs text-red-500 mt-1">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                              LIVE
                            </span>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {selectedChannel && (
              <>
                {/* Channel Info */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="relative h-48 md:h-64">
                    <img 
                      src={selectedChannel.image} 
                      alt={selectedChannel.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-2xl font-bold text-white mb-1">
                        {selectedChannel.name}
                      </h2>
                      <p className="text-white/90 text-sm">
                        {selectedChannel.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live Stream Section */}
                {liveStatus && (
                  <div className={`rounded-xl border-2 overflow-hidden transition-all ${
                    liveStatus.isLive 
                      ? 'border-red-500 bg-gradient-to-r from-red-50 to-amber-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="p-6">
                      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          {liveStatus.isLive ? (
                            <>
                              <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <span className="font-semibold text-red-600">ĐANG TRỰC TIẾP</span>
                              </div>
                              {liveStatus.viewerCount && (
                                <span className="text-sm text-gray-500">
                                  {liveStatus.viewerCount.toLocaleString()} người đang xem
                                </span>
                              )}
                            </>
                          ) : (
                            <div className="flex items-center gap-2">
                              <WifiOff className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-500">Chưa có thánh lễ trực tiếp</span>
                            </div>
                          )}
                        </div>
                        
                        {liveStatus.isLive && (
                          <a
                            href={selectedChannel.channelLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all transform hover:scale-105"
                          >
                            <Youtube className="w-5 h-5" />
                            <span>Xem trên YouTube</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      
                      {liveStatus.isLive && liveStatus.liveTitle && (
                        <p className="text-gray-700">
                          <span className="font-medium">Đang phát:</span> {liveStatus.liveTitle}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Past Masses Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-amber-500" />
                        Thánh Lễ Đã Phát Sóng
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Xem lại các thánh lễ trước đây
                      </p>
                    </div>
                    <div className="text-sm text-gray-400">
                      {pastMasses.length} video
                    </div>
                  </div>

                  {pastMasses.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Youtube className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500">Chưa có thánh lễ nào được ghi lại</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {pastMasses.map((mass) => (
                        <div
                          key={mass.id}
                          onClick={() => setSelectedVideo(mass)}
                          className="group cursor-pointer"
                        >
                          <div className="relative rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                            <img
                              src={`https://img.youtube.com/vi/${mass.videoId}/maxresdefault.jpg`}
                              alt={mass.title}
                              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e: SyntheticEvent<HTMLImageElement>) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.src = `https://img.youtube.com/vi/${mass.videoId}/hqdefault.jpg`;
                              }}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                <Play className="w-6 h-6 text-amber-600 ml-0.5" />
                              </div>
                            </div>
                            {mass.duration && (
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                {mass.duration}
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-3 space-y-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition line-clamp-1">
                              {mass.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(mass.date)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {formatTime(mass.date)}
                              </span>
                            </div>
                            {mass.views && (
                              <p className="text-xs text-gray-400">
                                {mass.views.toLocaleString()} lượt xem
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-900">{selectedVideo.title}</h3>
                <p className="text-xs text-gray-500">
                  {formatDate(selectedVideo.date)} • {formatTime(selectedVideo.date)}
                </p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="p-4 bg-gray-50">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-rose-500" />
                  Cầu nguyện cho nhau
                </span>
                <span className="flex items-center gap-1">
                  <Church className="w-4 h-4 text-amber-500" />
                  {selectedChannel?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Mock data
const churchChannels = [
  {
    id: 1,
    name: "Nhà Thờ Chính Tòa Hà Nội",
    description: "Theo dõi các Thánh lễ trực tuyến và bài giảng mới nhất.",
    image: "https://static.momocdn.net/img/booking/nhatholon.jpg",
    channelLink: "https://www.youtube.com/@tgphanoi1",
    isLive: true,
  },
  {
    id: 2,
    name: "Nhà Thờ Đức Bà Sài Gòn",
    description: "Hiệp thông cầu nguyện cùng cộng đoàn qua các Thánh lễ phát trực tiếp.",
    image: "https://redsvn.net/wp-content/uploads/2015/12/Redsvn-Nha-tho-Duc-Ba-02.jpg",
    channelLink: "https://www.youtube.com/@tonggiaophansaigon",
    isLive: false,
  },
  {
    id: 3,
    name: "Giáo Xứ Yên Lộ",
    description: "Theo dõi các Thánh lễ trực tuyến của giáo xứ.",
    image: "https://giothanhle.net/wp-content/uploads/2024/04/nha-tho-giao-xu-yen-lo.jpg",
    channelLink: "https://www.youtube.com/@Gi%C3%A1oX%E1%BB%A9Y%C3%AAnL%E1%BB%99-TGPH%C3%A0N%E1%BB%99i",
    isLive: true,
  },
];