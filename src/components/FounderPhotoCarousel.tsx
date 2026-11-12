import React, { useState, useEffect } from 'react';
import { Founder, FounderPhotoSlot } from '../types';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FounderPhotoCarouselProps {
  founder: Founder;
  customPhotos?: Record<string, string>;
  onSelectPhotoModal: (photo: FounderPhotoSlot) => void;
}

export const FounderPhotoCarousel: React.FC<FounderPhotoCarouselProps> = ({
  founder,
  customPhotos = {},
  onSelectPhotoModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const photos = founder.photos;
  const currentPhoto = photos[currentIndex];
  const currentSrc = customPhotos[currentPhoto.fileName] || currentPhoto.defaultImage;

  // Automatic change every 4.5 seconds with forward transition
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, photos.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handleDotClick = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full relative flex flex-col items-center"
    >
      {/* Active photo display with smooth animated transition */}
      <div className="w-full relative aspect-[3/4] max-h-[520px] rounded-3xl overflow-hidden bg-slate-900 shadow-lg border-4 border-white/90 group">
        <AnimatePresence custom={direction} initial={false}>
          <motion.img
            key={currentPhoto.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            src={currentSrc}
            alt={founder.name}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
        </AnimatePresence>

        {/* Top-right Zoom affordance */}
        <button
          type="button"
          onClick={() => onSelectPhotoModal(currentPhoto)}
          title="Ver en pantalla completa"
          className="absolute top-3.5 right-3.5 z-20 p-2.5 bg-white/90 hover:bg-white text-[#123B50] rounded-2xl shadow-md transition-all hover:scale-110 cursor-pointer backdrop-blur-xs"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Carousel navigation arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/45 hover:bg-black/75 text-white rounded-full transition-all backdrop-blur-xs cursor-pointer opacity-85 hover:opacity-100 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Foto siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/45 hover:bg-black/75 text-white rounded-full transition-all backdrop-blur-xs cursor-pointer opacity-85 hover:opacity-100 hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {photos.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleDotClick(idx)}
            aria-label={`Foto ${idx + 1}`}
            className={`transition-all rounded-full cursor-pointer ${
              idx === currentIndex
                ? 'w-7 h-2.5 bg-[#16899A]'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
