import React, { useState } from 'react';
import { Actividad } from '../types';
import { Calendar, MapPin, User, Users, Clock, ChevronRight, X, Instagram, Bell, Mail, ArrowUpRight } from 'lucide-react';

interface ActividadesSectionProps {
  activities: Actividad[];
  onOpenParticipation?: () => void;
}

export const ActividadesSection: React.FC<ActividadesSectionProps> = ({
  activities,
  onOpenParticipation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedStatus, setSelectedStatus] = useState<string>('Todas');
  const [modalActividad, setModalActividad] = useState<Actividad | null>(null);

  const categories = ['Todas', 'Taller', 'Charla', 'Campaña', 'Encuentro'];
  const statuses = ['Todas', 'Próxima', 'En curso', 'Realizada'];

  const filtered = activities.filter((act) => {
    const matchesCat = selectedCategory === 'Todas' || act.category === selectedCategory;
    const matchesStatus = selectedStatus === 'Todas' || act.status === selectedStatus;
    return matchesCat && matchesStatus;
  });

  return (
    <section id="actividades" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#16899A] block mb-2">
            Agenda Comunitaria e Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#123B50] mb-4">
            Actividades
          </h2>
          <p className="text-base sm:text-lg text-[#263746] leading-relaxed">
            Charlas, talleres vivenciales, campañas preventivas y encuentros juveniles que llevamos a cabo en los centros educativos pertenecientes al Distrito 15 - 01.
          </p>
        </div>

        {/* If no activities exist at all */}
        {activities.length === 0 ? (
          <div className="bg-[#F5F7F8] rounded-3xl p-8 sm:p-14 border border-slate-200/90 text-center max-w-4xl mx-auto shadow-sm">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#16899A]/15 text-[#16899A] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xs">
              <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-[#16899A]" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F2B84B]/20 text-[#123B50] text-xs font-bold uppercase tracking-wider mb-4 border border-[#F2B84B]/30">
              Aviso Oficial del Distrito 15 - 01
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123B50] tracking-tight mb-4">
              SIN ACTIVIDADES AÚN, MANTENTE ATENTO A NUESTRAS REDES SOCIALES.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
              En este momento nos encontramos coordinando las próximas jornadas de prevención, talleres vivenciales y encuentros formativos para los centros educativos del Distrito 15 - 01. Publicaremos las fechas, horarios y cupos de inscripción en nuestras redes oficiales.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://instagram.com/_generacionconsciente_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#123B50] to-[#16899A] hover:from-[#16899A] hover:to-[#123B50] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Instagram className="w-5 h-5 text-[#F2B84B]" />
                <span>Seguir en Instagram @_generacionconsciente_</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href="mailto:generacionconsciente1501@outlook.com"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#123B50] text-sm font-semibold border border-slate-200 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#16899A]" />
                <span>generacionconsciente1501@outlook.com</span>
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
              
              {/* Categories Filter */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F7F8] rounded-2xl border border-slate-200">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#123B50] text-white shadow-xs font-semibold'
                          : 'text-slate-600 hover:text-[#123B50]'
                      }`}
                    >
                      {cat === 'Todas' ? 'Todas las categorías' : cat}
                    </button>
                  );
                })}
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-medium text-slate-400">Estado:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-[#F5F7F8] border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#16899A]"
                >
                  {statuses.map((st) => (
                    <option key={st} value={st}>
                      {st === 'Todas' ? 'Todos los estados' : st}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Activities Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-16 bg-[#F5F7F8] rounded-3xl border border-slate-200 p-8">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-semibold text-[#123B50]">No hay actividades en este filtro</p>
                <p className="text-xs text-slate-500 mt-1">Selecciona otra categoría o estado para ver la programación.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setModalActividad(item)}
                    className="bg-[#F5F7F8] rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-[#16899A]/50 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      {/* Category and Status tags */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold text-[#16899A]">
                          {item.category}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                            item.status === 'Próxima'
                              ? 'bg-blue-100/70 text-blue-800'
                              : item.status === 'En curso'
                              ? 'bg-amber-100/70 text-amber-800'
                              : 'bg-emerald-100/70 text-emerald-800'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#123B50] group-hover:text-[#16899A] transition-colors leading-snug mb-3">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Metadata list */}
                      <div className="space-y-2 text-xs text-slate-600 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-[#16899A] shrink-0" />
                          <span className="font-mono">{item.date}</span>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span>{item.time}</span>
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#16899A] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item.location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-[#16899A] shrink-0" />
                          <span className="line-clamp-1">{item.facilitator}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Users className="w-3.5 h-3.5" />
                        <span>{item.capacity} cupos</span>
                      </div>
                      <span className="text-xs font-semibold text-[#16899A] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Detalles</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

      </div>

      {/* Activity Detail Modal */}
      {modalActividad && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setModalActividad(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-slate-100 gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-[#16899A]">{modalActividad.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-xs text-slate-400 font-mono">{modalActividad.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#123B50]">{modalActividad.title}</h3>
              </div>
              <button
                onClick={() => setModalActividad(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-700 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B50] mb-1">Descripción</h4>
                <p className="text-slate-600 leading-relaxed">{modalActividad.description}</p>
              </div>

              <div className="bg-[#F5F7F8] p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Lugar / Sede:</span>
                  <span className="font-semibold text-[#123B50] text-right">{modalActividad.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Horario:</span>
                  <span className="font-semibold text-[#123B50]">{modalActividad.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Población convocada:</span>
                  <span className="font-semibold text-[#123B50]">{modalActividad.targetSchool}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Facilitación:</span>
                  <span className="font-semibold text-[#123B50]">{modalActividad.facilitator}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Aforo aproximado:</span>
                  <span className="font-semibold text-[#123B50]">{modalActividad.capacity} participantes</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Coordinación: Distrito Educativo 15 - 01
              </span>
              <button
                type="button"
                onClick={() => setModalActividad(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#123B50] hover:bg-[#16899A] rounded-xl transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
