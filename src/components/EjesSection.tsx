import React, { useState } from 'react';
import { EJES_TEMATICOS } from '../data/mockData';
import { EjeThematico } from '../types';
import { Cigarette, Brain, Heart, ShieldAlert, Sparkles, CheckCircle, AlertTriangle, ArrowRight, X } from 'lucide-react';

export const EjesSection: React.FC = () => {
  const [selectedEjeId, setSelectedEjeId] = useState<string>(EJES_TEMATICOS[0].id);
  const [modalEje, setModalEje] = useState<EjeThematico | null>(null);

  const activeEje = EJES_TEMATICOS.find((e) => e.id === selectedEjeId) || EJES_TEMATICOS[0];

  const getIconForEje = (id: string) => {
    switch (id) {
      case 'vapeo-sustancias':
        return <Cigarette className="w-5 h-5" />;
      case 'salud-mental':
        return <Brain className="w-5 h-5" />;
      case 'embarazo-adolescente':
        return <Heart className="w-5 h-5" />;
      case 'acoso-violencia':
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="ejes" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#16899A] block mb-2">
            Líneas de Acción Estratégicas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#123B50] mb-4">
            Nuestros Ejes
          </h2>
          <p className="text-base sm:text-lg text-[#263746] leading-relaxed">
            Abordamos las problemáticas más sensibles que impactan el desarrollo biopsicosocial y académico de los adolescentes del Distrito Educativo 15 - 01.
          </p>
        </div>

        {/* Ejes Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {EJES_TEMATICOS.map((eje) => {
            const isSelected = eje.id === selectedEjeId;
            return (
              <button
                key={eje.id}
                onClick={() => setSelectedEjeId(eje.id)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#16899A] ${
                  isSelected
                    ? 'bg-[#123B50] text-white border-[#123B50] shadow-md'
                    : 'bg-[#F5F7F8] text-[#263746] border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected ? 'bg-white/15 text-[#62B6B0]' : 'bg-white text-[#16899A] shadow-xs'
                  }`}
                >
                  {getIconForEje(eje.id)}
                </div>
                <div>
                  <h3 className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#123B50]'}`}>
                    {eje.title}
                  </h3>
                  <span className={`text-[11px] block mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {eje.targetAudience}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Eje In-Depth Showcase Card */}
        <div className="bg-[#F5F7F8] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Overview and Warning Signs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-[#16899A]/10 text-[#16899A]">
                  {getIconForEje(activeEje.id)}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16899A]">
                    Eje Temático Prioritario
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#123B50]">
                    {activeEje.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                {activeEje.subtitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeEje.description}
              </p>

              {/* Verified Key Stat */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#F2B84B] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#123B50] block mb-0.5">Dato Verificado:</span>
                  <span className="text-slate-600">{activeEje.keyStats}</span>
                </div>
              </div>

              {/* Warning Signs */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B50] mb-3 flex items-center gap-1.5">
                  <span>Señales de Alerta a Observar</span>
                </h4>
                <ul className="space-y-2">
                  {activeEje.warningSigns.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16899A] mt-1.5 shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right: Myths vs Facts & Action steps */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Myth vs Reality Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16899A] border-b border-slate-100 pb-2">
                  Mitos vs. Realidades
                </h4>
                {activeEje.mythsAndFacts.map((mf, idx) => (
                  <div key={idx} className="text-xs space-y-1.5 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="font-medium text-red-700 bg-red-50 p-2 rounded-lg">
                      <span className="font-bold">Mito:</span> {mf.myth}
                    </div>
                    <div className="text-slate-700 bg-emerald-50/70 p-2 rounded-lg">
                      <span className="font-bold text-emerald-800">Realidad:</span> {mf.reality}
                    </div>
                  </div>
                ))}
              </div>

              {/* What Can You Do */}
              <div className="bg-[#123B50] text-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#62B6B0] mb-3 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#62B6B0]" />
                  <span>¿Qué puedes hacer tú?</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {activeEje.actionSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#F2B84B] font-bold">✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setModalEje(activeEje)}
                  className="mt-5 w-full py-2.5 px-3 bg-[#16899A] hover:bg-[#62B6B0] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Ver ficha pedagógica completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Detail Modal */}
      {modalEje && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setModalEje(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-[#16899A]/10 text-[#16899A]">
                  {getIconForEje(modalEje.id)}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16899A]">
                    Ficha de Orientación Distrital 15-01
                  </span>
                  <h3 className="text-xl font-bold text-[#123B50]">{modalEje.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setModalEje(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-[#123B50] mb-1">Contexto Institucional</h4>
                <p className="leading-relaxed text-slate-600">{modalEje.description}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-[#123B50] mb-2 text-xs uppercase tracking-wider">
                  Guía de Acción para Líderes Estudiantiles
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Los miembros de los Consejos de Curso y Agentes de Cambio capacitados deben replicar estas pautas de prevención en sus respectivas aulas mediante debates informales, murales de curso y canalización discreta hacia el Departamento de Orientación y Psicología.
                </p>
                <div className="text-xs font-medium text-[#16899A]">
                  Público objetivo: {modalEje.targetAudience}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#123B50] mb-2 text-xs uppercase tracking-wider">
                  Desmitificación Focalizada
                </h4>
                <div className="space-y-3">
                  {modalEje.mythsAndFacts.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-slate-100 bg-[#F5F7F8] text-xs">
                      <div className="text-red-700 font-semibold mb-1">❌ {item.myth}</div>
                      <div className="text-emerald-800">✅ {item.reality}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setModalEje(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#123B50] hover:bg-[#16899A] rounded-xl transition-colors cursor-pointer"
              >
                Entendido / Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
