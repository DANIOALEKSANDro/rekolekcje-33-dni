import React, { useState, useEffect } from 'react';
import { Download, Share, PlusSquare, X, Check } from 'lucide-react';

interface PWAInstallBannerProps {
  onOpenIOSGuide?: () => void;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);
  const [bannerDismissed, setBannerDismissed] = useState<boolean>(true);
  const [showIOSModal, setShowIOSModal] = useState<boolean>(false);
  const [showAndroidModal, setShowAndroidModal] = useState<boolean>(false);

  useEffect(() => {
    // 1. Sprawdź, czy aplikacja jest już uruchomiona w trybie standalone (zainstalowana)
    const checkStandalone = 
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://');

    setIsStandalone(checkStandalone);

    // 2. Wykryj system iOS (iPhone / iPad / iPod)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS Safari
    setIsIOS(isIOSDevice);

    // 3. Sprawdź, czy użytkownik odrzucił baner w ostatnich 3 dniach
    const dismissedTime = localStorage.getItem('rekolekcje_install_banner_dismissed');
    const threeDays = 3 * 24 * 60 * 60 * 1000;
    const isRecentlyDismissed = dismissedTime && (Date.now() - Number(dismissedTime) < threeDays);

    if (!checkStandalone && !isRecentlyDismissed) {
      setBannerDismissed(false);
    }

    // 4. Nasłuchuj natywnego zdarzenia beforeinstallprompt (Android / Chrome / Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!checkStandalone && !isRecentlyDismissed) {
        setBannerDismissed(false);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 5. Nasłuchuj zdarzenia pomyślnej instalacji
    const handleAppInstalled = () => {
      setIsStandalone(true);
      setBannerDismissed(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    // 6. Nasłuchuj ręcznego wywołania (np. z zakładki Ustawienia)
    const handleOpenManual = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt().then(() => {
          setDeferredPrompt(null);
        }).catch(() => {});
      } else if (isIOSDevice) {
        setShowIOSModal(true);
      } else {
        setShowAndroidModal(true);
      }
    };
    window.addEventListener('open-pwa-install', handleOpenManual);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('open-pwa-install', handleOpenManual);
    };
  }, []);

  const handleDismiss = () => {
    setBannerDismissed(true);
    localStorage.setItem('rekolekcje_install_banner_dismissed', String(Date.now()));
  };

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Natywny prompt Chrome / Android
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          setBannerDismissed(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error('Błąd wywołania instalacji:', err);
      }
    } else if (isIOS) {
      // Otwórz graficzny przewodnik dla iOS Safari
      setShowIOSModal(true);
    } else {
      // Otwórz instrukcję ogólną dla Androida / innych przeglądarek
      setShowAndroidModal(true);
    }
  };

  // Jeśli aplikacja jest już zainstalowana lub baner odrzucony (i modale zamknięte)
  if (isStandalone && !showIOSModal && !showAndroidModal) {
    return null;
  }

  return (
    <>
      {/* Pływający pasek instalacji u góry / na dole */}
      {!bannerDismissed && !isStandalone && (
        <aside className="pwa-install-banner" aria-label="Instalacja aplikacji">
          <div className="pwa-banner-content">
            <img 
              src="/app-icon.png" 
              alt="Ikona aplikacji Rekolekcje z Maryją" 
              className="pwa-banner-icon" 
            />
            <div className="pwa-banner-text">
              <strong className="pwa-banner-title">Zainstaluj na telefonie</strong>
              <span className="pwa-banner-desc">
                {isIOS 
                  ? 'Dodaj do ekranu głównego iPhone’a' 
                  : 'Szybki dostęp i czytanie offline'}
              </span>
            </div>
          </div>

          <div className="pwa-banner-actions">
            <button 
              className="pwa-install-btn"
              onClick={handleInstallClick}
              aria-label="Zainstaluj aplikację"
            >
              <Download size={16} />
              <span>Zainstaluj</span>
            </button>
            <button 
              className="pwa-dismiss-btn" 
              onClick={handleDismiss} 
              aria-label="Zamknij powiadomienie"
              title="Później"
            >
              <X size={18} />
            </button>
          </div>
        </aside>
      )}

      {/* MODAL 1: Instrukcja krok po kroku dla iPhone / iPad (iOS Safari) */}
      {showIOSModal && (
        <div className="pwa-modal-backdrop" onClick={() => setShowIOSModal(false)}>
          <div className="pwa-modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="pwa-modal-close" onClick={() => setShowIOSModal(false)} aria-label="Zamknij">
              <X size={20} />
            </button>

            <div className="pwa-modal-header">
              <img src="/app-icon.png" alt="Aplikacja" className="pwa-modal-app-icon" />
              <h3>Zainstaluj na telefonie iPhone</h3>
              <p>Trzy proste kroki w przeglądarce Safari:</p>
            </div>

            <div className="pwa-ios-steps">
              <div className="pwa-step-item">
                <div className="pwa-step-num">1</div>
                <div className="pwa-step-body">
                  <div className="pwa-step-title">
                    Dotknij ikony <strong>Udostępnij</strong>
                    <span className="pwa-ios-icon-badge" title="Ikona Udostępnij">
                      <Share size={18} />
                    </span>
                  </div>
                  <p className="pwa-step-desc">
                    Znajdziesz ją na dolnym pasku przeglądarki Safari (kwadrat ze strzałką w górę).
                  </p>
                </div>
              </div>

              <div className="pwa-step-item">
                <div className="pwa-step-num">2</div>
                <div className="pwa-step-body">
                  <div className="pwa-step-title">
                    Wybierz <strong>„Do ekranu początkowego”</strong>
                    <span className="pwa-ios-icon-badge" title="Do ekranu początkowego">
                      <PlusSquare size={18} />
                    </span>
                  </div>
                  <p className="pwa-step-desc">
                    Przewiń listę opcji w dół i kliknij pozycję <em>„Do ekranu początkowego” (Add to Home Screen)</em>.
                  </p>
                </div>
              </div>

              <div className="pwa-step-item">
                <div className="pwa-step-num">3</div>
                <div className="pwa-step-body">
                  <div className="pwa-step-title">
                    Kliknij <strong>„Dodaj”</strong>
                  </div>
                  <p className="pwa-step-desc">
                    W prawym górnym rogu ekranu potwierdź przyciskiem <strong>Dodaj</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="pwa-modal-footer">
              <div className="pwa-modal-success-badge">
                <Check size={16} />
                <span>Ikona pojawi się na Twoim pulpicie i będzie działać jak pełna aplikacja</span>
              </div>
              <button className="mark-done-btn" onClick={() => setShowIOSModal(false)}>
                Rozumiem
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Instrukcja dla Androida (gdy prompt nie pojawił się samoczynnie) */}
      {showAndroidModal && (
        <div className="pwa-modal-backdrop" onClick={() => setShowAndroidModal(false)}>
          <div className="pwa-modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="pwa-modal-close" onClick={() => setShowAndroidModal(false)} aria-label="Zamknij">
              <X size={20} />
            </button>

            <div className="pwa-modal-header">
              <img src="/app-icon.png" alt="Aplikacja" className="pwa-modal-app-icon" />
              <h3>Jak dodać aplikację do ekranu</h3>
              <p>Dla przeglądarek Chrome, Samsung Internet, Edge, Opera:</p>
            </div>

            <div className="pwa-ios-steps">
              <div className="pwa-step-item">
                <div className="pwa-step-num">1</div>
                <div className="pwa-step-body">
                  <div className="pwa-step-title">
                    Otwórz menu przeglądarki <strong>(trzy kropki ⋮)</strong>
                  </div>
                  <p className="pwa-step-desc">
                    Dotknij ikony menu w prawym górnym lub dolnym rogu przeglądarki.
                  </p>
                </div>
              </div>

              <div className="pwa-step-item">
                <div className="pwa-step-num">2</div>
                <div className="pwa-step-body">
                  <div className="pwa-step-title">
                    Wybierz <strong>„Zainstaluj aplikację”</strong> lub <strong>„Dodaj do ekranu głównego”</strong>
                  </div>
                  <p className="pwa-step-desc">
                    Wybierz opcję instalacji, aby dodać skrót bezpośrednio na pulpit telefonu.
                  </p>
                </div>
              </div>
            </div>

            <div className="pwa-modal-footer">
              <button className="mark-done-btn" onClick={() => setShowAndroidModal(false)}>
                Rozumiem
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
