export interface StatisticItem {
  id: string;
  categoryTag: string;
  number: string;
  title: string;
  highlightText: string;
  fullDescription: string;
  source: string;
  contextPill: string;
}

export interface EjeThematico {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  color: string;
  keyStats: string;
  mythsAndFacts: {
    myth: string;
    reality: string;
  }[];
  warningSigns: string[];
  actionSteps: string[];
  targetAudience: string;
}

export interface RecursoEducativo {
  id: string;
  title: string;
  category: 'Artículo' | 'Investigación' | 'Guía Práctica' | 'Infografía';
  ejeId: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface Actividad {
  id: string;
  title: string;
  category: 'Charla' | 'Taller' | 'Campaña' | 'Encuentro';
  date: string;
  time: string;
  location: string;
  targetSchool: string;
  description: string;
  facilitator: string;
  capacity: number;
  registeredCount: number;
  status: 'Próxima' | 'En curso' | 'Realizada';
}

export interface FounderPhotoSlot {
  id: string;
  label: string;
  fileName: string;
  caption: string;
  defaultImage: string;
  customImage?: string;
}

export interface Founder {
  name: string;
  role: string;
  school: string;
  districtRole: string;
  bio: string;
  quote: string;
  vision: string;
  achievements: string[];
  photos: FounderPhotoSlot[];
}
