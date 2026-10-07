import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'what-is-tall',
  slug: 'quelle-taille-consideree-grande',
  title: 'Quelle Taille Est Considérée « Grande » ? (Avec de Vraies Données)',
  subtitle:
    'Oubliez les avis vagues — voici où commence réellement le « grand » pour les hommes et les femmes, d’après de vraies données de percentiles.',
  metaDescription:
    'Quelle taille est considérée grande ? Données de percentiles réelles : hommes américains à partir de 1,88 m, femmes américaines à partir de 1,73 m. Tableaux, différences par pays et FAQ.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  readTime: '5 min de lecture',
  badge: 'Guide de référence',
  tocTitle: 'Dans cet article',
  intro: {
    lead:
      'Aux États-Unis, un homme est statistiquement « grand » à partir d’environ 1,88 m et une femme à partir d’environ 1,73 m — les deux se situent près du 95e percentile, ce qui signifie que seul environ 1 adulte sur 20 est plus grand.',
    paragraphs: [
      '« Grand » semble subjectif, mais les statisticiens tracent la limite avec les percentiles : les 5 % les plus grands de la population. Vous trouverez ci-dessous les tableaux de percentiles exacts pour les hommes et les femmes, pourquoi un même chiffre signifie des choses très différentes selon le sexe et le pays, et comment vérifier où vous vous situez.',
    ],
  },
  sections: [
    {
      id: 'answer',
      heading: 'La réponse courte : les tableaux de percentiles',
      paragraphs: [
        'Les percentiles de taille proviennent de grandes enquêtes de population (aux États-Unis, NHANES du CDC). Le 95e percentile est le seuil standard utilisé par les chercheurs pour définir « grand » — au-dessus, vous êtes plus grand qu’environ 95 personnes sur 100 du même sexe.',
      ],
      table: {
        headers: ['Percentile', 'Hommes', 'Femmes', 'Ce que ça signifie'],
        rows: [
          ['50e (moyenne)', '1,75 m', '1,61 m', 'Pile dans la moyenne'],
          ['75e', '1,80 m', '1,65 m', 'Nettement au-dessus de la moyenne'],
          ['90e', '1,84 m', '1,69 m', 'Plutôt grand — top 10 %'],
          ['95e', '1,88 m', '1,73 m', 'Grand — top 5 %'],
          ['97e+', '1,90 m et plus', '1,75 m et plus', 'Très grand — top 3 %'],
        ],
        footnote:
          'Valeurs approximatives pour les adultes américains (NHANES). Les sources varient légèrement selon l’année d’enquête — utilisez comme référence, pas comme mesure exacte.',
      },
      callout: {
        type: 'tip',
        text: 'Le chiffre le plus mal compris : 1,83 m pour un homme, ce n’est qu’environ le 84e percentile aux États-Unis — au-dessus de la moyenne, mais pas statistiquement « grand ».',
      },
      link: {
        text: '→ Vérifiez votre propre percentile',
        href: '/height-calculator/boys-percentile/',
      },
    },
    {
      id: 'men-vs-women',
      heading: 'Hommes et femmes : le contexte change tout',
      paragraphs: [
        'Une même taille peut être moyenne pour un sexe et grande pour l’autre. Un homme de 1,73 m se situe autour du 30e percentile — en dessous de la moyenne. Une femme de 1,73 m est au 95e percentile — indiscutablement grande.',
        'C’est pourquoi la question « X, c’est grand ? » n’a pas de réponse sans connaître le sexe :',
      ],
      bulletPoints: [
        '1,70 m : homme plutôt moyen (~25e percentile) contre femme grande (~90e percentile)',
        '1,78 m : homme au-dessus de la moyenne (~70e) contre femme très grande (~98e)',
        '1,83 m : homme au-dessus de la moyenne (~84e) contre femme extrêmement grande (~99e et plus)',
      ],
    },
    {
      id: 'by-country',
      heading: 'Ça dépend aussi du pays',
      paragraphs: [
        '« Grand » est relatif à la population qui vous entoure. Aux Pays-Bas, où l’homme moyen mesure 183,8 cm, 1,88 m ne fait guère tourner les têtes. Au Japon, où l’homme moyen mesure environ 172 cm, la même taille se remarque nettement.',
        'Seuils approximatifs de « grand » (95e percentile) dans le monde :',
      ],
      bulletPoints: [
        'Pays-Bas : ~1,93 m hommes / ~1,78 m femmes',
        'États-Unis : ~1,88 m hommes / ~1,73 m femmes',
        'Brésil : ~1,85 m hommes / ~1,70 m femmes',
        'Japon : ~1,80 m hommes / ~1,65 m femmes',
      ],
      link: {
        text: '→ Tableau complet de la taille moyenne par pays',
        href: '/articles/average-height-by-country/',
      },
    },
    {
      id: 'compare',
      heading: 'Où vous situez-vous ?',
      paragraphs: [
        'Les chiffres sont utiles, mais rien ne vaut le visuel. Comparez votre taille à celle d’un ami, d’une célébrité ou à la moyenne de votre pays et voyez la différence en image :',
      ],
      link: {
        text: '→ Comparez votre taille maintenant (gratuit)',
        href: '/compare/',
      },
    },
  ],
  faqs: [
    {
      question: '1,83 m, c’est grand ?',
      answer:
        'Pour un homme aux États-Unis, 1,83 m correspond environ au 84e percentile — plus grand que la plupart des gens que vous croisez, mais juste en dessous du seuil statistique du « grand » (95e percentile, ~1,88 m). Dans le langage courant, la plupart des gens diraient quand même que c’est grand.',
    },
    {
      question: '1,73 m, c’est grand pour une femme ?',
      answer:
        'Oui. À 1,73 m, une femme aux États-Unis se situe autour du 95e percentile — plus grande qu’environ 19 femmes sur 20. C’est fermement du territoire « grand », quelle que soit la définition.',
    },
    {
      question: 'Quelle taille est considérée grande au Japon ?',
      answer:
        'Comme les moyennes sont plus basses (environ 172 cm pour les hommes, 158 cm pour les femmes), le seuil du « grand » se situe autour de 1,80 m pour les hommes et 1,65 m pour les femmes — à peu près le 95e percentile de la population japonaise.',
    },
    {
      question: 'Quelle taille est considérée petite ?',
      answer:
        'Le miroir du « grand » : en dessous du 5e percentile. Aux États-Unis, c’est environ moins de 1,64 m pour les hommes et moins de 1,51 m pour les femmes. Comme pour « grand », ça varie selon le sexe et le pays.',
    },
  ],
  relatedLinks: [
    { text: 'Comparateur de taille', href: '/compare/' },
    { text: 'Calculateur de percentile de taille (garçons)', href: '/height-calculator/boys-percentile/' },
    { text: 'Calculateur de percentile de taille (filles)', href: '/height-calculator/girls-percentile/' },
    { text: 'Taille moyenne par pays', href: '/articles/average-height-by-country/' },
  ],
};
