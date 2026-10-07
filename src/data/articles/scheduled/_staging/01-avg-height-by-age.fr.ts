import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-by-age',
  slug: 'taille-moyenne-par-age-tableau',
  title: 'Taille moyenne par âge (0–20 ans) : le tableau complet',
  subtitle:
    'La taille moyenne à chaque âge, de la naissance à 20 ans, pour les garçons et les filles — avec les étapes de croissance qui expliquent les chiffres.',
  metaDescription:
    'Tableau de la taille moyenne par âge (0–20 ans) pour les garçons et les filles, basé sur les données de croissance CDC/OMS. Voyez ce qui est normal à chaque âge et quand vérifier le percentile.',
  datePublished: '2026-10-07',
  dateModified: '2026-10-07',
  readTime: '7 min de lecture',
  badge: 'Guide de référence',
  tocTitle: 'Dans cet article',
  intro: {
    lead:
      'À 10 ans, la taille moyenne est d’environ 140 cm, garçon ou fille ; à 18 ans, les moyennes sont d’environ 179 cm pour les jeunes hommes et 166 cm pour les jeunes femmes. Les filles dépassent brièvement les garçons vers 11–12 ans, puis les garçons prennent de l’avance lors de leur poussée de croissance pubertaire plus tardive.',
    paragraphs: [
      'Si vous cherchez à savoir si votre enfant a une taille « normale pour son âge », ce tableau est votre point de départ. Les valeurs ci-dessous sont des références arrondies au 50e percentile, tirées des courbes de croissance CDC 2000 (2–20 ans) et des normes de croissance de l’OMS (moins de 2 ans) — les mêmes références qu’utilisent les pédiatres.',
      'Une remarque importante avant les chiffres : la moyenne n’est pas l’idéal. Les enfants en bonne santé se répartissent largement autour de ces valeurs, et une seule mesure compte bien moins que la trajectoire dans le temps.',
    ],
  },
  sections: [
    {
      id: 'chart',
      heading: 'Le tableau complet : taille moyenne par âge',
      paragraphs: [
        'Trouvez l’âge, lisez en travers. Les valeurs sont des références approximatives au 50e percentile, en centimètres.',
      ],
      table: {
        headers: ['Âge', 'Garçons (cm)', 'Filles (cm)'],
        rows: [
          ['Naissance', '50', '49'],
          ['1 an', '76', '75'],
          ['2 ans', '88', '87'],
          ['3 ans', '96', '95'],
          ['4 ans', '103', '102'],
          ['5 ans', '110', '109'],
          ['6 ans', '116', '115'],
          ['7 ans', '122', '121'],
          ['8 ans', '128', '128'],
          ['9 ans', '134', '134'],
          ['10 ans', '140', '140'],
          ['11 ans', '145', '146'],
          ['12 ans', '151', '152'],
          ['13 ans', '158', '158'],
          ['14 ans', '166', '162'],
          ['15 ans', '172', '164'],
          ['16 ans', '176', '165'],
          ['17 ans', '178', '166'],
          ['18 ans', '179', '166'],
          ['19 ans', '179', '166'],
          ['20 ans', '179', '166'],
        ],
        footnote:
          'Valeurs de référence arrondies au 50e percentile, basées sur les courbes de croissance CDC 2000 (2–20 ans) et les normes de croissance de l’OMS (moins de 2 ans). Les enfants en bonne santé varient largement autour de ces chiffres.',
      },
      callout: {
        type: 'tip',
        text: 'Conversions rapides : 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
      },
    },
    {
      id: 'milestones',
      heading: 'Étapes clés de croissance que révèle le tableau',
      paragraphs: [
        'Les chiffres bruts cachent quelques constantes qui valent la peine d’être connues :',
      ],
      bulletPoints: [
        'La croissance la plus rapide a lieu la première année : les bébés gagnent environ 25 cm, plus qu’au cours de toute autre année de leur vie.',
        'Les filles connaissent leur poussée pubertaire en premier — c’est pourquoi elles sont légèrement plus grandes que les garçons vers 11–12 ans.',
        'Les garçons commencent leur poussée environ deux ans plus tard mais grandissent plus longtemps, d’où une taille moyenne finale supérieure d’environ 13 cm.',
        'Les plaques de croissance se referment généralement vers 15–17 ans chez les filles et 17–19 ans chez les garçons ; après cela, la taille ne gagne plus de façon significative.',
        'Entre 8 et 10 ans, garçons et filles ont presque la même taille moyenne — les différences entre sexes avant la puberté sont minimes.',
      ],
    },
    {
      id: 'reading-numbers',
      heading: 'Comment lire ces chiffres',
      paragraphs: [
        'Le tableau montre le milieu du peloton — la moitié des enfants sont au-dessus, l’autre moitié en dessous. Se situer au 25e ou au 75e percentile est tout aussi normal qu’au 50e, tant que l’enfant a toujours suivi à peu près cette ligne.',
        'Ce qui compte vraiment pour les pédiatres, ce n’est pas un chiffre isolé de ce tableau, mais la courbe propre de l’enfant : un percentile stable au fil des ans signifie une croissance saine, même s’il s’agit du 10e ou du 90e percentile.',
        'Pour voir exactement où se situe un enfant sur les courbes officielles, utilisez les calculateurs de percentile :',
      ],
      link: {
        text: '→ Calculateur de percentile de taille pour garçons',
        href: '/height-calculator/boys-percentile/',
      },
    },
    {
      id: 'when-to-check',
      heading: 'Quand les chiffres méritent un second regard',
      paragraphs: [
        'Ne vous inquiétez pas pour une seule mesure. Surveillez en revanche la trajectoire :',
      ],
      bulletPoints: [
        'Le percentile baisse régulièrement d’un contrôle à l’autre (par exemple, 60e → 40e → 25e)',
        'La croissance semble stagner pendant de longs mois, en dehors des périodes de ralentissement normal',
        'L’enfant se situe en dessous du 3e ou au-dessus du 97e percentile sans suivi médical',
      ],
      callout: {
        type: 'note',
        text: 'Si l’un des points ci-dessus vous semble familier, apportez les mesures datées chez le pédiatre — c’est la trajectoire dans le temps qui a une valeur médicale, pas un chiffre isolé.',
      },
      link: {
        text: '→ Courbe de taille des filles (basée CDC/OMS)',
        href: '/height-calculator/girls-chart/',
      },
    },
  ],
  faqs: [
    {
      question: '173 cm (5\'8"), est-ce grand pour un enfant de 13 ans ?',
      answer:
        'Oui — bien au-dessus de la moyenne. Un garçon de 13 ans mesure en moyenne environ 158 cm, donc 173 cm se situe à peu près au niveau du 90e percentile, voire au-delà. Pour une fille de 13 ans (moyenne également d’environ 158 cm à cet âge), c’est tout aussi au-dessus de la moyenne. Gardez à l’esprit que les enfants à puberté précoce peuvent être grands à 13 ans puis finir dans la moyenne à l’âge adulte, une fois leurs camarades rattrapés.',
    },
    {
      question: 'Pourquoi les garçons sont-ils plus grands que les filles après la puberté ?',
      answer:
        'La testostérone provoque chez les garçons une poussée de croissance plus tardive et plus longue : elle commence environ deux ans après celle des filles et dure plus longtemps, et les plaques de croissance des garçons se referment plus tard (vers 17–19 ans contre 15–17 ans pour les filles). Avant la puberté, les sexes sont presque identiques en taille moyenne.',
    },
    {
      question: 'Mon enfant est en dessous de la moyenne — dois-je m’inquiéter ?',
      answer:
        'Pas sur la base d’une seule mesure. Vérifiez le percentile et, surtout, sa stabilité dans le temps — un enfant qui a toujours suivi à peu près le 15e percentile grandit normalement. Consultez un pédiatre si le percentile baisse continuellement, si la croissance stagne pendant de longs mois, ou simplement si vous êtes inquiet.',
    },
    {
      question: 'À quel âge les adolescents arrêtent-ils de grandir ?',
      answer:
        'La plupart des filles finissent de grandir vers 15–16 ans, environ deux ans après leurs premières règles. La plupart des garçons finissent vers 17–18 ans, avec parfois de petits gains jusqu’au début de la vingtaine. Une fois les plaques de croissance refermées, aucun exercice ni complément ne peut ajouter une taille significative.',
    },
  ],
  relatedLinks: [
    { text: 'Courbe de taille des garçons', href: '/height-calculator/boys-chart/' },
    { text: 'Courbe de taille des filles', href: '/height-calculator/girls-chart/' },
    { text: 'Percentile de taille des garçons', href: '/height-calculator/boys-percentile/' },
    { text: 'Percentile de taille des filles', href: '/height-calculator/girls-percentile/' },
    { text: 'Prédire la taille adulte de votre enfant', href: '/articles/predict-your-childs-adult-height/' },
  ],
};
