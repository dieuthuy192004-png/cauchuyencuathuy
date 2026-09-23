import React from 'react';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Heart, 
  ExternalLink, 
  ShieldCheck, 
  MessageCircle,
  Share2
} from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE, HOTLINE_DISPLAY } from '../data/storyData';

interface FooterProps {
  onOpenShare: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShare }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Banner with exact required header */}
        <div className="bg-gradient-to-r from-blue-900 to-sky-900 rounded-3xl p-6 sm:p-10 mb-12 border border-blue-700/60 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            
            <span className="inline-block text-xs uppercase tracking-widest text-cyan-300 font-bold bg-blue-950/60 px-3 py-1 rounded-full border border-cyan-400/30">
              Trao sức khỏe – Nhận niềm tin
            </span>

            {/* Exactly as requested: DƯỢC SĨ TRỊNH THUỶ – HỖ TRỢ DƯỢC SĨ TRUYỀN THỐNG LÊN ONLINE _0329088730 */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight uppercase leading-snug">
              DƯỢC SĨ TRỊNH THUỶ – HỖ TRỢ DƯỢC SĨ TRUYỀN THỐNG LÊN ONLINE _{HOTLINE}
            </h2>

            {/* Exactly as requested: Cam kết : không LiveStream, Không Cày View, Không Ôm hàng, Không ship hàng, Không đa cấp */}
            <div className="pt-2 pb-1">
              <div className="inline-block bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-2xl border border-white/20">
                <p className="text-xs sm:text-sm font-bold text-amber-300 tracking-wide">
                  Cam kết: Không LiveStream · Không Cày View · Không Ôm hàng · Không ship hàng · Không đa cấp
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto">
              Chuyển đổi số nhà thuốc bằng tri thức y khoa chuẩn mực, sự thấu hiểu tâm lý khách hàng 
              và ứng dụng công nghệ AI một cách đơn giản, bền vững.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={ZALO_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-blue-700" />
                <span>Vào Nhóm Zalo Nhận Quà Cùng Ds. Thủy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${HOTLINE}`}
                className="inline-flex items-center gap-2 bg-blue-800/80 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl border border-blue-500/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>Gọi Hotline: {HOTLINE_DISPLAY}</span>
              </a>

              <button
                onClick={onOpenShare}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-4 py-3 rounded-xl border border-white/20 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Chia Sẻ</span>
              </button>
            </div>

          </div>
        </div>

        {/* 3 Columns details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm">
                PA5
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">
                  Nhà Thuốc Phúc An 5
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  Dược Sĩ Trịnh Thủy Phụ Trách Chuyên Môn
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Nhà thuốc Phúc An 5 kiên định với sứ mệnh chăm sóc sức khỏe chủ động, 
              kết hợp hài hòa Dược học hiện đại, Dinh dưỡng liệu pháp và Y học cổ truyền. 
              Đồng hành cùng 1.000 chị em dược sĩ truyền thống trên toàn quốc tự tin chuyển mình.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Nhà thuốc Phúc An 5 · Phục vụ và tư vấn sức khỏe trên toàn quốc</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Hotline / Zalo: <strong className="text-white">{HOTLINE_DISPLAY}</strong></span>
              </div>
            </div>
          </div>

          {/* Core values */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-slate-200 tracking-wider">
              Lĩnh Vực Chuyên Môn & Tư Vấn
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Thanh lọc & phục hồi Ruột – Gan – Máu</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Kiểm soát huyết áp, mỡ máu, đường huyết</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Hạ acid uric máu an toàn cho người bệnh Gout</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Quy trình chuyển giao công nghệ & AI cho Dược sĩ</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Cộng đồng nữ dược sĩ giúp nhau tự chủ kinh tế</span>
              </li>
            </ul>
          </div>

          {/* Philosophy note */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-slate-200 tracking-wider">
              Lời Tri Ân
            </h4>
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-slate-400 leading-relaxed italic">
              &ldquo;Thành công lớn nhất với tôi không phải mình đã đi được bao xa, 
              mà là trên con đường mình đi, đã có thêm bao nhiêu người có thể cùng đi về phía trước.&rdquo;
              <span className="block not-italic font-bold text-blue-400 mt-2">— Ds. Trịnh Thủy</span>
            </div>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dược Sĩ Trịnh Thủy · Nhà Thuốc Phúc An 5. Bản quyền được bảo lưu.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Trao sức khỏe</span>
            <span>·</span>
            <span>Nhận niềm tin</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-rose-400">
              <Heart className="w-3.5 h-3.5 fill-rose-500" /> Đồng hành trọn vẹn
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
