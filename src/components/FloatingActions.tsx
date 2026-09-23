import React, { useState, useEffect } from 'react';
import { Phone, Share2, ArrowUp, MessageCircle, Gift } from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE, HOTLINE_DISPLAY } from '../data/storyData';

interface FloatingActionsProps {
  onOpenShare: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenShare }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-white text-slate-700 hover:text-blue-700 shadow-lg border border-slate-200 transition-all hover:scale-110 active:scale-95"
          title="Lên đầu trang"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Share Button */}
      <button
        onClick={onOpenShare}
        className="pointer-events-auto flex items-center gap-2 py-2 px-3 rounded-full bg-white text-slate-800 hover:text-blue-700 shadow-lg border border-blue-200 transition-all hover:scale-105 active:scale-95 text-xs font-semibold"
        title="Chia sẻ câu chuyện"
      >
        <Share2 className="w-4 h-4 text-blue-600" />
        <span className="hidden sm:inline">Chia sẻ</span>
      </button>

      {/* Hotline Call Button */}
      <a
        href={`tel:${HOTLINE}`}
        className="pointer-events-auto flex items-center gap-2 py-2 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all hover:scale-105 active:scale-95 text-xs font-bold"
        title={`Gọi Hotline ${HOTLINE_DISPLAY}`}
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">{HOTLINE_DISPLAY}</span>
      </a>

      {/* Floating Main Zalo CTA with pulsing badge */}
      <a
        href={ZALO_GROUP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-extrabold text-xs sm:text-sm py-3 px-4 sm:px-5 rounded-full shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all transform hover:scale-105 active:scale-95 border-2 border-white"
      >
        {/* Pulsing beacon effect */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white"></span>
        </span>

        <div className="w-6 h-6 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
          Z
        </div>
        <span>Vào Nhóm Zalo Nhận Quà</span>
      </a>

    </div>
  );
};
