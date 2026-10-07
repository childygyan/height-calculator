import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-india',
  slug: 'taille-moyenne-en-inde',
  title: 'Taille moyenne en Inde : hommes, femmes et tendances',
  subtitle:
    'Les chiffres honnêtes sur la taille des Indiens — hommes, femmes, différences régionales, et comment un siècle de changements rend les Indiens plus grands.',
  metaDescription:
    'Taille moyenne en Inde : environ 166 cm pour les hommes et 155 cm pour les femmes. Variations régionales, tendances sur 100 ans, et où vous vous situez.',
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  readTime: '6 min de lecture',
  badge: 'Guide de référence',
  tocTitle: 'Dans cet article',
  intro: {
    lead:
      'La taille moyenne en Inde est d’environ 166 cm (5 pi 5 po) pour les hommes et 155 cm (5 pi 1 po) pour les femmes. Ce sont des approximations nationales — les vraies moyennes varient de plusieurs centimètres entre les régions, entre les villes et les villages, et entre les générations.',
    paragraphs: [
      'Vous trouverez en ligne beaucoup de chiffres différents pour la taille des Indiens, et ils sont rarement d’accord. C’est parce que l’Inde n’est pas une seule population à cet égard : un homme du Pendjab et une femme du Tamil Nadu viennent d’histoires génétiques et nutritionnelles très différentes, et aucun chiffre unique ne peut rendre compte des deux.',
      'Ce guide vous donne les chiffres clés honnêtes, explique les différences régionales que la plupart des articles passent sous silence, et montre la tendance la plus nette des données — les Indiens grandissent, génération après génération.',
    ],
  },
  sections: [
    {
      id: 'headline-numbers',
      heading: 'Les chiffres clés',
      paragraphs: [
        'Les enquêtes nationales auprès des adultes indiens aboutissent toujours aux mêmes ordres de grandeur :',
      ],
      table: {
        headers: ['Groupe', 'Taille moyenne', 'En pieds/pouces'],
        rows: [
          ['Hommes', '≈ 166 cm', '≈ 5 pi 5 po'],
          ['Femmes', '≈ 155 cm', '≈ 5 pi 1 po'],
        ],
        footnote:
          'Moyennes nationales approximatives tirées d’enquêtes de population. Les chiffres varient selon l’année de l’étude, la tranche d’âge et la méthodologie — considérez-les comme des repères, pas des mesures exactes.',
      },
      callout: {
        type: 'note',
        text: 'Pourquoi le « ≈ » compte : les différentes enquêtes mesurent des tranches d’âge et des régions différentes. Des chiffres entre 164–168 cm pour les hommes et 153–157 cm pour les femmes apparaissent tous dans des sources crédibles. Quiconque cite une décimale suggère une précision que les données ne justifient pas.',
      },
    },
    {
      id: 'regional-differences',
      heading: 'L’Inde n’a pas une seule taille : les différences régionales',
      paragraphs: [
        'La moyenne nationale masque de vraies variations. En gros :',
      ],
      bulletPoints: [
        'Les États du nord et du nord-ouest (Pendjab, Haryana, certaines parties du Rajasthan et de l’Uttar Pradesh) se situent en moyenne plusieurs centimètres au-dessus du chiffre national — un mélange de génétique et d’une alimentation historiquement riche en produits laitiers.',
        'Les États du sud et de l’est se situent en dessous du chiffre national, avec les moyennes les plus basses dans certaines parties du Nord-Est et des régions tribales du centre.',
        'Les Indiens urbains sont plus grands que les Indiens ruraux à tout âge — cet écart reflète la nutrition infantile, l’accès aux soins et le poids des maladies bien plus que toute autre chose.',
      ],
      callout: {
        type: 'tip',
        text: 'Se comparer à la « moyenne indienne » n’a de sens que par rapport à votre propre région et à vos origines. Une femme de 162 cm du Kerala et un homme de 170 cm du Pendjab sont tous deux parfaitement typiques — pour leurs populations.',
      },
    },
    {
      id: 'getting-taller',
      heading: 'L’histoire d’un siècle : les Indiens grandissent',
      paragraphs: [
        'Il y a un siècle, l’homme indien moyen mesurait environ 160 cm ou moins. Famines, sous-nutrition chronique et maladies infectieuses ont maintenu des générations entières petites. Ce qui a changé est l’une des grandes réussites de santé publique du XXe siècle :',
      ],
      bulletPoints: [
        'La révolution verte (années 1960–70) a fortement augmenté les disponibilités alimentaires et mis fin à l’ère des famines de masse.',
        'La baisse de la mortalité infantile et un meilleur contrôle des maladies ont permis à plus d’enfants d’atteindre tout leur potentiel de croissance.',
        'La hausse des revenus a apporté plus de protéines — surtout des produits laitiers, des œufs et des légumineuses — dans l’alimentation quotidienne.',
      ],
      callout: {
        type: 'tip',
        text: 'Résultat : chaque génération depuis l’indépendance est en moyenne un peu plus grande que la précédente. La tendance est toujours en cours — les adolescents indiens d’aujourd’hui sont mesurablement plus grands que leurs grands-parents au même âge.',
      },
    },
    {
      id: 'how-you-compare',
      heading: 'Où vous situez-vous ?',
      paragraphs: [
        'Les moyennes sont intéressantes, mais elles ne peuvent rien dire de votre propre croissance — pour cela, il faut votre histoire personnelle, la taille de vos parents et votre courbe de croissance.',
        'Voyez où vous en êtes et ce que votre schéma familial prédit :',
      ],
      link: {
        text: '→ Ouvrir le calculateur de taille',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: 'Les Indiens grandissent-ils ?',
      answer:
        'Oui. Un siècle de meilleure nutrition, de contrôle des maladies et de hausse des revenus a élevé la taille moyenne à chaque génération. La tendance est la plus nette quand on compare grands-parents, parents et adolescents d’aujourd’hui — et elle ne s’est pas arrêtée.',
    },
    {
      question: 'Quelle est la taille moyenne d’un homme indien ?',
      answer:
        'Environ 166 cm (5 pi 5 po), d’après les enquêtes nationales de population. Les hommes des États du nord et du nord-ouest mesurent en moyenne quelques centimètres de plus ; ceux des régions du sud, de l’est et des zones tribales, quelques centimètres de moins.',
    },
    {
      question: 'Pourquoi les Indiens du Sud sont-ils en moyenne plus petits ?',
      answer:
        'C’est un mélange de génétique et d’histoire, pas une cause unique. Les populations du Sud ont des origines ancestrales différentes de celles du Nord, et pendant une grande partie du XXe siècle, le Sud a aussi connu de plus fortes contraintes nutritionnelles. À mesure que la nutrition s’égalise, les écarts régionaux se réduisent — ce qui est exactement ce qu’on attendrait si l’environnement, et pas seulement les gènes, jouait un rôle majeur.',
    },
    {
      question: 'Est-ce que 170 cm (5 pi 7 po) est considéré comme grand en Inde ?',
      answer:
        'Pour un homme, 170 cm est quelques centimètres au-dessus de la moyenne nationale d’environ 166 cm — nettement au-dessus de la moyenne, sans être remarquablement grand. Pour une femme, 170 cm est largement au-dessus de la moyenne d’environ 155 cm et serait considéré comme grand partout dans le pays.',
    },
  ],
  relatedLinks: [
    { text: 'Calculateur de taille', href: '/height-calculator/' },
    { text: 'Comparaison de tailles', href: '/compare/' },
    { text: 'Taille moyenne par pays', href: '/articles/average-height-by-country/' },
  ],
};
