import React, { useState } from 'react';
import { RECURSOS_EDUCATIVOS } from '../data/mockData';
import { RecursoEducativo } from '../types';
import { Search, BookOpen, FileText, CheckCircle2, X, Printer, Share2 } from 'lucide-react';

export const InformateSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<RecursoEducativo | null>(null);
  const [copiedNotice, setCopiedNotice] = useState(false);

  const categories = ['Todos', 'Guía Práctica', 'Artículo', 'Investigación', 'Infografía'];

  const filteredResources = RECURSOS_EDUCATIVOS.filter((item) => {
    const matchesCat = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="informate" className="py-16 sm:py-24 bg-[#F5F7F8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#16899A] block mb-2">
            Biblioteca de Aprendizaje y Evidencia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#123B50] mb-4">
            Infórmate
          </h2>
          <p className="text-base sm:text-lg text-[#263746] leading-relaxed">
            Artículos formativos, estadísticas, investigaciones y guías prácticas para empoderar a la comunidad educativa con conocimiento sustentado.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#123B50] text-white shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-[#123B50] hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar recursos, temas..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16899A]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Resources Cards Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-[#123B50]">No se encontraron recursos</p>
            <p className="text-xs text-slate-500 mt-1">Intenta con otra palabra clave o selecciona otra categoría.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => (
              <article
                key={item.id}
                onClick={() => setActiveArticle(item)}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-[#16899A]/50 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Zero-Pill Unboxed Clean Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-[#16899A]">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#123B50] group-hover:text-[#16899A] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 truncate max-w-[180px]">
                    {item.author}
                  </span>
                  <span className="text-xs font-semibold text-[#16899A] group-hover:underline flex items-center gap-1">
                    <span>Leer completo</span>
                    <span>→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100 gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-semibold text-[#16899A]">{activeArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#123B50] leading-tight">
                  {activeArticle.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Por: {activeArticle.author}</p>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Summary Deck */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 mb-6 text-sm text-[#263746] font-medium leading-relaxed">
              {activeArticle.summary}
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed max-w-prose">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-8 p-5 bg-[#123B50]/5 rounded-2xl border border-[#123B50]/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B50] mb-3 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#16899A]" />
                <span>Puntos Clave para Recordar</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeArticle.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16899A] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reader Footer Controls */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-[#123B50] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedNotice ? 'Enlace copiado!' : 'Compartir'}</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-[#123B50] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir ficha</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#123B50] hover:bg-[#16899A] rounded-xl transition-colors cursor-pointer"
              >
                Cerrar lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
