import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-us',
  slug: 'altura-media-nos-eua',
  title: 'Altura Média nos EUA: Homens, Mulheres e por Estado',
  subtitle:
    'Os números nacionais, um detalhamento estado por estado que você não encontra em nenhum outro lugar, e como a altura dos americanos mudou em 100 anos.',
  metaDescription:
    'Altura média nos EUA: homens ~1,75 m, mulheres ~1,63 m (NHANES). Tabela estado por estado, estados mais altos e mais baixos, e a tendência de 100 anos.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
  readTime: '6 min de leitura',
  badge: 'Guia de referência',
  tocTitle: 'Neste artigo',
  intro: {
    lead:
      'A altura média nos Estados Unidos é de cerca de 5 pés 9 polegadas (175 cm) para homens e 5 pés 4 polegadas (163 cm) para mulheres, segundo dados medidos do National Health and Nutrition Examination Survey (NHANES).',
    paragraphs: [
      'Esses são os números nacionais — mas os EUA não têm uma altura só. Estados do Meio-Oeste superior, como Montana e Minnesota, medem visivelmente mais do que estados como Havaí e Novo México, e a história de crescimento do país no último século é bem diferente da europeia.',
      'Abaixo: os números nacionais explicados, uma tabela estado por estado compilada de dados de pesquisas, e a tendência de 100 anos que tirou a América do posto de mais alta do mundo para o meio da tabela.',
    ],
  },
  sections: [
    {
      id: 'national-averages',
      heading: 'Os números nacionais: 5\'9" e 5\'4"',
      paragraphs: [
        'Os dados mais confiáveis vêm do NHANES, conduzido pelo CDC — diferente da maioria das pesquisas, ele mede as pessoas pessoalmente em vez de perguntar. As médias medidas mais citadas para adultos americanos são:',
      ],
      bulletPoints: [
        'Homens: cerca de 5 pés 9 pol. (175 cm)',
        'Mulheres: cerca de 5 pés 4 pol. (163 cm)',
      ],
      callout: {
        type: 'tip',
        text: 'As médias medidas ficam cerca de meia polegada a uma polegada abaixo das pesquisas autorrelatadas — a maioria das pessoas arredonda para cima quando perguntada. Confie em dados medidos (como o NHANES) em vez de enquetes.',
      },
    },
    {
      id: 'by-state',
      heading: 'Altura média por estado (tabela)',
      paragraphs: [
        'Dados de altura por estado são mais difíceis de encontrar — nenhuma pesquisa nacional publica altura medida para cada estado. A tabela abaixo compila valores aproximados de dados autorrelatados de pesquisas (como o BRFSS do CDC) e comparações estaduais publicadas. Trate-os como estimativas: números autorrelatados tendem a ser mais altos, e os métodos variam entre as fontes.',
      ],
      table: {
        headers: ['Estado', 'Homens (aprox.)', 'Mulheres (aprox.)'],
        rows: [
          ['Montana', '5\'11"', '5\'6"'],
          ['Minnesota', '5\'11"', '5\'6"'],
          ['Dakota do Norte', '5\'11"', '5\'6"'],
          ['Dakota do Sul', '5\'10"', '5\'5"'],
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
          ['Califórnia', '5\'9"', '5\'4"'],
          ['Flórida', '5\'9"', '5\'4"'],
          ['Nova York', '5\'9"', '5\'4"'],
          ['Mississippi', '5\'8"', '5\'4"'],
          ['Novo México', '5\'8"', '5\'3"'],
          ['Havaí', '5\'8"', '5\'3"'],
        ],
        footnote:
          'Valores aproximados compilados de dados autorrelatados de pesquisas (ex.: BRFSS do CDC) e comparações estaduais publicadas. Alturas autorrelatadas costumam ser maiores que os valores medidos — use como comparação aproximada, não como medidas exatas.',
      },
    },
    {
      id: 'trend',
      heading: 'A tendência de 100 anos: do topo à estagnação',
      paragraphs: [
        'Há um século, os americanos estavam entre os mais altos do mundo. Homens nascidos nos EUA por volta de 1914 tinham média próxima aos números atuais — enquanto grande parte da Europa ficava para trás, limitada por nutrição mais pobre e condições de vida mais duras.',
        'Então as curvas se cruzaram. Entre as décadas de 1950 e 1980, o norte da Europa continuou ganhando altura a cada geração, enquanto o crescimento americano estagnou. Holanda, Dinamarca e os vizinhos ultrapassaram os EUA e nunca mais olharam para trás.',
        'Pesquisadores apontam algumas razões: acesso quase universal a uma boa nutrição infantil na Europa, sistemas de saúde pública fortes e — no caso americano — a crescente desigualdade econômica, o que faz a média nacional esconder grupos de crianças que nunca receberam a nutrição necessária para atingir todo o seu potencial de altura.',
      ],
      callout: {
        type: 'note',
        text: 'A estagnação americana não significa que os americanos estão encolhendo — significa que pararam de crescer enquanto outros países alcançaram e ultrapassaram os EUA.',
      },
    },
    {
      id: 'where-do-you-stand',
      heading: 'E você, onde se encaixa?',
      paragraphs: [
        'Médias nacionais e estaduais são um contexto útil, mas o número que importa é o seu — medido corretamente, de manhã, descalço contra a parede.',
        'Compare sua altura com a média dos EUA ou compare-se lado a lado com outra pessoa:',
      ],
      link: {
        text: '→ Abrir a Calculadora de Altura',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: 'Qual estado tem as pessoas mais altas?',
      answer:
        'Os estados do Meio-Oeste superior aparecem consistentemente como os mais altos nos dados de pesquisas — Montana, Minnesota e Dakota do Norte lideram a maioria dos rankings estaduais, com homens em média por volta de 5\'11". Lembre-se de que os números estaduais são aproximados, compilados de pesquisas autorrelatadas e não de dados medidos.',
    },
    {
      question: 'Os americanos estão ficando mais altos?',
      answer:
        'Na verdade, não — a altura média nos EUA está praticamente estável desde as décadas de 1970–80. Os grandes ganhos americanos aconteceram mais cedo no século XX; desde então, o norte da Europa e outras regiões alcançaram e ultrapassaram os EUA.',
    },
    {
      question: 'Qual é a altura média de um homem nos EUA?',
      answer:
        'Cerca de 5 pés 9 polegadas (175 cm), segundo dados medidos do NHANES, do CDC. Pesquisas autorrelatadas dão números um pouco maiores porque as pessoas tendem a arredondar para cima.',
    },
    {
      question: 'Ter 5\'10" é alto para um homem nos EUA?',
      answer:
        'É um pouco acima da média — mais ou menos entre o 60º e o 65º percentil entre os homens americanos. Nos estados mais altos, como Montana ou Minnesota, fica mais próximo da média, enquanto em estados mais baixos se destaca mais.',
    },
  ],
  relatedLinks: [
    { text: 'Calculadora de Altura', href: '/height-calculator/' },
    { text: 'Comparar Alturas', href: '/compare/' },
    { text: 'Altura média por país', href: '/articles/average-height-by-country/' },
  ],
};
