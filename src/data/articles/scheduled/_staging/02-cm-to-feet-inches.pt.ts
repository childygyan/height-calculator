import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'cm-to-feet-inches',
  slug: 'cm-para-pes-e-polegadas',
  title: 'Cm para Pés e Polegadas: O Guia Completo de Conversão',
  subtitle:
    'A fórmula exata, um exemplo resolvido passo a passo e uma tabela de consulta rápida — converta qualquer altura de centímetros para pés e polegadas em segundos.',
  metaDescription:
    'Converta cm para pés e polegadas: a fórmula exata, um exemplo resolvido (175 cm = 5\'9"), uma tabela de consulta rápida (150–200 cm) e respostas para as dúvidas mais comuns.',
  datePublished: '2026-10-08',
  dateModified: '2026-10-08',
  readTime: '5 min de leitura',
  badge: 'Guia de referência',
  tocTitle: 'Neste artigo',
  intro: {
    lead:
      'Para converter cm para pés e polegadas: divida os centímetros por 30,48 para obter os pés, depois multiplique a parte decimal por 12 para obter as polegadas restantes. Exemplo: 175 cm ÷ 30,48 = 5,741 pés, e 0,741 × 12 = 8,9 pol — ou seja, 175 cm = 5\'8.9", normalmente arredondado para 5\'9".',
    paragraphs: [
      'Os centímetros são o padrão mundial, mas pés e polegadas ainda dominam nos EUA e no Reino Unido — em perfis de namoro, formulários médicos e estatísticas de esportes. Saber a conversão de cabeça economiza aquele momento de procurar a calculadora toda vez.',
      'A seguir: as duas fórmulas exatas, um exemplo resolvido passo a passo e uma tabela completa de referência de 150 a 200 cm.',
    ],
  },
  sections: [
    {
      id: 'formula',
      heading: 'A fórmula',
      paragraphs: [
        'Você só precisa de dois fatos: 1 pé = 30,48 cm e 1 polegada = 2,54 cm (ambos exatos por definição internacional). A partir daí, a conversão tem duas etapas:',
      ],
      bulletPoints: [
        'Etapa 1 — pés: divida os centímetros por 30,48. O número inteiro são os seus pés.',
        'Etapa 2 — polegadas: pegue o resto decimal e multiplique por 12. Essas são as suas polegadas.',
      ],
      callout: {
        type: 'tip',
        text: 'Atalho para a parte das polegadas: total de polegadas = cm ÷ 2,54. Depois, pés = número inteiro ÷ 12, e o que sobrar são as polegadas. Mesmo resultado, uma etapa a menos para quem gosta de trabalhar em polegadas.',
      },
    },
    {
      id: 'worked-example',
      heading: 'Exemplo resolvido: 175 cm',
      paragraphs: [],
      steps: [
        {
          number: 1,
          title: 'Divida por 30,48',
          description: '175 ÷ 30,48 = 5,741. O número inteiro dá 5 pés.',
        },
        {
          number: 2,
          title: 'Multiplique o resto por 12',
          description: '0,741 × 12 = 8,9. Essas são as suas polegadas.',
        },
        {
          number: 3,
          title: 'Leia o resultado',
          description: '175 cm = 5\'8.9" — no dia a dia, 5\'9".',
        },
      ],
      callout: {
        type: 'note',
        text: 'As alturas quase sempre são arredondadas para a polegada inteira mais próxima na conversa. 5\'8.9" vira 5\'9", 5\'3.0" continua 5\'3".',
      },
    },
    {
      id: 'reference-table',
      heading: 'Tabela de consulta rápida (150–200 cm)',
      paragraphs: [
        'As alturas mais comuns, já convertidas — sem precisar fazer conta:',
      ],
      table: {
        headers: ['Centímetros', 'Pés e polegadas', 'Dito como'],
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
          'Conversões exatas com uma casa decimal; "dito como" é a forma arredondada usada no dia a dia.',
      },
    },
    {
      id: 'reverse',
      heading: 'O caminho inverso: pés e polegadas para cm',
      paragraphs: [
        'Para converter de volta, multiplique os pés por 30,48 e as polegadas por 2,54, depois some. Exemplo: 5\'9" = (5 × 30,48) + (9 × 2,54) = 152,4 + 22,86 = 175,26 cm ≈ 175 cm.',
        'Faz isso com frequência? Pule a conta de cabeça — nosso conversor faz na hora, nas duas direções:',
      ],
      link: {
        text: '→ Abrir a Calculadora de Altura',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: 'Quantos cm tem um pé?',
      answer:
        'Exatamente 30,48 cm. O pé foi fixado nesse valor por acordo internacional em 1959.',
    },
    {
      question: 'Quantos cm tem uma polegada?',
      answer:
        'Exatamente 2,54 cm. É por isso que dividir os centímetros por 2,54 dá o total de polegadas.',
    },
    {
      question: 'Quanto é 175 cm em pés e polegadas?',
      answer:
        '175 cm = 5\'8.9", que se arredonda para 5\'9" no dia a dia.',
    },
    {
      question: 'Por que os americanos ainda usam pés e polegadas?',
      answer:
        'Os EUA mantiveram o sistema imperial por tradição e pelo custo de uma mudança — placas de trânsito, construção civil e hábitos diários funcionam em pés e polegadas. Quase todo o resto do mundo, e toda a ciência, usa o sistema métrico.',
    },
  ],
  relatedLinks: [
    { text: 'Calculadora de Altura', href: '/height-calculator/' },
    { text: 'Altura média por país', href: '/articles/average-height-by-country/' },
  ],
};
