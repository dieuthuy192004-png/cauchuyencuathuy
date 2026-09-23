import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Users, 
  Award, 
  CheckCircle2, 
  Gift, 
  GraduationCap, 
  Building2,
  Clock
} from 'lucide-react';
import { IMAGES, ZALO_GROUP_LINK, HOTLINE_DISPLAY } from '../data/storyData';

interface HeroSectionProps {
  onOpenShare: () => void;
  onOpenImageModal: (url: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenShare, onOpenImageModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-sky-50/40 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-blue-100/60">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story Headline, Subtitle, Highlights & Call-To-Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Hành trình truyền cảm hứng từ Dược sĩ Trịnh Thủy</span>
            </div>

            {/* Main Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              TÔI ĐÃ ĐI MỘT VÒNG THẬT DÀI ĐỂ TÌM THẤY{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent">
                CON ĐƯỜNG CỦA CHÍNH MÌNH
              </span>
            </h1>

            {/* Narrative Summary */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Từ một <strong>nữ hộ sinh</strong> tại Bệnh viện quận Thủ Đức, một <strong>người mẹ của 4 đứa con</strong>, 
              đến <strong>Dược sĩ – chủ Nhà thuốc Phúc An 5</strong>. Và rồi, từ một người từng rất sợ công nghệ, 
              tôi bước lên Online, gặp những người đồng hành ở khắp mọi miền đất nước.
            </p>

            {/* Philosophy quote */}
            <div className="p-4 rounded-2xl bg-blue-50/90 border-l-4 border-blue-600 border-y border-r border-blue-100 text-slate-800 text-sm sm:text-base italic shadow-xs">
              &ldquo;Đôi khi một cánh cửa đóng lại chỉ để mình đủ can đảm bước sang một hành trình khác.&rdquo;
              <span className="block not-italic font-semibold text-blue-800 text-xs mt-1">— Dược sĩ Trịnh Thủy</span>
            </div>

            {/* Credibility highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs text-center">
                <span className="text-xl sm:text-2xl font-bold text-blue-700 block">18+ Năm</span>
                <span className="text-[11px] text-slate-600 font-medium">Kinh nghiệm y dược</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs text-center">
                <span className="text-xl sm:text-2xl font-bold text-blue-700 block">Mẹ 4 Con</span>
                <span className="text-[11px] text-slate-600 font-medium">7 năm đèn sách</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs text-center">
                <span className="text-xl sm:text-2xl font-bold text-blue-700 block">Top 1</span>
                <span className="text-[11px] text-slate-600 font-medium">Giám Đốc Toàn Quốc</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs text-center">
                <span className="text-xl sm:text-2xl font-bold text-blue-700 block">1.000+</span>
                <span className="text-[11px] text-slate-600 font-medium">Dược sĩ cùng tiến</span>
              </div>
            </div>

            {/* Urgency Box with direct Zalo Call to Action (NO FORM!) */}
            <div className="bg-white p-5 rounded-2xl border-2 border-amber-300 shadow-lg shadow-amber-500/5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-100 pb-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Gift className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Món Quà Đặc Biệt: Lộ Trình Ứng Dụng AI Cho Dược Sĩ</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 font-medium w-fit">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Chỉ còn 8 suất miễn phí cuối cùng</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary CTA */}
                <a
                  href={ZALO_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <Gift className="w-5 h-5" />
                  <span>Tham Gia Nhóm Zalo Nhận Quà Ngay</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                {/* Secondary CTA */}
                <a
                  href="#cau-chuyen"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-slate-300 hover:border-blue-400 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-semibold text-sm transition-all"
                >
                  <span>Đọc Câu Chuyện</span>
                </a>
              </div>

              {/* 5 Commitments summary */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-slate-600 pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Không LiveStream
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Không Cày View
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Không Ôm Hàng
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Không Ship Hàng
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Không Đa Cấp
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Portrait & Trust Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background framing */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/20 via-sky-400/20 to-indigo-600/20 rounded-3xl blur-lg transform -rotate-1" />

              {/* Main portrait container */}
              <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-white shadow-2xl shadow-blue-900/15 group">
                <img
                  src={IMAGES.profilePortrait}
                  alt="Dược sĩ Trịnh Thủy - Chủ Nhà Thuốc Phúc An 5"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-102 cursor-pointer"
                  onClick={() => onOpenImageModal(IMAGES.profilePortrait, "Dược sĩ Trịnh Thủy - Chủ Nhà Thuốc Phúc An 5")}
                />
                
                {/* Floating caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-5 text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300">
                      Dược Sĩ Chính Quy
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mt-0.5">Dược Sĩ Trịnh Thủy</h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                    Chủ Nhà thuốc Phúc An 5 · Cố vấn chuyển đổi số Dược sĩ
                  </p>
                </div>
              </div>

              {/* Floating Sub-Photo 1: Tốt nghiệp / Bằng khen */}
              <div 
                onClick={() => onOpenImageModal(IMAGES.studyGraduation, "Lễ tốt nghiệp Đại học Dược Lạc Hồng")}
                className="absolute -bottom-6 -left-6 bg-white p-2 rounded-2xl shadow-xl border border-blue-100 max-w-[170px] sm:max-w-[200px] cursor-pointer hover:scale-105 transition-transform hidden sm:block"
              >
                <img
                  src={IMAGES.studyGraduation}
                  alt="Lễ tốt nghiệp Đại học Dược"
                  className="w-full h-24 sm:h-28 object-cover rounded-xl"
                />
                <div className="pt-1.5 px-1 text-[11px] font-semibold text-slate-800 truncate">
                  Đại học Dược Lạc Hồng
                </div>
                <div className="px-1 text-[10px] text-blue-600 font-medium">
                  2 lần nhận học bổng
                </div>
              </div>

              {/* Floating Sub-Badge 2: Giám Đốc Toàn Quốc */}
              <div 
                onClick={() => onOpenImageModal(IMAGES.awardCeremony, "Vinh danh Giám Đốc Toàn Quốc")}
                className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-amber-200 max-w-[190px] cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wide block">
                      Vinh Danh Cấp Bậc
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 block leading-tight">
                      Giám Đốc Toàn Quốc
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
