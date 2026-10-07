import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-by-age',
  slug: 'durchschnittsgroesse-nach-alter-tabelle',
  title: 'Durchschnittsgröße nach Alter (0–20): Die vollständige Tabelle',
  subtitle:
    'Die durchschnittliche Körpergröße für jedes Alter von der Geburt bis 20 – für Jungen und Mädchen – plus die Wachstums-Meilensteine, die die Zahlen erklären.',
  metaDescription:
    'Durchschnittsgröße nach Alter (0–20) für Jungen und Mädchen, basierend auf CDC/WHO-Wachstumsdaten. Erfahren Sie, was in jedem Alter normal ist und wann ein Perzentil-Check sinnvoll ist.',
  datePublished: '2026-10-07',
  dateModified: '2026-10-07',
  readTime: '7 Min. Lesezeit',
  badge: 'Referenzleitfaden',
  tocTitle: 'In diesem Artikel',
  intro: {
    lead:
      'Ein 10-jähriges Kind ist im Durchschnitt etwa 140 cm groß – egal ob Junge oder Mädchen; mit 18 liegen die Durchschnittswerte bei etwa 179 cm für junge Männer und 166 cm für junge Frauen. Mädchen überholen Jungen kurzzeitig mit etwa 11–12 Jahren, dann ziehen die Jungen im späteren Pubertätsschub vorbei.',
    paragraphs: [
      'Wenn Sie prüfen möchten, ob Ihr Kind „normal groß für sein Alter“ ist, ist diese Tabelle Ihr Ausgangspunkt. Die Werte unten sind gerundete 50.-Perzentil-Referenzwerte aus den CDC-2000-Wachstumskurven (2–20 Jahre) und den WHO-Wachstumsstandards (unter 2 Jahre) – denselben Referenzen, die auch Kinderärzte verwenden.',
      'Ein wichtiger Hinweis vor den Zahlen: Durchschnitt ist nicht gleich ideal. Gesunde Kinder streuen weit um diese Werte, und eine einzelne Messung sagt weit weniger aus als der Verlauf über die Zeit.',
    ],
  },
  sections: [
    {
      id: 'tabelle',
      heading: 'Die vollständige Tabelle: Durchschnittsgröße nach Alter',
      paragraphs: [
        'Suchen Sie das Alter und lesen Sie quer. Die Werte sind ungefähre 50.-Perzentil-Referenzwerte in Zentimetern.',
      ],
      table: {
        headers: ['Alter', 'Jungen (cm)', 'Mädchen (cm)'],
        rows: [
          ['Geburt', '50', '49'],
          ['1 Jahr', '76', '75'],
          ['2 Jahre', '88', '87'],
          ['3 Jahre', '96', '95'],
          ['4 Jahre', '103', '102'],
          ['5 Jahre', '110', '109'],
          ['6 Jahre', '116', '115'],
          ['7 Jahre', '122', '121'],
          ['8 Jahre', '128', '128'],
          ['9 Jahre', '134', '134'],
          ['10 Jahre', '140', '140'],
          ['11 Jahre', '145', '146'],
          ['12 Jahre', '151', '152'],
          ['13 Jahre', '158', '158'],
          ['14 Jahre', '166', '162'],
          ['15 Jahre', '172', '164'],
          ['16 Jahre', '176', '165'],
          ['17 Jahre', '178', '166'],
          ['18 Jahre', '179', '166'],
          ['19 Jahre', '179', '166'],
          ['20 Jahre', '179', '166'],
        ],
        footnote:
          'Gerundete 50.-Perzentil-Referenzwerte auf Basis der CDC-2000-Wachstumskurven (2–20 Jahre) und der WHO-Wachstumsstandards (unter 2 Jahre). Gesunde Kinder streuen individuell stark um diese Werte.',
      },
      callout: {
        type: 'tip',
        text: 'Schnelle Umrechnungen: 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
      },
    },
    {
      id: 'meilensteine',
      heading: 'Wichtige Wachstums-Meilensteine in der Tabelle',
      paragraphs: [
        'Hinter den reinen Zahlen verbergen sich einige Muster, die man kennen sollte:',
      ],
      bulletPoints: [
        'Das schnellste Wachstum findet im ersten Lebensjahr statt: Babys legen rund 25 cm zu – mehr als in jedem späteren Lebensjahr.',
        'Mädchen erleben ihren Pubertätsschub zuerst – deshalb sind sie mit etwa 11–12 Jahren etwas größer als Jungen.',
        'Jungen starten ihren Schub etwa zwei Jahre später, wachsen aber länger – darum liegt der männliche Durchschnitt am Ende etwa 13 cm höher.',
        'Die Wachstumsfugen schließen sich bei Mädchen typischerweise mit 15–17 Jahren, bei Jungen mit 17–19 Jahren; danach endet nennenswertes Größenwachstum.',
        'Zwischen 8 und 10 Jahren sind Jungen und Mädchen im Durchschnitt fast identisch groß – die Geschlechtsunterschiede vor der Pubertät sind winzig.',
      ],
    },
    {
      id: 'werte-lesen',
      heading: 'So lesen Sie diese Zahlen richtig',
      paragraphs: [
        'Die Tabelle zeigt die Mitte – die Hälfte der Kinder liegt darüber, die Hälfte darunter. Auch das 25. oder 75. Perzentil ist genauso normal wie das 50., solange das Kind schon immer in etwa auf dieser Linie lag.',
        'Was Kinderärzten wirklich wichtig ist, ist nicht eine einzelne Zahl aus dieser Tabelle, sondern die eigene Kurve des Kindes: Ein stabiles Perzentil über die Jahre bedeutet gesundes Wachstum – auch beim 10. oder 90. Perzentil.',
        'Um genau zu sehen, wo ein Kind auf den offiziellen Kurven liegt, nutzen Sie die Perzentil-Rechner:',
      ],
      link: {
        text: '→ Perzentil-Rechner für Jungen',
        href: '/height-calculator/boys-percentile/',
      },
    },
    {
      id: 'pruefen',
      heading: 'Wann die Zahlen einen zweiten Blick verdienen',
      paragraphs: [
        'Wegen einer einzelnen Messung müssen Sie sich keine Sorgen machen. Achten Sie aber auf das Muster:',
      ],
      bulletPoints: [
        'Das Perzentil sinkt bei Kontrollen stetig (zum Beispiel 60. → 40. → 25.)',
        'Das Wachstum scheint über viele Monate zu stagnieren – außerhalb der normalen langsamen Phasen',
        'Das Kind liegt unter dem 3. oder über dem 97. Perzentil ohne ärztliche Begleitung',
      ],
      callout: {
        type: 'note',
        text: 'Wenn Ihnen etwas davon bekannt vorkommt, nehmen Sie die datierten Messungen mit zum Kinderarzt – der Verlauf über die Zeit hat medizinischen Wert, nicht eine einzelne Zahl.',
      },
      link: {
        text: '→ Größentabelle für Mädchen (CDC/WHO-basiert)',
        href: '/height-calculator/girls-chart/',
      },
    },
  ],
  faqs: [
    {
      question: 'Sind 5\'8" (173 cm) groß für einen 13-Jährigen?',
      answer:
        'Ja – deutlich über dem Durchschnitt. Ein 13-jähriger Junge ist im Schnitt etwa 158 cm groß, 173 cm liegen also ungefähr beim 90. Perzentil oder höher. Für ein 13-jähriges Mädchen (in dem Alter ebenfalls im Schnitt ~158 cm) gilt das Gleiche. Bedenken Sie: Frühentwickler können mit 13 groß sein und als Erwachsene im Durchschnitt landen, sobald die Gleichaltrigen aufholen.',
    },
    {
      question: 'Warum sind Jungen nach der Pubertät größer als Mädchen?',
      answer:
        'Testosteron sorgt bei Jungen für einen späteren, längeren Wachstumsschub: Er beginnt etwa zwei Jahre nach dem Schub der Mädchen und dauert länger an, und die Wachstumsfugen der Jungen schließen sich später (etwa 17–19 statt 15–17 Jahre bei Mädchen). Vor der Pubertät sind die Geschlechter im Durchschnitt fast identisch groß.',
    },
    {
      question: 'Mein Kind liegt unter dem Durchschnitt – muss ich mir Sorgen machen?',
      answer:
        'Nicht wegen einer einzelnen Messung. Prüfen Sie das Perzentil und vor allem, ob es über die Zeit stabil geblieben ist – ein Kind, das schon immer beim 15. Perzentil lag, wächst normal. Zum Kinderarzt sollten Sie, wenn das Perzentil immer weiter sinkt, das Wachstum über viele Monate stagniert oder Sie einfach besorgt sind.',
    },
    {
      question: 'In welchem Alter hören Teenager auf zu wachsen?',
      answer:
        'Die meisten Mädchen sind mit etwa 15–16 Jahren ausgewachsen, ungefähr zwei Jahre nach der ersten Periode. Die meisten Jungen sind mit etwa 17–18 Jahren fertig, manchmal mit kleinen Zuwächsen bis in die frühen Zwanziger. Sobald sich die Wachstumsfugen geschlossen haben, können weder Sport noch Nahrungsergänzung noch nennenswert Größe hinzufügen.',
    },
  ],
  relatedLinks: [
    { text: 'Größentabelle für Jungen', href: '/height-calculator/boys-chart/' },
    { text: 'Größentabelle für Mädchen', href: '/height-calculator/girls-chart/' },
    { text: 'Perzentil-Rechner für Jungen', href: '/height-calculator/boys-percentile/' },
    { text: 'Perzentil-Rechner für Mädchen', href: '/height-calculator/girls-percentile/' },
    { text: 'Erwachsenengröße Ihres Kindes vorhersagen', href: '/articles/predict-your-childs-adult-height/' },
  ],
};
