import React, { useState } from 'react';
import { 
  Pill, 
  UserCheck, 
  HeartPulse, 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  Activity,
  Sparkles
} from 'lucide-react';
import { PHUC_AN_PILLARS, ZALO_GROUP_LINK, IMAGES } from '../data/storyData';

interface WhyChoosePhucAnProps {
  onOpenImageModal: (url: string, title: string) => void;
}

export const WhyChoosePhucAn: React.FC<WhyChoosePhucAnProps> = ({ onOpenImageModal }) => {
  const [selectedConcern, setSelectedConcern] = useState<string>("ruot-gan-mau");

  const healthConcerns = [
    {
      id: "ruot-gan-mau",
      title: "Thanh Lọc Ruột - Gan - Máu",
      desc: "Giải độc đường ruột, hỗ trợ chức năng gan, làm sạch dòng máu và phục hồi vi tuần hoàn tự nhiên.",
      badge: "Chuyên sâu số 1"
    },
    {
      id: "duong-huyet-mo-mau",
      title: "Mỡ Máu & Đường Huyết",
      desc: "Kiểm soát triglycerid, cholesterol xấu, ổn định chỉ số HbA1c qua chế độ dinh dưỡng và thảo dược chuẩn hóa.",
      badge: "Hỗ trợ mãn tính"
    },
    {
      id: "huyet-ap-tim-mach",
      title: "Huyết Áp & Tim Mạch",
      desc: "Điều hòa áp lực mạch máu, giảm gánh nặng tim, bảo vệ thành mạch bằng phác đồ kết hợp Đông - Tây Y.",
      badge: "Theo dõi 1:1"
    },
    {
      id: "gout-can-nang",
      title: "Gout & Quản Lý Cân Nặng",
      desc: "Hạ acid uric máu an toàn, đào thải tinh thể urat ở ổ khớp và giảm mỡ nội tạng khoa học không kiệt sức.",
      badge: "Bền vững"
    }
  ];

  return (
    <section id="vi-sao-chon" className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Niềm tin được xây dựng từ thực tiễn và tâm huyết</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            VÌ SAO KHÁCH HÀNG LỰA CHỌN{' '}
            <span className="text-blue-700">NHÀ THUỐC PHÚC AN 5?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Chúng tôi không chỉ trao một liều thuốc, chúng tôi mang đến một giải pháp chăm sóc sức khỏe 
            tận tâm, đồng hành lâu dài cùng từng gia đình.
          </p>
        </div>

        {/* The 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Pillar 1: Dược sĩ hơn 18 năm kinh nghiệm */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-md hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                <Pill className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                💊 Dược Sĩ Hơn 18 Năm Kinh Nghiệm
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Có nền tảng chuyên môn Dược cùng kinh nghiệm tư vấn và chăm sóc khách hàng thực tế 
                qua hàng nghìn trường hợp lâm sàng.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>8 năm tại Khoa Sản BV quận Thủ Đức</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tốt nghiệp ĐH Dược chính quy</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Thấu cảm sâu sắc nỗi lo người bệnh</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 2: Tư vấn 1:1 – cá nhân hóa */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-md hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-inner">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                👩‍⚕️ Tư Vấn 1:1 – Cá Nhân Hóa
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lắng nghe tình trạng, thói quen và mục tiêu của từng khách hàng trước khi đưa ra phác đồ hướng dẫn phù hợp nhất.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Phác đồ riêng cho từng thể trạng</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Theo sát định kỳ hàng tuần</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tư vấn qua Zalo tiện lợi, chu đáo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 3: Hỗ trợ thanh lọc ruột - gan - máu */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-md hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-inner">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                ❤️ Hỗ Trợ Thanh Lọc Ruột – Gan – Máu
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hỗ trợ khách hàng quan tâm đến cân nặng, đường huyết, mỡ máu, huyết áp và gout tận gốc rễ chuyển hóa.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ruột sạch giúp hấp thu dinh dưỡng</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gan khỏe giải trừ độc tố tồn đọng</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Máu lưu thông tốt nuôi dưỡng tế bào</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 4: Kết hợp nhiều nền tảng kiến thức */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-md hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                🌿 Kết Hợp Đa Nền Tảng Kiến Thức
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ứng dụng hài hòa kiến thức Dược hiện đại, Dinh dưỡng học và Y học cổ truyền, thảo dược lành tính.
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dược chuẩn liều, giảm phụ thuộc thuốc</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Điều chỉnh thực đơn bữa ăn hàng ngày</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Thảo dược thiên nhiên an lành</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Interactive Consultation Finder card */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Bạn đang quan tâm đến vấn đề sức khỏe nào?
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Nhận Lời Khuyên 1:1 Trực Tiếp Từ Dược Sĩ Trịnh Thủy
              </h3>

              <p className="text-sm text-blue-100 leading-relaxed">
                Chọn vấn đề sức khỏe của bạn bên dưới và bấm nút tham gia Zalo. Dược sĩ Trịnh Thủy sẽ trực tiếp 
                lắng nghe, phân tích chỉ số và đồng hành giải quyết từng khúc mắc.
              </p>

              {/* Concern selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {healthConcerns.map((c) => {
                  const isSelected = selectedConcern === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedConcern(c.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        isSelected
                          ? "bg-white/20 border-cyan-300 shadow-md"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className={isSelected ? "text-cyan-200" : "text-white"}>{c.title}</span>
                        <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded">
                          {c.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-blue-200 line-clamp-2">{c.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right side CTA panel */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-6 sm:p-7 rounded-2xl shadow-xl space-y-4 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-extrabold text-lg text-slate-900">
                  Tư Vấn Miễn Phí Qua Zalo
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Không ép mua hàng · Trao đúng giải pháp · Bảo mật thông tin
                </p>
              </div>

              <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 text-xs text-blue-900 font-medium text-left space-y-1">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bạn đang chọn: {healthConcerns.find(c => c.id === selectedConcern)?.title}</span>
                </div>
                <p className="text-[11px] text-slate-600 pl-5.5">
                  Vào Zalo gửi kết quả xét nghiệm hoặc mô tả triệu chứng để Ds. Thủy hỗ trợ ngay.
                </p>
              </div>

              {/* Direct Zalo Link */}
              <a
                href={ZALO_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Vào Nhóm Zalo Nhận Quà & Tư Vấn</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-slate-500">
                Đã có hơn 1.200+ khách hàng được tư vấn và theo dõi chỉ số thành công
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
