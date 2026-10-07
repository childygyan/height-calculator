import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-us',
  slug: 'durchschnittsgroesse-usa',
  title: 'Durchschnittsgröße in den USA: Männer, Frauen & nach Bundesstaat',
  subtitle:
    'Die nationalen Durchschnittswerte, eine Aufschlüsselung nach Bundesstaaten, die du sonst nirgends findest, und wie sich die Körpergröße in Amerika über 100 Jahre verändert hat.',
  metaDescription:
    'Durchschnittsgröße in den USA: Männer ca. 175 cm, Frauen ca. 163 cm (NHANES). Tabelle nach Bundesstaaten, größte vs. kleinste Bundesstaaten und der 100-Jahres-Trend.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
  readTime: '6 Min. Lesezeit',
  badge: 'Referenz-Guide',
  tocTitle: 'In diesem Artikel',
  intro: {
    lead:
      'Die Durchschnittsgröße in den USA beträgt etwa 5 Fuß 9 Zoll (175 cm) für Männer und 5 Fuß 4 Zoll (163 cm) für Frauen — laut gemessenen Daten der National Health and Nutrition Examination Survey (NHANES).',
    paragraphs: [
      'Das sind die nationalen Werte — doch die USA haben nicht eine einzige Körpergröße. Bundesstaaten des oberen Mittleren Westens wie Montana und Minnesota sind messbar größer als Staaten wie Hawaii und New Mexico, und die Wachstumsgeschichte des Landes im letzten Jahrhundert sieht ganz anders aus als die Europas.',
      'Im Folgenden: die nationalen Zahlen im Detail, eine Tabelle mit Werten nach Bundesstaaten aus Umfragedaten sowie der 100-Jahres-Trend, der Amerika vom größten Land der Welt ins Mittelfeld brachte.',
    ],
  },
  sections: [
    {
      id: 'national-averages',
      heading: 'Die nationalen Werte: 175 cm und 163 cm',
      paragraphs: [
        'Die verlässlichsten Zahlen stammen aus NHANES, durchgeführt von der CDC — im Gegensatz zu den meisten Umfragen werden die Menschen dort tatsächlich vermessen statt nur gefragt. Die gängigsten gemessenen Durchschnittswerte für Erwachsene in den USA sind:',
      ],
      bulletPoints: [
        'Männer: etwa 5 Fuß 9 Zoll (175 cm)',
        'Frauen: etwa 5 Fuß 4 Zoll (163 cm)',
      ],
      callout: {
        type: 'tip',
        text: 'Gemessene Durchschnittswerte liegen etwa einen halben bis einen Zoll unter den selbst angegebenen Umfragewerten — die meisten runden bei der Frage nach oben. Vertraue gemessenen Daten (wie NHANES) mehr als Umfragewerten.',
      },
    },
    {
      id: 'by-state',
      heading: 'Durchschnittsgröße nach Bundesstaat (Tabelle)',
      paragraphs: [
        'Daten zur Körpergröße auf Bundesstaatenebene sind schwerer zu bekommen — keine nationale Erhebung veröffentlicht gemessene Werte für jeden Bundesstaat. Die folgende Tabelle fasst Näherungswerte aus selbst angegebenen Umfragedaten (etwa BRFSS der CDC) und veröffentlichten Bundesstaaten-Vergleichen zusammen. Betrachte sie als Schätzwerte: Selbstangaben fallen tendenziell zu hoch aus, und die Methoden unterscheiden sich je nach Quelle.',
      ],
      table: {
        headers: ['Bundesstaat', 'Männer (ca.)', 'Frauen (ca.)'],
        rows: [
          ['Montana', '5\'11"', '5\'6"'],
          ['Minnesota', '5\'11"', '5\'6"'],
          ['North Dakota', '5\'11"', '5\'6"'],
          ['South Dakota', '5\'10"', '5\'5"'],
          ['Nebraska', '5\'10"', '5\'5"'],
          ['Kansas', '5\'10"', '5\'5"'],
          ['Iowa', '5\'10"', '5\'5"'],
          ['Wisconsin', '5\'10"', '5\'5"'],
          ['Wyoming', '5\'10"', '5\'5"'],
          ['Colorado', '5\'10"', '5\'5"'],
          ['Vermont', '5\'10"', '5\'5"'],
          ['Oregon', '5\'9"', '5\'4"'],
          ['Washington', '5\'9"', '5\'4"'],
          ['Texas', '5\'9"', '5\'4"'],
          ['Kalifornien', '5\'9"', '5\'4"'],
          ['Florida', '5\'9"', '5\'4"'],
          ['New York', '5\'9"', '5\'4"'],
          ['Mississippi', '5\'8"', '5\'4"'],
          ['New Mexico', '5\'8"', '5\'3"'],
          ['Hawaii', '5\'8"', '5\'3"'],
        ],
        footnote:
          'Näherungswerte aus selbst angegebenen Umfragedaten (z. B. CDC BRFSS) und veröffentlichten Bundesstaaten-Vergleichen. Selbst angegebene Größen liegen typischerweise über gemessenen Werten — als groben Vergleich nutzen, nicht als exakte Messungen.',
      },
    },
    {
      id: 'trend',
      heading: 'Der 100-Jahres-Trend: vom Spitzenreiter zum Stillstand',
      paragraphs: [
        'Vor einem Jahrhundert gehörten die Amerikaner zu den größten Menschen der Welt. In den USA geborene Männer um 1914 waren im Schnitt fast so groß wie heute — während ein Großteil Europas zurücklag, gebremst durch schlechtere Ernährung und härtere Lebensbedingungen.',
        'Dann kreuzten sich die Linien. Zwischen den 1950er- und 1980er-Jahren legte Nordeuropa mit jeder Generation weiter zu, während das amerikanische Wachstum stagnierte. Die Niederlande, Dänemark und ihre Nachbarn überholten die USA und schauten nie zurück.',
        'Forscher nennen einige Gründe: nahezu flächendeckend gute Kinderernährung in Europa, starke Gesundheitssysteme — und auf amerikanischer Seite die wachsende wirtschaftliche Ungleichheit, die dazu führt, dass der nationale Durchschnitt Gruppen von Kindern verdeckt, die nie die Ernährung bekamen, um ihr volles Wachstumspotenzial zu erreichen.',
      ],
      callout: {
        type: 'note',
        text: 'Der US-Stillstand bedeutet nicht, dass Amerikaner schrumpfen — sondern dass sie aufgehört haben zuzulegen, während andere Länder aufholten und sie überholten.',
      },
    },
    {
      id: 'where-do-you-stand',
      heading: 'Wo stehst du?',
      paragraphs: [
        'Nationale und bundesstaatliche Durchschnittswerte sind nützlicher Kontext — doch die Zahl, die zählt, ist deine eigene: korrekt gemessen, morgens, barfuß an einer Wand.',
        'Vergleiche deine Größe mit dem US-Durchschnitt oder stelle dich Seite an Seite mit jemand anderem:',
      ],
      link: {
        text: '→ Größenrechner öffnen',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: 'Welcher Bundesstaat hat die größten Menschen?',
      answer:
        'Die Bundesstaaten des oberen Mittleren Westens liegen in Umfragedaten durchgehend vorn — Montana, Minnesota und North Dakota führen die meisten Bundesstaaten-Rankings an, mit Männern im Schnitt um 5\'11". Beachte: Bundesstaaten-Werte sind Näherungen aus selbst angegebenen Umfragen, nicht aus gemessenen Daten.',
    },
    {
      question: 'Werden Amerikaner immer größer?',
      answer:
        'Eigentlich nicht — die Durchschnittsgröße in den USA ist seit den 1970er–80er-Jahren ungefähr gleich geblieben. Die großen amerikanischen Zuwächse gab es früher im 20. Jahrhundert; seitdem haben Nordeuropa und andere Regionen aufgeholt und die USA überholt.',
    },
    {
      question: 'Wie groß ist der durchschnittliche Mann in den USA?',
      answer:
        'Etwa 5 Fuß 9 Zoll (175 cm), laut gemessenen NHANES-Daten der CDC. Selbst angegebene Umfragen liefern etwas höhere Werte, weil Menschen tendenziell aufrunden.',
    },
    {
      question: 'Sind 5\'10" groß für einen Mann in den USA?',
      answer:
        'Es liegt leicht über dem Durchschnitt — etwa das 60. bis 65. Perzentil unter amerikanischen Männern. In den größten Bundesstaaten wie Montana oder Minnesota ist es eher Durchschnitt, während es in kleineren Bundesstaaten mehr auffällt.',
    },
  ],
  relatedLinks: [
    { text: 'Größenrechner', href: '/height-calculator/' },
    { text: 'Größenvergleich', href: '/compare/' },
    { text: 'Durchschnittsgröße nach Land', href: '/articles/average-height-by-country/' },
  ],
};
