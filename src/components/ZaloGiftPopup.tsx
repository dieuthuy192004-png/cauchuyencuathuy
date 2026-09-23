import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Sparkles, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ZALO_GROUP_LINK, IMAGES } from '../data/storyData';

export const ZaloGiftPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Show popup after exactly 10 seconds (10000ms) as required by prompt
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('phucan_zalo_popup_dismissed');
      if (!dismissed) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('phucan_zalo_popup_dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="zalo-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-300"
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-blue-200 relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top visual banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-700 text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            title="Đóng cửa sổ"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Món Quà Dành Tặng Dược Sĩ & Bạn Đọc</span>
          </div>

          <h3 id="zalo-popup-title" className="text-xl sm:text-2xl font-black text-white leading-tight">
            Nhận Miễn Phí Bộ Quy Trình Đưa Nhà Thuốc Lên Online & Ứng Dụng AI
          </h3>

          <p className="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed">
            Dược sĩ Trịnh Thủy thân mời bạn vào nhóm Zalo để nhận trọn bộ tài liệu thực chiến 
            và giao lưu trực tiếp.
          </p>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50/80 rounded-2xl border border-blue-100">
            <img
              src={IMAGES.profilePortrait}
              alt="Dược sĩ Trịnh Thủy"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-600 shrink-0"
            />
            <div className="text-xs">
              <span className="font-bold text-slate-900 block text-sm">Dược Sĩ Trịnh Thủy</span>
              <span className="text-blue-700 font-medium">Nhà thuốc Phúc An 5 · 18+ năm kinh nghiệm</span>
            </div>
          </div>

          {/* What's included */}
          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Lộ trình 5 bước:</strong> Đưa nhà thuốc truyền thống lên Online đơn giản.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Ứng dụng AI:</strong> Tự động viết kịch bản, làm video chuẩn y khoa.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Tư vấn 1:1:</strong> Giải pháp chăm sóc Ruột - Gan - Máu kết hợp YHCT.</span>
            </div>
          </div>

          {/* Slot urgency notice */}
          <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl flex items-center justify-between text-xs text-amber-900 font-semibold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Ưu đãi miễn phí 50 suất</span>
            </div>
            <span className="text-rose-600 font-bold">Chỉ còn 8 suất cuối!</span>
          </div>

          {/* Action buttons (No form!) */}
          <div className="space-y-2 pt-2">
            <a
              href={ZALO_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-center"
            >
              <Gift className="w-5 h-5" />
              <span>Tham Gia Nhóm Zalo Nhận Quà Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleClose}
              className="w-full py-2 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors text-center"
            >
              Để sau, tôi muốn đọc tiếp câu chuyện
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
