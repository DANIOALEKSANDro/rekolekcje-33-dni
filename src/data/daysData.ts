export interface DayReading {
  day: number;
  dateStr: string; // e.g. "5 listopada 2026"
  shortDate: string; // "5 XI"
  title: string;
  theme: string;
  verseRef: string;
  verseText: string;
  reflection: string[];
  prayer: string;
  aspiration: string; // Akt strzelisty
}

export const DAYS_DATA: DayReading[] = [
  {
    day: 1,
    dateStr: "5 listopada 2026",
    shortDate: "5 XI",
    title: "Początek drogi z Maryją – Pragnienie czystego serca",
    theme: "Duch tego świata a duch Chrystusa",
    verseRef: "Łk 1, 28",
    verseText: "Anioł wszedł do Niej i rzekł: «Bądź pozdrowiona, łaski pełna, Pan z Tobą, błogosławiona jesteś między niewiastami».",
    reflection: [
      "Rozpoczynamy 33-dniową wędrówkę serca. Pierwsze dwanaście dni to czas oczyszczenia naszego umysłu i serca z ducha tego świata – z pośpiechu, pychy, hałasu i zgiełku.",
      "Maryja uczy nas, że aby usłyszeć głos Boga, trzeba wpierw uciszyć własne niepokoje. Ona w cichym nazaretańskim domu potrafiła skupić się na obecności Najwyższego.",
      "Oddanie się Matce Bożej to nie jednorazowy gest, lecz droga zaufania. Proś dziś o łaskę otwarcia serca, by Maryja mogła ukształtować w tobie oblicze swojego Syna, Jezusa Chrystusa."
    ],
    prayer: "Pod Twoją obronę uciekamy się, Święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona.",
    aspiration: "O Maryjo bez grzechu pierworodnego poczęta, módl się za nami, którzy się do Ciebie uciekamy."
  },
  {
    day: 2,
    dateStr: "6 listopada 2026",
    shortDate: "6 XI",
    title: "Pokora Służebnicy Pańskiej",
    theme: "Odrzucenie pychy i samowystarczalności",
    verseRef: "Łk 1, 38",
    verseText: "Na to rzekła Maryja: «Oto ja służebnica Pańska, niech mi się stanie według słowa twego».",
    reflection: [
      "Prawdziwa wielkość człowieka rodzi się w pokorze. Świat wmawia nam, że liczy się tylko sukces, kontrola i własna siła. Maryja pokazuje drogę zupełnie inną: drogę zawierzenia Bogu.",
      "Słowo «fiat» – «niech mi się stanie» – to najodważniejsza odpowiedź, jaką stworzenie może dać Stwórcy. To zgoda na to, by Bóg pisał historię naszego życia według swojego miłosiernego planu.",
      "Zastanów się dzisiaj, w jakich obszarach twojego życia wciąż próbujesz radzić sobie sam, zapominając zaprosić do nich Boga i Jego Matkę."
    ],
    prayer: "Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci naszej. Amen.",
    aspiration: "Oto ja, sługa Twój, Panie – uczyń ze mną według woli Twojej."
  },
  {
    day: 3,
    dateStr: "7 listopada 2026",
    shortDate: "7 XI",
    title: "Nawiedzenie i dar radości",
    theme: "Służba bliźnim z miłością",
    verseRef: "Łk 1, 39-40",
    verseText: "W tym czasie Maryja wybrała się i poszła z pośpiechem w góry do pewnego miasta w pokoleniu Judy. Weszła do domu Zachariasza i pozdrowiła Elżbietę.",
    reflection: [
      "Maryja, nosząc pod sercem Zbawiciela, nie zamyka się w sobie. Idzie z pośpiechem przez góry, by służyć starszej krewnej Elżbiecie.",
      "Prawdziwe zjednoczenie z Bogiem zawsze owocuje miłością do człowieka. Tam, gdzie wchodzi Maryja, pojawia się radość i Duch Święty napełnia obecnych.",
      "Poproś dziś Matkę Bożą, aby usunęła z twojego serca oziębłość i lenistwo, a wlała w nie gotowość do bezinteresownej pomocy bliźnim."
    ],
    prayer: "Panie Jezu, daj mi serce wrażliwe na potrzeby innych. Spraw, abym jak Twoja Najświętsza Matka niósł pokój i pociechę tam, gdzie panuje smutek i samotność.",
    aspiration: "Matko Pięknej Miłości, prowadź mnie drogą miłosierdzia."
  },
  {
    day: 4,
    dateStr: "8 listopada 2026",
    shortDate: "8 XI",
    title: "Magnificat – Pieśń wdzięczności",
    theme: "Wysławianie Boga za Jego wielkie dzieła",
    verseRef: "Łk 1, 46-48",
    verseText: "Wtedy Maryja rzekła: «Wielbi dusza moja Pana i raduje się duch mój w Bogu, moim Zbawcy. Bo wejrzał na uniżenie swojej służebnicy».",
    reflection: [
      "Pieśń Maryi to hymn człowieka, który potrafi dostrzec działanie Boga w codzienności. Maryja nie zatrzymuje chwały dla siebie – wszystko odnosi do Ojca w niebie.",
      "Wdzięczność jest kluczem do pokoju serca. Kiedy dziękujemy, nasze oczy otwierają się na niezliczone łaski, którymi jesteśmy otoczeni, nawet pośród trudów.",
      "Wymień dziś w cichości serca trzy rzeczy, za które jesteś Bogu szczerze wdzięczny."
    ],
    prayer: "Wielbi dusza moja Pana i raduje się duch mój w Bogu, Zbawicielu moim. Bo wielkie rzeczy uczynił mi Wszechmocny, a święte jest imię Jego. Chwała Ojcu i Synowi, i Duchowi Świętemu...",
    aspiration: "Bądź uwielbiony, Panie, w dziełach rąk Twoich!"
  },
  {
    day: 5,
    dateStr: "9 listopada 2026",
    shortDate: "9 XI",
    title: "Betlejem – Bóg w prostocie",
    theme: "Ubóstwo ducha i prostota",
    verseRef: "Łk 2, 7",
    verseText: "Porodziła swego pierworodnego Syna, owinęła Go w pieluszki i położyła w żłobie, gdyż nie było dla nich miejsca w gospodzie.",
    reflection: [
      "W ubogiej stajence betlejemskiej Maryja przyjmuje Króla Wszechświata w skrajnym ubóstwie. Nie narzeka, nie szuka wygód – trwa w adoracji Miłości.",
      "Bóg najchętniej przychodzi do serc prostych, które nie szukają poklasku świata. Żłóbek przypomina nam, że to co cenne w oczach Bożych, często jest wzgardzone przez świat.",
      "Oddaj dziś Maryi swoje niedostatki, ubóstwo i słabości. Ona złoży je w ręce Jezusa."
    ],
    prayer: "Święta Boża Rodzicielko, naucz mnie kochać prostotę i nie przywiązywać serca do dóbr przemijających. Uczyń moje serce ciepłym schronieniem dla Twojego Syna.",
    aspiration: "Jezu cichy i serca pokornego, uczyń serce moje według Serca Twego."
  },
  {
    day: 6,
    dateStr: "10 listopada 2026",
    shortDate: "10 XI",
    title: "Zachowywanie słów w sercu",
    theme: "Medytacja i pamięć o Bożych obietnicach",
    verseRef: "Łk 2, 19",
    verseText: "Maryja zachowywała wszystkie te sprawy i rozważała je w swoim sercu.",
    reflection: [
      "Współczesny świat zalewa nas potokiem informacji, który rozprasza duszę. Maryja uczy nas sztuki skupienia: Ona nie spieszy się z osądem, lecz rozważa tajemnice w sercu.",
      "Gdy spotyka cię niezrozumiałe cierpienie lub nieoczekiwane wydarzenie, nie buntuj się. Weź przykład z Matki Bożej i złóż to w głębi serca przed Bogiem.",
      "Poświęć dziś przynajmniej dziesięć minut na cichą modlitwę bez telefonu i telewizora."
    ],
    prayer: "Matko Boża, Panno Roztropna, naucz mnie ciszy i uważności. Pomóż mi dostrzegać Boże znaki w codziennym życiu.",
    aspiration: "Królowo Pokoju, uproś nam pokój serca."
  },
  {
    day: 7,
    dateStr: "11 listopada 2026",
    shortDate: "11 XI",
    title: "Ofiarowanie w Świątyni",
    theme: "Gotowość do oddania Bogu tego, co najdroższe",
    verseRef: "Łk 2, 34-35",
    verseText: "Symeon zaś błogosławił ich i rzekł do Maryi, Matki Jego: «Oto Ten przeznaczony jest na upadek i na powstanie wielu... A Twoją duszę miecz przeniknie».",
    reflection: [
      "Maryja przynosi małego Jezusa do świątyni, aby Go ofiarować Panu. Słyszy wtedy proroctwo o mieczu boleści, który przeszyje Jej serce.",
      "Miłość nie boi się ofiary. Kto kocha naprawdę, ten jest gotów cierpieć dla dobra ukochanego. Maryja uczy nas, że cierpienie złączone z Chrystusem ma moc zbawczą.",
      "Czy potrafisz oddać Bogu swoje plany, ambicje i obawy o przyszłość? Zaufaj, że w Jego rękach jesteś całkowicie bezpieczny."
    ],
    prayer: "Matko Bolesna, oręduj za mną w chwilach zwątpienia i cierpienia. Ucz mnie przyjmować krzyż z wiarą i ufnością.",
    aspiration: "Serce Maryi, zranione mieczem boleści, bądź moją ucieczką."
  },
  {
    day: 8,
    dateStr: "12 listopada 2026",
    shortDate: "12 XI",
    title: "Ucieczka do Egiptu – Ochrona życia",
    theme: "Zaufanie w obliczu prześladowań i niepewności",
    verseRef: "Mt 2, 13",
    verseText: "Anioł Pański ukazał się Józefowi we śnie i rzekł: «Wstań, weź Dziecię i Jego Matkę i uchodź do Egiptu; pozostań tam, aż ci powiem».",
    reflection: [
      "Święta Rodzina musi uciekać nocą przed okrucieństwem Heroda na obcą ziemię. Maryja znosi tułaczkę i niepewność jutra z bezgraniczną wiarą w Bożą Opatrzność.",
      "Iluż ludzi dzisiaj przeżywa lęki o dom, zdrowie, rodzinę czy pracę. Maryja wie, co to znaczy być wygnańcem i drżeć o życie najbliższych.",
      "Pomódl się dziś za rodziny przeżywające kryzysy oraz za osoby samotne i bezdomne."
    ],
    prayer: "Święta Rodzino z Nazaretu, chroń nasze rodziny przed złem, niezgodą i brakiem miłości. Spraw, by nasze domy były pełne Boga.",
    aspiration: "Święty Józefie, opiekunie Maryi i Jezusa, módl się za nami."
  },
  {
    day: 9,
    dateStr: "13 listopada 2026",
    shortDate: "13 XI",
    title: "Odnalezienie Jezusa w Świątyni",
    theme: "Poszukiwanie Boga całym sercem",
    verseRef: "Łk 2, 48-49",
    verseText: "Matka Jego rzekła do Niego: «Synu, czemuś nam to uczynił? Oto ojciec Twój i ja z bólem serca szukaliśmy Ciebie».",
    reflection: [
      "Maryja i Józef przez trzy dni szukali dwunastoletniego Jezusa z bólem serca. Nie spoczęli, dopóki Go nie odnaleźli w Domu Ojca.",
      "Największym nieszczęściem człowieka jest utrata bliskości z Bogiem przez grzech lub obojętność. Kiedy czujesz duchową pustkę, szukaj Jezusa tak, jak szukała Go Maryja.",
      "Przystąp w tych dniach rekolekcji do szczerej i dobrze przygotowanej spowiedzi świętej."
    ],
    prayer: "Jezu, nigdy nie pozwól mi oddalić się od Ciebie. Gdy zbłądzę, poślij swoją Matkę, by przyprowadziła mnie z powrotem do Twojego Serca.",
    aspiration: "Matko Dobrej Rady, wskaż mi drogę do Twego Syna."
  },
  {
    day: 10,
    dateStr: "14 listopada 2026",
    shortDate: "14 XI",
    title: "Życie ukryte w Nazarecie",
    theme: "Świętość w szarej codzienności",
    verseRef: "Łk 2, 51",
    verseText: "Potem poszedł z nimi i wrócił do Nazaretu; i był im poddany. A Matka Jego chowała wiernie wszystkie te wspomnienia w swym sercu.",
    reflection: [
      "Przez trzydzieści lat Jezus żył w Nazarecie, pracując fizycznie i dzieląc zwyczajne codzienne troski z Maryją i Józefem.",
      "Świętość nie polega na dokonywaniu niezwykłych czynów, lecz na wykonywaniu zwykłych obowiązków z nadzwyczajną miłością.",
      "Uczyń dziś każdy swój obowiązek – gotowanie, sprzątanie, pracę, rozmowę – darem miłości ofiarowanym Bogu przez ręce Maryi."
    ],
    prayer: "Naucz mnie, Maryjo, cenić wartość cichej pracy, modlitwy i rodzinnego ciepła. Niech mój dom stanie się małym Nazaretem.",
    aspiration: "Królowo Rodzin, módl się za nami."
  },
  {
    day: 11,
    dateStr: "15 listopada 2026",
    shortDate: "15 XI",
    title: "Kana Galilejska – «Zróbcie wszystko, cokolwiek wam powie»",
    theme: "Skuteczne wstawiennictwo Maryi",
    verseRef: "J 2, 3.5",
    verseText: "Kiedy zaś zabrakło wina, Matka Jezusa mówi do Niego: «Nie mają już wina»... Do sług zaś rzekła: «Zróbcie wszystko, cokolwiek wam powie».",
    reflection: [
      "Maryja w Kanie Galilejskiej pierwsza zauważa ludzki brak i zawstydzenie nowożeńców. Z matczyną delikatnością zanosi tę potrzebę do Syna.",
      "Jej ostatnie słowa zapisane w Ewangelii to najważniejszy maryjny testament: «Zróbcie wszystko, cokolwiek wam powie». Maryja nigdy nie zatrzymuje nas na sobie – zawsze prowadzi do posłuszeństwa Jezusowi.",
      "Jakiego «wina» – radości, cierpliwości, nadziei – brakuje dziś w twoim życiu? Poproś Maryję, by wstawiła się za tobą u Jezusa."
    ],
    prayer: "Maryjo, Uzdrowienie Chorych i Pocieszycielko Strapionych, wyproś mi u Twego Syna cud przemiany mojego serca, tak jak przemienił On wodę w wino.",
    aspiration: "Matko Nieustającej Pomocy, ratuj nas w każdej potrzebie."
  },
  {
    day: 12,
    dateStr: "16 listopada 2026",
    shortDate: "16 XI",
    title: "Matka Miłosierdzia z Ostrej Bramy",
    theme: "Święto Matki Bożej Miłosierdzia – Patronki wstawiennictwa",
    verseRef: "Ps 103, 13",
    verseText: "Jak się lituje ojciec nad synami, tak Pan się lituje nad tymi, co się Go boją. A miłosierdzie Pańskie trwa na wieki.",
    reflection: [
      "Dziś przypada uroczystość Matki Bożej Miłosierdzia – Tej samej, której święty wizerunek czcimy w wileńskiej Ostrej Bramie. Jej ręce są złożone na piersiach w geście całkowitego zawierzenia i matczynej czułości.",
      "Ostra Brama to brama nadziei dla każdego, kto czuje się zagubiony, zraniony czy opuszczony. Maryja patrzy na nas łagodnym wzrokiem, zapewniając, że Boże miłosierdzie jest większe od każdego grzechu.",
      "Spójrz dziś na Jej wizerunek i powierz Jej najtrudniejsze sprawy swojego życia oraz bliskich, którzy odeszli od Boga."
    ],
    prayer: "Panno Święta, co w Ostrej świecisz Bramie! Matko Miłosierdzia, otul nas płaszczem Twej opieki. Przebłagaj za nami Swego Syna i wyproś nam łaskę głębokiego nawrócenia.",
    aspiration: "Matko Miłosierdzia z Ostrej Bramy, módl się za nami!"
  },
  {
    day: 13,
    dateStr: "17 listopada 2026",
    shortDate: "17 XI",
    title: "Poznanie samego siebie – Prawda w miłości",
    theme: "Rozpoczęcie drugiego etapu: poznanie własnej nędzy i godności",
    verseRef: "Ps 139, 1-3",
    verseText: "Panie, przenikasz mnie i znasz. Ty wiesz, kiedy siadam i wstaję, z daleka znasz moje myśli.",
    reflection: [
      "Kolejne siedem dni poświęcamy na poznanie samych siebie. Św. Ludwik Maria de Montfort przypomina, że bez poznania własnej słabości łatwo ulec pysze.",
      "Stanąć w prawdzie przed Bogiem to nie potępiać się, lecz uznać: «Panie, beze Mnie nic uczynić nie możesz, ale z Tobą mogę wszystko».",
      "Proś Ducha Świętego przez wstawiennictwo Maryi o światło prawdy o stanie twojej duszy."
    ],
    prayer: "Duchu Święty, Boże, przez Niepokalane Serce Maryi rozjaśnij zakamarki mojego sumienia. Daj mi odwagę zobaczyć siebie w prawdzie i zaufać Bożemu Miłosierdziu.",
    aspiration: "Jezu, ufam Tobie! W Twoje ręce powierzam duszę moją."
  },
  {
    day: 14,
    dateStr: "18 listopada 2026",
    shortDate: "18 XI",
    title: "Uzdrowienie ran i przebaczenie",
    theme: "Wyzwolenie z żalu i urazów",
    verseRef: "Kol 3, 13",
    verseText: "Znoście jedni drugich i wybaczajcie sobie nawzajem, jeśliby miał ktoś zarzut przeciw drugiemu: jak Pan wybaczył wam, tak i wy!",
    reflection: [
      "Nie można w pełni oddać się Maryi, trzymając w sercu nienawiść, złość lub urazę do drugiego człowieka.",
      "Przebaczenie jest aktem woli, a nie uczuciem. To decyzja, by nie mścić się i oddać sprawiedliwość w ręce Boga.",
      "Wspomnij dziś osobę, która cię skrzywdziła, i odmów za nią dziesiątkę różańca, prosząc o pokój dla jej i twojego serca."
    ],
    prayer: "Maryjo, Matko Przebaczenia, pomóż mi uwolnić moje serce od zgorzknienia i gniewu. Naucz mnie kochać tak, jak kocha Twój Syn.",
    aspiration: "Matko pojednania, ulecz rany mojego serca."
  },
  {
    day: 15,
    dateStr: "19 listopada 2026",
    shortDate: "19 XI",
    title: "Walka duchowa i czujność",
    theme: "Przezwyciężanie pokus pod płaszczem Maryi",
    verseRef: "1 P 5, 8-9",
    verseText: "Bądźcie trzeźwi! Czuwajcie! Przeciwnik wasz, diabeł, jak lew ryczący krąży szukając kogo pożreć. Mocni w wierze przeciwstawcie się jemu!",
    reflection: [
      "Życie chrześcijańskie to nieustanna walka z pokusami do zwątpienia, egoizmu i grzechu. Szatan boi się Maryi, ponieważ w Jej pokorze Bóg zniweczył jego pychę.",
      "Św. Bernard radził: «Kiedy podnoszą się wichry pokus, spójrz na gwiazdę, wzywaj Maryję!».",
      "Kiedy czujesz słabość i zniechęcenie, od razu uciekaj się pod Jej opiekę."
    ],
    prayer: "Święty Michale Archaniele, wspomagaj nas w walce... Królowo Aniołów, ześlij hufce niebieskie, aby nas strzegły na wszystkich naszych drogach.",
    aspiration: "Maryjo, pogromczyni duchów ciemności, broń nas przed złem."
  },
  {
    day: 16,
    dateStr: "20 listopada 2026",
    shortDate: "20 XI",
    title: "Czystość serca i intencji",
    theme: "Świątynia Ducha Świętego",
    verseRef: "Mt 5, 8",
    verseText: "Błogosławieni czystego serca, albowiem oni Boga oglądać będą.",
    reflection: [
      "Czystość to nie tylko czystość ciała, ale przede wszystkim czystość spojrzenia, mowy, myśli i intencji. To pragnienie, by we wszystkim podobać się Bogu.",
      "Maryja jest Liliją nieskalaną, Najczystszą Dziewicą. W Jej obecności każda nieczysta myśl i egoistyczne pragnienie tracą swą moc.",
      "Poproś dziś o czyste spojrzenie na drugiego człowieka – nie przez pryzmat korzyści, lecz godności dziecka Bożego."
    ],
    prayer: "O Maryjo, Królowo Dziewic, uproś mi czystość serca, wzroku i myśli. Niech moje ciało i dusza będą godnym mieszkaniem Boga.",
    aspiration: "Przez Twoje święte panieństwo i niepokalane poczęcie, o Najświętsza Panno Maryjo, oczyść serce i ciało moje."
  },
  {
    day: 17,
    dateStr: "21 listopada 2026",
    shortDate: "21 XI",
    title: "Ofiarowanie Najświętszej Maryi Panny",
    theme: "Święto Ofiarowania NMP – Całkowite oddanie od dzieciństwa",
    verseRef: "Ps 45, 11-12",
    verseText: "Posłuchaj, córko, spójrz i nakłoń ucha, zapomnij o swym narodzie, o domu twego ojca! Król pragnie twojej piękności: On twoim panem, oddaj Mu pokłon!",
    reflection: [
      "Tradycja Kościoła wspomina dziś wprowadzenie małej Maryi do Świątyni Jerozolimskiej, gdzie została całkowicie poświęcona na służbę Bogu.",
      "To piękny wzór dla naszych rekolekcji. Pragniemy, wzorem Maryi, ofiarować Bogu nasze całe życie – przeszłość, teraźniejszość i przyszłość.",
      "Pomyśl, co jest twoim największym skarbem. Czy jesteś gotów złożyć to z miłością na ołtarzu Bożym?"
    ],
    prayer: "Przyjmij, Panie, całą moją wolność, pamięć, rozum i wolę. Wszystko, co mam, od Ciebie otrzymałem i Tobie to w ręce Maryi oddaję.",
    aspiration: "Wszystko moje Twoim jest, o Maryjo!"
  },
  {
    day: 18,
    dateStr: "22 listopada 2026",
    shortDate: "22 XI",
    title: "Chrystus Król Wszechświata a panowanie Maryi",
    theme: "Poddanie życia pod królewskie rządy Zbawiciela",
    verseRef: "Ap 1, 5-6",
    verseText: "Temu, który nas miłuje i który przez swą krew uwolnił nas od naszych grzechów, i uczynił nas królestwem – kapłanami dla Boga i Ojca swojego...",
    reflection: [
      "Jezus jest Królem Miłości i Prawdy, a Maryja stoi u Jego boku jako Królowa Matka. Jej panowanie nie polega na ucisku, lecz na wstawiennictwie i miłosierdziu.",
      "Gdy oddajemy się Maryi, Ona wprowadza nas do Królestwa swojego Syna. Pod Jej berłem odnajdujemy prawdziwą wolność dzieci Bożych.",
      "Uznaj dziś Jezusa jedynym Panem swojego życia, rezygnując z bożków wygody, pieniądza czy ludzkiego uznania."
    ],
    prayer: "Chryste Królu, króluj w moim sercu, w mojej rodzinie i w mojej Ojczyźnie. Maryjo, Królowo Korony Polskiej, wstawiaj się za nami.",
    aspiration: "Niech żyje Jezus, nasz Król i Maryja, nasza Królowa!"
  },
  {
    day: 19,
    dateStr: "23 listopada 2026",
    shortDate: "23 XI",
    title: "Świętość w relacjach z ludźmi",
    theme: "Przezwyciężenie osądzania i plotkarstwa",
    verseRef: "Jk 1, 26",
    verseText: "Jeśli ktoś uważa się za człowieka religijnego, lecz nie powściąga swego języka, to łudzi serce swoje, a religijność jego jest bezwartościowa.",
    reflection: [
      "Św. Ludwik Maria de Montfort podkreśla, że autentyczna pobożność maryjna objawia się w łagodności języka. Maryja nigdy nie mówiła źle o bliźnich.",
      "Słowa mają moc budowania lub niszczenia. Ileż bólu wyrządzają pochopne osądy, plotki i złośliwości.",
      "Podejmij dziś postanowienie powstrzymania się od jakiejkolwiek krytyki innych ludzi. Zamiast mówić o ich wadach, pomódl się za nich."
    ],
    prayer: "Matko Milczenia, połóż straż na moich wargach. Spraw, aby z moich ust wychodziły tylko słowa błogosławieństwa, pociechy i prawdy.",
    aspiration: "Matko Łaskawa, uczyń moje serce wyrozumiałym dla słabości innych."
  },
  {
    day: 20,
    dateStr: "24 listopada 2026",
    shortDate: "24 XI",
    title: "Poznanie Maryi – Kim jest Ta, która się wyłania?",
    theme: "Rozpoczęcie trzeciego etapu: wejście w tajemnicę Matki Bożej",
    verseRef: "Pnp 6, 10",
    verseText: "Kimże jest ta, co wyłania się z zorzy, piękna jak księżyc, jaśniejąca jak słońce, groźna jak zbrojne zastępy?",
    reflection: [
      "Rozpoczynamy trzeci tydzień – czas zachwytu i poznawania samej Najświętszej Dziewicy. Św. Ludwik pisał: «O Maryi nigdy dość!» (De Maria nunquam satis).",
      "Maryja jest arcydziełem Boga Stwórcy, w którym zamieszkała cała pełnia łaski. Nie sposób zrozumieć tajemnicy Wcielenia bez zrozumienia roli Maryi.",
      "Otwórz swoje serce jak dziecko, które chce poznać swoją najlepszą Mamę."
    ],
    prayer: "O Pani moja, o Matko moja! Pamiętaj, że jestem Twój. Strzeż mnie i broń jako rzeczy i własności swojej.",
    aspiration: "Zdrowaś Maryjo, Arcydzieło rąk Najwyższego!"
  },
  {
    day: 21,
    dateStr: "25 listopada 2026",
    shortDate: "25 XI",
    title: "Maryja – Nowa Ewa",
    theme: "Odwrócenie skutków nieposłuszeństwa",
    verseRef: "Rdz 3, 15",
    verseText: "Wprowadzam nieprzyjaźń między ciebie a niewiastę, pomiędzy potomstwo twoje a potomstwo jej: ono zmiażdży ci głowę, a ty zmiażdżysz mu piętę.",
    reflection: [
      "Przez nieposłuszeństwo Ewy przyszedł na świat grzech i śmierć. Przez posłuszeństwo i wiarę Maryi, Nowej Ewy, przyszedł Zbawiciel i Życie.",
      "Maryja jest Niewiastą zapowiedzianą na kartach Księgi Rodzaju. Bóg od wieków przygotowywał Ją na Matkę swojego Syna.",
      "Dziękuj dziś Bogu za dar Maryi, w której ludzkość została podniesiona z upadku grzechu pierworodnego."
    ],
    prayer: "Bądź błogosławiona, Panno bez zmazy poczęta! Dziękujemy Ci za Twoje posłuszeństwo, które otworzyło nam bramy Nieba.",
    aspiration: "Królowo bez zmazy pierworodnej poczęta, módl się za nami."
  },
  {
    day: 22,
    dateStr: "26 listopada 2026",
    shortDate: "26 XI",
    title: "Matka Kościoła i Matka każdego z nas",
    theme: "Duchowe macierzyństwo Maryi",
    verseRef: "J 19, 26-27",
    verseText: "Kiedy więc Jezus ujrzał Matkę i stojącego obok Niej ucznia, którego miłował, rzekł do Matki: «Niewiasto, oto syn Twój». Następnie rzekł do ucznia: «Oto Matka twoja». I od tej godziny uczeń wziął Ją do siebie.",
    reflection: [
      "Pod krzyżem dokonała się najświętsza adopcja. Umierający Jezus daje nam to, co miał najcenniejszego na ziemi – swoją własną Matkę.",
      "Święty Jan reprezentuje każdego z nas. Wziąć Maryję do siebie («in sua») oznacza zaprosić Ją do wszystkich swoich spraw, planów, radości i cierpień.",
      "Czy zaprosiłeś już Maryję do swojego codziennego życia? Rozmawiaj z Nią jak z najczulszą Matką."
    ],
    prayer: "Jezu, dziękuję Ci za dar Twej Najświętszej Matki. Maryjo, przyjmuję Cię do mojego życia, bądź moją Przewodniczką i Orędowniczką.",
    aspiration: "Oto Matka moja! Nie boję się niczego, bo Ona jest przy mnie."
  },
  {
    day: 23,
    dateStr: "27 listopada 2026",
    shortDate: "27 XI",
    title: "Cudowny Medalik i promienie łask",
    theme: "Maryja Pośredniczka Wszelkich Łask (wspomnienie Objawień Cudownego Medalika)",
    verseRef: "Przp 8, 35",
    verseText: "Bo kto mnie znajdzie, ten znajdzie życie i zyska upodobanie u Pana.",
    reflection: [
      "Dziś w Kościele wspominamy objawienie Cudownego Medalika św. Katarzynie Labouré w 1830 roku. Z rąk Maryi spływały jasne promienie symbolizujące łaski dla ludzi.",
      "Gdy św. Katarzyna zapytała o promienie, które nie świeciły, Maryja odpowiedziała: «To łaski, o które nikt nie prosi». Bóg pragnie obdarzać nas hojnie, lecz często brakuje nam wiary i modlitwy.",
      "Noś z wiarą Cudowny Medalik lub szkaplerz i proś dziś z ufnością o potrzebne ci łaski."
    ],
    prayer: "O Maryjo, bez grzechu poczęta, módl się za nami, którzy się do Ciebie uciekamy, i za wszystkimi, którzy się do Ciebie nie uciekają, a zwłaszcza za nieprzyjaciółmi Kościoła świętego i poleconymi Tobie.",
    aspiration: "Niepokalana, wyproś nam łaskę żywej wiary i miłości."
  },
  {
    day: 24,
    dateStr: "28 listopada 2026",
    shortDate: "28 XI",
    title: "Wierność pod Krzyżem – Stabat Mater",
    theme: "Męstwo i współcierpienie z Chrystusem",
    verseRef: "J 19, 25",
    verseText: "A obok krzyża Jezusowego stały: Matka Jego i siostra Matki Jego, Maria, żona Kleofasa, i Maria Magdalena.",
    reflection: [
      "Gdy apostołowie uciekli ze strachu, Maryja stała pod krzyżem. Stała niewzruszona, zjednoczona z ofiarą swojego Syna w milczeniu i bólu.",
      "Łatwo być z Bogiem w chwilach radości i uniesień. Prawdziwa miłość sprawdza się jednak w wierności pod krzyżem – w chorobie, samotności i próbie wiary.",
      "Proś Matkę Najświętszą o męstwo w znoszeniu twoich codziennych krzyży bez buntu i zniechęcenia."
    ],
    prayer: "Święta Matko, uczyń to, bym w sercu nosił rany Chrystusa. Daj mi stać pod krzyżem z wiarą i niezłomną nadzieją.",
    aspiration: "Królowo Męczenników, umocnij moją wiarę."
  },
  {
    day: 25,
    dateStr: "29 listopada 2026",
    shortDate: "29 XI",
    title: "Wieczernik – Oczekiwanie na Ducha Świętego",
    theme: "Oblubienica Ducha Świętego i zjednoczenie Kościoła",
    verseRef: "Dz 1, 14",
    verseText: "Wszyscy oni trwali jednomyślnie na modlitwie razem z niewiastami, z Maryją, Matką Jezusa, i z braćmi Jego.",
    reflection: [
      "W Wieczerniku Maryja gromadzi zalęknionych uczniów i uczy ich cierpliwej, ufnej modlitwy w oczekiwaniu na Pocieszyciela.",
      "Św. Ludwik naucza, że Duch Święty zstępuje tam, gdzie znajduje swoją umiłowaną Oblubienicę – Maryję. Im więcej Maryi w duszy, tym więcej działania Ducha Świętego.",
      "Zawołaj dziś gorąco o nowe wylanie darów Ducha Świętego na twoje życie."
    ],
    prayer: "Przybądź, Duchu Święty, napełnij serca Twoich wiernych i zapal w nich ogień Twojej miłości. Przyjdź przez potężne wstawiennictwo Niepokalanego Serca Maryi.",
    aspiration: "Przybądź, Duchu Święty, przez Serce Maryi!"
  },
  {
    day: 26,
    dateStr: "30 listopada 2026",
    shortDate: "30 XI",
    title: "Wniebowzięta i ukoronowana Królowa",
    theme: "Nadzieja życia wiecznego",
    verseRef: "Ap 12, 1",
    verseText: "Potem wielki znak ukazał się na niebie: Niewiasta obleczona w słońce i księżyc pod jej stopami, a na jej głowie wieniec z gwiazd dwunastu.",
    reflection: [
      "Maryja z ciałem i duszą została wzięta do chwały niebieskiej. W Niej widzimy przeznaczenie każdego chrześcijanina: wieczne szczęście w obecności Boga.",
      "Ziemia jest tylko krótkim przystankiem w drodze do wieczności. Nie warto tracić pokoju z powodu przemijających trudności tego świata.",
      "Spójrz dziś w niebo i pomyśl o ojczyźnie, którą przygotował dla ciebie Chrystus."
    ],
    prayer: "Królowo Wniebowzięta, pociągnij nasze serca ku dobrom niebieskim, abyśmy nie ugrzęźli w troskach tego padołu płaczu.",
    aspiration: "Bramo Niebieska, prowadź nas do wiecznej chwały."
  },
  {
    day: 27,
    dateStr: "1 grudnia 2026",
    shortDate: "1 XII",
    title: "Poznanie Jezusa Chrystusa – Mądrości Przedwiecznej",
    theme: "Rozpoczęcie czwartego etapu: Jezus jako ostateczny cel oddania",
    verseRef: "J 14, 6",
    verseText: "Odpowiedział mu Jezus: «Ja jestem drogą i prawdą, i życiem. Nikt nie przychodzi do Ojca inaczej jak tylko przeze Mnie».",
    reflection: [
      "Ostatni tydzień przygotowań to całkowite skupienie na osobie Jezusa Chrystusa. Wszelkie nabożeństwo do Maryi ma tylko jeden cel: doskonałe zjednoczenie z Chrystusem.",
      "Św. Ludwik pisał: «Jezus jest alfą i omegą, początkiem i końcem wszystkich rzeczy. Jeśli ustanawiamy doskonałe nabożeństwo do Najświętszej Dziewicy, czynimy to tylko po to, by doskonalej ustanowić nabożeństwo do Jezusa Chrystusa».",
      "Podziękuj dziś Jezusowi za to, że stał się człowiekiem i oddał za ciebie życie."
    ],
    prayer: "Jezu, Mądrości Przedwieczna i Wcielona, oddaję Ci się cały przez ręce Twojej Matki. Spraw, abym należał do Ciebie w czasie i w wieczności.",
    aspiration: "Jezu, ufam Tobie! Jezu, kocham Cię!"
  },
  {
    day: 28,
    dateStr: "2 grudnia 2026",
    shortDate: "2 XII",
    title: "Tajemnica Eucharystii – Chleb Żywy",
    theme: "Obecność Jezusa w Najświętszym Sakramencie",
    verseRef: "J 6, 51",
    verseText: "Ja jestem chlebem żywym, który zstąpił z nieba. Jeśli kto spożywa ten chleb, będzie żył na wieki. Chlebem, który Ja dam, jest moje ciało za życie świata.",
    reflection: [
      "Ciało, które przyjmujemy w Komunii Świętej, to to samo Ciało, które Maryja nosiła w swoim łonie i karmiła w Betlejem. Św. Jan Paweł II nazwał Maryję «Niewiastą Eucharystii».",
      "Przystępuj do Komunii Świętej z taką czcią i miłością, z jaką Maryja tuliła Dzieciątko Jezus do swego Niepokalanego Serca.",
      "Jeśli to możliwe, nawiedź dziś Jezusa ukrytego w tabernakulum i spędź chwilę na cichej adoracji."
    ],
    prayer: "Panie Jezu obecny w Najświętszym Sakramencie, rozpal moje serce miłością ku Tobie. Maryjo, przygotuj moją duszę na godne przyjęcie Twojego Syna.",
    aspiration: "O Sakramencie Najświętszy, o Sakramencie Boski, wszelka cześć i dziękczynienie niech będą w każdym momencie!"
  },
  {
    day: 29,
    dateStr: "3 grudnia 2026",
    shortDate: "3 XII",
    title: "Słowo Boże – Światło na ścieżce życia",
    theme: "Karmienie się Pismem Świętym",
    verseRef: "Hbr 4, 12",
    verseText: "Żywe bowiem jest słowo Boże, skuteczne i ostrzejsze niż wszelki miecz obosieczny, przenikające aż do rozdzielenia duszy i ducha...",
    reflection: [
      "Jezus jest Słowem, które stało się Ciałem. Kto kocha Chrystusa, ten z utęsknieniem wsłuchuje się w Jego słowa w Ewangelii.",
      "Maryja była najwierniejszą słuchaczką Słowa Bożego. Ona nie tylko słuchała, ale żyła Słowem na co dzień.",
      "Otwórz dziś Pismo Święte i przeczytaj z modlitwą fragment Ewangelii, pytając: «Panie, co chcesz mi dziś przez to powiedzieć?»."
    ],
    prayer: "Panie, Twoje słowo jest pochodnią dla moich stóp i światłem na mojej ścieżce. Daj mi serce otwarte i posłuszne Twej prawdzie.",
    aspiration: "Mów, Panie, bo sługa Twój słucha."
  },
  {
    day: 30,
    dateStr: "4 grudnia 2026",
    shortDate: "4 XII",
    title: "Najsłodsze Serce Jezusa – Źródło Miłosierdzia",
    theme: "Odpocznienie w miłości Zbawiciela",
    verseRef: "Mt 11, 28-29",
    verseText: "Przyjdźcie do Mnie wszyscy, którzy utrudzeni i obciążeni jesteście, a Ja wam dam ukojenie. Weźcie moje jarzmo na siebie i uczcie się ode Mnie...",
    reflection: [
      "Serce Jezusa bije miłością do każdego człowieka. W Nim jest uleczenie dla wszelkich zranień, lęków i poczucia odrzucenia.",
      "Serce Maryi i Serce Jezusa są nierozerwalnie złączone. Kto kocha Maryję, ten niechybnie spocznie w Sercu Jezusa.",
      "Powierz dziś Jezusowi wszystkie swoje ciężary, niepokoje o zdrowie, dzieci i przyszłość. On się zatroszczy."
    ],
    prayer: "Najświętsze Serce Jezusa, gorejące ognisko miłości, zmiłuj się nad nami. Niepokalane Serce Maryi, bądź naszym ratunkiem.",
    aspiration: "Jezu cichy i pokornego Serca, uczyń serca nasze według Serca Twego."
  },
  {
    day: 31,
    dateStr: "5 grudnia 2026",
    shortDate: "5 XII",
    title: "Czym jest Święta Niewola Miłości?",
    theme: "Istota Traktatu św. Ludwika Marii Grignion de Montfort",
    verseRef: "Ga 2, 20",
    verseText: "Teraz zaś już nie ja żyję, lecz żyje we mnie Chrystus. Choć nadal prowadzę życie w ciele, jednak obecne życie moje jest życiem wiary w Syna Bożego, który umiłował mnie i samego siebie wydał za mnie.",
    reflection: [
      "Św. Ludwik nazywa to oddanie «niewolą miłości». Nie ma to nic wspólnego ze zniewoleniem ludzkim – to całkowita przynależność do Chrystusa z miłości.",
      "Oddajemy Maryi nasze ciało i duszę, dobra zewnętrzne (majątek) i wewnętrzne (zasługi dobrych uczynków i modlitw), aby Ona dysponowała nimi dla większej chwały Bożej.",
      "To najbezpieczniejsza, najkrótsza i najdoskonalsza droga do świętości."
    ],
    prayer: "Matko Boża, pragnę należeć do Ciebie bez reszty. Bądź Królową mojego serca, moich myśli i wszystkich moich dni.",
    aspiration: "Totus Tuus ego sum et omnia mea Tua sunt – Cały Twój jestem, a wszystko moje Twoim jest!"
  },
  {
    day: 32,
    dateStr: "6 grudnia 2026",
    shortDate: "6 XII",
    title: "Praktykowanie nabożeństwa na co dzień",
    theme: "Wszystko przez Maryję, z Maryją, w Maryi i dla Maryi",
    verseRef: "Kol 3, 17",
    verseText: "I wszystko, cokolwiek działacie słowem lub czynem, wszystko czyńcie w imię Pana Jezusa, dziękując Bogu Ojcu przez Niego.",
    reflection: [
      "Jutro kończymy 33-dniowe przygotowanie, a pojutrze złożymy Akt Ofiarowania. Jak żyć tym oddaniem na co dzień?",
      "Św. Ludwik podaje cztery złote zasady: czynić wszystko PRZEZ Maryję (w duchu Jej posłuszeństwa), Z Maryją (biorąc Ją za wzór), W Maryi (trwając w Jej obecności) i DLA Maryi (ku Jej czci, by przyprowadzać dusze do Jezusa).",
      "Przed każdym ważnym działaniem powiedz w sercu: «Maryjo, zróbmy to razem!»."
    ],
    prayer: "Naucz mnie, Panie, oddychać Maryją tak, jak ciało oddycha powietrzem. Niech Jej obecność uświęca każdy mój krok.",
    aspiration: "Wszystko z Maryją, dla Jezusa!"
  },
  {
    day: 33,
    dateStr: "7 grudnia 2026",
    shortDate: "7 XII",
    title: "Wigilia Ofiarowania – Wyciszenie i gotowość",
    theme: "Ostatnie przygotowanie przed Uroczystością Niepokalanego Poczęcia NMP",
    verseRef: "Iz 61, 10",
    verseText: "Tak bardzo weselę się w Panu, dusza moja raduje się w Bogu moim, bo przyodział mnie w szaty zbawienia, okrył mnie płaszczem sprawiedliwości...",
    reflection: [
      "Dotarliśmy do 33. dnia naszych rekolekcji! Twoje serce przebyło długą drogę oczyszczenia, poznania siebie i zachwytu nad Bogiem i Jego Matką.",
      "Jutro, 8 grudnia – w Uroczystość Niepokalanego Poczęcia Najświętszej Maryi Panny – dokona się uroczysty Akt Poświęcenia.",
      "Spędź dzisiejszy wieczór w skupieniu i dziękczynieniu. Przeczytaj spokojnie tekst Aktu Oddania, aby jutro złożyć go z pełną świadomością i miłością."
    ],
    prayer: "Dziękuję Ci, Panie Boże, za te 33 dni łaski. Dziękuję Ci za obecność Najświętszej Maryi Panny. Umocnij moje postanowienie wierności.",
    aspiration: "Oto idę, Panie, aby pełnić Twoją wolę!"
  }
];

export const CONSECRATION_DAY = {
  day: 34,
  dateStr: "8 grudnia 2026",
  shortDate: "8 XII",
  title: "Uroczystość Niepokalanego Poczęcia NMP – Dzień Ofiarowania",
  theme: "Uroczysty Akt Całkowitego Oddania się Jezusowi przez ręce Maryi",
  verseRef: "Łk 1, 46-49",
  verseText: "Wielbi dusza moja Pana i raduje się duch mój w Bogu, moim Zbawcy. Bo wejrzał na uniżenie swojej służebnicy. Oto bowiem odtąd błogosławić mnie będą wszystkie pokolenia, gdyż wielkie rzeczy uczynił mi Wszechmocny...",
  reflection: [
    "Dziś jest wielki dzień Twojego przymierza z Matką Bożą! Przez 33 dni przygotowywałeś swoje serce, a dziś oddajesz się całkowicie w niewolę miłości.",
    "Od dziś Maryja bierze całkowitą odpowiedzialność za Twoją drogę do nieba. Cokolwiek cię spotka – radość czy cierpienie – oddaj Jej z wiarą.",
    "Złóż dzisiaj ten Akt uroczyście, najlepiej po przyjęciu Komunii Świętej lub przed wizerunkiem Matki Boskiej Ostrobramskiej. Zapisz tę datę w sercu!"
  ],
  prayer: `AKT ODDANIA SIĘ JEZUSOWI PRZEZ RĘCE MARYI (wg św. Ludwika Marii de Montfort)

O Mądrości Odwieczna i Wcielona! O najsłodszy i najbardziej czcigodny Jezu, prawdziwy Boże i prawdziwy Człowieku, Synu Jednorodzony Ojca Przedwiecznego i Maryi, zawsze Dziewicy!
Oddaję Ci głęboki pokłon w łonie i chwale Twego Ojca w wieczności, oraz w dziewiczym łonie Maryi, Twej najgodniejszej Matki, w czasie Twego Wcielenia.
Dziękuję Ci, żeś wyniszczył samego siebie, przyjmując postać sługi, by mnie wybawić z okrutnej niewoli szatana.

W obecności całego Dworu Niebieskiego obieram Cię dzisiaj, o Maryjo, za moją Matkę i Królową.
Oddaję Ci i poświęcam, jako Twój niewolnik z miłości, moje ciało i moją duszę, moje dobra wewnętrzne i zewnętrzne, a nawet wartość moich dobrych uczynków, przeszłych, teraźniejszych i przyszłych.
Pozostawiam Ci całkowite i zupełne prawo dysponowania mną i wszystkim bez wyjątku, co do mnie należy, według Twojego upodobania, ku większej chwale Boga w czasie i w wieczności.

Przyjmij, o Panno łaskawa, tę moją drobną ofiarę. Spraw, abym we wszystkim był wiernym uczniem, naśladowcą i niewolnikiem Twej macierzyńskiej Miłości. Amen.`,
  aspiration: "Totus Tuus, Maria! Cały Twój, Maryjo, na zawsze!"
};
