import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'cm-to-feet-inches',
  slug: 'cm-en-pieds-et-pouces',
  title: 'Cm en pieds et pouces : le guide de conversion complet',
  subtitle:
    "La formule exacte, un exemple détaillé et un tableau de référence rapide — convertissez n'importe quelle taille de centimètres en pieds et pouces en quelques secondes.",
  metaDescription:
    "Convertir les cm en pieds et pouces : la formule exacte, un exemple détaillé (175 cm = 5'9\"), un tableau de référence rapide (150–200 cm) et les réponses aux questions courantes.",
  datePublished: '2026-10-08',
  dateModified: '2026-10-08',
  readTime: '5 min de lecture',
  badge: 'Guide de référence',
  tocTitle: 'Dans cet article',
  intro: {
    lead:
      "Pour convertir des cm en pieds et en pouces : divisez les centimètres par 30,48 pour obtenir les pieds, puis multipliez la partie décimale par 12 pour obtenir les pouces restants. Exemple : 175 cm ÷ 30,48 = 5,741 pieds, et 0,741 × 12 = 8,9 pouces — donc 175 cm = 5'8,9\", généralement arrondi à 5'9\".",
    paragraphs: [
      "Les centimètres sont la norme mondiale, mais les pieds et les pouces règnent encore aux États-Unis et au Royaume-Uni — sur les profils de rencontres, les formulaires médicaux et les statistiques sportives. Connaître la conversion par cœur vous évite de jongler avec une calculatrice à chaque fois.",
      "Ci-dessous : les deux formules exactes, un exemple détaillé étape par étape et un tableau de référence complet de 150 à 200 cm.",
    ],
  },
  sections: [
    {
      id: 'formula',
      heading: 'La formule',
      paragraphs: [
        "Il vous faut deux repères : 1 pied = 30,48 cm et 1 pouce = 2,54 cm (tous deux exacts par définition internationale). Ensuite, la conversion se fait en deux étapes :",
      ],
      bulletPoints: [
        "Étape 1 — les pieds : divisez les centimètres par 30,48. Le nombre entier correspond à vos pieds.",
        "Étape 2 — les pouces : prenez le reste décimal et multipliez-le par 12. Vous obtenez vos pouces.",
      ],
      callout: {
        type: 'tip',
        text: "Raccourci pour la partie pouces : nombre total de pouces = cm ÷ 2,54. Puis pieds = partie entière ÷ 12, et le reste correspond aux pouces. Même résultat, une étape de moins si vous préférez travailler en pouces.",
      },
    },
    {
      id: 'worked-example',
      heading: 'Exemple détaillé : 175 cm',
      paragraphs: [],
      steps: [
        {
          number: 1,
          title: 'Divisez par 30,48',
          description: "175 ÷ 30,48 = 5,741. Le nombre entier vous donne 5 pieds.",
        },
        {
          number: 2,
          title: 'Multipliez le reste par 12',
          description: "0,741 × 12 = 8,9. Ce sont vos pouces.",
        },
        {
          number: 3,
          title: 'Lisez le résultat',
          description: "175 cm = 5'8,9\" — dans le langage courant, 5'9\".",
        },
      ],
      callout: {
        type: 'note',
        text: "Dans la conversation, les tailles sont presque toujours arrondies au pouce entier le plus proche. 5'8,9\" devient 5'9\", 5'3,0\" reste 5'3\".",
      },
    },
    {
      id: 'reference-table',
      heading: 'Tableau de référence rapide (150–200 cm)',
      paragraphs: [
        "Les tailles les plus courantes, déjà converties — aucun calcul nécessaire :",
      ],
      table: {
        headers: ['Centimètres', 'Pieds et pouces', 'On dit'],
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
          "Conversions exactes affichées à une décimale ; « on dit » est la forme arrondie du langage courant.",
      },
    },
    {
      id: 'reverse',
      heading: 'Dans l’autre sens : des pieds et pouces vers les cm',
      paragraphs: [
        "Pour convertir en sens inverse, multipliez les pieds par 30,48 et les pouces par 2,54, puis additionnez. Exemple : 5'9\" = (5 × 30,48) + (9 × 2,54) = 152,4 + 22,86 = 175,26 cm ≈ 175 cm.",
        "Vous faites ce calcul souvent ? Oubliez le calcul mental — notre convertisseur le fait instantanément dans les deux sens :",
      ],
      link: {
        text: '→ Ouvrir le calculateur de taille',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: 'Combien y a-t-il de cm dans un pied ?',
      answer:
        "Exactement 30,48 cm. Le pied a été fixé à cette valeur par un accord international en 1959.",
    },
    {
      question: 'Combien y a-t-il de cm dans un pouce ?',
      answer:
        "Exactement 2,54 cm. C'est pourquoi diviser les centimètres par 2,54 donne le nombre total de pouces.",
    },
    {
      question: 'Que vaut 175 cm en pieds et pouces ?',
      answer:
        "175 cm = 5'8,9\", arrondi à 5'9\" dans le langage courant.",
    },
    {
      question: 'Pourquoi les Américains utilisent-ils encore les pieds et les pouces ?',
      answer:
        "Les États-Unis ont conservé le système impérial par tradition et à cause du coût du changement — la signalisation routière, la construction et les habitudes quotidiennes fonctionnent en pieds et en pouces. Le reste du monde, et toute la science, utilise le système métrique.",
    },
  ],
  relatedLinks: [
    { text: 'Calculateur de taille', href: '/height-calculator/' },
    { text: 'Taille moyenne par pays', href: '/articles/average-height-by-country/' },
  ],
};
