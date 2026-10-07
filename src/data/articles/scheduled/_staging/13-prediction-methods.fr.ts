import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'prediction-methods',
  slug: 'quelle-methode-prediction-taille-plus-precise',
  title: 'Quelle Méthode de Prédiction de la Taille d’un Enfant est la Plus Précise ?',
  subtitle:
    'Radiographie de l’âge osseux, méthode Khamis-Roche et formule taille cible génétique comparées honnêtement — précision, ce que chacune exige et quand elle a du sens.',
  metaDescription:
    'Quelle est la précision des prédicteurs de taille pour enfant ? Comparaison honnête entre la radiographie de l’âge osseux, la méthode Khamis-Roche et la taille cible génétique — avec les marges d’erreur.',
  datePublished: '2026-10-19',
  dateModified: '2026-10-19',
  readTime: '6 min de lecture',
  badge: 'Comparatif de méthodes',
  tocTitle: 'Dans cet article',
  intro: {
    lead:
      'Par ordre de précision : la radiographie de l’âge osseux (la plus précise, nécessite un médecin) bat la méthode Khamis-Roche (environ ±2 pouces, nécessite la taille, le poids et l’âge actuels de l’enfant), qui bat elle-même la formule de la taille cible génétique (±8,5 cm, nécessite seulement la taille des deux parents).',
    paragraphs: [
      'Chaque prédicteur de taille — en ligne ou en cabinet — repose sur l’une de ces trois méthodes. La vraie différence entre elles n’a rien de magique : c’est une question de données, à savoir combien d’informations sur l’enfant elles utilisent et quelle est la marge d’erreur.',
      'Ci-dessous : comment fonctionne chaque méthode, sa précision réelle et une règle claire pour choisir celle qui correspond à votre situation.',
    ],
  },
  sections: [
    {
      id: 'at-a-glance',
      heading: 'Les trois méthodes en un coup d’œil',
      paragraphs: [
        'Voici la version courte, avant d’approfondir chacune d’elles :',
      ],
      table: {
        headers: ['Méthode', 'Erreur typique', 'Ce qu’il vous faut', 'Coût / accès'],
        rows: [
          ['Radiographie de l’âge osseux', 'La plus précise', 'Visite chez le médecin + radiographie de la main', 'En clinique uniquement'],
          ['Khamis-Roche', '±~2 pouces (~5 cm)', 'Âge, taille, poids de l’enfant + taille des deux parents', 'Calculatrice gratuite'],
          ['Taille cible génétique', '±8,5 cm (~3,3 pouces)', 'Seule la taille des deux parents', 'Calculatrice gratuite'],
        ],
        footnote:
          'Les marges d’erreur sont des valeurs approximatives publiées. Les résultats individuels varient — la croissance est statistique, pas exacte.',
      },
    },
    {
      id: 'mid-parental',
      heading: 'Taille cible génétique : l’estimation la plus simple',
      paragraphs: [
        'C’est la formule qui alimente presque tous les prédicteurs gratuits en ligne, et celle que les pédiatres citent en quelques secondes :',
      ],
      bulletPoints: [
        'Garçons : (taille du père + taille de la mère + 13 cm) ÷ 2',
        'Filles : (taille du père + taille de la mère − 13 cm) ÷ 2',
      ],
      callout: {
        type: 'tip',
        text: 'Exemple : père 178 cm, mère 165 cm. Garçon : (178 + 165 + 13) ÷ 2 = 178 cm. Fille : (178 + 165 − 13) ÷ 2 = 165 cm. Comptez ±8,5 cm autour de ce chiffre — le garçon atterrirait probablement entre 169,5 cm et 186,5 cm.',
      },
    },
    {
      id: 'khamis-roche',
      heading: 'Khamis-Roche : la formule la plus précise',
      paragraphs: [
        'Publiée par Khamis et Roche en 1994, cette méthode ajoute les mesures actuelles de l’enfant — âge, taille et poids — à la taille des parents, en utilisant des coefficients de régression issus d’une vaste étude longitudinale. Parce qu’elle tient compte de la situation réelle de l’enfant aujourd’hui, elle surpasse systématiquement la formule de la taille cible génétique.',
        'Sa marge d’erreur publiée est d’environ ±2 pouces (environ 5 cm) — nettement plus serrée que les ±8,5 cm de la formule parentale. Elle s’applique aux enfants entre 4 et 17 ans environ, et la prédiction s’améliore à mesure que l’enfant grandit.',
      ],
      callout: {
        type: 'note',
        text: 'Une limite à signaler honnêtement : l’étude Khamis-Roche originale a suivi des enfants blancs américains. Elle est largement utilisée, mais elle reste une estimation basée sur une population — pas une mesure de votre enfant en particulier.',
      },
    },
    {
      id: 'bone-age',
      heading: 'L’âge osseux : la référence clinique',
      paragraphs: [
        'Quand un pédiatre a vraiment besoin de précision — par exemple quand la courbe de croissance d’un enfant semble inhabituelle — il prescrit une radiographie de l’âge osseux de la main et du poignet gauches. Un spécialiste compare l’image à des standards de référence (l’atlas de Greulich-Pyle étant le plus classique) pour déterminer l’âge squelettique, puis le combine avec la courbe de croissance pour prédire la taille adulte.',
        'C’est la méthode la plus précise disponible, car elle mesure la maturité biologique réelle de l’enfant, et pas seulement son âge calendaire. Mais elle exige une visite chez le médecin, une exposition aux rayons X (une dose très faible) et une interprétation clinique — ce n’est pas une option à faire soi-même.',
        'Pour une simple curiosité, les formules ci-dessus suffisent largement. Et si vous voulez une estimation rapide dès maintenant, le prédicteur gratuit de ce site utilise la méthode de la taille cible génétique :',
      ],
      link: {
        text: '→ Prédire la taille adulte de mon enfant (gratuit)',
        href: '/height-calculator/child-height-predictor/',
      },
    },
  ],
  faqs: [
    {
      question: 'Quelle est la précision des prédicteurs de taille en ligne pour enfant ?',
      answer:
        'La plupart des prédicteurs gratuits utilisent la formule de la taille cible génétique : leur précision honnête est donc d’environ ±8,5 cm (±3,3 pouces) autour du résultat. Considérez le chiffre comme le centre d’une fourchette, pas comme une promesse.',
    },
    {
      question: 'Qu’est-ce que la méthode Khamis-Roche ?',
      answer:
        'Une formule de prédiction de la taille publiée en 1994, qui utilise l’âge, la taille et le poids de l’enfant ainsi que la taille des deux parents. Elle est plus précise que la taille cible génétique — environ ±2 pouces — et s’applique aux enfants de 4 à 17 ans environ.',
    },
    {
      question: 'Les médecins peuvent-ils prédire la taille de mon enfant ?',
      answer:
        'Oui. Les pédiatres combinent l’estimation de la taille cible génétique avec la courbe de croissance de l’enfant et, si nécessaire, une radiographie de l’âge osseux de la main et du poignet. L’âge osseux est la méthode clinique la plus précise car elle mesure directement la maturité squelettique.',
    },
    {
      question: 'Quelle méthode utiliser pour un enfant de 3 ans ?',
      answer:
        'La taille cible génétique est le choix raisonnable — la méthode Khamis-Roche n’est validée qu’à partir de 4 ans environ. À 3 ans, les prédictions sont de toute façon les moins fiables, car il reste tant de croissance (et de timing pubertaire) devant l’enfant.',
    },
  ],
  medicalDisclaimer:
    'Cet article explique les méthodes de prédiction de la taille à des fins éducatives et ne constitue pas un avis médical. Si la croissance de votre enfant vous inquiète, consultez un pédiatre.',
  relatedLinks: [
    { text: 'Prédicteur de taille pour enfant (gratuit)', href: '/height-calculator/child-height-predictor/' },
    { text: 'Prédire la taille adulte de mon enfant — guide complet', href: '/articles/predict-your-childs-adult-height/' },
    { text: 'Le percentile de taille expliqué', href: '/articles/height-percentile-explained/' },
  ],
};
