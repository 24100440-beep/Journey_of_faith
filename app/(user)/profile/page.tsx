'use client';

import { useState, type ReactNode } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Home, 
  Church, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Cross, 
  Droplet, 
  Flame,
  UserCheck,
  Calendar,
  Heart,
  Edit2,
  Save,
  X,
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react';

type UserProfile = {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  hometown: string;
  currentAddress: string;
  parish: string;
  community: string;
  job: string;
  school: string;
  saintName: string;
  baptismDate: string;
  confirmationDate: string;
  status: string;
  bio: string;
};

type InfoRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  isEditing: boolean;
  tempValue: string;
  onChange: (value: string) => void;
};

export default function HoSoPage() {
  const [editing, setEditing] = useState(false);
  const [showImageSuggestions, setShowImageSuggestions] = useState(false);

  const [user, setUser] = useState<UserProfile>({
    avatar: 'https://cdn.pixabay.com/photo/2020/04/15/06/20/jesus-5043721_640.png',
    name: 'Nguyễn Văn An',
    email: 'nguyenvana@gmail.com',
    phone: '0988 888 888',
    hometown: 'Nam Định',
    currentAddress: 'Số 123, đường Lê Văn Lương, Hoàng Mai, Hà Nội',
    parish: 'Giáo xứ Thái Hà',
    community: 'Ca đoàn Cecilia',
    job: 'Nhân viên văn phòng',
    school: 'Học viện Công giáo Việt Nam',
    saintName: 'Gioan Baotixita',
    baptismDate: '15/05/2000',
    confirmationDate: '20/08/2010',
    status: 'Giáo dân đang sinh hoạt',
    bio: 'Tôi là một giáo dân nhiệt thành, luôn mong muốn phục vụ Chúa và cộng đoàn qua ca đoàn và các hoạt động bác ái.',
  });


  // Gợi ý ảnh Chúa đẹp
  const jesusImages = [
    {
      url: 'https://cuahangconggiao.com/wp-content/uploads/2023/02/hinh-anh-chua-giesu-dep.jpg',
      name: 'Chúa Giêsu tha thứ',
      description: 'Hình ảnh Chúa Giêsu với vòng hoa gai'
    },
    {
      url: 'https://phunugioi.com/wp-content/uploads/2021/01/tai-hinh-anh-cong-giao-dep-nhat-cho-may.jpg',
      name: 'Chúa Giêsu và trẻ em',
      description: 'Chúa Giêsu với các em nhỏ'
    },
    {
      url: 'https://phunugioi.com/wp-content/uploads/2021/01/tai-hinh-anh-cong-giao-dep-nhat-cho-may.jpg',
      name: 'Chúa Giêsu mục tử',
      description: 'Chúa Giêsu là Mục Tử Nhân Lành'
    },
    {
      url: 'https://img6.thuthuatphanmem.vn/uploads/2022/04/18/anh-tre-em-va-chua-giesu_083332487.jpg',
      name: 'Chúa Giêsu cầu nguyện',
      description: 'Chúa Giêsu đang cầu nguyện'
    },
    {
      url: 'https://phunugioi.com/wp-content/uploads/2021/01/tai-hinh-anh-cong-giao-dep-nhat-cho-may.jpg',
      name: 'Chúa Giêsu Phục Sinh',
      description: 'Chúa Giêsu Phục Sinh vinh quang'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2015/12/08/00/34/jesus-1082112_640.png',
      name: 'Chúa Giêsu và Thánh Tâm',
      description: 'Thánh Tâm Chúa Giêsu'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2023/03/22/06/10/ai-generated-7868740_640.png',
      name: 'Chúa Giêsu yêu thương',
      description: 'Chúa Giêsu với vòng tay rộng mở'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2020/07/13/12/25/jesus-5400414_640.png',
      name: 'Chúa Giêsu vác thập giá',
      description: 'Chúa Giêsu vác thập giá'
    }
  ];

  const [tempUser, setTempUser] = useState<UserProfile>(user);

  const handleEdit = () => {
    setTempUser(user);
    setEditing(true);
  };

  const handleSave = () => {
    setUser(tempUser);
    setEditing(false);
  };

  const handleCancel = () => {
    setTempUser(user);
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Header với hình nhà thờ */}
      <div className="relative h-48 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1438036745737-3e9ac2c6ab01?w=1200)',
        backgroundPosition: 'center 30%'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e8] via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-white">
            <div>
              <h1 className="text-2xl font-bold">Hồ Sơ Giáo Dân</h1>
              <p className="text-sm opacity-90">Cộng đoàn Công giáo Việt Nam</p>
            </div>
            <Cross className="w-8 h-8 opacity-80" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Action Buttons */}
          <div className="flex justify-end mb-4 gap-3">
            {!editing ? (
              <button
                onClick={handleEdit}
                className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 shadow-md"
              >
                <Edit2 className="w-4 h-4" />
                Chỉnh sửa
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Lưu
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Hủy
                </button>
              </>
            )}
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            
            {/* Phần thông tin cá nhân */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar với gợi ý ảnh Chúa */}
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <img
                      src={editing ? tempUser.avatar : user.avatar}
                      alt="Avatar"
                      className="w-28 h-28 rounded-full border-4 border-amber-200 object-cover shadow-md"
                    />
                    {!editing && (
                      <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center cursor-pointer">
                        <span className="text-white text-xs font-medium">Ảnh Chúa</span>
                      </div>
                    )}
                  </div>
                  
                  {editing && (
                    <div className="mt-3 w-64">
                      <button
                        onClick={() => setShowImageSuggestions(!showImageSuggestions)}
                        className="w-full bg-amber-50 hover:bg-amber-100 text-amber-700 px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition mb-2"
                      >
                        <ImageIcon className="w-4 h-4" />
                        Chọn ảnh Chúa
                      </button>
                      
                      {showImageSuggestions && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200 max-h-80 overflow-y-auto">
                          <p className="text-xs font-semibold text-gray-700 mb-2">📸 Gợi ý ảnh Chúa đẹp</p>
                          <div className="grid grid-cols-3 gap-2">
                            {jesusImages.map((img, idx) => (
                              <div
                                key={idx}
                                className="cursor-pointer group relative"
                                onClick={() => {
                                  setTempUser({ ...tempUser, avatar: img.url });
                                  setShowImageSuggestions(false);
                                }}
                              >
                                <img
                                  src={img.url}
                                  alt={img.name}
                                  className="w-full h-20 object-cover rounded-lg border-2 border-transparent hover:border-amber-500 transition"
                                />
                                <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                  <span className="text-white text-[10px] text-center px-1">Chọn</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <input
                        type="text"
                        value={tempUser.avatar}
                        onChange={(e) => setTempUser({ ...tempUser, avatar: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm mt-2"
                        placeholder="Hoặc dán URL ảnh..."
                      />
                    </div>
                  )}
                </div>

                {/* Thông tin cơ bản */}
                <div className="flex-1">
                  {editing ? (
                    <input
                      value={tempUser.name}
                      onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
                      className="text-2xl font-bold border-b-2 border-amber-400 outline-none w-full mb-2 pb-1"
                    />
                  ) : (
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
                  )}
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <UserCheck className="w-3 h-3" />
                      {editing ? tempUser.status : user.status}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {editing ? tempUser.job : user.job}
                    </span>
                  </div>

                  {/* Contact info */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">Email</p>
                        {editing ? (
                          <input
                            value={tempUser.email}
                            onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
                            className="border border-gray-300 rounded-lg px-3 py-1 w-full text-sm"
                          />
                        ) : (
                          <p className="text-gray-700">{user.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">Điện thoại</p>
                        {editing ? (
                          <input
                            value={tempUser.phone}
                            onChange={(e) => setTempUser({ ...tempUser, phone: e.target.value })}
                            className="border border-gray-300 rounded-lg px-3 py-1 w-full text-sm"
                          />
                        ) : (
                          <p className="text-gray-700">{user.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">Địa chỉ</p>
                        {editing ? (
                          <input
                            value={tempUser.currentAddress}
                            onChange={(e) => setTempUser({ ...tempUser, currentAddress: e.target.value })}
                            className="border border-gray-300 rounded-lg px-3 py-1 w-full text-sm"
                          />
                        ) : (
                          <p className="text-gray-700">{user.currentAddress}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Giới thiệu */}
            <div className="p-6 border-b border-gray-100 bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                Giới thiệu
              </h3>
              {editing ? (
                <textarea
                  value={tempUser.bio}
                  onChange={(e) => setTempUser({ ...tempUser, bio: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                  rows={3}
                />
              ) : (
                <p className="text-gray-600 text-sm leading-relaxed">{user.bio}</p>
              )}
            </div>

            {/* Thông tin giáo xứ */}
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Church className="w-4 h-4 text-amber-700" />
                Thông tin giáo xứ
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoRow 
                  icon={<Home className="w-4 h-4" />}
                  label="Quê quán"
                  value={user.hometown}
                  isEditing={editing}
                  tempValue={tempUser.hometown}
                  onChange={(v) => setTempUser({ ...tempUser, hometown: v })}
                />

                <InfoRow 
                  icon={<Church className="w-4 h-4" />}
                  label="Giáo xứ"
                  value={user.parish}
                  isEditing={editing}
                  tempValue={tempUser.parish}
                  onChange={(v) => setTempUser({ ...tempUser, parish: v })}
                />

                <InfoRow 
                  icon={<Users className="w-4 h-4" />}
                  label="Hội đoàn / Nhóm"
                  value={user.community}
                  isEditing={editing}
                  tempValue={tempUser.community}
                  onChange={(v) => setTempUser({ ...tempUser, community: v })}
                />

                <InfoRow 
                  icon={<Cross className="w-4 h-4" />}
                  label="Tên Thánh"
                  value={user.saintName}
                  isEditing={editing}
                  tempValue={tempUser.saintName}
                  onChange={(v) => setTempUser({ ...tempUser, saintName: v })}
                />
              </div>
            </div>

            {/* Học vấn & Nghề nghiệp */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                Học vấn & Nghề nghiệp
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoRow 
                  icon={<GraduationCap className="w-4 h-4" />}
                  label="Trường học"
                  value={user.school}
                  isEditing={editing}
                  tempValue={tempUser.school}
                  onChange={(v) => setTempUser({ ...tempUser, school: v })}
                />

                <InfoRow 
                  icon={<Briefcase className="w-4 h-4" />}
                  label="Nghề nghiệp"
                  value={user.job}
                  isEditing={editing}
                  tempValue={tempUser.job}
                  onChange={(v) => setTempUser({ ...tempUser, job: v })}
                />
              </div>
            </div>

            {/* Các Bí tích */}
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Droplet className="w-4 h-4 text-blue-400" />
                Các Bí tích đã lãnh nhận
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoRow 
                  icon={<Droplet className="w-4 h-4" />}
                  label="Ngày Rửa Tội"
                  value={user.baptismDate}
                  isEditing={editing}
                  tempValue={tempUser.baptismDate}
                  onChange={(v) => setTempUser({ ...tempUser, baptismDate: v })}
                />

                <InfoRow 
                  icon={<Flame className="w-4 h-4" />}
                  label="Ngày Thêm Sức"
                  value={user.confirmationDate}
                  isEditing={editing}
                  tempValue={tempUser.confirmationDate}
                  onChange={(v) => setTempUser({ ...tempUser, confirmationDate: v })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component InfoRow tái sử dụng
function InfoRow({ icon, label, value, isEditing, tempValue, onChange }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100">
      <div className="text-amber-600 mt-0.5">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        {isEditing ? (
          <input
            value={tempValue}
            onChange={(e) => onChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none"
          />
        ) : (
          <p className="text-gray-800 text-sm font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}