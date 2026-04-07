'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { User, Search, Send, HeartHandshake } from 'lucide-react';

const friends = [
  { id: 1, name: 'Maria An', status: 'Đang hoạt động' },
  { id: 2, name: 'Giuse Bình', status: 'Vừa truy cập' },
  { id: 3, name: 'Anna Hương', status: 'Đang cầu nguyện' },
  { id: 4, name: 'Phêrô Nam', status: 'Online' },
];

type Message = {
  sender: 'me' | 'friend';
  text: string;
};

export default function KetNoiPage() {
  const [selectedFriend, setSelectedFriend] = useState(friends[0]);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Record<number, Message[]>>({
    1: [
      { sender: 'friend', text: 'Chào bạn, chúc bạn một ngày bình an 🙏' },
      { sender: 'me', text: 'Cảm ơn bạn, chúc bạn nhiều ơn Chúa nhé!' },
    ],
    2: [{ sender: 'friend', text: 'Tối nay bạn có tham gia đọc kinh không?' }],
    3: [{ sender: 'friend', text: 'Xin cầu nguyện cho gia đình mình nhé ❤️' }],
    4: [{ sender: 'friend', text: 'Chúa chúc lành cho bạn!' }],
  });

  const handleSend = () => {
    if (!message.trim()) return;

    setChat((prev) => ({
      ...prev,
      [selectedFriend.id]: [
        ...(prev[selectedFriend.id] || []),
        { sender: 'me', text: message },
      ],
    }));

    setMessage('');
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1d1b3a] via-[#3b2f6d] to-[#8b5cf6] text-white shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.12),transparent_30%)]" />
        <div className="relative px-6 py-10 md:px-10 md:py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <HeartHandshake className="h-4 w-4" />
            Kết nối cộng đoàn
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl font-serif">
            Trò chuyện cùng bạn bè Công giáo
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-white/85 md:text-lg leading-7">
            Cùng nhau chia sẻ đức tin, ý cầu nguyện, lời nhắn yêu thương và đồng hành trong Chúa mỗi ngày.
          </p>
        </div>
      </section>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="rounded-3xl border border-white/10 bg-white/80 shadow-xl backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-slate-800">
              Bạn bè
            </CardTitle>
            <div className="relative mt-3">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Tìm bạn..."
                className="h-11 rounded-2xl pl-10"
              />
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            {friends.map((friend) => (
              <button
                key={friend.id}
                onClick={() => setSelectedFriend(friend)}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  selectedFriend.id === friend.id
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{friend.name}</p>
                    <p className="text-sm text-slate-500">{friend.status}</p>
                  </div>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Khung chat */}
        <Card className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/80 shadow-xl backdrop-blur">
          <CardHeader className="border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <User className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl font-serif text-slate-800">
                  {selectedFriend.name}
                </CardTitle>
                <p className="text-sm text-slate-500">{selectedFriend.status}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex h-[500px] flex-col justify-between p-0">
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {(chat[selectedFriend.id] || []).map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === 'me' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                      msg.sender === 'me'
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <Input
                  placeholder="Nhập lời nhắn yêu thương..."
                  className="h-12 rounded-2xl"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button
                  onClick={handleSend}
                  className="h-12 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Gửi
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}