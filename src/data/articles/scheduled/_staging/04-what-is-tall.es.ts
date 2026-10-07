import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'what-is-tall',
  slug: 'que-estatura-se-considera-alta',
  title: '¿Qué Estatura Se Considera "Alta"? (Con Datos Reales)',
  subtitle:
    'Olvídate de las opiniones vagas: aquí empieza "alto" realmente para hombres y mujeres, según datos de percentiles reales.',
  metaDescription:
    '¿Qué estatura se considera alta? Datos reales de percentiles: hombres en EE. UU. desde 1,88 m (6\'2"), mujeres desde 1,73 m (5\'8"). Tablas, diferencias por país y preguntas frecuentes.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  readTime: '5 min de lectura',
  badge: 'Guía de referencia',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'En Estados Unidos, un hombre es estadísticamente "alto" a partir de unos 6\'2" (188 cm) y una mujer a partir de unos 5\'8" (173 cm): ambos están cerca del percentil 95, lo que significa que solo 1 de cada 20 adultos es más alto.',
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
        headers: ['Percentil', 'Hombres', 'Mujeres', 'Qué significa'],
        rows: [
          ['50 (promedio)', '5\'9" (175 cm)', '5\'3.5" (161 cm)', 'Justo en el medio'],
          ['75', '5\'11" (180 cm)', '5\'5" (165 cm)', 'Claramente por encima del promedio'],
          ['90', '6\'0.5" (184 cm)', '5\'6.5" (169 cm)', 'Bastante alto: el 10% superior'],
          ['95', '6\'2" (188 cm)', '5\'8" (173 cm)', 'Alto: el 5% superior'],
          ['97+', '6\'3"+ (190 cm+)', '5\'9"+ (175 cm+)', 'Muy alto: el 3% superior'],
        ],
        footnote:
          'Valores aproximados para adultos en EE. UU. (NHANES). Las fuentes varían ligeramente según el año de la encuesta: úsalo como referencia, no como medida exacta.',
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
      answer:
        'Para un hombre en EE. UU., 6\'0" (183 cm) es alrededor del percentil 84: más alto que la mayoría de la gente que conoces, pero justo por debajo del límite estadístico de "alto" (percentil 95, ~6\'2"). En el lenguaje cotidiano, la mayoría de la gente lo seguiría llamando alto.',
    },
    {
      question: '¿1,73 m (5\'8") es alto para una mujer?',
      answer:
        'Sí. Con 5\'8" (173 cm), una mujer en EE. UU. está alrededor del percentil 95: más alta que unas 19 de cada 20 mujeres. Eso es claramente territorio "alto" según cualquier definición.',
    },
    {
      question: '¿Qué estatura se considera alta en Japón?',
      answer:
        'Como los promedios son más bajos (unos 172 cm en hombres y 158 cm en mujeres), el umbral de "alto" está alrededor de 5\'11" (180 cm) en hombres y 5\'5" (165 cm) en mujeres: aproximadamente el percentil 95 de la población japonesa.',
    },
    {
      question: '¿Qué estatura se considera baja?',
      answer:
        'El espejo de "alto": por debajo del percentil 5. En EE. UU. eso es aproximadamente menos de 5\'5" (164 cm) en hombres y menos de 5\'0" (151 cm) en mujeres. Como "alto", cambia según el sexo y el país.',
    },
  ],
  relatedLinks: [
    { text: 'Comparador de estatura', href: '/compare/' },
    { text: 'Calculadora de percentil de estatura para niños', href: '/height-calculator/boys-percentile/' },
    { text: 'Calculadora de percentil de estatura para niñas', href: '/height-calculator/girls-percentile/' },
    { text: 'Estatura promedio por país', href: '/articles/average-height-by-country/' },
  ],
};
