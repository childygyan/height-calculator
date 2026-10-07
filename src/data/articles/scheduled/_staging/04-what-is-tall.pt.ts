import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'what-is-tall',
  slug: 'que-altura-e-considerada-alta',
  title: 'Que Altura É Considerada "Alta"? (Com Dados Reais)',
  subtitle:
    'Esqueça opiniões vagas — aqui está onde "alto" realmente começa para homens e mulheres, com base em dados reais de percentil.',
  metaDescription:
    'Que altura é considerada alta? Dados reais de percentil: homens dos EUA a partir de 1,88 m (6\'2"), mulheres a partir de 1,73 m (5\'8"). Tabelas, diferenças por país e perguntas frequentes.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  readTime: '5 min de leitura',
  badge: 'Guia de referência',
  tocTitle: 'Neste artigo',
  intro: {
    lead:
      'Nos EUA, um homem é estatisticamente "alto" a partir de cerca de 1,88 m (6\'2") e uma mulher a partir de cerca de 1,73 m (5\'8") — ambos ficam perto do percentil 95, o que significa que apenas cerca de 1 em cada 20 adultos é mais alto.',
    paragraphs: [
      '"Alto" parece subjetivo, mas os estatísticos traçam a linha com percentis: os 5% mais altos da população. Abaixo você encontra as tabelas exatas de percentil para homens e mulheres, por que o mesmo número significa coisas muito diferentes conforme o sexo e o país, e como descobrir onde você se encaixa.',
    ],
  },
  sections: [
    {
      id: 'resposta',
      heading: 'A resposta curta: as tabelas de percentil',
      paragraphs: [
        'Os percentis de altura vêm de grandes pesquisas populacionais (nos EUA, o NHANES, do CDC). O percentil 95 é o corte padrão que os pesquisadores usam para "alto" — acima dele, você é mais alto que cerca de 95 em cada 100 pessoas do seu sexo.',
      ],
      table: {
        headers: ['Percentil', 'Homens', 'Mulheres', 'O que significa'],
        rows: [
          ['50 (média)', '1,75 m (5\'9")', '1,61 m (5\'3.5")', 'Bem no meio'],
          ['75', '1,80 m (5\'11")', '1,65 m (5\'5")', 'Visivelmente acima da média'],
          ['90', '1,84 m (6\'0.5")', '1,69 m (5\'6.5")', 'Meio alto — os 10% mais altos'],
          ['95', '1,88 m (6\'2")', '1,73 m (5\'8")', 'Alto — os 5% mais altos'],
          ['97+', '1,90 m+ (6\'3"+)', '1,75 m+ (5\'9"+)', 'Muito alto — os 3% mais altos'],
        ],
        footnote:
          'Valores aproximados para adultos nos EUA (NHANES). As fontes variam um pouco conforme o ano da pesquisa — use como referência, não como medida exata.',
      },
      callout: {
        type: 'tip',
        text: 'O número mais incompreendido: 1,83 m (6\'0") para um homem é apenas cerca do percentil 84 nos EUA — acima da média, mas não estatisticamente "alto".',
      },
      link: {
        text: '→ Descubra o seu percentil',
        href: '/height-calculator/boys-percentile/',
      },
    },
    {
      id: 'homens-vs-mulheres',
      heading: 'Homens vs mulheres: o contexto muda tudo',
      paragraphs: [
        'A mesma altura pode ser média para um sexo e alta para o outro. Um homem de 1,73 m (5\'8") fica em torno do percentil 30 — abaixo da média. Uma mulher de 1,73 m está no percentil 95 — inegavelmente alta.',
        'Por isso "X é alto?" não tem resposta sem saber o sexo:',
      ],
      bulletPoints: [
        '1,70 m (5\'7"): homem mais ou menos na média (~percentil 25) vs mulher alta (~percentil 90)',
        '1,78 m (5\'10"): homem acima da média (~70) vs mulher muito alta (~98)',
        '1,83 m (6\'0"): homem acima da média (~84) vs mulher extremamente alta (~99+)',
      ],
    },
    {
      id: 'por-pais',
      heading: 'Também depende do país',
      paragraphs: [
        '"Alto" é relativo à população ao seu redor. Na Holanda, onde o homem médio tem 183,8 cm, 1,88 m (6\'2") mal chama atenção. No Japão, onde o homem médio tem cerca de 172 cm, a mesma altura se destaca claramente.',
        'Limites aproximados de "alto" (percentil 95) ao redor do mundo:',
      ],
      bulletPoints: [
        'Holanda: ~1,93 m (6\'4") homens / ~1,78 m (5\'10") mulheres',
        'EUA: ~1,88 m (6\'2") homens / ~1,73 m (5\'8") mulheres',
        'Brasil: ~1,85 m (6\'1") homens / ~1,70 m (5\'7") mulheres',
        'Japão: ~1,80 m (5\'11") homens / ~1,65 m (5\'5") mulheres',
      ],
      link: {
        text: '→ Tabela completa de altura média por país',
        href: '/articles/average-height-by-country/',
      },
    },
    {
      id: 'compare',
      heading: 'Onde você se encaixa?',
      paragraphs: [
        'Números são úteis, mas nada supera ver com os próprios olhos. Coloque sua altura ao lado de um amigo, de uma celebridade ou da média do seu país e veja a diferença visualmente:',
      ],
      link: {
        text: '→ Compare sua altura agora (grátis)',
        href: '/compare/',
      },
    },
  ],
  faqs: [
    {
      question: '1,83 m (6 pés) é alto?',
      answer:
        'Para um homem nos EUA, 1,83 m (6\'0") é cerca do percentil 84 — mais alto que a maioria das pessoas que você encontra, mas um pouco abaixo do corte estatístico de "alto" (percentil 95, ~1,88 m). Na linguagem do dia a dia, a maioria das pessoas ainda chamaria de alto.',
    },
    {
      question: '1,73 m é alto para uma mulher?',
      answer:
        'Sim. Com 1,73 m (5\'8"), uma mulher nos EUA está em torno do percentil 95 — mais alta que cerca de 19 em cada 20 mulheres. Isso é firmemente território "alto", por qualquer definição.',
    },
    {
      question: 'Que altura é considerada alta no Japão?',
      answer:
        'Como as médias são mais baixas (cerca de 172 cm para homens e 158 cm para mulheres), o limite de "alto" fica em torno de 1,80 m (5\'11") para homens e 1,65 m (5\'5") para mulheres — aproximadamente o percentil 95 da população japonesa.',
    },
    {
      question: 'Que altura é considerada baixa?',
      answer:
        'O espelho de "alto": abaixo do percentil 5. Nos EUA, isso é aproximadamente menos de 1,64 m (5\'5") para homens e menos de 1,51 m (5\'0") para mulheres. Como "alto", varia conforme o sexo e o país.',
    },
  ],
  relatedLinks: [
    { text: 'Comparador de Altura', href: '/compare/' },
    { text: 'Calculadora de percentil de altura para meninos', href: '/height-calculator/boys-percentile/' },
    { text: 'Calculadora de percentil de altura para meninas', href: '/height-calculator/girls-percentile/' },
    { text: 'Altura média por país', href: '/articles/average-height-by-country/' },
  ],
};
