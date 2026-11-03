import React, { useState } from 'react';
import { Check, Star, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { RETREAT_DAYS, STAGES_DATA, CONSECRATION_DAY_DATA, WSTEP_DATA, SKROTY_DATA, BIBLIOGRAFIA_DATA } from '../data/retreatData';

interface CalendarTabProps {
  onSelectDay: (dayNum: number) => void;
  completedDays: number[];
  onToggleCompleteDay: (dayNum: number) => void;
  currentActiveDayNum: number;
  fontSize: number;
}

export const CalendarTab: React.FC<CalendarTabProps> = ({
  onSelectDay,
  completedDays,
  onToggleCompleteDay,
  currentActiveDayNum,
  fontSize
}) => {
  // 'wstep' | 'skroty' | stageId (0, 1, 2, 3) | null
  const [expandedSection, setExpandedSection] = useState<string | number | null>(null);

  const toggleSection = (section: string | number, elementId?: string) => {
    setExpandedSection(prev => {
      const next = prev === section ? null : section;
      if (next !== null && elementId) {
        setTimeout(() => {
          const el = document.getElementById(elementId);
          if (el) {
            const yOffset = -70;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          }
        }, 60);
      }
      return next;
    });
  };

  const completedCount = completedDays.filter(d => d >= 1 && d <= 33).length;
  const percentage = Math.round((completedCount / 33) * 100);

  // Group days by stage
  const stagesWithDays = STAGES_DATA.map(stage => {
    return {
      ...stage,
      days: RETREAT_DAYS.filter(d => d.stageId === stage.id)
    };
  });

  return (
    <div className="main-view" style={{ '--reader-font-size': `${fontSize}px` } as React.CSSProperties}>

      {/* Karta postępu rekolekcji */}
      <section className="progress-summary-card">
        <h3 className="progress-title">Postęp Rekolekcji 33 Dni</h3>
        <p className="progress-text">
          Ukończono {completedCount} z 33 dni ({percentage}%)
        </p>
        <div className="progress-bar-track" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
        </div>
      </section>

      {/* Wstęp do rekolekcji i przypisy książki */}
      <section id="section-wstep" className="stage-block" style={{ marginBottom: '16px' }}>
        <div
          className="stage-header"
          onClick={() => toggleSection('wstep', 'section-wstep')}
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            <h4 className="stage-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={18} />
              <span>Wstęp do 33-dniowego przygotowania</span>
            </h4>
            <div className="stage-subtitle">{WSTEP_DATA.subtitle} • O nabożeństwie św. Ludwika</div>
          </div>
          <button className="top-btn" aria-label="Rozwiń wstęp">
            {expandedSection === 'wstep' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {expandedSection === 'wstep' && (
          <div style={{ padding: '16px', borderTop: '1px solid var(--border-card)' }}>
            <blockquote className="motto-card">
              «Wezwanie <strong>„Królowa Serc”</strong>, tak drogie Montfortowi, wyraźnie ukazuje dobrowolny charakter, wolność będącą owocem miłości, w relacji, jaka powstaje pomiędzy Maryją, a osobą poświęcającą się Jej Synowi za Jej pośrednictwem.»
            </blockquote>
            {WSTEP_DATA.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="reflection-paragraph"
                style={{ marginBottom: '12px' }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            {WSTEP_DATA.footnote && (
              <div className="footnote-box" style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px dashed var(--border-card)', fontSize: 'calc(var(--reader-font-size) * 0.78)', color: 'var(--text-muted)' }}>
                {WSTEP_DATA.footnote}
              </div>
            )}
          </div>
        )}
      </section>

      {/* 4 Etapy rekolekcji */}
      {stagesWithDays.map((stage) => {
        const isExpanded = expandedSection === stage.id;
        const stageDomId = `section-stage-${stage.id}`;
        return (
          <section key={stage.id} id={stageDomId} className="stage-block">
            <div
              className="stage-header"
              onClick={() => toggleSection(stage.id, stageDomId)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 className="stage-title">{stage.name}</h4>
                  <div className="stage-subtitle">{stage.daysRange}</div>
                </div>
                <button className="top-btn" aria-label="Rozwiń szczegóły etapu">
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              <div className="stage-intencja-text">
                Intencja: {stage.intencja}
              </div>
            </div>

            {/* Rozszerzone wytyczne etapu z PDF i przypisami */}
            {isExpanded && (
              <div style={{ padding: '14px 16px', backgroundColor: 'var(--bg-card-subtle)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
                <div style={{ fontWeight: 600, fontSize: 'calc(var(--reader-font-size) * 0.86)', marginBottom: '8px', color: 'var(--text-gold)' }}>
                  Wskazania św. Ludwika Marii de Montfort dla tego etapu:
                </div>
                {stage.description.map((p, idx) => (
                  <p
                    key={idx}
                    style={{ fontSize: 'calc(var(--reader-font-size) * 0.9)', lineHeight: 1.65, marginBottom: '10px', color: 'var(--text-main)', fontFamily: 'var(--font-serif)' }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
                {stage.footnote && (
                  <div style={{ fontSize: 'calc(var(--reader-font-size) * 0.78)', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '6px' }}>
                    {stage.footnote}
                  </div>
                )}
                {stage.additionalReading && (
                  <div style={{ marginTop: '10px', padding: '10px 14px', borderRadius: '4px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-card)', fontSize: 'calc(var(--reader-font-size) * 0.84)', color: 'var(--text-main)' }}>
                    <strong>Lektura duchowa:</strong> {stage.additionalReading}
                  </div>
                )}
              </div>
            )}

            {/* Lista dni tego etapu */}
            <div>
              {stage.days.map((item) => {
                const isCompleted = completedDays.includes(item.day);
                const isCurrent = item.day === currentActiveDayNum;

                return (
                  <div
                    key={item.day}
                    className={`day-row-item ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''}`}
                    onClick={() => onSelectDay(item.day)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="day-row-left">
                      <div className={`day-number-circle ${isCompleted ? 'completed' : ''}`}>
                        {isCompleted ? <Check size={16} strokeWidth={3} /> : item.day}
                      </div>
                      <div className="day-info-text">
                        <div className="day-info-title">{item.title}</div>
                        <div className="day-info-meta">
                          {item.header} {item.patronage ? `• ${item.patronage}` : ''}
                        </div>
                      </div>
                    </div>

                    <button
                      className={`check-toggle-btn ${isCompleted ? 'completed' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCompleteDay(item.day);
                      }}
                      title={isCompleted ? "Oznacz jako nieodmówione" : "Oznacz jako odmówione"}
                      aria-label={`Oznacz dzień ${item.day}`}
                    >
                      <Check size={16} strokeWidth={isCompleted ? 3 : 2} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Dzień 34: Uroczysty Akt Ofiarowania (8 grudnia) */}
      <section className="stage-block consecration-block">
        <div
          className={`day-row-item consecration-row ${currentActiveDayNum === 34 ? 'current' : ''} ${completedDays.includes(34) ? 'completed' : ''}`}
          onClick={() => onSelectDay(34)}
          role="button"
          tabIndex={0}
        >
          <div className="day-row-left">
            <div className={`day-number-circle gold ${completedDays.includes(34) ? 'completed' : ''}`}>
              {completedDays.includes(34) ? <Check size={16} strokeWidth={3} /> : <Star size={16} />}
            </div>
            <div className="day-info-text">
              <div className="day-info-title">{CONSECRATION_DAY_DATA.title}</div>
              <div className="day-info-meta">8 grudnia • Uroczystość Niepokalanego Poczęcia NMP</div>
            </div>
          </div>

          <button
            className={`check-toggle-btn ${completedDays.includes(34) ? 'completed' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompleteDay(34);
            }}
            title={completedDays.includes(34) ? "Oznacz jako nieodmówione" : "Oznacz jako odmówione"}
            aria-label="Oznacz dzień ofiarowania"
          >
            <Check size={16} strokeWidth={completedDays.includes(34) ? 3 : 2} />
          </button>
        </div>
      </section>

      {/* Wykaz skrótów i bibliografia */}
      <section id="section-skroty" className="stage-block" style={{ marginTop: '16px' }}>
        <div
          className="stage-header"
          onClick={() => toggleSection('skroty', 'section-skroty')}
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            <h4 className="stage-title" style={{ fontSize: '0.95rem' }}>Wykaz skrótów pism i bibliografia</h4>
            <div className="stage-subtitle">Oznaczenia dzieł św. Ludwika Marii de Montfort</div>
          </div>
          <button className="top-btn" aria-label="Rozwiń skróty">
            {expandedSection === 'skroty' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {expandedSection === 'skroty' && (
          <div style={{ padding: '14px 16px', borderTop: '1px solid var(--border-card)', fontSize: '0.88rem' }}>
            <div style={{ fontWeight: 600, color: 'var(--text-gold)', marginBottom: '8px' }}>
              Skróty dzieł cytowanych w rozważaniach:
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
              {SKROTY_DATA.map((s, idx) => (
                <li key={idx} style={{ padding: '4px 0', borderBottom: '1px dashed var(--border-card)' }}>
                  <strong>{s.abbr}</strong> – {s.name}
                </li>
              ))}
            </ul>

            <div style={{ fontWeight: 600, color: 'var(--text-gold)', marginBottom: '8px' }}>
              Bibliografia i źródła tekstu:
            </div>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0 }}>
              {BIBLIOGRAFIA_DATA.map((b, idx) => (
                <li key={idx} style={{ padding: '3px 0', color: 'var(--text-muted)' }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

    </div>
  );
};
