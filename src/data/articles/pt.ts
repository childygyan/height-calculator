import type { ArticleData } from './types';

export const ptArticles: ArticleData[] = [
  {
    slug: 'altura-media-por-pais',
    title: 'Altura Média por País: Tabela Completa 2026',
    subtitle:
      'Descubra a altura média de homens e mulheres em 15 países — incluindo o Brasil — e entenda por que ela varia tanto ao redor do mundo.',
    metaDescription:
      'Tabela de altura média por país 2026: Brasil, Holanda, EUA, Portugal e mais. Veja onde o Brasil se posiciona e o que explica as diferenças.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 min de leitura',
    badge: 'Guia de referência',
    tocTitle: 'Neste artigo',
    intro: {
      lead:
        'A altura média no Brasil é de aproximadamente 175,7 cm para homens e 162,9 cm para mulheres. O país mais alto do mundo é a Holanda, com 183,8 cm (homens) e 170,4 cm (mulheres).',
      paragraphs: [
        'A altura média varia drasticamente entre países — mais de 20 cm separam as populações mais altas das mais baixas. Genética, nutrição na infância, saúde pública e até o nível socioeconômico moldam esses números ao longo de gerações.',
        'Abaixo você encontra uma tabela com os valores mais citados em estudos publicados, além do contexto que os números sozinhos não mostram: por que o Brasil está onde está, e o que realmente significa estar "acima" ou "abaixo" da média.',
      ],
    },
    sections: [
      {
        id: 'tabela',
        heading: 'Tabela: altura média por país',
        paragraphs: [
          'Os valores abaixo são médias aproximadas para adultos, compiladas de estudos populacionais publicados. Pequenas variações entre fontes são normais — altura média muda conforme o ano do estudo, a faixa etária medida e a metodologia.',
        ],
        table: {
          headers: ['País', 'Homens (cm)', 'Mulheres (cm)'],
          rows: [
            ['Holanda', '183,8', '170,4'],
            ['Montenegro', '183,3', '169,6'],
            ['Dinamarca', '182,6', '169,1'],
            ['Alemanha', '180,3', '166,6'],
            ['França', '178,6', '164,5'],
            ['Reino Unido', '177,5', '164,4'],
            ['EUA', '177,1', '163,5'],
            ['Itália', '176,5', '165,0'],
            ['Espanha', '176,1', '163,0'],
            ['Brasil', '175,7', '162,9'],
            ['China', '175,7', '163,5'],
            ['Argentina', '174,5', '161,0'],
            ['Portugal', '173,9', '163,0'],
            ['Coreia do Sul', '174,9', '162,3'],
            ['Japão', '172,1', '158,5'],
            ['México', '169,5', '160,8'],
            ['Índia', '166,3', '155,5'],
          ],
          footnote:
            'Valores aproximados. Fontes variam em ano, faixa etária e método de medição — use como referência, não como medida exata.',
        },
      },
      {
        id: 'brasil-contexto',
        heading: 'Onde o Brasil se posiciona',
        paragraphs: [
          'O Brasil fica bem no meio do ranking mundial — acima da média global, mas abaixo dos países do norte da Europa. Dentro da América Latina, o Brasil está entre os mais altos, à frente de México, Peru e Bolívia.',
          'Um detalhe importante: a altura média brasileira vem subindo há décadas, acompanhando melhorias em nutrição e saúde pública. Cada nova geração mede, em média, um pouco mais que a anterior — tendência observada em quase todos os países em desenvolvimento.',
        ],
      },
      {
        id: 'por-que-varia',
        heading: 'Por que a altura média varia tanto?',
        paragraphs: [
          'Três fatores explicam quase toda a diferença entre países:',
        ],
        bulletPoints: [
          'Genética (cerca de 80% da variação individual): populações com histórico de seleção para estatura maior — como holandeses e montenegrinos — mantêm essa característica por gerações.',
          'Nutrição na infância: proteína, cálcio e calorias adequadas nos primeiros anos de vida são decisivos. Países que eliminaram a desnutrição infantil viram a altura média subir em uma geração.',
          'Saúde pública: saneamento, vacinação e acesso a pediatras reduzem doenças que limitam o crescimento.',
        ],
        callout: {
          type: 'tip',
          text: 'Altura é definida principalmente até o fim da adolescência. Depois que as placas de crescimento se fecham (por volta dos 18–20 anos), nenhum exercício ou suplemento aumenta a estatura de forma comprovada.',
        },
      },
      {
        id: 'compare-se',
        heading: 'Como se comparar com a média',
        paragraphs: [
          'Saber a média do seu país é curioso — mas o que realmente importa para saúde é como você se compara à sua própria curva de crescimento ao longo do tempo, não a um número único.',
          'Quer ver onde você se encaixa? Use nossa calculadora gratuita para converter e comparar sua altura:',
        ],
        link: {
          text: '→ Abrir a Calculadora de Altura',
          href: '/height-calculator/',
        },
      },
    ],
    faqs: [
      {
        question: 'Qual é o país com a maior altura média do mundo?',
        answer:
          'A Holanda lidera: cerca de 183,8 cm para homens e 170,4 cm para mulheres, segundo os estudos populacionais mais citados.',
      },
      {
        question: 'A altura média do Brasil está aumentando?',
        answer:
          'Sim. Assim como na maioria dos países em desenvolvimento, melhorias em nutrição e saúde pública vêm elevando a média brasileira a cada geração.',
      },
      {
        question: '175 cm é considerado alto no Brasil?',
        answer:
          'Para homens, 175 cm está praticamente na média nacional (175,7 cm). Para mulheres, seria bem acima da média feminina (162,9 cm) — contexto de sexo importa tanto quanto o de país.',
      },
      {
        question: 'Por que os holandeses são tão altos?',
        answer:
          'Combinação de genética, excelente nutrição infantil e um dos melhores sistemas de saúde pública do mundo, mantidos por gerações. Não há um único "segredo".',
      },
    ],
    relatedLinks: [
      { text: 'Calculadora de Altura', href: '/height-calculator/' },
      { text: 'Comparador de Altura', href: '/compare/' },
      { text: 'Como medir sua altura corretamente', href: '/pt/artigos/como-medir-altura-corretamente/' },
    ],
  },
  {
    slug: 'como-medir-altura-corretamente',
    title: 'Como Medir Sua Altura Corretamente em Casa',
    subtitle:
      'Passo a passo simples para medir sua altura com precisão usando só uma parede, um livro e uma fita métrica — sem erros comuns.',
    metaDescription:
      'Aprenda a medir sua altura corretamente em casa: passo a passo, erros comuns que roubam centímetros e a melhor hora do dia para se medir.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 min de leitura',
    badge: 'Passo a passo',
    tocTitle: 'Neste artigo',
    intro: {
      lead:
        'Para medir sua altura corretamente: fique descalço contra uma parede lisa, calcanhares juntos, olhe para frente, marque o topo da cabeça com um livro e meça do chão até a marca. Meça de manhã para o valor mais alto e consistente.',
      paragraphs: [
        'Parece simples, mas a maioria das pessoas mede errado — e o erro chega a 2 ou 3 centímetros. Postura relaxada, tapete fofo embaixo dos pés e medir à noite são os culpados mais comuns.',
        'Siga o passo a passo abaixo e sua medida vai bater com a de um consultório médico.',
      ],
    },
    sections: [
      {
        id: 'passo-a-passo',
        heading: 'Passo a passo',
        paragraphs: [],
        steps: [
          {
            number: 1,
            title: 'Escolha o lugar certo',
            description:
              'Uma parede lisa e um chão plano e duro (cerâmica, madeira ou cimento). Evite tapetes — eles afundam e roubam até 1 cm da medida.',
          },
          {
            number: 2,
            title: 'Tire os sapatos e acessórios',
            description:
              'Descalço, sem meias grossas. Tire presilhas, bonés ou coques altos que alterem o topo da cabeça.',
          },
          {
            number: 3,
            title: 'Posicione o corpo',
            description:
              'Calcanhares juntos encostados na parede, costas e ombros retos mas relaxados, braços ao lado do corpo. Olhe para frente, com o queixo paralelo ao chão.',
          },
          {
            number: 4,
            title: 'Marque o topo da cabeça',
            description:
              'Peça ajuda a alguém ou use um livro de capa dura: encoste-o no topo da cabeça formando um ângulo de 90° com a parede e faça uma marca leve com lápis.',
          },
          {
            number: 5,
            title: 'Meça do chão até a marca',
            description:
              'Use fita métrica ou trena, mantendo-a bem esticada e vertical. Anote em centímetros com uma casa decimal.',
          },
        ],
      },
      {
        id: 'melhor-horario',
        heading: 'A melhor hora para se medir',
        paragraphs: [
          'Meça sempre de manhã, logo ao acordar. Durante o dia, a gravidade comprime os discos da coluna e você "encolhe" de 1 a 2 cm até a noite. Para acompanhar sua altura ao longo do tempo, meça no mesmo horário — de preferência pela manhã.',
        ],
        callout: {
          type: 'tip',
          text: 'Vai comparar medidas antigas? Verifique se foram feitas no mesmo período do dia. Uma diferença de 1,5 cm entre manhã e noite é totalmente normal.',
        },
      },
      {
        id: 'erros-comuns',
        heading: 'Erros comuns que alteram o resultado',
        paragraphs: [],
        bulletPoints: [
          'Medir sobre tapete ou carpete (afunda 0,5–1 cm)',
          'Curvar os ombros ou inclinar a cabeça para baixo',
          'Usar sapatos ou meias grossas',
          'Marcar a testa em vez do ponto mais alto da cabeça',
          'Fita métrica frouxa ou inclinada',
          'Medir à noite e comparar com medida da manhã',
        ],
      },
      {
        id: 'criancas',
        heading: 'Medindo crianças',
        paragraphs: [
          'Para crianças menores de 2 anos, a medida correta é feita deitada (comprimento), não em pé. A partir dos 2 anos, use o mesmo passo a passo acima — e registre a data de cada medida para acompanhar a curva de crescimento.',
          'Se a curva da criança cair de percentil de forma consistente, vale conversar com o pediatra:',
        ],
        link: {
          text: '→ Entenda o percentil de altura',
          href: '/pt/artigos/percentil-de-altura-explicado/',
        },
      },
    ],
    faqs: [
      {
        question: 'Posso me medir sozinho?',
        answer:
          'Sim, usando um livro encostado na parede como marcador. A precisão é um pouco menor do que com ajuda, mas seguindo o passo a passo o erro fica abaixo de 0,5 cm.',
      },
      {
        question: 'Por que minha altura muda durante o dia?',
        answer:
          'Os discos intervertebrais se comprimem com a gravidade ao longo do dia. É normal "perder" 1–2 cm entre a manhã e a noite — não é sinal de problema.',
      },
      {
        question: 'Aplicativos de celular medem altura com precisão?',
        answer:
          'Aplicativos com LiDAR (iPhones Pro recentes) chegam perto, mas a parede + fita métrica continua sendo o método mais confiável e barato.',
      },
    ],
    relatedLinks: [
      { text: 'Calculadora de Altura', href: '/height-calculator/' },
      { text: 'Altura média por país', href: '/pt/artigos/altura-media-por-pais/' },
    ],
  },
  {
    slug: 'prever-altura-adulta-filho',
    title: 'Como Prever a Altura Adulta do Seu Filho',
    subtitle:
      'A fórmula usada por pediatras para estimar a altura futura das crianças — com exemplo calculado e os limites que você precisa conhecer.',
    metaDescription:
      'Previsão de altura adulta: a fórmula da altura-alvo parental usada por pediatras, exemplo passo a passo e calculadora gratuita.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 min de leitura',
    badge: 'Guia para pais',
    tocTitle: 'Neste artigo',
    intro: {
      lead:
        'A forma mais usada por pediatras para estimar a altura adulta de uma criança é a fórmula da altura-alvo parental: para meninos, (altura do pai + altura da mãe + 13) ÷ 2; para meninas, (altura do pai + altura da mãe − 13) ÷ 2. O resultado tem margem de cerca de ±8,5 cm.',
      paragraphs: [
        'Essa estimativa funciona porque a genética responde por cerca de 80% da altura final. Mas ela é um ponto de partida estatístico — não uma profecia. Nutrição, saúde e o ritmo individual da puberdade movem o resultado final dentro daquela margem.',
        'Abaixo: a fórmula com exemplo, quando ela funciona melhor e quando desconfiar do número.',
      ],
    },
    sections: [
      {
        id: 'formula',
        heading: 'A fórmula, com exemplo',
        paragraphs: [
          'Some as alturas dos pais em centímetros, ajuste conforme o sexo da criança e divida por 2:',
        ],
        bulletPoints: [
          'Meninos: (pai + mãe + 13) ÷ 2',
          'Meninas: (pai + mãe − 13) ÷ 2',
        ],
        callout: {
          type: 'tip',
          text: 'Exemplo: pai com 178 cm e mãe com 165 cm. Menino: (178 + 165 + 13) ÷ 2 = 178 cm. Menina: (178 + 165 − 13) ÷ 2 = 165 cm. Considere ±8,5 cm de margem — ou seja, o menino ficaria entre 169,5 cm e 186,5 cm.',
        },
      },
      {
        id: 'calcule-agora',
        heading: 'Calcule em segundos',
        paragraphs: [
          'Fazer a conta na mão é simples, mas nossa calculadora aplica a fórmula automaticamente e mostra a faixa de estimativa completa:',
        ],
        link: {
          text: '→ Prever altura do meu filho (grátis)',
          href: '/height-calculator/child-height-predictor/',
        },
      },
      {
        id: 'limites',
        heading: 'Limites que você precisa conhecer',
        paragraphs: [
          'A fórmula assume condições médias. Ela perde precisão quando:',
        ],
        bulletPoints: [
          'Há grande diferença de altura entre os pais (a margem real cresce)',
          'A criança teve desnutrição, doença crônica ou puberdade muito precoce/tardia',
          'Os pais não são os pais biológicos (a genética considerada é a biológica)',
          'A criança ainda é bebê — a previsão fica mais confiável a partir dos 2–3 anos',
        ],
        callout: {
          type: 'note',
          text: 'Nenhum método caseiro substitui a avaliação do crescimento feita pelo pediatra, que usa curvas de percentil e, se necessário, a idade óssea (raio-X da mão).',
        },
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer com o número',
        paragraphs: [
          'Use a previsão como referência tranquila — por exemplo, para comprar roupas com antecedência ou saciar a curiosidade. Não use para criar expectativas rígidas sobre a criança.',
          'O sinal de alerta real não é a previsão em si, mas a curva de crescimento: se a criança vem caindo de percentil de forma consistente, isso sim merece uma conversa com o pediatra.',
        ],
        link: {
          text: '→ Entenda o percentil de altura',
          href: '/pt/artigos/percentil-de-altura-explicado/',
        },
      },
    ],
    faqs: [
      {
        question: 'A previsão é confiável?',
        answer:
          'É a melhor estimativa simples disponível e é usada por pediatras no mundo todo — mas com margem de ±8,5 cm. Para uma avaliação precisa, o pediatra combina a fórmula com a curva de crescimento e a idade óssea.',
      },
      {
        question: 'Exercícios ou suplementos mudam a altura prevista?',
        answer:
          'Não há evidência de que exercícios, alongamentos ou suplementos aumentem a altura além do potencial genético. Boa nutrição e sono adequado na infância garantem que a criança atinja esse potencial — não o ultrapasse.',
      },
      {
        question: 'Com que idade a previsão fica mais precisa?',
        answer:
          'A partir dos 2–3 anos a curva de crescimento da criança já dá pistas sólidas. Na puberdade, a previsão combinada com a idade óssea é a mais precisa.',
      },
    ],
    medicalDisclaimer:
      'Conteúdo educacional, não é orientação médica. Estimativas de altura não substituem a avaliação de um pediatra. Se você tem preocupações sobre o crescimento do seu filho, consulte um médico.',
    relatedLinks: [
      { text: 'Previsor de altura infantil', href: '/height-calculator/child-height-predictor/' },
      { text: 'Percentil de altura explicado', href: '/pt/artigos/percentil-de-altura-explicado/' },
    ],
  },
  {
    slug: 'percentil-de-altura-explicado',
    title: 'Percentil de Altura: O Que Significa e Quando Se Preocupar',
    subtitle:
      'Entenda de uma vez o que o pediatra quer dizer com "percentil 40" — e qual é o verdadeiro sinal de alerta na curva de crescimento.',
    metaDescription:
      'Percentil de altura explicado para pais: o que significa, como ler a curva de crescimento (CDC/OMS) e quando procurar o pediatra.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 min de leitura',
    badge: 'Guia para pais',
    tocTitle: 'Neste artigo',
    intro: {
      lead:
        'Estar no percentil 40 de altura significa que 40% das crianças da mesma idade e sexo são mais baixas e 60% são mais altas. Não é uma nota — é uma comparação. O que importa não é o número isolado, e sim se a criança se mantém no mesmo percentil ao longo do tempo.',
      paragraphs: [
        'Muitos pais se assustam ao ouvir "percentil 15" como se fosse uma reprovação. Não é. Uma criança que sempre esteve no percentil 15 e continua nele está crescendo exatamente como deveria.',
        'Neste guia: como ler o número, o que as curvas do CDC e da OMS mostram e qual é o verdadeiro motivo para procurar o pediatra.',
      ],
    },
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que o percentil realmente diz',
        paragraphs: [
          'O percentil posiciona a criança em relação a uma população de referência saudável da mesma idade e sexo:',
        ],
        bulletPoints: [
          'Percentil 50 = exatamente na média (metade acima, metade abaixo)',
          'Percentil 90 = mais alta que 90% das crianças da mesma idade',
          'Percentil 10 = mais alta que apenas 10% (ou seja, 90% são mais altas)',
        ],
        callout: {
          type: 'tip',
          text: 'Pense no percentil como uma "fila": ele diz onde a criança está na fila, não se ela está indo bem. Ir bem = continuar na mesma posição da fila ao longo dos anos.',
        },
      },
      {
        id: 'trajetoria',
        heading: 'Trajetória importa mais que posição',
        paragraphs: [
          'Pediatras olham para o desenho da curva, não para o ponto. Três padrões:',
        ],
        bulletPoints: [
          'Curva estável (sempre perto do mesmo percentil) → crescimento normal, mesmo no percentil 5 ou 95',
          'Queda consistente de percentil (ex.: 75 → 50 → 30) → merece avaliação médica',
          'Abaixo do percentil 3 ou acima do 97 → o pediatra vai investigar com mais atenção',
        ],
      },
      {
        id: 'curvas',
        heading: 'De onde vêm as curvas: CDC e OMS',
        paragraphs: [
          'As curvas de referência vêm de grandes estudos populacionais: o CDC 2000 (EUA) para crianças maiores e os padrões da OMS para menores de 5 anos. Uma calculadora de percentil confiável deve dizer qual base de dados ela usa — se não diz, desconfie.',
          'Nossa calculadora usa os dados reais do CDC 2000 e da OMS, sem aproximações:',
        ],
        link: {
          text: '→ Calcular o percentil de altura (grátis)',
          href: '/height-calculator/boys-percentile/',
        },
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar o pediatra',
        paragraphs: [
          'Use o percentil como contexto, mas procure o pediatra se:',
        ],
        bulletPoints: [
          'O percentil cai de forma consistente entre consultas',
          'O crescimento parece ter parado por muitos meses',
          'A criança está abaixo do percentil 3 ou acima do 97 sem acompanhamento',
          'Você simplesmente está preocupado — intuição de pai/mãe conta',
        ],
        callout: {
          type: 'warning',
          text: 'Uma única medida diz muito pouco. O padrão ao longo de várias medidas — com datas registradas — é o que tem valor médico.',
        },
      },
    ],
    faqs: [
      {
        question: 'Percentil baixo significa que meu filho será baixo?',
        answer:
          'Não necessariamente. O percentil descreve a posição atual na curva, e crianças no percentil 10 podem perfeitamente terminar a adolescência dentro da faixa prevista pela genética da família. O importante é a estabilidade da curva.',
      },
      {
        question: 'Qual a diferença entre as curvas do CDC e da OMS?',
        answer:
          'A OMS publica padrões para menores de 5 anos baseados em crianças amamentadas em condições ideais; o CDC 2000 cobre dos 2 aos 20 anos com dados da população americana. Boas calculadoras usam a base certa para cada idade.',
      },
      {
        question: 'Meu filho caiu do percentil 60 para o 45. É grave?',
        answer:
          'Uma variação pequena entre duas medidas pode ser normal (erro de medição, horário do dia). O sinal de alerta é a queda consistente ao longo de várias consultas. Na dúvida, mostre as medidas datadas ao pediatra.',
      },
    ],
    medicalDisclaimer:
      'Conteúdo educacional, não é orientação médica. Curvas de percentil são ferramentas de triagem — apenas um profissional de saúde pode avaliar o crescimento do seu filho. Em caso de dúvida, consulte um pediatra.',
    relatedLinks: [
      { text: 'Percentil de meninos', href: '/height-calculator/boys-percentile/' },
      { text: 'Percentil de meninas', href: '/height-calculator/girls-percentile/' },
      { text: 'Prever a altura adulta do seu filho', href: '/pt/artigos/prever-altura-adulta-filho/' },
    ],
  },
];
