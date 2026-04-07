import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Giáo Xứ Yên Lộ Online - Ứng Dụng Cho Giáo Dân Công Giáo',
  description: 'Ứng dụng dành cho giáo dân Công giáo Việt Nam - Lịch lễ, Lời Chúa hàng ngày, Trắc nghiệm giáo lý, và nhiều tính năng hữu ích khác.',
  keywords: ['công giáo', 'giáo xứ', 'lịch lễ', 'lời chúa', 'trắc nghiệm giáo lý', 'thánh ca'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6B21A8' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
