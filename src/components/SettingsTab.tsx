import React from 'react';
import { Type, Moon, Sun, Contrast, RotateCcw, Database, Calendar, Smartphone, Download } from 'lucide-react';

interface SettingsTabProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  theme: string;
  setTheme: (theme: string) => void;
  completedDays: number[];
  setCompletedDays: React.Dispatch<React.SetStateAction<number[]>>;
  currentActiveDayNum: number;
  setCurrentActiveDayNum: (day: number) => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  fontSize,
  setFontSize,
  theme,
  setTheme,
  completedDays,
  setCompletedDays,
  currentActiveDayNum,
  setCurrentActiveDayNum
}) => {
  const handleResetProgress = () => {
    if (window.confirm('Czy na pewno chcesz zresetować wszystkie zapisane postępy dni rekolekcji?')) {
      setCompletedDays([]);
      localStorage.removeItem('rekolekcje_completed_days');
      localStorage.removeItem('rekolekcje_completed_prayers');
      alert('Postępy zostały zresetowane.');
    }
  };

  return (
    <div className="main-view">

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text-gold)' }}>
          Ustawienia i Dostępność
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Dostosuj aplikację do swoich oczu i potrzeb
        </p>
      </div>

      {/* 1. Rozmiar tekstu */}
      <section className="settings-section">
        <h3 className="settings-heading">
          <Type size={18} />
          <span>Wielkość liter (Czytelność)</span>
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Wybierz rozmiar tekstu. Zmiana powiększy wszystkie czytania i modlitwy:
        </p>

        <div className="settings-btn-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { size: 18, label: 'Średni' },
            { size: 22, label: 'Duży' },
            { size: 26, label: 'Bardzo duży' },
            { size: 30, label: 'Olbrzymi' }
          ].map(opt => (
            <button
              key={opt.size}
              className={`settings-select-btn ${fontSize === opt.size ? 'active' : ''}`}
              onClick={() => setFontSize(opt.size)}
            >
              <div>{opt.label}</div>
              <div style={{ fontSize: '0.80rem', color: 'var(--text-muted)', marginTop: '2px' }}>{opt.size}px</div>
            </button>
          ))}
        </div>

        {/* Podgląd czcionki */}
        <div style={{ padding: '12px 14px', borderRadius: '6px', backgroundColor: 'var(--bg-card-subtle)', border: '1px dashed var(--border-card)' }}>
          <div style={{ fontSize: '0.80rem', textTransform: 'uppercase', color: 'var(--text-gold)', fontWeight: 700 }}>
            Podgląd tekstu:
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: `${fontSize}px`, lineHeight: 1.6, marginTop: '6px' }}>
            «Wielbi dusza moja Pana i raduje się duch mój w Bogu, moim Zbawcy».
          </p>
        </div>
      </section>

      {/* 2. Motyw kolorystyczny */}
      <section className="settings-section">
        <h3 className="settings-heading">
          <Sun size={18} />
          <span>Kolorystyka i Kontrast</span>
        </h3>

        <div className="settings-btn-grid">
          <button
            className={`settings-select-btn ${theme === 'parchment' ? 'active' : ''}`}
            onClick={() => setTheme('parchment')}
          >
            <Sun size={18} style={{ margin: '0 auto 4px auto' }} />
            <div>Pergamin</div>
            <div style={{ fontSize: '0.80rem', color: 'var(--text-muted)', marginTop: '2px' }}>Ciepły, papierowy</div>
          </button>

          <button
            className={`settings-select-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            <Moon size={18} style={{ margin: '0 auto 4px auto' }} />
            <div>Nocny</div>
            <div style={{ fontSize: '0.80rem', color: 'var(--text-muted)', marginTop: '2px' }}>Ciemny, spokojny</div>
          </button>

          <button
            className={`settings-select-btn ${theme === 'high-contrast' ? 'active' : ''}`}
            onClick={() => setTheme('high-contrast')}
          >
            <Contrast size={18} style={{ margin: '0 auto 4px auto' }} />
            <div>Kontrast</div>
            <div style={{ fontSize: '0.80rem', color: 'var(--text-muted)', marginTop: '2px' }}>Czerń na bieli</div>
          </button>
        </div>
      </section>

      {/* 3. Dzień rekolekcji */}
      <section className="settings-section">
        <h3 className="settings-heading">
          <Calendar size={18} />
          <span>Aktualny dzień rekolekcji</span>
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Obecnie czytasz: <strong>Dzień {currentActiveDayNum === 34 ? '34 (Akt Oddania)' : currentActiveDayNum}</strong>.
          Możesz szybko przejść do dowolnego dnia:
        </p>

        <div style={{ width: '100%', marginBottom: '8px' }}>
          <select
            value={currentActiveDayNum}
            onChange={(e) => setCurrentActiveDayNum(Number(e.target.value))}
            style={{
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border-card)',
              backgroundColor: 'var(--bg-card-subtle)',
              color: 'var(--text-main)',
              fontFamily: 'inherit',
              fontSize: '0.92rem',
              cursor: 'pointer',
              whiteSpace: 'normal',
              textOverflow: 'ellipsis'
            }}
          >
            {Array.from({ length: 33 }, (_, i) => i + 1).map(day => (
              <option key={day} value={day}>
                Dzień {day} z 33 {completedDays.includes(day) ? '✓ (Odmówiony)' : ''}
              </option>
            ))}
            <option value={34}>
              Dzień 34: 8 grudnia – Uroczysty Akt Oddania {completedDays.includes(34) ? '✓' : ''}
            </option>
          </select>
        </div>

        <button
          className="top-btn"
          style={{ width: '100%', marginTop: '8px', fontSize: '0.88rem', height: 'auto', padding: '10px 12px' }}
          onClick={() => {
            const now = new Date();
            const year = now.getFullYear();
            const start = new Date(year, 10, 5, 0, 0, 0);
            const end = new Date(year, 11, 8, 23, 59, 59);
            if (now >= start && now <= end) {
              const diffTime = now.getTime() - start.getTime();
              const day = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
              const clamped = Math.min(Math.max(day, 1), 34);
              setCurrentActiveDayNum(clamped);
              alert(`Ustawiono Dzień ${clamped} według dzisiejszej daty urządzenia.`);
            } else if (now.getMonth() === 10 && now.getDate() < 5) {
              const left = 5 - now.getDate();
              setCurrentActiveDayNum(1);
              alert(`Rekolekcje ruszają 5 listopada (za ${left} ${left === 1 ? 'dzień' : 'dni'}). Ustawiono Dzień 1 do przygotowania.`);
            } else {
              setCurrentActiveDayNum(1);
              alert('Poza oknem 5 XI – 8 XII. Ustawiono Dzień 1.');
            }
          }}
        >
          Ustaw automatycznie według daty urządzenia (5 XI – 8 XII)
        </button>
      </section>

      {/* 4. Instalacja na telefonie (PWA) */}
      <section className="settings-section">
        <h3 className="settings-heading">
          <Smartphone size={18} />
          <span>Aplikacja na telefon (PWA)</span>
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.5 }}>
          Możesz dodać aplikację do ekranu głównego telefonu (iPhone lub Android). Działa jak tradycyjna aplikacja z App Store / Google Play, bez paska adresu i z pełnym dostępem offline.
        </p>

        <button
          className="top-btn"
          style={{ 
            width: '100%', 
            height: 'auto', 
            padding: '12px 14px', 
            fontSize: '0.9rem', 
            fontWeight: 700, 
            gap: '8px', 
            color: 'var(--text-gold)', 
            borderColor: 'var(--border-gold)',
            backgroundColor: 'var(--color-primary-bg)'
          }}
          onClick={() => {
            localStorage.removeItem('rekolekcje_install_banner_dismissed');
            window.dispatchEvent(new CustomEvent('open-pwa-install'));
          }}
        >
          <Download size={18} />
          <span>Zainstaluj lub zobacz instrukcję (Android / iPhone)</span>
        </button>
      </section>

      {/* 5. Pamięć i postępy (Cache storage) */}
      <section className="settings-section">
        <h3 className="settings-heading">
          <Database size={18} />
          <span>Pamięć aplikacji (Cache / LocalStorage)</span>
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.5 }}>
          Wszystkie Twoje oznaczone dni rekolekcji są bezpiecznie zapisywane w pamięci tej przeglądarki na telefonie.
          Nie potrzebujesz logowania ani konta internetowego.
        </p>

        <div style={{ backgroundColor: 'var(--bg-card-subtle)', padding: '10px 14px', borderRadius: '6px', fontSize: '0.88rem', marginBottom: '14px' }}>
          <div>Ukończone dni rekolekcji: <strong>{completedDays.length} z 33</strong></div>
        </div>

        <button
          className="danger-btn"
          onClick={handleResetProgress}
        >
          <RotateCcw size={16} />
          <span>Zresetuj wszystkie zapisane postępy</span>
        </button>
      </section>

    </div>
  );
};
