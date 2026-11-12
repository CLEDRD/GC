import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RotatingStats } from './components/RotatingStats';
import { QuienesSomosSection } from './components/QuienesSomosSection';
import { EjesSection } from './components/EjesSection';
import { InformateSection } from './components/InformateSection';
import { ActividadesSection } from './components/ActividadesSection';
import { ParticipaSection } from './components/ParticipaSection';
import { ContactoSection } from './components/ContactoSection';
import { Footer } from './components/Footer';
import { AdminActividadesModal } from './components/AdminActividadesModal';
import { INITIAL_ACTIVITIES } from './data/mockData';
import { Actividad } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [activities, setActivities] = useState<Actividad[]>(() => {
    try {
      localStorage.removeItem('gc_activities_data'); // Clear previous mock activities
      const stored = localStorage.getItem('gc_activities_data_v3');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return INITIAL_ACTIVITIES;
  });

  const handleUpdateActivities = (newActivities: Actividad[]) => {
    setActivities(newActivities);
    try {
      localStorage.setItem('gc_activities_data_v3', JSON.stringify(newActivities));
    } catch (e) {
      console.error('Error saving activities to localStorage', e);
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'quienes-somos', 'ejes', 'informate', 'actividades', 'participa', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F7F8] text-[#123B50] flex flex-col selection:bg-[#62B6B0]/30 selection:text-[#123B50]">
      {/* Top Bar Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      <main className="flex-1">
        {/* Inicio: Presentación, eslogan y mensaje principal */}
        <div id="inicio">
          <HeroSection onNavigate={handleNavigate} />
          
          {/* Cifras en grande con texto sobre la cifra que van cambiando automáticamente */}
          <RotatingStats onLearnMore={() => handleNavigate('ejes')} />
        </div>

        {/* Quiénes somos: descripción, justificación, misión, visión, objetivos, Robelin & Jennyfer, slots ROBELIN1..3 y JENNYFER1..3 */}
        <QuienesSomosSection />

        {/* Nuestros ejes: problemáticas que aborda el programa */}
        <EjesSection />

        {/* Infórmate: artículos, estadísticas, investigaciones y recursos educativos */}
        <InformateSection />

        {/* Actividades: charlas, talleres, campañas y encuentros */}
        <ActividadesSection
          activities={activities}
          onOpenParticipation={() => handleNavigate('participa')}
        />

        {/* Participa: mecanismos para involucrarse + aviso MANTENIMIENTO */}
        <ParticipaSection onNavigateToContact={() => handleNavigate('contacto')} />

        {/* Contacto: generacionconsciente1501@outlook.com + institucional */}
        <ContactoSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Hidden Admin Modal for Actividades (Unlocked via search lupa with code 190609) */}
      <AdminActividadesModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        activities={activities}
        onUpdateActivities={handleUpdateActivities}
      />
    </div>
  );
}
