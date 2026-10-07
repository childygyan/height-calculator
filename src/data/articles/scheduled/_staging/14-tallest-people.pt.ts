import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'tallest-people',
  slug: 'pessoas-mais-altas-do-mundo',
  title: 'As Pessoas Mais Altas do Mundo: Recordes e a Ciência por Trás',
  subtitle:
    'Dos 272 cm verificados de Robert Wadlow aos recordistas vivos de hoje — as histórias reais por trás da altura extrema e o que realmente a causa.',
  metaDescription:
    'Quem é a pessoa mais alta do mundo? Robert Wadlow (272 cm) detém o recorde de todos os tempos; Sultan Kösen (251 cm) é o homem vivo mais alto. Histórias, dados verificados e a ciência do gigantismo.',
  datePublished: '2026-10-20',
  dateModified: '2026-10-20',
  readTime: '6 min de leitura',
  badge: 'Recordes & histórias',
  tocTitle: 'Neste artigo',
  intro: {
    lead:
      'A pessoa mais alta já medida de forma confiável foi Robert Wadlow, um americano que chegou a 272 cm (8 pés e 11 polegadas) antes de morrer em 1940. O homem vivo mais alto é Sultan Kösen, da Turquia, com 251 cm (8 pés, 2,8 polegadas).',
    paragraphs: [
      'A altura extrema nos fascina — mas por trás de cada recorde há uma pessoa real e, geralmente, uma história médica. Diferentemente da estatura alta comum, que é em grande parte herdada, alturas acima de cerca de 230 cm quase sempre resultam de uma condição hormonal chamada gigantismo.',
      'A seguir: os recordes verificados, os detentores vivos dos títulos e uma explicação honesta de por que a altura extrema acontece — contada com o respeito que essas histórias merecem.',
    ],
  },
  sections: [
    {
      id: 'wadlow',
      heading: 'Robert Wadlow: a pessoa mais alta de todos os tempos',
      paragraphs: [
        'Robert Pershing Wadlow nasceu em Alton, Illinois, em 1918 — um bebê de tamanho normal que simplesmente nunca parou de crescer. Aos 8 anos já media 188 cm, mais alto que o pai. Aos 18, media 254 cm, e continuou crescendo até o dia em que morreu.',
        'Sua última altura registrada, medida 18 dias antes de sua morte, foi de 272 cm (8 pés e 11,1 polegadas) — um recorde do Guinness World Records que permanece incontestável há mais de 80 anos. Wadlow era conhecido como o "Gigante Gentil": segundo todos os relatos, era gentil, de fala mansa e lidava com surpreendente bom humor com as multidões que o seguiam.',
        'Mas sua altura teve um custo terrível. Suas pernas e pés exigiam órteses sob medida, e ele tinha pouca sensibilidade neles. Em julho de 1940, uma órtese defeituosa causou uma bolha no tornozelo que infeccionou. Ele morreu dormindo em 15 de julho, com apenas 22 anos. Seu caixão pesava quase meia tonelada e precisou de doze carregadores.',
      ],
      callout: {
        type: 'note',
        text: 'O crescimento de Wadlow foi causado por uma hiperplasia da glândula hipófise, que inundou seu corpo com hormônio do crescimento. Os médicos da época não tinham nenhum tratamento capaz de detê-lo.',
      },
    },
    {
      id: 'living-giants',
      heading: 'As pessoas mais altas vivas hoje',
      paragraphs: [
        'Ninguém vivo chegou perto de Wadlow — mas os atuais recordistas têm histórias notáveis por si sós:',
      ],
      bulletPoints: [
        'Sultan Kösen (Turquia, nascido em 1982) — 251 cm (8 pés e 2,8 polegadas), o homem vivo mais alto. Seu crescimento foi provocado por um tumor na hipófise; após uma cirurgia com bisturi gama em 2010, seu crescimento finalmente parou. Ele não conseguiu terminar os estudos por causa de seu tamanho, mas depois encontrou trabalho e se casou em 2013.',
        'Rumeysa Gelgi (Turquia, nascida em 1997) — 215,16 cm (7 pés e 0,7 polegada), a mulher viva mais alta. Sua altura vem da síndrome de Weaver, uma condição genética rara. Ela é defensora da conscientização sobre deficiência e usa cadeira de rodas na maior parte do tempo.',
      ],
      table: {
        headers: ['Pessoa', 'Altura', 'Status'],
        rows: [
          ['Robert Wadlow (EUA)', '272 cm (8′11″)', 'Recorde de todos os tempos, verificado'],
          ['John Rogan (EUA)', '267 cm (8′9″)', 'Verificado'],
          ['John Carroll (EUA)', '263,5 cm (8′7,7″)', 'Verificado'],
          ['Sultan Kösen (Turquia)', '251 cm (8′2,8″)', 'Homem vivo mais alto'],
          ['Rumeysa Gelgi (Turquia)', '215,2 cm (7′0,7″)', 'Mulher viva mais alta'],
        ],
        footnote:
          'Alturas segundo o Guinness World Records e medições médicas documentadas. Muitas alegações históricas acima de 272 cm nunca foram verificadas de forma independente.',
      },
      callout: {
        type: 'tip',
        text: 'Um conto de advertência: Leonid Stadnyk, da Ucrânia, alegava ter 257 cm, mas se recusou a ser medido de forma independente — e o Guinness cassou seu título em 2008. Só medições verificadas de forma independente contam como recordes.',
      },
    },
    {
      id: 'science',
      heading: 'Por que a altura extrema acontece: a ciência',
      paragraphs: [
        'Ser muito alto — digamos, 195 ou 200 cm — é quase inteiramente genético e perfeitamente saudável. A altura extrema além de cerca de 230 cm é diferente: ela quase sempre indica gigantismo, um raro distúrbio hormonal.',
        'A causa usual é um tumor benigno (adenoma) na glândula hipófise, a glândula do tamanho de uma ervilha na base do cérebro que controla o hormônio do crescimento. Quando ela produz o hormônio em excesso durante a infância — antes de as placas de crescimento dos ossos se fecharem — todo o esqueleto continua crescendo muito além de sua meta genética.',
        'Se o mesmo excesso hormonal começa depois que as placas de crescimento já se fecharam (na vida adulta), a altura não pode mais aumentar. Em vez disso, as mãos, os pés e a mandíbula aumentam — uma condição relacionada chamada acromegalia.',
        'A medicina moderna pode tratar o gigantismo: cirurgia para remover o tumor, medicamentos para bloquear o hormônio do crescimento ou radiação direcionada. O crescimento de Sultan Kösen foi interrompido dessa forma. Um século atrás, Robert Wadlow não tinha essa opção.',
      ],
      callout: {
        type: 'warning',
        text: 'A altura extrema não é simplesmente "ser extra alto" — ela vem com sérios encargos à saúde: danos às articulações, sobrecarga cardiovascular e expectativa de vida muito reduzida. Esses recordes são histórias médicas, não metas.',
      },
    },
    {
      id: 'compare',
      heading: 'Veja como você se compara',
      paragraphs: [
        'Curioso para saber onde você fica ao lado de Wadlow — ou ao lado de uma pessoa média de qualquer país? Nossa ferramenta gratuita de comparação permite que você se alinhe lado a lado com qualquer pessoa:',
      ],
      link: {
        text: '→ Compare sua altura agora',
        href: '/compare/',
      },
    },
  ],
  faqs: [
    {
      question: 'Quem é a pessoa viva mais alta?',
      answer:
        'Sultan Kösen, da Turquia, com 251 cm (8 pés e 2,8 polegadas), reconhecido pelo Guinness World Records como o homem vivo mais alto. A mulher viva mais alta é Rumeysa Gelgi, também da Turquia, com 215,16 cm.',
    },
    {
      question: 'Qual era a altura de Robert Wadlow?',
      answer:
        '272 cm (8 pés e 11,1 polegadas) — medidos 18 dias antes de sua morte em 1940. Continua sendo a altura mais alta documentada de forma confiável na história da humanidade.',
    },
    {
      question: 'O que causa a altura extrema?',
      answer:
        'Quase sempre o gigantismo: um tumor benigno da hipófise que produz hormônio do crescimento em excesso durante a infância, antes de as placas de crescimento dos ossos se fecharem. A estatura alta comum, em contraste, é majoritariamente genética e saudável.',
    },
    {
      question: 'Alguém poderia crescer mais que Robert Wadlow?',
      answer:
        'Teoricamente possível, mas nenhum caso verificado chegou perto em mais de 80 anos. O tratamento moderno costuma interromper o crescimento patológico cedo, e o Guinness exige medição independente rigorosa — por isso alegações históricas não verificadas não contam.',
    },
  ],
  medicalDisclaimer:
    'Conteúdo educacional, não aconselhamento médico. Gigantismo e distúrbios do crescimento são condições médicas — apenas um profissional de saúde pode diagnosticá-los ou tratá-los. Se você tem preocupações com crescimento anormal, consulte um médico.',
  relatedLinks: [
    { text: 'Comparação de altura', href: '/compare/' },
    { text: 'Altura média por país', href: '/articles/average-height-by-country/' },
    { text: 'Preveja a altura adulta do seu filho', href: '/articles/predict-your-childs-adult-height/' },
  ],
};
