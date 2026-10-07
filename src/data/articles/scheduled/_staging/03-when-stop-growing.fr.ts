import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'when-stop-growing',
  slug: 'quand-les-garcons-arretent-de-grandir',
  title: 'À quel âge les garçons arrêtent-ils de grandir ? (Et les filles)',
  subtitle:
    'La vraie biologie de la fin de la croissance en taille, les signes qui montrent que vous grandissez encore, et pourquoi aucun complément ne peut rouvrir les cartilages de croissance fermés.',
  metaDescription:
    'Quand les garçons arrêtent-ils de grandir ? La plupart terminent entre 18 et 21 ans, les filles entre 16 et 18 ans. Apprenez à reconnaître les signes que vous grandissez encore, ce qu’implique un développement tardif et les mythes déboulonnés.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  readTime: '6 min de lecture',
  badge: 'Guide ados & parents',
  tocTitle: 'Dans cet article',
  intro: {
    lead:
      'La plupart des garçons cessent de grandir entre 18 et 21 ans, et la plupart des filles entre 16 et 18 ans. La croissance se termine lorsque les cartilages de conjugaison (cartilages de croissance) des os longs se soudent — et une fois fermés, rien de ce que vous mangez, prenez ou faites ne peut vous rendre plus grand.',
    paragraphs: [
      'Si vous êtes adolescent (ou parent d’adolescent) et que vous vous demandez « ai-je fini de grandir ? », vous posez une question de biologie qui a une réponse claire — mais aussi beaucoup de variations individuelles. Les adolescents au développement tardif peuvent continuer à grandir jusqu’au début de la vingtaine, tandis que ceux qui se sont développés tôt peuvent avoir terminé des années plus tôt.',
      'Ce guide explique la science en langage simple : comment fonctionnent les cartilages de croissance, les signes qui montrent que vous grandissez encore, ce à quoi les adolescents au développement tardif peuvent s’attendre, et la vérité sur les produits qui promettent des centimètres en plus.',
    ],
  },
  sections: [
    {
      id: 'growth-plates',
      heading: 'Comment la croissance s’arrête vraiment : les cartilages de croissance',
      paragraphs: [
        'Les os longs (cuisses, tibias, bras) grandissent à partir de zones de cartilage mou situées près de leurs extrémités, appelées cartilages de conjugaison — les « cartilages de croissance ». Pendant l’enfance et la puberté, ces cartilages fabriquent du nouveau tissu osseux, ce qui allonge l’os. La montée des hormones sexuelles (les œstrogènes chez les filles, la testostérone chez les garçons) finit par transformer ces cartilages en os solide. Cette soudure est la ligne d’arrivée : après elle, l’os ne peut plus s’allonger.',
        'Les filles atteignent généralement ce stade plus tôt, car les œstrogènes augmentent plus tôt et selon un schéma qui ferme les cartilages plus rapidement. Les garçons bénéficient d’une période plus longue, ce qui explique en partie pourquoi les hommes adultes sont en moyenne plus grands que les femmes adultes.',
      ],
      table: {
        headers: ['', 'Poussée de croissance', 'Fermeture habituelle des cartilages'],
        rows: [
          ['Filles', '10–14 ans', '16–18 ans'],
          ['Garçons', '12–16 ans', '18–21 ans'],
        ],
        footnote:
          'Fourchettes typiques. Le calendrier individuel varie beaucoup — ce sont des moyennes de population, pas des délais personnels.',
      },
      callout: {
        type: 'tip',
        text: 'La fermeture est progressive, ce n’est pas un interrupteur qui bascule le jour de votre anniversaire. La croissance ralentit jusqu’à ramper (moins d’1 cm par an) pendant un an ou deux avant de s’arrêter complètement.',
      },
    },
    {
      id: 'signs-still-growing',
      heading: 'Les signes que vous grandissez encore',
      paragraphs: [
        'Vous vous demandez si vous (ou votre adolescent) avez encore de la croissance devant vous ? Surveillez ces indices — plus il y en a qui s’appliquent à vous, plus il est probable que la croissance soit encore en cours :',
      ],
      bulletPoints: [
        'Votre pointure a augmenté au cours de la dernière année (les pieds grandissent souvent juste avant une poussée de croissance)',
        'Vous êtes plus grand qu’il y a 6 à 12 mois (mesurez-vous — la mémoire est trompeuse)',
        'La puberté progresse encore clairement (la voix mue encore, la poussée de croissance est en cours)',
        'Vous êtes au milieu, et non après, votre année de croissance la plus rapide',
        'Un médecin a mentionné que votre « âge osseux » est inférieur à votre âge réel',
      ],
      callout: {
        type: 'tip',
        text: 'Mesurez votre taille tous les 3 mois, toujours le matin, et notez-la. Une ligne plate sur 12 mois est le signe le plus clair, à la maison, que la croissance est terminée.',
      },
    },
    {
      id: 'late-bloomers',
      heading: 'Développement tardif : grandir jusqu’à la vingtaine',
      paragraphs: [
        'Certains adolescents suivent simplement une horloge plus lente — les médecins parlent de retard constitutionnel de croissance et de puberté. C’est souvent familial : si un parent a connu un développement tardif, l’enfant suivra probablement le même schéma. Les adolescents concernés commencent leur poussée de croissance des années après leurs camarades, continuent de grandir jusqu’à la fin de l’adolescence ou le début de la vingtaine, et finissent généralement dans leur fourchette de taille génétique normale.',
        'Avoir un développement tardif n’est pas un trouble et ne signifie pas que vous finirez petit — cela signifie que votre calendrier est décalé. La frustration est réelle, mais la biologie se régule presque toujours d’elle-même.',
      ],
      callout: {
        type: 'note',
        text: 'Être en retard, c’est une chose ; ne pas avoir commencé, c’en est une autre. S’il n’y a aucun signe de puberté à 14 ans chez les filles ou à 15 ans chez les garçons, ou si la croissance s’est complètement arrêtée depuis plus d’un an pendant les années où la poussée est attendue, consultez un médecin plutôt que de simplement attendre.',
      },
    },
    {
      id: 'myths',
      heading: 'Idées reçues : ce qui ne peut pas vous rendre plus grand',
      paragraphs: [
        'Internet vend beaucoup d’espoir aux adolescents préoccupés par leur taille. Voici la version honnête :',
      ],
      bulletPoints: [
        'Les pilules, gommes et compléments « grandir plus » : aucune preuve crédible qu’ils fonctionnent. Beaucoup ne sont que des vitamines à prix gonflé ; certains contiennent des hormones non déclarées, ce qui est dangereux.',
        'La suspension, les étirements et les exercices d’inversion : ils décompressent temporairement la colonne vertébrale (comme la différence entre le matin et le soir) mais n’allongent pas les os.',
        'Les chaussures spéciales et les semelles : elles vous font paraître plus grand quand vous les portez — elles ne changent rien à votre taille réelle.',
        'Les programmes et e-books « grandir plus » : s’ils promettent des centimètres après 20 ans, c’est une arnaque. La biologie ne négocie pas.',
      ],
      callout: {
        type: 'warning',
        text: 'Ce qui a vraiment soutenu votre croissance s’est joué pendant les années de croissance : assez de sommeil (l’hormone de croissance est libérée principalement pendant le sommeil profond), une bonne alimentation, de l’exercice régulier, et éviter le tabac et l’alcool excessif à l’adolescence. Rien de tout cela n’ajoute de la taille une fois les cartilages fermés — mais cela vous a permis d’atteindre tout votre potentiel pendant qu’ils étaient ouverts.',
      },
      link: {
        text: '→ Prédire votre taille adulte (gratuit)',
        href: '/height-calculator/child-height-predictor/',
      },
    },
  ],
  faqs: [
    {
      question: 'Peut-on grandir après 18 ans ?',
      answer:
        'Possiblement, si vous êtes un garçon — beaucoup continuent de grandir lentement jusqu’à 20 ou 21 ans. La plupart des filles ont terminé à 18 ans. Une fois les cartilages de croissance soudés, aucune augmentation de taille n’est plus possible, même si une meilleure posture peut vous faire paraître un ou deux centimètres plus grand.',
    },
    {
      question: 'Les adolescents au développement tardif finissent-ils plus grands ?',
      answer:
        'Pas forcément plus grands — ils atteignent leur fourchette génétique, simplement selon un calendrier décalé. Ils peuvent sembler « rattraper puis dépasser » leurs camarades pendant un temps, parce que leurs camarades ont fini de grandir plus tôt alors qu’ils sont encore en pleine poussée.',
    },
    {
      question: 'Comment savoir si mes cartilages de croissance sont fermés ?',
      answer:
        'La seule méthode définitive est une radiographie de la main/du poignet pour évaluer l’« âge osseux », interprétée par un médecin. Les indices à la maison que les cartilages sont probablement fermés : aucun changement de taille mesurable depuis 12 mois ou plus, et une puberté terminée depuis plus de deux ans.',
    },
    {
      question: 'Les compléments, la suspension ou les étirements peuvent-ils me rendre plus grand ?',
      answer:
        'Non. Aucune preuve crédible ne montre qu’un complément, un exercice ou un appareil allonge les os une fois les cartilages de croissance fermés. Gardez votre argent — et méfiez-vous de tout produit qui promet le contraire, surtout ceux qui ciblent les adolescents.',
    },
  ],
  medicalDisclaimer:
    'Contenu éducatif, pas un avis médical. Les préoccupations liées à la croissance — en particulier une puberté retardée ou un arrêt soudain de la croissance — méritent une évaluation médicale, idéalement par un endocrinologue pédiatrique. Ne prenez jamais d’hormones ni de produits « de croissance » sans supervision médicale.',
  relatedLinks: [
    { text: 'Prédicteur de taille de l’enfant', href: '/height-calculator/child-height-predictor/' },
    { text: 'Prédire la taille adulte de votre enfant', href: '/articles/predict-your-childs-adult-height/' },
    { text: 'Le percentile de taille expliqué', href: '/articles/height-percentile-explained/' },
  ],
};
