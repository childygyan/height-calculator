import type { ScheduledArticle } from '../types';

export const scheduled: ScheduledArticle = {
  publishDate: '2026-10-10',
  articles: {
    en: {
      id: 'what-is-tall',
      slug: 'what-height-is-considered-tall',
      title: 'What Height Is Considered "Tall"? (With Real Data)',
      subtitle: 'Forget vague opinions — here is where "tall" actually starts for men and women, based on real percentile data.',
      metaDescription: 'What height is considered tall? Real percentile data: US men from 6\'2" (188 cm), US women from 5\'8" (173 cm). Tables, by-country differences, and FAQs.',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5 min read',
      badge: 'Reference guide',
      tocTitle: 'In this article',
      intro: {
        lead: 'In the US, a man is statistically "tall" starting around 6\'2" (188 cm) and a woman around 5\'8" (173 cm) — both sit near the 95th percentile, meaning only about 1 in 20 adults is taller.',
        paragraphs: [
          '"Tall" feels subjective, but statisticians draw the line with percentiles: the top 5% of the population. Below you will find the exact percentile tables for men and women, why the same number means very different things by sex and country, and how to check where you stand.',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: 'The short answer: the percentile tables',
          paragraphs: [
            'Height percentiles come from large population surveys (in the US, NHANES by the CDC). The 95th percentile is the standard cut-off researchers use for "tall" — above it, you are taller than roughly 95 out of 100 people your sex.',
          ],
          table: {
            headers: [
              'Percentile',
              'Men',
              'Women',
              'What it means',
            ],
            rows: [
              [
                '50th (average)',
                '5\'9" (175 cm)',
                '5\'3.5" (161 cm)',
                'Right in the middle',
              ],
              [
                '75th',
                '5\'11" (180 cm)',
                '5\'5" (165 cm)',
                'Noticeably above average',
              ],
              [
                '90th',
                '6\'0.5" (184 cm)',
                '5\'6.5" (169 cm)',
                'Tall-ish — top 10%',
              ],
              [
                '95th',
                '6\'2" (188 cm)',
                '5\'8" (173 cm)',
                'Tall — top 5%',
              ],
              [
                '97th+',
                '6\'3"+ (190 cm+)',
                '5\'9"+ (175 cm+)',
                'Very tall — top 3%',
              ],
            ],
            footnote: 'Approximate values for US adults (NHANES). Sources vary slightly by survey year — use as a reference, not an exact measurement.',
          },
          callout: {
            type: 'tip',
            text: 'The most misunderstood number: 6\'0" (183 cm) for a man is only about the 84th percentile in the US — above average, but not statistically "tall".',
          },
          link: {
            text: '→ Check your own percentile',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: 'Men vs women: context changes everything',
          paragraphs: [
            'The same height can be average for one sex and tall for the other. A 5\'8" (173 cm) man sits around the 30th percentile — below average. A 5\'8" woman is at the 95th percentile — unambiguously tall.',
            'This is why "is X tall?" has no answer without knowing the sex:',
          ],
          bulletPoints: [
            '5\'7" (170 cm): average-ish man (~25th percentile) vs tall woman (~90th percentile)',
            '5\'10" (178 cm): above-average man (~70th) vs very tall woman (~98th)',
            '6\'0" (183 cm): above-average man (~84th) vs extremely tall woman (~99th+)',
          ],
        },
        {
          id: 'by-country',
          heading: 'It depends on the country too',
          paragraphs: [
            '"Tall" is relative to the population around you. In the Netherlands, where the average man is 183.8 cm, 6\'2" barely turns heads. In Japan, where the average man is about 172 cm, the same height stands out clearly.',
            'Rough "tall" thresholds (95th percentile) around the world:',
          ],
          bulletPoints: [
            'Netherlands: ~6\'4" (193 cm) men / ~5\'10" (178 cm) women',
            'USA: ~6\'2" (188 cm) men / ~5\'8" (173 cm) women',
            'Brazil: ~6\'1" (185 cm) men / ~5\'7" (170 cm) women',
            'Japan: ~5\'11" (180 cm) men / ~5\'5" (165 cm) women',
          ],
          link: {
            text: '→ Full average height by country table',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: 'Where do you stand?',
          paragraphs: [
            'Numbers are useful, but nothing beats seeing it. Put your height next to a friend, a celebrity, or the average for your country and see the difference visually:',
          ],
          link: {
            text: '→ Compare your height now (free)',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'Is 6 foot tall?',
          answer: 'For a man in the US, 6\'0" (183 cm) is about the 84th percentile — taller than most people you meet, but just short of the statistical "tall" cut-off (95th percentile, ~6\'2"). In everyday language, most people would still call it tall.',
        },
        {
          question: 'Is 5\'8" tall for a woman?',
          answer: 'Yes. At 5\'8" (173 cm), a woman in the US is around the 95th percentile — taller than about 19 out of 20 women. That is firmly in "tall" territory by any definition.',
        },
        {
          question: 'What height is considered tall in Japan?',
          answer: 'Because averages are lower (about 172 cm for men, 158 cm for women), the "tall" threshold sits around 5\'11" (180 cm) for men and 5\'5" (165 cm) for women — roughly the 95th percentile of the Japanese population.',
        },
        {
          question: 'What height is considered short?',
          answer: 'The mirror of "tall": below the 5th percentile. In the US that is roughly under 5\'5" (164 cm) for men and under 5\'0" (151 cm) for women. Like "tall", it shifts with sex and country.',
        },
      ],
      relatedLinks: [
        {
          text: 'Height Comparison',
          href: '/compare/',
        },
        {
          text: 'Boys\' height percentile calculator',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Girls\' height percentile calculator',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Average height by country',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    pt: {
      id: 'what-is-tall',
      slug: 'que-altura-e-considerada-alta',
      title: 'Que Altura É Considerada "Alta"? (Com Dados Reais)',
      subtitle: 'Esqueça opiniões vagas — aqui está onde "alto" realmente começa para homens e mulheres, com base em dados reais de percentil.',
      metaDescription: 'Que altura é considerada alta? Dados reais de percentil: homens dos EUA a partir de 1,88 m (6\'2"), mulheres a partir de 1,73 m (5\'8"). Tabelas, diferenças por país e perguntas frequentes.',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5 min de leitura',
      badge: 'Guia de referência',
      tocTitle: 'Neste artigo',
      intro: {
        lead: 'Nos EUA, um homem é estatisticamente "alto" a partir de cerca de 1,88 m (6\'2") e uma mulher a partir de cerca de 1,73 m (5\'8") — ambos ficam perto do percentil 95, o que significa que apenas cerca de 1 em cada 20 adultos é mais alto.',
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
            headers: [
              'Percentil',
              'Homens',
              'Mulheres',
              'O que significa',
            ],
            rows: [
              [
                '50 (média)',
                '1,75 m (5\'9")',
                '1,61 m (5\'3.5")',
                'Bem no meio',
              ],
              [
                '75',
                '1,80 m (5\'11")',
                '1,65 m (5\'5")',
                'Visivelmente acima da média',
              ],
              [
                '90',
                '1,84 m (6\'0.5")',
                '1,69 m (5\'6.5")',
                'Meio alto — os 10% mais altos',
              ],
              [
                '95',
                '1,88 m (6\'2")',
                '1,73 m (5\'8")',
                'Alto — os 5% mais altos',
              ],
              [
                '97+',
                '1,90 m+ (6\'3"+)',
                '1,75 m+ (5\'9"+)',
                'Muito alto — os 3% mais altos',
              ],
            ],
            footnote: 'Valores aproximados para adultos nos EUA (NHANES). As fontes variam um pouco conforme o ano da pesquisa — use como referência, não como medida exata.',
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
          answer: 'Para um homem nos EUA, 1,83 m (6\'0") é cerca do percentil 84 — mais alto que a maioria das pessoas que você encontra, mas um pouco abaixo do corte estatístico de "alto" (percentil 95, ~1,88 m). Na linguagem do dia a dia, a maioria das pessoas ainda chamaria de alto.',
        },
        {
          question: '1,73 m é alto para uma mulher?',
          answer: 'Sim. Com 1,73 m (5\'8"), uma mulher nos EUA está em torno do percentil 95 — mais alta que cerca de 19 em cada 20 mulheres. Isso é firmemente território "alto", por qualquer definição.',
        },
        {
          question: 'Que altura é considerada alta no Japão?',
          answer: 'Como as médias são mais baixas (cerca de 172 cm para homens e 158 cm para mulheres), o limite de "alto" fica em torno de 1,80 m (5\'11") para homens e 1,65 m (5\'5") para mulheres — aproximadamente o percentil 95 da população japonesa.',
        },
        {
          question: 'Que altura é considerada baixa?',
          answer: 'O espelho de "alto": abaixo do percentil 5. Nos EUA, isso é aproximadamente menos de 1,64 m (5\'5") para homens e menos de 1,51 m (5\'0") para mulheres. Como "alto", varia conforme o sexo e o país.',
        },
      ],
      relatedLinks: [
        {
          text: 'Comparador de Altura',
          href: '/compare/',
        },
        {
          text: 'Calculadora de percentil de altura para meninos',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Calculadora de percentil de altura para meninas',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Altura média por país',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    es: {
      id: 'what-is-tall',
      slug: 'que-estatura-se-considera-alta',
      title: '¿Qué Estatura Se Considera "Alta"? (Con Datos Reales)',
      subtitle: 'Olvídate de las opiniones vagas: aquí empieza "alto" realmente para hombres y mujeres, según datos de percentiles reales.',
      metaDescription: '¿Qué estatura se considera alta? Datos reales de percentiles: hombres en EE. UU. desde 1,88 m (6\'2"), mujeres desde 1,73 m (5\'8"). Tablas, diferencias por país y preguntas frecuentes.',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5 min de lectura',
      badge: 'Guía de referencia',
      tocTitle: 'En este artículo',
      intro: {
        lead: 'En Estados Unidos, un hombre es estadísticamente "alto" a partir de unos 6\'2" (188 cm) y una mujer a partir de unos 5\'8" (173 cm): ambos están cerca del percentil 95, lo que significa que solo 1 de cada 20 adultos es más alto.',
        paragraphs: [
          '"Alto" parece algo subjetivo, pero los estadísticos trazan la línea con percentiles: el 5% más alto de la población. A continuación encontrarás las tablas de percentiles exactas para hombres y mujeres, por qué el mismo número significa cosas muy distintas según el sexo y el país, y cómo comprobar dónde estás tú.',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: 'La respuesta corta: las tablas de percentiles',
          paragraphs: [
            'Los percentiles de estatura provienen de grandes encuestas poblacionales (en EE. UU., NHANES de los CDC). El percentil 95 es el límite que los investigadores usan para "alto": por encima de él, eres más alto que unas 95 de cada 100 personas de tu sexo.',
          ],
          table: {
            headers: [
              'Percentil',
              'Hombres',
              'Mujeres',
              'Qué significa',
            ],
            rows: [
              [
                '50 (promedio)',
                '5\'9" (175 cm)',
                '5\'3.5" (161 cm)',
                'Justo en el medio',
              ],
              [
                '75',
                '5\'11" (180 cm)',
                '5\'5" (165 cm)',
                'Claramente por encima del promedio',
              ],
              [
                '90',
                '6\'0.5" (184 cm)',
                '5\'6.5" (169 cm)',
                'Bastante alto: el 10% superior',
              ],
              [
                '95',
                '6\'2" (188 cm)',
                '5\'8" (173 cm)',
                'Alto: el 5% superior',
              ],
              [
                '97+',
                '6\'3"+ (190 cm+)',
                '5\'9"+ (175 cm+)',
                'Muy alto: el 3% superior',
              ],
            ],
            footnote: 'Valores aproximados para adultos en EE. UU. (NHANES). Las fuentes varían ligeramente según el año de la encuesta: úsalo como referencia, no como medida exacta.',
          },
          callout: {
            type: 'tip',
            text: 'El número más malinterpretado: 6\'0" (183 cm) en un hombre es solo alrededor del percentil 84 en EE. UU.: por encima del promedio, pero no estadísticamente "alto".',
          },
          link: {
            text: '→ Comprueba tu propio percentil',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: 'Hombres vs. mujeres: el contexto lo cambia todo',
          paragraphs: [
            'La misma estatura puede ser promedio para un sexo y alta para el otro. Un hombre de 5\'8" (173 cm) está alrededor del percentil 30: por debajo del promedio. Una mujer de 5\'8" está en el percentil 95: indiscutiblemente alta.',
            'Por eso la pregunta "¿X es alto?" no tiene respuesta sin saber el sexo:',
          ],
          bulletPoints: [
            '5\'7" (170 cm): hombre más bien promedio (~percentil 25) vs. mujer alta (~percentil 90)',
            '5\'10" (178 cm): hombre por encima del promedio (~70) vs. mujer muy alta (~98)',
            '6\'0" (183 cm): hombre por encima del promedio (~84) vs. mujer extremadamente alta (~99+)',
          ],
        },
        {
          id: 'by-country',
          heading: 'También depende del país',
          paragraphs: [
            '"Alto" es relativo a la población que te rodea. En los Países Bajos, donde el hombre promedio mide 183,8 cm, 6\'2" apenas llama la atención. En Japón, donde el hombre promedio mide unos 172 cm, la misma estatura destaca claramente.',
            'Umbrales aproximados de "alto" (percentil 95) en el mundo:',
          ],
          bulletPoints: [
            'Países Bajos: ~6\'4" (193 cm) hombres / ~5\'10" (178 cm) mujeres',
            'EE. UU.: ~6\'2" (188 cm) hombres / ~5\'8" (173 cm) mujeres',
            'Brasil: ~6\'1" (185 cm) hombres / ~5\'7" (170 cm) mujeres',
            'Japón: ~5\'11" (180 cm) hombres / ~5\'5" (165 cm) mujeres',
          ],
          link: {
            text: '→ Tabla completa de estatura promedio por país',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: '¿Dónde estás tú?',
          paragraphs: [
            'Los números son útiles, pero nada supera verlo. Pon tu estatura junto a la de un amigo, una celebridad o el promedio de tu país y comprueba la diferencia visualmente:',
          ],
          link: {
            text: '→ Compara tu estatura ahora (gratis)',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: '¿1,83 m (6 pies) es alto?',
          answer: 'Para un hombre en EE. UU., 6\'0" (183 cm) es alrededor del percentil 84: más alto que la mayoría de la gente que conoces, pero justo por debajo del límite estadístico de "alto" (percentil 95, ~6\'2"). En el lenguaje cotidiano, la mayoría de la gente lo seguiría llamando alto.',
        },
        {
          question: '¿1,73 m (5\'8") es alto para una mujer?',
          answer: 'Sí. Con 5\'8" (173 cm), una mujer en EE. UU. está alrededor del percentil 95: más alta que unas 19 de cada 20 mujeres. Eso es claramente territorio "alto" según cualquier definición.',
        },
        {
          question: '¿Qué estatura se considera alta en Japón?',
          answer: 'Como los promedios son más bajos (unos 172 cm en hombres y 158 cm en mujeres), el umbral de "alto" está alrededor de 5\'11" (180 cm) en hombres y 5\'5" (165 cm) en mujeres: aproximadamente el percentil 95 de la población japonesa.',
        },
        {
          question: '¿Qué estatura se considera baja?',
          answer: 'El espejo de "alto": por debajo del percentil 5. En EE. UU. eso es aproximadamente menos de 5\'5" (164 cm) en hombres y menos de 5\'0" (151 cm) en mujeres. Como "alto", cambia según el sexo y el país.',
        },
      ],
      relatedLinks: [
        {
          text: 'Comparador de estatura',
          href: '/compare/',
        },
        {
          text: 'Calculadora de percentil de estatura para niños',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Calculadora de percentil de estatura para niñas',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Estatura promedio por país',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    fr: {
      id: 'what-is-tall',
      slug: 'quelle-taille-consideree-grande',
      title: 'Quelle Taille Est Considérée « Grande » ? (Avec de Vraies Données)',
      subtitle: 'Oubliez les avis vagues — voici où commence réellement le « grand » pour les hommes et les femmes, d’après de vraies données de percentiles.',
      metaDescription: 'Quelle taille est considérée grande ? Données de percentiles réelles : hommes américains à partir de 1,88 m, femmes américaines à partir de 1,73 m. Tableaux, différences par pays et FAQ.',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5 min de lecture',
      badge: 'Guide de référence',
      tocTitle: 'Dans cet article',
      intro: {
        lead: 'Aux États-Unis, un homme est statistiquement « grand » à partir d’environ 1,88 m et une femme à partir d’environ 1,73 m — les deux se situent près du 95e percentile, ce qui signifie que seul environ 1 adulte sur 20 est plus grand.',
        paragraphs: [
          '« Grand » semble subjectif, mais les statisticiens tracent la limite avec les percentiles : les 5 % les plus grands de la population. Vous trouverez ci-dessous les tableaux de percentiles exacts pour les hommes et les femmes, pourquoi un même chiffre signifie des choses très différentes selon le sexe et le pays, et comment vérifier où vous vous situez.',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: 'La réponse courte : les tableaux de percentiles',
          paragraphs: [
            'Les percentiles de taille proviennent de grandes enquêtes de population (aux États-Unis, NHANES du CDC). Le 95e percentile est le seuil standard utilisé par les chercheurs pour définir « grand » — au-dessus, vous êtes plus grand qu’environ 95 personnes sur 100 du même sexe.',
          ],
          table: {
            headers: [
              'Percentile',
              'Hommes',
              'Femmes',
              'Ce que ça signifie',
            ],
            rows: [
              [
                '50e (moyenne)',
                '1,75 m',
                '1,61 m',
                'Pile dans la moyenne',
              ],
              [
                '75e',
                '1,80 m',
                '1,65 m',
                'Nettement au-dessus de la moyenne',
              ],
              [
                '90e',
                '1,84 m',
                '1,69 m',
                'Plutôt grand — top 10 %',
              ],
              [
                '95e',
                '1,88 m',
                '1,73 m',
                'Grand — top 5 %',
              ],
              [
                '97e+',
                '1,90 m et plus',
                '1,75 m et plus',
                'Très grand — top 3 %',
              ],
            ],
            footnote: 'Valeurs approximatives pour les adultes américains (NHANES). Les sources varient légèrement selon l’année d’enquête — utilisez comme référence, pas comme mesure exacte.',
          },
          callout: {
            type: 'tip',
            text: 'Le chiffre le plus mal compris : 1,83 m pour un homme, ce n’est qu’environ le 84e percentile aux États-Unis — au-dessus de la moyenne, mais pas statistiquement « grand ».',
          },
          link: {
            text: '→ Vérifiez votre propre percentile',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: 'Hommes et femmes : le contexte change tout',
          paragraphs: [
            'Une même taille peut être moyenne pour un sexe et grande pour l’autre. Un homme de 1,73 m se situe autour du 30e percentile — en dessous de la moyenne. Une femme de 1,73 m est au 95e percentile — indiscutablement grande.',
            'C’est pourquoi la question « X, c’est grand ? » n’a pas de réponse sans connaître le sexe :',
          ],
          bulletPoints: [
            '1,70 m : homme plutôt moyen (~25e percentile) contre femme grande (~90e percentile)',
            '1,78 m : homme au-dessus de la moyenne (~70e) contre femme très grande (~98e)',
            '1,83 m : homme au-dessus de la moyenne (~84e) contre femme extrêmement grande (~99e et plus)',
          ],
        },
        {
          id: 'by-country',
          heading: 'Ça dépend aussi du pays',
          paragraphs: [
            '« Grand » est relatif à la population qui vous entoure. Aux Pays-Bas, où l’homme moyen mesure 183,8 cm, 1,88 m ne fait guère tourner les têtes. Au Japon, où l’homme moyen mesure environ 172 cm, la même taille se remarque nettement.',
            'Seuils approximatifs de « grand » (95e percentile) dans le monde :',
          ],
          bulletPoints: [
            'Pays-Bas : ~1,93 m hommes / ~1,78 m femmes',
            'États-Unis : ~1,88 m hommes / ~1,73 m femmes',
            'Brésil : ~1,85 m hommes / ~1,70 m femmes',
            'Japon : ~1,80 m hommes / ~1,65 m femmes',
          ],
          link: {
            text: '→ Tableau complet de la taille moyenne par pays',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: 'Où vous situez-vous ?',
          paragraphs: [
            'Les chiffres sont utiles, mais rien ne vaut le visuel. Comparez votre taille à celle d’un ami, d’une célébrité ou à la moyenne de votre pays et voyez la différence en image :',
          ],
          link: {
            text: '→ Comparez votre taille maintenant (gratuit)',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: '1,83 m, c’est grand ?',
          answer: 'Pour un homme aux États-Unis, 1,83 m correspond environ au 84e percentile — plus grand que la plupart des gens que vous croisez, mais juste en dessous du seuil statistique du « grand » (95e percentile, ~1,88 m). Dans le langage courant, la plupart des gens diraient quand même que c’est grand.',
        },
        {
          question: '1,73 m, c’est grand pour une femme ?',
          answer: 'Oui. À 1,73 m, une femme aux États-Unis se situe autour du 95e percentile — plus grande qu’environ 19 femmes sur 20. C’est fermement du territoire « grand », quelle que soit la définition.',
        },
        {
          question: 'Quelle taille est considérée grande au Japon ?',
          answer: 'Comme les moyennes sont plus basses (environ 172 cm pour les hommes, 158 cm pour les femmes), le seuil du « grand » se situe autour de 1,80 m pour les hommes et 1,65 m pour les femmes — à peu près le 95e percentile de la population japonaise.',
        },
        {
          question: 'Quelle taille est considérée petite ?',
          answer: 'Le miroir du « grand » : en dessous du 5e percentile. Aux États-Unis, c’est environ moins de 1,64 m pour les hommes et moins de 1,51 m pour les femmes. Comme pour « grand », ça varie selon le sexe et le pays.',
        },
      ],
      relatedLinks: [
        {
          text: 'Comparateur de taille',
          href: '/compare/',
        },
        {
          text: 'Calculateur de percentile de taille (garçons)',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Calculateur de percentile de taille (filles)',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Taille moyenne par pays',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    de: {
      id: 'what-is-tall',
      slug: 'welche-groesse-gilt-als-gross',
      title: 'Welche Körpergröße gilt als „groß“? (Mit echten Daten)',
      subtitle: 'Vergessen Sie vage Meinungen — hier erfahren Sie, ab wann „groß“ für Männer und Frauen tatsächlich beginnt, basierend auf echten Perzentildaten.',
      metaDescription: 'Welche Körpergröße gilt als groß? Echte Perzentildaten: US-Männer ab 1,88 m (6\'2"), US-Frauen ab 1,73 m (5\'8"). Tabellen, Unterschiede nach Land und FAQs.',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5 Min. Lesezeit',
      badge: 'Referenzleitfaden',
      tocTitle: 'In diesem Artikel',
      intro: {
        lead: 'In den USA gilt ein Mann statistisch ab etwa 1,88 m (6\'2") als „groß“ und eine Frau ab etwa 1,73 m (5\'8") — beide Werte liegen nahe dem 95. Perzentil, das heißt, nur etwa 1 von 20 Erwachsenen ist größer.',
        paragraphs: [
          '„Groß“ fühlt sich subjektiv an, doch Statistiker ziehen die Grenze mit Perzentilen: die obersten 5 % der Bevölkerung. Weiter unten finden Sie die exakten Perzentiltabellen für Männer und Frauen, warum dieselbe Zahl je nach Geschlecht und Land etwas ganz anderes bedeutet — und wie Sie prüfen können, wo Sie selbst stehen.',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: 'Die kurze Antwort: die Perzentiltabellen',
          paragraphs: [
            'Körpergrößen-Perzentile stammen aus großen Bevölkerungsumfragen (in den USA NHANES vom CDC). Das 95. Perzentil ist die Standardgrenze, die Forscher für „groß“ verwenden — darüber sind Sie größer als etwa 95 von 100 Personen Ihres Geschlechts.',
          ],
          table: {
            headers: [
              'Perzentil',
              'Männer',
              'Frauen',
              'Was es bedeutet',
            ],
            rows: [
              [
                '50. (Durchschnitt)',
                '5\'9" (175 cm)',
                '5\'3.5" (161 cm)',
                'Genau in der Mitte',
              ],
              [
                '75.',
                '5\'11" (180 cm)',
                '5\'5" (165 cm)',
                'Deutlich über dem Durchschnitt',
              ],
              [
                '90.',
                '6\'0.5" (184 cm)',
                '5\'6.5" (169 cm)',
                'Ziemlich groß — obere 10 %',
              ],
              [
                '95.',
                '6\'2" (188 cm)',
                '5\'8" (173 cm)',
                'Groß — obere 5 %',
              ],
              [
                '97.+',
                '6\'3"+ (190 cm+)',
                '5\'9"+ (175 cm+)',
                'Sehr groß — obere 3 %',
              ],
            ],
            footnote: 'Ungefähre Werte für US-Erwachsene (NHANES). Je nach Erhebungsjahr variieren die Quellen leicht — als Referenz verwenden, nicht als exakte Messung.',
          },
          callout: {
            type: 'tip',
            text: 'Die meistverstandene Zahl: 6\'0" (183 cm) beim Mann entspricht in den USA nur etwa dem 84. Perzentil — überdurchschnittlich, aber statistisch noch nicht „groß“.',
          },
          link: {
            text: '→ Prüfen Sie Ihr eigenes Perzentil',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: 'Männer vs. Frauen: Der Kontext ändert alles',
          paragraphs: [
            'Dieselbe Körpergröße kann für das eine Geschlecht durchschnittlich und für das andere groß sein. Ein Mann mit 5\'8" (173 cm) liegt etwa beim 30. Perzentil — unter dem Durchschnitt. Eine Frau mit 5\'8" ist beim 95. Perzentil — eindeutig groß.',
            'Deshalb lässt sich „Ist X groß?“ ohne Angabe des Geschlechts nicht beantworten:',
          ],
          bulletPoints: [
            '5\'7" (170 cm): eher durchschnittlicher Mann (~25. Perzentil) vs. große Frau (~90. Perzentil)',
            '5\'10" (178 cm): überdurchschnittlicher Mann (~70.) vs. sehr große Frau (~98.)',
            '6\'0" (183 cm): überdurchschnittlicher Mann (~84.) vs. extrem große Frau (~99.+)',
          ],
        },
        {
          id: 'by-country',
          heading: 'Es hängt auch vom Land ab',
          paragraphs: [
            '„Groß“ ist relativ zur Bevölkerung um Sie herum. In den Niederlanden, wo der durchschnittliche Mann 183,8 cm misst, dreht sich bei 6\'2" kaum jemand um. In Japan, wo der durchschnittliche Mann etwa 172 cm misst, fällt dieselbe Größe deutlich auf.',
            'Grobe „groß“-Grenzen (95. Perzentil) weltweit:',
          ],
          bulletPoints: [
            'Niederlande: ~6\'4" (193 cm) Männer / ~5\'10" (178 cm) Frauen',
            'USA: ~6\'2" (188 cm) Männer / ~5\'8" (173 cm) Frauen',
            'Brasilien: ~6\'1" (185 cm) Männer / ~5\'7" (170 cm) Frauen',
            'Japan: ~5\'11" (180 cm) Männer / ~5\'5" (165 cm) Frauen',
          ],
          link: {
            text: '→ Vollständige Tabelle: Durchschnittsgröße nach Land',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: 'Wo stehen Sie?',
          paragraphs: [
            'Zahlen sind nützlich, aber nichts geht über den direkten Vergleich. Stellen Sie Ihre Größe neben einen Freund, einen Promi oder den Durchschnitt Ihres Landes und sehen Sie den Unterschied visuell:',
          ],
          link: {
            text: '→ Jetzt Größe vergleichen (kostenlos)',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'Sind 6 Fuß (183 cm) groß?',
          answer: 'Für einen Mann in den USA entsprechen 6\'0" (183 cm) etwa dem 84. Perzentil — größer als die meisten Menschen, denen Sie begegnen, aber knapp unter der statistischen „groß“-Grenze (95. Perzentil, ~6\'2"). In der Alltagssprache würden die meisten es trotzdem als groß bezeichnen.',
        },
        {
          question: 'Sind 5\'8" (173 cm) groß für eine Frau?',
          answer: 'Ja. Mit 5\'8" (173 cm) liegt eine Frau in den USA etwa beim 95. Perzentil — größer als etwa 19 von 20 Frauen. Das ist nach jeder Definition eindeutig „groß“.',
        },
        {
          question: 'Welche Körpergröße gilt in Japan als groß?',
          answer: 'Da die Durchschnittswerte niedriger liegen (etwa 172 cm bei Männern, 158 cm bei Frauen), beginnt die „groß“-Grenze bei etwa 5\'11" (180 cm) für Männer und 5\'5" (165 cm) für Frauen — ungefähr das 95. Perzentil der japanischen Bevölkerung.',
        },
        {
          question: 'Welche Körpergröße gilt als klein?',
          answer: 'Das Gegenstück zu „groß“: unter dem 5. Perzentil. In den USA sind das grob unter 5\'5" (164 cm) für Männer und unter 5\'0" (151 cm) für Frauen. Wie „groß“ verschiebt sich auch „klein“ je nach Geschlecht und Land.',
        },
      ],
      relatedLinks: [
        {
          text: 'Größenvergleich',
          href: '/compare/',
        },
        {
          text: 'Perzentil-Rechner für Jungen',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Perzentil-Rechner für Mädchen',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Durchschnittsgröße nach Land',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    hi: {
      id: 'what-is-tall',
      slug: 'kitni-lambai-ko-lamba-mana-jata-hai',
      title: '"लंबा" किस ऊँचाई को माना जाता है? (असली डेटा के साथ)',
      subtitle: 'अंदाज़े वाली बातें भूल जाइए — यहाँ पता चलेगा कि पुरुषों और महिलाओं के लिए "लंबा" असल में कहाँ से शुरू होता है, असली परसेंटाइल डेटा के आधार पर।',
      metaDescription: 'किस ऊँचाई को लंबा माना जाता है? असली परसेंटाइल डेटा: अमेरिकी पुरुष 6\'2" (188 सेमी) से, महिलाएं 5\'8" (173 सेमी) से। तालिकाएं, देशों के बीच अंतर, और FAQs।',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5 मिनट में पढ़ें',
      badge: 'रेफरेंस गाइड',
      tocTitle: 'इस लेख में',
      intro: {
        lead: 'अमेरिका में, एक पुरुष सांख्यिकीय रूप से लगभग 6\'2" (188 सेमी) से "लंबा" माना जाता है और एक महिला लगभग 5\'8" (173 सेमी) से — दोनों 95वें परसेंटाइल के आस-पास बैठते हैं, यानी हर 20 में से सिर्फ़ 1 वयस्क ही इनसे लंबा होता है।',
        paragraphs: [
          '"लंबा" सुनने में व्यक्तिपरक लगता है, लेकिन सांख्यिकीविद परसेंटाइल से इसकी सीमा तय करते हैं: आबादी के शीर्ष 5%। नीचे आपको पुरुषों और महिलाओं के लिए सटीक परसेंटाइल तालिकाएं मिलेंगी, यह क्यों एक ही संख्या का मतलब लिंग और देश के हिसाब से बिल्कुल अलग होता है, और आप कहाँ खड़े हैं — यह कैसे जांचें।',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: 'संक्षिप्त जवाब: परसेंटाइल तालिकाएं',
          paragraphs: [
            'ऊँचाई के परसेंटाइल बड़े जनसंख्या सर्वेक्षणों से आते हैं (अमेरिका में CDC का NHANES)। 95वां परसेंटाइल वह मानक सीमा है जिसे शोधकर्ता "लंबे" के लिए इस्तेमाल करते हैं — इससे ऊपर होने का मतलब है कि आप अपने लिंग के लगभग 100 में से 95 लोगों से लंबे हैं।',
          ],
          table: {
            headers: [
              'परसेंटाइल',
              'पुरुष',
              'महिलाएं',
              'इसका मतलब',
            ],
            rows: [
              [
                '50वां (औसत)',
                '5\'9" (175 सेमी)',
                '5\'3.5" (161 सेमी)',
                'बिल्कुल बीच में',
              ],
              [
                '75वां',
                '5\'11" (180 सेमी)',
                '5\'5" (165 सेमी)',
                'औसत से काफ़ी ऊपर',
              ],
              [
                '90वां',
                '6\'0.5" (184 सेमी)',
                '5\'6.5" (169 सेमी)',
                'क़रीब लंबा — शीर्ष 10%',
              ],
              [
                '95वां',
                '6\'2" (188 सेमी)',
                '5\'8" (173 सेमी)',
                'लंबा — शीर्ष 5%',
              ],
              [
                '97वां+',
                '6\'3"+ (190 सेमी+)',
                '5\'9"+ (175 सेमी+)',
                'बहुत लंबा — शीर्ष 3%',
              ],
            ],
            footnote: 'अमेरिकी वयस्कों के लिए अनुमानित मान (NHANES)। सर्वेक्षण वर्ष के हिसाब से स्रोतों में हल्का अंतर हो सकता है — इसे रेफरेंस के तौर पर लें, सटीक माप के तौर पर नहीं।',
          },
          callout: {
            type: 'tip',
            text: 'सबसे ज़्यादा ग़लत समझा जाने वाला आंकड़ा: अमेरिका में पुरुष के लिए 6\'0" (183 सेमी) सिर्फ़ लगभग 84वें परसेंटाइल पर है — औसत से ऊपर, लेकिन सांख्यिकीय रूप से "लंबा" नहीं।',
          },
          link: {
            text: '→ अपना परसेंटाइल जांचें',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: 'पुरुष बनाम महिलाएं: संदर्भ सब कुछ बदल देता है',
          paragraphs: [
            'एक ही ऊँचाई एक लिंग के लिए औसत हो सकती है और दूसरे के लिए लंबी। 5\'8" (173 सेमी) का पुरुष लगभग 30वें परसेंटाइल पर होता है — औसत से नीचे। 5\'8" की महिला 95वें परसेंटाइल पर होती है — निस्संदेह लंबी।',
            'इसीलिए "क्या X लंबा है?" का जवाब लिंग जाने बिना नहीं मिल सकता:',
          ],
          bulletPoints: [
            '5\'7" (170 सेमी): औसत-जैसा पुरुष (~25वां परसेंटाइल) बनाम लंबी महिला (~90वां परसेंटाइल)',
            '5\'10" (178 सेमी): औसत से ऊपर का पुरुष (~70वां) बनाम बहुत लंबी महिला (~98वां)',
            '6\'0" (183 सेमी): औसत से ऊपर का पुरुष (~84वां) बनाम अत्यंत लंबी महिला (~99वां+)',
          ],
        },
        {
          id: 'by-country',
          heading: 'यह देश पर भी निर्भर करता है',
          paragraphs: [
            '"लंबा" आपके आस-पास की आबादी के सापेक्ष होता है। नीदरलैंड में, जहाँ औसत पुरुष 183.8 सेमी है, 6\'2" पर कोई नज़र भी नहीं उठाता। जापान में, जहाँ औसत पुरुष लगभग 172 सेमी है, वही ऊँचाई साफ़ नज़र आती है।',
            'दुनिया भर में मोटे तौर पर "लंबे" की सीमाएं (95वां परसेंटाइल):',
          ],
          bulletPoints: [
            'नीदरलैंड: पुरुष ~6\'4" (193 सेमी) / महिलाएं ~5\'10" (178 सेमी)',
            'अमेरिका: पुरुष ~6\'2" (188 सेमी) / महिलाएं ~5\'8" (173 सेमी)',
            'ब्राज़ील: पुरुष ~6\'1" (185 सेमी) / महिलाएं ~5\'7" (170 सेमी)',
            'जापान: पुरुष ~5\'11" (180 सेमी) / महिलाएं ~5\'5" (165 सेमी)',
          ],
          link: {
            text: '→ देशों के हिसाब से औसत ऊँचाई की पूरी तालिका',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: 'आप कहाँ खड़े हैं?',
          paragraphs: [
            'आंकड़े उपयोगी होते हैं, लेकिन खुद देखना सबसे अच्छा होता है। अपनी ऊँचाई को किसी दोस्त, किसी सेलिब्रिटी, या अपने देश के औसत के बगल में रखकर अंतर को आंखों से देखें:',
          ],
          link: {
            text: '→ अभी अपनी ऊँचाई की तुलना करें (मुफ़्त)',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'क्या 6 फीट लंबा होता है?',
          answer: 'अमेरिका में पुरुष के लिए 6\'0" (183 सेमी) लगभग 84वां परसेंटाइल है — ज़्यादातर लोगों से लंबा, लेकिन सांख्यिकीय "लंबे" की सीमा (95वां परसेंटाइल, ~6\'2") से थोड़ा नीचे। रोज़मर्रा की भाषा में ज़्यादातर लोग फिर भी इसे लंबा ही कहेंगे।',
        },
        {
          question: 'क्या महिला के लिए 5\'8" लंबा है?',
          answer: 'हाँ। अमेरिका में 5\'8" (173 सेमी) की महिला लगभग 95वें परसेंटाइल पर होती है — करीब 20 में से 19 महिलाओं से लंबी। किसी भी परिभाषा के हिसाब से यह पक्का "लंबा" क्षेत्र है।',
        },
        {
          question: 'जापान में किस ऊँचाई को लंबा माना जाता है?',
          answer: 'चूँकि औसत कम है (पुरुषों के लिए लगभग 172 सेमी, महिलाओं के लिए 158 सेमी), "लंबे" की सीमा पुरुषों के लिए लगभग 5\'11" (180 सेमी) और महिलाओं के लिए 5\'5" (165 सेमी) के आस-पास होती है — यानी जापानी आबादी के लगभग 95वें परसेंटाइल के बराबर।',
        },
        {
          question: 'किस ऊँचाई को छोटा माना जाता है?',
          answer: '"लंबे" का उल्टा: 5वें परसेंटाइल से नीचे। अमेरिका में यह पुरुषों के लिए लगभग 5\'5" (164 सेमी) से कम और महिलाओं के लिए 5\'0" (151 सेमी) से कम है। "लंबे" की तरह यह भी लिंग और देश के साथ बदलता है।',
        },
      ],
      relatedLinks: [
        {
          text: 'ऊँचाई की तुलना',
          href: '/compare/',
        },
        {
          text: 'लड़कों का ऊँचाई परसेंटाइल कैलकुलेटर',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'लड़कियों का ऊँचाई परसेंटाइल कैलकुलेटर',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'देशों के हिसाब से औसत ऊँचाई',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    ja: {
      id: 'what-is-tall',
      slug: 'se-ga-takai-toha',
      title: '「背が高い」とされる身長は？（実データで解説）',
      subtitle: '曖昧な印象論はもう終わり — 男性と女性それぞれ「背が高い」が始まる身長を、実際のパーセンタイルデータで示します。',
      metaDescription: '「背が高い」とはどのくらいの身長？ 実データ：米国男性は6\'2"（188cm）、女性は5\'8"（173cm）から。パーセンタイル表、各国の違い、よくある質問。',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5分で読める',
      badge: '参考ガイド',
      tocTitle: 'この記事の内容',
      intro: {
        lead: 'アメリカでは、男性は6\'2"（188cm）あたりから統計的に「背が高い」とされ、女性は5\'8"（173cm）あたりから — どちらも95パーセンタイル付近で、つまり成人20人のうち約1人しかその身長を超えません。',
        paragraphs: [
          '「背が高い」は主観的に感じますが、統計学者はパーセンタイルで線引きします：上位5％です。以下では男女別の正確なパーセンタイル表、同じ数値が性別や国によって全く違う意味になる理由、そして自分の立ち位置の確認方法を解説します。',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: '短い答え：パーセンタイル表',
          paragraphs: [
            '身長のパーセンタイルは大規模な人口調査から算出されます（アメリカではCDCのNHANES）。95パーセンタイルは研究者が「背が高い」とする標準のカットオフです — これを超えると、同性の約100人中95人より背が高いことになります。',
          ],
          table: {
            headers: [
              'パーセンタイル',
              '男性',
              '女性',
              '意味',
            ],
            rows: [
              [
                '50th（平均）',
                '5\'9" (175 cm)',
                '5\'3.5" (161 cm)',
                'ちょうど真ん中',
              ],
              [
                '75th',
                '5\'11" (180 cm)',
                '5\'5" (165 cm)',
                '平均より明らかに高い',
              ],
              [
                '90th',
                '6\'0.5" (184 cm)',
                '5\'6.5" (169 cm)',
                '背が高いほう — 上位10％',
              ],
              [
                '95th',
                '6\'2" (188 cm)',
                '5\'8" (173 cm)',
                '背が高い — 上位5％',
              ],
              [
                '97th以上',
                '6\'3"+ (190 cm+)',
                '5\'9"+ (175 cm+)',
                'とても背が高い — 上位3％',
              ],
            ],
            footnote: '米国成人の近似値（NHANES）。調査年により値はわずかに異なります — 目安としてご利用ください。',
          },
          callout: {
            type: 'tip',
            text: '最も誤解されている数字：男性の6\'0"（183cm）は米国では84パーセンタイル程度 — 平均より上ですが、統計的には「背が高い」ではありません。',
          },
          link: {
            text: '→ 自分のパーセンタイルをチェック',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: '男性 vs 女性：文脈で意味が変わる',
          paragraphs: [
            '同じ身長でも、男性にとっては平均、女性にとっては「背が高い」になることがあります。5\'8"（173cm）の男性は30パーセンタイル付近 — 平均以下です。同じ身長の女性は95パーセンタイル — 間違いなく背が高いほうです。',
            'だから「この身長って背が高い？」には、性別なしでは答えられません：',
          ],
          bulletPoints: [
            '5\'7"（170cm）：男性なら平均程度（約25パーセンタイル）／女性なら背が高いほう（約90パーセンタイル）',
            '5\'10"（178cm）：男性なら平均以上（約70th）／女性ならとても背が高い（約98th）',
            '6\'0"（183cm）：男性なら平均以上（約84th）／女性なら極めて背が高い（約99th以上）',
          ],
        },
        {
          id: 'by-country',
          heading: '国によっても変わります',
          paragraphs: [
            '「背が高い」は周囲の集団との相対的なものです。平均男性が183.8cmのオランダでは、6\'2"はそれほど目立ちません。平均男性が約172cmの日本では、同じ身長ははっきり目立ちます。',
            '各国での「背が高い」の目安（95パーセンタイル）：',
          ],
          bulletPoints: [
            'オランダ：男性 約6\'4"（193cm）／女性 約5\'10"（178cm）',
            'アメリカ：男性 約6\'2"（188cm）／女性 約5\'8"（173cm）',
            'ブラジル：男性 約6\'1"（185cm）／女性 約5\'7"（170cm）',
            '日本：男性 約5\'11"（180cm）／女性 約5\'5"（165cm）',
          ],
          link: {
            text: '→ 国別平均身長の完全な表',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: 'あなたはどこにいる？',
          paragraphs: [
            '数字は役立ちますが、実際に見るのが一番です。自分の身長を友人、有名人、自国の平均と並べて、視覚的に違いを見てみましょう：',
          ],
          link: {
            text: '→ 今すぐ身長を比較（無料）',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: '6フィート（183cm）は背が高い？',
          answer: 'アメリカの男性の場合、6\'0"（183cm）は約84パーセンタイル — 会う人の多くより背が高いですが、統計的な「背が高い」のカットオフ（95パーセンタイル、約6\'2"）にはわずかに届きません。日常会話では、それでも「背が高い」と言われることが多いでしょう。',
        },
        {
          question: '女性で5\'8"（173cm）は背が高い？',
          answer: 'はい。アメリカでは5\'8"（173cm）の女性は約95パーセンタイル — 女性20人のうち約19人より背が高いことになります。どの定義でも「背が高い」の領域です。',
        },
        {
          question: '日本で「背が高い」とされる身長は？',
          answer: '平均が低め（男性約172cm、女性約158cm）のため、「背が高い」の目安は男性で約5\'11"（180cm）、女性で約5\'5"（165cm）あたり — 日本人の約95パーセンタイルに相当します。',
        },
        {
          question: '「背が低い」とされる身長は？',
          answer: '「背が高い」の裏返し：5パーセンタイル未満です。アメリカでは男性で約5\'5"（164cm）未満、女性で約5\'0"（151cm）未満が目安。「背が高い」と同様、性別や国によって変わります。',
        },
      ],
      relatedLinks: [
        {
          text: '身長比較',
          href: '/compare/',
        },
        {
          text: '男子の身長パーセンタイル計算',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: '女子の身長パーセンタイル計算',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: '国別平均身長',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    ko: {
      id: 'what-is-tall',
      slug: 'eolmana-keuya-kin-geot',
      title: '"키가 크다"는 기준은 얼마일까? (실제 데이터로 확인)',
      subtitle: '막연한 느낌은 그만 — 실제 백분위 데이터를 기준으로 남성과 여성의 "키가 큰" 기준이 어디부터인지 정리했습니다.',
      metaDescription: '키가 크다고 하려면 얼마나 커야 할까? 실제 백분위 데이터: 미국 남성 6\'2"(188cm), 미국 여성 5\'8"(173cm)부터. 표, 국가별 차이, FAQ 정리.',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5분 읽기',
      badge: '참고 가이드',
      tocTitle: '이 글의 목차',
      intro: {
        lead: '미국 기준으로 남성은 6\'2"(188cm), 여성은 5\'8"(173cm) 정도부터 통계상 "키가 크다"에 해당합니다. 두 수치 모두 약 95백분위수로, 성인 20명 중 19명보다 크다는 의미입니다.',
        paragraphs: [
          '"키가 크다"는 주관적으로 느껴지지만, 통계학자들은 백분위수로 기준을 정합니다. 바로 인구 상위 5%입니다. 아래에서 남성과 여성의 정확한 백분위 표, 같은 숫자라도 성별·국가에 따라 의미가 왜 달라지는지, 그리고 자신의 위치를 확인하는 방법을 정리했습니다.',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: '결론부터: 백분위 표',
          paragraphs: [
            '키 백분위수는 대규모 인구 조사를 바탕으로 만들어집니다(미국의 경우 CDC의 NHANES). "키가 크다"의 기준선으로 연구자들이 흔히 쓰는 것은 95백분위수입니다. 이 기준을 넘으면 같은 성별 100명 중 약 95명보다 크다는 뜻입니다.',
          ],
          table: {
            headers: [
              '백분위수',
              '남성',
              '여성',
              '의미',
            ],
            rows: [
              [
                '50th (평균)',
                '5\'9" (175 cm)',
                '5\'3.5" (161 cm)',
                '정확히 중간',
              ],
              [
                '75th',
                '5\'11" (180 cm)',
                '5\'5" (165 cm)',
                '평균보다 확연히 큼',
              ],
              [
                '90th',
                '6\'0.5" (184 cm)',
                '5\'6.5" (169 cm)',
                '큰 편 — 상위 10%',
              ],
              [
                '95th',
                '6\'2" (188 cm)',
                '5\'8" (173 cm)',
                '키가 큼 — 상위 5%',
              ],
              [
                '97th+',
                '6\'3"+ (190 cm+)',
                '5\'9"+ (175 cm+)',
                '매우 큼 — 상위 3%',
              ],
            ],
            footnote: '미국 성인 기준 대략적인 수치(NHANES). 조사 연도에 따라 약간씩 다를 수 있으니 참고용으로 활용하세요. 정확한 측정값이 아닙니다.',
          },
          callout: {
            type: 'tip',
            text: '가장 많이 오해받는 숫자: 남성의 6\'0"(183cm)는 미국 기준으로 약 84백분위수에 불과합니다. 평균보다 크지만, 통계상 "키가 크다" 기준에는 못 미칩니다.',
          },
          link: {
            text: '→ 내 백분위수 확인하기',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: '남성과 여성: 맥락이 모든 것을 바꿉니다',
          paragraphs: [
            '같은 키라도 성별에 따라 평균일 수도, 키가 큰 것일 수도 있습니다. 5\'8"(173cm) 남성은 약 30백분위수로 평균 이하입니다. 반면 같은 키의 여성은 95백분위수로, 명백히 "키가 큽니다".',
            '그래서 "이 키는 큰가요?"라는 질문은 성별을 모르면 답할 수 없습니다.',
          ],
          bulletPoints: [
            '5\'7"(170cm): 평범한 남성(~25백분위수) vs 키 큰 여성(~90백분위수)',
            '5\'10"(178cm): 평균 이상 남성(~70백분위수) vs 매우 큰 여성(~98백분위수)',
            '6\'0"(183cm): 평균 이상 남성(~84백분위수) vs 극도로 큰 여성(~99백분위수 이상)',
          ],
        },
        {
          id: 'by-country',
          heading: '국가에 따라서도 달라집니다',
          paragraphs: [
            '"키가 크다"는 주변 인구에 상대적인 개념입니다. 네덜란드에서는 남성 평균이 183.8cm라서 6\'2"는 별로 눈에 띄지 않습니다. 반면 일본(남성 평균 약 172cm)에서는 같은 키가 확연히 눈에 띕니다.',
            '전 세계 "키가 크다" 기준(95백분위수)의 대략적인 수치:',
          ],
          bulletPoints: [
            '네덜란드: 남성 ~6\'4"(193cm) / 여성 ~5\'10"(178cm)',
            '미국: 남성 ~6\'2"(188cm) / 여성 ~5\'8"(173cm)',
            '브라질: 남성 ~6\'1"(185cm) / 여성 ~5\'7"(170cm)',
            '일본: 남성 ~5\'11"(180cm) / 여성 ~5\'5"(165cm)',
          ],
          link: {
            text: '→ 국가별 평균 키 전체 표 보기',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: '나는 어디에 해당할까?',
          paragraphs: [
            '숫자도 유용하지만, 직접 보는 것만큼 확실한 것은 없습니다. 자신의 키를 친구, 유명인, 또는 자국 평균과 나란히 비교해 보세요.',
          ],
          link: {
            text: '→ 지금 키 비교하기 (무료)',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: '6피트는 키가 큰 편인가요?',
          answer: '미국 남성의 경우 6\'0"(183cm)는 약 84백분위수입니다. 일상에서 만나는 대부분의 사람보다는 크지만, 통계상 "키가 크다" 기준(95백분위수, 약 6\'2")에는 살짝 못 미칩니다. 다만 일상적인 표현으로는 대부분 "키가 크다"고 말할 것입니다.',
        },
        {
          question: '여성이 5\'8"면 키가 큰 편인가요?',
          answer: '네. 미국에서 5\'8"(173cm) 여성은 약 95백분위수로, 여성 20명 중 약 19명보다 큽니다. 어떤 기준으로도 확실한 "키가 큰" 영역입니다.',
        },
        {
          question: '일본에서 키가 크다고 여겨지는 기준은?',
          answer: '평균이 더 낮기 때문에(남성 약 172cm, 여성 약 158cm), "키가 크다" 기준은 남성 약 5\'11"(180cm), 여성 약 5\'5"(165cm) 정도입니다. 일본 인구의 대략 95백분위수에 해당합니다.',
        },
        {
          question: '그럼 "키가 작다"의 기준은?',
          answer: '"키가 크다"의 반대 개념으로, 5백분위수 이하입니다. 미국 기준으로는 남성 약 5\'5"(164cm) 미만, 여성 약 5\'0"(151cm) 미만입니다. "키가 크다"와 마찬가지로 성별과 국가에 따라 달라집니다.',
        },
      ],
      relatedLinks: [
        {
          text: '키 비교',
          href: '/compare/',
        },
        {
          text: '남아 키 백분위수 계산기',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: '여아 키 백분위수 계산기',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: '국가별 평균 키',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    ar: {
      id: 'what-is-tall',
      slug: 'ma-huwa-al-tool-al-murtfi3',
      title: 'ما الطول الذي يُعتبر "طويلًا"؟ (ببيانات حقيقية)',
      subtitle: 'انسَ الآراء الغامضة — إليك أين يبدأ "الطويل" فعليًا للرجال والنساء، استنادًا إلى بيانات المئينات الحقيقية.',
      metaDescription: 'ما الطول الذي يُعتبر طويلًا؟ بيانات مئينات حقيقية: الرجال الأمريكيون من 6\'2" (188 سم)، والنساء من 5\'8" (173 سم). جداول، وفروقات بين الدول، وأسئلة شائعة.',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5 دقائق للقراءة',
      badge: 'دليل مرجعي',
      tocTitle: 'في هذه المقالة',
      intro: {
        lead: 'في الولايات المتحدة، يُعتبر الرجل "طويلًا" إحصائيًا اعتبارًا من حوالي 6\'2" (188 سم)، والمرأة اعتبارًا من حوالي 5\'8" (173 سم) — وكلاهما قرب المئين 95، أي أن واحدًا فقط من كل 20 بالغًا تقريبًا أطول منهما.',
        paragraphs: [
          'يبدو "الطويل" مفهومًا ذاتيًا، لكن الإحصائيين يرسمون الحد باستخدام المئينات: أعلى 5% من السكان. ستجد أدناه جداول المئينات الدقيقة للرجال والنساء، ولماذا يعني الرقم نفسه أشياء مختلفة تمامًا حسب الجنس والدولة، وكيف تتحقق من موقعك.',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: 'الإجابة المختصرة: جداول المئينات',
          paragraphs: [
            'تأتي مئينات الطول من مسوحات سكانية كبيرة (في الولايات المتحدة، مسح NHANES التابع لمراكز مكافحة الأمراض CDC). المئين 95 هو الحد المعياري الذي يستخدمه الباحثون لتعريف "الطويل" — فوقه، تكون أطول من حوالي 95 شخصًا من كل 100 من جنسك.',
          ],
          table: {
            headers: [
              'المئين',
              'الرجال',
              'النساء',
              'ماذا يعني',
            ],
            rows: [
              [
                'الخمسون (المتوسط)',
                '5\'9" (175 سم)',
                '5\'3.5" (161 سم)',
                'في المنتصف تمامًا',
              ],
              [
                'الخامس والسبعون',
                '5\'11" (180 سم)',
                '5\'5" (165 سم)',
                'فوق المتوسط بوضوح',
              ],
              [
                'التسعون',
                '6\'0.5" (184 سم)',
                '5\'6.5" (169 سم)',
                'طويل نسبيًا — أعلى 10%',
              ],
              [
                'الخامس والتسعون',
                '6\'2" (188 سم)',
                '5\'8" (173 سم)',
                'طويل — أعلى 5%',
              ],
              [
                'السابع والتسعون فأكثر',
                '6\'3"+ (190 سم+)',
                '5\'9"+ (175 سم+)',
                'طويل جدًا — أعلى 3%',
              ],
            ],
            footnote: 'قيم تقريبية للبالغين الأمريكيين (NHANES). تختلف المصادر قليلًا حسب سنة المسح — استخدمها كمرجع لا كقياس دقيق.',
          },
          callout: {
            type: 'tip',
            text: 'أكثر رقم يُساء فهمه: 6\'0" (183 سم) للرجل هو فقط حوالي المئين 84 في الولايات المتحدة — فوق المتوسط، لكنه ليس "طويلًا" إحصائيًا.',
          },
          link: {
            text: '← تحقق من مئينك',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: 'الرجال مقابل النساء: السياق يغيّر كل شيء',
          paragraphs: [
            'يمكن أن يكون الطول نفسه متوسطًا لأحد الجنسين وطويلًا للآخر. الرجل الذي طوله 5\'8" (173 سم) يقع حوالي المئين 30 — دون المتوسط. أما المرأة بطول 5\'8" فهي عند المئين 95 — طويلة بلا جدال.',
            'لهذا لا إجابة لسؤال "هل X طويل؟" دون معرفة الجنس:',
          ],
          bulletPoints: [
            '5\'7" (170 سم): رجل متوسط تقريبًا (حوالي المئين 25) مقابل امرأة طويلة (حوالي المئين 90)',
            '5\'10" (178 سم): رجل فوق المتوسط (حوالي المئين 70) مقابل امرأة طويلة جدًا (حوالي المئين 98)',
            '6\'0" (183 سم): رجل فوق المتوسط (حوالي المئين 84) مقابل امرأة طويلة للغاية (المئين 99 فأكثر)',
          ],
        },
        {
          id: 'by-country',
          heading: 'يعتمد على الدولة أيضًا',
          paragraphs: [
            '"الطويل" نسبي بالنسبة للسكان من حولك. في هولندا، حيث متوسط الرجل 183.8 سم، لا يلفت طول 6\'2" الأنظار كثيرًا. أما في اليابان، حيث متوسط الرجل حوالي 172 سم، فالطول نفسه يبرز بوضوح.',
            'حدود "الطويل" التقريبية (المئين 95) حول العالم:',
          ],
          bulletPoints: [
            'هولندا: حوالي 6\'4" (193 سم) للرجال / 5\'10" (178 سم) للنساء',
            'الولايات المتحدة: حوالي 6\'2" (188 سم) للرجال / 5\'8" (173 سم) للنساء',
            'البرازيل: حوالي 6\'1" (185 سم) للرجال / 5\'7" (170 سم) للنساء',
            'اليابان: حوالي 5\'11" (180 سم) للرجال / 5\'5" (165 سم) للنساء',
          ],
          link: {
            text: '← جدول متوسط الطول حسب الدولة كاملًا',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: 'أين تقف أنت؟',
          paragraphs: [
            'الأرقام مفيدة، لكن لا شيء يضاهي رؤيتها. ضع طولك بجانب صديق أو مشهور أو متوسط بلدك وشاهد الفرق بصريًا:',
          ],
          link: {
            text: '← قارن طولك الآن (مجانًا)',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'هل يُعتبر طول 6\'0" طويلًا؟',
          answer: 'بالنسبة للرجل في الولايات المتحدة، طول 6\'0" (183 سم) هو حوالي المئين 84 — أطول من معظم من تقابلهم، لكنه دون الحد الإحصائي لـ"الطويل" (المئين 95، حوالي 6\'2"). وفي اللغة اليومية، ما زال معظم الناس يصفونه بالطويل.',
        },
        {
          question: 'هل 5\'8" طويل بالنسبة للمرأة؟',
          answer: 'نعم. بطول 5\'8" (173 سم)، تكون المرأة في الولايات المتحدة حوالي المئين 95 — أطول من حوالي 19 امرأة من كل 20. هذا "طويل" بثقة بأي تعريف.',
        },
        {
          question: 'ما الطول الذي يُعتبر طويلًا في اليابان؟',
          answer: 'لأن المتوسطات أدنى (حوالي 172 سم للرجال و158 سم للنساء)، يقع حد "الطويل" حوالي 5\'11" (180 سم) للرجال و5\'5" (165 سم) للنساء — أي تقريبًا المئين 95 من السكان اليابانيين.',
        },
        {
          question: 'ما الطول الذي يُعتبر قصيرًا؟',
          answer: 'المرآة المقابلة لـ"الطويل": دون المئين 5. في الولايات المتحدة يعني ذلك تقريبًا أقل من 5\'5" (164 سم) للرجال وأقل من 5\'0" (151 سم) للنساء. ومثل "الطويل"، يتغير حسب الجنس والدولة.',
        },
      ],
      relatedLinks: [
        {
          text: 'مقارنة الطول',
          href: '/compare/',
        },
        {
          text: 'حاسبة مئين طول الأولاد',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'حاسبة مئين طول البنات',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'متوسط الطول حسب الدولة',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
    ru: {
      id: 'what-is-tall',
      slug: 'kakoy-rost-schitaetsya-vysokim',
      title: 'Какой рост считается «высоким»? (Реальные данные)',
      subtitle: 'Забудьте о расплывчатых мнениях — вот где на самом деле начинается «высокий» рост для мужчин и женщин, по реальным данным процентилей.',
      metaDescription: 'Какой рост считается высоким? Реальные данные процентилей: мужчины в США от 188 см (6\'2"), женщины от 173 см (5\'8"). Таблицы, различия по странам и частые вопросы.',
      datePublished: '2026-10-10',
      dateModified: '2026-10-10',
      readTime: '5 мин чтения',
      badge: 'Справочник',
      tocTitle: 'В этой статье',
      intro: {
        lead: 'В США мужчина статистически считается «высоким» примерно с 188 см (6\'2"), а женщина — с 173 см (5\'8"): оба значения находятся около 95-го процентиля, то есть выше — лишь примерно один взрослый из двадцати.',
        paragraphs: [
          '«Высокий» кажется субъективным понятием, но статистики проводят границу с помощью процентилей: верхние 5% населения. Ниже вы найдёте точные таблицы процентилей для мужчин и женщин, объяснение, почему одна и та же цифра значит совершенно разное в зависимости от пола и страны, и как проверить, где находитесь вы.',
        ],
      },
      sections: [
        {
          id: 'answer',
          heading: 'Короткий ответ: таблицы процентилей',
          paragraphs: [
            'Процентили роста берутся из крупных популяционных исследований (в США — NHANES, проводимое CDC). 95-й процентиль — стандартный порог, который исследователи используют для «высокого» роста: выше него вы выше примерно 95 человек из 100 вашего пола.',
          ],
          table: {
            headers: [
              'Процентиль',
              'Мужчины',
              'Женщины',
              'Что это значит',
            ],
            rows: [
              [
                '50-й (средний)',
                '5\'9" (175 см)',
                '5\'3.5" (161 см)',
                'Ровно посередине',
              ],
              [
                '75-й',
                '5\'11" (180 см)',
                '5\'5" (165 см)',
                'Заметно выше среднего',
              ],
              [
                '90-й',
                '6\'0.5" (184 см)',
                '5\'6.5" (169 см)',
                'Довольно высокий — верхние 10%',
              ],
              [
                '95-й',
                '6\'2" (188 см)',
                '5\'8" (173 см)',
                'Высокий — верхние 5%',
              ],
              [
                '97-й+',
                '6\'3"+ (190 см+)',
                '5\'9"+ (175 см+)',
                'Очень высокий — верхние 3%',
              ],
            ],
            footnote: 'Приблизительные значения для взрослых в США (NHANES). Данные немного различаются от года исследования — используйте как ориентир, а не как точное измерение.',
          },
          callout: {
            type: 'tip',
            text: 'Самое непонятое число: 183 см (6\'0") для мужчины — это лишь около 84-го процентиля в США: выше среднего, но статистически ещё не «высокий» рост.',
          },
          link: {
            text: '→ Узнайте свой процентиль',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'men-vs-women',
          heading: 'Мужчины и женщины: контекст меняет всё',
          paragraphs: [
            'Один и тот же рост может быть средним для одного пола и высоким для другого. Мужчина ростом 173 см (5\'8") находится примерно на 30-м процентиле — ниже среднего. Женщина того же роста — на 95-м процентиле: безоговорочно высокая.',
            'Поэтому на вопрос «это высокий рост?» нельзя ответить, не зная пол:',
          ],
          bulletPoints: [
            '170 см (5\'7"): мужчина около среднего (~25-й процентиль), а женщина — высокая (~90-й процентиль)',
            '178 см (5\'10"): мужчина выше среднего (~70-й), а женщина — очень высокая (~98-й)',
            '183 см (6\'0"): мужчина выше среднего (~84-й), а женщина — исключительно высокая (~99-й+)',
          ],
        },
        {
          id: 'by-country',
          heading: 'Это зависит и от страны',
          paragraphs: [
            '«Высокий» — понятие относительное: всё зависит от людей вокруг. В Нидерландах, где средний рост мужчины — 183,8 см, 188 см почти никого не удивят. В Японии, где средний мужчина — около 172 см, тот же рост заметно выделяется.',
            'Примерные пороги «высокого» роста (95-й процентиль) в разных странах:',
          ],
          bulletPoints: [
            'Нидерланды: ~193 см (6\'4") мужчины / ~178 см (5\'10") женщины',
            'США: ~188 см (6\'2") мужчины / ~173 см (5\'8") женщины',
            'Бразилия: ~185 см (6\'1") мужчины / ~170 см (5\'7") женщины',
            'Япония: ~180 см (5\'11") мужчины / ~165 см (5\'5") женщины',
          ],
          link: {
            text: '→ Полная таблица среднего роста по странам',
            href: '/articles/average-height-by-country/',
          },
        },
        {
          id: 'compare',
          heading: 'А где вы?',
          paragraphs: [
            'Цифры полезны, но наглядность лучше. Поставьте свой рост рядом с ростом друга, знаменитости или средним по вашей стране — и увидите разницу своими глазами:',
          ],
          link: {
            text: '→ Сравните свой рост (бесплатно)',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'Высокий ли рост 183 см (6 футов)?',
          answer: 'Для мужчины в США 183 см (6\'0") — это примерно 84-й процентиль: выше большинства людей, которых вы встречаете, но чуть ниже статистического порога «высокого» роста (95-й процентиль, ~188 см). В обычной речи большинство всё равно назовут такой рост высоким.',
        },
        {
          question: '173 см (5\'8") — высокий рост для женщины?',
          answer: 'Да. Женщина ростом 173 см (5\'8") в США находится примерно на 95-м процентиле — выше примерно 19 женщин из 20. Это однозначно «высокий» рост по любому определению.',
        },
        {
          question: 'Какой рост считается высоким в Японии?',
          answer: 'Поскольку средние значения там ниже (около 172 см у мужчин и 158 см у женщин), порог «высокого» роста находится примерно на 180 см (5\'11") для мужчин и 165 см (5\'5") для женщин — это примерно 95-й процентиль населения Японии.',
        },
        {
          question: 'Какой рост считается низким?',
          answer: 'Зеркальное отражение «высокого»: ниже 5-го процентиля. В США это примерно ниже 164 см (5\'5") для мужчин и ниже 151 см (5\'0") для женщин. Как и «высокий», этот порог зависит от пола и страны.',
        },
      ],
      relatedLinks: [
        {
          text: 'Сравнение роста',
          href: '/compare/',
        },
        {
          text: 'Калькулятор процентиля роста мальчиков',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Калькулятор процентиля роста девочек',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Средний рост по странам',
          href: '/articles/average-height-by-country/',
        },
      ],
    },
  },
};
