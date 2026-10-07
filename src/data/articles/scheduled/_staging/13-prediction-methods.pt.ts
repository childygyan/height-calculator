import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'prediction-methods',
  slug: 'qual-metodo-previsao-altura-mais-preciso',
  title: 'Qual Método de Previsão de Altura Infantil É o Mais Preciso?',
  subtitle:
    'Radiografia da idade óssea, método Khamis-Roche e altura média parental comparados com honestidade — precisão, o que cada um exige e quando cada um faz sentido.',
  metaDescription:
    'Qual a precisão dos preditores de altura infantil? Comparação honesta da radiografia da idade óssea, do método Khamis-Roche e da altura média parental — com margens de erro.',
  datePublished: '2026-10-19',
  dateModified: '2026-10-19',
  readTime: '6 min de leitura',
  badge: 'Comparação de métodos',
  tocTitle: 'Neste artigo',
  intro: {
    lead:
      'Em ordem de precisão: a radiografia da idade óssea (o mais preciso, precisa de médico) supera o método Khamis-Roche (cerca de ±5 cm, precisa da altura, do peso e da idade atuais da criança), que por sua vez supera a fórmula da altura média parental (±8,5 cm, precisa só da altura dos pais).',
    paragraphs: [
      'Todo preditor de altura — online ou em consultório — usa um destes três métodos. A diferença honesta entre eles não é mágica, mas dados: quanta informação sobre a criança cada um usa e quão larga é a margem de erro.',
      'A seguir: como cada método funciona, sua precisão real e uma regra clara para escolher o ideal para o seu caso.',
    ],
  },
  sections: [
    {
      id: 'resumo',
      heading: 'Os três métodos em resumo',
      paragraphs: [
        'Versão curta, antes de entrarmos nos detalhes de cada um:',
      ],
      table: {
        headers: ['Método', 'Erro típico', 'Do que você precisa', 'Custo / acesso'],
        rows: [
          ['Radiografia da idade óssea', 'O mais preciso', 'Consulta médica + raio-X da mão', 'Somente em clínica'],
          ['Khamis-Roche', '±~5 cm', 'Idade, altura e peso da criança + altura dos dois pais', 'Calculadora grátis'],
          ['Altura média parental', '±8,5 cm', 'Somente a altura dos dois pais', 'Calculadora grátis'],
        ],
        footnote:
          'As margens de erro são valores aproximados publicados. Resultados individuais variam — o crescimento é estatístico, não exato.',
      },
    },
    {
      id: 'altura-media-parental',
      heading: 'Altura média parental: a estimativa mais simples',
      paragraphs: [
        'É a fórmula por trás de quase todos os preditores online gratuitos — e a que os pediatras citam de cabeça:',
      ],
      bulletPoints: [
        'Meninos: (altura do pai + altura da mãe + 13 cm) ÷ 2',
        'Meninas: (altura do pai + altura da mãe − 13 cm) ÷ 2',
      ],
      callout: {
        type: 'tip',
        text: 'Exemplo: pai com 178 cm e mãe com 165 cm. Menino: (178 + 165 + 13) ÷ 2 = 178 cm. Menina: (178 + 165 − 13) ÷ 2 = 165 cm. Espere ±8,5 cm em torno desse número — o menino provavelmente ficaria entre 169,5 cm e 186,5 cm.',
      },
    },
    {
      id: 'khamis-roche',
      heading: 'Khamis-Roche: a fórmula mais precisa',
      paragraphs: [
        'Publicado por Khamis e Roche em 1994, este método soma às alturas dos pais as medidas atuais da criança — idade, altura e peso — usando coeficientes de regressão obtidos de um grande estudo longitudinal. Como considera onde a criança está agora, ele supera consistentemente a altura média parental.',
        'Sua margem de erro publicada é de cerca de ±5 cm — visivelmente mais apertada que os ±8,5 cm da altura média parental. Funciona para crianças de aproximadamente 4 a 17 anos, e a previsão melhora conforme a criança cresce.',
      ],
      callout: {
        type: 'note',
        text: 'Uma limitação honesta: o estudo original de Khamis-Roche acompanhou crianças americanas brancas. O método é amplamente usado, mas continua sendo uma estimativa populacional — não uma medida do seu filho em particular.',
      },
    },
    {
      id: 'idade-ossea',
      heading: 'Idade óssea: o padrão clínico',
      paragraphs: [
        'Quando o pediatra precisa mesmo de precisão — por exemplo, quando a curva de crescimento da criança parece incomum — ele pede uma radiografia da idade óssea da mão e do punho esquerdos. Um especialista compara a imagem com padrões de referência (o atlas de Greulich-Pyle é o clássico) para determinar a idade esquelética e, então, combina com a curva de crescimento para prever a altura adulta.',
        'Este é o método mais preciso disponível porque mede a maturidade biológica real da criança, não apenas a idade cronológica. Mas exige consulta médica, exposição à radiação (uma dose muito pequena) e interpretação clínica — não é uma opção caseira.',
        'Para a curiosidade do dia a dia, as fórmulas acima são mais do que suficientes. E se você quer uma estimativa rápida agora mesmo, o preditor gratuito deste site usa o método da altura média parental:',
      ],
      link: {
        text: '→ Preveja a altura adulta do seu filho (grátis)',
        href: '/height-calculator/child-height-predictor/',
      },
    },
  ],
  faqs: [
    {
      question: 'Qual a precisão dos preditores online de altura infantil?',
      answer:
        'A maioria dos preditores gratuitos usa a fórmula da altura média parental, então a precisão honesta é de cerca de ±8,5 cm em torno do resultado. Trate o número como o centro de uma faixa, não como uma promessa.',
    },
    {
      question: 'O que é o método Khamis-Roche?',
      answer:
        'Uma fórmula de previsão de altura publicada em 1994 que usa a idade, a altura e o peso da criança junto com a altura dos dois pais. É mais precisa que a altura média parental — cerca de ±5 cm — e funciona para crianças de aproximadamente 4 a 17 anos.',
    },
    {
      question: 'O médico consegue prever a altura do meu filho?',
      answer:
        'Sim. O pediatra combina a estimativa da altura média parental com a curva de crescimento da criança e, quando necessário, uma radiografia da idade óssea da mão e do punho. A idade óssea é o método clínico mais preciso porque mede diretamente a maturidade esquelética.',
    },
    {
      question: 'Qual método usar para uma criança de 3 anos?',
      answer:
        'A altura média parental é a escolha razoável — o método Khamis-Roche é validado a partir de cerca de 4 anos. Aos 3, as previsões são de qualquer forma as menos confiáveis, já que há muito crescimento (e o momento da puberdade) pela frente.',
    },
  ],
  medicalDisclaimer:
    'Este artigo explica métodos de previsão de altura para fins educacionais e não é um conselho médico. Se você tem preocupações sobre o crescimento do seu filho, consulte um pediatra.',
  relatedLinks: [
    { text: 'Preditor de altura infantil (grátis)', href: '/height-calculator/child-height-predictor/' },
    { text: 'Preveja a altura adulta do seu filho — guia completo', href: '/articles/predict-your-childs-adult-height/' },
    { text: 'Percentil de altura explicado', href: '/articles/height-percentile-explained/' },
  ],
};
