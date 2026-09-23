import React, { useState, useEffect } from 'react';
import { REGISTERED_NOTIFICATIONS, ZALO_GROUP_LINK } from '../data/storyData';
import { UserCheck, X, ExternalLink, Sparkles } from 'lucide-react';

export const TopNotificationToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before first toast
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 2500);

    // Loop through notifications
    const interval = setInterval(() => {
      if (!isDismissed) {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % REGISTERED_NOTIFICATIONS.length);
          setIsVisible(true);
        }, 600);
      }
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const current = REGISTERED_NOTIFICATIONS[currentIndex];

  return (
    <aside
      aria-label="Thông báo tham gia mới"
      className="fixed top-4 left-4 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-96 transition-all duration-500 ease-out transform translate-y-0 opacity-100"
    >
      <div className="bg-white/95 backdrop-blur-md border border-blue-200/80 rounded-2xl shadow-xl shadow-blue-900/10 p-3.5 relative overflow-hidden group hover:border-blue-400 transition-all">
        {/* Subtle accent bar */}
        <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-sky-600" />

        <div className="flex items-start gap-3 pl-2">
          {/* Avatar / Icon badge */}
          <div className="relative shrink-0 mt-0.5">
            <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-semibold text-sm overflow-hidden shadow-inner">
              <span className="text-blue-700 font-bold">{current.name.charAt(4) || "D"}</span>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-1.5 text-xs text-blue-600 font-medium">
              <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
              <span>Dược sĩ đăng ký tham gia</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-400 text-[11px]">{current.timeAgo}</span>
            </div>

            <p className="text-sm font-semibold text-slate-900 truncate mt-0.5">
              {current.name} <span className="font-normal text-xs text-slate-500">({current.location})</span>
            </p>

            <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
              {current.action}
            </p>

            <div className="mt-2 flex items-center gap-3">
              <a
                href={ZALO_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100/80 px-2.5 py-1 rounded-md"
              >
                <span>Vào Zalo cùng Ds. Thủy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Đang trực tuyến
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors"
            title="Đóng thông báo"
            aria-label="Đóng thông báo"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
