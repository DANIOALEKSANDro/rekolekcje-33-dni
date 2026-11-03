import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, Volume2, Square, BookOpen, BookmarkCheck, ArrowRight, Info } from 'lucide-react';
import { RetreatDay } from '../data/retreatData';

interface MainTabProps {
  currentDay: RetreatDay;
  onSelectDay: (dayNum: number) => void;
  completedDays: number[];
  onToggleCompleteDay: (dayNum: number) => void;
  fontSize: number;
  onOpenPrayers: () => void;
}

export const MainTab: React.FC<MainTabProps> = ({
  currentDay,
  onSelectDay,
  completedDays,
  onToggleCompleteDay,
  fontSize,
  onOpenPrayers
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Zatrzymanie lektora przy zmianie dnia lub opuszczeniu zakładki
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentDay.day]);

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Twoja przeglądarka nie obsługuje czytania głosem.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    // Przygotowanie tekstu do odczytania: nagłówek, ewangelia, rozważanie i pytania
    const textToSpeak = `
      ${currentDay.header}.
      ${currentDay.patronage ? 'Wspomnienie: ' + currentDay.patronage + '.' : ''}
      ${currentDay.title}.
      Ewangelia: ${currentDay.gospelSig}.
      ${currentDay.paragraphs.join(' ')}.
      ${currentDay.questions.length > 0 ? 'Punkty do rachunku sumienia i modlitwy: ' + currentDay.questions.join('. ') : ''}
    `;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'pl-PL';
    utterance.rate = 0.88; // Spokojne tempo, komfortowe do modlitwy i dla seniorów

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const isCompleted = completedDays.includes(currentDay.day);
  const isConsecrationDay = currentDay.day === 34;

  const handlePrev = () => {
    if (currentDay.day > 1) {
      onSelectDay(currentDay.day - 1);
    }
  };

  const handleNext = () => {
    if (currentDay.day < 34) {
      onSelectDay(currentDay.day + 1);
    }
  };

  return (
    <div className="main-view" style={{ '--reader-font-size': `${fontSize}px` } as React.CSSProperties}>
      
      {/* Karta z wizerunkiem Matki Bożej Ostrobramskiej */}
      <div className="sacred-image-card">
        <img 
          src="/1.jpg" 
          alt="Matka Boża Ostrobramska – Matka Miłosierdzia" 
          className="sacred-image-thumb" 
        />
        <div className="sacred-image-info">
          <h4>Matka Boża Miłosierdzia</h4>
          <p>Ostra Brama w Wilnie • <em>«Wszystko z Maryją, przez Maryję i dla Maryi»</em></p>
        </div>
      </div>

      {/* Główna strona modlitewnika na dzisiejszy dzień */}
      <article className="prayer-book-page">
        
        {/* Pasek nawigacji między dniami */}
        <div className="day-stepper-bar">
          <button 
            className="step-btn" 
            onClick={handlePrev} 
            disabled={currentDay.day <= 1}
            aria-label="Poprzedni dzień"
          >
            <ChevronLeft size={18} />
            <span>Poprzedni</span>
          </button>

          <div className="day-badge-wrap">
            <div className="day-badge-title">
              {isConsecrationDay ? 'Dzień Ofiarowania' : `Dzień ${currentDay.day} z 33`}
            </div>
            <div className="day-badge-date">
              {currentDay.header}
            </div>
          </div>

          <button 
            className="step-btn" 
            onClick={handleNext} 
            disabled={currentDay.day >= 34}
            aria-label="Następny dzień"
          >
            <span>Następny</span>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Patron dnia / Wspomnienie liturgiczne */}
        {currentDay.patronage && (
          <div className="day-patronage-pill">
            <Info size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />
            {currentDay.patronage}
          </div>
        )}

        {/* Tytuł rozważania danego dnia */}
        <h2 className="reading-title" style={{ marginTop: currentDay.patronage ? '8px' : '16px' }}>
          {currentDay.title}
        </h2>

        {/* Przycisk lektora audio (czytanie na głos) */}
        <button 
          className={`audio-player-btn ${isSpeaking ? 'active' : ''}`}
          onClick={toggleSpeech}
          aria-label={isSpeaking ? "Zatrzymaj czytanie" : "Czytaj na głos"}
        >
          {isSpeaking ? <Square size={16} /> : <Volume2 size={16} />}
          <span>{isSpeaking ? 'Zatrzymaj czytanie' : 'Słuchaj (Czytaj na głos)'}</span>
        </button>

        {/* Sygnatura Ewangelii */}
        {currentDay.gospelSig && (
          <div className="scripture-badge">
            <BookOpen size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} />
            Ewangelia: <strong>{currentDay.gospelSig}</strong>
          </div>
        )}

        {/* Treść czytania i rozważania z Traktatu św. Ludwika Marii de Montfort */}
        <section className="reflection-section" aria-label="Czytanie i rozważanie">
          {currentDay.paragraphs.map((para, idx) => (
            <p key={idx} className="reflection-paragraph">
              {para}
            </p>
          ))}
        </section>

        {/* Punkty do rachunku sumienia / pytania do refleksji */}
        {currentDay.questions && currentDay.questions.length > 0 && (
          <section className="examination-box" aria-label="Rachunek sumienia">
            <h3 className="section-subtitle">
              <BookmarkCheck size={18} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} />
              Do rachunku sumienia i medytacji
            </h3>
            <ul className="examination-list">
              {currentDay.questions.map((q, idx) => {
                // Usuń ewentualną wiodącą kropkę/bullet z tekstu pytania, jeśli istnieje
                const cleanedQ = q.replace(/^[•\s\-\*]+/, '').trim();
                return (
                  <li key={idx} className="examination-item">
                    <span className="exam-bullet">•</span>
                    <span>{cleanedQ}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Modlitwy przeznaczone na ten dzień */}
        {currentDay.prayersList && currentDay.prayersList.length > 0 && (
          <section className="prayer-day-box" aria-label="Modlitwy na dziś">
            <div className="prayer-label">
              <BookOpen size={17} />
              <span>Modlitwy na dziś (z modlitewnika)</span>
            </div>
            <ul className="daily-prayers-checklist">
              {currentDay.prayersList.map((pr, idx) => (
                <li key={idx} className="daily-prayer-item">
                  <span>{pr}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '14px', textAlign: 'center' }}>
              <button 
                className="secondary-outline-btn"
                onClick={onOpenPrayers}
              >
                <span>Otwórz Skarbiec Modlitw</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </section>
        )}

        {/* Przycisk oznaczania dnia jako odmówiony (zapis w cache/localStorage) */}
        <div className="mark-done-container">
          <button 
            className={`mark-done-btn ${isCompleted ? 'completed' : ''}`}
            onClick={() => onToggleCompleteDay(currentDay.day)}
          >
            <Check size={20} strokeWidth={isCompleted ? 3 : 2} />
            <span>
              {isCompleted ? '✓ Odmówiono ten dzień (zapisano w pamięci)' : 'Oznacz ten dzień jako odmówiony'}
            </span>
          </button>
          <div className="mark-done-hint">
            {isCompleted 
              ? 'Ten dzień został zapisany w Twojej pamięci telefonu.' 
              : 'Po zakończeniu rozważania i modlitw dotknij przycisk, aby zachować postęp.'}
          </div>
        </div>

      </article>

    </div>
  );
};
