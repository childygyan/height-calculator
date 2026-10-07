import type { ScheduledArticle } from '../types';

export const scheduled: ScheduledArticle = {
  publishDate: '2026-10-11',
  articles: {
    en: {
      id: 'avg-height-us',
      slug: 'average-height-in-the-us',
      title: 'Average Height in the US: Men, Women & by State',
      subtitle: 'The national numbers, a state-by-state breakdown you won’t find anywhere else, and how American height changed over 100 years.',
      metaDescription: 'Average height in the US: men ~5\'9", women ~5\'4" (NHANES). State-by-state table, tallest vs shortest states, and the 100-year trend.',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6 min read',
      badge: 'Reference guide',
      tocTitle: 'In this article',
      intro: {
        lead: 'The average height in the United States is about 5 feet 9 inches (175 cm) for men and 5 feet 4 inches (163 cm) for women, according to measured data from the National Health and Nutrition Examination Survey (NHANES).',
        paragraphs: [
          'Those are the national numbers — but the US is not one height. Upper-Midwestern states like Montana and Minnesota measure noticeably taller than states like Hawaii and New Mexico, and the country’s growth story over the last century looks very different from Europe’s.',
          'Below: the national figures explained, a state-by-state table compiled from survey data, and the 100-year trend that took America from the world’s tallest to the middle of the pack.',
        ],
      },
      sections: [
        {
          id: 'national-averages',
          heading: 'The national numbers: 5\'9" and 5\'4"',
          paragraphs: [
            'The most reliable figures come from NHANES, run by the CDC — unlike most surveys, it measures people in person rather than asking them. The commonly cited measured averages for American adults are:',
          ],
          bulletPoints: [
            'Men: about 5 ft 9 in (175 cm)',
            'Women: about 5 ft 4 in (163 cm)',
          ],
          callout: {
            type: 'tip',
            text: 'Measured averages run about half an inch to an inch lower than self-reported surveys — most people round up when asked. Trust measured data (like NHANES) over poll numbers.',
          },
        },
        {
          id: 'by-state',
          heading: 'Average height by state (table)',
          paragraphs: [
            'State-level height data is harder to come by — no national survey publishes measured height for every state. The table below compiles approximate figures from self-reported survey data (such as the CDC’s BRFSS) and published state comparisons. Treat these as estimates: self-reported numbers skew high, and methods vary between sources.',
          ],
          table: {
            headers: [
              'State',
              'Men (approx.)',
              'Women (approx.)',
            ],
            rows: [
              [
                'Montana',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Minnesota',
                '5\'11"',
                '5\'6"',
              ],
              [
                'North Dakota',
                '5\'11"',
                '5\'6"',
              ],
              [
                'South Dakota',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Nebraska',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Kansas',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Iowa',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wisconsin',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wyoming',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Colorado',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Vermont',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Oregon',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Washington',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Texas',
                '5\'9"',
                '5\'4"',
              ],
              [
                'California',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Florida',
                '5\'9"',
                '5\'4"',
              ],
              [
                'New York',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Mississippi',
                '5\'8"',
                '5\'4"',
              ],
              [
                'New Mexico',
                '5\'8"',
                '5\'3"',
              ],
              [
                'Hawaii',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: 'Approximate values compiled from self-reported survey data (e.g., CDC BRFSS) and published state comparisons. Self-reported heights typically run higher than measured values — use as a rough comparison, not as exact measurements.',
          },
        },
        {
          id: 'trend',
          heading: 'The 100-year trend: from tallest to plateau',
          paragraphs: [
            'A century ago, Americans were among the tallest people in the world. US-born men around 1914 averaged close to today’s figures — while much of Europe lagged behind, held back by poorer nutrition and harder living conditions.',
            'Then the lines crossed. Between the 1950s and 1980s, Northern Europe kept gaining height with each generation while American growth plateaued. The Netherlands, Denmark, and their neighbors overtook the US and never looked back.',
            'Researchers point to a few reasons: near-universal access to good childhood nutrition in Europe, strong public-health systems, and — in the American case — rising economic inequality, which means the national average hides groups of children who never got the nutrition needed to reach their full height potential.',
          ],
          callout: {
            type: 'note',
            text: 'The US plateau does not mean Americans are shrinking — it means they stopped gaining while other countries caught up and passed them.',
          },
        },
        {
          id: 'where-do-you-stand',
          heading: 'Where do you stand?',
          paragraphs: [
            'National and state averages are useful context, but the number that matters is yours — measured correctly, in the morning, barefoot against a wall.',
            'Compare your height against the US average, or stack yourself up against someone else side by side:',
          ],
          link: {
            text: '→ Open the Height Calculator',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: 'What state has the tallest people?',
          answer: 'Upper-Midwestern states consistently come out tallest in survey data — Montana, Minnesota, and North Dakota lead most state rankings, with men averaging around 5\'11". Keep in mind state figures are approximate, compiled from self-reported surveys rather than measured data.',
        },
        {
          question: 'Are Americans getting taller?',
          answer: 'Not really — average height in the US has been roughly flat since the 1970s–80s. The big American gains happened earlier in the 20th century; since then, Northern Europe and other regions have caught up and overtaken the US.',
        },
        {
          question: 'What is the average height for a man in the US?',
          answer: 'About 5 feet 9 inches (175 cm), based on measured NHANES data from the CDC. Self-reported surveys give slightly higher numbers because people tend to round up.',
        },
        {
          question: 'Is 5\'10" tall for a man in the US?',
          answer: 'It is slightly above average — roughly the 60th to 65th percentile among American men. In the tallest states like Montana or Minnesota it is closer to average, while in shorter states it stands out more.',
        },
      ],
      relatedLinks: [
        {
          text: 'Height Calculator',
          href: '/height-calculator/',
        },
        {
          text: 'Height Comparison',
          href: '/compare/',
        },
        {
          text: 'Average height by country',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    pt: {
      id: 'avg-height-us',
      slug: 'altura-media-nos-eua',
      title: 'Altura Média nos EUA: Homens, Mulheres e por Estado',
      subtitle: 'Os números nacionais, um detalhamento estado por estado que você não encontra em nenhum outro lugar, e como a altura dos americanos mudou em 100 anos.',
      metaDescription: 'Altura média nos EUA: homens ~1,75 m, mulheres ~1,63 m (NHANES). Tabela estado por estado, estados mais altos e mais baixos, e a tendência de 100 anos.',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6 min de leitura',
      badge: 'Guia de referência',
      tocTitle: 'Neste artigo',
      intro: {
        lead: 'A altura média nos Estados Unidos é de cerca de 5 pés 9 polegadas (175 cm) para homens e 5 pés 4 polegadas (163 cm) para mulheres, segundo dados medidos do National Health and Nutrition Examination Survey (NHANES).',
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
            headers: [
              'Estado',
              'Homens (aprox.)',
              'Mulheres (aprox.)',
            ],
            rows: [
              [
                'Montana',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Minnesota',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Dakota do Norte',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Dakota do Sul',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Nebraska',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Kansas',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Iowa',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wisconsin',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wyoming',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Colorado',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Vermont',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Oregon',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Washington',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Texas',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Califórnia',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Flórida',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Nova York',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Mississippi',
                '5\'8"',
                '5\'4"',
              ],
              [
                'Novo México',
                '5\'8"',
                '5\'3"',
              ],
              [
                'Havaí',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: 'Valores aproximados compilados de dados autorrelatados de pesquisas (ex.: BRFSS do CDC) e comparações estaduais publicadas. Alturas autorrelatadas costumam ser maiores que os valores medidos — use como comparação aproximada, não como medidas exatas.',
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
          answer: 'Os estados do Meio-Oeste superior aparecem consistentemente como os mais altos nos dados de pesquisas — Montana, Minnesota e Dakota do Norte lideram a maioria dos rankings estaduais, com homens em média por volta de 5\'11". Lembre-se de que os números estaduais são aproximados, compilados de pesquisas autorrelatadas e não de dados medidos.',
        },
        {
          question: 'Os americanos estão ficando mais altos?',
          answer: 'Na verdade, não — a altura média nos EUA está praticamente estável desde as décadas de 1970–80. Os grandes ganhos americanos aconteceram mais cedo no século XX; desde então, o norte da Europa e outras regiões alcançaram e ultrapassaram os EUA.',
        },
        {
          question: 'Qual é a altura média de um homem nos EUA?',
          answer: 'Cerca de 5 pés 9 polegadas (175 cm), segundo dados medidos do NHANES, do CDC. Pesquisas autorrelatadas dão números um pouco maiores porque as pessoas tendem a arredondar para cima.',
        },
        {
          question: 'Ter 5\'10" é alto para um homem nos EUA?',
          answer: 'É um pouco acima da média — mais ou menos entre o 60º e o 65º percentil entre os homens americanos. Nos estados mais altos, como Montana ou Minnesota, fica mais próximo da média, enquanto em estados mais baixos se destaca mais.',
        },
      ],
      relatedLinks: [
        {
          text: 'Calculadora de Altura',
          href: '/height-calculator/',
        },
        {
          text: 'Comparar Alturas',
          href: '/compare/',
        },
        {
          text: 'Altura média por país',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    es: {
      id: 'avg-height-us',
      slug: 'estatura-promedio-en-eeuu',
      title: 'Estatura promedio en EE. UU.: hombres, mujeres y por estado',
      subtitle: 'Las cifras nacionales, un desglose por estado que no encontrarás en ningún otro lado y cómo cambió la estatura de los estadounidenses en 100 años.',
      metaDescription: 'Estatura promedio en EE. UU.: hombres ~1,75 m, mujeres ~1,63 m (NHANES). Tabla por estado, estados más altos vs. más bajos y la tendencia de 100 años.',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6 min de lectura',
      badge: 'Guía de referencia',
      tocTitle: 'En este artículo',
      intro: {
        lead: 'La estatura promedio en Estados Unidos es de aproximadamente 5 pies 9 pulgadas (175 cm) en hombres y 5 pies 4 pulgadas (163 cm) en mujeres, según datos medidos de la Encuesta Nacional de Examen de Salud y Nutrición (NHANES).',
        paragraphs: [
          'Esos son los números nacionales, pero Estados Unidos no tiene una sola estatura. Los estados del Alto Medio Oeste, como Montana y Minnesota, miden notablemente más que estados como Hawái y Nuevo México, y la historia de crecimiento del país en el último siglo se ve muy distinta a la de Europa.',
          'A continuación: las cifras nacionales explicadas, una tabla por estado compilada a partir de datos de encuestas y la tendencia de 100 años que llevó a Estados Unidos de ser el país más alto del mundo a la mitad de la tabla.',
        ],
      },
      sections: [
        {
          id: 'national-averages',
          heading: 'Las cifras nacionales: 5\'9" y 5\'4"',
          paragraphs: [
            'Las cifras más fiables vienen de la NHANES, administrada por los CDC: a diferencia de la mayoría de las encuestas, mide a las personas en persona en lugar de preguntarles. Los promedios medidos más citados para adultos estadounidenses son:',
          ],
          bulletPoints: [
            'Hombres: aproximadamente 5 pies 9 pulgadas (175 cm)',
            'Mujeres: aproximadamente 5 pies 4 pulgadas (163 cm)',
          ],
          callout: {
            type: 'tip',
            text: 'Los promedios medidos suelen ser entre media pulgada y una pulgada más bajos que las encuestas de autorreporte: la mayoría redondea hacia arriba cuando le preguntan. Confía en los datos medidos (como los de la NHANES) antes que en los de las encuestas.',
          },
        },
        {
          id: 'by-state',
          heading: 'Estatura promedio por estado (tabla)',
          paragraphs: [
            'Los datos de estatura por estado son más difíciles de conseguir: ninguna encuesta nacional publica la estatura medida de cada estado. La siguiente tabla recopila cifras aproximadas de encuestas de autorreporte (como la BRFSS de los CDC) y de comparaciones estatales publicadas. Tómalas como estimaciones: los números autorreportados tienden a ser más altos y los métodos varían entre fuentes.',
          ],
          table: {
            headers: [
              'Estado',
              'Hombres (aprox.)',
              'Mujeres (aprox.)',
            ],
            rows: [
              [
                'Montana',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Minnesota',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Dakota del Norte',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Dakota del Sur',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Nebraska',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Kansas',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Iowa',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wisconsin',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wyoming',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Colorado',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Vermont',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Oregón',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Washington',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Texas',
                '5\'9"',
                '5\'4"',
              ],
              [
                'California',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Florida',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Nueva York',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Misisipi',
                '5\'8"',
                '5\'4"',
              ],
              [
                'Nuevo México',
                '5\'8"',
                '5\'3"',
              ],
              [
                'Hawái',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: 'Valores aproximados recopilados de encuestas de autorreporte (p. ej., BRFSS de los CDC) y comparaciones estatales publicadas. Las estaturas autorreportadas suelen ser más altas que los valores medidos: úsalas como comparación aproximada, no como medidas exactas.',
          },
        },
        {
          id: 'trend',
          heading: 'La tendencia de 100 años: de los más altos al estancamiento',
          paragraphs: [
            'Hace un siglo, los estadounidenses estaban entre las personas más altas del mundo. Los hombres nacidos en EE. UU. alrededor de 1914 medían cerca de las cifras actuales, mientras gran parte de Europa se quedaba atrás, frenada por una peor nutrición y condiciones de vida más duras.',
            'Luego las líneas se cruzaron. Entre las décadas de 1950 y 1980, el norte de Europa siguió ganando estatura con cada generación mientras el crecimiento estadounidense se estancaba. Los Países Bajos, Dinamarca y sus vecinos superaron a EE. UU. y nunca miraron atrás.',
            'Los investigadores apuntan a varias razones: acceso casi universal a buena nutrición infantil en Europa, sistemas de salud pública sólidos y, en el caso estadounidense, una creciente desigualdad económica, que hace que el promedio nacional oculte a grupos de niños que nunca recibieron la nutrición necesaria para alcanzar su potencial.',
          ],
          callout: {
            type: 'note',
            text: 'El estancamiento de EE. UU. no significa que los estadounidenses se estén encogiendo: significa que dejaron de crecer mientras otros países los alcanzaban y los superaban.',
          },
        },
        {
          id: 'where-do-you-stand',
          heading: '¿Y tú dónde estás?',
          paragraphs: [
            'Los promedios nacionales y estatales son un contexto útil, pero el número que importa es el tuyo: medido correctamente, por la mañana, descalzo contra una pared.',
            'Compara tu estatura con el promedio de EE. UU. o mídete codo a codo con otra persona:',
          ],
          link: {
            text: '→ Abre la calculadora de estatura',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: '¿Qué estado tiene a las personas más altas?',
          answer: 'Los estados del Alto Medio Oeste salen sistemáticamente como los más altos en los datos de encuestas: Montana, Minnesota y Dakota del Norte lideran la mayoría de los rankings estatales, con hombres que promedian alrededor de 5\'11". Ten en cuenta que las cifras estatales son aproximadas, compiladas de encuestas de autorreporte y no de datos medidos.',
        },
        {
          question: '¿Los estadounidenses están volviéndose más altos?',
          answer: 'En realidad no: la estatura promedio en EE. UU. se ha mantenido más o menos estable desde las décadas de 1970 y 1980. Las grandes ganancias estadounidenses ocurrieron antes en el siglo XX; desde entonces, el norte de Europa y otras regiones alcanzaron y superaron a EE. UU.',
        },
        {
          question: '¿Cuál es la estatura promedio de un hombre en EE. UU.?',
          answer: 'Aproximadamente 5 pies 9 pulgadas (175 cm), según datos medidos de la NHANES de los CDC. Las encuestas de autorreporte dan números ligeramente más altos porque la gente tiende a redondear hacia arriba.',
        },
        {
          question: '¿Es alto 5\'10" para un hombre en EE. UU.?',
          answer: 'Está ligeramente por encima del promedio: más o menos entre el percentil 60 y 65 entre los hombres estadounidenses. En los estados más altos, como Montana o Minnesota, está más cerca del promedio, mientras que en los estados más bajos destaca más.',
        },
      ],
      relatedLinks: [
        {
          text: 'Calculadora de estatura',
          href: '/height-calculator/',
        },
        {
          text: 'Comparador de estatura',
          href: '/compare/',
        },
        {
          text: 'Estatura promedio por país',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    fr: {
      id: 'avg-height-us',
      slug: 'taille-moyenne-aux-usa',
      title: 'Taille moyenne aux États-Unis : hommes, femmes et par État',
      subtitle: 'Les chiffres nationaux, un classement État par État que vous ne trouverez nulle part ailleurs, et l’évolution de la taille des Américains sur 100 ans.',
      metaDescription: 'Taille moyenne aux États-Unis : hommes ~1,75 m, femmes ~1,63 m (NHANES). Tableau par État, États les plus grands et les plus petits, et la tendance sur 100 ans.',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6 min de lecture',
      badge: 'Guide de référence',
      tocTitle: 'Dans cet article',
      intro: {
        lead: 'La taille moyenne aux États-Unis est d’environ 1,75 m (5 pieds 9 pouces) pour les hommes et 1,63 m (5 pieds 4 pouces) pour les femmes, selon les données mesurées de la National Health and Nutrition Examination Survey (NHANES).',
        paragraphs: [
          'Ce sont les chiffres nationaux — mais les États-Unis n’ont pas une seule taille. Les États du nord des Grandes Plaines comme le Montana et le Minnesota sont nettement plus grands que des États comme Hawaï ou le Nouveau-Mexique, et l’histoire de la croissance du pays au cours du dernier siècle n’a rien à voir avec celle de l’Europe.',
          'Ci-dessous : les chiffres nationaux expliqués, un tableau État par État compilé à partir de données d’enquête, et la tendance sur 100 ans qui a fait passer l’Amérique des plus grands du monde au milieu du classement.',
        ],
      },
      sections: [
        {
          id: 'national-averages',
          heading: 'Les chiffres nationaux : 1,75 m et 1,63 m',
          paragraphs: [
            'Les chiffres les plus fiables viennent de la NHANES, menée par le CDC — contrairement à la plupart des enquêtes, elle mesure les gens en personne au lieu de les interroger. Les moyennes mesurées les plus citées pour les adultes américains sont :',
          ],
          bulletPoints: [
            'Hommes : environ 5 pi 9 po (175 cm)',
            'Femmes : environ 5 pi 4 po (163 cm)',
          ],
          callout: {
            type: 'tip',
            text: 'Les moyennes mesurées sont environ un demi-pouce à un pouce plus basses que dans les enquêtes déclaratives — la plupart des gens arrondissent vers le haut quand on les interroge. Faites confiance aux données mesurées (comme la NHANES) plutôt qu’aux sondages.',
          },
        },
        {
          id: 'by-state',
          heading: 'Taille moyenne par État (tableau)',
          paragraphs: [
            'Les données de taille par État sont plus difficiles à obtenir — aucune enquête nationale ne publie de taille mesurée pour chaque État. Le tableau ci-dessous compile des chiffres approximatifs tirés de données d’enquêtes déclaratives (comme le BRFSS du CDC) et de classements publiés par État. Considérez-les comme des estimations : les chiffres déclarés sont biaisés vers le haut, et les méthodes varient selon les sources.',
          ],
          table: {
            headers: [
              'État',
              'Hommes (env.)',
              'Femmes (env.)',
            ],
            rows: [
              [
                'Montana',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Minnesota',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Dakota du Nord',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Dakota du Sud',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Nebraska',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Kansas',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Iowa',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wisconsin',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wyoming',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Colorado',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Vermont',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Oregon',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Washington',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Texas',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Californie',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Floride',
                '5\'9"',
                '5\'4"',
              ],
              [
                'New York',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Mississippi',
                '5\'8"',
                '5\'4"',
              ],
              [
                'Nouveau-Mexique',
                '5\'8"',
                '5\'3"',
              ],
              [
                'Hawaï',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: 'Valeurs approximatives compilées à partir de données d’enquêtes déclaratives (p. ex. BRFSS du CDC) et de classements publiés par État. Les tailles déclarées sont généralement plus élevées que les valeurs mesurées — utilisez-les comme comparaison approximative, pas comme mesures exactes.',
          },
        },
        {
          id: 'trend',
          heading: 'La tendance sur 100 ans : des plus grands au plateau',
          paragraphs: [
            'Il y a un siècle, les Américains comptaient parmi les personnes les plus grandes du monde. Les hommes nés aux États-Unis vers 1914 affichaient des moyennes proches de celles d’aujourd’hui — tandis qu’une grande partie de l’Europe restait en retard, freinée par une nutrition plus pauvre et des conditions de vie plus dures.',
            'Puis les courbes se sont croisées. Entre les années 1950 et 1980, l’Europe du Nord a continué à gagner en taille à chaque génération pendant que la croissance américaine plafonnait. Les Pays-Bas, le Danemark et leurs voisins ont dépassé les États-Unis et ne se sont jamais retournés.',
            'Les chercheurs avancent quelques explications : un accès quasi universel à une bonne nutrition infantile en Europe, des systèmes de santé publique solides, et — côté américain — des inégalités économiques croissantes, ce qui signifie que la moyenne nationale masque des groupes d’enfants qui n’ont jamais reçu la nutrition nécessaire pour atteindre leur plein potentiel de croissance.',
          ],
          callout: {
            type: 'note',
            text: 'Le plateau américain ne signifie pas que les Américains rapetissent — cela signifie qu’ils ont cessé de grandir pendant que d’autres pays les rattrapaient puis les dépassaient.',
          },
        },
        {
          id: 'where-do-you-stand',
          heading: 'Où vous situez-vous ?',
          paragraphs: [
            'Les moyennes nationales et par État sont un contexte utile, mais le chiffre qui compte, c’est le vôtre — mesuré correctement, le matin, pieds nus contre un mur.',
            'Comparez votre taille à la moyenne américaine, ou comparez-vous à quelqu’un d’autre côte à côte :',
          ],
          link: {
            text: '→ Ouvrir le calculateur de taille',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: 'Quel État a les habitants les plus grands ?',
          answer: 'Les États du nord des Grandes Plaines arrivent systématiquement en tête dans les données d’enquête — le Montana, le Minnesota et le Dakota du Nord dominent la plupart des classements par État, avec des hommes mesurant en moyenne environ 5\'11". Gardez à l’esprit que les chiffres par État sont approximatifs, compilés à partir d’enquêtes déclaratives plutôt que de données mesurées.',
        },
        {
          question: 'Les Américains deviennent-ils plus grands ?',
          answer: 'Pas vraiment — la taille moyenne aux États-Unis est à peu près stable depuis les années 1970-1980. Les grands gains américains ont eu lieu plus tôt au XXe siècle ; depuis, l’Europe du Nord et d’autres régions ont rattrapé puis dépassé les États-Unis.',
        },
        {
          question: 'Quelle est la taille moyenne d’un homme aux États-Unis ?',
          answer: 'Environ 5 pieds 9 pouces (175 cm), d’après les données mesurées de la NHANES du CDC. Les enquêtes déclaratives donnent des chiffres légèrement plus élevés, car les gens ont tendance à arrondir vers le haut.',
        },
        {
          question: '1,78 m (5\'10"), c’est grand pour un homme aux États-Unis ?',
          answer: 'C’est légèrement au-dessus de la moyenne — à peu près le 60e au 65e percentile chez les hommes américains. Dans les États les plus grands comme le Montana ou le Minnesota, c’est proche de la moyenne, tandis que dans les États plus petits, cela se remarque davantage.',
        },
      ],
      relatedLinks: [
        {
          text: 'Calculateur de taille',
          href: '/height-calculator/',
        },
        {
          text: 'Comparaison de taille',
          href: '/compare/',
        },
        {
          text: 'Taille moyenne par pays',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    de: {
      id: 'avg-height-us',
      slug: 'durchschnittsgroesse-usa',
      title: 'Durchschnittsgröße in den USA: Männer, Frauen & nach Bundesstaat',
      subtitle: 'Die nationalen Durchschnittswerte, eine Aufschlüsselung nach Bundesstaaten, die du sonst nirgends findest, und wie sich die Körpergröße in Amerika über 100 Jahre verändert hat.',
      metaDescription: 'Durchschnittsgröße in den USA: Männer ca. 175 cm, Frauen ca. 163 cm (NHANES). Tabelle nach Bundesstaaten, größte vs. kleinste Bundesstaaten und der 100-Jahres-Trend.',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6 Min. Lesezeit',
      badge: 'Referenz-Guide',
      tocTitle: 'In diesem Artikel',
      intro: {
        lead: 'Die Durchschnittsgröße in den USA beträgt etwa 5 Fuß 9 Zoll (175 cm) für Männer und 5 Fuß 4 Zoll (163 cm) für Frauen — laut gemessenen Daten der National Health and Nutrition Examination Survey (NHANES).',
        paragraphs: [
          'Das sind die nationalen Werte — doch die USA haben nicht eine einzige Körpergröße. Bundesstaaten des oberen Mittleren Westens wie Montana und Minnesota sind messbar größer als Staaten wie Hawaii und New Mexico, und die Wachstumsgeschichte des Landes im letzten Jahrhundert sieht ganz anders aus als die Europas.',
          'Im Folgenden: die nationalen Zahlen im Detail, eine Tabelle mit Werten nach Bundesstaaten aus Umfragedaten sowie der 100-Jahres-Trend, der Amerika vom größten Land der Welt ins Mittelfeld brachte.',
        ],
      },
      sections: [
        {
          id: 'national-averages',
          heading: 'Die nationalen Werte: 175 cm und 163 cm',
          paragraphs: [
            'Die verlässlichsten Zahlen stammen aus NHANES, durchgeführt von der CDC — im Gegensatz zu den meisten Umfragen werden die Menschen dort tatsächlich vermessen statt nur gefragt. Die gängigsten gemessenen Durchschnittswerte für Erwachsene in den USA sind:',
          ],
          bulletPoints: [
            'Männer: etwa 5 Fuß 9 Zoll (175 cm)',
            'Frauen: etwa 5 Fuß 4 Zoll (163 cm)',
          ],
          callout: {
            type: 'tip',
            text: 'Gemessene Durchschnittswerte liegen etwa einen halben bis einen Zoll unter den selbst angegebenen Umfragewerten — die meisten runden bei der Frage nach oben. Vertraue gemessenen Daten (wie NHANES) mehr als Umfragewerten.',
          },
        },
        {
          id: 'by-state',
          heading: 'Durchschnittsgröße nach Bundesstaat (Tabelle)',
          paragraphs: [
            'Daten zur Körpergröße auf Bundesstaatenebene sind schwerer zu bekommen — keine nationale Erhebung veröffentlicht gemessene Werte für jeden Bundesstaat. Die folgende Tabelle fasst Näherungswerte aus selbst angegebenen Umfragedaten (etwa BRFSS der CDC) und veröffentlichten Bundesstaaten-Vergleichen zusammen. Betrachte sie als Schätzwerte: Selbstangaben fallen tendenziell zu hoch aus, und die Methoden unterscheiden sich je nach Quelle.',
          ],
          table: {
            headers: [
              'Bundesstaat',
              'Männer (ca.)',
              'Frauen (ca.)',
            ],
            rows: [
              [
                'Montana',
                '5\'11"',
                '5\'6"',
              ],
              [
                'Minnesota',
                '5\'11"',
                '5\'6"',
              ],
              [
                'North Dakota',
                '5\'11"',
                '5\'6"',
              ],
              [
                'South Dakota',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Nebraska',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Kansas',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Iowa',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wisconsin',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Wyoming',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Colorado',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Vermont',
                '5\'10"',
                '5\'5"',
              ],
              [
                'Oregon',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Washington',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Texas',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Kalifornien',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Florida',
                '5\'9"',
                '5\'4"',
              ],
              [
                'New York',
                '5\'9"',
                '5\'4"',
              ],
              [
                'Mississippi',
                '5\'8"',
                '5\'4"',
              ],
              [
                'New Mexico',
                '5\'8"',
                '5\'3"',
              ],
              [
                'Hawaii',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: 'Näherungswerte aus selbst angegebenen Umfragedaten (z. B. CDC BRFSS) und veröffentlichten Bundesstaaten-Vergleichen. Selbst angegebene Größen liegen typischerweise über gemessenen Werten — als groben Vergleich nutzen, nicht als exakte Messungen.',
          },
        },
        {
          id: 'trend',
          heading: 'Der 100-Jahres-Trend: vom Spitzenreiter zum Stillstand',
          paragraphs: [
            'Vor einem Jahrhundert gehörten die Amerikaner zu den größten Menschen der Welt. In den USA geborene Männer um 1914 waren im Schnitt fast so groß wie heute — während ein Großteil Europas zurücklag, gebremst durch schlechtere Ernährung und härtere Lebensbedingungen.',
            'Dann kreuzten sich die Linien. Zwischen den 1950er- und 1980er-Jahren legte Nordeuropa mit jeder Generation weiter zu, während das amerikanische Wachstum stagnierte. Die Niederlande, Dänemark und ihre Nachbarn überholten die USA und schauten nie zurück.',
            'Forscher nennen einige Gründe: nahezu flächendeckend gute Kinderernährung in Europa, starke Gesundheitssysteme — und auf amerikanischer Seite die wachsende wirtschaftliche Ungleichheit, die dazu führt, dass der nationale Durchschnitt Gruppen von Kindern verdeckt, die nie die Ernährung bekamen, um ihr volles Wachstumspotenzial zu erreichen.',
          ],
          callout: {
            type: 'note',
            text: 'Der US-Stillstand bedeutet nicht, dass Amerikaner schrumpfen — sondern dass sie aufgehört haben zuzulegen, während andere Länder aufholten und sie überholten.',
          },
        },
        {
          id: 'where-do-you-stand',
          heading: 'Wo stehst du?',
          paragraphs: [
            'Nationale und bundesstaatliche Durchschnittswerte sind nützlicher Kontext — doch die Zahl, die zählt, ist deine eigene: korrekt gemessen, morgens, barfuß an einer Wand.',
            'Vergleiche deine Größe mit dem US-Durchschnitt oder stelle dich Seite an Seite mit jemand anderem:',
          ],
          link: {
            text: '→ Größenrechner öffnen',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: 'Welcher Bundesstaat hat die größten Menschen?',
          answer: 'Die Bundesstaaten des oberen Mittleren Westens liegen in Umfragedaten durchgehend vorn — Montana, Minnesota und North Dakota führen die meisten Bundesstaaten-Rankings an, mit Männern im Schnitt um 5\'11". Beachte: Bundesstaaten-Werte sind Näherungen aus selbst angegebenen Umfragen, nicht aus gemessenen Daten.',
        },
        {
          question: 'Werden Amerikaner immer größer?',
          answer: 'Eigentlich nicht — die Durchschnittsgröße in den USA ist seit den 1970er–80er-Jahren ungefähr gleich geblieben. Die großen amerikanischen Zuwächse gab es früher im 20. Jahrhundert; seitdem haben Nordeuropa und andere Regionen aufgeholt und die USA überholt.',
        },
        {
          question: 'Wie groß ist der durchschnittliche Mann in den USA?',
          answer: 'Etwa 5 Fuß 9 Zoll (175 cm), laut gemessenen NHANES-Daten der CDC. Selbst angegebene Umfragen liefern etwas höhere Werte, weil Menschen tendenziell aufrunden.',
        },
        {
          question: 'Sind 5\'10" groß für einen Mann in den USA?',
          answer: 'Es liegt leicht über dem Durchschnitt — etwa das 60. bis 65. Perzentil unter amerikanischen Männern. In den größten Bundesstaaten wie Montana oder Minnesota ist es eher Durchschnitt, während es in kleineren Bundesstaaten mehr auffällt.',
        },
      ],
      relatedLinks: [
        {
          text: 'Größenrechner',
          href: '/height-calculator/',
        },
        {
          text: 'Größenvergleich',
          href: '/compare/',
        },
        {
          text: 'Durchschnittsgröße nach Land',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    hi: {
      id: 'avg-height-us',
      slug: 'america-me-ausat-lambai',
      title: 'अमेरिका में औसत लंबाई: पुरुष, महिलाएं और राज्यवार आंकड़े',
      subtitle: 'राष्ट्रीय आंकड़े, राज्य-दर-राज्य तुलना जो आपको कहीं और नहीं मिलेगी, और 100 सालों में अमेरिकी लंबाई कैसे बदली।',
      metaDescription: 'अमेरिका में औसत लंबाई: पुरुष ~5\'9", महिलाएं ~5\'4" (NHANES)। राज्यवार तालिका, सबसे लंबे व सबसे छोटे राज्य, और 100 साल का ट्रेंड।',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6 मिनट में पढ़ें',
      badge: 'संदर्भ गाइड',
      tocTitle: 'इस लेख में',
      intro: {
        lead: 'राष्ट्रीय स्वास्थ्य और पोषण परीक्षा सर्वेक्षण (NHANES) के मापे गए आंकड़ों के अनुसार, संयुक्त राज्य अमेरिका में औसत लंबाई पुरुषों के लिए लगभग 5 फीट 9 इंच (175 सेमी) और महिलाओं के लिए 5 फीट 4 इंच (163 सेमी) है।',
        paragraphs: [
          'ये राष्ट्रीय आंकड़े हैं — लेकिन अमेरिका एक ही लंबाई का नहीं है। मोंटाना और मिनेसोटा जैसे अपर-मिडवेस्टर्न राज्य हवाई और न्यू मेक्सिको जैसे राज्यों से काफ़ी लंबे मापे जाते हैं, और पिछली सदी में देश की वृद्धि की कहानी यूरोप से बिल्कुल अलग दिखती है।',
          'नीचे: राष्ट्रीय आंकड़ों की व्याख्या, सर्वे डेटा से संकलित राज्य-दर-राज्य तालिका, और 100 साल का ट्रेंड जिसने अमेरिका को दुनिया के सबसे लंबे देश से बीच की कतार में पहुंचा दिया।',
        ],
      },
      sections: [
        {
          id: 'national-averages',
          heading: 'राष्ट्रीय आंकड़े: 5\'9" और 5\'4"',
          paragraphs: [
            'सबसे भरोसेमंद आंकड़े NHANES से आते हैं, जो CDC द्वारा चलाया जाता है — ज़्यादातर सर्वेक्षणों से अलग, यह लोगों से पूछने के बजाय उन्हें वास्तव में मापता है। अमेरिकी वयस्कों के लिए आमतौर पर उद्धृत मापे गए औसत इस प्रकार हैं:',
          ],
          bulletPoints: [
            'पुरुष: लगभग 5 फीट 9 इंच (175 सेमी)',
            'महिलाएं: लगभग 5 फीट 4 इंच (163 सेमी)',
          ],
          callout: {
            type: 'tip',
            text: 'मापे गए औसत स्व-रिपोर्टेड सर्वेक्षणों से लगभग आधा इंच से एक इंच कम होते हैं — पूछने पर ज़्यादातर लोग अपनी लंबाई बढ़ाकर बताते हैं। पोल के आंकड़ों के बजाय मापे गए डेटा (जैसे NHANES) पर भरोसा करें।',
          },
        },
        {
          id: 'by-state',
          heading: 'राज्यवार औसत लंबाई (तालिका)',
          paragraphs: [
            'राज्य-स्तरीय लंबाई का डेटा मिलना मुश्किल है — कोई भी राष्ट्रीय सर्वेक्षण हर राज्य की मापी हुई लंबाई प्रकाशित नहीं करता। नीचे दी गई तालिका स्व-रिपोर्टेड सर्वे डेटा (जैसे CDC का BRFSS) और प्रकाशित राज्य तुलनाओं से संकलित अनुमानित आंकड़े देती है। इन्हें अनुमान मानें: स्व-रिपोर्टेड संख्याएं ज़्यादा होती हैं, और स्रोतों के बीच तरीके अलग-अलग होते हैं।',
          ],
          table: {
            headers: [
              'राज्य',
              'पुरुष (लगभग)',
              'महिलाएं (लगभग)',
            ],
            rows: [
              [
                'मोंटाना',
                '5\'11"',
                '5\'6"',
              ],
              [
                'मिनेसोटा',
                '5\'11"',
                '5\'6"',
              ],
              [
                'नॉर्थ डकोटा',
                '5\'11"',
                '5\'6"',
              ],
              [
                'साउथ डकोटा',
                '5\'10"',
                '5\'5"',
              ],
              [
                'नेब्रास्का',
                '5\'10"',
                '5\'5"',
              ],
              [
                'कैनसस',
                '5\'10"',
                '5\'5"',
              ],
              [
                'आयोवा',
                '5\'10"',
                '5\'5"',
              ],
              [
                'विस्कॉन्सिन',
                '5\'10"',
                '5\'5"',
              ],
              [
                'वायोमिंग',
                '5\'10"',
                '5\'5"',
              ],
              [
                'कोलोराडो',
                '5\'10"',
                '5\'5"',
              ],
              [
                'वर्मोंट',
                '5\'10"',
                '5\'5"',
              ],
              [
                'ओरेगन',
                '5\'9"',
                '5\'4"',
              ],
              [
                'वॉशिंगटन',
                '5\'9"',
                '5\'4"',
              ],
              [
                'टेक्सस',
                '5\'9"',
                '5\'4"',
              ],
              [
                'कैलिफ़ोर्निया',
                '5\'9"',
                '5\'4"',
              ],
              [
                'फ़्लोरिडा',
                '5\'9"',
                '5\'4"',
              ],
              [
                'न्यू यॉर्क',
                '5\'9"',
                '5\'4"',
              ],
              [
                'मिसिसिपी',
                '5\'8"',
                '5\'4"',
              ],
              [
                'न्यू मेक्सिको',
                '5\'8"',
                '5\'3"',
              ],
              [
                'हवाई',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: 'स्व-रिपोर्टेड सर्वे डेटा (जैसे CDC BRFSS) और प्रकाशित राज्य तुलनाओं से संकलित अनुमानित मान। स्व-रिपोर्टेड लंबाइयां आमतौर पर मापे गए मानों से ज़्यादा होती हैं — इन्हें मोटे अनुमान के रूप में लें, सटीक माप के रूप में नहीं।',
          },
        },
        {
          id: 'trend',
          heading: '100 साल का ट्रेंड: सबसे लंबे से स्थिरता तक',
          paragraphs: [
            'एक सदी पहले, अमेरिकी दुनिया के सबसे लंबे लोगों में थे। 1914 के आसपास जन्मे अमेरिकी पुरुषों की औसत लंबाई आज के आंकड़ों के करीब थी — जबकि यूरोप का बड़ा हिस्सा पीछे था, खराब पोषण और कठिन जीवन स्थितियों के कारण।',
            'फिर रेखाएं पार हो गईं। 1950 से 1980 के दशक के बीच, उत्तरी यूरोप हर पीढ़ी के साथ लंबाई बढ़ाता रहा जबकि अमेरिकी वृद्धि रुक गई। नीदरलैंड, डेनमार्क और उनके पड़ोसियों ने अमेरिका को पीछे छोड़ दिया और फिर कभी पीछे मुड़कर नहीं देखा।',
            'शोधकर्ता कुछ कारण बताते हैं: यूरोप में बचपन के अच्छे पोषण तक लगभग सार्वभौमिक पहुंच, मज़बूत सार्वजनिक स्वास्थ्य प्रणालियां, और — अमेरिका के मामले में — बढ़ती आर्थिक असमानता, जिसका मतलब है कि राष्ट्रीय औसत उन बच्चों के समूहों को छिपाता है जिन्हें अपनी पूरी लंबाई तक पहुंचने के लिए ज़रूरी पोषण कभी नहीं मिला।',
          ],
          callout: {
            type: 'note',
            text: 'अमेरिकी स्थिरता का मतलब यह नहीं है कि अमेरिकी छोटे हो रहे हैं — इसका मतलब है कि उन्होंने बढ़ना बंद कर दिया जबकि अन्य देश पकड़ में आए और आगे निकल गए।',
          },
        },
        {
          id: 'where-do-you-stand',
          heading: 'आप कहां खड़े हैं?',
          paragraphs: [
            'राष्ट्रीय और राज्य औसत उपयोगी संदर्भ हैं, लेकिन जो संख्या मायने रखती है वह आपकी है — सही तरीके से मापी गई, सुबह के समय, दीवार के सहारे नंगे पैर।',
            'अपनी लंबाई की तुलना अमेरिकी औसत से करें, या किसी और के साथ कंधे से कंधा मिलाकर देखें:',
          ],
          link: {
            text: '→ हाइट कैलकुलेटर खोलें',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: 'सबसे लंबे लोग किस राज्य में हैं?',
          answer: 'अपर-मिडवेस्टर्न राज्य सर्वे डेटा में लगातार सबसे लंबे आते हैं — मोंटाना, मिनेसोटा और नॉर्थ डकोटा ज़्यादातर राज्य रैंकिंग में आगे रहते हैं, जहां पुरुषों की औसत लंबाई लगभग 5\'11" है। ध्यान रखें कि राज्य के आंकड़े अनुमानित हैं, मापे गए डेटा के बजाय स्व-रिपोर्टेड सर्वेक्षणों से संकलित।',
        },
        {
          question: 'क्या अमेरिकी लंबे होते जा रहे हैं?',
          answer: 'असल में नहीं — 1970-80 के दशक से अमेरिका में औसत लंबाई लगभग स्थिर रही है। बड़ा अमेरिकी उछाल 20वीं सदी की शुरुआत में हुआ था; उसके बाद से उत्तरी यूरोप और अन्य क्षेत्रों ने पकड़ बनाई और अमेरिका को पीछे छोड़ दिया।',
        },
        {
          question: 'अमेरिका में पुरुष की औसत लंबाई कितनी है?',
          answer: 'CDC के मापे गए NHANES डेटा के आधार पर लगभग 5 फीट 9 इंच (175 सेमी)। स्व-रिपोर्टेड सर्वेक्षण थोड़े ज़्यादा आंकड़े देते हैं क्योंकि लोग बढ़ाकर बताते हैं।',
        },
        {
          question: 'क्या अमेरिका में पुरुष के लिए 5\'10" लंबा है?',
          answer: 'यह औसत से थोड़ा ऊपर है — अमेरिकी पुरुषों में लगभग 60वें से 65वें पर्सेंटाइल के आसपास। मोंटाना या मिनेसोटा जैसे सबसे लंबे राज्यों में यह औसत के करीब है, जबकि छोटे राज्यों में यह ज़्यादा नज़र आता है।',
        },
      ],
      relatedLinks: [
        {
          text: 'हाइट कैलकुलेटर',
          href: '/height-calculator/',
        },
        {
          text: 'लंबाई तुलना',
          href: '/compare/',
        },
        {
          text: 'देश के अनुसार औसत लंबाई',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    ja: {
      id: 'avg-height-us',
      slug: 'amerika-heikin-shincho',
      title: 'アメリカの平均身長：男性・女性・州別データ',
      subtitle: '全米の平均値、他では見られない州別の内訳、そして過去100年でアメリカ人の身長がどう変わったのか。',
      metaDescription: 'アメリカの平均身長：男性は約175cm、女性は約163cm（NHANES）。州別ランキング表、最も高い州と低い州、100年の推移を解説。',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6分で読める',
      badge: 'データガイド',
      tocTitle: 'この記事の内容',
      intro: {
        lead: 'アメリカ合衆国の平均身長は、国民健康栄養調査（NHANES）の実測データによると、男性が約5フィート9インチ（175cm）、女性が約5フィート4インチ（163cm）です。',
        paragraphs: [
          'これが全米の平均値です——しかしアメリカはひとつの身長では語れません。モンタナ州やミネソタ州といった中西部上部の州は、ハワイ州やニューメキシコ州より明らかに高く、過去100年の身長の伸び方もヨーロッパとはまったく違う軌跡を描いています。',
          '以下では、全米の平均値の解説、調査データからまとめた州別の比較表、そして「世界一高かった国」から「中位」に転落した100年の物語を紹介します。',
        ],
      },
      sections: [
        {
          id: 'national-averages',
          heading: '全米の平均値：男性175cm・女性163cm',
          paragraphs: [
            '最も信頼できる数字はCDCが実施するNHANESから得られます。多くの調査と違い、自己申告ではなく実際に測定しているのが特徴です。アメリカの成人について広く引用されている実測平均値は次のとおりです。',
          ],
          bulletPoints: [
            '男性：約5フィート9インチ（175cm）',
            '女性：約5フィート4インチ（163cm）',
          ],
          callout: {
            type: 'tip',
            text: '実測値は自己申告の調査より0.5〜1インチほど低く出ます——人は聞かれるとつい高めに答えてしまうものです。アンケートの数字より、NHANESのような実測データを信じましょう。',
          },
        },
        {
          id: 'by-state',
          heading: '州別の平均身長（一覧表）',
          paragraphs: [
            '州レベルの身長データは入手が難しいのが現実です——全州の実測身長を公表している全国調査は存在しません。以下の表は、CDCのBRFSSなどの自己申告調査や公表された州別比較からまとめた概算値です。推定値として扱ってください：自己申告は高めに出がちで、調査方法も情報源によって異なります。',
          ],
          table: {
            headers: [
              '州',
              '男性（概算）',
              '女性（概算）',
            ],
            rows: [
              [
                'モンタナ州',
                '5\'11"',
                '5\'6"',
              ],
              [
                'ミネソタ州',
                '5\'11"',
                '5\'6"',
              ],
              [
                'ノースダコタ州',
                '5\'11"',
                '5\'6"',
              ],
              [
                'サウスダコタ州',
                '5\'10"',
                '5\'5"',
              ],
              [
                'ネブラスカ州',
                '5\'10"',
                '5\'5"',
              ],
              [
                'カンザス州',
                '5\'10"',
                '5\'5"',
              ],
              [
                'アイオワ州',
                '5\'10"',
                '5\'5"',
              ],
              [
                'ウィスコンシン州',
                '5\'10"',
                '5\'5"',
              ],
              [
                'ワイオミング州',
                '5\'10"',
                '5\'5"',
              ],
              [
                'コロラド州',
                '5\'10"',
                '5\'5"',
              ],
              [
                'バーモント州',
                '5\'10"',
                '5\'5"',
              ],
              [
                'オレゴン州',
                '5\'9"',
                '5\'4"',
              ],
              [
                'ワシントン州',
                '5\'9"',
                '5\'4"',
              ],
              [
                'テキサス州',
                '5\'9"',
                '5\'4"',
              ],
              [
                'カリフォルニア州',
                '5\'9"',
                '5\'4"',
              ],
              [
                'フロリダ州',
                '5\'9"',
                '5\'4"',
              ],
              [
                'ニューヨーク州',
                '5\'9"',
                '5\'4"',
              ],
              [
                'ミシシッピ州',
                '5\'8"',
                '5\'4"',
              ],
              [
                'ニューメキシコ州',
                '5\'8"',
                '5\'3"',
              ],
              [
                'ハワイ州',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: '自己申告調査（CDCのBRFSSなど）や公表された州別比較からまとめた概算値です。自己申告の身長は実測より高めに出る傾向があります——正確な測定値ではなく大まかな比較としてお使いください。',
          },
        },
        {
          id: 'trend',
          heading: '100年の推移：世界一から停滞へ',
          paragraphs: [
            '100年前、アメリカ人は世界で最も背の高い人々のひとりでした。1914年頃のアメリカ生まれの男性の平均身長はほぼ現在の水準——一方、ヨーロッパの多くは栄養不足と厳しい生活環境に足を引っ張られ、大きく後れを取っていました。',
            'その後、逆転が起きます。1950年代から1980年代にかけて、北欧諸国は世代を重ねるごとに身長を伸ばし続けた一方、アメリカの伸びは止まってしまいました。オランダ、デンマークとその周辺国がアメリカを追い抜き、二度と振り返ることはありませんでした。',
            '研究者が挙げる理由はいくつかあります：ヨーロッパにおける幼少期の栄養へのほぼ普遍的なアクセス、充実した公衆衛生制度、そしてアメリカ側の要因としては拡大する経済格差——全国平均の裏には、十分な栄養を得られず潜在的な身長に届かなかった子どもたちが隠れているのです。',
          ],
          callout: {
            type: 'note',
            text: 'アメリカの停滞は「縮んでいる」という意味ではありません——伸びが止まった間に、他の国々が追いつき、追い越していったということです。',
          },
        },
        {
          id: 'where-do-you-stand',
          heading: 'あなたはどこに位置する？',
          paragraphs: [
            '全米や州の平均値は良い目安になりますが、本当に大切なのはあなた自身の数字——朝、裸足で壁に背を当てて、正しく測った値です。',
            'アメリカの平均と自分の身長を比べてみたり、誰かと並べて比較してみましょう：',
          ],
          link: {
            text: '→ 身長計算ツールを開く',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: '最も身長が高い州はどこ？',
          answer: '調査データでは中西部上部の州が常に上位に来ます——モンタナ州、ミネソタ州、ノースダコタ州が多くの州別ランキングで首位を争い、男性の平均は5\'11"前後です。ただし州別の数値は実測ではなく自己申告調査からまとめた概算値である点にご注意ください。',
        },
        {
          question: 'アメリカ人はどんどん背が高くなっている？',
          answer: '実はそうでもありません——アメリカの平均身長は1970〜80年代以降ほぼ横ばいです。大きな伸びは20世紀前半に起き、それ以降は北欧をはじめとする地域が追いつき、追い越していきました。',
        },
        {
          question: 'アメリカ人男性の平均身長は？',
          answer: 'CDCのNHANES実測データで約5フィート9インチ（175cm）です。自己申告の調査では少し高めの数字が出ます——人はつい高めに答えてしまうからです。',
        },
        {
          question: 'アメリカ人男性にとって5\'10"は高い方？',
          answer: '平均より少し上——アメリカ人男性のおよそ60〜65パーセンタイルにあたります。モンタナ州やミネソタ州のような最も高い州ではほぼ平均に近く、身長の低い州ではより目立つ水準です。',
        },
      ],
      relatedLinks: [
        {
          text: '身長計算ツール',
          href: '/height-calculator/',
        },
        {
          text: '身長比較',
          href: '/compare/',
        },
        {
          text: '国別の平均身長',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    ko: {
      id: 'avg-height-us',
      slug: 'migug-pyeonggyun-ki',
      title: '미국 평균 키: 남녀 및 주별 통계',
      subtitle: '미국 전체 평균 수치, 어디에서도 찾기 힘든 주별 상세 표, 그리고 지난 100년간 미국인 키의 변화까지 한 번에 정리했습니다.',
      metaDescription: '미국 평균 키: 남성 약 5피트 9인치, 여성 약 5피트 4인치(NHANES). 주별 비교표, 가장 큰 주와 작은 주, 100년 추세를 확인하세요.',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6분 읽기',
      badge: '참고 가이드',
      tocTitle: '이 글의 목차',
      intro: {
        lead: '미국의 평균 키는 남성 약 5피트 9인치(175cm), 여성 약 5피트 4인치(163cm)입니다. 미국 국민건강영양조사(NHANES)의 실측 데이터를 기준으로 한 수치입니다.',
        paragraphs: [
          '이는 전국 평균일 뿐, 미국 전체가 같은 키는 아닙니다. 몬태나, 미네소타 같은 중북부 주는 하와이, 뉴멕시코 같은 주보다 확연히 큰 편이며, 지난 100년간 미국인의 키 변화는 유럽과 전혀 다른 양상을 보여줍니다.',
          '아래에서는 전국 평균 수치의 의미, 설문 자료를 바탕으로 정리한 주별 비교표, 그리고 한때 세계에서 가장 컸던 미국이 중간으로 내려앉기까지의 100년 추세를 살펴봅니다.',
        ],
      },
      sections: [
        {
          id: 'national-averages',
          heading: '전국 평균: 5\'9"와 5\'4"',
          paragraphs: [
            '가장 신뢰할 만한 수치는 미국 질병통제예방센터(CDC)가 운영하는 NHANES에서 나옵니다. 대부분의 설문이 "본인에게 물어보는" 방식인 것과 달리, NHANES는 실제로 사람을 직접 측정합니다. 미국 성인의 대표적인 실측 평균은 다음과 같습니다.',
          ],
          bulletPoints: [
            '남성: 약 5피트 9인치(175cm)',
            '여성: 약 5피트 4인치(163cm)',
          ],
          callout: {
            type: 'tip',
            text: '실측 평균은 자기보고식 설문보다 보통 0.5~1인치 정도 낮게 나옵니다. 물어보면 대부분 키를 조금 부풀려 답하기 때문입니다. 여론조사 수치보다는 NHANES 같은 실측 데이터를 신뢰하세요.',
          },
        },
        {
          id: 'by-state',
          heading: '주별 평균 키 (표)',
          paragraphs: [
            '주 단위의 키 데이터는 구하기가 어렵습니다. 전 국민을 대상으로 주별 실측 키를 발표하는 조사는 없기 때문입니다. 아래 표는 자기보고식 설문 자료(CDC의 BRFSS 등)와 공개된 주별 비교 자료를 모아 정리한 근사치입니다. 자기보고 수치는 실제보다 높게 나오는 경향이 있고 출처마다 방식이 다르므로, 대략적인 비교용으로만 참고하세요.',
          ],
          table: {
            headers: [
              '주',
              '남성 (근사치)',
              '여성 (근사치)',
            ],
            rows: [
              [
                '몬태나',
                '5\'11"',
                '5\'6"',
              ],
              [
                '미네소타',
                '5\'11"',
                '5\'6"',
              ],
              [
                '노스다코타',
                '5\'11"',
                '5\'6"',
              ],
              [
                '사우스다코타',
                '5\'10"',
                '5\'5"',
              ],
              [
                '네브래스카',
                '5\'10"',
                '5\'5"',
              ],
              [
                '캔자스',
                '5\'10"',
                '5\'5"',
              ],
              [
                '아이오와',
                '5\'10"',
                '5\'5"',
              ],
              [
                '위스콘신',
                '5\'10"',
                '5\'5"',
              ],
              [
                '와이오밍',
                '5\'10"',
                '5\'5"',
              ],
              [
                '콜로라도',
                '5\'10"',
                '5\'5"',
              ],
              [
                '버몬트',
                '5\'10"',
                '5\'5"',
              ],
              [
                '오리건',
                '5\'9"',
                '5\'4"',
              ],
              [
                '워싱턴',
                '5\'9"',
                '5\'4"',
              ],
              [
                '텍사스',
                '5\'9"',
                '5\'4"',
              ],
              [
                '캘리포니아',
                '5\'9"',
                '5\'4"',
              ],
              [
                '플로리다',
                '5\'9"',
                '5\'4"',
              ],
              [
                '뉴욕',
                '5\'9"',
                '5\'4"',
              ],
              [
                '미시시피',
                '5\'8"',
                '5\'4"',
              ],
              [
                '뉴멕시코',
                '5\'8"',
                '5\'3"',
              ],
              [
                '하와이',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: '자기보고식 설문 자료(예: CDC BRFSS)와 공개된 주별 비교 자료를 모아 정리한 근사치입니다. 자기보고 키는 실측보다 높게 나오는 경향이 있으므로, 정확한 측정값이 아닌 대략적인 비교용으로 참고하세요.',
          },
        },
        {
          id: 'trend',
          heading: '100년 추세: 세계 최고에서 정체까지',
          paragraphs: [
            '100년 전만 해도 미국인은 세계에서 가장 큰 편에 속했습니다. 1914년경 미국 태생 남성의 평균 키는 지금과 비슷했는데, 당시 유럽 대부분은 열악한 영양 상태와 가혹한 생활 환경 때문에 뒤처져 있었습니다.',
            '그러다 역전이 일어났습니다. 1950년대부터 1980년대 사이, 북유럽은 세대마다 키가 계속 커진 반면 미국은 성장이 멈췄습니다. 네덜란드, 덴마크와 이웃 국가들이 미국을 추월했고, 그 격차는 지금까지 이어지고 있습니다.',
            '연구자들은 몇 가지 이유를 꼽습니다. 유럽의 유년기 영양 상태가 거의 보편적으로 좋아진 것, 탄탄한 공중보건 시스템, 그리고 미국의 경우 심화되는 경제적 불평등입니다. 전국 평균이라는 숫자 뒤에는 제대로 된 영양을 공급받지 못해 잠재 키에 도달하지 못한 아이들이 숨어 있습니다.',
          ],
          callout: {
            type: 'note',
            text: '미국의 정체가 "미국인이 작아지고 있다"는 뜻은 아닙니다. 미국이 제자리걸음을 하는 동안 다른 나라들이 따라잡고 추월했다는 의미입니다.',
          },
        },
        {
          id: 'where-do-you-stand',
          heading: '당신의 키는 어느 정도일까요?',
          paragraphs: [
            '전국 평균과 주별 평균은 좋은 참고 자료지만, 정작 중요한 것은 당신의 키입니다. 아침에, 맨발로 벽에 기대어 정확히 측정한 수치 말입니다.',
            '미국 평균과 자신의 키를 비교해 보거나, 다른 사람과 나란히 세워 비교해 보세요.',
          ],
          link: {
            text: '→ 키 계산기 열기',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: '미국에서 키가 가장 큰 주는 어디인가요?',
          answer: '설문 자료에서 일관되게 가장 크게 나오는 곳은 중북부 주들입니다. 몬태나, 미네소타, 노스다코타가 대부분의 주별 순위에서 선두를 차지하며, 남성은 평균 5\'11" 정도입니다. 다만 주별 수치는 실측이 아닌 자기보고식 설문을 모아 정리한 근사치라는 점을 염두에 두세요.',
        },
        {
          question: '미국인은 계속 커지고 있나요?',
          answer: '그렇지 않습니다. 미국의 평균 키는 1970~80년대 이후 거의 제자리걸음입니다. 미국인의 큰 성장은 20세기 전반에 이미 일어났고, 그 이후 북유럽과 다른 지역이 따라잡고 추월했습니다.',
        },
        {
          question: '미국 남성의 평균 키는 얼마인가요?',
          answer: 'CDC의 NHANES 실측 데이터 기준으로 약 5피트 9인치(175cm)입니다. 자기보고식 설문에서는 사람들이 키를 부풀려 답하는 경향이 있어 수치가 조금 더 높게 나옵니다.',
        },
        {
          question: '미국 남성 기준으로 5\'10"는 큰 편인가요?',
          answer: '평균보다 조금 큰 편입니다. 미국 남성 중 대략 60~65번째 백분위에 해당합니다. 몬태나나 미네소타 같은 키 큰 주에서는 평균에 가깝고, 키가 작은 주에서는 더 눈에 띄는 편입니다.',
        },
      ],
      relatedLinks: [
        {
          text: '키 계산기',
          href: '/height-calculator/',
        },
        {
          text: '키 비교하기',
          href: '/compare/',
        },
        {
          text: '국가별 평균 키',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    ar: {
      id: 'avg-height-us',
      slug: 'mutawassit-tool-fi-amrika',
      title: 'متوسط الطول في الولايات المتحدة: الرجال والنساء وبحسب الولاية',
      subtitle: 'الأرقام الوطنية، وجدول مفصّل بحسب الولاية لن تجده في أي مكان آخر، وكيف تغيّر طول الأمريكيين على مدى ١٠٠ عام.',
      metaDescription: 'متوسط الطول في الولايات المتحدة: الرجال نحو ٥ أقدام و٩ بوصات، والنساء نحو ٥ أقدام و٤ بوصات (حسب مسح NHANES). جدول بحسب الولاية، والولايات الأطول مقابل الأقصر، واتجاه ١٠٠ عام.',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '٦ دقائق للقراءة',
      badge: 'دليل مرجعي',
      tocTitle: 'في هذا المقال',
      intro: {
        lead: 'يبلغ متوسط الطول في الولايات المتحدة حوالي ٥ أقدام و٩ بوصات (١٧٥ سم) للرجال و٥ أقدام و٤ بوصات (١٦٣ سم) للنساء، وذلك وفق بيانات مُقاسة من المسح الوطني للصحة والتغذية (NHANES).',
        paragraphs: [
          'هذه هي الأرقام الوطنية — لكن الولايات المتحدة ليست طولاً واحداً. فالولايات في الغرب الأوسط الأعلى مثل مونتانا ومينيسوتا تُسجَّل أرقاماً أطول بشكل ملحوظ من ولايات مثل هاواي ونيومكسيكو، وقصة نمو البلاد على مدى القرن الماضي تبدو مختلفة تماماً عن قصة أوروبا.',
          'فيما يلي: الأرقام الوطنية موضحة، وجدول بحسب الولاية مُجمَّع من بيانات المسوح، واتجاه ١٠٠ عام الذي أخذ أمريكا من صدارة العالم في الطول إلى وسط الترتيب.',
        ],
      },
      sections: [
        {
          id: 'national-averages',
          heading: 'الأرقام الوطنية: ٥ أقدام و٩ بوصات و٥ أقدام و٤ بوصات',
          paragraphs: [
            'أكثر الأرقام موثوقية تأتي من مسح NHANES الذي يجريه مركز السيطرة على الأمراض (CDC) — فخلافاً لمعظم الاستطلاعات، يقيس الأشخاص فعلياً بدلاً من سؤالهم. والمتوسطات المُقاسة الأكثر تداولاً للبالغين الأمريكيين هي:',
          ],
          bulletPoints: [
            'الرجال: حوالي ٥ أقدام و٩ بوصات (١٧٥ سم)',
            'النساء: حوالي ٥ أقدام و٤ بوصات (١٦٣ سم)',
          ],
          callout: {
            type: 'tip',
            text: 'المتوسطات المُقاسة أقل بنصف بوصة إلى بوصة تقريباً من الاستطلاعات التي تعتمد على الإبلاغ الذاتي — فمعظم الناس يبالغون قليلاً عند سؤالهم. ثق بالبيانات المُقاسة (مثل NHANES) أكثر من أرقام استطلاعات الرأي.',
          },
        },
        {
          id: 'by-state',
          heading: 'متوسط الطول بحسب الولاية (جدول)',
          paragraphs: [
            'من الصعب الحصول على بيانات طول على مستوى الولايات — فلا يوجد مسح وطني ينشر الطول المُقاس لكل ولاية. الجدول أدناه يجمع أرقاماً تقريبية من بيانات الاستطلاعات الذاتية (مثل نظام BRFSS التابع لمركز السيطرة على الأمراض) ومقارنات الولايات المنشورة. تعامل معها كتقديرات: فالأرقام المُبلغ عنها ذاتياً تميل للارتفاع، وتختلف المناهج بين المصادر.',
          ],
          table: {
            headers: [
              'الولاية',
              'الرجال (تقريباً)',
              'النساء (تقريباً)',
            ],
            rows: [
              [
                'مونتانا',
                '5\'11"',
                '5\'6"',
              ],
              [
                'مينيسوتا',
                '5\'11"',
                '5\'6"',
              ],
              [
                'داكوتا الشمالية',
                '5\'11"',
                '5\'6"',
              ],
              [
                'داكوتا الجنوبية',
                '5\'10"',
                '5\'5"',
              ],
              [
                'نبراسكا',
                '5\'10"',
                '5\'5"',
              ],
              [
                'كانساس',
                '5\'10"',
                '5\'5"',
              ],
              [
                'آيوا',
                '5\'10"',
                '5\'5"',
              ],
              [
                'ويسكونسن',
                '5\'10"',
                '5\'5"',
              ],
              [
                'وايومنغ',
                '5\'10"',
                '5\'5"',
              ],
              [
                'كولورادو',
                '5\'10"',
                '5\'5"',
              ],
              [
                'فيرمونت',
                '5\'10"',
                '5\'5"',
              ],
              [
                'أوريغون',
                '5\'9"',
                '5\'4"',
              ],
              [
                'واشنطن',
                '5\'9"',
                '5\'4"',
              ],
              [
                'تكساس',
                '5\'9"',
                '5\'4"',
              ],
              [
                'كاليفورنيا',
                '5\'9"',
                '5\'4"',
              ],
              [
                'فلوريدا',
                '5\'9"',
                '5\'4"',
              ],
              [
                'نيويورك',
                '5\'9"',
                '5\'4"',
              ],
              [
                'ميسيسيبي',
                '5\'8"',
                '5\'4"',
              ],
              [
                'نيومكسيكو',
                '5\'8"',
                '5\'3"',
              ],
              [
                'هاواي',
                '5\'8"',
                '5\'3"',
              ],
            ],
            footnote: 'قيم تقريبية مُجمَّعة من بيانات الاستطلاعات الذاتية (مثل BRFSS التابع لمركز السيطرة على الأمراض) ومقارنات الولايات المنشورة. الأطوال المُبلغ عنها ذاتياً عادة أعلى من القيم المُقاسة — استخدمها كمقارنة تقريبية لا كقياسات دقيقة.',
          },
        },
        {
          id: 'trend',
          heading: 'اتجاه ١٠٠ عام: من الصدارة إلى الثبات',
          paragraphs: [
            'قبل قرن من الزمان، كان الأمريكيون من أطول شعوب العالم. فالرجال الأمريكيون المولودون حوالي عام ١٩١٤ كان متوسطهم قريباً من أرقام اليوم — بينما كانت أوروبا متخلفة كثيراً، مقيَّدة بسوء التغذية وظروف معيشية أصعب.',
            'ثم تقاطعت الخطوط. فبين الخمسينيات والثمانينيات، واصلت شمال أوروبا اكتساب الطول مع كل جيل بينما توقف النمو الأمريكي. وتجاوزت هولندا والدنمارك وجيرانهما الولايات المتحدة ولم تنظر إلى الخلف أبداً.',
            'ويشير الباحثون إلى أسباب عدة: شبه تعميم الوصول إلى تغذية طفولة جيدة في أوروبا، وأنظمة صحة عامة قوية، و— في الحالة الأمريكية — تزايد عدم المساواة الاقتصادية، ما يعني أن المتوسط الوطني يُخفي فئات من الأطفال لم يحصلوا أبداً على التغذية اللازمة لبلوغ كامل إمكانات طولهم.',
          ],
          callout: {
            type: 'note',
            text: 'ثبات الولايات المتحدة لا يعني أن الأمريكيين يتقزّمون — بل يعني أنهم توقفوا عن الاكتساب بينما لحقت بهم دول أخرى وتجاوزتهم.',
          },
        },
        {
          id: 'where-do-you-stand',
          heading: 'أين تقف أنت؟',
          paragraphs: [
            'المتوسطات الوطنية ومتوسطات الولايات سياق مفيد، لكن الرقم الذي يهم هو رقمك أنت — مُقاساً بشكل صحيح، في الصباح، حافي القدمين مقابل الحائط.',
            'قارن طولك مع متوسط الولايات المتحدة، أو ضع نفسك جنباً إلى جنب مع شخص آخر:',
          ],
          link: {
            text: '← افتح حاسبة الطول',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: 'ما هي الولاية التي يسكنها أطول الناس؟',
          answer: 'تتصدر ولايات الغرب الأوسط الأعلى باستمرار قوائم الطول في بيانات المسوح — مونتانا ومينيسوتا وداكوتا الشمالية تقود معظم تصنيفات الولايات، بمتوسط يقارب ٥ أقدام و١١ بوصة للرجال. وتذكر أن أرقام الولايات تقريبية، مُجمَّعة من استطلاعات ذاتية لا من بيانات مُقاسة.',
        },
        {
          question: 'هل يزداد الأمريكيون طولاً؟',
          answer: 'ليس حقاً — فمتوسط الطول في الولايات المتحدة ثابت تقريباً منذ السبعينيات والثمانينيات. المكاسب الأمريكية الكبيرة حدثت في وقت أبكر من القرن العشرين؛ ومنذ ذلك الحين لحقت بها شمال أوروبا ومناطق أخرى وتجاوزتها.',
        },
        {
          question: 'ما هو متوسط طول الرجل في الولايات المتحدة؟',
          answer: 'حوالي ٥ أقدام و٩ بوصات (١٧٥ سم)، وفق بيانات NHANES المُقاسة من مركز السيطرة على الأمراض. الاستطلاعات الذاتية تعطي أرقاماً أعلى قليلاً لأن الناس يميلون للتقريب نحو الأعلى.',
        },
        {
          question: 'هل يُعتبر طول ٥ أقدام و١٠ بوصات طويلاً للرجل في الولايات المتحدة؟',
          answer: 'إنه أعلى قليلاً من المتوسط — حوالي الشريحة المئوية ٦٠ إلى ٦٥ بين الرجال الأمريكيين. وفي أطول الولايات مثل مونتانا أو مينيسوتا يقترب من المتوسط، بينما يبرز أكثر في الولايات الأقصر.',
        },
      ],
      relatedLinks: [
        {
          text: 'حاسبة الطول',
          href: '/height-calculator/',
        },
        {
          text: 'مقارنة الطول',
          href: '/compare/',
        },
        {
          text: 'متوسط الطول بحسب الدولة',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    ru: {
      id: 'avg-height-us',
      slug: 'sredniy-rost-v-ssha',
      title: 'Средний рост в США: мужчины, женщины и по штатам',
      subtitle: 'Национальные цифры, разбивка по штатам, которую вы не найдёте больше нигде, и как менялся рост американцев за 100 лет.',
      metaDescription: 'Средний рост в США: мужчины ~175 см, женщины ~163 см (NHANES). Таблица по штатам, самые высокие и самые низкие штаты, тренд за 100 лет.',
      datePublished: '2026-10-11',
      dateModified: '2026-10-11',
      readTime: '6 мин чтения',
      badge: 'Справочник',
      tocTitle: 'В этой статье',
      intro: {
        lead: 'Средний рост в США составляет около 175 см у мужчин и около 163 см у женщин — по данным прямых измерений Национального исследования здоровья и питания (NHANES).',
        paragraphs: [
          'Это общенациональные цифры — но США не едины по росту. В штатах Верхнего Среднего Запада, таких как Монтана и Миннесота, люди заметно выше, чем в таких штатах, как Гавайи и Нью-Мексико. А история роста страны за последнее столетие выглядит совсем иначе, чем в Европе.',
          'Ниже: объяснение национальных показателей, таблица по штатам, составленная на основе данных опросов, и столетний тренд — от самого высокого народа мира до середины рейтинга.',
        ],
      },
      sections: [
        {
          id: 'nacionalnye-cifry',
          heading: 'Национальные цифры: 175 и 163 см',
          paragraphs: [
            'Самые надёжные данные даёт NHANES, которое проводит CDC: в отличие от большинства опросов, там людей измеряют лично, а не спрашивают на словах. По данным прямых измерений средние показатели взрослых американцев таковы:',
          ],
          bulletPoints: [
            'Мужчины: около 175 см (5 футов 9 дюймов)',
            'Женщины: около 163 см (5 футов 4 дюйма)',
          ],
          callout: {
            type: 'tip',
            text: 'Измеренные средние значения примерно на 1–2,5 см ниже, чем по опросам, — люди склонны завышать свой рост, когда их спрашивают. Доверяйте данным прямых измерений (как NHANES), а не цифрам из опросов.',
          },
        },
        {
          id: 'po-shtatam',
          heading: 'Средний рост по штатам (таблица)',
          paragraphs: [
            'Данные по росту на уровне штатов найти сложнее — ни одно национальное исследование не публикует измеренные значения для каждого штата. Таблица ниже объединяет приблизительные цифры из опросов с самооценкой (таких как BRFSS от CDC) и опубликованных сравнений штатов. Относитесь к ним как к оценкам: люди в опросах завышают рост, а методики источников различаются.',
          ],
          table: {
            headers: [
              'Штат',
              'Мужчины (прибл.)',
              'Женщины (прибл.)',
            ],
            rows: [
              [
                'Монтана',
                '5\'11" (180 см)',
                '5\'6" (168 см)',
              ],
              [
                'Миннесота',
                '5\'11" (180 см)',
                '5\'6" (168 см)',
              ],
              [
                'Северная Дакота',
                '5\'11" (180 см)',
                '5\'6" (168 см)',
              ],
              [
                'Южная Дакота',
                '5\'10" (178 см)',
                '5\'5" (165 см)',
              ],
              [
                'Небраска',
                '5\'10" (178 см)',
                '5\'5" (165 см)',
              ],
              [
                'Канзас',
                '5\'10" (178 см)',
                '5\'5" (165 см)',
              ],
              [
                'Айова',
                '5\'10" (178 см)',
                '5\'5" (165 см)',
              ],
              [
                'Висконсин',
                '5\'10" (178 см)',
                '5\'5" (165 см)',
              ],
              [
                'Вайоминг',
                '5\'10" (178 см)',
                '5\'5" (165 см)',
              ],
              [
                'Колорадо',
                '5\'10" (178 см)',
                '5\'5" (165 см)',
              ],
              [
                'Вермонт',
                '5\'10" (178 см)',
                '5\'5" (165 см)',
              ],
              [
                'Орегон',
                '5\'9" (175 см)',
                '5\'4" (163 см)',
              ],
              [
                'Вашингтон',
                '5\'9" (175 см)',
                '5\'4" (163 см)',
              ],
              [
                'Техас',
                '5\'9" (175 см)',
                '5\'4" (163 см)',
              ],
              [
                'Калифорния',
                '5\'9" (175 см)',
                '5\'4" (163 см)',
              ],
              [
                'Флорида',
                '5\'9" (175 см)',
                '5\'4" (163 см)',
              ],
              [
                'Нью-Йорк',
                '5\'9" (175 см)',
                '5\'4" (163 см)',
              ],
              [
                'Миссисипи',
                '5\'8" (173 см)',
                '5\'4" (163 см)',
              ],
              [
                'Нью-Мексико',
                '5\'8" (173 см)',
                '5\'3" (160 см)',
              ],
              [
                'Гавайи',
                '5\'8" (173 см)',
                '5\'3" (160 см)',
              ],
            ],
            footnote: 'Приблизительные значения на основе данных опросов с самооценкой (например, BRFSS от CDC) и опубликованных сравнений штатов. Люди в опросах обычно завышают рост по сравнению с прямыми измерениями — используйте как грубое сравнение, а не как точные измерения.',
          },
        },
        {
          id: 'stoletniy-trend',
          heading: 'Столетний тренд: от лидеров к стагнации',
          paragraphs: [
            'Сто лет назад американцы были одними из самых высоких людей в мире. Мужчины, родившиеся в США около 1914 года, были почти такими же высокими, как сейчас, — в то время как большая часть Европы отставала из-за худшего питания и более тяжёлых условий жизни.',
            'Затем линии пересеклись. Между 1950-ми и 1980-ми годами Северная Европа продолжала прибавлять в росте с каждым поколением, а рост американцев остановился. Нидерланды, Дания и их соседи обогнали США и уже не оглядывались назад.',
            'Исследователи называют несколько причин: почти всеобщий доступ к хорошему детскому питанию в Европе, сильные системы общественного здравоохранения и — в американском случае — растущее экономическое неравенство: средний показатель по стране скрывает группы детей, которые так и не получили питания, необходимого для реализации своего ростового потенциала.',
          ],
          callout: {
            type: 'note',
            text: 'Стагнация в США не означает, что американцы становятся ниже, — это значит, что они перестали расти, пока другие страны догоняли и обгоняли их.',
          },
        },
        {
          id: 'a-vy',
          heading: 'А где вы?',
          paragraphs: [
            'Национальные и штатные средние значения — полезный контекст, но главное число — ваше: измеренное правильно, утром, босиком у стены.',
            'Сравните свой рост со средним по США или встаньте рядом с кем-то другим:',
          ],
          link: {
            text: '→ Открыть калькулятор роста',
            href: '/height-calculator/',
          },
        },
      ],
      faqs: [
        {
          question: 'В каком штате самые высокие люди?',
          answer: 'Штаты Верхнего Среднего Запада стабильно оказываются самыми высокими по данным опросов — Монтана, Миннесота и Северная Дакота возглавляют большинство рейтингов штатов, со средним ростом мужчин около 180 см. Помните: цифры по штатам приблизительные, они основаны на опросах с самооценкой, а не на прямых измерениях.',
        },
        {
          question: 'Американцы становятся выше?',
          answer: 'Не особо — средний рост в США практически не меняется с 1970–80-х годов. Большой скачок роста американцев произошёл раньше, в XX веке; с тех пор Северная Европа и другие регионы догнали США и обогнали их.',
        },
        {
          question: 'Какой средний рост у мужчины в США?',
          answer: 'Около 175 см (5 футов 9 дюймов) — по данным прямых измерений NHANES от CDC. Опросы с самооценкой дают чуть более высокие цифры, потому что люди склонны округлять в большую сторону.',
        },
        {
          question: '178 см — это высокий рост для мужчины в США?',
          answer: 'Это чуть выше среднего — примерно 60–65-й процентиль среди американских мужчин. В самых высоких штатах, таких как Монтана или Миннесота, это ближе к среднему, а в штатах пониже — уже заметно выделяется.',
        },
      ],
      relatedLinks: [
        {
          text: 'Калькулятор роста',
          href: '/height-calculator/',
        },
        {
          text: 'Сравнение роста',
          href: '/compare/',
        },
        {
          text: 'Средний рост по странам',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
  },
};
