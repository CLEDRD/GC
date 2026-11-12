import React from 'react';
import { Wrench, Heart, Users, Sparkles, Instagram, ArrowUpRight } from 'lucide-react';

interface ParticipaSectionProps {
  onNavigateToContact: () => void;
}

export const ParticipaSection: React.FC<ParticipaSectionProps> = ({ onNavigateToContact }) => {

  return (
    <section id="participa" className="py-16 sm:py-24 bg-[#F5F7F8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#16899A] block mb-2">
            Involúcrate y Transforma
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#123B50] mb-4">
            Participa
          </h2>
          <p className="text-base sm:text-lg text-[#263746] leading-relaxed">
            Mecanismos para involucrarse, colaborar y convertirte en un Agente de Cambio en tu centro educativo del Distrito 15 - 01.
          </p>
        </div>

        {/* 3 Pillars of Participation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#16899A]/10 text-[#16899A] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#123B50] mb-2">Agente de Cambio de Aula</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conviértete en el referente de orientación positiva de tu salón. Recibe capacitación distrital para brindar escucha activa y canalizar casos oportunamente.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-[#16899A]">
              Liderazgo de Pares
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#F2B84B]/20 text-[#123B50] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#123B50] mb-2">Brigada Preventiva y Artística</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Diseña murales escolares, produce spots radiales para el recreo y participa en dramatizaciones teatrales que desmitifiquen el vapeo y la violencia.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-[#16899A]">
              Creatividad & Conciencia
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#62B6B0]/20 text-[#123B50] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#123B50] mb-2">Voluntariado de Acompañamiento</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Colabora en la logística de las charlas y encuentros intercolegiales del Distrito 15-01, acompañando a orientadores y psicólogos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-[#16899A]">
              Servicio a la Comunidad
            </div>
          </div>
        </div>

        {/* REQUIRED EXPLICIT MAINTENANCE CARD */}
        <div className="bg-white rounded-3xl border-2 border-amber-300 p-8 sm:p-12 shadow-md relative overflow-hidden">
          {/* Accent strip */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F2B84B] to-amber-500" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 mx-auto">
              <Wrench className="w-8 h-8 animate-bounce duration-1000" />
            </div>

            <div>
              {/* Mandatory requested text: MANTENIMIENTO */}
              <span className="inline-block text-xs font-black tracking-widest text-amber-800 uppercase bg-amber-100 px-3 py-1 rounded-full mb-3">
                AVISO OFICIAL DEL PROGRAMA
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#123B50] tracking-tight">
                MANTENIMIENTO
              </h3>
            </div>

            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
              La inscripción de participación se encuentra temporalmente en <span className="font-bold text-amber-700">MANTENIMIENTO</span>.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
              Estamos actualizando el formulario de registro y la plataforma distrital de asignación de centros educativos para el nuevo período. Pronto reabriremos las postulaciones para Agentes de Cambio.
            </p>

            {/* Instagram official updates channel */}
            <div className="max-w-md mx-auto pt-2">
              <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl flex flex-col items-center gap-3">
                <span className="text-xs font-semibold text-slate-600">
                  Infórmate sobre las convocatorias y novedades a través de nuestro Instagram oficial:
                </span>
                <a
                  href="https://www.instagram.com/_generacionconsciente_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-[#123B50] to-[#16899A] hover:from-[#16899A] hover:to-[#62B6B0] text-white text-xs font-bold rounded-xl shadow-sm transition-all hover:scale-102 cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-[#F2B84B]" />
                  <span>@_generacionconsciente_</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
                </a>
              </div>
            </div>

            {/* Alternative immediate channel */}
            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-center gap-3">
              <span>¿Tienes una propuesta urgente o caso que reportar?</span>
              <button
                type="button"
                onClick={onNavigateToContact}
                className="font-semibold text-[#16899A] hover:underline cursor-pointer"
              >
                Escríbenos directamente a través de Contacto →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
