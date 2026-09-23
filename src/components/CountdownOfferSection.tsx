import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Gift, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ShieldAlert, 
  Users, 
  ExternalLink,
  Flame
} from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE_DISPLAY } from '../data/storyData';

export const CountdownOfferSection: React.FC = () => {
  // Synchronized countdown timer initialized to 3 hours 36 minutes
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('phucan_countdown_seconds');
    if (saved) {
      const parsed = parseInt(saved, 10);
      return !isNaN(parsed) && parsed > 0 ? parsed : 3 * 3600 + 36 * 60;
    }
    return 3 * 3600 + 36 * 60;
  });

  const [claimedSlots, setClaimedSlots] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev > 1 ? prev - 1 : 3 * 3600 + 36 * 60;
        localStorage.setItem('phucan_countdown_seconds', next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatNum = (n: number) => n.toString().padStart(2, '0');
  const remainingSlots = Math.max(1, 50 - claimedSlots);

  return (
    <section id="su-menh" className="py-16 sm:py-24 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Visual lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner header */}
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold animate-pulse">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Ưu Đãi Miễn Phí Có Giới Hạn Thời Gian & Số Lượng</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight">
            ĐỒNG HÀNH & NHẬN TOÀN BỘ BỘ QUY TRÌNH{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
              HOÀN TOÀN MIỄN PHÍ
            </span>
          </h2>

          <p className="text-sm sm:text-base text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Dược sĩ Trịnh Thủy cam kết dành tặng 50 suất chuyển giao hoàn toàn miễn phí cho chị em dược sĩ 
            thực sự mong muốn chuyển mình đưa nhà thuốc lên Online.
          </p>
        </div>

        {/* The Urgency Countdown Card */}
        <div className="bg-white/10 backdrop-blur-xl border-2 border-amber-400/60 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-blue-950/80 space-y-8 relative">
          
          {/* Big countdown timer display */}
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-extrabold text-amber-300 tracking-widest block">
              Thời gian ưu đãi miễn phí còn lại
            </span>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="bg-slate-900/90 border border-white/20 rounded-2xl p-3 sm:p-5 w-20 sm:w-28 text-center shadow-lg">
                <span className="font-mono text-3xl sm:text-5xl font-black text-amber-300 block">
                  {formatNum(hours)}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider mt-1 block">
                  Giờ
                </span>
              </div>
              <span className="text-2xl sm:text-4xl font-mono font-bold text-amber-400">:</span>
              
              <div className="bg-slate-900/90 border border-white/20 rounded-2xl p-3 sm:p-5 w-20 sm:w-28 text-center shadow-lg">
                <span className="font-mono text-3xl sm:text-5xl font-black text-amber-300 block">
                  {formatNum(minutes)}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider mt-1 block">
                  Phút
                </span>
              </div>
              <span className="text-2xl sm:text-4xl font-mono font-bold text-amber-400">:</span>

              <div className="bg-slate-900/90 border border-white/20 rounded-2xl p-3 sm:p-5 w-20 sm:w-28 text-center shadow-lg">
                <span className="font-mono text-3xl sm:text-5xl font-black text-amber-300 block">
                  {formatNum(seconds)}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider mt-1 block">
                  Giây
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar of slots */}
          <div className="bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold gap-1">
              <span className="text-amber-300 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-400" />
                Đã có {claimedSlots}/50 dược sĩ đăng ký thành công
              </span>
              <span className="text-rose-400 font-extrabold">
                Chỉ còn đúng {remainingSlots} suất miễn phí cuối cùng!
              </span>
            </div>

            {/* Visual Bar */}
            <div className="w-full bg-slate-800 rounded-full h-3.5 p-0.5 overflow-hidden border border-white/10">
              <div 
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-rose-500 h-full rounded-full transition-all duration-700 shadow-sm"
                style={{ width: `${(claimedSlots / 50) * 100}%` }}
              />
            </div>

            {/* Price policy ladder notice */}
            <div className="text-[11px] text-slate-300 flex items-start gap-1.5 pt-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Quy định nâng giá:</strong> Sau khi đủ 50 suất miễn phí, học phí sẽ được điều chỉnh 
                tăng lên <strong>500.000đ từ suất 51</strong> và <strong>1.000.000đ từ suất 101</strong>.
              </span>
            </div>
          </div>

          {/* Value comparison table */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-gradient-to-b from-emerald-500/20 to-emerald-900/30 border-2 border-emerald-400/80 rounded-2xl p-4 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-black text-[10px] uppercase px-3 py-0.5 rounded-full tracking-wider">
                Đang Mở (Còn {remainingSlots} suất)
              </div>
              <span className="text-xs text-emerald-300 font-semibold block mt-1">Suất 01 - 50</span>
              <div className="text-2xl sm:text-3xl font-black text-white my-1">0 ĐỒNG</div>
              <span className="text-[11px] text-emerald-200">MIỄN PHÍ 100%</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 opacity-75">
              <span className="text-xs text-slate-300 font-medium block">Suất 51 - 100</span>
              <div className="text-2xl font-bold text-slate-300 my-1">500.000đ</div>
              <span className="text-[11px] text-slate-400">Tăng ngay khi hết 50 suất</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 opacity-75">
              <span className="text-xs text-slate-300 font-medium block">Suất 101 trở đi</span>
              <div className="text-2xl font-bold text-slate-300 my-1">1.000.000đ</div>
              <span className="text-[11px] text-slate-400">Mức học phí chính thức</span>
            </div>
          </div>

          {/* What you will receive inside Zalo group */}
          <div className="space-y-3 pt-2">
            <h4 className="font-extrabold text-sm sm:text-base text-amber-200 flex items-center gap-2">
              <Gift className="w-5 h-5 text-amber-400" />
              <span>Quà tặng & Giá trị bạn sẽ nhận được khi vào nhóm Zalo:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Trọn bộ lộ trình 5 bước đưa nhà thuốc truyền thống lên Online.</span>
              </div>
              <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tài liệu hướng dẫn thực chiến AI & ChatGPT tạo nội dung y khoa.</span>
              </div>
              <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Quy trình thanh lọc Ruột - Gan - Máu kết hợp Y học cổ truyền.</span>
              </div>
              <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Buổi Zoom kết nối và hỏi đáp trực tiếp 1:1 cùng Ds. Trịnh Thủy.</span>
              </div>
            </div>
          </div>

          {/* Sole Call to Action (NO FORM AS REQUESTED!) */}
          <div className="pt-2 text-center space-y-3">
            <a
              href={ZALO_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-base sm:text-xl py-4 sm:py-5 px-6 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <Gift className="w-6 h-6 text-slate-950" />
              <span>VÀO NHÓM ZALO ĐỂ NHẬN QUÀ MIỄN PHÍ NGAY</span>
              <ArrowRight className="w-6 h-6 text-slate-950" />
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-blue-200">
              <span>🔒 Bấm nút mở Zalo hoặc truy cập link:</span>
              <a
                href={ZALO_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-bold text-amber-300 hover:text-white underline"
              >
                https://zalo.me/g/lwlrya789
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
