import React, { useState, useEffect } from 'react';
import { Eye, Clock, Gift, ArrowRight, ShieldCheck } from 'lucide-react';
import { ZALO_GROUP_LINK } from '../data/storyData';

interface TopBarUrgencyProps {
  onOpenShare?: () => void;
}

export const TopBarUrgency: React.FC<TopBarUrgencyProps> = () => {
  // Countdown initialized to 3 hours 36 minutes (3 * 3600 + 36 * 60 = 12960 seconds)
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('phucan_countdown_seconds');
    if (saved) {
      const parsed = parseInt(saved, 10);
      return !isNaN(parsed) && parsed > 0 ? parsed : 3 * 3600 + 36 * 60;
    }
    return 3 * 3600 + 36 * 60;
  });

  // Simulated live viewers counter (fluctuating realistically between 135 and 168)
  const [viewers, setViewers] = useState(148);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev > 1 ? prev - 1 : 3 * 3600 + 36 * 60;
        localStorage.setItem('phucan_countdown_seconds', next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.floor(Math.random() * 7) - 3;
        const newCount = prev + delta;
        return newCount < 125 ? 135 : newCount > 175 ? 158 : newCount;
      });
    }, 5000);

    return () => clearInterval(viewerInterval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-900 text-white text-xs border-b border-blue-700/60 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Live view counter */}
        <div className="flex items-center gap-2 font-medium">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="flex items-center gap-1.5 bg-blue-950/60 border border-blue-600/40 px-2.5 py-1 rounded-full">
            <Eye className="w-3.5 h-3.5 text-cyan-300" />
            <span>
              Đang có <strong className="text-cyan-300 font-bold tracking-tight">{viewers}</strong> người đang xem
            </span>
          </div>
        </div>

        {/* Countdown & Urgent slot counter */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 text-amber-200">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">Ưu đãi miễn phí chỉ còn:</span>
            <span className="sm:hidden font-medium">Còn:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-white bg-black/40 px-2 py-0.5 rounded border border-amber-400/30">
              <span className="text-amber-300">{formatNum(hours)}</span>
              <span className="text-amber-400/80">:</span>
              <span className="text-amber-300">{formatNum(minutes)}</span>
              <span className="text-amber-400/80">:</span>
              <span className="text-amber-300">{formatNum(seconds)}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-slate-200 text-[11px]">
            <span>(Chỉ 50 suất miễn phí · Sau đó tăng 500k từ suất 51)</span>
          </div>

          {/* Direct CTA button to Zalo */}
          <a
            href={ZALO_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-3 py-1 rounded-full shadow transition-all transform active:scale-95 text-xs ml-auto"
          >
            <Gift className="w-3.5 h-3.5" />
            <span>Vào Zalo Nhận Quà Ngay</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
