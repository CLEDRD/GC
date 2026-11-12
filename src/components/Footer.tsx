import React from 'react';
import { OFFICIAL_LOGO_URL, DISTRITO_1501_LOGO_URL, IPMHU_LOGO_URL } from '../data/mockData';
import { Mail, School, Heart, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#123B50] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white p-2.5 rounded-2xl inline-block shadow-2xs">
                <img
                  src={OFFICIAL_LOGO_URL}
                  alt="Logo Generación Consciente"
                  className="h-11 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-2 rounded-2xl inline-block shadow-2xs">
                <img
                  src={DISTRITO_1501_LOGO_URL}
                  alt="Distrito 15-01"
                  className="h-10 w-auto object-contain"
                  title="Distrito Educativo 15 - 01"
                />
              </div>
              <div className="bg-white p-1.5 rounded-2xl inline-block shadow-2xs">
                <img
                  src={IPMHU_LOGO_URL}
                  alt="Instituto Politécnico Max Henríquez Ureña"
                  className="h-10 w-auto object-contain rounded-full"
                  title="Instituto Politécnico Max Henríquez Ureña"
                />
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Programa educativo y preventivo para adolescentes y jóvenes de los centros educativos pertenecientes al Distrito Educativo 15 - 01, República Dominicana.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <School className="w-4 h-4 text-[#62B6B0]" />
              <span>Instituto Politécnico Max Henríquez Ureña · Distrito 15 - 01</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2B84B]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quienes-somos')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Quiénes somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ejes')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Nuestros ejes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informate')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Infórmate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('actividades')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Actividades
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('participa')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Participa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Ejes Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#62B6B0]">
              Ejes Prioritarios
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>· Prevención de Vapeo y Sustancias</li>
              <li>· Salud Mental y Prevención del Suicidio</li>
              <li>· Educación Sexual Integral y Embarazo Adolescente</li>
              <li>· Prevención de Acoso Escolar (Bullying) y Violencia</li>
              <li>· Liderazgo Estudiantil y Agentes de Cambio</li>
            </ul>
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="mailto:generacionconsciente1501@outlook.com"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F2B84B] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>generacionconsciente1501@outlook.com</span>
              </a>
              <a
                href="https://www.instagram.com/_generacionconsciente_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#62B6B0] hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@_generacionconsciente_</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Generación Consciente · Distrito Educativo 15 - 01.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Iniciativa impulsada por Robelin Mejias y Jennyfer Lopez</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
