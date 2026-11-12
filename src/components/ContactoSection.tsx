import React, { useState } from 'react';
import { Mail, MapPin, School, PhoneCall, Send, CheckCircle2, Shield, AlertTriangle } from 'lucide-react';
import { DIRECTORY_EMERGENCY_CONTACTS, DISTRITO_1501_LOGO_URL, IPMHU_LOGO_URL } from '../data/mockData';

export const ContactoSection: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    emailOrPhone: '',
    schoolName: '',
    topic: 'Consulta General',
    message: '',
    isConfidential: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValues.name.trim() || !formValues.emailOrPhone.trim() || !formValues.message.trim()) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#16899A] block mb-2">
            Canales Oficiales y Soporte Inmediato
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#123B50] mb-4">
            Contacto
          </h2>
          <p className="text-base sm:text-lg text-[#263746] leading-relaxed">
            Ponte en comunicación con el equipo de Generación Consciente, solicita una visita a tu centro educativo o canaliza una situación de manera confidencial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Institutional Info & Contact Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Institutional Details Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#F5F7F8] rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#16899A]/10 text-[#16899A] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <img
                      src={DISTRITO_1501_LOGO_URL}
                      alt="Distrito 15-01"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Correo Electrónico Oficial
                  </div>
                  <a
                    href="mailto:generacionconsciente1501@outlook.com"
                    className="text-sm font-bold text-[#123B50] hover:text-[#16899A] break-all transition-colors"
                  >
                    generacionconsciente1501@outlook.com
                  </a>
                </div>
                <div className="text-[11px] text-slate-500 mt-2">
                  Distrito Educativo 15 - 01 · Santo Domingo Oeste
                </div>
              </div>

              <div className="p-5 bg-[#F5F7F8] rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#123B50]/10 text-[#123B50] flex items-center justify-center">
                      <School className="w-4 h-4 text-[#123B50]" />
                    </div>
                    <img
                      src={IPMHU_LOGO_URL}
                      alt="IPMHU"
                      className="h-8 w-auto object-contain rounded-full shadow-2xs"
                    />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Sede Coordinadora
                  </div>
                  <div className="text-xs font-bold text-[#123B50]">
                    Instituto Politécnico Max Henríquez Ureña
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Los Alcarrizos · Consejo Estudiantil Distrital
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="bg-[#F5F7F8] p-6 sm:p-8 rounded-3xl border border-slate-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#123B50] mb-1">
                  Envíanos un Mensaje
                </h3>
                <p className="text-xs text-slate-500">
                  Respondemos en un plazo máximo de 24 a 48 horas laborables.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#123B50]">¡Mensaje Recibido!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Hemos registrado tu solicitud para el equipo de Generación Consciente del Distrito 15-01. Te responderemos al contacto provisto.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormValues({
                        name: '',
                        emailOrPhone: '',
                        schoolName: '',
                        topic: 'Consulta General',
                        message: '',
                        isConfidential: false,
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-[#123B50] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Tu Nombre</label>
                      <input
                        type="text"
                        required
                        value={formValues.name}
                        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                        placeholder="Ej: Daniel Santos"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16899A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Correo o Teléfono</label>
                      <input
                        type="text"
                        required
                        value={formValues.emailOrPhone}
                        onChange={(e) => setFormValues({ ...formValues, emailOrPhone: e.target.value })}
                        placeholder="contacto@correo.com o (809)..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16899A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Centro Educativo (Distrito 15-01)</label>
                      <input
                        type="text"
                        value={formValues.schoolName}
                        onChange={(e) => setFormValues({ ...formValues, schoolName: e.target.value })}
                        placeholder="Ej: Politécnico Max Henríquez Ureña / Liceo..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16899A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Motivo / Asunto</label>
                      <select
                        value={formValues.topic}
                        onChange={(e) => setFormValues({ ...formValues, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16899A]"
                      >
                        <option value="Solicitar Charla o Taller en mi Centro">Solicitar Charla o Taller en mi Centro</option>
                        <option value="Denuncia Confidencial de Acoso">Denuncia Confidencial de Acoso</option>
                        <option value="Orientación sobre Vapeo o Sustancias">Orientación sobre Vapeo o Sustancias</option>
                        <option value="Salud Emocional y Apoyo">Salud Emocional y Apoyo</option>
                        <option value="Consulta General">Consulta General</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mensaje o Detalle</label>
                    <textarea
                      rows={4}
                      required
                      value={formValues.message}
                      onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                      placeholder="Explícanos tu inquietud, fecha propuesta para la actividad o situación que desees compartir..."
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16899A]"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="confidentialCheck"
                      checked={formValues.isConfidential}
                      onChange={(e) => setFormValues({ ...formValues, isConfidential: e.target.checked })}
                      className="rounded text-[#16899A] focus:ring-[#16899A]"
                    />
                    <label htmlFor="confidentialCheck" className="text-xs text-slate-600 cursor-pointer">
                      Tratar esta comunicación con estricta reserva y confidencialidad estudiantil.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#123B50] hover:bg-[#16899A] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Enviar Comunicación</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Direct Emergency Support Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#123B50] text-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F2B84B] uppercase tracking-wider mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>¿Situación Crítica o Urgente?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Líneas Gratuitas de Ayuda Nacional (R.D.)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Si tú o un compañero se encuentran en una crisis emocional aguda, ideación suicida o situación de peligro inminente, comunícate de inmediato con estos servicios profesionales gratuitos:
              </p>

              <div className="space-y-4">
                {DIRECTORY_EMERGENCY_CONTACTS.map((contact, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white/10 hover:bg-white/15 rounded-2xl border border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-semibold text-[#62B6B0] uppercase">
                        {contact.badge}
                      </span>
                      <span className="text-[11px] text-slate-300">
                        {contact.hours}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {contact.entity}
                    </h4>
                    
                    <p className="text-xs text-slate-300 mb-3">
                      {contact.description}
                    </p>

                    <a
                      href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#F2B84B] hover:underline"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Llamar: {contact.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* District Affirmation Box */}
            <div className="p-6 bg-[#F5F7F8] rounded-3xl border border-slate-200 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#16899A] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-[#123B50] block mb-1">Compromiso Ético y Legal</span>
                Generación Consciente actúa en apego al Código para el Sistema de Protección y los Derechos Fundamentales de Niños, Niñas y Adolescentes (Ley 136-03).
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
