import React, { useState, useEffect } from 'react';
import { Target, Compass, Award, Maximize2, X, CheckCircle2, Sparkles } from 'lucide-react';
import { FOUNDERS_DATA, WORKSHOP_IMAGE_URL, DISTRITO_1501_LOGO_URL, IPMHU_LOGO_URL } from '../data/mockData';
import { FounderPhotoSlot } from '../types';
import { FounderPhotoCarousel } from './FounderPhotoCarousel';

export const QuienesSomosSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fundadores' | 'mision-vision' | 'justificacion' | 'objetivos'>('fundadores');
  
  // Custom images state loaded from localStorage for the 6 photo slots
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<FounderPhotoSlot | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('gc_founder_photos');
      if (stored) {
        setCustomPhotos(JSON.parse(stored));
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  return (
    <section id="quienes-somos" className="py-16 sm:py-24 bg-[#F5F7F8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#16899A] block mb-2">
            Identidad y Fundamento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#123B50] mb-4">
            Quiénes Somos
          </h2>
          <p className="text-base sm:text-lg text-[#263746] leading-relaxed">
            Una iniciativa nacida del liderazgo estudiantil comprometido con la prevención integral, el respeto mutuo y el bienestar de los centros educativos del Distrito 15 - 01.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('fundadores')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'fundadores'
                ? 'bg-[#123B50] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-[#123B50] border border-slate-200'
            }`}
          >
            Nuestros Fundadores
          </button>
          <button
            onClick={() => setActiveTab('mision-vision')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'mision-vision'
                ? 'bg-[#123B50] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-[#123B50] border border-slate-200'
            }`}
          >
            Misión & Visión
          </button>
          <button
            onClick={() => setActiveTab('justificacion')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'justificacion'
                ? 'bg-[#123B50] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-[#123B50] border border-slate-200'
            }`}
          >
            Descripción & Justificación
          </button>
          <button
            onClick={() => setActiveTab('objetivos')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'objetivos'
                ? 'bg-[#123B50] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-[#123B50] border border-slate-200'
            }`}
          >
            Objetivos del Programa
          </button>
        </div>


        {/* TAB 1: FUNDADORES & FOTOS OFICIALES */}
        {activeTab === 'fundadores' && (
          <div className="space-y-12">
            
            {/* The Founders' Completed Statement Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="max-w-4xl">
                {/* Header row with institutional emblems */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16899A]">
                    <Award className="w-4 h-4 text-[#F2B84B]" />
                    <span>Mensaje de los Representantes Estudiantiles</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={DISTRITO_1501_LOGO_URL}
                      alt="Logo Distrito 15-01"
                      className="h-9 w-auto object-contain"
                      title="Distrito Educativo 15 - 01"
                    />
                    <img
                      src={IPMHU_LOGO_URL}
                      alt="Logo Instituto Politécnico Max Henríquez Ureña"
                      className="h-9 w-auto object-contain rounded-full shadow-2xs"
                      title="Instituto Politécnico Max Henríquez Ureña"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#123B50] mb-6 leading-tight">
                  "De estudiantes para estudiantes: un compromiso inquebrantable con nuestra generación."
                </h3>

                <div className="space-y-4 text-base text-[#263746] leading-relaxed">
                  <p>
                    <strong className="text-[#123B50] font-semibold">Somos Robelin Mejias y Jennyfer Lopez</strong>, estudiantes del <span className="font-semibold text-[#16899A]">Instituto Politécnico Max Henríquez Ureña</span> que con el compromiso de conformar parte del <span className="font-semibold text-[#123B50]">Consejo Estudiantil Distrital del Distrito Educativo 15 - 01</span> hemos desarrollado este gran programa.
                  </p>
                  <p>
                    Nuestra experiencia en las aulas nos ha permitido ver de cerca cómo problemáticas invisibilizadas o estigmatizadas impactan profundamente la vida de nuestros compañeros: el incremento en el uso de vapeadores en los recesos, el sufrimiento silencioso provocado por la ansiedad y la depresión, la desinformación alrededor de la sexualidad que deriva en embarazos tempranos, y el dolor desgarrador que provoca el acoso escolar en quienes temen asistir a la escuela.
                  </p>
                  <p>
                    Entendimos que no podíamos quedarnos de brazos cruzados. Creemos firmemente que la educación entre pares posee una fuerza transformadora única: cuando un joven le habla a otro joven desde el respeto, la verdad y la empatía, el mensaje trasciende cualquier barrera defensiva. <strong>Generación Consciente</strong> nace como esa plataforma de esperanza, donde cada estudiante del Distrito 15 - 01 encuentre un espacio seguro para formarse, levantar la voz y construir un proyecto de vida con dignidad y futuro.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <img src={IPMHU_LOGO_URL} alt="IPMHU" className="h-6 w-auto object-contain rounded-full" />
                    <span className="text-xs font-semibold text-[#123B50]">
                      Robelin Mejias & Jennyfer Lopez
                    </span>
                    <span className="text-xs text-slate-400">· Consejo Estudiantil Distrital 15 - 01</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#16899A] font-medium">
                    <img src={DISTRITO_1501_LOGO_URL} alt="15-01" className="h-5 w-auto object-contain" />
                    <span>Instituto Politécnico Max Henríquez Ureña · R.D.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founders Profiles: Photo Carousel side-by-side with Biography & Description */}
            <div className="space-y-12">
              {FOUNDERS_DATA.map((founder) => (
                <div
                  key={founder.name}
                  className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Photo Carousel with Transitions */}
                    <div className="lg:col-span-5 w-full max-w-sm mx-auto lg:max-w-none sticky top-24">
                      <FounderPhotoCarousel
                        founder={founder}
                        customPhotos={customPhotos}
                        onSelectPhotoModal={(photo) => setSelectedPhotoModal(photo)}
                      />
                    </div>

                    {/* Right Column: Profile, Biography, Vision & Achievements */}
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                      
                      {/* Founder Info Header */}
                      <div className="border-b border-slate-100 pb-5">
                        <span className="text-xs uppercase tracking-wider font-bold text-[#16899A] block mb-1">
                          {founder.districtRole}
                        </span>
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B50]">
                          {founder.name}
                        </h4>
                        <p className="text-sm font-semibold text-slate-600 mt-1">
                          {founder.role} · <span className="text-[#16899A]">{founder.school}</span>
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="bg-[#F5F7F8] p-4 sm:p-5 rounded-2xl border-l-4 border-[#16899A]">
                        <p className="text-xs sm:text-sm italic text-[#263746] leading-relaxed">
                          {founder.quote}
                        </p>
                      </div>

                      {/* Biography / Description */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#123B50] block">
                          Biografía & Trayectoria
                        </span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {founder.bio}
                        </p>
                      </div>

                      {/* Vision and Achievements Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-2">
                        {/* Vision */}
                        <div className="sm:col-span-5 bg-[#F5F7F8] p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16899A] mb-2">
                              <Sparkles className="w-3.5 h-3.5 text-[#F2B84B]" />
                              <span>Visión y Compromiso</span>
                            </div>
                            <p className="text-xs text-[#263746] font-medium leading-relaxed italic">
                              "{founder.vision}"
                            </p>
                          </div>
                          <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                            {founder.school}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="sm:col-span-7 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#123B50] mb-1">
                            <Award className="w-4 h-4 text-[#16899A]" />
                            <span>Logros y Contribuciones</span>
                          </div>
                          <ul className="space-y-1.5">
                            {founder.achievements.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#16899A] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: MISIÓN & VISIÓN */}
        {activeTab === 'mision-vision' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#16899A]/10 text-[#16899A] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#123B50] mb-4">Misión</h3>
                <p className="text-base text-[#263746] leading-relaxed">
                  Concientizar, orientar y acompañar a los adolescentes y jóvenes de los centros educativos del Distrito 15 - 01 mediante el acceso a información científica veraz, el diálogo reflexivo y la promoción de habilidades socioemocionales, capacitándolos para tomar decisiones informadas y prevenir conductas de riesgo que atenten contra su bienestar integral.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-semibold uppercase tracking-wider text-[#16899A]">
                Propósito Rector · Distrito 15 - 01
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F2B84B]/20 text-[#123B50] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#123B50] mb-4">Visión</h3>
                <p className="text-base text-[#263746] leading-relaxed">
                  Ser el programa estudiantil de referencia distrital y nacional en la prevención integral juvenil, consolidando una red sólida de líderes escolares que transformen sus entornos en comunidades seguras, libres de violencia y adicciones, donde cada joven alcance su máximo potencial académico y personal.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-semibold uppercase tracking-wider text-[#16899A]">
                Horizonte 2026 - 2030
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DESCRIPCIÓN & JUSTIFICACIÓN */}
        {activeTab === 'justificacion' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 max-w-5xl">
            <div>
              <h3 className="text-2xl font-bold text-[#123B50] mb-4">
                Descripción General del Programa
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>GENERACIÓN CONSCIENTE</strong> se articula como un ecosistema pedagógico y comunitario concebido desde las vivencias del estudiantado. Su metodología combina talleres vivenciales, círculos de conversación sin prejuicios, campañas de difusión digital y física en los pasillos de los planteles, y la formación de brigadas de mediación entre compañeros.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                El programa trabaja en coordinación con las Unidades de Orientación y Psicología de los centros escolares del Distrito 15 - 01, respetando los protocolos institucionales del Ministerio de Educación de la República Dominicana (MINERD) y sumando el dinamismo y cercanía que solo los líderes juveniles pueden aportar.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-2xl font-bold text-[#123B50] mb-4">
                Justificación Social y Educativa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
                <div className="p-5 bg-[#F5F7F8] rounded-2xl border border-slate-200/80">
                  <h4 className="font-bold text-[#123B50] mb-2">Vulnerabilidad en la Etapa Adolescente</h4>
                  <p className="leading-relaxed">
                    La adolescencia es un período crucial de búsqueda de identidad y pertenencia grupal, lo cual expone a los jóvenes a experimentar con vapeadores, ceder ante presiones de acoso o iniciar relaciones sexuales sin la debida madurez ni protección.
                  </p>
                </div>
                <div className="p-5 bg-[#F5F7F8] rounded-2xl border border-slate-200/80">
                  <h4 className="font-bold text-[#123B50] mb-2">Eficacia Comprobada de la Educación entre Pares</h4>
                  <p className="leading-relaxed">
                    Estudios internacionales confirman que los mensajes preventivos transmitidos por iguales tienen hasta tres veces mayor índice de asimilación y cambio de conducta que los discursos adultocéntricos tradicionales.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <img
                src={WORKSHOP_IMAGE_URL}
                alt="Taller de discusión y escucha activa con estudiantes y orientadores"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-slate-50 text-xs text-slate-500 italic">
                Fig. Espacio de diálogo y reflexión guiada desarrollado en un centro educativo del Distrito 15 - 01.
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: OBJETIVOS */}
        {activeTab === 'objetivos' && (
          <div className="space-y-8 max-w-5xl">
            {/* Objetivo General */}
            <div className="bg-[#123B50] text-white rounded-3xl p-8 sm:p-10 shadow-lg">
              <div className="text-xs uppercase font-bold tracking-widest text-[#F2B84B] mb-2">
                Objetivo General
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Desarrollar una estrategia preventiva integral en los centros del Distrito 15 - 01
              </h3>
              <p className="text-base text-slate-200 leading-relaxed">
                Fomentar en los adolescentes y jóvenes competencias socioemocionales, pensamiento crítico y discernimiento ético que reduzcan la incidencia del uso de vapeadores, el acoso escolar, el embarazo temprano y el desamparo en salud mental, transformándolos en agentes de cambio proactivos en sus comunidades.
              </p>
            </div>

            {/* Objetivos Específicos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-[#16899A] block mb-2">OBJETIVO 01</span>
                <h4 className="text-lg font-bold text-[#123B50] mb-2">Información Veraz y Científica</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Desmitificar el consumo de sustancias y cigarrillos electrónicos mediante datos toxicológicos reales y testimonios accesibles para estudiantes.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-[#16899A] block mb-2">OBJETIVO 02</span>
                <h4 className="text-lg font-bold text-[#123B50] mb-2">Espacios Seguros de Salud Mental</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Establecer círculos de escucha y sensibilización para detectar a tiempo cuadros de ansiedad y pensamientos suicidas, canalizando el apoyo con profesionales.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-[#16899A] block mb-2">OBJETIVO 03</span>
                <h4 className="text-lg font-bold text-[#123B50] mb-2">Convivencia Escolar y Cero Bullying</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Implementar protocolos de mediación pacífica y concientización contra el ciberacoso en redes sociales para salvaguardar la dignidad de cada estudiante.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-[#16899A] block mb-2">OBJETIVO 04</span>
                <h4 className="text-lg font-bold text-[#123B50] mb-2">Proyecto de Vida y Sexualidad Responsable</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Brindar orientación asertiva para la prevención del embarazo adolescente, afianzando metas académicas y vocacionales a mediano y largo plazo.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modal for viewing photo in high-res */}
      {selectedPhotoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-3 right-3 z-10">
              <button
                onClick={() => setSelectedPhotoModal(null)}
                aria-label="Cerrar"
                className="p-2 bg-black/50 hover:bg-black/75 text-white rounded-full transition-all cursor-pointer backdrop-blur-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-slate-950 flex items-center justify-center">
              <img
                src={customPhotos[selectedPhotoModal.fileName] || selectedPhotoModal.defaultImage}
                alt=""
                className="max-h-[80vh] w-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
