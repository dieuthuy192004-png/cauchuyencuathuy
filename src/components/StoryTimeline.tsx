import React, { useState } from 'react';
import { 
  Heart, 
  Baby, 
  GraduationCap, 
  Building2, 
  Laptop, 
  Globe, 
  Users2, 
  Award, 
  Compass, 
  ChevronRight, 
  Quote, 
  Check, 
  ZoomIn,
  Sparkles,
  ArrowRight,
  Gift
} from 'lucide-react';
import { STORY_CHAPTERS, StoryChapter, ZALO_GROUP_LINK } from '../data/storyData';

interface StoryTimelineProps {
  onOpenImageModal: (url: string, title: string) => void;
}

export const StoryTimeline: React.FC<StoryTimelineProps> = ({ onOpenImageModal }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(STORY_CHAPTERS[0].id);

  const activeChapter = STORY_CHAPTERS.find(c => c.id === activeChapterId) || STORY_CHAPTERS[0];

  const chapterIcons: Record<string, React.ReactNode> = {
    "nu-ho-sinh": <Baby className="w-4 h-4" />,
    "me-4-con-7-nam-hoc-duoc": <GraduationCap className="w-4 h-4" />,
    "nha-thuoc-phuc-an-5": <Building2 className="w-4 h-4" />,
    "vuot-qua-noi-so-cong-nghe": <Laptop className="w-4 h-4" />,
    "bon-buc-tuong-rong-ra": <Globe className="w-4 h-4" />,
    "dong-hanh-cung-chi-em": <Users2 className="w-4 h-4" />,
    "giam-doc-toan-quoc-sa-pa": <Award className="w-4 h-4" />,
    "su-menh-1000-duoc-si": <Compass className="w-4 h-4" />,
  };

  return (
    <section id="cau-chuyen" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Tự truyện chân thực & truyền cảm hứng</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            8 Chặng Đường Đầy Nghị Lực Của{' '}
            <span className="text-blue-700">Dược Sĩ Trịnh Thủy</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mỗi giai đoạn là một ngã rẽ thử thách, nhưng sâu thẳm trong tim, sợi chỉ đỏ xuyên suốt 
            chưa bao giờ thay đổi: <strong>Chăm sóc con người bằng tất cả sự tử tế.</strong>
          </p>
        </div>

        {/* Timeline Navigation Selector (Horizontal scrollable on mobile, structured grid on desktop) */}
        <div className="mb-10 sm:mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex lg:grid lg:grid-cols-4 gap-2.5 min-w-[760px] lg:min-w-0 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200">
            {STORY_CHAPTERS.map((chapter, index) => {
              const isActive = chapter.id === activeChapterId;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterId(chapter.id)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left transition-all relative ${
                    isActive
                      ? "bg-white text-blue-900 font-bold shadow-md shadow-slate-300/40 border border-blue-200/80 scale-[1.01]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {chapterIcons[chapter.id] || <span className="text-xs">{index + 1}</span>}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] uppercase tracking-wider block text-blue-600/80 font-semibold truncate">
                      Chặng {index + 1}
                    </span>
                    <span className="text-xs sm:text-sm block truncate leading-tight">
                      {chapter.title.split(" - ")[0].split(":")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chapter Presentation Card */}
        <div className="bg-gradient-to-br from-blue-50/50 via-white to-sky-50/30 rounded-3xl border border-blue-200/70 p-6 sm:p-10 shadow-xl shadow-blue-950/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Story Text Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header tags */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-700">
                <span className="bg-blue-100/90 text-blue-800 px-3 py-1 rounded-full">
                  {activeChapter.tag}
                </span>
                {activeChapter.stat && (
                  <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <strong>{activeChapter.stat.value}</strong>: {activeChapter.stat.label}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {activeChapter.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-blue-800/90 italic">
                  {activeChapter.subtitle}
                </p>
              </div>

              {/* Philosophical Quote Card */}
              {activeChapter.quote && (
                <div className="relative bg-white rounded-2xl p-4 sm:p-5 border-l-4 border-blue-600 shadow-sm border-slate-100">
                  <Quote className="w-8 h-8 text-blue-200 absolute -top-3 -left-2 -rotate-12 pointer-events-none" />
                  <p className="text-sm sm:text-base text-slate-700 italic relative z-10 leading-relaxed">
                    &ldquo;{activeChapter.quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Main Content Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {activeChapter.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-justify sm:text-left">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlights checklist */}
              <div className="pt-2">
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2.5">
                  Điểm mốc quan trọng
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeChapter.keyHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-blue-100 text-xs sm:text-sm text-slate-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapter Navigation & Zalo CTA */}
              <div className="pt-4 border-t border-blue-100/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {/* Previous button */}
                  {(() => {
                    const currIdx = STORY_CHAPTERS.findIndex(c => c.id === activeChapterId);
                    const prevChapter = currIdx > 0 ? STORY_CHAPTERS[currIdx - 1] : null;
                    const nextChapter = currIdx < STORY_CHAPTERS.length - 1 ? STORY_CHAPTERS[currIdx + 1] : null;
                    return (
                      <>
                        {prevChapter && (
                          <button
                            onClick={() => setActiveChapterId(prevChapter.id)}
                            className="px-3.5 py-2 text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
                          >
                            ← Chặng trước
                          </button>
                        )}
                        {nextChapter && (
                          <button
                            onClick={() => setActiveChapterId(nextChapter.id)}
                            className="px-3.5 py-2 text-xs font-semibold text-blue-700 bg-white hover:bg-blue-50 rounded-xl border border-blue-200 transition-colors flex items-center gap-1"
                          >
                            <span>Chặng kế tiếp</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>

                <a
                  href={ZALO_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 px-4 py-2.5 rounded-xl shadow-md transition-all ml-auto"
                >
                  <Gift className="w-4 h-4 text-amber-300" />
                  <span>Vào Nhóm Zalo Nhận Quà</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Authentic Photos Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                <span>Hình ảnh thực tế</span>
                <span className="text-[11px] text-blue-600 font-medium cursor-default">
                  Ảnh gốc 100%
                </span>
              </div>

              {activeChapter.images.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  onClick={() => onOpenImageModal(img.url, img.caption)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-md hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Zoom indicator overlay */}
                  <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 text-blue-900 rounded-full p-2.5 shadow-lg flex items-center gap-1 text-xs font-semibold">
                      <ZoomIn className="w-4 h-4" />
                      <span>Xem ảnh lớn</span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-3 bg-white border-t border-slate-100">
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
