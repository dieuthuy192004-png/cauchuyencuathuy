import React from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageTitle: string;
}

export const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageTitle,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2 min-w-0 pr-4">
            <ZoomIn className="w-4 h-4 text-blue-400 shrink-0" />
            <h4 id="gallery-modal-title" className="text-sm font-bold truncate">
              {imageTitle || "Hình ảnh tư liệu thực tế"}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Đóng (Esc)"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-auto">
          <img
            src={imageUrl}
            alt={imageTitle}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-lg select-none"
          />
        </div>

        {/* Footer info */}
        <div className="p-3.5 bg-slate-900/95 text-white flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-800">
          <span className="text-slate-300 font-medium">
            Tư liệu chân thực 100% từ hành trình Dược sĩ Trịnh Thủy - Phúc An 5
          </span>
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Mở ảnh kích thước gốc</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
