import type { ArticleData, ArticleUiStrings, LocaleArticleSet } from './types';

export const esArticles: ArticleData[] = [
  {
    id: 'avg-height-by-country',
    slug: 'altura-media-por-pais',
    title: 'Estatura Media por País: Tabla Completa 2026',
    subtitle:
      'Descubre la estatura media de hombres y mujeres en 15 países — incluyendo Brasil — y entiende por qué varía tanto en todo el mundo.',
    metaDescription:
      'Tabla de estatura media por país 2026: Brasil, Holanda, EE. UU., Portugal y más. Mira dónde se ubica Brasil y qué explica las diferencias.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 min de lectura',
    badge: 'Guía de referencia',
    tocTitle: 'En este artículo',
    intro: {
      lead:
        'La estatura media en Brasil es de aproximadamente 175,7 cm para hombres y 162,9 cm para mujeres. El país más alto del mundo es Holanda, con 183,8 cm (hombres) y 170,4 cm (mujeres).',
      paragraphs: [
        'La estatura media varía drásticamente entre países — más de 20 cm separan a las poblaciones más altas de las más bajas. La genética, la nutrición en la infancia, la salud pública e incluso el nivel socioeconómico moldean estas cifras a lo largo de generaciones.',
        'A continuación encontrarás una tabla con los valores más citados en estudios publicados, además del contexto que los números por sí solos no muestran: por qué Brasil está donde está y qué significa realmente estar "por encima" o "por debajo" del promedio.',
      ],
    },
    sections: [
      {
        id: 'tabela',
        heading: 'Tabla: estatura media por país',
        paragraphs: [
          'Los valores a continuación son promedios aproximados para adultos, recopilados de estudios poblacionales publicados. Pequeñas variaciones entre fuentes son normales — la estatura media cambia según el año del estudio, el rango de edad medido y la metodología.',
        ],
        table: {
          headers: ['País', 'Hombres (cm)', 'Mujeres (cm)'],
          rows: [
            ['Holanda', '183,8', '170,4'],
            ['Montenegro', '183,3', '169,6'],
            ['Dinamarca', '182,6', '169,1'],
            ['Alemania', '180,3', '166,6'],
            ['Francia', '178,6', '164,5'],
            ['Reino Unido', '177,5', '164,4'],
            ['EE. UU.', '177,1', '163,5'],
            ['Italia', '176,5', '165,0'],
            ['España', '176,1', '163,0'],
            ['Brasil', '175,7', '162,9'],
            ['China', '175,7', '163,5'],
            ['Argentina', '174,5', '161,0'],
            ['Portugal', '173,9', '163,0'],
            ['Corea del Sur', '174,9', '162,3'],
            ['Japón', '172,1', '158,5'],
            ['México', '169,5', '160,8'],
            ['India', '166,3', '155,5'],
          ],
          footnote:
            'Valores aproximados. Las fuentes varían en año, rango de edad y método de medición — úsalos como referencia, no como medida exacta.',
        },
      },
      {
        id: 'brasil-contexto',
        heading: 'Dónde se ubica Brasil',
        paragraphs: [
          'Brasil está justo en la mitad del ranking mundial — por encima del promedio global, pero por debajo de los países del norte de Europa. Dentro de América Latina, Brasil está entre los más altos, por delante de México, Perú y Bolivia.',
          'Un detalle importante: la estatura media brasileña lleva décadas aumentando, acompañando las mejoras en nutrición y salud pública. Cada nueva generación mide, en promedio, un poco más que la anterior — una tendencia observada en casi todos los países en desarrollo.',
        ],
      },
      {
        id: 'por-que-varia',
        heading: '¿Por qué varía tanto la estatura media?',
        paragraphs: [
          'Tres factores explican casi toda la diferencia entre países:',
        ],
        bulletPoints: [
          'Genética (cerca del 80% de la variación individual): las poblaciones con historial de selección hacia mayor estatura — como holandeses y montenegrinos — mantienen esa característica por generaciones.',
          'Nutrición en la infancia: proteínas, calcio y calorías adecuadas en los primeros años de vida son decisivos. Los países que eliminaron la desnutrición infantil vieron subir la estatura media en una generación.',
          'Salud pública: saneamiento, vacunación y acceso a pediatras reducen las enfermedades que limitan el crecimiento.',
        ],
        callout: {
          type: 'tip',
          text: 'La estatura se define principalmente hasta el final de la adolescencia. Una vez que las placas de crecimiento se cierran (alrededor de los 18–20 años), ningún ejercicio ni suplemento aumenta la estatura de forma comprobada.',
        },
      },
      {
        id: 'compare-se',
        heading: 'Cómo compararte con el promedio',
        paragraphs: [
          'Saber el promedio de tu país es curioso — pero lo que realmente importa para la salud es cómo te comparas con tu propia curva de crecimiento a lo largo del tiempo, no con un número único.',
          '¿Quieres ver dónde encajas? Usa nuestra calculadora gratuita para convertir y comparar tu estatura:',
        ],
        link: {
          text: '→ Abrir la Calculadora de Estatura',
          href: '/height-calculator/',
        },
      },
    ],
    faqs: [
      {
        question: '¿Cuál es el país con mayor estatura media del mundo?',
        answer:
          'Holanda lidera: cerca de 183,8 cm para hombres y 170,4 cm para mujeres, según los estudios poblacionales más citados.',
      },
      {
        question: '¿La estatura media de Brasil está aumentando?',
        answer:
          'Sí. Como en la mayoría de los países en desarrollo, las mejoras en nutrición y salud pública vienen elevando el promedio brasileño con cada generación.',
      },
      {
        question: '¿175 cm se considera alto en Brasil?',
        answer:
          'Para hombres, 175 cm está prácticamente en el promedio nacional (175,7 cm). Para mujeres, estaría muy por encima del promedio femenino (162,9 cm) — el contexto de sexo importa tanto como el de país.',
      },
      {
        question: '¿Por qué los holandeses son tan altos?',
        answer:
          'Combinación de genética, excelente nutrición infantil y uno de los mejores sistemas de salud pública del mundo, mantenidos por generaciones. No hay un único "secreto".',
      },
    ],
    relatedLinks: [
      { text: 'Calculadora de Estatura', href: '/height-calculator/' },
      { text: 'Comparador de Estatura', href: '/compare/' },
      { text: 'Cómo medir tu estatura correctamente', href: '/es/articulos/como-medir-tu-altura-correctamente/' },
    ],
  },
  {
    id: 'measure-height-correctly',
    slug: 'como-medir-tu-altura-correctamente',
    title: 'Cómo Medir tu Estatura Correctamente en Casa',
    subtitle:
      'Paso a paso sencillo para medir tu estatura con precisión usando solo una pared, un libro y una cinta métrica — sin errores comunes.',
    metaDescription:
      'Aprende a medir tu estatura correctamente en casa: paso a paso, errores comunes que te roban centímetros y la mejor hora del día para medirte.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 min de lectura',
    badge: 'Paso a paso',
    tocTitle: 'En este artículo',
    intro: {
      lead:
        'Para medir tu estatura correctamente: ponte descalzo contra una pared lisa, talones juntos, mira al frente, marca la parte superior de tu cabeza con un libro y mide desde el suelo hasta la marca. Mídete por la mañana para obtener el valor más alto y consistente.',
      paragraphs: [
        'Parece sencillo, pero la mayoría de las personas mide mal — y el error llega a 2 o 3 centímetros. La postura relajada, la alfombra mullida bajo los pies y medirse por la noche son los culpables más comunes.',
        'Sigue el paso a paso a continuación y tu medida coincidirá con la de un consultorio médico.',
      ],
    },
    sections: [
      {
        id: 'passo-a-passo',
        heading: 'Paso a paso',
        paragraphs: [],
        steps: [
          {
            number: 1,
            title: 'Elige el lugar adecuado',
            description:
              'Una pared lisa y un suelo plano y duro (cerámica, madera o cemento). Evita las alfombras — se hunden y te roban hasta 1 cm de la medida.',
          },
          {
            number: 2,
            title: 'Quítate zapatos y accesorios',
            description:
              'Descalzo, sin calcetines gruesos. Quítate pinzas, gorras o moños altos que alteren la parte superior de la cabeza.',
          },
          {
            number: 3,
            title: 'Coloca el cuerpo',
            description:
              'Talones juntos pegados a la pared, espalda y hombros rectos pero relajados, brazos a los costados. Mira al frente, con la barbilla paralela al suelo.',
          },
          {
            number: 4,
            title: 'Marca la parte superior de la cabeza',
            description:
              'Pide ayuda a alguien o usa un libro de tapa dura: apóyalo en la parte superior de tu cabeza formando un ángulo de 90° con la pared y haz una marca ligera con lápiz.',
          },
          {
            number: 5,
            title: 'Mide desde el suelo hasta la marca',
            description:
              'Usa una cinta métrica, manteniéndola bien estirada y vertical. Anota en centímetros con un decimal.',
          },
        ],
      },
      {
        id: 'melhor-horario',
        heading: 'La mejor hora para medirte',
        paragraphs: [
          'Mídete siempre por la mañana, justo al despertar. Durante el día, la gravedad comprime los discos de la columna y "encoges" de 1 a 2 cm hasta la noche. Para seguir tu estatura a lo largo del tiempo, mídete a la misma hora — de preferencia por la mañana.',
        ],
        callout: {
          type: 'tip',
          text: '¿Vas a comparar medidas antiguas? Verifica que se hayan tomado a la misma hora del día. Una diferencia de 1,5 cm entre la mañana y la noche es totalmente normal.',
        },
      },
      {
        id: 'erros-comuns',
        heading: 'Errores comunes que alteran el resultado',
        paragraphs: [],
        bulletPoints: [
          'Medirse sobre alfombra (se hunde 0,5–1 cm)',
          'Encorvar los hombros o inclinar la cabeza hacia abajo',
          'Usar zapatos o calcetines gruesos',
          'Marcar la frente en lugar del punto más alto de la cabeza',
          'Cinta métrica floja o inclinada',
          'Medirse por la noche y comparar con una medida de la mañana',
        ],
      },
      {
        id: 'criancas',
        heading: 'Cómo medir a los niños',
        paragraphs: [
          'Para niños menores de 2 años, la medida correcta se toma acostado (longitud), no de pie. A partir de los 2 años, usa el mismo paso a paso anterior — y registra la fecha de cada medida para seguir la curva de crecimiento.',
          'Si la curva del niño cae de percentil de forma consistente, vale la pena hablar con el pediatra:',
        ],
        link: {
          text: '→ Entiende el percentil de estatura',
          href: '/es/articulos/percentil-de-altura-explicado/',
        },
      },
    ],
    faqs: [
      {
        question: '¿Puedo medirme solo?',
        answer:
          'Sí, usando un libro apoyado en la pared como marcador. La precisión es un poco menor que con ayuda, pero siguiendo el paso a paso el error queda por debajo de 0,5 cm.',
      },
      {
        question: '¿Por qué mi estatura cambia durante el día?',
        answer:
          'Los discos intervertebrales se comprimen con la gravedad a lo largo del día. Es normal "perder" 1–2 cm entre la mañana y la noche — no es señal de ningún problema.',
      },
      {
        question: '¿Las apps del celular miden la estatura con precisión?',
        answer:
          'Las apps con LiDAR (iPhones Pro recientes) se acercan, pero la pared + cinta métrica sigue siendo el método más confiable y barato.',
      },
    ],
    relatedLinks: [
      { text: 'Calculadora de Estatura', href: '/height-calculator/' },
      { text: 'Estatura media por país', href: '/es/articulos/altura-media-por-pais/' },
    ],
  },
  {
    id: 'predict-child-height',
    slug: 'predecir-la-altura-adulta-de-tu-hijo',
    title: 'Cómo Predecir la Estatura Adulta de tu Hijo',
    subtitle:
      'La fórmula que usan los pediatras para estimar la estatura futura de los niños — con ejemplo calculado y los límites que debes conocer.',
    metaDescription:
      'Predicción de estatura adulta: la fórmula de la talla diana parental que usan los pediatras, ejemplo paso a paso y calculadora gratuita.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 min de lectura',
    badge: 'Guía para padres',
    tocTitle: 'En este artículo',
    intro: {
      lead:
        'La forma más usada por los pediatras para estimar la estatura adulta de un niño es la fórmula de la talla diana parental: para niños, (estatura del padre + estatura de la madre + 13) ÷ 2; para niñas, (estatura del padre + estatura de la madre − 13) ÷ 2. El resultado tiene un margen de cerca de ±8,5 cm.',
      paragraphs: [
        'Esta estimación funciona porque la genética responde por cerca del 80% de la estatura final. Pero es un punto de partida estadístico — no una profecía. La nutrición, la salud y el ritmo individual de la pubertad mueven el resultado final dentro de ese margen.',
        'A continuación: la fórmula con ejemplo, cuándo funciona mejor y cuándo desconfiar del número.',
      ],
    },
    sections: [
      {
        id: 'formula',
        heading: 'La fórmula, con ejemplo',
        paragraphs: [
          'Suma las estaturas de los padres en centímetros, ajusta según el sexo del niño y divide entre 2:',
        ],
        bulletPoints: [
          'Niños: (padre + madre + 13) ÷ 2',
          'Niñas: (padre + madre − 13) ÷ 2',
        ],
        callout: {
          type: 'tip',
          text: 'Ejemplo: padre con 178 cm y madre con 165 cm. Niño: (178 + 165 + 13) ÷ 2 = 178 cm. Niña: (178 + 165 − 13) ÷ 2 = 165 cm. Considera ±8,5 cm de margen — es decir, el niño quedaría entre 169,5 cm y 186,5 cm.',
        },
      },
      {
        id: 'calcule-agora',
        heading: 'Calcúlalo en segundos',
        paragraphs: [
          'Hacer la cuenta a mano es sencillo, pero nuestra calculadora aplica la fórmula automáticamente y muestra el rango completo de la estimación:',
        ],
        link: {
          text: '→ Predecir la estatura de mi hijo (gratis)',
          href: '/height-calculator/child-height-predictor/',
        },
      },
      {
        id: 'limites',
        heading: 'Límites que debes conocer',
        paragraphs: [
          'La fórmula asume condiciones promedio. Pierde precisión cuando:',
        ],
        bulletPoints: [
          'Hay una gran diferencia de estatura entre los padres (el margen real crece)',
          'El niño tuvo desnutrición, enfermedad crónica o pubertad muy precoz/tardía',
          'Los padres no son los padres biológicos (la genética considerada es la biológica)',
          'El niño aún es un bebé — la predicción es más confiable a partir de los 2–3 años',
        ],
        callout: {
          type: 'note',
          text: 'Ningún método casero sustituye la evaluación del crecimiento hecha por el pediatra, que usa curvas de percentiles y, si es necesario, la edad ósea (radiografía de la mano).',
        },
      },
      {
        id: 'o-que-fazer',
        heading: 'Qué hacer con el número',
        paragraphs: [
          'Usa la predicción como referencia tranquila — por ejemplo, para comprar ropa con anticipación o saciar la curiosidad. No la uses para crear expectativas rígidas sobre el niño.',
          'La verdadera señal de alerta no es la predicción en sí, sino la curva de crecimiento: si el niño viene cayendo de percentil de forma consistente, eso sí merece una conversación con el pediatra.',
        ],
        link: {
          text: '→ Entiende el percentil de estatura',
          href: '/es/articulos/percentil-de-altura-explicado/',
        },
      },
    ],
    faqs: [
      {
        question: '¿La predicción es confiable?',
        answer:
          'Es la mejor estimación sencilla disponible y la usan los pediatras en todo el mundo — pero con un margen de ±8,5 cm. Para una evaluación precisa, el pediatra combina la fórmula con la curva de crecimiento y la edad ósea.',
      },
      {
        question: '¿Los ejercicios o suplementos cambian la estatura prevista?',
        answer:
          'No hay evidencia de que ejercicios, estiramientos o suplementos aumenten la estatura más allá del potencial genético. Una buena nutrición y un sueño adecuado en la infancia garantizan que el niño alcance ese potencial — no que lo supere.',
      },
      {
        question: '¿A qué edad la predicción es más precisa?',
        answer:
          'A partir de los 2–3 años la curva de crecimiento del niño ya da pistas sólidas. En la pubertad, la predicción combinada con la edad ósea es la más precisa.',
      },
    ],
    medicalDisclaimer:
      'Contenido educativo, no es orientación médica. Las estimaciones de estatura no sustituyen la evaluación de un pediatra. Si tienes preocupaciones sobre el crecimiento de tu hijo, consulta a un médico.',
    relatedLinks: [
      { text: 'Predictor de estatura infantil', href: '/height-calculator/child-height-predictor/' },
      { text: 'Percentil de estatura explicado', href: '/es/articulos/percentil-de-altura-explicado/' },
    ],
  },
  {
    id: 'height-percentile-explained',
    slug: 'percentil-de-altura-explicado',
    title: 'Percentil de Estatura: Qué Significa y Cuándo Preocuparse',
    subtitle:
      'Entiende de una vez qué quiere decir el pediatra con "percentil 40" — y cuál es la verdadera señal de alerta en la curva de crecimiento.',
    metaDescription:
      'Percentil de estatura explicado para padres: qué significa, cómo leer la curva de crecimiento (CDC/OMS) y cuándo buscar al pediatra.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 min de lectura',
    badge: 'Guía para padres',
    tocTitle: 'En este artículo',
    intro: {
      lead:
        'Estar en el percentil 40 de estatura significa que el 40% de los niños de la misma edad y sexo son más bajos y el 60% son más altos. No es una calificación — es una comparación. Lo que importa no es el número aislado, sino si el niño se mantiene en el mismo percentil a lo largo del tiempo.',
      paragraphs: [
        'Muchos padres se asustan al escuchar "percentil 15" como si fuera una reprobación. No lo es. Un niño que siempre estuvo en el percentil 15 y continúa en él está creciendo exactamente como debería.',
        'En esta guía: cómo leer el número, qué muestran las curvas del CDC y de la OMS y cuál es el verdadero motivo para buscar al pediatra.',
      ],
    },
    sections: [
      {
        id: 'o-que-e',
        heading: 'Lo que el percentil realmente dice',
        paragraphs: [
          'El percentil posiciona al niño en relación con una población de referencia saludable de la misma edad y sexo:',
        ],
        bulletPoints: [
          'Percentil 50 = exactamente en el promedio (la mitad arriba, la mitad abajo)',
          'Percentil 90 = más alto que el 90% de los niños de la misma edad',
          'Percentil 10 = más alto que solo el 10% (es decir, el 90% son más altos)',
        ],
        callout: {
          type: 'tip',
          text: 'Piensa en el percentil como una "fila": dice dónde está el niño en la fila, no si le está yendo bien. Ir bien = continuar en la misma posición de la fila a lo largo de los años.',
        },
      },
      {
        id: 'trajetoria',
        heading: 'La trayectoria importa más que la posición',
        paragraphs: [
          'Los pediatras miran el dibujo de la curva, no el punto. Tres patrones:',
        ],
        bulletPoints: [
          'Curva estable (siempre cerca del mismo percentil) → crecimiento normal, incluso en el percentil 5 o 95',
          'Caída consistente de percentil (ej.: 75 → 50 → 30) → merece evaluación médica',
          'Por debajo del percentil 3 o por encima del 97 → el pediatra investigará con más atención',
        ],
      },
      {
        id: 'curvas',
        heading: 'De dónde vienen las curvas: CDC y OMS',
        paragraphs: [
          'Las curvas de referencia vienen de grandes estudios poblacionales: el CDC 2000 (EE. UU.) para niños mayores y los estándares de la OMS para menores de 5 años. Una calculadora de percentiles confiable debe decir qué base de datos usa — si no lo dice, desconfía.',
          'Nuestra calculadora usa los datos reales del CDC 2000 y de la OMS, sin aproximaciones:',
        ],
        link: {
          text: '→ Calcular el percentil de estatura (gratis)',
          href: '/height-calculator/boys-percentile/',
        },
      },
      {
        id: 'quando-procurar',
        heading: 'Cuándo buscar al pediatra',
        paragraphs: [
          'Usa el percentil como contexto, pero busca al pediatra si:',
        ],
        bulletPoints: [
          'El percentil cae de forma consistente entre consultas',
          'El crecimiento parece haberse detenido por muchos meses',
          'El niño está por debajo del percentil 3 o por encima del 97 sin seguimiento',
          'Simplemente estás preocupado — la intuición de papá/mamá cuenta',
        ],
        callout: {
          type: 'warning',
          text: 'Una sola medida dice muy poco. El patrón a lo largo de varias medidas — con fechas registradas — es lo que tiene valor médico.',
        },
      },
    ],
    faqs: [
      {
        question: '¿Un percentil bajo significa que mi hijo será bajo?',
        answer:
          'No necesariamente. El percentil describe la posición actual en la curva, y los niños en el percentil 10 pueden perfectamente terminar la adolescencia dentro del rango previsto por la genética de la familia. Lo importante es la estabilidad de la curva.',
      },
      {
        question: '¿Cuál es la diferencia entre las curvas del CDC y de la OMS?',
        answer:
          'La OMS publica estándares para menores de 5 años basados en niños amamantados en condiciones ideales; el CDC 2000 cubre de los 2 a los 20 años con datos de la población estadounidense. Las buenas calculadoras usan la base correcta para cada edad.',
      },
      {
        question: 'Mi hijo cayó del percentil 60 al 45. ¿Es grave?',
        answer:
          'Una variación pequeña entre dos medidas puede ser normal (error de medición, hora del día). La señal de alerta es la caída consistente a lo largo de varias consultas. En caso de duda, muestra las medidas con fecha al pediatra.',
      },
    ],
    medicalDisclaimer:
      'Contenido educativo, no es orientación médica. Las curvas de percentiles son herramientas de detección — solo un profesional de la salud puede evaluar el crecimiento de tu hijo. En caso de duda, consulta a un pediatra.',
    relatedLinks: [
      { text: 'Percentil de niños', href: '/height-calculator/boys-percentile/' },
      { text: 'Percentil de niñas', href: '/height-calculator/girls-percentile/' },
      { text: 'Predecir la estatura adulta de tu hijo', href: '/es/articulos/predecir-la-altura-adulta-de-tu-hijo/' },
    ],
  },
];

export const esArticleUi: ArticleUiStrings = {
  hubSegment: 'articulos',
  navLabel: 'Artículos',
  homeLabel: 'Inicio',
  hubTitle: 'Artículos sobre Estatura',
  hubSubtitle: 'Guías prácticas escritas para responder exactamente lo que buscaste — sin rodeos.',
  hubDescription: 'Guías prácticas sobre estatura: estatura media por país, cómo medir tu estatura, predecir la estatura adulta de tu hijo y percentiles de crecimiento.',
  faqHeading: 'Preguntas frecuentes',
  readAlsoHeading: 'Lee también',
  tocLabel: 'En este artículo',
};

export const esArticleSet: LocaleArticleSet = {
  ui: esArticleUi,
  articles: esArticles,
};