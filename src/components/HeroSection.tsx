import React from 'react';
import { ArrowRight, BookOpen, Calendar, Shield, Sparkles } from 'lucide-react';
import { OFFICIAL_LOGO_URL, DISTRITO_1501_LOGO_URL, IPMHU_LOGO_URL, HERO_IMAGE_URL } from '../data/mockData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F7F8] to-[#F5F7F8] pt-6 sm:pt-10 pb-16 sm:pb-24">
      {/* Delicate decorative background meshes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#16899A]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-[#62B6B0]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* District and Institutional Alliance Bar with GC, Distrito 15-01 and Politécnico */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 mb-8 border-b border-[#123B50]/10">
          {/* Logo GC */}
          <div className="flex items-center">
            <img
              src={OFFICIAL_LOGO_URL}
              alt="Logo Generación Consciente"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>

          {/* Distrito 15-01 Emblem */}
          <div className="flex items-center gap-3">
            <img
              src={DISTRITO_1501_LOGO_URL}
              alt="Logo Distrito Educativo 15-01"
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <div className="text-left">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#16899A] block">
                MINERD · DISTRITO EDUCATIVO 15 - 01
              </span>
              <span className="text-xs sm:text-sm text-[#263746] font-semibold block">
                Consejo Estudiantil Distrital
              </span>
            </div>
          </div>

          {/* Politécnico Max Henríquez Ureña Crest */}
          <div className="flex items-center gap-3">
            <img
              src={IPMHU_LOGO_URL}
              alt="Logo Instituto Politécnico Max Henríquez Ureña"
              className="h-12 sm:h-14 w-auto object-contain rounded-full shadow-2xs"
            />
            <div className="text-left">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#123B50] block">
                INSTITUTO POLITÉCNICO
              </span>
              <span className="text-xs sm:text-sm text-slate-600 font-semibold block">
                Max Henríquez Ureña · Los Alcarrizos
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Mission, Slogan & Impact */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Slogan & Kicker */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#16899A] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F2B84B]" />
                <span>Construyendo decisiones con futuro</span>
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#123B50] leading-[1.15] text-balance">
                Informar para prevenir. Concientizar para transformar.
              </h1>
            </div>

            {/* Main Message / Presentation */}
            <p className="text-base sm:text-lg text-[#263746] leading-relaxed max-w-2xl">
              <strong className="font-semibold text-[#123B50]">GENERACIÓN CONSCIENTE</strong> es un programa educativo y preventivo dirigido a adolescentes y jóvenes de los centros educativos pertenecientes al <span className="text-[#16899A] font-semibold">Distrito 15 - 01</span>, enfocado en la concientización, orientación y prevención de problemáticas que afectan su desarrollo integral.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Nacemos con el propósito de proporcionar información confiable, crear espacios de aprendizaje y reflexión, y fomentar en los estudiantes una mayor capacidad para tomar decisiones responsables y convertirse en agentes de cambio en sus comunidades educativas.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('ejes')}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#123B50] hover:bg-[#16899A] rounded-xl transition-all shadow-md shadow-[#123B50]/10 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Conoce nuestros ejes</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('actividades')}
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-[#123B50] bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#16899A]" />
                <span>Ver actividades distritales</span>
              </button>

              <button
                onClick={() => onNavigate('quienes-somos')}
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-medium text-slate-600 hover:text-[#123B50] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>Quiénes somos</span>
              </button>
            </div>

            {/* Highlights row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 w-full max-w-lg">
              <div>
                <span className="block text-xl font-bold text-[#123B50]">5 Ejes</span>
                <span className="text-xs text-slate-500">Formación integral</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-[#16899A]">15 - 01</span>
                <span className="text-xs text-slate-500">Distrito educativo</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-[#62B6B0]">100%</span>
                <span className="text-xs text-slate-500">Liderazgo estudiantil</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-[3/4] bg-slate-200">
              <img
                src={HERO_IMAGE_URL}
                alt="Estudiantes en taller del programa Generación Consciente"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B50]/90 via-[#123B50]/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F2B84B] mb-1">
                  <Shield className="w-4 h-4" />
                  <span>Jóvenes Liderando con Consciencia</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug text-white">
                  "Crear espacios donde los adolescentes se sientan escuchados, orientados y respetados."
                </h3>
                <p className="text-xs text-slate-200 mt-2">
                  Instituto Politécnico Max Henríquez Ureña · Distrito 15-01
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
