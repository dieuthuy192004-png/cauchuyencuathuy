import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Gift, 
  Laptop, 
  Bot, 
  Database, 
  HeartHandshake, 
  Layers,
  Award
} from 'lucide-react';
import { ZALO_GROUP_LINK, IMAGES } from '../data/storyData';

interface OnlineRoadmapProps {
  onOpenImageModal: (url: string, title: string) => void;
}

export const OnlineRoadmapSection: React.FC<OnlineRoadmapProps> = ({ onOpenImageModal }) => {
  const steps = [
    {
      num: "01",
      title: "Đập Tan Nỗi Sợ Công Nghệ",
      desc: "Vượt qua rào cản 'sợ máy tính, ngại quay video'. Học từng cú click chuột, thao tác đơn giản ai cũng làm được.",
      icon: <Laptop className="w-5 h-5 text-blue-600" />
    },
    {
      num: "02",
      title: "Ứng Dụng AI & ChatGPT",
      desc: "Tự động hóa 80% công việc soạn bài, kịch bản video y khoa, trả lời tin nhắn chuẩn chuyên môn mà không tốn công sức.",
      icon: <Bot className="w-5 h-5 text-sky-600" />
    },
    {
      num: "03",
      title: "Lưu Trữ Data & Chăm Khách Đa Kênh",
      desc: "Chuyển khách hàng từ Offline vào hệ thống Zalo, tiếp tục chăm sóc sau khi họ rời nhà thuốc để họ luôn nhớ tới bạn.",
      icon: <Database className="w-5 h-5 text-indigo-600" />
    },
    {
      num: "04",
      title: "Chăm Sóc Sức Khỏe Chủ Động",
      desc: "Định vị giải pháp Ruột - Gan - Máu kết hợp Dược học và Y học cổ truyền, giúp bà con khỏe tự nhiên bền vững.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />
    },
    {
      num: "05",
      title: "Đồng Hành & Phát Triển Cùng Đội Nhóm",
      desc: "Không đi một mình. Người đi trước kèm người đi sau, cùng nhau mở rộng tầm ảnh hưởng vượt ra ngoài bốn bức tường.",
      icon: <HeartHandshake className="w-5 h-5 text-rose-600" />
    }
  ];

  return (
    <section id="hanh-trinh-online" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Chuyển đổi số thực chiến cho Dược sĩ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            LỘ TRÌNH ĐƯA NHÀ THUỐC TRUYỀN THỐNG{' '}
            <span className="text-blue-700">BƯỚC LÊN ONLINE</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Quy trình đúc kết từ chính 18 năm kinh nghiệm thực tế của Dược sĩ Trịnh Thủy. 
            Đơn giản, chân thực, tử tế và không đòi hỏi kỹ năng công nghệ cao siêu.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="bg-blue-50/50 hover:bg-white rounded-2xl p-5 border border-blue-100 hover:border-blue-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-2xl font-black text-blue-200 group-hover:text-blue-600 transition-colors">
                    {s.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-blue-100 flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-100/60 flex items-center gap-1 text-[11px] font-semibold text-blue-600">
                <span>Dễ áp dụng</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* 5 VÀNG CAM KẾT (Crucial requested section) */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-widest block">
              Nguyên tắc làm nghề bất di bất dịch
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              5 KHÔNG CAM KẾT TỪ DƯỢC SĨ TRỊNH THỦY
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Chúng tôi bảo vệ sự tôn nghiêm của màu áo Blouse trắng. 
              Kinh doanh và phụng sự phải dựa trên giá trị y đức bền vững.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-3">
              {[
                { title: "Không LiveStream", subtitle: "Không cần ngồi gào thét trước màn hình" },
                { title: "Không Cày View", subtitle: "Không làm trò giật gân, nhảm nhí" },
                { title: "Không Ôm Hàng", subtitle: "Không áp lực vốn, tồn kho chôn tiền" },
                { title: "Không Ship Hàng", subtitle: "Hệ thống tự động vận hành chu đáo" },
                { title: "Không Đa Cấp", subtitle: "Thuần túy y dược & chuyển giao giá trị" },
              ].map((c, cIdx) => (
                <div 
                  key={cIdx} 
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-amber-400/50 transition-all ${
                    cIdx === 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-2 border border-rose-500/30">
                    <XCircle className="w-4 h-4 text-rose-400" />
                  </div>
                  <h4 className="font-extrabold text-sm text-white mb-1">
                    {c.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {c.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={ZALO_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-100"
              >
                <Gift className="w-5 h-5 text-slate-950" />
                <span>Vào Nhóm Zalo Nhận Quà & Lộ Trình</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Real Visual Evidence: Team & Sapa & Award */}
        <div id="thanh-tuu-doi-nhom" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                Hình ảnh thực tế
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Những Khoảnh Khắc Cùng Chị Em & Quả Ngọt Cống Hiến
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Mỗi bức ảnh là một câu chuyện có thật về sự kiên định, lòng biết ơn và niềm vui được đồng hành.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              onClick={() => onOpenImageModal(IMAGES.teamMeeting, "Buổi kết nối cùng đội ngũ Dược sĩ")}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-100 aspect-[4/3]"
            >
              <img 
                src={IMAGES.teamMeeting} 
                alt="Đồng hành cùng Dược sĩ" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white">Kết Nối Dược Sĩ Bắc - Nam</span>
              </div>
            </div>

            <div 
              onClick={() => onOpenImageModal(IMAGES.awardCeremony, "Vinh danh Giám Đốc Toàn Quốc")}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-100 aspect-[4/3]"
            >
              <img 
                src={IMAGES.awardCeremony} 
                alt="Vinh danh Giám Đốc Toàn Quốc" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white">Vinh Danh Giám Đốc Toàn Quốc</span>
              </div>
            </div>

            <div 
              onClick={() => onOpenImageModal(IMAGES.sapaTrip, "Chuyến đi Hà Nội - Sa Pa")}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-100 aspect-[4/3]"
            >
              <img 
                src={IMAGES.sapaTrip} 
                alt="Chuyến đi Sa Pa trong mơ" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white">Chuyến Đi Hà Nội - Sa Pa</span>
              </div>
            </div>

            <div 
              onClick={() => onOpenImageModal(IMAGES.missionCelebration, "Lan tỏa giá trị 1.000 chị em")}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-100 aspect-[4/3]"
            >
              <img 
                src={IMAGES.missionCelebration} 
                alt="Hành trình lan tỏa yêu thương" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white">Sứ Mệnh 1.000 Chị Em Dược Sĩ</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
