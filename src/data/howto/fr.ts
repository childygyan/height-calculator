import type { HowToGuideData } from './types';

export const frHowToGuide: HowToGuideData = {
  locale: 'fr',
  title: 'Comment Utiliser Height Calculator',
  subtitle: 'Un guide complet, étape par étape, pour mesurer, convertir, comparer et comprendre la taille — de la croissance du bébé à la stature adulte.',
  badge: 'Guide Complet de l’Utilisateur',
  metaDescription: 'Apprenez à utiliser Height Calculator : mesurez la taille avec précision, convertissez cm et pieds/po, calculez les différences de taille, vérifiez les percentiles et comprenez les courbes de croissance.',
  readTime: '8 min de lecture',
  tocTitle: 'Sommaire',
  intro: {
    lead: 'Height Calculator est une calculatrice de taille gratuite conçue pour vous aider à prédire, suivre et vraiment comprendre la taille — des premiers centimètres du bébé à la stature adulte.',
    paragraphs: [
      'Que vous soyez un parent qui suit la croissance de son bébé, curieux de savoir quelle sera la taille adulte de votre enfant, ou que vous convertissiez simplement des centimètres en pieds/pouces, les chiffres bruts racontent rarement toute l’histoire. Lire qu’un enfant mesure 95 cm est abstrait ; voir où cela se situe sur la courbe de percentiles du CDC/OMS — ou ce que cela prédit pour la taille adulte — transforme un chiffre en compréhension.',
      'Ce guide vous accompagne dans chaque fonctionnalité : mesure précise, conversion d’unités, percentiles de croissance, prédiction de taille et lecture correcte des résultats.',
    ],
  },
  sections: [
    {
      id: 'what-is-height-calculator',
      heading: '1. Qu’est-ce qu’une Calculatrice de Taille ?',
      paragraphs: [
        'Une calculatrice de taille transforme des chiffres bruts en réponses claires. Au lieu de vous demander ce qu’un percentile signifie, combien de centimètres séparent deux tailles ou quelle sera la taille future d’un enfant, la calculatrice le résout instantanément — sur la base de vraies références de croissance.',
        'Avec Height Calculator, vous pouvez convertir entre centimètres et pieds/pouces, calculer la différence exacte entre deux tailles, vérifier où une taille se situe sur les références de percentiles du CDC/OMS et estimer la taille adulte d’un enfant à partir de la taille de ses parents — le tout gratuitement, sans créer de compte.',
      ],
      callout: {
        type: 'info',
        text: 'Tous les résultats sont des estimations éducatives basées sur des données publiques de croissance — jamais un avis médical.',
      },
    },
    {
      id: 'measuring-accurately',
      heading: '2. Comment Mesurer la Taille avec Précision',
      paragraphs: [
        'Tout bon calcul commence par une bonne mesure. Une mesure négligée de 2 cm peut déplacer un percentile entier : cela vaut donc la peine de bien faire les choses.',
      ],
      steps: [
        { number: 1, title: 'Pieds nus', description: 'Retirez chaussures et chaussettes épaisses. Mesurez toujours sans chaussures pour rester cohérent.' },
        { number: 2, title: 'Dos au mur', description: 'Tenez-vous dos droit contre un mur lisse, talons joints, regard droit devant.' },
        { number: 3, title: 'Marquez le sommet', description: 'Utilisez un objet plat (comme un livre) contre le mur, à angle droit avec le sommet de la tête.' },
        { number: 4, title: 'Mesurez au 0,1 cm près', description: 'Mesurez du sol à la marque avec une précision de 0,1 cm ou ⅛ de pouce.' },
        { number: 5, title: 'Bébés : mesurez allongé', description: 'Pour les bébés et jeunes enfants, mesurez la longueur allongé, de la tête aux talons étendus.' },
      ],
      callout: {
        type: 'tip',
        text: 'Mesurez toujours à la même heure du jour : la taille peut varier jusqu’à 1 cm entre le matin et le soir.',
      },
    },
    {
      id: 'unit-conversion',
      heading: '3. Conversion d’Unités : cm ↔ Pieds et Pouces',
      paragraphs: [
        'La calculatrice bascule instantanément entre le système métrique (cm) et impérial (pieds/po). La conversion utilise le standard international exact : 1 pouce = 2,54 cm et 1 pied = 30,48 cm — sans arrondis approximatifs.',
        'Par exemple, 5 pi 10 po correspondent à précisément 177,8 cm, et 170 cm correspondent à 5 pi 6,9 po. Vous pouvez changer d’unité à tout moment sans perdre les données saisies.',
      ],
    },
    {
      id: 'understanding-percentiles',
      heading: '4. Comprendre les Percentiles de Taille',
      paragraphs: [
        'Un percentile compare la taille d’un enfant à de vastes ensembles de données de référence pour le même âge et le même sexe. Un enfant au 75e percentile est plus grand qu’environ 75 enfants sur 100 du même âge et du même sexe — ce n’est pas une note, c’est une position dans la distribution.',
        'Nos références utilisent les courbes de croissance du CDC (2 à 20 ans) et les Normes de croissance de l’enfant de l’OMS (de la naissance à 5 ans) — les mêmes références que les pédiatres utilisent en consultation.',
      ],
      callout: {
        type: 'note',
        text: 'Être au 25e ou au 90e percentile n’est ni bien ni mal en soi. Ce qui compte, c’est de suivre sa propre courbe de croissance dans le temps.',
      },
    },
    {
      id: 'child-height-predictor',
      heading: '5. Prédicteur de Taille Adulte de l’Enfant',
      paragraphs: [
        'Le prédicteur utilise la méthode de la taille parentale moyenne, la formule standard de référence des pédiatres : pour les garçons, (taille du père + taille de la mère + 13 cm) ÷ 2 ; pour les filles, (taille du père + taille de la mère − 13 cm) ÷ 2.',
        'Le résultat est toujours présenté avec une fourchette honnête d’environ ±8–10 cm. C’est une estimation, pas une garantie : la génétique, la nutrition, le sommeil et la santé influencent la taille finale, et aucun prédicteur n’est précis à 100 %.',
      ],
    },
    {
      id: 'growth-charts',
      heading: '6. Courbes de Croissance : CDC et OMS',
      paragraphs: [
        'Les courbes de croissance montrent comment la taille évolue avec l’âge. Les courbes du CDC couvrent les 2 à 20 ans sur la base d’enquêtes nationales de santé américaines ; les normes de l’OMS couvrent de la naissance à 5 ans, établies à partir d’une étude multinationale sur des enfants en bonne santé.',
        'Suivre la taille de votre enfant sur la courbe dans le temps est plus instructif qu’une seule mesure : une courbe stable, même à un percentile bas, indique généralement une croissance saine.',
      ],
    },
    {
      id: 'baby-growth',
      heading: '7. Suivre la Croissance du Bébé',
      paragraphs: [
        'Dans les premières années, la croissance est rapide et chaque centimètre compte. Mesurez la longueur du bébé allongé, du sommet de la tête aux talons, jambes doucement étendues.',
        'Utilisez les normes de l’OMS (0 à 5 ans) comme référence et notez chaque mesure avec sa date. Des mesures mensuelles pendant les 2 premières années créent un historique précieux pour les consultations pédiatriques.',
      ],
    },
    {
      id: 'reading-your-results',
      heading: '8. Comment Lire les Résultats',
      paragraphs: [
        'Chaque résultat de la calculatrice est accompagné de contexte. La conversion d’unités affiche la valeur exacte dans les deux systèmes. Le percentile montre la position de l’enfant sur la courbe de croissance pour l’âge et le sexe indiqués.',
        'La prédiction de taille adulte inclut la fourchette typique attendue (±8–10 cm) : lisez toujours l’intervalle, pas seulement le chiffre central. Et la différence entre deux tailles est présentée en cm et en pieds/pouces.',
      ],
    },
    {
      id: 'practical-tips',
      heading: '9. Conseils Pratiques',
      paragraphs: [
        'De petites habitudes rendent vos mesures et calculs bien plus fiables :',
      ],
      bulletPoints: [
        'Mesurez toujours à la même heure et dans les mêmes conditions.',
        'Notez la date de chaque mesure pour construire l’historique de croissance.',
        'Utilisez le même mètre ruban ou la même toise pour toutes les mesures.',
        'Pour les enfants, comparez toujours avec la courbe du sexe et de l’âge corrects.',
        'Ne comparez pas les percentiles du CDC avec ceux de l’OMS : ce sont des références différentes.',
        'Rappelez-vous : les résultats sont des estimations éducatives, pas un diagnostic médical.',
      ],
    },
    {
      id: 'who-benefits',
      heading: '10. Qui Bénéficie de Height Calculator ?',
      paragraphs: [
        'Les parents qui suivent la croissance de leurs enfants, les futurs parents curieux de la taille de leurs enfants, les adultes qui convertissent des mesures pour des documents ou des vêtements, et toute personne qui veut comprendre ce que les chiffres de taille signifient vraiment.',
        'L’accès est gratuit et illimité : sans inscription, sans téléchargement, sur n’importe quel appareil.',
      ],
    },
    {
      id: 'faq-troubleshoot',
      heading: '11. Questions Fréquentes et Dépannage',
      paragraphs: [
        'Les données saisies ont disparu en changeant d’unité ? Pas d’inquiétude : la calculatrice conserve les valeurs en basculant entre cm et pieds/po. Si un percentile semble inattendu, vérifiez que l’âge et le sexe sont corrects — un an d’écart change beaucoup la courbe.',
        'La prédiction de taille affiche un large intervalle ? C’est intentionnel : la fourchette de ±8–10 cm reflète la variation réelle entre enfants. Aucune méthode sérieuse ne promet une précision au centimètre.',
      ],
    },
    {
      id: 'final-cta',
      heading: '12. Commencez Votre Premier Calcul Aujourd’hui',
      paragraphs: [
        'Prêt à calculer ? La calculatrice de taille est rapide, gratuite et illimitée. Saisissez une taille, convertissez des unités, vérifiez un percentile ou prédisez la taille adulte d’un enfant — et comprenez vraiment ce que les chiffres signifient.',
      ],
    },
  ],
  faqTransition: {
    badge: 'Des Questions ?',
    heading: 'Consultez Nos Questions Fréquentes',
    text: 'En savoir plus sur les percentiles, les courbes de croissance, la conversion d’unités et la prédiction de taille de Height Calculator.',
    ctaText: 'Voir Toutes les Questions Fréquentes',
    ctaHref: '/fr/#faq',
  },
  finalCta: {
    heading: 'Prêt à Calculer Votre Taille ?',
    description: 'Ouvrez le centre Height Calculator dès maintenant — convertissez des unités, comparez des tailles, vérifiez des percentiles et prédisez la taille adulte des enfants, le tout dans une calculatrice gratuite.',
    buttonText: 'Ouvrir Height Calculator',
    buttonHref: '/height-calculator/',
    secondaryText: 'Voir les Courbes de Croissance',
    secondaryHref: '/height-calculator/boys-chart/',
  },
};
