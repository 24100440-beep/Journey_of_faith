'use client';

import { useState, useRef, useEffect, type ChangeEvent } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Heart,
  Share2,
  Download,
  Search,
  Music,
  Disc,
  Headphones,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle
} from 'lucide-react';

type Song = {
  id?: number;
  title: string;
  artist: string;
  performer: string;
  youtube?: string | null;
  image: string;
  audioUrl?: string | null;
};

type Playlists = Record<string, Song[]>;

type ToggleFavoriteResult = {
  success: boolean;
};

// API Service
const musicService = {
  fetchPlaylists: async (): Promise<Playlists> => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/music/playlists');
    // return response.json();
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(musicData as Playlists);
      }, 500);
    });
  },
  
  incrementPlayCount: async (songId: number | string): Promise<void> => {
    // TODO: Track play count in database
    console.log('Increment play count for song:', songId);
  },
  
  toggleFavorite: async (songId: number | string, isFavorite: boolean): Promise<ToggleFavoriteResult> => {
    // TODO: Save favorite status to database
    // const response = await fetch(`/api/music/favorites/${songId}`, {
    //   method: isFavorite ? 'DELETE' : 'POST',
    // });
    // return response.json();
    
    return { success: true };
  }
};

const seasons = [
  { id: 'giangsinh', label: 'Giáng Sinh', icon: '🎄', color: 'from-red-600 to-red-700', bgColor: 'bg-red-50' },
  { id: 'muachay', label: 'Mùa Chay', icon: '✝️', color: 'from-purple-600 to-purple-700', bgColor: 'bg-purple-50' },
  { id: 'phucsinh', label: 'Phục Sinh', icon: '🌼', color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-50' },
  { id: 'thuongnien', label: 'Thường Niên', icon: '🌿', color: 'from-green-600 to-green-700', bgColor: 'bg-green-50' },
];

export default function NhacPage() {
  const [playlists, setPlaylists] = useState<Playlists>({});
  const [currentSeason, setCurrentSeason] = useState('giangsinh');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<Song[]>([]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    loadPlaylists();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex, currentSeason]);

  const loadPlaylists = async () => {
    setLoading(true);
    try {
      const data = await musicService.fetchPlaylists();
      setPlaylists(data);
    } catch (error) {
      console.error('Error loading playlists:', error);
    } finally {
      setLoading(false);
    }
  };

  const currentSongs = playlists[currentSeason] || [];
  const filteredSongs = currentSongs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.performer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentSong = filteredSongs[currentSongIndex] || filteredSongs[0];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (currentSong && !isPlaying) {
      musicService.incrementPlayCount(currentSong.id || currentSong.title);
    }
  };

  const handleNext = () => {
    if (currentSongIndex < filteredSongs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(0);
    }
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    } else {
      setCurrentSongIndex(filteredSongs.length - 1);
    }
    setIsPlaying(true);
  };

  const handleLike = async () => {
    const newLikeStatus = !isLiked;
    setIsLiked(newLikeStatus);
    await musicService.toggleFavorite(currentSong?.id || currentSong?.title || '', isLiked);
    if (currentSong) {
      if (newLikeStatus) {
        setFavorites([...favorites, currentSong]);
      } else {
        setFavorites(favorites.filter(fav => fav.title !== currentSong.title));
      }
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.volume = volume / 100;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const seekTime = (parseInt(e.target.value, 10) / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const currentSeasonMeta = seasons.find(s => s.id === currentSeason);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải nhạc thánh...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-orange-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Music className="w-4 h-4" />
              <span className="text-sm">Nhạc Thánh</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif">
              Kho Nhạc Thánh
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Tuyển tập những bài thánh ca hay nhất theo từng mùa phụng vụ
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Player Section */}
          <div className="flex-1">
            {/* Season Selector */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {seasons.map((season) => (
                <button
                  key={season.id}
                  onClick={() => {
                    setCurrentSeason(season.id);
                    setCurrentSongIndex(0);
                    setIsPlaying(true);
                  }}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    currentSeason === season.id
                      ? `bg-gradient-to-r ${season.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 border border-gray-200 hover:shadow-md'
                  }`}
                >
                  <span>{season.icon}</span>
                  <span>{season.label}</span>
                </button>
              ))}
            </div>

            {/* Current Playing Card */}
            {currentSong && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Video/Image */}
                <div className="relative aspect-video bg-black">
                  {currentSong.youtube ? (
                    <iframe
                      src={`${currentSong.youtube}?autoplay=${isPlaying ? 1 : 0}`}
                      title={currentSong.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img 
                      src={currentSong.image} 
                      alt={currentSong.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Audio element for custom player */}
                  {currentSong.audioUrl && (
                    <audio
                      ref={audioRef}
                      src={currentSong.audioUrl}
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={handleNext}
                      onLoadedMetadata={handleTimeUpdate}
                    />
                  )}
                </div>

                {/* Song Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {currentSong.title}
                      </h2>
                      <p className="text-gray-600 flex items-center gap-2">
                        <span className="font-medium">Sáng tác:</span> {currentSong.artist}
                      </p>
                      <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                        <Headphones className="w-4 h-4" />
                        <span>Trình bày: {currentSong.performer}</span>
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={handleLike}
                        className={`p-2 rounded-full transition ${
                          isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <Heart className="w-6 h-6" fill={isLiked ? 'currentColor' : 'none'} />
                      </button>
                      <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Custom Audio Player Controls */}
                  {currentSong.audioUrl && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">{formatTime(currentTime)}</span>
                        <input
                          type="range"
                          value={(currentTime / duration) * 100 || 0}
                          onChange={handleSeek}
                          className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                        <span className="text-xs text-gray-500">{formatTime(duration)}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button className="p-1 text-gray-500 hover:text-gray-700">
                            <Repeat className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-gray-700">
                            <Shuffle className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            onClick={handlePrevious}
                            className="p-2 text-gray-600 hover:text-amber-600 transition"
                          >
                            <SkipBack className="w-6 h-6" />
                          </button>
                          
                          <button
                            onClick={handlePlayPause}
                            className="w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-105"
                          >
                            {isPlaying ? (
                              <Pause className="w-6 h-6 text-white" />
                            ) : (
                              <Play className="w-6 h-6 text-white ml-0.5" />
                            )}
                          </button>
                          
                          <button
                            onClick={handleNext}
                            className="p-2 text-gray-600 hover:text-amber-600 transition"
                          >
                            <SkipForward className="w-6 h-6" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <button onClick={toggleMute} className="p-1 text-gray-500 hover:text-gray-700">
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </button>
                          <input
                            type="range"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-20 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            min="0"
                            max="100"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {!currentSong.audioUrl && currentSong.youtube && (
                    <div className="text-center text-gray-500 text-sm mt-4">
                      📺 Đang phát từ YouTube
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Playlist Sidebar */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 sticky top-6">
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                    <Disc className="w-5 h-5 text-amber-500" />
                    Danh sách bài hát
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {filteredSongs.length} bài
                  </span>
                </div>
                
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Tìm bài hát..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentSongIndex(0);
                    }}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition"
                  />
                </div>
              </div>

              {/* Song List */}
              <div className="max-h-[500px] overflow-y-auto p-2">
                {filteredSongs.length === 0 ? (
                  <div className="text-center py-12">
                    <Music className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Không tìm thấy bài hát</p>
                  </div>
                ) : (
                  filteredSongs.map((song, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setCurrentSongIndex(idx);
                        setIsPlaying(true);
                      }}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 mb-2 ${
                        currentSong?.title === song.title
                          ? `bg-gradient-to-r ${currentSeasonMeta?.bgColor} border-l-4 border-amber-500`
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={song.image}
                          alt={song.title}
                          className="w-14 h-14 rounded-xl object-cover"
                        />
                        {currentSong?.title === song.title && isPlaying && (
                          <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">
                          {song.title}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {song.artist}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-xs text-gray-400 truncate">
                            🎤 {song.performer}
                          </p>
                          {favorites.some(fav => fav.title === song.title) && (
                            <Heart className="w-3 h-3 text-red-500 fill-current" />
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Play this song
                          setCurrentSongIndex(idx);
                          setIsPlaying(true);
                        }}
                        className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                      >
                        <Play className="w-3 h-3 text-white ml-0.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Stats */}
              <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Music className="w-3 h-3" />
                    <span>Đang phát trong mùa {currentSeasonMeta?.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-3 h-3" />
                    <span>{favorites.length} yêu thích</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock data
const musicData = {
  giangsinh: [
    {
      title: 'Hang Bêlem',
      artist: 'Lm. Kim Long',
      performer: 'Ca đoàn Thánh Tâm',
      youtube: 'https://www.youtube.com/embed/SZ_dU_ZarkA',
      image: '/images/hang.jpg',
      audioUrl: null,
    },
    {
      title: 'Đêm Thánh Vô Cùng',
      artist: 'Franz Gruber',
      performer: 'Hiệp Anh',
      youtube: 'https://www.youtube.com/embed/JjvrZha-9nQ',
      image: '/images/dem.jpg',
      audioUrl: null,
    },
    {
      title: 'Thánh Ca Giáng Sinh',
      artist: 'Lm. Thành Tâm',
      performer: 'Ca đoàn Cecilia',
      youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: '/images/anh-chua.jpg',
      audioUrl: null,
    },
  ],
  muachay: [
    {
      title: 'Chiều Buồn Canvê',
      artist: 'Đinh Công Huỳnh',
      performer: 'Gia Ân',
      youtube: 'https://www.youtube.com/embed/Et6sXY9rQfw',
      image: '/images/caocl.jpg',
      audioUrl: null,
    },
  ],
  phucsinh: [
    {
      title: 'Chúa Đã Sống Lại',
      artist: 'Lm. Thành Tâm',
      performer: 'Phan Đinh Tùng',
      youtube: 'https://www.youtube.com/embed/koygSjy1kJg',
      image: '/images/anh-chua.jpg',
      audioUrl: null,
    },
  ],
  thuongnien: [
    {
      title: 'Tình Chúa Cao Vời',
      artist: 'Lm. Duy Thiên',
      performer: 'Phan Đinh Tùng',
      youtube: 'https://www.youtube.com/embed/Rn0AnmN79B0',
      image: '/images/hang.jpg',
      audioUrl: null,
    },
  ],
};