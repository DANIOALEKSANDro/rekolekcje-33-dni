import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, BookOpen } from 'lucide-react';
import { ALL_PRAYERS_DATA } from '../data/prayersData';

interface PrayersTabProps {
  fontSize: number;
  completedPrayers: string[];
  onToggleCompletePrayer: (prayerId: string) => void;
}

export const PrayersTab: React.FC<PrayersTabProps> = ({
  fontSize,
  completedPrayers,
  onToggleCompletePrayer
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('akt-ofiarowania');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="main-view" style={{ '--reader-font-size': `${fontSize}px` } as React.CSSProperties}>
      
      {/* Obraz: Maryja na tronie */}
      <div className="prayers-hero-image-wrap">
        <img 
          src="/maryja-na-tronie.jpg" 
          alt="Maryja Królowa na tronie" 
          className="prayers-hero-image"
        />
      </div>

      {/* Nagłówek skarbca modlitw */}
      <div style={{ textAlign: 'center', marginBottom: '18px' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--text-gold)', marginBottom: '4px' }}>
          Skarbiec Modlitw Rekolekcyjnych
        </h2>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
          Wszystkie 11 modlitw z oficjalnego przygotowania (Warszawa 2026r.)
        </p>
      </div>

      {/* Lista modlitw z PDF */}
      <div className="prayers-accordion">
        {ALL_PRAYERS_DATA.map((prayer) => {
          const isExpanded = expandedId === prayer.id;
          const isCompleted = completedPrayers.includes(prayer.id);

          return (
            <section 
              key={prayer.id} 
              className={`stage-block prayer-stage-block ${isExpanded ? 'expanded' : ''}`}
            >
              <div 
                className="stage-header prayer-stage-header" 
                onClick={() => toggleExpand(prayer.id)}
                role="button"
                tabIndex={0}
              >
                <div className="prayer-stage-left">
                  <div className={`prayer-check-circle ${isCompleted ? 'completed' : ''}`}>
                    {isCompleted ? <Check size={16} strokeWidth={3} /> : <BookOpen size={16} />}
                  </div>
                  <div>
                    <h3 className="stage-title prayer-stage-title">{prayer.title}</h3>
                    <div className="stage-subtitle prayer-stage-author">{prayer.author}</div>
                  </div>
                </div>

                <div className="prayer-stage-right">
                  <button
                    className={`prayer-check-btn ${isCompleted ? 'completed' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleCompletePrayer(prayer.id);
                    }}
                    title={isCompleted ? "Oznacz jako nieodmówioną" : "Zapisz jako odmówioną"}
                    aria-label="Oznacz modlitwę"
                  >
                    <Check size={16} strokeWidth={isCompleted ? 3 : 2} />
                  </button>

                  <button className="top-btn" style={{ padding: '0 8px', height: '34px' }} aria-label={isExpanded ? "Zwiń modlitwę" : "Rozwiń modlitwę"}>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="prayer-content-wrap">
                  <div className="prayer-full-text">
                    {prayer.text.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} style={{ marginBottom: '14px', whiteSpace: 'pre-line' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="prayer-bottom-action">
                    <button
                      className={`mark-done-btn ${isCompleted ? 'completed' : ''}`}
                      onClick={() => onToggleCompletePrayer(prayer.id)}
                    >
                      <Check size={18} strokeWidth={isCompleted ? 3 : 2} />
                      <span>{isCompleted ? '✓ Odmówiono tę modlitwę (zapisano)' : 'Oznacz jako odmówioną'}</span>
                    </button>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>

    </div>
  );
};
