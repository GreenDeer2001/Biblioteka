export const books = [
  {
    id: "kasacja",
    title: "Kasacja",
    author: "Remigusz Mróz",
    description:
      'Syn biznesmena zostaje oskarżony o zabicie dwóch osób. Wina wydaje się oczywista, a morderca przez 10 dni nie pozbywa się ciał swych ofiar.W kancelarii "Żelazny&McVay" sprawę prowadzi Joanna Chyłka, nieprzebierająca w środkach prawniczka, która zrobi wszystko, by odnieść zwycięstwo w ostatecznej batalii sądowej. Pomaga jej młody aplikant – Kordian. Mimo różnicy wieku ich znajomość rozwija się nie tylko na płaszczyźnie zawodowej. Tymczasem ich klient zdaje się prowadzić własną grę, której reguły zna tylko on sam. Nie przyznaje się do winy, ale też nie zaprzecza, że jest mordercą. Dwoje prawników zostaje wciągniętych w wir manipulacji, który sięga dalej, niż sami mogliby przypuszczać.',
    isRent: false,
    image:
      "https://cdn-lubimyczytac.pl/upload/books/4904000/4904710/768544-352x500.jpg",
    category: "Kryminał",
    history: [
      { start: "28/07/2019", end: "12/08/2019", userID: 1234 },
      { start: "11/09/2019", end: "22/09/2019", userID: 2222 },
    ],
  },
  {
    id: "pułapkimyslenia",
    title: "Pułapki Myślenia",
    author: "Daniel Kehernman",
    description:
      'Syn biznesmena zostaje oskarżony o zabicie dwóch osób. Wina wydaje się oczywista, a morderca przez 10 dni nie pozbywa się ciał swych ofiar.W kancelarii "Żelazny&McVay" sprawę prowadzi Joanna Chyłka, nieprzebierająca w środkach prawniczka, która zrobi wszystko, by odnieść zwycięstwo w ostatecznej batalii sądowej. Pomaga jej młody aplikant – Kordian. Mimo różnicy wieku ich znajomość rozwija się nie tylko na płaszczyźnie zawodowej. Tymczasem ich klient zdaje się prowadzić własną grę, której reguły zna tylko on sam. Nie przyznaje się do winy, ale też nie zaprzecza, że jest mordercą. Dwoje prawników zostaje wciągniętych w wir manipulacji, który sięga dalej, niż sami mogliby przypuszczać.',
    isRent: true,
    image:
      "https://cf1-taniaksiazka.statiki.pl/images/popups/A74/9788372787873.jpg",
    category: "Psychologia",
    history: [{ start: "11/10/2020", end: "", userID: 1234 }],
  },
  {
    id: "javapodstawy",
    title: "Java Podstawy",
    author: "Horstmann Cay S.",
    description:
      "Świat usłyszał o Javie pod koniec 1995 roku. Wkrótce stała się niezwykle popularną i cenioną technologią. Dziś jest dojrzałym, rozbudowanym, elastycznym, a przy tym niezwykle starannie zaprojektowanym językiem programowania, który może służyć do pisania dużych systemów, małych programów, aplikacji mobilnych i aplikacji WWW. Charakteryzuje się też wysublimowanymi zabezpieczeniami, które w niego wbudowano. Każdy, kto chce pisać dobry i wydajny kod, powinien dobrze poznać zarówno podstawowe, jak i zaawansowane cechy Javy.",
    isRent: false,
    image: "https://ecsmedia.pl/c/java-podstawy-b-iext55321563.jpg",
    category: "Informatyka",
    history: [{ start: "28/07/2019", end: "12/08/2019", userID: 1234 }],
  },
  {
    id: "ekipaogarnijtenwielkiekstremalnychallengeekipy",
    title: "Ekipa. Ogarnij ten wielki, ekstremalny Challenge Ekipy. ",
    author: "Ekipa",
    description:
      "Friz, Wersow, Mini Majk, Patec, Tromba, Marcysia, Mixer, Murcix, Wujek Łuki, Fusia, Poczciwy Krzychu - mieszkańcy domu Ekipy właśnie ogarniają wielki, ekstremalny challenge. Dołącz do Ekipy i razem ze swoimi przyjaciółmi wkręć się w ich świat. Będzie sztos.",
    isRent: false,
    image:
      "https://ecsmedia.pl/c/ekipa-ogarnij-ten-wielki-ekstremalny-challenge-ekipy-b-iext65267093.jpg",
    category: "Dla Młodzieży",
    history: [],
  },
].sort((a, b) => (a.title > b.title ? 1 : -1));
