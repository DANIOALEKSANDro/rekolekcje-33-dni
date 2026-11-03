import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Rejestracja Service Workera dla wsparcia PWA (instalacja i tryb offline)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.error('Błąd rejestracji Service Workera:', err);
    });
  });
} else if ('serviceWorker' in navigator) {
  // W trybie deweloperskim również zarejestruj, aby można było przetestować prompt instalacyjny
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
