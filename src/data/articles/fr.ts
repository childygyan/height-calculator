import type { ArticleData, ArticleUiStrings, LocaleArticleSet } from './types';

export const frArticles: ArticleData[] = [
  {
    id: 'avg-height-by-country',
    slug: 'taille-moyenne-par-pays',
    title: 'Taille Moyenne par Pays : Tableau Complet 2026',
    subtitle:
      'Découvrez la taille moyenne des hommes et des femmes dans 15 pays — dont le Brésil — et comprenez pourquoi elle varie autant dans le monde.',
    metaDescription:
      'Tableau de la taille moyenne par pays 2026 : Brésil, Pays-Bas, États-Unis, Portugal et plus. Voyez où se situe le Brésil et ce qui explique les différences.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 min de lecture',
    badge: 'Guide de référence',
    tocTitle: 'Dans cet article',
    intro: {
      lead:
        'La taille moyenne au Brésil est d\u2019environ 175,7 cm pour les hommes et 162,9 cm pour les femmes. Le pays le plus grand du monde est les Pays-Bas, avec 183,8 cm (hommes) et 170,4 cm (femmes).',
      paragraphs: [
        'La taille moyenne varie énormément d\u2019un pays à l\u2019autre — plus de 20 cm séparent les populations les plus grandes des plus petites. La génétique, la nutrition pendant l\u2019enfance, la santé publique et même le niveau socio-économique façonnent ces chiffres au fil des générations.',
        'Ci-dessous, un tableau avec les valeurs les plus citées dans les études publiées, plus le contexte que les chiffres seuls ne montrent pas : pourquoi le Brésil est là où il est, et ce que signifie vraiment être « au-dessus » ou « en dessous » de la moyenne.',
      ],
    },
    sections: [
      {
        id: 'tabela',
        heading: 'Tableau : taille moyenne par pays',
        paragraphs: [
          'Les valeurs ci-dessous sont des moyennes approximatives pour les adultes, compilées à partir d\u2019études de population publiées. De petites variations entre les sources sont normales — la taille moyenne évolue selon l\u2019année de l\u2019étude, la tranche d\u2019âge mesurée et la méthodologie.',
        ],
        table: {
          headers: ['Pays', 'Hommes (cm)', 'Femmes (cm)'],
          rows: [
            ['Pays-Bas', '183,8', '170,4'],
            ['Monténégro', '183,3', '169,6'],
            ['Danemark', '182,6', '169,1'],
            ['Allemagne', '180,3', '166,6'],
            ['France', '178,6', '164,5'],
            ['Royaume-Uni', '177,5', '164,4'],
            ['États-Unis', '177,1', '163,5'],
            ['Italie', '176,5', '165,0'],
            ['Espagne', '176,1', '163,0'],
            ['Brésil', '175,7', '162,9'],
            ['Chine', '175,7', '163,5'],
            ['Argentine', '174,5', '161,0'],
            ['Portugal', '173,9', '163,0'],
            ['Corée du Sud', '174,9', '162,3'],
            ['Japon', '172,1', '158,5'],
            ['Mexique', '169,5', '160,8'],
            ['Inde', '166,3', '155,5'],
          ],
          footnote:
            'Valeurs approximatives. Les sources varient selon l\u2019année, la tranche d\u2019âge et la méthode de mesure — à utiliser comme référence, pas comme mesure exacte.',
        },
      },
      {
        id: 'brasil-contexto',
        heading: 'Où se situe le Brésil',
        paragraphs: [
          'Le Brésil se trouve bien au milieu du classement mondial — au-dessus de la moyenne mondiale, mais en dessous des pays d\u2019Europe du Nord. En Amérique latine, le Brésil figure parmi les plus grands, devant le Mexique, le Pérou et la Bolivie.',
          'Un détail important : la taille moyenne brésilienne augmente depuis des décennies, portée par les progrès en nutrition et en santé publique. Chaque nouvelle génération mesure, en moyenne, un peu plus que la précédente — une tendance observée dans presque tous les pays en développement.',
        ],
      },
      {
        id: 'por-que-varia',
        heading: 'Pourquoi la taille moyenne varie-t-elle autant ?',
        paragraphs: [
          'Trois facteurs expliquent presque toute la différence entre les pays :',
        ],
        bulletPoints: [
          'La génétique (environ 80 % de la variation individuelle) : les populations avec un historique de sélection pour une grande stature — comme les Néerlandais et les Monténégrins — conservent cette caractéristique pendant des générations.',
          'La nutrition pendant l\u2019enfance : des apports adéquats en protéines, calcium et calories durant les premières années de vie sont décisifs. Les pays qui ont éliminé la malnutrition infantile ont vu leur taille moyenne augmenter en une génération.',
          'La santé publique : l\u2019assainissement, la vaccination et l\u2019accès aux pédiatres réduisent les maladies qui limitent la croissance.',
        ],
        callout: {
          type: 'tip',
          text: 'La taille se fixe principalement avant la fin de l\u2019adolescence. Une fois les cartilages de croissance fermés (vers 18-20 ans), aucun exercice ni complément n\u2019augmente la stature de façon prouvée.',
        },
      },
      {
        id: 'compare-se',
        heading: 'Comment se comparer à la moyenne',
        paragraphs: [
          'Connaître la moyenne de son pays est amusant — mais ce qui compte vraiment pour la santé, c\u2019est la comparaison avec sa propre courbe de croissance au fil du temps, pas un chiffre isolé.',
          'Envie de voir où vous vous situez ? Utilisez notre calculateur gratuit pour convertir et comparer votre taille :',
        ],
        link: {
          text: '→ Ouvrir le Calculateur de Taille',
          href: '/height-calculator/',
        },
      },
    ],
    faqs: [
      {
        question: 'Quel est le pays avec la plus grande taille moyenne au monde ?',
        answer:
          'Les Pays-Bas sont en tête : environ 183,8 cm pour les hommes et 170,4 cm pour les femmes, selon les études de population les plus citées.',
      },
      {
        question: 'La taille moyenne du Brésil augmente-t-elle ?',
        answer:
          'Oui. Comme dans la plupart des pays en développement, les progrès en nutrition et en santé publique font augmenter la moyenne brésilienne à chaque génération.',
      },
      {
        question: '175 cm, est-ce considéré comme grand au Brésil ?',
        answer:
          'Pour les hommes, 175 cm correspond pratiquement à la moyenne nationale (175,7 cm). Pour les femmes, ce serait bien au-dessus de la moyenne féminine (162,9 cm) — le contexte du sexe compte autant que celui du pays.',
      },
      {
        question: 'Pourquoi les Néerlandais sont-ils si grands ?',
        answer:
          'Une combinaison de génétique, d\u2019une excellente nutrition infantile et de l\u2019un des meilleurs systèmes de santé publique au monde, maintenue pendant des générations. Il n\u2019y a pas de « secret » unique.',
      },
    ],
    relatedLinks: [
      { text: 'Calculateur de Taille', href: '/height-calculator/' },
      { text: 'Comparateur de Taille', href: '/compare/' },
      { text: 'Comment bien mesurer sa taille', href: '/fr/articles/comment-bien-mesurer-sa-taille/' },
    ],
  },
  {
    id: 'measure-height-correctly',
    slug: 'comment-bien-mesurer-sa-taille',
    title: 'Comment Bien Mesurer sa Taille à la Maison',
    subtitle:
      'Un pas-à-pas simple pour mesurer votre taille avec précision en utilisant seulement un mur, un livre et un mètre ruban — sans erreurs courantes.',
    metaDescription:
      'Apprenez à bien mesurer votre taille à la maison : pas-à-pas, erreurs courantes qui volent des centimètres et meilleur moment de la journée pour se mesurer.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 min de lecture',
    badge: 'Pas à pas',
    tocTitle: 'Dans cet article',
    intro: {
      lead:
        'Pour bien mesurer votre taille : tenez-vous pieds nus contre un mur lisse, talons joints, regardez droit devant vous, marquez le sommet de votre tête avec un livre et mesurez du sol jusqu\u2019à la marque. Mesurez-vous le matin pour la valeur la plus haute et la plus stable.',
      paragraphs: [
        'Cela semble simple, mais la plupart des gens se mesurent mal — et l\u2019erreur peut atteindre 2 ou 3 centimètres. Une posture avachie, un tapis moelleux sous les pieds et une mesure le soir sont les coupables les plus courants.',
        'Suivez le pas-à-pas ci-dessous et votre mesure correspondra à celle d\u2019un cabinet médical.',
      ],
    },
    sections: [
      {
        id: 'passo-a-passo',
        heading: 'Pas à pas',
        paragraphs: [],
        steps: [
          {
            number: 1,
            title: 'Choisissez le bon endroit',
            description:
              'Un mur lisse et un sol plat et dur (carrelage, bois ou ciment). Évitez les tapis — ils s\u2019enfoncent et volent jusqu\u2019à 1 cm à la mesure.',
          },
          {
            number: 2,
            title: 'Retirez chaussures et accessoires',
            description:
              'Pieds nus, sans chaussettes épaisses. Retirez barrettes, casquettes ou chignons hauts qui modifient le sommet de la tête.',
          },
          {
            number: 3,
            title: 'Positionnez votre corps',
            description:
              'Talons joints contre le mur, dos et épaules droits mais détendus, bras le long du corps. Regardez droit devant vous, menton parallèle au sol.',
          },
          {
            number: 4,
            title: 'Marquez le sommet de la tête',
            description:
              'Demandez de l\u2019aide à quelqu\u2019un ou utilisez un livre à couverture rigide : posez-le sur le sommet de votre tête en formant un angle de 90° avec le mur et faites une marque légère au crayon.',
          },
          {
            number: 5,
            title: 'Mesurez du sol jusqu\u2019à la marque',
            description:
              'Utilisez un mètre ruban, en le gardant bien tendu et vertical. Notez en centimètres avec une décimale.',
          },
        ],
      },
      {
        id: 'melhor-horario',
        heading: 'Le meilleur moment pour se mesurer',
        paragraphs: [
          'Mesurez-vous toujours le matin, au réveil. Pendant la journée, la gravité comprime les disques de la colonne vertébrale et vous « rétrécissez » de 1 à 2 cm jusqu\u2019au soir. Pour suivre votre taille dans le temps, mesurez-vous à la même heure — de préférence le matin.',
        ],
        callout: {
          type: 'tip',
          text: 'Vous comparez d\u2019anciennes mesures ? Vérifiez qu\u2019elles ont été prises au même moment de la journée. Une différence de 1,5 cm entre le matin et le soir est tout à fait normale.',
        },
      },
      {
        id: 'erros-comuns',
        heading: 'Erreurs courantes qui faussent le résultat',
        paragraphs: [],
        bulletPoints: [
          'Se mesurer sur un tapis ou une moquette (s\u2019enfonce de 0,5 à 1 cm)',
          'Arrondir les épaules ou pencher la tête vers le bas',
          'Porter des chaussures ou des chaussettes épaisses',
          'Marquer le front au lieu du point le plus haut de la tête',
          'Mètre ruban lâche ou incliné',
          'Se mesurer le soir et comparer avec une mesure du matin',
        ],
      },
      {
        id: 'criancas',
        heading: 'Mesurer les enfants',
        paragraphs: [
          'Pour les enfants de moins de 2 ans, la bonne mesure se fait allongé (longueur), pas debout. À partir de 2 ans, utilisez le même pas-à-pas ci-dessus — et notez la date de chaque mesure pour suivre la courbe de croissance.',
          'Si la courbe de l\u2019enfant chute de percentile de façon persistante, il vaut la peine d\u2019en parler au pédiatre :',
        ],
        link: {
          text: '→ Comprendre le percentile de taille',
          href: '/fr/articles/percentile-de-taille-explique/',
        },
      },
    ],
    faqs: [
      {
        question: 'Puis-je me mesurer seul ?',
        answer:
          'Oui, en utilisant un livre contre le mur comme repère. La précision est un peu moindre qu\u2019avec de l\u2019aide, mais en suivant le pas-à-pas, l\u2019erreur reste inférieure à 0,5 cm.',
      },
      {
        question: 'Pourquoi ma taille change-t-elle au cours de la journée ?',
        answer:
          'Les disques intervertébraux se compriment sous l\u2019effet de la gravité au fil de la journée. Il est normal de « perdre » 1 à 2 cm entre le matin et le soir — ce n\u2019est pas un signe de problème.',
      },
      {
        question: 'Les applications de téléphone mesurent-elles la taille avec précision ?',
        answer:
          'Les applications avec LiDAR (iPhones Pro récents) s\u2019en approchent, mais le mur + le mètre ruban reste la méthode la plus fiable et la moins chère.',
      },
    ],
    relatedLinks: [
      { text: 'Calculateur de Taille', href: '/height-calculator/' },
      { text: 'Taille moyenne par pays', href: '/fr/articles/taille-moyenne-par-pays/' },
    ],
  },
  {
    id: 'predict-child-height',
    slug: 'predire-la-taille-adulte-de-son-enfant',
    title: 'Comment Prédire la Taille Adulte de son Enfant',
    subtitle:
      'La formule utilisée par les pédiatres pour estimer la taille future des enfants — avec un exemple calculé et les limites à connaître.',
    metaDescription:
      'Prédiction de la taille adulte : la formule de la taille cible parentale utilisée par les pédiatres, exemple pas à pas et calculateur gratuit.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 min de lecture',
    badge: 'Guide pour les parents',
    tocTitle: 'Dans cet article',
    intro: {
      lead:
        'La méthode la plus utilisée par les pédiatres pour estimer la taille adulte d\u2019un enfant est la formule de la taille cible parentale : pour les garçons, (taille du père + taille de la mère + 13) ÷ 2 ; pour les filles, (taille du père + taille de la mère − 13) ÷ 2. Le résultat comporte une marge d\u2019environ ±8,5 cm.',
      paragraphs: [
        'Cette estimation fonctionne parce que la génétique explique environ 80 % de la taille finale. Mais c\u2019est un point de départ statistique — pas une prophétie. La nutrition, la santé et le rythme individuel de la puberté déplacent le résultat final dans cette marge.',
        'Ci-dessous : la formule avec un exemple, quand elle fonctionne le mieux et quand se méfier du chiffre.',
      ],
    },
    sections: [
      {
        id: 'formula',
        heading: 'La formule, avec un exemple',
        paragraphs: [
          'Additionnez les tailles des parents en centimètres, ajustez selon le sexe de l\u2019enfant et divisez par 2 :',
        ],
        bulletPoints: [
          'Garçons : (père + mère + 13) ÷ 2',
          'Filles : (père + mère − 13) ÷ 2',
        ],
        callout: {
          type: 'tip',
          text: 'Exemple : père de 178 cm et mère de 165 cm. Garçon : (178 + 165 + 13) ÷ 2 = 178 cm. Fille : (178 + 165 − 13) ÷ 2 = 165 cm. Comptez ±8,5 cm de marge — le garçon se situerait donc entre 169,5 cm et 186,5 cm.',
        },
      },
      {
        id: 'calcule-agora',
        heading: 'Calculez en quelques secondes',
        paragraphs: [
          'Faire le calcul à la main est simple, mais notre calculateur applique la formule automatiquement et affiche la fourchette d\u2019estimation complète :',
        ],
        link: {
          text: '→ Prédire la taille de mon enfant (gratuit)',
          href: '/height-calculator/child-height-predictor/',
        },
      },
      {
        id: 'limites',
        heading: 'Les limites à connaître',
        paragraphs: [
          'La formule suppose des conditions moyennes. Elle perd en précision lorsque :',
        ],
        bulletPoints: [
          'Il y a une grande différence de taille entre les parents (la marge réelle augmente)',
          'L\u2019enfant a souffert de malnutrition, d\u2019une maladie chronique ou d\u2019une puberté très précoce/tardive',
          'Les parents ne sont pas les parents biologiques (la génétique prise en compte est la génétique biologique)',
          'L\u2019enfant est encore bébé — la prédiction devient plus fiable à partir de 2-3 ans',
        ],
        callout: {
          type: 'note',
          text: 'Aucune méthode maison ne remplace l\u2019évaluation de la croissance faite par le pédiatre, qui utilise les courbes de percentile et, si nécessaire, l\u2019âge osseux (radiographie de la main).',
        },
      },
      {
        id: 'o-que-fazer',
        heading: 'Que faire de ce chiffre',
        paragraphs: [
          'Utilisez la prédiction comme repère tranquille — par exemple pour acheter des vêtements d\u2019avance ou satisfaire votre curiosité. Ne l\u2019utilisez pas pour créer des attentes rigides envers l\u2019enfant.',
          'Le vrai signal d\u2019alerte n\u2019est pas la prédiction elle-même, mais la courbe de croissance : si l\u2019enfant chute de percentile de façon persistante, cela mérite une discussion avec le pédiatre.',
        ],
        link: {
          text: '→ Comprendre le percentile de taille',
          href: '/fr/articles/percentile-de-taille-explique/',
        },
      },
    ],
    faqs: [
      {
        question: 'La prédiction est-elle fiable ?',
        answer:
          'C\u2019est la meilleure estimation simple disponible et elle est utilisée par les pédiatres du monde entier — mais avec une marge de ±8,5 cm. Pour une évaluation précise, le pédiatre combine la formule avec la courbe de croissance et l\u2019âge osseux.',
      },
      {
        question: 'Les exercices ou les compléments changent-ils la taille prédite ?',
        answer:
          'Aucune preuve que les exercices, les étirements ou les compléments augmentent la taille au-delà du potentiel génétique. Une bonne nutrition et un sommeil suffisant pendant l\u2019enfance garantissent que l\u2019enfant atteigne ce potentiel — pas qu\u2019il le dépasse.',
      },
      {
        question: 'À quel âge la prédiction devient-elle plus précise ?',
        answer:
          'À partir de 2-3 ans, la courbe de croissance de l\u2019enfant donne déjà de solides indications. À la puberté, la prédiction combinée à l\u2019âge osseux est la plus précise.',
      },
    ],
    medicalDisclaimer:
      'Contenu éducatif, ce n\u2019est pas un avis médical. Les estimations de taille ne remplacent pas l\u2019évaluation d\u2019un pédiatre. Si vous avez des inquiétudes concernant la croissance de votre enfant, consultez un médecin.',
    relatedLinks: [
      { text: 'Prédicteur de taille pour enfant', href: '/height-calculator/child-height-predictor/' },
      { text: 'Percentile de taille expliqué', href: '/fr/articles/percentile-de-taille-explique/' },
    ],
  },
  {
    id: 'height-percentile-explained',
    slug: 'percentile-de-taille-explique',
    title: 'Percentile de Taille : Ce Que Cela Signifie et Quand S\u2019inquiéter',
    subtitle:
      'Comprenez enfin ce que le pédiatre veut dire par « percentile 40 » — et quel est le vrai signal d\u2019alerte sur la courbe de croissance.',
    metaDescription:
      'Percentile de taille expliqué aux parents : ce que cela signifie, comment lire la courbe de croissance (CDC/OMS) et quand consulter le pédiatre.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 min de lecture',
    badge: 'Guide pour les parents',
    tocTitle: 'Dans cet article',
    intro: {
      lead:
        'Être au percentile 40 de taille signifie que 40 % des enfants du même âge et du même sexe sont plus petits et que 60 % sont plus grands. Ce n\u2019est pas une note — c\u2019est une comparaison. Ce qui compte, ce n\u2019est pas le chiffre isolé, mais le fait que l\u2019enfant reste au même percentile au fil du temps.',
      paragraphs: [
        'Beaucoup de parents paniquent en entendant « percentile 15 » comme s\u2019il s\u2019agissait d\u2019un échec. Ce n\u2019en est pas un. Un enfant qui a toujours été au percentile 15 et qui y reste grandit exactement comme il le devrait.',
        'Dans ce guide : comment lire le chiffre, ce que montrent les courbes du CDC et de l\u2019OMS, et la vraie raison de consulter le pédiatre.',
      ],
    },
    sections: [
      {
        id: 'o-que-e',
        heading: 'Ce que le percentile dit vraiment',
        paragraphs: [
          'Le percentile positionne l\u2019enfant par rapport à une population de référence en bonne santé du même âge et du même sexe :',
        ],
        bulletPoints: [
          'Percentile 50 = exactement dans la moyenne (la moitié au-dessus, la moitié en dessous)',
          'Percentile 90 = plus grand que 90 % des enfants du même âge',
          'Percentile 10 = plus grand que seulement 10 % (autrement dit, 90 % sont plus grands)',
        ],
        callout: {
          type: 'tip',
          text: 'Pensez au percentile comme à une « file d\u2019attente » : il indique où se trouve l\u2019enfant dans la file, pas s\u2019il va bien. Aller bien = rester à la même place dans la file au fil des ans.',
        },
      },
      {
        id: 'trajetoria',
        heading: 'La trajectoire compte plus que la position',
        paragraphs: [
          'Les pédiatres regardent le tracé de la courbe, pas le point. Trois schémas :',
        ],
        bulletPoints: [
          'Courbe stable (toujours près du même percentile) → croissance normale, même au percentile 5 ou 95',
          'Chute persistante de percentile (ex. : 75 → 50 → 30) → mérite une évaluation médicale',
          'En dessous du percentile 3 ou au-dessus du 97 → le pédiatre investiguera avec plus d\u2019attention',
        ],
      },
      {
        id: 'curvas',
        heading: 'D\u2019où viennent les courbes : CDC et OMS',
        paragraphs: [
          'Les courbes de référence proviennent de grandes études de population : le CDC 2000 (États-Unis) pour les enfants plus grands et les standards de l\u2019OMS pour les moins de 5 ans. Un calculateur de percentile fiable doit indiquer quelle base de données il utilise — s\u2019il ne le dit pas, méfiez-vous.',
          'Notre calculateur utilise les vraies données du CDC 2000 et de l\u2019OMS, sans approximations :',
        ],
        link: {
          text: '→ Calculer le percentile de taille (gratuit)',
          href: '/height-calculator/boys-percentile/',
        },
      },
      {
        id: 'quando-procurar',
        heading: 'Quand consulter le pédiatre',
        paragraphs: [
          'Utilisez le percentile comme contexte, mais consultez le pédiatre si :',
        ],
        bulletPoints: [
          'Le percentile chute de façon persistante entre les consultations',
          'La croissance semble s\u2019être arrêtée depuis de nombreux mois',
          'L\u2019enfant est en dessous du percentile 3 ou au-dessus du 97 sans suivi',
          'Vous êtes simplement inquiet — l\u2019intuition des parents compte',
        ],
        callout: {
          type: 'warning',
          text: 'Une seule mesure en dit très peu. Le schéma sur plusieurs mesures — avec les dates notées — est ce qui a une valeur médicale.',
        },
      },
    ],
    faqs: [
      {
        question: 'Un percentile bas signifie-t-il que mon enfant sera petit ?',
        answer:
          'Pas nécessairement. Le percentile décrit la position actuelle sur la courbe, et les enfants au percentile 10 peuvent parfaitement terminer l\u2019adolescence dans la fourchette prévue par la génétique familiale. L\u2019important est la stabilité de la courbe.',
      },
      {
        question: 'Quelle est la différence entre les courbes du CDC et de l\u2019OMS ?',
        answer:
          'L\u2019OMS publie des standards pour les moins de 5 ans basés sur des enfants allaités dans des conditions idéales ; le CDC 2000 couvre les 2 à 20 ans avec des données de la population américaine. Les bons calculateurs utilisent la bonne base pour chaque âge.',
      },
      {
        question: 'Mon enfant est passé du percentile 60 au 45. Est-ce grave ?',
        answer:
          'Une petite variation entre deux mesures peut être normale (erreur de mesure, moment de la journée). Le signal d\u2019alerte est la chute persistante sur plusieurs consultations. En cas de doute, montrez les mesures datées au pédiatre.',
      },
    ],
    medicalDisclaimer:
      'Contenu éducatif, ce n\u2019est pas un avis médical. Les courbes de percentile sont des outils de dépistage — seul un professionnel de santé peut évaluer la croissance de votre enfant. En cas de doute, consultez un pédiatre.',
    relatedLinks: [
      { text: 'Percentile des garçons', href: '/height-calculator/boys-percentile/' },
      { text: 'Percentile des filles', href: '/height-calculator/girls-percentile/' },
      { text: 'Prédire la taille adulte de son enfant', href: '/fr/articles/predire-la-taille-adulte-de-son-enfant/' },
    ],
  },
];

export const frArticleUi: ArticleUiStrings = {
  hubSegment: 'articles',
  navLabel: 'Articles',
  homeLabel: 'Accueil',
  hubTitle: 'Articles sur la Taille',
  hubSubtitle: 'Des guides pratiques écrits pour répondre exactement à ce que vous cherchez — sans détour.',
  hubDescription: 'Guides pratiques sur la taille : taille moyenne par pays, comment mesurer sa taille, prédire la taille adulte de son enfant et percentiles de croissance.',
  faqHeading: 'Questions fréquentes',
  readAlsoHeading: 'Lire aussi',
  tocLabel: 'Dans cet article',
};

export const frArticleSet: LocaleArticleSet = {
  ui: frArticleUi,
  articles: frArticles,
};
