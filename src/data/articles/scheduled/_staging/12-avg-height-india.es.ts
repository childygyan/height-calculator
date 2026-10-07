import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-india',
  slug: 'estatura-promedio-en-india',
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  title: 'Estatura promedio en India: hombres, mujeres y tendencias',
  subtitle:
    'Los números honestos sobre la estatura de la India: hombres, mujeres, diferencias regionales y cómo un siglo de cambios está haciendo a los indios más altos.',
  metaDescription:
    'Estatura promedio en India: aproximadamente 166 cm en hombres y 155 cm en mujeres. Variación regional, tendencias de 100 años y cómo te comparas.',
  readTime: '6 min de lectura',
  badge: 'Guía de referencia',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'La estatura promedio en India es de aproximadamente 166 cm (5\'5") en hombres y 155 cm (5\'1") en mujeres. Son aproximaciones nacionales: los promedios reales varían varios centímetros entre regiones, entre ciudades y pueblos, y entre generaciones.',
    paragraphs: [
      'En internet encontrarás muchas cifras distintas sobre la estatura de la India, y rara vez coinciden. Eso es porque India no es una sola población en este aspecto: un hombre punyabí y una mujer tamil provienen de historias genéticas y nutricionales muy diferentes, y ningún número único puede representar a ambos.',
      'Esta guía te da los números principales con honestidad, explica las diferencias regionales que la mayoría de los artículos pasan por alto y muestra la tendencia más clara de los datos: los indios son cada vez más altos, generación tras generación.',
    ],
  },
  sections: [
    {
      id: 'headline-numbers',
      heading: 'Los números principales',
      paragraphs: [
        'Las encuestas nacionales de adultos indios coinciden siempre en el mismo rango:',
      ],
      table: {
        headers: ['Grupo', 'Estatura promedio', 'En pies/pulgadas'],
        rows: [
          ['Hombres', '~166 cm', '~5\'5"'],
          ['Mujeres', '~155 cm', '~5\'1"'],
        ],
        footnote:
          'Promedios nacionales aproximados de encuestas de población. Las cifras varían según el año del estudio, el grupo de edad y la metodología: tómalas como puntos de referencia, no como medidas exactas.',
      },
      callout: {
        type: 'note',
        text: 'Por qué importa el «~»: cada encuesta mide rangos de edad y regiones distintos. En fuentes creíbles aparecen cifras entre 164–168 cm para hombres y 153–157 cm para mujeres. Quien cite un solo decimal está dando a entender más precisión de la que los datos permiten.',
      },
    },
    {
      id: 'regional-differences',
      heading: 'India no es una sola estatura: diferencias regionales',
      paragraphs: [
        'El promedio nacional esconde una variación real. A grandes rasgos:',
      ],
      bulletPoints: [
        'Los estados del norte y noroeste (Punyab, Haryana, partes de Rayastán y Uttar Pradesh) promedian varios centímetros por encima de la cifra nacional: una mezcla de genética y dietas históricamente ricas en lácteos.',
        'Los estados del sur y del este promedian por debajo de la cifra nacional, con los promedios más bajos en partes del noreste y en las regiones tribales del centro.',
        'Los indios urbanos miden más que los rurales en todas las edades: la brecha refleja sobre todo la nutrición infantil, el acceso a la sanidad y la carga de enfermedades, más que cualquier otra cosa.',
      ],
      callout: {
        type: 'tip',
        text: 'Compararte con el «promedio indio» solo tiene sentido frente a tu propia región y origen. Una mujer de 162 cm de Kerala y un hombre de 170 cm de Punyab son ambos perfectamente típicos: para sus poblaciones.',
      },
    },
    {
      id: 'getting-taller',
      heading: 'La historia de 100 años: los indios son cada vez más altos',
      paragraphs: [
        'Hace un siglo, el indio promedio medía unos 160 cm o menos. Las hambrunas, la desnutrición crónica y las enfermedades infecciosas mantuvieron bajas a generaciones enteras. Lo que cambió es una de las grandes historias de salud pública del siglo XX:',
      ],
      bulletPoints: [
        'La Revolución Verde (años 60–70) aumentó drásticamente la disponibilidad de alimentos y puso fin a la era de las hambrunas masivas.',
        'La caída de la mortalidad infantil y un mejor control de enfermedades hicieron que más niños alcanzaran todo su potencial de crecimiento.',
        'El aumento de los ingresos llevó más proteínas —sobre todo lácteos, huevos y legumbres— a la dieta diaria.',
      ],
      callout: {
        type: 'tip',
        text: 'El resultado: cada generación desde la independencia ha promediado un poco más de estatura que la anterior. La tendencia sigue en marcha: los adolescentes indios de hoy son mediblemente más altos que sus abuelos a la misma edad.',
      },
    },
    {
      id: 'how-you-compare',
      heading: '¿Cómo te comparas?',
      paragraphs: [
        'Los promedios son interesantes, pero no pueden decirte nada sobre tu propio crecimiento: para eso hacen falta tu historia personal, la estatura de tus padres y tu curva de crecimiento.',
        'Descubre dónde estás y lo que predice tu patrón familiar:',
      ],
      link: {
        text: '→ Abre la calculadora de estatura',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: '¿Los indios son cada vez más altos?',
      answer:
        'Sí. Un siglo de mejor nutrición, control de enfermedades y aumento de ingresos ha elevado la estatura promedio con cada generación. La tendencia es más clara al comparar abuelos, padres y adolescentes de hoy, y no se ha detenido.',
    },
    {
      question: '¿Cuál es la estatura promedio del hombre indio?',
      answer:
        'Aproximadamente 166 cm (5\'5"), según encuestas nacionales de población. Los hombres de los estados del norte y noroeste promedian unos centímetros más; los de las regiones del sur, del este y tribales promedian unos centímetros menos.',
    },
    {
      question: '¿Por qué los indios del sur son más bajos en promedio?',
      answer:
        'Es una mezcla de genética e historia, no una sola causa. Las poblaciones del sur tienen orígenes ancestrales distintos a los del norte, y durante gran parte del siglo XX el sur también enfrentó mayores limitaciones nutricionales. A medida que la nutrición se iguala, las brechas regionales se estrechan, que es exactamente lo que cabría esperar si el ambiente —no solo los genes— explicara gran parte de la diferencia.',
    },
    {
      question: '¿170 cm (5\'7") se considera alto en India?',
      answer:
        'Para un hombre, 170 cm está unos centímetros por encima del promedio nacional de ~166 cm: notablemente por encima de la media, aunque no extraordinariamente alto. Para una mujer, 170 cm está muy por encima del promedio de ~155 cm y se consideraría alta en cualquier parte del país.',
    },
  ],
  relatedLinks: [
    { text: 'Calculadora de estatura', href: '/height-calculator/' },
    { text: 'Comparador de estaturas', href: '/compare/' },
    { text: 'Estatura promedio por país', href: '/articles/average-height-by-country/' },
  ],
};
