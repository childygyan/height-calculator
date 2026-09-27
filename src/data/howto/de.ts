import type { HowToGuideData } from './types';

export const deHowToGuide: HowToGuideData = {
  locale: 'de',
  title: 'Height Calculator benutzen',
  subtitle: 'Eine umfassende Schritt-für-Schritt-Anleitung zum Messen, Umrechnen, Vergleichen und Verstehen von Körpergrößen — vom Babywachstum bis zur Erwachsenengröße.',
  badge: 'Vollständiger Benutzerleitfaden',
  metaDescription: 'Lerne Height Calculator zu benutzen: Größe genau messen, cm und Fuß/Zoll umrechnen, Größenunterschiede berechnen, Perzentile prüfen und Wachstumskurven verstehen.',
  readTime: '8 Min. Lesezeit',
  tocTitle: 'Inhaltsverzeichnis',
  intro: {
    lead: 'Height Calculator ist ein kostenloser Größenrechner, der dir hilft, Körpergrößen vorherzusagen, zu verfolgen und wirklich zu verstehen — von den ersten Zentimetern des Babys bis zur Erwachsenengröße.',
    paragraphs: [
      'Ob du als Eltern das Wachstum deines Babys verfolgst, dich fragst, wie groß dein Kind einmal wird, oder einfach zwischen Zentimetern und Fuß/Zoll umrechnest — rohe Zahlen erzählen selten die ganze Geschichte. Zu lesen, dass ein Kind 95 cm groß ist, ist abstrakt; zu sehen, wo das auf der CDC/WHO-Perzentilkurve liegt — oder was es für die Erwachsenengröße prognostiziert — verwandelt eine Zahl in Verständnis.',
      'Dieser Leitfaden führt dich durch jede Funktion: genaues Messen, Einheitenumrechnung, Wachstumsperzentile, Kindergrößen-Prognose und das richtige Lesen der Ergebnisse.',
    ],
  },
  sections: [
    {
      id: 'what-is-height-calculator',
      heading: '1. Was ist ein Größenrechner?',
      paragraphs: [
        'Ein Größenrechner verwandelt rohe Zahlen in klare Antworten. Statt dich zu fragen, was ein Perzentil bedeutet, wie viele Zentimeter zwei Größen trennen oder wie groß ein Kind einmal wird, löst der Rechner das sofort — auf Basis echter Wachstumsreferenzen.',
        'Mit Height Calculator kannst du zwischen Zentimetern und Fuß/Zoll umrechnen, den exakten Unterschied zwischen zwei Größen berechnen, prüfen, wo eine Größe auf den CDC/WHO-Perzentilreferenzen liegt, und die Erwachsenengröße eines Kindes anhand der Elterngröße schätzen — alles kostenlos, ohne Konto.',
      ],
      callout: {
        type: 'info',
        text: 'Alle Ergebnisse sind edukative Schätzungen auf Basis öffentlicher Wachstumsdaten — keine medizinische Beratung.',
      },
    },
    {
      id: 'measuring-accurately',
      heading: '2. Körpergröße genau messen',
      paragraphs: [
        'Jede gute Berechnung beginnt mit einer guten Messung. Eine nachlässige Messung von 2 cm kann ein ganzes Perzentil verschieben — es lohnt sich also, es richtig zu machen.',
      ],
      steps: [
        { number: 1, title: 'Barfuß', description: 'Zieh Schuhe und dicke Socken aus. Miss immer ohne Schuhe, um konsistent zu bleiben.' },
        { number: 2, title: 'An die Wand', description: 'Stell dich mit geradem Rücken an eine glatte Wand, Fersen zusammen, Blick nach vorn.' },
        { number: 3, title: 'Kopfoberseite markieren', description: 'Nutze einen flachen Gegenstand (z. B. ein Buch) an der Wand, im rechten Winkel zum Scheitel.' },
        { number: 4, title: 'Auf 0,1 cm messen', description: 'Miss vom Boden bis zur Markierung auf 0,1 cm bzw. ⅛ Zoll genau.' },
        { number: 5, title: 'Babys: im Liegen messen', description: 'Bei Babys und Kleinkindern die Länge im Liegen messen — vom Scheitel bis zu den gestreckten Fersen.' },
      ],
      callout: {
        type: 'tip',
        text: 'Miss immer zur gleichen Tageszeit — die Größe kann zwischen Morgen und Abend um bis zu 1 cm schwanken.',
      },
    },
    {
      id: 'unit-conversion',
      heading: '3. Einheitenumrechnung: cm ↔ Fuß und Zoll',
      paragraphs: [
        'Der Rechner wechselt sofort zwischen metrischem (cm) und imperialem (Fuß/Zoll) System. Die Umrechnung nutzt den exakten internationalen Standard: 1 Zoll = 2,54 cm und 1 Fuß = 30,48 cm — keine gerundeten Näherungen.',
        'Zum Beispiel sind 5 Fuß 10 Zoll präzise 177,8 cm, und 170 cm entsprechen 5 Fuß 6,9 Zoll. Du kannst jederzeit die Einheit wechseln, ohne eingegebene Daten zu verlieren.',
      ],
    },
    {
      id: 'understanding-percentiles',
      heading: '4. Größenperzentile verstehen',
      paragraphs: [
        'Ein Perzentil vergleicht die Größe eines Kindes mit großen Bevölkerungsreferenzdaten für dasselbe Alter und Geschlecht. Ein Kind im 75. Perzentil ist größer als etwa 75 von 100 Gleichaltrigen desselben Alters und Geschlechts — keine Note, sondern eine Position in der Verteilung.',
        'Unsere Referenzen nutzen die CDC-Wachstumskurven (2–20 Jahre) und die WHO-Wachstumsstandards für Kinder (Geburt bis 5 Jahre) — dieselben Referenzen, die Kinderärzte in der Praxis verwenden.',
      ],
      callout: {
        type: 'note',
        text: 'Im 25. oder 90. Perzentil zu liegen ist für sich genommen weder gut noch schlecht. Wichtig ist, der eigenen Wachstumskurve über die Zeit zu folgen.',
      },
    },
    {
      id: 'child-height-predictor',
      heading: '5. Erwachsenengrößen-Prognose für Kinder',
      paragraphs: [
        'Die Prognose nutzt die Mid-Parental-Höhenmethode, die Standardformel, auf die sich Kinderärzte beziehen: für Jungen (Größe des Vaters + Größe der Mutter + 13 cm) ÷ 2; für Mädchen (Größe des Vaters + Größe der Mutter − 13 cm) ÷ 2.',
        'Das Ergebnis wird immer mit einer ehrlichen typischen Spanne von etwa ±8–10 cm gezeigt. Es ist eine Schätzung, keine Garantie: Genetik, Ernährung, Schlaf und Gesundheit beeinflussen die endgültige Größe, und keine Prognose ist zu 100 % genau.',
      ],
    },
    {
      id: 'growth-charts',
      heading: '6. Wachstumskurven: CDC und WHO',
      paragraphs: [
        'Wachstumskurven zeigen, wie sich die Größe mit dem Alter entwickelt. Die CDC-Kurven decken 2–20 Jahre auf Basis von US-Gesundheitserhebungen ab; die WHO-Standards decken Geburt bis 5 Jahre ab, erstellt aus einer multinationalen Studie mit gesunden Kindern.',
        'Die Größe deines Kindes über die Zeit auf der Kurve zu verfolgen ist aussagekräftiger als eine einzelne Messung: Eine stabile Kurve — auch in einem niedrigen Perzentil — deutet meist auf gesundes Wachstum hin.',
      ],
    },
    {
      id: 'baby-growth',
      heading: '7. Babywachstum verfolgen',
      paragraphs: [
        'In den ersten Jahren ist das Wachstum rasant und jeder Zentimeter zählt. Miss die Länge des Babys im Liegen — vom Scheitel bis zu den Fersen, Beine sanft gestreckt.',
        'Nutze die WHO-Standards (0–5 Jahre) als Referenz und notiere jede Messung mit Datum. Monatliche Messungen in den ersten 2 Jahren schaffen eine wertvolle Historie für Kinderarztbesuche.',
      ],
    },
    {
      id: 'reading-your-results',
      heading: '8. Ergebnisse richtig lesen',
      paragraphs: [
        'Jedes Rechenergebnis kommt mit Kontext. Die Einheitenumrechnung zeigt den exakten Wert in beiden Systemen. Das Perzentil zeigt die Position des Kindes auf der Wachstumskurve für das angegebene Alter und Geschlecht.',
        'Die Erwachsenengrößen-Prognose enthält die erwartete typische Spanne (±8–10 cm) — lies immer das Intervall, nicht nur die mittlere Zahl. Und der Unterschied zwischen zwei Größen wird in cm und in Fuß/Zoll angegeben.',
      ],
    },
    {
      id: 'practical-tips',
      heading: '9. Praktische Tipps',
      paragraphs: [
        'Kleine Gewohnheiten machen deine Messungen und Berechnungen deutlich zuverlässiger:',
      ],
      bulletPoints: [
        'Miss immer zur gleichen Tageszeit und unter gleichen Bedingungen.',
        'Notiere das Datum jeder Messung, um eine Wachstumshistorie aufzubauen.',
        'Nutze für alle Messungen dasselbe Maßband oder Stadiometer.',
        'Vergleiche bei Kindern immer mit der Kurve für das richtige Geschlecht und Alter.',
        'Vergleiche keine CDC-Perzentile mit WHO-Perzentilen — das sind unterschiedliche Referenzen.',
        'Denk daran: Ergebnisse sind edukative Schätzungen, keine medizinische Diagnose.',
      ],
    },
    {
      id: 'who-benefits',
      heading: '10. Für wen ist Height Calculator?',
      paragraphs: [
        'Eltern, die das Wachstum ihrer Kinder verfolgen, werdende Eltern, die neugierig auf die Größe ihrer Kinder sind, Erwachsene, die Maße für Dokumente oder Kleidung umrechnen, und alle, die verstehen wollen, was Größenzahlen wirklich bedeuten.',
        'Der Zugang ist kostenlos und unbegrenzt — keine Anmeldung, keine Downloads, auf jedem Gerät.',
      ],
    },
    {
      id: 'faq-troubleshoot',
      heading: '11. Häufige Fragen und Problemlösung',
      paragraphs: [
        'Eingegebene Daten beim Einheitenwechsel verschwunden? Keine Sorge: Der Rechner bewahrt die Werte beim Wechsel zwischen cm und Fuß/Zoll. Wirkt ein Perzentil unerwartet, prüfe Alter und Geschlecht — ein Jahr Unterschied verändert die Kurve deutlich.',
        'Zeigt die Prognose eine breite Spanne? Das ist beabsichtigt: Die Spanne von ±8–10 cm spiegelt die echte Variation zwischen Kindern wider. Keine seriöse Methode verspricht Zentimetergenauigkeit.',
      ],
    },
    {
      id: 'final-cta',
      heading: '12. Starte heute deine erste Berechnung',
      paragraphs: [
        'Bereit zum Rechnen? Der Größenrechner ist schnell, kostenlos und unbegrenzt. Gib eine Größe ein, rechne Einheiten um, prüfe ein Perzentil oder prognostiziere die Erwachsenengröße eines Kindes — und verstehe wirklich, was die Zahlen bedeuten.',
      ],
    },
  ],
  faqTransition: {
    badge: 'Noch Fragen?',
    heading: 'Unsere häufigen Fragen ansehen',
    text: 'Erfahre mehr über Perzentile, Wachstumskurven, Einheitenumrechnung und Kindergrößen-Prognose von Height Calculator.',
    ctaText: 'Alle häufigen Fragen ansehen',
    ctaHref: '/de/#faq',
  },
  finalCta: {
    heading: 'Bereit, deine Größe zu berechnen?',
    description: 'Öffne jetzt den Height Calculator-Hub — rechne Einheiten um, vergleiche Größen, prüfe Perzentile und prognostiziere die Erwachsenengröße von Kindern, alles in einem kostenlosen Rechner.',
    buttonText: 'Height Calculator öffnen',
    buttonHref: '/height-calculator/',
    secondaryText: 'Wachstumskurven ansehen',
    secondaryHref: '/height-calculator/boys-chart/',
  },
};
