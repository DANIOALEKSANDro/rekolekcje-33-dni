# 33 dni z Maryją – Rekolekcje do oddania się Matce Bożej

Aplikacja mobilna (Android, iOS oraz PWA) przygotowana na czas 33-dniowych rekolekcji przygotowujących do całkowitego oddania się Panu Jezusowi przez ręce Maryi wg św. Ludwika Marii Grignion de Montfort.

- **Okres rekolekcji:** 5 listopada 2026 – 8 grudnia 2026 (Uroczystość Niepokalanego Poczęcia NMP)
- **Wizerunek główny:** Cudowny obraz Matki Bożej Miłosierdzia z Ostrej Bramy w Wilnie
- **Tytuł dolny ekranu głównego:** *"33 dni przygotowań do oddania się Matce Bożej"*

---

## Główne Funkcje Aplikacji

1. **Słowo Dnia na samej górze ekranu (Top Card):**
   - Po otwarciu aplikacji od razu widoczna jest karta z czytaniem na dany dzień (werset biblijny, temat i fragment rozważania).
   - Przycisk **„Otwórz pełny tekst i rozważanie”** przenosi do pełnego widoku czytnika.

2. **Dostępność i wygoda dla seniorów i osób starszych:**
   - **Bardzo duża i czytelna czcionka:** skróty szybkiej zmiany wielkości czcionki (`A`, `A+`, `A++`, `Olbrzymi` do 30px) dostępne bezpośrednio w czytniku i w ustawieniach.
   - **Tryby kontrastu:**
     - *Nocny szafir* (ciemny, uspokajający dla oczu)
     - *Ciepły pergamin* (jasny, miękki, imitujący klasyczną księgę modlitewną)
     - *Wysoki kontrast* (czysta czerń na białym tle dla osób słabowidzących)
   - **Lektor audio (Czytanie na głos):** funkcja syntezy mowy w języku polskim – wystarczy dotknąć „Czytaj na głos”, aby odsłuchać rozważanie i modlitwę bez konieczności czytania z ekranu.

3. **Kalendarz 33 kręgów:**
   - 33 okrągłe przyciski odpowiadające kolejnym dniom rekolekcji (od 5 listopada do 7 grudnia) z numerem dnia i skrótem daty.
   - Dedykowany, wyróżniony krąg kulminacyjny na **8 grudnia 2026** z pełnym tekstem uroczystego Aktu Oddania.
   - Możliwość oznaczania przeczytanych dni zielonym znacznikiem (postęp zapisywany w telefonie).

4. **Pełna treść na wszystkie 33 dni:**
   - Kompletne wersety Pisma Świętego o Matce Bożej wraz z odnośnikami.
   - Głębokie rozważania duchowe.
   - Modlitwy codzienne i akty strzeliste.

5. **Skarbiec Modlitw Maryjnych:**
   - Akt Ofiarowania wg św. Ludwika Marii de Montfort
   - Modlitwa do Matki Bożej Miłosierdzia z Ostrej Bramy
   - Pod Twoją Obronę (Sub Tuum Praesidium)
   - Pełna Litania Loretańska do NMP
   - Akt Totus Tuus św. Jana Pawła II

---

## Uruchomienie lokalne

```bash
# Instalacja zależności (jeśli jeszcze nie zainstalowano)
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Zbudowanie wersji produkcyjnej
npm run build
```

---

## Samodzielna instalacja na telefonie

### 📱 iOS (iPhone / iPad):
1. Otwórz stronę w przeglądarce **Safari**.
2. Kliknij ikonę **Udostępnij** (kwadrat ze strzałką w górę na dole ekranu).
3. Wybierz opcję **„Do Początku” / „Dodaj do ekranu początkowego”**.
4. Aplikacja zainstaluje się jako pełnoekranowa aplikacja z ikoną Matki Bożej Ostrobramskiej.

### 🤖 Android:
1. Otwórz stronę w przeglądarce **Google Chrome**.
2. Kliknij ikonę menu (trzy kropki w prawym górnym rogu).
3. Wybierz **„Zainstaluj aplikację”** lub **„Dodaj do ekranu głównego”**.

---

## Budowanie aplikacji natywnej przez Capacitor (APK dla Androida / IPA dla iOS)

Aplikacja posiada skonfigurowany **Capacitor** (`capacitor.config.ts`):

```bash
# 1. Zbudowanie projektu
npm run build

# 2. Dodanie platformy Android
npx cap add android

# 3. Otwarcie w Android Studio i wygenerowanie pliku APK
npx cap open android

# 4. Dodanie platformy iOS (wymaga systemu macOS i Xcode)
npx cap add ios
npx cap open ios
```
