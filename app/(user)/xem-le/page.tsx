'use client';

import { useMemo, useState } from 'react';
import { Search, Youtube, Radio } from 'lucide-react';

const churchChannels = [
  {
    id: 1,
    name: "Nhà Thờ Chính Tòa Hà Nội",
    description: "Theo dõi các Thánh lễ trực tuyến và bài giảng mới nhất.",
    image:"https://static.momocdn.net/img/booking/nhatholon.jpg",
    channelLink: "https://www.youtube.com/@tgphanoi1",
    latestMassLink:"https://www.youtube.com/tgphanoi2",
    isLive: true,
  },
  {
    id: 2,
    name: "Nhà Thờ Đức Bà Sài Gòn",
    description: "Hiệp thông cầu nguyện cùng cộng đoàn qua các Thánh lễ phát trực tiếp.",
    image: "https://redsvn.net/wp-content/uploads/2015/12/Redsvn-Nha-tho-Duc-Ba-02.jpg",
    channelLink: "https://www.youtube.com/@tonggiaophansaigon",
    latestMassLink: "https://www.youtube.com/@tonggiaophansaigon",
    isLive: false,
  },
   {
    id: 3,
    name: "Giáo Xứ Yên Lộ",
    description: "Theo dõi các Thánh lễ trực tuyến và bài giảng mới nhất của giáo xứ.",
    image:"https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/660279686_1279899684290894_5266506261406892220_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=JH7DKMsZBkYQ7kNvwFgte6N&_nc_oc=AdqaLmqXk82KUQIPaUIG1vzjf_zNrPO8VTwkOnYe0UAjYlMSBS6GNx9hH9JTIR9zM81-evmH6zdIo45LS3O3mwWZ&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=WRibiGLUp9bBrP1RWBjlCg&_nc_ss=7a3a8&oh=00_AfzU4E7ZyzhJKmqZJelgCAwkWr91agjamEYoSNlRE5u2hA&oe=69D05A34",
    channelLink: "https://www.youtube.com/@Gi%C3%A1oX%E1%BB%A9Y%C3%AAnL%E1%BB%99-TGPH%C3%A0N%E1%BB%99i",
    latestMassLink: "https://www.youtube.com/watch?v=abc123",
    isLive: true,
  },
];

export default function XemLePage() {
  const [search, setSearch] = useState('');
  const [selectedChurch, setSelectedChurch] = useState(churchChannels[0]);

  const filteredChurches = useMemo(() => {
    return churchChannels.filter((church) =>
      church.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50 p-6 md:p-8">
      {/* Tiêu đề */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Radio className="w-4 h-4" />
          Xem lễ trực tuyến
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          Theo dõi Thánh lễ
          <span className="block text-red-600">mọi lúc, mọi nơi</span>
        </h1>

        <p className="text-slate-600 mt-4 text-lg max-w-2xl">
          Tìm và chọn nhà thờ để xem Thánh lễ trực tuyến qua YouTube.
        </p>
      </div>

      {/* Tìm kiếm */}
      <div className="mb-8 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm tên nhà thờ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 py-4 text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Danh sách chọn nhà thờ */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filteredChurches.length > 0 ? (
          filteredChurches.map((church) => (
            <button
              key={church.id}
              onClick={() => setSelectedChurch(church)}
              className={`px-5 py-3 rounded-2xl font-medium transition-all duration-200 ${
                selectedChurch.id === church.id
                  ? 'bg-red-600 text-white shadow-lg scale-[1.02]'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:shadow-sm'
              }`}
            >
              {church.name}
            </button>
          ))
        ) : (
          <p className="text-slate-500 text-base">Không tìm thấy nhà thờ phù hợp.</p>
        )}
      </div>

      {/* Card chính */}
      <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden max-w-5xl">
        {/* Ảnh nhà thờ */}
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img
            src={selectedChurch.image}
            alt={selectedChurch.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nội dung */}
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {selectedChurch.name}
              </h2>

              <p className="text-slate-600 leading-8 text-lg max-w-2xl">
                {selectedChurch.description}
              </p>
            </div>

            {/* Badge live */}
            <div>
              {selectedChurch.isLive ? (
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></span>
                  Đang trực tuyến
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full font-medium">
                  <span className="w-2.5 h-2.5 bg-slate-400 rounded-full"></span>
                  Chưa phát trực tiếp
                </div>
              )}
            </div>
          </div>

          {/* Nút */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={selectedChurch.channelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-red-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-red-700 transition shadow-md"
            >
              <Youtube className="w-5 h-5" />
              Xem kênh YouTube
            </a>

            <a
              href={selectedChurch.latestMassLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-slate-200 bg-white text-slate-700 px-6 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition"
            >
              <Radio className="w-5 h-5" />
              Xem Thánh lễ mới nhất
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}