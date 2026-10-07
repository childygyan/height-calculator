import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-by-age',
  slug: 'altura-media-por-idade-tabela',
  title: 'Altura Média por Idade (0–20 Anos): A Tabela Completa',
  subtitle:
    'A altura média para cada idade do nascimento aos 20 anos, para meninos e meninas — além dos marcos de crescimento que explicam os números.',
  metaDescription:
    'Tabela de altura média por idade (0–20) para meninos e meninas, baseada nos dados de crescimento CDC/OMS. Veja o que é normal em cada idade e quando consultar o percentil.',
  datePublished: '2026-10-07',
  dateModified: '2026-10-07',
  readTime: '7 min de leitura',
  badge: 'Guia de referência',
  tocTitle: 'Neste artigo',
  intro: {
    lead:
      'Aos 10 anos, a média é de cerca de 140 cm tanto para meninos quanto para meninas; aos 18, as médias ficam em torno de 179 cm para os rapazes e 166 cm para as moças. As meninas ultrapassam os meninos brevemente por volta dos 11–12 anos, e depois os meninos assumem a liderança durante o estirão mais tardio da puberdade.',
    paragraphs: [
      'Se você está verificando se seu filho está "normal para a idade", esta tabela é o seu ponto de partida. Os valores abaixo são referências arredondadas do 50º percentil, extraídas das curvas de crescimento CDC 2000 (idades 2–20) e dos padrões de crescimento infantil da OMS (menores de 2 anos) — as mesmas referências usadas pelos pediatras.',
      'Uma observação importante antes dos números: média não é o mesmo que ideal. Crianças saudáveis variam muito em torno desses valores, e uma única medição importa muito menos do que o padrão ao longo do tempo.',
    ],
  },
  sections: [
    {
      id: 'tabela',
      heading: 'A tabela completa: altura média por idade',
      paragraphs: [
        'Encontre a idade e leia ao lado. Os valores são referências aproximadas do 50º percentil, em centímetros.',
      ],
      table: {
        headers: ['Idade', 'Meninos (cm)', 'Meninas (cm)'],
        rows: [
          ['Nascimento', '50', '49'],
          ['1 ano', '76', '75'],
          ['2 anos', '88', '87'],
          ['3 anos', '96', '95'],
          ['4 anos', '103', '102'],
          ['5 anos', '110', '109'],
          ['6 anos', '116', '115'],
          ['7 anos', '122', '121'],
          ['8 anos', '128', '128'],
          ['9 anos', '134', '134'],
          ['10 anos', '140', '140'],
          ['11 anos', '145', '146'],
          ['12 anos', '151', '152'],
          ['13 anos', '158', '158'],
          ['14 anos', '166', '162'],
          ['15 anos', '172', '164'],
          ['16 anos', '176', '165'],
          ['17 anos', '178', '166'],
          ['18 anos', '179', '166'],
          ['19 anos', '179', '166'],
          ['20 anos', '179', '166'],
        ],
        footnote:
          'Valores de referência arredondados do 50º percentil, baseados nas curvas de crescimento CDC 2000 (idades 2–20) e nos padrões de crescimento infantil da OMS (menores de 2 anos). Crianças saudáveis variam muito em torno desses números.',
      },
      callout: {
        type: 'tip',
        text: 'Conversões rápidas: 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
      },
    },
    {
      id: 'marcos',
      heading: 'Principais marcos de crescimento que a tabela revela',
      paragraphs: [
        'Os números brutos escondem alguns padrões que vale a pena conhecer:',
      ],
      bulletPoints: [
        'O crescimento mais rápido acontece no primeiro ano: os bebês ganham cerca de 25 cm, mais do que em qualquer outro ano da vida.',
        'As meninas entram no estirão da puberdade primeiro — por isso são um pouco mais altas que os meninos por volta dos 11–12 anos.',
        'Os meninos começam o estirão cerca de dois anos depois, mas crescem por mais tempo — por isso a média masculina termina cerca de 13 cm acima.',
        'As placas de crescimento costumam se fechar por volta dos 15–17 anos nas meninas e dos 17–19 nos meninos; depois disso, o ganho significativo de altura termina.',
        'Entre 8 e 10 anos, meninos e meninas têm praticamente a mesma altura média — as diferenças entre os sexos antes da puberdade são mínimas.',
      ],
    },
    {
      id: 'lendo-numeros',
      heading: 'Como interpretar esses números',
      paragraphs: [
        'A tabela mostra o meio do pelotão — metade das crianças está acima, metade abaixo. Estar no 25º ou no 75º percentil é tão normal quanto estar no 50º, desde que a criança sempre tenha acompanhado essa mesma linha.',
        'O que realmente importa para os pediatras não é nenhum número isolado desta tabela, mas a curva da própria criança: um percentil estável ao longo dos anos significa crescimento saudável, mesmo que esse percentil seja o 10º ou o 90º.',
        'Para ver exatamente onde uma criança se posiciona nas curvas oficiais, use as calculadoras de percentil:',
      ],
      link: {
        text: '→ Calculadora de percentil de altura para meninos',
        href: '/height-calculator/boys-percentile/',
      },
    },
    {
      id: 'quando-verificar',
      heading: 'Quando os números merecem um olhar mais atento',
      paragraphs: [
        'Não se preocupe com uma única medição. Preste atenção ao padrão:',
      ],
      bulletPoints: [
        'O percentil cai de forma constante entre as consultas (por exemplo, 60º → 40º → 25º)',
        'O crescimento parece estagnar por muitos meses fora dos períodos normais de desaceleração',
        'A criança está abaixo do 3º ou acima do 97º percentil sem acompanhamento médico',
      ],
      callout: {
        type: 'note',
        text: 'Se algum dos itens acima soa familiar, leve as medições com data ao pediatra — o padrão ao longo do tempo é o que tem valor médico, não nenhum número isolado.',
      },
      link: {
        text: '→ Tabela de altura para meninas (baseada em CDC/OMS)',
        href: '/height-calculator/girls-chart/',
      },
    },
  ],
  faqs: [
    {
      question: 'Ter 1,73 m é alto para uma criança de 13 anos?',
      answer:
        'Sim — bem acima da média. Um menino de 13 anos tem em média cerca de 158 cm, então 173 cm fica em torno do 90º percentil ou acima. Para uma menina de 13 anos (média também de ~158 cm nessa idade), é igualmente acima da média. Lembre-se de que quem amadurece cedo pode ser alto aos 13 e terminar na média na vida adulta, quando os colegas alcançam.',
    },
    {
      question: 'Por que os meninos ficam mais altos que as meninas depois da puberdade?',
      answer:
        'A testosterona provoca nos meninos um estirão mais tardio e mais longo: ele começa cerca de dois anos depois do estirão das meninas e dura mais tempo, e as placas de crescimento dos meninos se fecham mais tarde (por volta dos 17–19 anos, contra 15–17 nas meninas). Antes da puberdade, os sexos têm praticamente a mesma altura média.',
    },
    {
      question: 'Meu filho está abaixo da média — devo me preocupar?',
      answer:
        'Não por causa de uma única medição. Verifique o percentil e, mais importante, se ele se manteve estável ao longo do tempo — uma criança que sempre esteve perto do 15º percentil está crescendo normalmente. Procure um pediatra se o percentil continuar caindo, se o crescimento estagnar por muitos meses ou se você simplesmente estiver preocupado.',
    },
    {
      question: 'Com que idade os adolescentes param de crescer?',
      answer:
        'A maioria das meninas termina de crescer por volta dos 15–16 anos, cerca de dois anos após a primeira menstruação. A maioria dos meninos termina por volta dos 17–18 anos, com pequenos ganhos às vezes continuando até o início dos 20. Quando as placas de crescimento se fecham, nenhum exercício ou suplemento consegue aumentar a altura de forma significativa.',
    },
  ],
  relatedLinks: [
    { text: 'Tabela de altura para meninos', href: '/height-calculator/boys-chart/' },
    { text: 'Tabela de altura para meninas', href: '/height-calculator/girls-chart/' },
    { text: 'Percentil de altura para meninos', href: '/height-calculator/boys-percentile/' },
    { text: 'Percentil de altura para meninas', href: '/height-calculator/girls-percentile/' },
    { text: 'Preveja a altura adulta do seu filho', href: '/articles/predict-your-childs-adult-height/' },
  ],
};
