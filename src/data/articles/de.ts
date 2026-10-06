import type { ArticleData, ArticleUiStrings, LocaleArticleSet } from './types';

export const deArticles: ArticleData[] = [
  {
    id: 'avg-height-by-country',
    slug: 'durchschnittsgroesse-nach-land',
    title: 'Durchschnittsgröße nach Land: Komplette Tabelle 2026',
    subtitle:
      'Entdecken Sie die durchschnittliche Körpergröße von Männern und Frauen in 15 Ländern — darunter Deutschland — und verstehen Sie, warum sie weltweit so stark variiert.',
    metaDescription:
      'Tabelle: Durchschnittsgröße nach Land 2026 — Deutschland, Niederlande, USA, Portugal und mehr. Wo Deutschland steht und was die Unterschiede erklärt.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 Min. Lesezeit',
    badge: 'Referenzleitfaden',
    tocTitle: 'In diesem Artikel',
    intro: {
      lead:
        'Die durchschnittliche Körpergröße in Deutschland beträgt etwa 180,3 cm bei Männern und 166,6 cm bei Frauen. Das Land mit der größten Durchschnittsgröße weltweit sind die Niederlande mit 183,8 cm (Männer) und 170,4 cm (Frauen).',
      paragraphs: [
        'Die Durchschnittsgröße variiert drastisch zwischen Ländern — mehr als 20 cm trennen die größten von den kleinsten Bevölkerungen. Genetik, Ernährung in der Kindheit, öffentliche Gesundheit und sogar das sozioökonomische Niveau prägen diese Zahlen über Generationen hinweg.',
        'Unten finden Sie eine Tabelle mit den am häufigsten zitierten Werten aus veröffentlichten Studien — plus den Kontext, den Zahlen allein nicht zeigen: warum Deutschland dort steht, wo es steht, und was es wirklich bedeutet, „über" oder „unter" dem Durchschnitt zu liegen.',
      ],
    },
    sections: [
      {
        id: 'tabela',
        heading: 'Tabelle: Durchschnittsgröße nach Land',
        paragraphs: [
          'Die folgenden Werte sind ungefähre Durchschnittswerte für Erwachsene, zusammengestellt aus veröffentlichten Bevölkerungsstudien. Kleine Abweichungen zwischen Quellen sind normal — die Durchschnittsgröße ändert sich je nach Jahr der Studie, gemessener Altersgruppe und Methodik.',
        ],
        table: {
          headers: ['Land', 'Männer (cm)', 'Frauen (cm)'],
          rows: [
            ['Niederlande', '183,8', '170,4'],
            ['Montenegro', '183,3', '169,6'],
            ['Dänemark', '182,6', '169,1'],
            ['Deutschland', '180,3', '166,6'],
            ['Frankreich', '178,6', '164,5'],
            ['Vereinigtes Königreich', '177,5', '164,4'],
            ['USA', '177,1', '163,5'],
            ['Italien', '176,5', '165,0'],
            ['Spanien', '176,1', '163,0'],
            ['Brasilien', '175,7', '162,9'],
            ['China', '175,7', '163,5'],
            ['Argentinien', '174,5', '161,0'],
            ['Portugal', '173,9', '163,0'],
            ['Südkorea', '174,9', '162,3'],
            ['Japan', '172,1', '158,5'],
            ['Mexiko', '169,5', '160,8'],
            ['Indien', '166,3', '155,5'],
          ],
          footnote:
            'Ungefähre Werte. Quellen unterscheiden sich in Jahr, Altersgruppe und Messmethode — als Referenz verwenden, nicht als exakten Maßstab.',
        },
      },
      {
        id: 'brasil-contexto',
        heading: 'Wo Deutschland steht',
        paragraphs: [
          'Deutschland liegt im oberen Bereich der Weltrangliste — über dem weltweiten Durchschnitt und knapp hinter den drei größten Ländern Europas: den Niederlanden, Montenegro und Dänemark. Innerhalb Europas gehört Deutschland zu den größten Nationen.',
          'Wichtig zu wissen: Die Durchschnittsgröße steigt in fast allen Ländern mit jeder Generation leicht an — parallel zu besserer Ernährung und Gesundheitsversorgung. Jede neue Generation misst im Schnitt etwas mehr als die vorherige, ein Trend, der in nahezu allen Ländern zu beobachten ist.',
        ],
      },
      {
        id: 'por-que-varia',
        heading: 'Warum variiert die Durchschnittsgröße so stark?',
        paragraphs: [
          'Drei Faktoren erklären fast den gesamten Unterschied zwischen Ländern:',
        ],
        bulletPoints: [
          'Genetik (etwa 80 % der individuellen Variation): Bevölkerungen mit einer langen Geschichte der Selektion auf größere Statur — wie Niederländer und Montenegriner — behalten dieses Merkmal über Generationen.',
          'Ernährung in der Kindheit: Ausreichend Protein, Kalzium und Kalorien in den ersten Lebensjahren sind entscheidend. Länder, die Kinderunterernährung beseitigt haben, sahen die Durchschnittsgröße innerhalb einer Generation steigen.',
          'Öffentliche Gesundheit: Sanitärversorgung, Impfungen und Zugang zu Kinderärzten verringern Krankheiten, die das Wachstum hemmen.',
        ],
        callout: {
          type: 'tip',
          text: 'Die Körpergröße wird hauptsächlich bis zum Ende der Pubertät festgelegt. Sobald sich die Wachstumsfugen schließen (etwa mit 18–20 Jahren), erhöht keine Übung und kein Nahrungsergänzungsmittel die Körpergröße nachweislich.',
        },
      },
      {
        id: 'compare-se',
        heading: 'Wie Sie sich mit dem Durchschnitt vergleichen',
        paragraphs: [
          'Der Landesdurchschnitt ist interessant — aber für die Gesundheit zählt vor allem, wie Sie sich im Vergleich zu Ihrer eigenen Wachstumskurve über die Zeit entwickeln, nicht zu einer einzelnen Zahl.',
          'Wollen Sie sehen, wo Sie stehen? Nutzen Sie unseren kostenlosen Rechner, um Ihre Größe umzurechnen und zu vergleichen:',
        ],
        link: {
          text: '→ Körpergrößen-Rechner öffnen',
          href: '/height-calculator/',
        },
      },
    ],
    faqs: [
      {
        question: 'Welches Land hat die größte Durchschnittsgröße der Welt?',
        answer:
          'Die Niederlande führen: etwa 183,8 cm bei Männern und 170,4 cm bei Frauen, laut den am häufigsten zitierten Bevölkerungsstudien.',
      },
      {
        question: 'Steigt die Durchschnittsgröße in Deutschland?',
        answer:
          'Ja. Wie in den meisten entwickelten Ländern steigt auch die deutsche Durchschnittsgröße mit jeder Generation leicht an — getragen von besserer Ernährung und Gesundheitsversorgung.',
      },
      {
        question: 'Sind 175 cm in Deutschland groß?',
        answer:
          'Für Männer liegen 175 cm unter dem deutschen Durchschnitt (180,3 cm). Für Frauen wären sie deutlich über dem weiblichen Durchschnitt (166,6 cm) — das Geschlecht spielt eine ebenso große Rolle wie das Land.',
      },
      {
        question: 'Warum sind die Niederländer so groß?',
        answer:
          'Eine Kombination aus Genetik, hervorragender Kinderernährung und einem der besten öffentlichen Gesundheitssysteme der Welt — über Generationen aufrechterhalten. Es gibt kein einzelnes „Geheimnis".',
      },
    ],
    relatedLinks: [
      { text: 'Körpergrößen-Rechner', href: '/height-calculator/' },
      { text: 'Größenvergleich', href: '/compare/' },
      { text: 'Körpergröße richtig messen', href: '/de/artikel/koerpergroesse-richtig-messen/' },
    ],
  },
  {
    id: 'measure-height-correctly',
    slug: 'koerpergroesse-richtig-messen',
    title: 'Körpergröße richtig messen – zu Hause',
    subtitle:
      'Einfache Schritt-für-Schritt-Anleitung, um Ihre Körpergröße präzise zu messen — nur mit einer Wand, einem Buch und einem Maßband, ganz ohne typische Fehler.',
    metaDescription:
      'Körpergröße zu Hause richtig messen: Schritt-für-Schritt-Anleitung, typische Fehler, die Zentimeter kosten, und die beste Tageszeit zum Messen.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 Min. Lesezeit',
    badge: 'Schritt für Schritt',
    tocTitle: 'In diesem Artikel',
    intro: {
      lead:
        'So messen Sie Ihre Körpergröße richtig: Stellen Sie sich barfuß an eine glatte Wand, Fersen zusammen, Blick nach vorn, markieren Sie den höchsten Punkt Ihres Kopfes mit einem Buch und messen Sie vom Boden bis zur Markierung. Messen Sie morgens — dann erhalten Sie den höchsten und konstantesten Wert.',
      paragraphs: [
        'Es klingt einfach, aber die meisten Menschen messen falsch — und der Fehler beträgt bis zu 2 oder 3 Zentimeter. Entspannte Haltung, ein weicher Teppich unter den Füßen und das Messen am Abend sind die häufigsten Ursachen.',
        'Folgen Sie der Anleitung unten, und Ihre Messung stimmt mit der in einer Arztpraxis überein.',
      ],
    },
    sections: [
      {
        id: 'passo-a-passo',
        heading: 'Schritt-für-Schritt-Anleitung',
        paragraphs: [],
        steps: [
          {
            number: 1,
            title: 'Den richtigen Ort wählen',
            description:
              'Eine glatte Wand und ein ebener, harter Boden (Fliesen, Holz oder Beton). Vermeiden Sie Teppiche — sie geben nach und kosten bis zu 1 cm der Messung.',
          },
          {
            number: 2,
            title: 'Schuhe und Accessoires ablegen',
            description:
              'Barfuß, ohne dicke Socken. Entfernen Sie Haarspangen, Mützen oder hohe Dutts, die den höchsten Punkt des Kopfes verändern.',
          },
          {
            number: 3,
            title: 'Körper positionieren',
            description:
              'Fersen zusammen an der Wand, Rücken und Schultern gerade, aber entspannt, Arme am Körper. Blicken Sie nach vorn, das Kinn parallel zum Boden.',
          },
          {
            number: 4,
            title: 'Den höchsten Punkt des Kopfes markieren',
            description:
              'Bitten Sie jemanden um Hilfe oder verwenden Sie ein Buch mit hartem Einband: Legen Sie es im 90°-Winkel zur Wand auf den höchsten Punkt des Kopfes und machen Sie eine leichte Bleistiftmarkierung.',
          },
          {
            number: 5,
            title: 'Vom Boden bis zur Markierung messen',
            description:
              'Verwenden Sie ein Maßband oder einen Zollstock und halten Sie es straff und senkrecht. Notieren Sie in Zentimetern mit einer Nachkommastelle.',
          },
        ],
      },
      {
        id: 'melhor-horario',
        heading: 'Die beste Tageszeit zum Messen',
        paragraphs: [
          'Messen Sie immer morgens, direkt nach dem Aufstehen. Im Laufe des Tages komprimiert die Schwerkraft die Bandscheiben der Wirbelsäule, und Sie „schrumpfen" bis zum Abend um 1 bis 2 cm. Um Ihre Größe über die Zeit zu verfolgen, messen Sie immer zur gleichen Zeit — am besten morgens.',
        ],
        callout: {
          type: 'tip',
          text: 'Vergleichen Sie alte Messungen? Prüfen Sie, ob sie zur gleichen Tageszeit gemacht wurden. Ein Unterschied von 1,5 cm zwischen Morgen und Abend ist völlig normal.',
        },
      },
      {
        id: 'erros-comuns',
        heading: 'Typische Fehler, die das Ergebnis verfälschen',
        paragraphs: [],
        bulletPoints: [
          'Auf Teppich oder Teppichboden messen (gibt 0,5–1 cm nach)',
          'Schultern hängen lassen oder den Kopf nach unten neigen',
          'Schuhe oder dicke Socken tragen',
          'Die Stirn statt des höchsten Punkts des Kopfes markieren',
          'Lockeres oder schräg gehaltenes Maßband',
          'Abends messen und mit einer Morgenmessung vergleichen',
        ],
      },
      {
        id: 'criancas',
        heading: 'Kinder messen',
        paragraphs: [
          'Bei Kindern unter 2 Jahren wird im Liegen gemessen (Körperlänge), nicht im Stehen. Ab 2 Jahren gilt dieselbe Anleitung wie oben — notieren Sie das Datum jeder Messung, um die Wachstumskurve zu verfolgen.',
          'Wenn die Kurve des Kindes dauerhaft im Perzentil fällt, lohnt sich ein Gespräch mit dem Kinderarzt:',
        ],
        link: {
          text: '→ Größenperzentil verstehen',
          href: '/de/artikel/groessenperzentil-erklaert/',
        },
      },
    ],
    faqs: [
      {
        question: 'Kann ich mich allein messen?',
        answer:
          'Ja, indem Sie ein Buch an der Wand als Markierung verwenden. Die Genauigkeit ist etwas geringer als mit Hilfe, aber wenn Sie der Anleitung folgen, bleibt der Fehler unter 0,5 cm.',
      },
      {
        question: 'Warum ändert sich meine Größe im Laufe des Tages?',
        answer:
          'Die Bandscheiben komprimieren sich im Laufe des Tages unter der Schwerkraft. Zwischen Morgen und Abend 1–2 cm zu „verlieren", ist normal — kein Grund zur Sorge.',
      },
      {
        question: 'Messen Handy-Apps die Körpergröße genau?',
        answer:
          'Apps mit LiDAR (aktuelle iPhone-Pro-Modelle) kommen nah heran, aber Wand plus Maßband bleibt die zuverlässigste und günstigste Methode.',
      },
    ],
    relatedLinks: [
      { text: 'Körpergrößen-Rechner', href: '/height-calculator/' },
      { text: 'Durchschnittsgröße nach Land', href: '/de/artikel/durchschnittsgroesse-nach-land/' },
    ],
  },
  {
    id: 'predict-child-height',
    slug: 'endgroesse-des-kindes-vorhersagen',
    title: 'Die Endgröße Ihres Kindes vorhersagen',
    subtitle:
      'Die Formel, die Kinderärzte zur Schätzung der späteren Größe von Kindern verwenden — mit durchgerechnetem Beispiel und den Grenzen, die Sie kennen sollten.',
    metaDescription:
      'Endgröße vorhersagen: Die Zielgrößen-Formel der Eltern, die Kinderärzte verwenden — Schritt-für-Schritt-Beispiel und kostenloser Rechner.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 Min. Lesezeit',
    badge: 'Ratgeber für Eltern',
    tocTitle: 'In diesem Artikel',
    intro: {
      lead:
        'Die gebräuchlichste Methode von Kinderärzten zur Schätzung der Endgröße eines Kindes ist die Formel der elterlichen Zielgröße: für Jungen (Größe des Vaters + Größe der Mutter + 13) ÷ 2; für Mädchen (Größe des Vaters + Größe der Mutter − 13) ÷ 2. Das Ergebnis hat eine Spanne von etwa ±8,5 cm.',
      paragraphs: [
        'Diese Schätzung funktioniert, weil die Genetik etwa 80 % der endgültigen Größe ausmacht. Aber sie ist ein statistischer Ausgangspunkt — keine Prophezeiung. Ernährung, Gesundheit und der individuelle Rhythmus der Pubertät bewegen das Endergebnis innerhalb dieser Spanne.',
        'Unten: die Formel mit Beispiel, wann sie am besten funktioniert und wann Sie der Zahl misstrauen sollten.',
      ],
    },
    sections: [
      {
        id: 'formula',
        heading: 'Die Formel, mit Beispiel',
        paragraphs: [
          'Addieren Sie die Größen der Eltern in Zentimetern, passen Sie sie an das Geschlecht des Kindes an und teilen Sie durch 2:',
        ],
        bulletPoints: [
          'Jungen: (Vater + Mutter + 13) ÷ 2',
          'Mädchen: (Vater + Mutter − 13) ÷ 2',
        ],
        callout: {
          type: 'tip',
          text: 'Beispiel: Vater mit 178 cm und Mutter mit 165 cm. Junge: (178 + 165 + 13) ÷ 2 = 178 cm. Mädchen: (178 + 165 − 13) ÷ 2 = 165 cm. Rechnen Sie mit ±8,5 cm Spanne — der Junge läge also zwischen 169,5 cm und 186,5 cm.',
        },
      },
      {
        id: 'calcule-agora',
        heading: 'In Sekunden berechnen',
        paragraphs: [
          'Die Rechnung von Hand ist einfach, aber unser Rechner wendet die Formel automatisch an und zeigt die komplette Schätzspanne:',
        ],
        link: {
          text: '→ Endgröße meines Kindes berechnen (kostenlos)',
          href: '/height-calculator/child-height-predictor/',
        },
      },
      {
        id: 'limites',
        heading: 'Grenzen, die Sie kennen sollten',
        paragraphs: [
          'Die Formel geht von durchschnittlichen Bedingungen aus. Sie verliert an Genauigkeit, wenn:',
        ],
        bulletPoints: [
          'ein großer Größenunterschied zwischen den Eltern besteht (die tatsächliche Spanne wächst)',
          'das Kind unterernährt war, eine chronische Krankheit hat oder die Pubertät sehr früh/spät einsetzt',
          'die Eltern nicht die biologischen Eltern sind (es zählt die biologische Genetik)',
          'das Kind noch ein Baby ist — ab 2–3 Jahren wird die Vorhersage zuverlässiger',
        ],
        callout: {
          type: 'note',
          text: 'Keine Hausmethode ersetzt die Wachstumsbeurteilung durch den Kinderarzt, der Perzentilkurven und bei Bedarf das Knochenalter (Röntgen der Hand) heranzieht.',
        },
      },
      {
        id: 'o-que-fazer',
        heading: 'Was Sie mit der Zahl anfangen sollten',
        paragraphs: [
          'Nutzen Sie die Vorhersage als entspannte Referenz — etwa um Kleidung vorausschauend zu kaufen oder die Neugier zu stillen. Bauen Sie damit keine starren Erwartungen an das Kind auf.',
          'Das wahre Warnsignal ist nicht die Vorhersage selbst, sondern die Wachstumskurve: Wenn das Kind dauerhaft im Perzentil fällt, verdient das ein Gespräch mit dem Kinderarzt.',
        ],
        link: {
          text: '→ Größenperzentil verstehen',
          href: '/de/artikel/groessenperzentil-erklaert/',
        },
      },
    ],
    faqs: [
      {
        question: 'Ist die Vorhersage zuverlässig?',
        answer:
          'Es ist die beste einfache Schätzung, die es gibt, und wird von Kinderärzten weltweit verwendet — aber mit einer Spanne von ±8,5 cm. Für eine genaue Beurteilung kombiniert der Kinderarzt die Formel mit der Wachstumskurve und dem Knochenalter.',
      },
      {
        question: 'Ändern Sport oder Nahrungsergänzungsmittel die vorhergesagte Größe?',
        answer:
          'Es gibt keine Belege dafür, dass Sport, Dehnübungen oder Nahrungsergänzungsmittel die Größe über das genetische Potenzial hinaus erhöhen. Gute Ernährung und ausreichend Schlaf in der Kindheit stellen sicher, dass das Kind dieses Potenzial erreicht — nicht überschreitet.',
      },
      {
        question: 'Ab welchem Alter wird die Vorhersage genauer?',
        answer:
          'Ab 2–3 Jahren gibt die Wachstumskurve des Kindes bereits solide Hinweise. In der Pubertät ist die Vorhersage in Kombination mit dem Knochenalter am genauesten.',
      },
    ],
    medicalDisclaimer:
      'Bildungsinhalte, keine medizinische Beratung. Größenschätzungen ersetzen nicht die Beurteilung durch einen Kinderarzt. Wenn Sie sich Sorgen um das Wachstum Ihres Kindes machen, wenden Sie sich an einen Arzt.',
    relatedLinks: [
      { text: 'Endgrößen-Rechner für Kinder', href: '/height-calculator/child-height-predictor/' },
      { text: 'Größenperzentil erklärt', href: '/de/artikel/groessenperzentil-erklaert/' },
    ],
  },
  {
    id: 'height-percentile-explained',
    slug: 'groessenperzentil-erklaert',
    title: 'Größenperzentil: Was es bedeutet und wann Sie zum Kinderarzt sollten',
    subtitle:
      'Verstehen Sie ein für alle Mal, was der Kinderarzt mit „40. Perzentil" meint — und was das wahre Warnsignal in der Wachstumskurve ist.',
    metaDescription:
      'Größenperzentil für Eltern erklärt: was es bedeutet, wie man die Wachstumskurve (CDC/WHO) liest und wann Sie zum Kinderarzt sollten.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 Min. Lesezeit',
    badge: 'Ratgeber für Eltern',
    tocTitle: 'In diesem Artikel',
    intro: {
      lead:
        'Im 40. Größenperzentil zu liegen bedeutet, dass 40 % der Kinder gleichen Alters und Geschlechts kleiner sind und 60 % größer. Es ist keine Note — es ist ein Vergleich. Was zählt, ist nicht die einzelne Zahl, sondern ob das Kind über die Zeit im gleichen Perzentil bleibt.',
      paragraphs: [
        'Viele Eltern erschrecken, wenn sie „15. Perzentil" hören, als wäre es ein schlechtes Zeugnis. Ist es nicht. Ein Kind, das immer im 15. Perzentil lag und dort bleibt, wächst genau so, wie es soll.',
        'In diesem Leitfaden: wie man die Zahl liest, was die Kurven von CDC und WHO zeigen und was der wahre Grund ist, den Kinderarzt aufzusuchen.',
      ],
    },
    sections: [
      {
        id: 'o-que-e',
        heading: 'Was das Perzentil wirklich aussagt',
        paragraphs: [
          'Das Perzentil ordnet das Kind im Vergleich zu einer gesunden Referenzbevölkerung gleichen Alters und Geschlechts ein:',
        ],
        bulletPoints: [
          '50. Perzentil = genau im Durchschnitt (die Hälfte darüber, die Hälfte darunter)',
          '90. Perzentil = größer als 90 % der gleichaltrigen Kinder',
          '10. Perzentil = größer als nur 10 % (das heißt, 90 % sind größer)',
        ],
        callout: {
          type: 'tip',
          text: 'Stellen Sie sich das Perzentil wie eine „Schlange" vor: Es sagt, wo das Kind in der Schlange steht — nicht, ob es ihm gut geht. Gut geht es ihm, wenn es über die Jahre auf derselben Position bleibt.',
        },
      },
      {
        id: 'trajetoria',
        heading: 'Der Verlauf zählt mehr als die Position',
        paragraphs: [
          'Kinderärzte betrachten die Form der Kurve, nicht den einzelnen Punkt. Drei Muster:',
        ],
        bulletPoints: [
          'Stabile Kurve (immer nahe am gleichen Perzentil) → normales Wachstum, auch im 5. oder 95. Perzentil',
          'Dauerhaftes Fallen im Perzentil (z. B. 75 → 50 → 30) → verdient eine ärztliche Abklärung',
          'Unter dem 3. oder über dem 97. Perzentil → der Kinderarzt wird genauer hinschauen',
        ],
      },
      {
        id: 'curvas',
        heading: 'Woher die Kurven kommen: CDC und WHO',
        paragraphs: [
          'Die Referenzkurven stammen aus großen Bevölkerungsstudien: CDC 2000 (USA) für ältere Kinder und die WHO-Standards für unter 5-Jährige. Ein vertrauenswürdiger Perzentil-Rechner sollte angeben, welche Datengrundlage er verwendet — wenn er das nicht tut, seien Sie skeptisch.',
          'Unser Rechner verwendet die echten Daten von CDC 2000 und WHO, ohne Näherungen:',
        ],
        link: {
          text: '→ Größenperzentil berechnen (kostenlos)',
          href: '/height-calculator/boys-percentile/',
        },
      },
      {
        id: 'quando-procurar',
        heading: 'Wann Sie den Kinderarzt aufsuchen sollten',
        paragraphs: [
          'Nutzen Sie das Perzentil als Kontext, aber suchen Sie den Kinderarzt auf, wenn:',
        ],
        bulletPoints: [
          'das Perzentil zwischen den Vorsorgeuntersuchungen dauerhaft fällt',
          'das Wachstum über viele Monate zum Stillstand gekommen scheint',
          'das Kind ohne Begleitung unter dem 3. oder über dem 97. Perzentil liegt',
          'Sie einfach besorgt sind — das Bauchgefühl von Eltern zählt',
        ],
        callout: {
          type: 'warning',
          text: 'Eine einzelne Messung sagt sehr wenig aus. Das Muster über mehrere Messungen hinweg — mit notierten Daten — hat medizinischen Wert.',
        },
      },
    ],
    faqs: [
      {
        question: 'Bedeutet ein niedriges Perzentil, dass mein Kind klein bleibt?',
        answer:
          'Nicht unbedingt. Das Perzentil beschreibt die aktuelle Position auf der Kurve, und Kinder im 10. Perzentil können die Pubertät durchaus innerhalb der von der Familiengenetik vorhergesagten Spanne abschließen. Wichtig ist die Stabilität der Kurve.',
      },
      {
        question: 'Was ist der Unterschied zwischen den Kurven von CDC und WHO?',
        answer:
          'Die WHO veröffentlicht Standards für unter 5-Jährige auf Basis gestillter Kinder unter idealen Bedingungen; CDC 2000 deckt 2 bis 20 Jahre mit Daten der US-Bevölkerung ab. Gute Rechner verwenden für jedes Alter die passende Grundlage.',
      },
      {
        question: 'Mein Kind ist vom 60. auf das 45. Perzentil gefallen. Ist das schlimm?',
        answer:
          'Eine kleine Schwankung zwischen zwei Messungen kann normal sein (Messfehler, Tageszeit). Das Warnsignal ist das dauerhafte Fallen über mehrere Untersuchungen hinweg. Im Zweifel zeigen Sie dem Kinderarzt die datierten Messungen.',
      },
    ],
    medicalDisclaimer:
      'Bildungsinhalte, keine medizinische Beratung. Perzentilkurven sind Screening-Instrumente — nur medizinisches Fachpersonal kann das Wachstum Ihres Kindes beurteilen. Wenden Sie sich im Zweifel an einen Kinderarzt.',
    relatedLinks: [
      { text: 'Perzentil-Rechner für Jungen', href: '/height-calculator/boys-percentile/' },
      { text: 'Perzentil-Rechner für Mädchen', href: '/height-calculator/girls-percentile/' },
      { text: 'Endgröße des Kindes vorhersagen', href: '/de/artikel/endgroesse-des-kindes-vorhersagen/' },
    ],
  },
];

export const deArticleUi: ArticleUiStrings = {
  hubSegment: 'artikel',
  navLabel: 'Artikel',
  homeLabel: 'Startseite',
  hubTitle: 'Artikel über Körpergröße',
  hubSubtitle: 'Praxisnahe Ratgeber, die genau die Frage beantworten, nach der Sie gesucht haben — ohne Umwege.',
  hubDescription: 'Praxisnahe Ratgeber zur Körpergröße: Durchschnittsgröße nach Land, richtig messen, Endgröße des Kindes vorhersagen und Wachstumsperzentile.',
  faqHeading: 'Häufige Fragen',
  readAlsoHeading: 'Weiterlesen',
  tocLabel: 'In diesem Artikel',
};

export const deArticleSet: LocaleArticleSet = {
  ui: deArticleUi,
  articles: deArticles,
};
