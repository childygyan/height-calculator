import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-us',
  slug: 'taille-moyenne-aux-usa',
  title: 'Taille moyenne aux États-Unis : hommes, femmes et par État',
  subtitle:
    'Les chiffres nationaux, un classement État par État que vous ne trouverez nulle part ailleurs, et l’évolution de la taille des Américains sur 100 ans.',
  metaDescription:
    'Taille moyenne aux États-Unis : hommes ~1,75 m, femmes ~1,63 m (NHANES). Tableau par État, États les plus grands et les plus petits, et la tendance sur 100 ans.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
  readTime: '6 min de lecture',
  badge: 'Guide de référence',
  tocTitle: 'Dans cet article',
  intro: {
    lead:
      'La taille moyenne aux États-Unis est d’environ 1,75 m (5 pieds 9 pouces) pour les hommes et 1,63 m (5 pieds 4 pouces) pour les femmes, selon les données mesurées de la National Health and Nutrition Examination Survey (NHANES).',
    paragraphs: [
      'Ce sont les chiffres nationaux — mais les États-Unis n’ont pas une seule taille. Les États du nord des Grandes Plaines comme le Montana et le Minnesota sont nettement plus grands que des États comme Hawaï ou le Nouveau-Mexique, et l’histoire de la croissance du pays au cours du dernier siècle n’a rien à voir avec celle de l’Europe.',
      'Ci-dessous : les chiffres nationaux expliqués, un tableau État par État compilé à partir de données d’enquête, et la tendance sur 100 ans qui a fait passer l’Amérique des plus grands du monde au milieu du classement.',
    ],
  },
  sections: [
    {
      id: 'national-averages',
      heading: 'Les chiffres nationaux : 1,75 m et 1,63 m',
      paragraphs: [
        'Les chiffres les plus fiables viennent de la NHANES, menée par le CDC — contrairement à la plupart des enquêtes, elle mesure les gens en personne au lieu de les interroger. Les moyennes mesurées les plus citées pour les adultes américains sont :',
      ],
      bulletPoints: [
        'Hommes : environ 5 pi 9 po (175 cm)',
        'Femmes : environ 5 pi 4 po (163 cm)',
      ],
      callout: {
        type: 'tip',
        text: 'Les moyennes mesurées sont environ un demi-pouce à un pouce plus basses que dans les enquêtes déclaratives — la plupart des gens arrondissent vers le haut quand on les interroge. Faites confiance aux données mesurées (comme la NHANES) plutôt qu’aux sondages.',
      },
    },
    {
      id: 'by-state',
      heading: 'Taille moyenne par État (tableau)',
      paragraphs: [
        'Les données de taille par État sont plus difficiles à obtenir — aucune enquête nationale ne publie de taille mesurée pour chaque État. Le tableau ci-dessous compile des chiffres approximatifs tirés de données d’enquêtes déclaratives (comme le BRFSS du CDC) et de classements publiés par État. Considérez-les comme des estimations : les chiffres déclarés sont biaisés vers le haut, et les méthodes varient selon les sources.',
      ],
      table: {
        headers: ['État', 'Hommes (env.)', 'Femmes (env.)'],
        rows: [
          ['Montana', '5\'11"', '5\'6"'],
          ['Minnesota', '5\'11"', '5\'6"'],
          ['Dakota du Nord', '5\'11"', '5\'6"'],
          ['Dakota du Sud', '5\'10"', '5\'5"'],
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
          ['Californie', '5\'9"', '5\'4"'],
          ['Floride', '5\'9"', '5\'4"'],
          ['New York', '5\'9"', '5\'4"'],
          ['Mississippi', '5\'8"', '5\'4"'],
          ['Nouveau-Mexique', '5\'8"', '5\'3"'],
          ['Hawaï', '5\'8"', '5\'3"'],
        ],
        footnote:
          'Valeurs approximatives compilées à partir de données d’enquêtes déclaratives (p. ex. BRFSS du CDC) et de classements publiés par État. Les tailles déclarées sont généralement plus élevées que les valeurs mesurées — utilisez-les comme comparaison approximative, pas comme mesures exactes.',
      },
    },
    {
      id: 'trend',
      heading: 'La tendance sur 100 ans : des plus grands au plateau',
      paragraphs: [
        'Il y a un siècle, les Américains comptaient parmi les personnes les plus grandes du monde. Les hommes nés aux États-Unis vers 1914 affichaient des moyennes proches de celles d’aujourd’hui — tandis qu’une grande partie de l’Europe restait en retard, freinée par une nutrition plus pauvre et des conditions de vie plus dures.',
        'Puis les courbes se sont croisées. Entre les années 1950 et 1980, l’Europe du Nord a continué à gagner en taille à chaque génération pendant que la croissance américaine plafonnait. Les Pays-Bas, le Danemark et leurs voisins ont dépassé les États-Unis et ne se sont jamais retournés.',
        'Les chercheurs avancent quelques explications : un accès quasi universel à une bonne nutrition infantile en Europe, des systèmes de santé publique solides, et — côté américain — des inégalités économiques croissantes, ce qui signifie que la moyenne nationale masque des groupes d’enfants qui n’ont jamais reçu la nutrition nécessaire pour atteindre leur plein potentiel de croissance.',
      ],
      callout: {
        type: 'note',
        text: 'Le plateau américain ne signifie pas que les Américains rapetissent — cela signifie qu’ils ont cessé de grandir pendant que d’autres pays les rattrapaient puis les dépassaient.',
      },
    },
    {
      id: 'where-do-you-stand',
      heading: 'Où vous situez-vous ?',
      paragraphs: [
        'Les moyennes nationales et par État sont un contexte utile, mais le chiffre qui compte, c’est le vôtre — mesuré correctement, le matin, pieds nus contre un mur.',
        'Comparez votre taille à la moyenne américaine, ou comparez-vous à quelqu’un d’autre côte à côte :',
      ],
      link: {
        text: '→ Ouvrir le calculateur de taille',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: 'Quel État a les habitants les plus grands ?',
      answer:
        'Les États du nord des Grandes Plaines arrivent systématiquement en tête dans les données d’enquête — le Montana, le Minnesota et le Dakota du Nord dominent la plupart des classements par État, avec des hommes mesurant en moyenne environ 5\'11". Gardez à l’esprit que les chiffres par État sont approximatifs, compilés à partir d’enquêtes déclaratives plutôt que de données mesurées.',
    },
    {
      question: 'Les Américains deviennent-ils plus grands ?',
      answer:
        'Pas vraiment — la taille moyenne aux États-Unis est à peu près stable depuis les années 1970-1980. Les grands gains américains ont eu lieu plus tôt au XXe siècle ; depuis, l’Europe du Nord et d’autres régions ont rattrapé puis dépassé les États-Unis.',
    },
    {
      question: 'Quelle est la taille moyenne d’un homme aux États-Unis ?',
      answer:
        'Environ 5 pieds 9 pouces (175 cm), d’après les données mesurées de la NHANES du CDC. Les enquêtes déclaratives donnent des chiffres légèrement plus élevés, car les gens ont tendance à arrondir vers le haut.',
    },
    {
      question: '1,78 m (5\'10"), c’est grand pour un homme aux États-Unis ?',
      answer:
        'C’est légèrement au-dessus de la moyenne — à peu près le 60e au 65e percentile chez les hommes américains. Dans les États les plus grands comme le Montana ou le Minnesota, c’est proche de la moyenne, tandis que dans les États plus petits, cela se remarque davantage.',
    },
  ],
  relatedLinks: [
    { text: 'Calculateur de taille', href: '/height-calculator/' },
    { text: 'Comparaison de taille', href: '/compare/' },
    { text: 'Taille moyenne par pays', href: '/articles/average-height-by-country/' },
  ],
};
