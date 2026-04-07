const events = [
  {
    id: 1,
    title: "Đại hội Giới trẻ Giáo xứ",
    date: "10/04/2026",
    location: "Nhà thờ Giáo xứ Yên Lộ",
    description: "Chương trình sinh hoạt, cầu nguyện và giao lưu dành cho giới trẻ trong giáo xứ.",
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1200&auto=format&fit=crop",
    category: "Giới trẻ",
  },
  {
    id: 2,
    title: "Hành hương Năm Thánh",
    date: "01/05/2026",
    location: "Trung tâm Hành hương Đức Mẹ",
    description: "Cộng đoàn cùng nhau tham dự hành hương, cầu nguyện và lãnh nhận ơn toàn xá.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
    category: "Hành hương",
  },
  {
    id: 3,
    title: "Tĩnh tâm Mùa Chay",
    date: "15/04/2026",
    location: "Hội trường Giáo xứ",
    description: "Buổi tĩnh tâm giúp cộng đoàn chuẩn bị tâm hồn sống Mùa Chay sốt sắng hơn.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
    category: "Tĩnh tâm",
  },
];

export default function SuKienPage() {
  return (
    <div className="p-6 md:p-8">
      {/* Tiêu đề */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Tin tức - Sự kiện
        </h1>
        <p className="text-slate-600 mt-2">
          Cập nhật các hoạt động mới nhất của Giáo xứ Yên Lộ
        </p>
      </div>

      {/* Danh sách sự kiện */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition"
          >
            {/* Ảnh */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
            />

            {/* Nội dung */}
            <div className="p-5">
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full mb-3">
                {event.category}
              </span>

              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {event.title}
              </h2>

              <p className="text-sm text-slate-500 mb-1">
                📅 {event.date}
              </p>

              <p className="text-sm text-slate-500 mb-3">
                📍 {event.location}
              </p>

              <p className="text-slate-600 text-sm leading-6 mb-5">
                {event.description}
              </p>

              {/* Nút */}
              <div className="flex gap-3">
                <button className="flex-1 bg-indigo-600 text-white py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition">
                  Theo dõi
                </button>
                <button className="flex-1 border border-slate-300 text-slate-700 py-2.5 rounded-xl font-medium hover:bg-slate-50 transition">
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}