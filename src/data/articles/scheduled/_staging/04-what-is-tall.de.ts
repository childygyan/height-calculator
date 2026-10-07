import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'what-is-tall',
  slug: 'welche-groesse-gilt-als-gross',
  title: 'Welche Körpergröße gilt als „groß“? (Mit echten Daten)',
  subtitle:
    'Vergessen Sie vage Meinungen — hier erfahren Sie, ab wann „groß“ für Männer und Frauen tatsächlich beginnt, basierend auf echten Perzentildaten.',
  metaDescription:
    'Welche Körpergröße gilt als groß? Echte Perzentildaten: US-Männer ab 1,88 m (6\'2"), US-Frauen ab 1,73 m (5\'8"). Tabellen, Unterschiede nach Land und FAQs.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  readTime: '5 Min. Lesezeit',
  badge: 'Referenzleitfaden',
  tocTitle: 'In diesem Artikel',
  intro: {
    lead:
      'In den USA gilt ein Mann statistisch ab etwa 1,88 m (6\'2") als „groß“ und eine Frau ab etwa 1,73 m (5\'8") — beide Werte liegen nahe dem 95. Perzentil, das heißt, nur etwa 1 von 20 Erwachsenen ist größer.',
    paragraphs: [
      '„Groß“ fühlt sich subjektiv an, doch Statistiker ziehen die Grenze mit Perzentilen: die obersten 5 % der Bevölkerung. Weiter unten finden Sie die exakten Perzentiltabellen für Männer und Frauen, warum dieselbe Zahl je nach Geschlecht und Land etwas ganz anderes bedeutet — und wie Sie prüfen können, wo Sie selbst stehen.',
    ],
  },
  sections: [
    {
      id: 'answer',
      heading: 'Die kurze Antwort: die Perzentiltabellen',
      paragraphs: [
        'Körpergrößen-Perzentile stammen aus großen Bevölkerungsumfragen (in den USA NHANES vom CDC). Das 95. Perzentil ist die Standardgrenze, die Forscher für „groß“ verwenden — darüber sind Sie größer als etwa 95 von 100 Personen Ihres Geschlechts.',
      ],
      table: {
        headers: ['Perzentil', 'Männer', 'Frauen', 'Was es bedeutet'],
        rows: [
          ['50. (Durchschnitt)', '5\'9" (175 cm)', '5\'3.5" (161 cm)', 'Genau in der Mitte'],
          ['75.', '5\'11" (180 cm)', '5\'5" (165 cm)', 'Deutlich über dem Durchschnitt'],
          ['90.', '6\'0.5" (184 cm)', '5\'6.5" (169 cm)', 'Ziemlich groß — obere 10 %'],
          ['95.', '6\'2" (188 cm)', '5\'8" (173 cm)', 'Groß — obere 5 %'],
          ['97.+', '6\'3"+ (190 cm+)', '5\'9"+ (175 cm+)', 'Sehr groß — obere 3 %'],
        ],
        footnote:
          'Ungefähre Werte für US-Erwachsene (NHANES). Je nach Erhebungsjahr variieren die Quellen leicht — als Referenz verwenden, nicht als exakte Messung.',
      },
      callout: {
        type: 'tip',
        text: 'Die meistverstandene Zahl: 6\'0" (183 cm) beim Mann entspricht in den USA nur etwa dem 84. Perzentil — überdurchschnittlich, aber statistisch noch nicht „groß“.',
      },
      link: {
        text: '→ Prüfen Sie Ihr eigenes Perzentil',
        href: '/height-calculator/boys-percentile/',
      },
    },
    {
      id: 'men-vs-women',
      heading: 'Männer vs. Frauen: Der Kontext ändert alles',
      paragraphs: [
        'Dieselbe Körpergröße kann für das eine Geschlecht durchschnittlich und für das andere groß sein. Ein Mann mit 5\'8" (173 cm) liegt etwa beim 30. Perzentil — unter dem Durchschnitt. Eine Frau mit 5\'8" ist beim 95. Perzentil — eindeutig groß.',
        'Deshalb lässt sich „Ist X groß?“ ohne Angabe des Geschlechts nicht beantworten:',
      ],
      bulletPoints: [
        '5\'7" (170 cm): eher durchschnittlicher Mann (~25. Perzentil) vs. große Frau (~90. Perzentil)',
        '5\'10" (178 cm): überdurchschnittlicher Mann (~70.) vs. sehr große Frau (~98.)',
        '6\'0" (183 cm): überdurchschnittlicher Mann (~84.) vs. extrem große Frau (~99.+)'
      ],
    },
    {
      id: 'by-country',
      heading: 'Es hängt auch vom Land ab',
      paragraphs: [
        '„Groß“ ist relativ zur Bevölkerung um Sie herum. In den Niederlanden, wo der durchschnittliche Mann 183,8 cm misst, dreht sich bei 6\'2" kaum jemand um. In Japan, wo der durchschnittliche Mann etwa 172 cm misst, fällt dieselbe Größe deutlich auf.',
        'Grobe „groß“-Grenzen (95. Perzentil) weltweit:',
      ],
      bulletPoints: [
        'Niederlande: ~6\'4" (193 cm) Männer / ~5\'10" (178 cm) Frauen',
        'USA: ~6\'2" (188 cm) Männer / ~5\'8" (173 cm) Frauen',
        'Brasilien: ~6\'1" (185 cm) Männer / ~5\'7" (170 cm) Frauen',
        'Japan: ~5\'11" (180 cm) Männer / ~5\'5" (165 cm) Frauen',
      ],
      link: {
        text: '→ Vollständige Tabelle: Durchschnittsgröße nach Land',
        href: '/articles/average-height-by-country/',
      },
    },
    {
      id: 'compare',
      heading: 'Wo stehen Sie?',
      paragraphs: [
        'Zahlen sind nützlich, aber nichts geht über den direkten Vergleich. Stellen Sie Ihre Größe neben einen Freund, einen Promi oder den Durchschnitt Ihres Landes und sehen Sie den Unterschied visuell:',
      ],
      link: {
        text: '→ Jetzt Größe vergleichen (kostenlos)',
        href: '/compare/',
      },
    },
  ],
  faqs: [
    {
      question: 'Sind 6 Fuß (183 cm) groß?',
      answer:
        'Für einen Mann in den USA entsprechen 6\'0" (183 cm) etwa dem 84. Perzentil — größer als die meisten Menschen, denen Sie begegnen, aber knapp unter der statistischen „groß“-Grenze (95. Perzentil, ~6\'2"). In der Alltagssprache würden die meisten es trotzdem als groß bezeichnen.',
    },
    {
      question: 'Sind 5\'8" (173 cm) groß für eine Frau?',
      answer:
        'Ja. Mit 5\'8" (173 cm) liegt eine Frau in den USA etwa beim 95. Perzentil — größer als etwa 19 von 20 Frauen. Das ist nach jeder Definition eindeutig „groß“.',
    },
    {
      question: 'Welche Körpergröße gilt in Japan als groß?',
      answer:
        'Da die Durchschnittswerte niedriger liegen (etwa 172 cm bei Männern, 158 cm bei Frauen), beginnt die „groß“-Grenze bei etwa 5\'11" (180 cm) für Männer und 5\'5" (165 cm) für Frauen — ungefähr das 95. Perzentil der japanischen Bevölkerung.',
    },
    {
      question: 'Welche Körpergröße gilt als klein?',
      answer:
        'Das Gegenstück zu „groß“: unter dem 5. Perzentil. In den USA sind das grob unter 5\'5" (164 cm) für Männer und unter 5\'0" (151 cm) für Frauen. Wie „groß“ verschiebt sich auch „klein“ je nach Geschlecht und Land.',
    },
  ],
  relatedLinks: [
    { text: 'Größenvergleich', href: '/compare/' },
    { text: 'Perzentil-Rechner für Jungen', href: '/height-calculator/boys-percentile/' },
    { text: 'Perzentil-Rechner für Mädchen', href: '/height-calculator/girls-percentile/' },
    { text: 'Durchschnittsgröße nach Land', href: '/articles/average-height-by-country/' },
  ],
};
