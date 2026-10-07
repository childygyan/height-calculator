import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'avg-height-by-age',
  slug: 'estatura-promedio-por-edad-tabla',
  title: 'Estatura Promedio por Edad (0–20): La Tabla Completa',
  subtitle:
    'La estatura promedio para cada edad, desde el nacimiento hasta los 20 años, en niños y niñas — además de los hitos de crecimiento que explican los números.',
  metaDescription:
    'Tabla de estatura promedio por edad (0–20) en niños y niñas, basada en datos de crecimiento de CDC/OMS. Mira qué es normal a cada edad y cuándo conviene revisar el percentil.',
  datePublished: '2026-10-07',
  dateModified: '2026-10-07',
  readTime: '7 min de lectura',
  badge: 'Guía de referencia',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'Un niño de 10 años mide en promedio unos 140 cm, sea niño o niña; a los 18, los promedios son aproximadamente 179 cm para los jóvenes y 166 cm para las jóvenes. Las niñas superan brevemente a los niños alrededor de los 11–12 años, y luego los niños toman la delantera durante su estirón puberal más tardío.',
    paragraphs: [
      'Si estás verificando si tu hijo o hija está «normal para su edad», esta tabla es tu punto de partida. Los valores a continuación son cifras de referencia redondeadas del percentil 50, tomadas de las curvas de crecimiento CDC 2000 (edades 2–20) y de los estándares de crecimiento infantil de la OMS (menores de 2 años) — las mismas referencias que usan los pediatras.',
      'Una nota importante antes de los números: promedio no es lo mismo que ideal. Los niños sanos se distribuyen ampliamente alrededor de estos valores, y una sola medición importa mucho menos que el patrón a lo largo del tiempo.',
    ],
  },
  sections: [
    {
      id: 'tabla',
      heading: 'La tabla completa: estatura promedio por edad',
      paragraphs: [
        'Busca la edad y lee en horizontal. Los valores son referencias aproximadas del percentil 50, en centímetros.',
      ],
      table: {
        headers: ['Edad', 'Niños (cm)', 'Niñas (cm)'],
        rows: [
          ['Nacimiento', '50', '49'],
          ['1 año', '76', '75'],
          ['2 años', '88', '87'],
          ['3 años', '96', '95'],
          ['4 años', '103', '102'],
          ['5 años', '110', '109'],
          ['6 años', '116', '115'],
          ['7 años', '122', '121'],
          ['8 años', '128', '128'],
          ['9 años', '134', '134'],
          ['10 años', '140', '140'],
          ['11 años', '145', '146'],
          ['12 años', '151', '152'],
          ['13 años', '158', '158'],
          ['14 años', '166', '162'],
          ['15 años', '172', '164'],
          ['16 años', '176', '165'],
          ['17 años', '178', '166'],
          ['18 años', '179', '166'],
          ['19 años', '179', '166'],
          ['20 años', '179', '166'],
        ],
        footnote:
          'Valores de referencia redondeados del percentil 50, basados en las curvas de crecimiento CDC 2000 (edades 2–20) y en los estándares de crecimiento infantil de la OMS (menores de 2 años). Los niños sanos varían ampliamente alrededor de estas cifras.',
      },
      callout: {
        type: 'tip',
        text: 'Conversiones rápidas: 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
      },
    },
    {
      id: 'hitos',
      heading: 'Hitos clave de crecimiento que revela la tabla',
      paragraphs: [
        'Los números brutos esconden algunos patrones que vale la pena conocer:',
      ],
      bulletPoints: [
        'El crecimiento más rápido ocurre en el primer año: los bebés ganan unos 25 cm, más que en cualquier otro año de la vida.',
        'Las niñas inician su estirón puberal primero — por eso son ligeramente más altas que los niños alrededor de los 11–12 años.',
        'Los niños empiezan su estirón unos dos años más tarde, pero crecen durante más tiempo, por lo que el promedio masculino termina unos 13 cm más alto.',
        'Las placas de crecimiento suelen cerrarse alrededor de los 15–17 años en las niñas y 17–19 en los niños; después de eso, el aumento significativo de estatura se detiene.',
        'Entre los 8 y los 10 años, niños y niñas tienen una estatura promedio casi idéntica — las diferencias por sexo antes de la pubertad son mínimas.',
      ],
    },
    {
      id: 'leer-numeros',
      heading: 'Cómo interpretar estos números',
      paragraphs: [
        'La tabla muestra el punto medio — la mitad de los niños están por encima y la mitad por debajo. Estar en el percentil 25 o en el 75 es igual de normal que estar en el 50, siempre que el niño se haya mantenido cerca de esa línea.',
        'Lo que realmente importa para los pediatras no es ningún número aislado de esta tabla, sino la curva propia del niño: un percentil estable a lo largo de los años significa un crecimiento saludable, incluso si ese percentil es el 10 o el 90.',
        'Para ver exactamente dónde se ubica un niño en las curvas oficiales, usa las calculadoras de percentiles:',
      ],
      link: {
        text: '→ Calculadora de percentil de estatura para niños',
        href: '/height-calculator/boys-percentile/',
      },
    },
    {
      id: 'cuando-revisar',
      heading: 'Cuándo los números merecen una segunda mirada',
      paragraphs: [
        'No te preocupes por una sola medición. Presta atención al patrón:',
      ],
      bulletPoints: [
        'El percentil baja de forma constante entre controles (por ejemplo, 60 → 40 → 25)',
        'El crecimiento parece detenerse durante muchos meses, fuera de los períodos lentos normales',
        'El niño está por debajo del percentil 3 o por encima del 97 sin seguimiento médico',
      ],
      callout: {
        type: 'note',
        text: 'Si alguno de estos puntos te suena familiar, lleva las mediciones con fecha al pediatra — el patrón a lo largo del tiempo es lo que tiene valor médico, no ningún número aislado.',
      },
      link: {
        text: '→ Tabla de estatura para niñas (basada en CDC/OMS)',
        href: '/height-calculator/girls-chart/',
      },
    },
  ],
  faqs: [
    {
      question: '¿Es alto 1,73 m (5\'8") para un niño de 13 años?',
      answer:
        'Sí — está bastante por encima del promedio. Un niño de 13 años mide en promedio unos 158 cm, así que 173 cm se ubica aproximadamente en el percentil 90 o más. Para una niña de 13 años (promedio también de ~158 cm a esa edad), también está por encima del promedio. Ten en cuenta que los que maduran temprano pueden ser altos a los 13 y terminar en el promedio de adultos cuando sus compañeros los alcancen.',
    },
    {
      question: '¿Por qué los niños son más altos que las niñas después de la pubertad?',
      answer:
        'La testosterona impulsa un estirón más tardío y prolongado en los niños: empieza unos dos años después del estirón de las niñas y dura más tiempo, y las placas de crecimiento de los niños se cierran más tarde (alrededor de los 17–19 frente a 15–17 en las niñas). Antes de la pubertad, los sexos son casi idénticos en estatura promedio.',
    },
    {
      question: 'Mi hijo está por debajo del promedio — ¿debo preocuparme?',
      answer:
        'No por una sola medición. Revisa el percentil y, más importante aún, si se ha mantenido estable a lo largo del tiempo — un niño que siempre ha estado cerca del percentil 15 está creciendo con normalidad. Consulta al pediatra si el percentil sigue bajando, el crecimiento se detiene durante muchos meses o simplemente te preocupa.',
    },
    {
      question: '¿A qué edad dejan de crecer los adolescentes?',
      answer:
        'La mayoría de las niñas terminan de crecer alrededor de los 15–16 años, aproximadamente dos años después de su primera menstruación. La mayoría de los niños termina alrededor de los 17–18, con pequeños aumentos que a veces continúan hasta principios de los 20. Una vez que las placas de crecimiento se cierran, ningún ejercicio ni suplemento puede agregar estatura significativa.',
    },
  ],
  relatedLinks: [
    { text: 'Tabla de estatura para niños', href: '/height-calculator/boys-chart/' },
    { text: 'Tabla de estatura para niñas', href: '/height-calculator/girls-chart/' },
    { text: 'Percentil de estatura para niños', href: '/height-calculator/boys-percentile/' },
    { text: 'Percentil de estatura para niñas', href: '/height-calculator/girls-percentile/' },
    { text: 'Predice la estatura adulta de tu hijo', href: '/articles/predict-your-childs-adult-height/' },
  ],
};
