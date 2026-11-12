import React, { useState } from 'react';
import { Search, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { OFFICIAL_LOGO_URL, ADMIN_SECRET_CODE } from '../data/mockData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdminModal: () => void;
  onSearchQuery?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAdminModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [secretUnlockedNotice, setSecretUnlockedNotice] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes somos' },
    { id: 'ejes', label: 'Nuestros ejes' },
    { id: 'informate', label: 'Infórmate' },
    { id: 'actividades', label: 'Actividades' },
    { id: 'participa', label: 'Participa' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchVal.trim();
    if (trimmed === ADMIN_SECRET_CODE) {
      setSecretUnlockedNotice(true);
      setTimeout(() => {
        setSearchModalOpen(false);
        setSecretUnlockedNotice(false);
        setSearchVal('');
        onOpenAdminModal();
      }, 700);
      return;
    }

    // Normal search behaviour: navigate to informate with search
    if (trimmed.length > 0) {
      setSearchModalOpen(false);
      onNavigate('informate');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    if (val.trim() === ADMIN_SECRET_CODE) {
      setSecretUnlockedNotice(true);
      setTimeout(() => {
        setSearchModalOpen(false);
        setSecretUnlockedNotice(false);
        setSearchVal('');
        onOpenAdminModal();
      }, 700);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F5F7F8]/95 backdrop-blur-md border-b border-[#123B50]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            
            {/* Zone 1: Brand Logo */}
            <div className="flex items-center">
              <button
                onClick={() => onNavigate('inicio')}
                className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16899A] rounded-lg p-1 cursor-pointer"
              >
                <img
                  src={OFFICIAL_LOGO_URL}
                  alt="Logo Generación Consciente"
                  className="h-11 sm:h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain transition-transform group-hover:scale-102"
                />
              </button>
            </div>

            {/* Zone 2: 4-7 Clean Single-line Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-[#263746]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`whitespace-nowrap transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16899A] ${
                      isActive
                        ? 'text-[#16899A] font-semibold'
                        : 'text-[#263746] hover:text-[#123B50]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16899A] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Search Action (Lupa) and Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Lupa button */}
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                aria-label="Abrir buscador"
                title="Buscar en el portal"
                className="p-2.5 text-[#123B50] hover:text-[#16899A] hover:bg-[#123B50]/5 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16899A]"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Primary Call to Action */}
              <button
                onClick={() => onNavigate('contacto')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#123B50] hover:bg-[#16899A] rounded-xl transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16899A]"
              >
                <span>Orientación 15-01</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#123B50] hover:bg-[#123B50]/5 rounded-xl transition-colors focus:outline-none"
                aria-label="Menú principal"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#123B50]/10 bg-[#F5F7F8] px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#16899A]/10 text-[#16899A] font-semibold'
                        : 'text-[#263746] hover:bg-[#123B50]/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[#123B50]/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchModalOpen(true);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#123B50] bg-white border border-[#123B50]/15 rounded-lg"
                >
                  <Search className="w-4 h-4 text-[#16899A]" />
                  <span>Buscar en la web...</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('contacto');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 text-xs font-semibold text-white bg-[#123B50] rounded-lg"
                >
                  Canales de Ayuda e Información
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal (with the hidden secret logic) */}
      {searchModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSearchModalOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Search className="w-4 h-4 text-[#16899A]" />
                <span>Buscador del Portal Educativo</span>
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="p-6">
              <div className="relative">
                <input
                  type="text"
                  autoFocus
                  value={searchVal}
                  onChange={handleInputChange}
                  placeholder="Escribe el tema, artículo, eje o palabra clave..."
                  className="w-full pl-11 pr-24 py-3.5 bg-[#F5F7F8] border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16899A] text-sm"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#123B50] hover:bg-[#16899A] rounded-lg transition-colors"
                >
                  Buscar
                </button>
              </div>

              {secretUnlockedNotice ? (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs font-medium animate-in fade-in">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Acceso autorizado detectado. Abriendo módulo de administración...</span>
                </div>
              ) : (
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="text-slate-400 font-medium">Sugerencias:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchModalOpen(false);
                      onNavigate('ejes');
                    }}
                    className="hover:text-[#16899A] underline underline-offset-2"
                  >
                    Vapeo
                  </button>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchModalOpen(false);
                      onNavigate('ejes');
                    }}
                    className="hover:text-[#16899A] underline underline-offset-2"
                  >
                    Salud Mental
                  </button>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchModalOpen(false);
                      onNavigate('ejes');
                    }}
                    className="hover:text-[#16899A] underline underline-offset-2"
                  >
                    Acoso Escolar
                  </button>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchModalOpen(false);
                      onNavigate('informate');
                    }}
                    className="hover:text-[#16899A] underline underline-offset-2"
                  >
                    Artículos
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};
