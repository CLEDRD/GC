import React, { useState } from 'react';
import { Actividad } from '../types';
import { ShieldCheck, Plus, Edit2, Trash2, X, Check, RotateCcw, Calendar, MapPin, User, Users } from 'lucide-react';
import { INITIAL_ACTIVITIES } from '../data/mockData';

interface AdminActividadesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activities: Actividad[];
  onUpdateActivities: (activities: Actividad[]) => void;
}

export const AdminActividadesModal: React.FC<AdminActividadesModalProps> = ({
  isOpen,
  onClose,
  activities,
  onUpdateActivities,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<Actividad>>({
    title: '',
    category: 'Taller',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM - 12:00 PM',
    location: 'Instituto Politécnico Max Henríquez Ureña',
    targetSchool: 'Centros del Distrito 15 - 01',
    description: '',
    facilitator: 'Robelin Mejias & Jennyfer Lopez',
    capacity: 100,
    registeredCount: 0,
    status: 'Próxima',
  });

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleStartCreate = () => {
    setEditingId(null);
    setFormData({
      title: '',
      category: 'Taller',
      date: new Date().toISOString().split('T')[0],
      time: '10:00 AM - 12:00 PM',
      location: 'Instituto Politécnico Max Henríquez Ureña',
      targetSchool: 'Centros del Distrito 15 - 01',
      description: '',
      facilitator: 'Robelin Mejias & Jennyfer Lopez',
      capacity: 100,
      registeredCount: 0,
      status: 'Próxima',
    });
    setIsCreating(true);
  };

  const handleStartEdit = (act: Actividad) => {
    setIsCreating(false);
    setEditingId(act.id);
    setFormData({ ...act });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Confirmas que deseas eliminar esta actividad del registro?')) {
      const updated = activities.filter((a) => a.id !== id);
      onUpdateActivities(updated);
      showNotification('Actividad eliminada correctamente.');
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('¿Restaurar las actividades a los datos originales de muestra?')) {
      onUpdateActivities(INITIAL_ACTIVITIES);
      showNotification('Actividades restauradas a los valores por defecto.');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title?.trim() || !formData.description?.trim()) {
      alert('Por favor completa el título y la descripción.');
      return;
    }

    if (isCreating) {
      const newAct: Actividad = {
        id: `act-${Date.now()}`,
        title: formData.title || 'Nueva Actividad',
        category: (formData.category as any) || 'Taller',
        date: formData.date || new Date().toISOString().split('T')[0],
        time: formData.time || '10:00 AM',
        location: formData.location || 'Distrito 15-01',
        targetSchool: formData.targetSchool || 'Centros Distritales',
        description: formData.description || '',
        facilitator: formData.facilitator || 'Coordinación Distrital',
        capacity: Number(formData.capacity) || 100,
        registeredCount: Number(formData.registeredCount) || 0,
        status: (formData.status as any) || 'Próxima',
      };
      const updated = [newAct, ...activities];
      onUpdateActivities(updated);
      setIsCreating(false);
      showNotification('Actividad creada exitosamente.');
    } else if (editingId) {
      const updated = activities.map((act) => {
        if (act.id === editingId) {
          return {
            ...act,
            ...formData,
            capacity: Number(formData.capacity) || act.capacity,
            registeredCount: Number(formData.registeredCount) || act.registeredCount,
          } as Actividad;
        }
        return act;
      });
      onUpdateActivities(updated);
      setEditingId(null);
      showNotification('Actividad actualizada exitosamente.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Administrative Identity */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#123B50] text-[#F2B84B]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Acceso Autorizado · Código 190609
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#123B50]">
                Panel de Administración de Actividades
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback message */}
        {feedback && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{feedback}</span>
          </div>
        )}

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleStartCreate}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#123B50] hover:bg-[#16899A] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Registrar Nueva Actividad</span>
            </button>
            <button
              type="button"
              onClick={handleResetDefaults}
              className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#123B50] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Predeterminadas</span>
            </button>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Total en sistema: {activities.length} actividades
          </span>
        </div>

        {/* Create / Edit Form */}
        {(isCreating || editingId) && (
          <form
            onSubmit={handleFormSubmit}
            className="bg-[#F5F7F8] p-6 rounded-2xl border border-slate-200 mb-8 space-y-4 animate-in fade-in"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h4 className="text-sm font-bold text-[#123B50]">
                {isCreating ? 'Crear Nueva Actividad' : 'Modificar Actividad Seleccionada'}
              </h4>
              <button
                type="button"
                onClick={() => {
                  setIsCreating(false);
                  setEditingId(null);
                }}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Cancelar
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Título</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ej: Taller de Prevención del Vapeo"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Categoría</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                >
                  <option value="Taller">Taller</option>
                  <option value="Charla">Charla</option>
                  <option value="Campaña">Campaña</option>
                  <option value="Encuentro">Encuentro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Fecha</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Horario</label>
                <input
                  type="text"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  placeholder="Ej: 09:30 AM - 12:00 PM"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Lugar / Sede</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Ej: Auditorio Politécnico Max Henríquez Ureña"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Población / Centros</label>
                <input
                  type="text"
                  value={formData.targetSchool}
                  onChange={(e) => setFormData({ ...formData, targetSchool: e.target.value })}
                  placeholder="Ej: Estudiantes de 3ro y 4to"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Facilitador / Expositor</label>
                <input
                  type="text"
                  value={formData.facilitator}
                  onChange={(e) => setFormData({ ...formData, facilitator: e.target.value })}
                  placeholder="Ej: Robelin Mejias y Lic. Invitado"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Cupo</label>
                  <input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estado</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
                  >
                    <option value="Próxima">Próxima</option>
                    <option value="En curso">En curso</option>
                    <option value="Realizada">Realizada</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Descripción de la Actividad</label>
              <textarea
                rows={3}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Detalla los objetivos, dinámica y dinámicas de grupo..."
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#16899A] focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsCreating(false);
                  setEditingId(null);
                }}
                className="px-4 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-[#16899A] hover:bg-[#123B50] rounded-lg transition-colors cursor-pointer"
              >
                {isCreating ? 'Guardar Nueva Actividad' : 'Guardar Cambios'}
              </button>
            </div>
          </form>
        )}

        {/* Existing Activities Table */}
        <div className="space-y-3">
          {activities.map((act) => (
            <div
              key={act.id}
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#16899A] bg-[#16899A]/10 px-2 py-0.5 rounded">
                    {act.category}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                      act.status === 'Próxima'
                        ? 'bg-blue-50 text-blue-700'
                        : act.status === 'En curso'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {act.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{act.date}</span>
                </div>
                <h4 className="text-sm font-bold text-[#123B50]">{act.title}</h4>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{act.location}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" />
                    <span>{act.facilitator}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-slate-400" />
                    <span>{act.capacity} cupos</span>
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => handleStartEdit(act)}
                  className="p-2 text-slate-600 hover:text-[#123B50] hover:bg-slate-100 rounded-lg transition-colors"
                  title="Editar actividad"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(act.id)}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Eliminar actividad"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Cambios sincronizados localmente</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 font-semibold text-[#123B50] hover:bg-slate-100 rounded-xl"
          >
            Cerrar Panel Administrativo
          </button>
        </div>
      </div>
    </div>
  );
};
