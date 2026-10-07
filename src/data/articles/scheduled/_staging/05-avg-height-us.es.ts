import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-us',
  slug: 'estatura-promedio-en-eeuu',
  title: 'Estatura promedio en EE. UU.: hombres, mujeres y por estado',
  subtitle:
    'Las cifras nacionales, un desglose por estado que no encontrarás en ningún otro lado y cómo cambió la estatura de los estadounidenses en 100 años.',
  metaDescription:
    'Estatura promedio en EE. UU.: hombres ~1,75 m, mujeres ~1,63 m (NHANES). Tabla por estado, estados más altos vs. más bajos y la tendencia de 100 años.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
  readTime: '6 min de lectura',
  badge: 'Guía de referencia',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'La estatura promedio en Estados Unidos es de aproximadamente 5 pies 9 pulgadas (175 cm) en hombres y 5 pies 4 pulgadas (163 cm) en mujeres, según datos medidos de la Encuesta Nacional de Examen de Salud y Nutrición (NHANES).',
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
        headers: ['Estado', 'Hombres (aprox.)', 'Mujeres (aprox.)'],
        rows: [
          ['Montana', '5\'11"', '5\'6"'],
          ['Minnesota', '5\'11"', '5\'6"'],
          ['Dakota del Norte', '5\'11"', '5\'6"'],
          ['Dakota del Sur', '5\'10"', '5\'5"'],
          ['Nebraska', '5\'10"', '5\'5"'],
          ['Kansas', '5\'10"', '5\'5"'],
          ['Iowa', '5\'10"', '5\'5"'],
          ['Wisconsin', '5\'10"', '5\'5"'],
          ['Wyoming', '5\'10"', '5\'5"'],
          ['Colorado', '5\'10"', '5\'5"'],
          ['Vermont', '5\'10"', '5\'5"'],
          ['Oregón', '5\'9"', '5\'4"'],
          ['Washington', '5\'9"', '5\'4"'],
          ['Texas', '5\'9"', '5\'4"'],
          ['California', '5\'9"', '5\'4"'],
          ['Florida', '5\'9"', '5\'4"'],
          ['Nueva York', '5\'9"', '5\'4"'],
          ['Misisipi', '5\'8"', '5\'4"'],
          ['Nuevo México', '5\'8"', '5\'3"'],
          ['Hawái', '5\'8"', '5\'3"'],
        ],
        footnote:
          'Valores aproximados recopilados de encuestas de autorreporte (p. ej., BRFSS de los CDC) y comparaciones estatales publicadas. Las estaturas autorreportadas suelen ser más altas que los valores medidos: úsalas como comparación aproximada, no como medidas exactas.',
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
      answer:
        'Los estados del Alto Medio Oeste salen sistemáticamente como los más altos en los datos de encuestas: Montana, Minnesota y Dakota del Norte lideran la mayoría de los rankings estatales, con hombres que promedian alrededor de 5\'11". Ten en cuenta que las cifras estatales son aproximadas, compiladas de encuestas de autorreporte y no de datos medidos.',
    },
    {
      question: '¿Los estadounidenses están volviéndose más altos?',
      answer:
        'En realidad no: la estatura promedio en EE. UU. se ha mantenido más o menos estable desde las décadas de 1970 y 1980. Las grandes ganancias estadounidenses ocurrieron antes en el siglo XX; desde entonces, el norte de Europa y otras regiones alcanzaron y superaron a EE. UU.',
    },
    {
      question: '¿Cuál es la estatura promedio de un hombre en EE. UU.?',
      answer:
        'Aproximadamente 5 pies 9 pulgadas (175 cm), según datos medidos de la NHANES de los CDC. Las encuestas de autorreporte dan números ligeramente más altos porque la gente tiende a redondear hacia arriba.',
    },
    {
      question: '¿Es alto 5\'10" para un hombre en EE. UU.?',
      answer:
        'Está ligeramente por encima del promedio: más o menos entre el percentil 60 y 65 entre los hombres estadounidenses. En los estados más altos, como Montana o Minnesota, está más cerca del promedio, mientras que en los estados más bajos destaca más.',
    },
  ],
  relatedLinks: [
    { text: 'Calculadora de estatura', href: '/height-calculator/' },
    { text: 'Comparador de estatura', href: '/compare/' },
    { text: 'Estatura promedio por país', href: '/articles/average-height-by-country/' },
  ],
};
