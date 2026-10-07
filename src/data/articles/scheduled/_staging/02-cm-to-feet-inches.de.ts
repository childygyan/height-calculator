import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'cm-to-feet-inches',
  slug: 'cm-in-fuss-und-zoll',
  title: 'Cm in Fuß und Zoll: Die komplette Umrechnungsanleitung',
  subtitle:
    'Die exakte Formel, ein durchgerechnetes Beispiel und eine Schnellreferenz-Tabelle — jede Körpergröße in Sekunden von Zentimetern in Fuß und Zoll umrechnen.',
  metaDescription:
    'Cm in Fuß und Zoll umrechnen: die exakte Formel, ein durchgerechnetes Beispiel (175 cm = 5\'9"), eine Schnellreferenz-Tabelle (150–200 cm) und Antworten auf häufige Fragen.',
  datePublished: '2026-10-08',
  dateModified: '2026-10-08',
  readTime: '5 Min. Lesezeit',
  badge: 'Nachschlagewerk',
  tocTitle: 'In diesem Artikel',
  intro: {
    lead:
      'So rechnest du cm in Fuß und Zoll um: Teile die Zentimeter durch 30,48 — das ergibt die Fuß. Multipliziere den Dezimalrest dann mit 12 — das sind die restlichen Zoll. Beispiel: 175 cm ÷ 30,48 = 5,741 ft, und 0,741 × 12 = 8,9 in — also 175 cm = 5\'8,9", gerundet 5\'9".',
    paragraphs: [
      'Zentimeter sind der Weltstandard, aber Fuß und Zoll dominieren nach wie vor in den USA und Großbritannien — auf Dating-Profilen, in medizinischen Formularen und in Sportstatistiken. Wer die Umrechnung beherrscht, spart sich jedes Mal das Herumfummeln mit dem Taschenrechner.',
      'Im Folgenden: die zwei exakten Formeln, ein Schritt-für-Schritt durchgerechnetes Beispiel und eine komplette Referenztabelle von 150 bis 200 cm.',
    ],
  },
  sections: [
    {
      id: 'formula',
      heading: 'Die Formel',
      paragraphs: [
        'Du brauchst zwei Fakten: 1 Fuß = 30,48 cm und 1 Zoll = 2,54 cm (beide per internationaler Definition exakt). Von da aus ist die Umrechnung nur noch zwei Schritte:',
      ],
      bulletPoints: [
        'Schritt 1 — Fuß: Teile die Zentimeter durch 30,48. Die ganze Zahl sind deine Fuß.',
        'Schritt 2 — Zoll: Nimm den Dezimalrest und multipliziere ihn mit 12. Das sind deine Zoll.',
      ],
      callout: {
        type: 'tip',
        text: 'Abkürzung für den Zoll-Teil: Gesamtzoll = cm ÷ 2,54. Dann: Fuß = ganze Zahl ÷ 12, und der Rest sind die Zoll. Gleiches Ergebnis, ein Rechenschritt weniger, wenn du lieber in Zoll arbeitest.',
      },
    },
    {
      id: 'worked-example',
      heading: 'Durchgerechnetes Beispiel: 175 cm',
      paragraphs: [],
      steps: [
        {
          number: 1,
          title: 'Durch 30,48 teilen',
          description: '175 ÷ 30,48 = 5,741. Die ganze Zahl ergibt 5 Fuß.',
        },
        {
          number: 2,
          title: 'Den Rest mit 12 multiplizieren',
          description: '0,741 × 12 = 8,9. Das sind deine Zoll.',
        },
        {
          number: 3,
          title: 'Ergebnis ablesen',
          description: '175 cm = 5\'8,9" — im Alltag sagt man einfach 5\'9".',
        },
      ],
      callout: {
        type: 'note',
        text: 'Körpergrößen werden im Gespräch fast immer auf den nächsten ganzen Zoll gerundet. 5\'8,9" wird zu 5\'9", 5\'3,0" bleibt 5\'3".',
      },
    },
    {
      id: 'reference-table',
      heading: 'Schnellreferenz-Tabelle (150–200 cm)',
      paragraphs: [
        'Die häufigsten Körpergrößen, bereits umgerechnet — ganz ohne Kopfrechnen:',
      ],
      table: {
        headers: ['Zentimeter', 'Fuß und Zoll', 'Gesagt wird'],
        rows: [
          ['150 cm', '4\'11.1"', '4\'11"'],
          ['155 cm', '5\'1.0"', '5\'1"'],
          ['160 cm', '5\'3.0"', '5\'3"'],
          ['165 cm', '5\'5.0"', '5\'5"'],
          ['170 cm', '5\'7.0"', '5\'7"'],
          ['175 cm', '5\'8.9"', '5\'9"'],
          ['180 cm', '5\'10.9"', '5\'11"'],
          ['185 cm', '6\'0.8"', '6\'1"'],
          ['190 cm', '6\'2.8"', '6\'3"'],
          ['195 cm', '6\'4.8"', '6\'5"'],
          ['200 cm', '6\'6.7"', '6\'7"'],
        ],
        footnote:
          'Exakte Umrechnungen auf eine Dezimalstelle; „Gesagt wird" ist die gerundete Alltagsform.',
      },
    },
    {
      id: 'reverse',
      heading: 'Der umgekehrte Weg: Fuß und Zoll in cm',
      paragraphs: [
        'Zurück umzurechnen geht so: Multipliziere die Fuß mit 30,48 und die Zoll mit 2,54, und addiere beides. Beispiel: 5\'9" = (5 × 30,48) + (9 × 2,54) = 152,4 + 22,86 = 175,26 cm ≈ 175 cm.',
        'Musst du das öfter machen? Spar dir das Kopfrechnen — unser Umrechner schafft das sofort in beide Richtungen:',
      ],
      link: {
        text: '→ Größenrechner öffnen',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: 'Wie viele cm hat ein Fuß?',
      answer:
        'Exakt 30,48 cm. Der Fuß wurde 1959 durch internationale Vereinbarung auf diesen Wert festgelegt.',
    },
    {
      question: 'Wie viele cm hat ein Zoll?',
      answer:
        'Exakt 2,54 cm. Deshalb ergibt die Division der Zentimeter durch 2,54 die Gesamtzoll.',
    },
    {
      question: 'Wie viel sind 175 cm in Fuß und Zoll?',
      answer:
        '175 cm = 5\'8,9" — im Alltag gerundet 5\'9".',
    },
    {
      question: 'Warum benutzen die Amerikaner noch Fuß und Zoll?',
      answer:
        'Die USA haben das imperiale System aus Tradition und wegen der Umstellungskosten behalten — Straßenschilder, Bauwesen und Alltagsgewohnheiten laufen alle auf Fuß und Zoll. Der Rest der Welt — und die gesamte Wissenschaft — nutzt stattdessen das metrische System.',
    },
  ],
  relatedLinks: [
    { text: 'Größenrechner', href: '/height-calculator/' },
    { text: 'Durchschnittsgröße nach Land', href: '/articles/average-height-by-country/' },
  ],
};
