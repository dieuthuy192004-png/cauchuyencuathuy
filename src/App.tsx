import React, { useState } from 'react';
import { TopNotificationToast } from './components/TopNotificationToast';
import { TopBarUrgency } from './components/TopBarUrgency';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StoryTimeline } from './components/StoryTimeline';
import { WhyChoosePhucAn } from './components/WhyChoosePhucAn';
import { OnlineRoadmapSection } from './components/OnlineRoadmapSection';
import { CountdownOfferSection } from './components/CountdownOfferSection';
import { ZaloGiftPopup } from './components/ZaloGiftPopup';
import { ShareModal } from './components/ShareModal';
import { PhotoGalleryModal } from './components/PhotoGalleryModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [galleryModal, setGalleryModal] = useState<{
    isOpen: boolean;
    imageUrl: string;
    imageTitle: string;
  }>({
    isOpen: false,
    imageUrl: '',
    imageTitle: '',
  });

  const handleOpenImageModal = (url: string, title: string) => {
    setGalleryModal({
      isOpen: true,
      imageUrl: url,
      imageTitle: title,
    });
  };

  const handleCloseImageModal = () => {
    setGalleryModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 font-['Be_Vietnam_Pro',sans-serif]">
      
      {/* 1. Notification in top-left corner */}
      <TopNotificationToast />

      {/* 2. Urgent top bar with live eye viewers & countdown */}
      <TopBarUrgency onOpenShare={() => setIsShareModalOpen(true)} />

      {/* 3. Sticky Navigation */}
      <Navbar onOpenShare={() => setIsShareModalOpen(true)} />

      {/* 4. Main Body */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          onOpenShare={() => setIsShareModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 8-Chapter Authentic Story Timeline */}
        <StoryTimeline 
          onOpenImageModal={handleOpenImageModal}
        />

        {/* Why Choose Phuc An 5 (4 pillars + consultation) */}
        <WhyChoosePhucAn 
          onOpenImageModal={handleOpenImageModal}
        />

        {/* Roadmap to Online & 5 Commitments & Team Achievements */}
        <OnlineRoadmapSection 
          onOpenImageModal={handleOpenImageModal}
        />

        {/* Free Slot Countdown & Urgent Offer (No form - Direct Zalo) */}
        <CountdownOfferSection />
      </main>

      {/* 5. Footer with required text & commitments */}
      <Footer onOpenShare={() => setIsShareModalOpen(true)} />

      {/* 6. Floating Action Buttons */}
      <FloatingActions onOpenShare={() => setIsShareModalOpen(true)} />

      {/* 7. Pop-up after 10 seconds */}
      <ZaloGiftPopup />

      {/* 8. Share Modal */}
      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* 9. Lightbox Photo Modal */}
      <PhotoGalleryModal 
        isOpen={galleryModal.isOpen}
        onClose={handleCloseImageModal}
        imageUrl={galleryModal.imageUrl}
        imageTitle={galleryModal.imageTitle}
      />

    </div>
  );
}
