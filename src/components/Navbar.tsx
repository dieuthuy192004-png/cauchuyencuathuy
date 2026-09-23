import React, { useState } from 'react';
import { Phone, Share2, Menu, X, ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE, HOTLINE_DISPLAY } from '../data/storyData';

interface NavbarProps {
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShare }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Câu Chuyện Cuộc Đời", href: "#cau-chuyen" },
    { name: "Vì Sao Chọn Phúc An 5?", href: "#vi-sao-chon" },
    { name: "Hành Trình Lên Online", href: "#hanh-trinh-online" },
    { name: "Thành Tựu & Đội Nhóm", href: "#thanh-tuu-doi-nhom" },
    { name: "Sứ Mệnh 1.000 Chị Em", href: "#su-menh" },
  ];

  return (
    <header className="sticky top-[41px] z-30 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="text-blue-700 font-extrabold text-base tracking-tight">PA5</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-blue-700 transition-colors">
                  Dược Sĩ Trịnh Thủy
                </span>
                <span className="inline-flex items-center text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  Phúc An 5
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal hidden sm:block">
                Trao sức khỏe – Nhận niềm tin · Hỗ trợ Dược sĩ lên Online
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Hotline, Share & Join Zalo */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Share button */}
            <button
              onClick={onOpenShare}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-3 py-2 rounded-xl transition-all"
              title="Chia sẻ câu chuyện truyền cảm hứng này"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Chia sẻ</span>
            </button>

            {/* Hotline call */}
            <a
              href={`tel:${HOTLINE}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-2 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{HOTLINE_DISPLAY}</span>
            </a>

            {/* Main Primary Action to Zalo */}
            <a
              href={ZALO_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 px-4 py-2 rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Vào Nhóm Zalo Nhận Quà</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenShare}
              className="p-2 rounded-lg bg-slate-100 text-slate-700"
              aria-label="Chia sẻ"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-blue-50 text-blue-700"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-100 py-4 px-2 space-y-3 bg-white/98">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${HOTLINE}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl"
              >
                <Phone className="w-4 h-4" />
                <span>Hotline: {HOTLINE_DISPLAY}</span>
              </a>

              <a
                href={ZALO_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md"
              >
                <span>Tham Gia Nhóm Zalo Nhận Quà (Miễn Phí)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
