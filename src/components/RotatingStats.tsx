import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { ROTATING_STATISTICS } from '../data/mockData';

interface RotatingStatsProps {
  onLearnMore?: (statId: string) => void;
}

export const RotatingStats: React.FC<RotatingStatsProps> = ({ onLearnMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Exact 6 seconds rotation
  const durationMs = 6000;
  const intervalStepMs = 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % ROTATING_STATISTICS.length);
          return 0;
        }
        return prev + (intervalStepMs / durationMs) * 100;
      });
    }, intervalStepMs);

    return () => clearInterval(timer);
  }, []);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ROTATING_STATISTICS.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ROTATING_STATISTICS.length);
    setProgress(0);
  };

  const currentStat = ROTATING_STATISTICS[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-[#123B50] text-white relative overflow-hidden">
      {/* Subtle organic background glows matching palette */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#16899A]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#62B6B0]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Lead-in */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F2B84B] mb-3">
            <AlertCircle className="w-4 h-4 text-[#F2B84B]" />
            <span>{currentStat.categoryTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Cifras que no podemos ignorar en nuestras aulas
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Cada número representa vidas, familias y estudiantes de nuestros centros educativos. Conocer la realidad es el primer paso para transformarla.
          </p>
        </div>

        {/* Carousel Card Container */}
        {/* Carousel Card Container */}
        <div className="bg-white/95 text-[#123B50] rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-white/20 relative">
          {/* Progress bar line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 rounded-t-3xl overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#16899A] via-[#62B6B0] to-[#F2B84B] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Big Statistic Display */}
            <div className="lg:col-span-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-8 lg:pb-0 lg:pr-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#16899A] mb-2 block">
                {currentStat.contextPill}
              </span>
              
              {/* Massive Statistic Number */}
              <div className="font-heading font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#123B50] tabular-nums mb-2">
                {currentStat.number}
              </div>

              {/* Stat Subject Headline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#16899A] mb-4">
                {currentStat.title}
              </h3>

              {/* Source attribution strictly unboxed */}
              <div className="text-xs font-medium text-slate-500 pt-3 border-t border-slate-100">
                {currentStat.source}
              </div>
            </div>

            {/* Right Column: Full context, quote, and impact */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                <p className="text-xl sm:text-2xl font-medium text-[#263746] leading-snug mb-4">
                  <span className="font-bold text-[#123B50]">{currentStat.highlightText}</span>{' '}
                  <span className="text-slate-600">{currentStat.fullDescription}</span>
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  En el Distrito Educativo 15 - 01, este indicador motiva las jornadas de orientación integral, las capacitaciones con docentes y las dinámicas entre pares en los planteles escolares.
                </p>
              </div>

              {/* Interactive Slide Controls & Selector Tabs */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Topic quick selector buttons */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl">
                  {ROTATING_STATISTICS.map((item, idx) => {
                    const isSelected = idx === currentIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(idx)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                          isSelected
                            ? 'bg-white text-[#123B50] shadow-sm font-semibold'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                        }`}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </div>

                {/* Arrow navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Cifra anterior"
                    className="p-2 text-slate-700 hover:text-[#123B50] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Cifra siguiente"
                    className="p-2 text-slate-700 hover:text-[#123B50] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Footnote note */}
        <div className="mt-8 text-center text-xs text-slate-300">
          * Datos recopilados de fuentes oficiales institucionales (ONE, CONANI, OCDE PISA, SINAVE Salud Pública e IDEICE).
        </div>

      </div>
    </section>
  );
};
