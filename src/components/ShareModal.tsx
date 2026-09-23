import React, { useState } from 'react';
import { 
  X, 
  Share2, 
  Copy, 
  Check, 
  Facebook, 
  MessageSquare, 
  Send, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { ZALO_GROUP_LINK } from '../data/storyData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://nhathuocphucan5.vn';

  const shareText = `🌟 Đọc câu chuyện truyền cảm hứng của Dược sĩ Trịnh Thủy - Nhà thuốc Phúc An 5: "TÔI ĐÃ ĐI MỘT VÒNG THẬT DÀI ĐỂ TÌM THẤY CON ĐƯỜNG CỦA CHÍNH MÌNH". Từ nữ hộ sinh, mẹ bỉm 4 con, 7 năm học Dược đến hỗ trợ dược sĩ ứng dụng AI bước lên Online: ${currentUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(fbUrl, '_blank', 'width=600,height=400');
  };

  const handleShareZalo = () => {
    // Open Zalo or direct share link
    const zaloShareUrl = `https://sp.zalo.me/share_inline?link=${encodeURIComponent(currentUrl)}`;
    window.open(zaloShareUrl, '_blank', 'width=600,height=500');
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-blue-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-sky-600 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            title="Đóng"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-cyan-200" />
            <h3 id="share-modal-title" className="text-lg font-bold text-white">
              Chia Sẻ Câu Chuyện Truyền Cảm Hứng
            </h3>
          </div>
          <p className="text-xs text-blue-100 mt-1">
            Lan tỏa nghị lực vượt khó và tinh thần tương trợ của người phụ nữ ngành y.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          
          {/* Pre-formatted message box */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Nội dung kèm liên kết sẵn có:
            </label>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed font-normal max-h-36 overflow-y-auto">
              {shareText}
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Đã sao chép lời nhắn & đường link!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Sao Chép Lời Nhắn Để Gửi Tin Nhắn / Zalo</span>
              </>
            )}
          </button>

          {/* Social buttons */}
          <div className="pt-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2 text-center">
              Hoặc chia sẻ trực tiếp lên:
            </span>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleShareFacebook}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </button>

              <button
                onClick={handleShareZalo}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#0068FF] hover:bg-[#005cd6] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Zalo</span>
              </button>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={ZALO_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
            >
              <span>Vào nhóm Zalo cùng Ds. Trịnh Thủy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
