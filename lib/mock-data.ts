import type { Church, Mass, DailyGospel, QuizCategory, Question } from '@/types';

// Mock Churches
export const mockChurches: Church[] = [
  {
    id: 1,
    name: 'Nhà thờ Đức Bà Sài Gòn',
    address: '01 Công xã Paris, Quận 1, TP.HCM',
    diocese: 'Tổng Giáo phận Sài Gòn',
    parish: 'Nhà thờ Chính tòa',
    phone: '028 6650 6875',
    createdAt: new Date()
  },
  {
    id: 2,
    name: 'Nhà thờ Tân Định',
    address: '289 Hai Bà Trưng, Quận 3, TP.HCM',
    diocese: 'Tổng Giáo phận Sài Gòn',
    parish: 'Giáo xứ Tân Định',
    phone: '028 3829 0093',
    createdAt: new Date()
  },
  {
    id: 3,
    name: 'Nhà thờ Lớn Hà Nội',
    address: '40 Nhà Chung, Hoàn Kiếm, Hà Nội',
    diocese: 'Tổng Giáo phận Hà Nội',
    parish: 'Nhà thờ Chính tòa',
    phone: '033 569 3915',
    createdAt: new Date()
  }
];

// Mock Masses
export const mockMasses: Mass[] = [
  {
    id: 1,
    churchId: 1,
    church: mockChurches[0],
    title: 'Thánh Lễ Chúa Nhật',
    description: 'Thánh lễ Chúa Nhật hàng tuần',
    massDate: new Date(),
    massTime: '09:00',
    massType: 'sunday',
    liturgicalColor: 'green',
    createdAt: new Date()
  },
  {
    id: 2,
    churchId: 1,
    church: mockChurches[0],
    title: 'Thánh Lễ Chiều',
    description: 'Thánh lễ chiều Chúa Nhật',
    massDate: new Date(),
    massTime: '17:30',
    massType: 'sunday',
    liturgicalColor: 'green',
    createdAt: new Date()
  },
  {
    id: 3,
    churchId: 2,
    church: mockChurches[1],
    title: 'Thánh Lễ Sáng',
    description: 'Thánh lễ ngày thường',
    massDate: new Date(),
    massTime: '05:30',
    massType: 'daily',
    liturgicalColor: 'green',
    createdAt: new Date()
  },
  {
    id: 4,
    churchId: 1,
    church: mockChurches[0],
    title: 'Lễ Kính Thánh Giuse',
    description: 'Lễ kính Thánh Giuse - Bổn mạng Giáo hội',
    massDate: new Date(2026, 2, 19),
    massTime: '08:00',
    massType: 'special',
    liturgicalColor: 'white',
    createdAt: new Date()
  }
];

// Mock Daily Gospel
export const mockDailyGospel: DailyGospel = {
  id: 1,
  date: new Date(),
  firstReading: `Bài Trích Sách Ngôn Sứ Isaia (Is 49, 14-15)

Xi-on từng nói: "Đức Chúa đã bỏ tôi, Chúa Thượng tôi đã quên tôi rồi!"

Nhưng Chúa phán: "Người đàn bà có thể nào quên đứa con mình đang bú mớm, hay chẳng thương đứa con mình đã mang nặng đẻ đau? Cho dù nó có quên đi nữa, phần Ta, Ta sẽ không hề quên ngươi."`,
  psalm: `Đáp Ca: Tv 61, 2-3. 6-7. 8-9ab

Đáp: Chỉ nơi Thiên Chúa, linh hồn tôi mới được nghỉ ngơi yên hàn.

Xướng: Chỉ nơi Thiên Chúa, linh hồn tôi mới được nghỉ ngơi yên hàn, ơn cứu độ tôi bởi Người mà đến. Duy Người là núi đá, là ơn cứu độ của tôi.

Xướng: Linh hồn tôi ơi, hãy nghỉ ngơi yên hàn trong một mình Thiên Chúa, vì Người là nơi tôi trông đợi. Duy Người là núi đá, là ơn cứu độ của tôi.`,
  gospel: `Tin Mừng Chúa Giêsu Kitô theo Thánh Matthêu (Mt 6, 24-34)

Khi ấy, Chúa Giêsu phán cùng các môn đệ rằng: "Không ai có thể làm tôi hai chủ: vì hoặc nó sẽ ghét chủ này và mến chủ kia, hoặc nó chuộng chủ này và khinh chủ nọ. Các con không thể làm tôi Thiên Chúa và tiền của được.

Vì thế, Thầy bảo các con: Chớ áy náy lo lắng cho mạng sống mình: lấy gì ăn; hay cho thân xác các con: lấy gì mặc. Nào mạng sống không hơn của ăn, và thân xác không hơn áo mặc sao?

Hãy nhìn xem chim trời, chúng không gieo, không gặt, không thu vào lẫm, thế mà Cha các con trên trời vẫn nuôi chúng. Nào các con không hơn chúng sao? Nào có ai trong các con lo lắng áy náy mà có thể làm cho mình cao thêm một gang được ư?

Còn về áo mặc, các con lo lắng làm gì? Hãy ngắm xem hoa huệ ngoài đồng coi chúng mọc lên thế nào? Chúng không làm lụng, không canh cửi. Nhưng Thầy bảo các con: Ngay cả Salomon trong tất cả vinh quang của ông, cũng không phục sức được bằng một trong những đóa hoa đó."`,
  reflection: `Suy niệm:

Chúa Giêsu mời gọi chúng ta hãy tin tưởng vào Thiên Chúa quan phòng. Ngài không cấm chúng ta làm việc, tích lũy, nhưng Ngài muốn chúng ta đừng để của cải trở thành thần tượng, đừng để nỗi lo lắng về vật chất làm mất đi niềm tin vào Thiên Chúa.

Hãy nhìn lên các loài chim trời và hoa đồng nội. Thiên Chúa chăm sóc chúng một cách kỳ diệu. Huống chi là con người, tạo vật được Thiên Chúa yêu thương nhất.

Lạy Chúa, xin ban cho con một niềm tin mạnh mẽ vào sự quan phòng của Chúa, để con biết sống thanh thản giữa những lo toan của cuộc đời. Amen.`,
  liturgicalSeason: 'Mùa Thường Niên',
  createdAt: new Date()
};

// Mock Gospels (array for admin management)
export const mockGospels: (DailyGospel & { title: string; gospelReference: string; firstReadingReference?: string })[] = [
  {
    ...mockDailyGospel,
    title: 'Chúa Nhật III Mùa Thường Niên',
    gospelReference: 'Mt 6, 24-34',
    firstReadingReference: 'Is 49, 14-15'
  },
  {
    id: 2,
    date: new Date(Date.now() - 86400000), // Yesterday
    gospel: `Tin Mừng Chúa Giêsu Kitô theo Thánh Luca (Lc 9, 22-25)

Khi ấy, Chúa Giêsu phán cùng các môn đệ rằng: "Con Người phải chịu đau khổ nhiều, bị các kỳ lão, tư tế trưởng và luật sĩ bỏ rơi, bị giết chết, và ngày thứ ba sống lại."

Rồi Người phán cùng mọi người: "Ai muốn theo Ta, phải từ bỏ chính mình, vác thập giá mình hằng ngày mà theo Ta. Vì ai muốn cứu mạng sống mình, thì sẽ mất; còn ai mất mạng sống mình vì Ta, thì sẽ cứu được nó."`,
    reflection: `Suy niệm: Chúa mời gọi chúng ta vác thập giá theo Ngài.`,
    liturgicalSeason: 'Mùa Chay',
    createdAt: new Date(Date.now() - 86400000),
    title: 'Thứ Hai Tuần I Mùa Chay',
    gospelReference: 'Lc 9, 22-25'
  }
];

// Mock Quiz Categories
export const mockQuizCategories: QuizCategory[] = [
  {
    id: 1,
    name: 'Kinh Thánh Cựu Ước',
    description: 'Các câu hỏi về Kinh Thánh Cựu Ước',
    icon: 'book',
    questionCount: 50,
    createdAt: new Date()
  },
  {
    id: 2,
    name: 'Kinh Thánh Tân Ước',
    description: 'Các câu hỏi về Kinh Thánh Tân Ước và Tin Mừng',
    icon: 'book-open',
    questionCount: 60,
    createdAt: new Date()
  },
  {
    id: 3,
    name: 'Giáo Lý Công Giáo',
    description: 'Giáo lý căn bản và Sách Giáo Lý Hội Thánh Công Giáo',
    icon: 'graduation-cap',
    questionCount: 40,
    createdAt: new Date()
  },
  {
    id: 4,
    name: 'Các Bí Tích',
    description: 'Kiến thức về 7 Bí Tích trong Giáo hội Công giáo',
    icon: 'church',
    questionCount: 30,
    createdAt: new Date()
  },
  {
    id: 5,
    name: 'Lịch Sử Giáo Hội',
    description: 'Lịch sử Giáo hội Công giáo từ thời Chúa Giêsu đến nay',
    icon: 'history',
    questionCount: 35,
    createdAt: new Date()
  },
  {
    id: 6,
    name: 'Các Thánh',
    description: 'Tìm hiểu về các Thánh trong Giáo hội Công giáo',
    icon: 'users',
    questionCount: 45,
    createdAt: new Date()
  }
];

// Mock Questions
export const mockQuestions: Question[] = [
  {
    id: 1,
    categoryId: 1,
    question: 'Sách đầu tiên trong Kinh Thánh là sách gì?',
    optionA: 'Sách Sáng Thế',
    optionB: 'Sách Xuất Hành',
    optionC: 'Sách Lê-vi',
    optionD: 'Sách Dân Số',
    correctAnswer: 'A',
    explanation: 'Sách Sáng Thế (Genesis) là sách đầu tiên trong Kinh Thánh, kể về việc Thiên Chúa tạo dựng trời đất và con người.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: 2,
    categoryId: 1,
    question: 'Ai đã xây dựng con tàu Nô-ê?',
    optionA: 'Áp-ra-ham',
    optionB: 'Nô-ê',
    optionC: 'Mô-sê',
    optionD: 'Đa-vít',
    correctAnswer: 'B',
    explanation: 'Nô-ê được Thiên Chúa chọn để đóng tàu cứu gia đình và các loài động vật khỏi trận Đại Hồng Thủy.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: 3,
    categoryId: 2,
    question: 'Chúa Giêsu sinh ra tại thành nào?',
    optionA: 'Nazareth',
    optionB: 'Jerusalem',
    optionC: 'Bethlehem',
    optionD: 'Capernaum',
    correctAnswer: 'C',
    explanation: 'Chúa Giêsu sinh ra tại Bethlehem (Bê-lem), theo lời tiên tri trong Cựu Ước.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: 4,
    categoryId: 2,
    question: 'Phép lạ đầu tiên Chúa Giêsu làm là gì?',
    optionA: 'Chữa người mù',
    optionB: 'Biến nước thành rượu',
    optionC: 'Đi trên mặt nước',
    optionD: 'Hóa bánh ra nhiều',
    correctAnswer: 'B',
    explanation: 'Phép lạ đầu tiên của Chúa Giêsu là biến nước thành rượu tại tiệc cưới Cana.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: 5,
    categoryId: 3,
    question: 'Giáo hội Công giáo có bao nhiêu Bí Tích?',
    optionA: '5',
    optionB: '6',
    optionC: '7',
    optionD: '8',
    correctAnswer: 'C',
    explanation: '7 Bí Tích: Rửa Tội, Thêm Sức, Thánh Thể, Hòa Giải, Xức Dầu Bệnh Nhân, Truyền Chức Thánh, và Hôn Phối.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: 6,
    categoryId: 3,
    question: 'Đức Giáo Hoàng hiện tại (2024) là ai?',
    optionA: 'Đức Bênêđictô XVI',
    optionB: 'Đức Gioan Phaolô II',
    optionC: 'Đức Phanxicô',
    optionD: 'Đức Piô XII',
    correctAnswer: 'C',
    explanation: 'Đức Giáo Hoàng Phanxicô (Pope Francis) là vị Giáo hoàng thứ 266 của Giáo hội Công giáo, được bầu chọn năm 2013.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: 7,
    categoryId: 4,
    question: 'Bí Tích Rửa Tội dùng chất liệu nào?',
    optionA: 'Dầu Thánh',
    optionB: 'Nước',
    optionC: 'Bánh và Rượu',
    optionD: 'Hương',
    correctAnswer: 'B',
    explanation: 'Nước là chất liệu chính của Bí Tích Rửa Tội, tượng trưng cho sự thanh tẩy và tái sinh.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: 8,
    categoryId: 4,
    question: 'Ai có quyền cử hành Bí Tích Thánh Thể?',
    optionA: 'Giáo dân',
    optionB: 'Tu sĩ',
    optionC: 'Linh mục hoặc Giám mục',
    optionD: 'Phó tế',
    correctAnswer: 'C',
    explanation: 'Chỉ Linh mục và Giám mục mới có quyền cử hành Bí Tích Thánh Thể (Thánh Lễ Misa).',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: 9,
    categoryId: 5,
    question: 'Ai là vị Giáo Hoàng đầu tiên?',
    optionA: 'Thánh Gioan',
    optionB: 'Thánh Phaolô',
    optionC: 'Thánh Phêrô',
    optionD: 'Thánh Anrê',
    correctAnswer: 'C',
    explanation: 'Thánh Phêrô được Chúa Giêsu trao chìa khóa Nước Trời và là vị Giáo Hoàng đầu tiên của Giáo hội.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: 10,
    categoryId: 6,
    question: 'Ngày lễ kính Đức Mẹ Maria Hồn Xác Lên Trời là ngày nào?',
    optionA: '15 tháng 8',
    optionB: '8 tháng 12',
    optionC: '25 tháng 3',
    optionD: '1 tháng 1',
    correctAnswer: 'A',
    explanation: 'Lễ Đức Mẹ Hồn Xác Lên Trời được mừng vào ngày 15 tháng 8 hàng năm.',
    difficulty: 'medium',
    createdAt: new Date()
  }
];

// Helper functions
export function getQuestionsByCategory(categoryId: number): Question[] {
  return mockQuestions.filter(q => q.categoryId === categoryId);
}

export function getMassesByDate(date: Date): Mass[] {
  return mockMasses.filter(m => 
    m.massDate.toDateString() === date.toDateString()
  );
}

export function getMassesByChurch(churchId: number): Mass[] {
  return mockMasses.filter(m => m.churchId === churchId);
}
