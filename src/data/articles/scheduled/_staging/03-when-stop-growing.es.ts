import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'when-stop-growing',
  slug: 'cuando-dejan-de-crecer-los-ninos',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  title: '¿Cuándo dejan de crecer los niños? (y las niñas)',
  subtitle:
    'La biología honesta de cuándo termina el crecimiento en altura, las señales de que aún sigues creciendo y por qué ningún suplemento puede reabrir los cartílagos de crecimiento cerrados.',
  metaDescription:
    '¿Cuándo dejan de crecer los niños? La mayoría termina entre los 18 y 21 años, las niñas entre los 16 y 18. Señales de que aún creces, datos sobre quienes maduran tarde y mitos desmentidos.',
  readTime: '6 min de lectura',
  badge: 'Guía para adolescentes y padres',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'La mayoría de los niños deja de crecer entre los 18 y los 21 años, y la mayoría de las niñas entre los 16 y los 18. El crecimiento termina cuando los cartílagos de crecimiento (placas epifisarias) de los huesos largos se fusionan por completo — y una vez que se cierran, nada que comas, tomes o hagas puede hacerte más alto.',
    paragraphs: [
      'Si eres un adolescente (o el padre de uno) que se pregunta «¿ya terminé de crecer?», estás haciendo una pregunta de biología con una respuesta clara — pero también con mucha variación individual. Quienes maduran tarde pueden seguir creciendo hasta pasados los 20, mientras que quienes maduraron temprano pueden terminar años antes.',
      'Esta guía explica la ciencia en lenguaje sencillo: cómo funcionan los cartílagos de crecimiento, las señales de que aún sigues creciendo, qué pueden esperar quienes maduran tarde y la verdad honesta sobre los productos que prometen centímetros extra.',
    ],
  },
  sections: [
    {
      id: 'growth-plates',
      heading: 'Cómo termina realmente el crecimiento: los cartílagos de crecimiento',
      paragraphs: [
        'Los huesos largos (muslos, espinillas, brazos) crecen desde zonas de cartílago blando cerca de sus extremos llamadas placas epifisarias o «cartílagos de crecimiento». Durante la infancia y la pubertad, estas placas añaden nuevo tejido óseo, alargando el hueso. El aumento de las hormonas sexuales (estrógeno en las niñas, testosterona en los niños) hace que las placas terminen endureciéndose y convirtiéndose en hueso sólido. Esa fusión es la línea de meta: después, el hueso ya no puede alargarse.',
        'Las niñas suelen llegar a este punto antes porque el estrógeno aumenta más pronto y con un patrón que cierra las placas más rápido. Los niños tienen más tiempo por delante, y esta es una de las razones por las que los hombres adultos son, en promedio, más altos que las mujeres adultas.',
      ],
      table: {
        headers: ['', 'Estirón', 'Las placas suelen cerrarse'],
        rows: [
          ['Niñas', 'De 10 a 14 años', 'De 16 a 18 años'],
          ['Niños', 'De 12 a 16 años', 'De 18 a 21 años'],
        ],
        footnote:
          'Rangos típicos. La edad de cada persona varía mucho: son promedios de la población, no plazos personales.',
      },
      callout: {
        type: 'tip',
        text: 'El cierre es gradual, no un interruptor que se apaga el día de tu cumpleaños. El crecimiento se ralentiza hasta casi detenerse (menos de 1 cm por año) durante uno o dos años antes de cesar por completo.',
      },
    },
    {
      id: 'signs-still-growing',
      heading: 'Señales de que aún sigues creciendo',
      paragraphs: [
        '¿Te preguntas si tú (o tu hijo adolescente) aún tienes crecimiento por delante? Fíjate en estas pistas: cuantas más se cumplan, más probable es que el crecimiento continúe:',
      ],
      bulletPoints: [
        'Tu número de calzado ha aumentado en el último año (los pies suelen crecer justo antes de un estirón de estatura)',
        'Te mides más alto que hace 6–12 meses (lleva un registro: la memoria no es fiable)',
        'La pubertad sigue avanzando claramente (la voz aún cambia, el patrón del estirón continúa)',
        'Estás en medio de tu año de crecimiento más rápido, no después de él',
        'Un médico te ha dicho que tu «edad ósea» es menor que tu edad real',
      ],
      callout: {
        type: 'tip',
        text: 'Mide tu estatura cada 3 meses, siempre por la mañana, y anótala. Una línea plana durante 12 meses es la señal casera más clara de que el crecimiento ha terminado.',
      },
    },
    {
      id: 'late-bloomers',
      heading: 'Quienes maduran tarde: crecer hasta los veintitantos',
      paragraphs: [
        'Algunos adolescentes simplemente tienen un reloj más lento: los médicos lo llaman retraso constitucional del crecimiento y la pubertad. Suele ser hereditario: si un padre maduró tarde, es probable que el hijo también lo haga. Quienes maduran tarde comienzan su estirón años después que sus compañeros, siguen creciendo hasta el final de la adolescencia o principios de los veinte, y por lo general terminan dentro de su rango genético normal de estatura.',
        'Madurar tarde no es un trastorno ni significa que vayas a quedarte bajo: significa que tu calendario va desplazado. La frustración es real, pero la biología casi siempre se resuelve sola.',
      ],
      callout: {
        type: 'note',
        text: 'Una cosa es ir tarde y otra muy distinta es que no llegue nunca. Si no hay señales de pubertad a los 14 años en las niñas o a los 15 en los niños, o el crecimiento se ha detenido por completo durante más de un año en plena edad del estirón, acude a un médico en lugar de limitarte a esperar.',
      },
    },
    {
      id: 'myths',
      heading: 'Desmintiendo mitos: lo que NO puede hacerte más alto',
      paragraphs: [
        'Internet vende mucha esperanza a los adolescentes preocupados por su estatura. Esta es la versión honesta:',
      ],
      bulletPoints: [
        'Pastillas, gominolas y suplementos «para crecer»: no hay evidencia creíble de que funcionen. Muchos son solo vitaminas a precios inflados; algunos contienen hormonas no declaradas, lo cual es peligroso.',
        'Colgarse, estirarse y rutinas de inversión: descomprimen temporalmente la columna (como la diferencia entre la mañana y la noche) pero no alargan los huesos.',
        'Zapatos especiales y plantillas: te hacen parecer más alto mientras los llevas, pero no cambian nada de tu estatura real.',
        'Programas y libros electrónicos «para crecer»: si prometen centímetros después de los 20, es una estafa. La biología no negocia.',
      ],
      callout: {
        type: 'warning',
        text: 'Lo que realmente apoyó tu crecimiento ocurrió durante los años de crecimiento: dormir lo suficiente (la hormona del crecimiento se libera sobre todo en el sueño profundo), buena nutrición, ejercicio regular y evitar el tabaco y el alcohol en exceso durante la adolescencia. Nada de esto añade estatura una vez que las placas se cierran, pero aseguró que alcanzaras todo tu potencial mientras estaban abiertas.',
      },
      link: {
        text: '→ Predice tu estatura adulta (gratis)',
        href: '/height-calculator/child-height-predictor/',
      },
    },
  ],
  faqs: [
    {
      question: '¿Se puede crecer después de los 18?',
      answer:
        'Es posible si eres varón: muchos niños siguen creciendo lentamente hasta los 20 o 21 años. La mayoría de las niñas termina a los 18. Una vez que los cartílagos de crecimiento se fusionan, ya no es posible ganar más estatura, aunque una mejor postura puede hacerte parecer uno o dos centímetros más alto.',
    },
    {
      question: '¿Quienes maduran tarde terminan siendo más altos?',
      answer:
        'No necesariamente: terminan dentro de su rango genético, solo que con un calendario retrasado. Puede parecer que «alcanzan y superan» a sus compañeros durante un tiempo, porque sus compañeros terminaron de crecer antes mientras el que madura tarde aún está en pleno estirón.',
    },
    {
      question: '¿Cómo saber si mis cartílagos de crecimiento están cerrados?',
      answer:
        'La única forma definitiva es una radiografía de la mano/muñeca para evaluar la «edad ósea», interpretada por un médico. Las pistas caseras de que probablemente están cerrados: ningún cambio medible de estatura en 12 meses o más, y una pubertad completada hace más de dos años.',
    },
    {
      question: '¿Los suplementos, colgarse o estirarse me harán más alto?',
      answer:
        'No. No hay evidencia creíble de que ningún suplemento, ejercicio o aparato alargue los huesos una vez que los cartílagos de crecimiento se cierran. Ahorra tu dinero y desconfía de cualquier producto que prometa lo contrario, especialmente de los dirigidos a adolescentes.',
    },
  ],
  medicalDisclaimer:
    'Contenido educativo, no consejo médico. Las preocupaciones sobre el crecimiento —especialmente la pubertad tardía o un frenazo repentino del crecimiento— merecen la evaluación de un médico, idealmente un endocrinólogo pediátrico. Nunca tomes hormonas ni productos «para crecer» sin supervisión médica.',
  relatedLinks: [
    { text: 'Predictor de estatura infantil', href: '/height-calculator/child-height-predictor/' },
    { text: 'Predice la estatura adulta de tu hijo', href: '/articles/predict-your-childs-adult-height/' },
    { text: 'Percentil de estatura explicado', href: '/articles/height-percentile-explained/' },
  ],
};
