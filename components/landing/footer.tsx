import Link from 'next/link';
import { CrossIcon } from '@/components/icons';

const footerLinks = {
  product: [
    { label: 'Tính năng', href: '#features' },
    { label: 'Giá', href: '#pricing' },
    { label: 'Câu hỏi thường gặp', href: '#faq' },
  ],
  company: [
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Liên hệ', href: '#contact' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Điều khoản sử dụng', href: '/terms' },
    { label: 'Chính sách bảo mật', href: '/privacy' },
  ],
};

export function LandingFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-primary/90 text-background py-20"
    >
      {/* Background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <CrossIcon className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-semibold text-white">
                Giáo Xứ Yên Lộ Online
              </span>
            </Link>

            <p className="text-background/75 text-sm leading-relaxed max-w-xs">
              Ứng dụng dành cho giáo dân Công giáo Việt Nam,
              đồng hành cùng đời sống đức tin mỗi ngày một cách gần gũi và hiện đại.
            </p>

            {/* Mini info */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              <span>✝</span>
              Sống đức tin mỗi ngày
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Sản phẩm</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Cộng đoàn</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Thông tin</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Card */}
            <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md p-4">
              <p className="text-sm font-medium text-white mb-1">Liên hệ</p>
              <p className="text-sm text-background/70">support@giaoxuyenlo.vn</p>
              <p className="text-sm text-background/70 mt-1">Cộng đồng • Đức tin • Kết nối</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Giáo Xứ Yên Lộ Online. Toàn bộ quyền được bảo lưu.
          </p>

          <p className="text-background/50 text-sm text-center sm:text-right">
            Được xây dựng với tâm niệm phục vụ cộng đồng Công giáo
          </p>
        </div>
      </div>
    </footer>
  );
}