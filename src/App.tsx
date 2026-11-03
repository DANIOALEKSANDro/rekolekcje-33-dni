import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Heart, Settings, Sun, Moon, Contrast } from 'lucide-react';
import { RETREAT_DAYS, CONSECRATION_DAY_DATA, RetreatDay } from './data/retreatData';
import { MainTab } from './components/MainTab';
import { CalendarTab } from './components/CalendarTab';
import { PrayersTab } from './components/PrayersTab';
import { SettingsTab } from './components/SettingsTab';

export const App: React.FC = () => {
  // Navigation tabs: 'today' | 'calendar' | 'prayers' | 'settings'
  const [activeTab, setActiveTab] = useState<'today' | 'calendar' | 'prayers' | 'settings'>('today');

  // Completed days (stored in browser localStorage cache)
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('rekolekcje_completed_days');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Completed Marian prayers from treasury (stored in localStorage cache)
  const [completedPrayers, setCompletedPrayers] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rekolekcje_completed_prayers');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Font size: default 20px (large, senior-accessible)
  const [fontSize, setFontSize] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('rekolekcje_font_size');
      return saved ? Number(saved) : 20;
    } catch {
      return 20;
    }
  });

  // Theme: 'parchment' (default, soft warm prayer book) | 'dark' | 'high-contrast'
  const [theme, setTheme] = useState<string>(() => {
    try {
      return localStorage.getItem('rekolekcje_theme') || 'parchment';
    } catch {
      return 'parchment';
    }
  });

  // Calculate current active day based on today's calendar date OR saved preference
  const [currentActiveDayNum, setCurrentActiveDayNum] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('rekolekcje_active_day');
      if (saved) return Number(saved);

      const now = new Date();
      const currentYear = now.getFullYear();
      const startDate = new Date(currentYear, 10, 5, 0, 0, 0); // 5 listopada
      const consecrationDate = new Date(currentYear, 11, 8, 23, 59, 59); // 8 grudnia

      // Jeśli dzisiejszy dzień mieści się w tradycyjnym oknie rekolekcji (5 XI - 8 XII)
      if (now >= startDate && now <= consecrationDate) {
        const diffTime = now.getTime() - startDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
        return Math.min(diffDays, 34);
      }

      return 1; // Domyślnie Dzień 1
    } catch {
      return 1;
    }
  });

  // Save changes to localStorage (cache storage)
  useEffect(() => {
    try {
      localStorage.setItem('rekolekcje_completed_days', JSON.stringify(completedDays));
    } catch (e) {
      console.error(e);
    }
  }, [completedDays]);

  useEffect(() => {
    try {
      localStorage.setItem('rekolekcje_completed_prayers', JSON.stringify(completedPrayers));
    } catch (e) {
      console.error(e);
    }
  }, [completedPrayers]);

  useEffect(() => {
    try {
      localStorage.setItem('rekolekcje_font_size', String(fontSize));
    } catch (e) {
      console.error(e);
    }
  }, [fontSize]);

  useEffect(() => {
    try {
      localStorage.setItem('rekolekcje_theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('rekolekcje_active_day', String(currentActiveDayNum));
    } catch (e) {
      console.error(e);
    }
  }, [currentActiveDayNum]);

  // Przełączanie aktywnej zakładki ze zresetowaniem pozycji przewijania do samej góry
  const handleTabChange = (tab: 'today' | 'calendar' | 'prayers' | 'settings') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Toggle completed status for a day
  const toggleCompleteDay = (day: number) => {
    setCompletedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  // Toggle completed status for a prayer from treasury
  const toggleCompletePrayer = (prayerId: string) => {
    setCompletedPrayers(prev => 
      prev.includes(prayerId) ? prev.filter(p => p !== prayerId) : [...prev, prayerId]
    );
  };

  // Select day and navigate to Today reading
  const handleSelectDay = (dayNum: number) => {
    setCurrentActiveDayNum(dayNum);
    handleTabChange('today');
  };

  // Resolve current day object
  const currentDayReading: RetreatDay = currentActiveDayNum === 34 
    ? CONSECRATION_DAY_DATA
    : (RETREAT_DAYS.find(d => d.day === currentActiveDayNum) || RETREAT_DAYS[0]);

  return (
    <div className="app-container">
      
      {/* Pasek górny (Nagłówek) */}
      <header className="top-nav">
        <div className="brand-wrapper" onClick={() => handleTabChange('today')}>
          <img 
            src="/1.jpg" 
            alt="Matka Boża Ostrobramska" 
            className="brand-portrait" 
          />
          <div>
            <h1 className="brand-title">Rekolekcje z Maryją</h1>
            <div className="brand-subtitle">
              {currentActiveDayNum === 34 ? 'Dzień Ofiarowania (8 XII)' : `Dzień ${currentActiveDayNum} z 33`}
            </div>
          </div>
        </div>

        {/* Szybkie narzędzia: powiększanie czcionki i motyw */}
        <div className="top-actions">
          <button
            className="top-btn"
            onClick={() => {
              const nextTheme = theme === 'parchment' ? 'dark' : theme === 'dark' ? 'high-contrast' : 'parchment';
              setTheme(nextTheme);
            }}
            title="Zmień motyw / kontrast"
            aria-label="Zmień kontrast"
          >
            {theme === 'parchment' ? <Sun size={17} /> : theme === 'dark' ? <Moon size={17} /> : <Contrast size={17} />}
          </button>

          <button
            className="top-btn"
            onClick={() => {
              const nextSize = fontSize >= 30 ? 18 : fontSize + 4;
              setFontSize(nextSize);
            }}
            title={`Wielkość liter: ${fontSize}px (dotknij, aby powiększyć)`}
            aria-label="Powiększ tekst"
          >
            A+
          </button>
        </div>
      </header>

      {/* Widok główny (zakładki) */}
      <main style={{ flex: 1 }}>
        {activeTab === 'today' && (
          <MainTab
            currentDay={currentDayReading}
            onSelectDay={handleSelectDay}
            completedDays={completedDays}
            onToggleCompleteDay={toggleCompleteDay}
            fontSize={fontSize}
            onOpenPrayers={() => handleTabChange('prayers')}
          />
        )}

        {activeTab === 'calendar' && (
          <CalendarTab
            onSelectDay={handleSelectDay}
            completedDays={completedDays}
            onToggleCompleteDay={toggleCompleteDay}
            currentActiveDayNum={currentActiveDayNum}
            fontSize={fontSize}
          />
        )}

        {activeTab === 'prayers' && (
          <PrayersTab
            fontSize={fontSize}
            completedPrayers={completedPrayers}
            onToggleCompletePrayer={toggleCompletePrayer}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsTab
            fontSize={fontSize}
            setFontSize={setFontSize}
            theme={theme}
            setTheme={setTheme}
            completedDays={completedDays}
            setCompletedDays={setCompletedDays}
            completedPrayers={completedPrayers}
            setCompletedPrayers={setCompletedPrayers}
            currentActiveDayNum={currentActiveDayNum}
            setCurrentActiveDayNum={setCurrentActiveDayNum}
          />
        )}
      </main>

      {/* Dolny pasek zakładek (Dziś, 33 Dni, Modlitwy, Ustawienia) */}
      <nav className="bottom-nav" aria-label="Nawigacja główna">
        <div className="tab-nav-list">
          <button
            className={`tab-btn ${activeTab === 'today' ? 'active' : ''}`}
            onClick={() => handleTabChange('today')}
          >
            <BookOpen size={20} />
            <span>Dziś</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => handleTabChange('calendar')}
          >
            <Calendar size={20} />
            <span>33 Dni</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'prayers' ? 'active' : ''}`}
            onClick={() => handleTabChange('prayers')}
          >
            <Heart size={20} />
            <span>Modlitwy</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => handleTabChange('settings')}
          >
            <Settings size={20} />
            <span>Ustawienia</span>
          </button>
        </div>
      </nav>

    </div>
  );
};

export default App;
