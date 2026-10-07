import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'teenager-height-normal',
  slug: 'estatura-adolescente-es-normal',
  title: '¿La estatura de mi hijo adolescente es normal? Pubertad y estirones',
  subtitle:
    'El momento de la pubertad explica casi todos los adolescentes «demasiado bajos» o «demasiado altos». Esto es lo que es normal en cada etapa — y el único patrón que de verdad importa.',
  metaDescription:
    '¿La estatura de mi adolescente es normal? Calendarios de pubertad para niñas (10–14) y niños (12–16), desarrollo tardío, qué medir y cuándo consultar al pediatra.',
  datePublished: '2026-10-15',
  dateModified: '2026-10-15',
  readTime: '6 min de lectura',
  badge: 'Guía para padres',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'En casi todos los casos, sí: la estatura de tu hijo adolescente es normal. La pubertad llega en momentos muy distintos según cada niño, y ese desfase explica casi todas las diferencias: un chico de 13 años que aún no ha dado su estirón puede medir 6 pulgadas menos que un amigo de su misma edad y ambos estar perfectamente sanos.',
    paragraphs: [
      'La confusión es comprensible. Entre los 12 y los 16 años, los niños están repartidos por todas las etapas de la pubertad: algunos ya la terminaron, otros apenas la empiezan. Comparar a tu hijo con sus amigos de la misma edad es comparar niños que van a ritmos completamente distintos.',
      'Lo que de verdad importa no es la cifra de la cinta métrica hoy, sino la forma del crecimiento de tu hijo a lo largo del tiempo. Aquí tienes el calendario que puedes esperar, qué debes medir y la única señal de alarma que merece una visita al médico.',
    ],
  },
  sections: [
    {
      id: 'puberty-timeline',
      heading: 'El calendario del crecimiento en la pubertad: niñas 10–14, niños 12–16',
      paragraphs: [
        'El estirón es el periodo de crecimiento más rápido desde la infancia, y llega en momentos diferentes para niñas y niños:',
      ],
      bulletPoints: [
        'Niñas: el estirón suele empezar alrededor de los 10–11 años, alcanza su pico cerca de los 12 (unos 3–3,5 pulgadas por año en el pico) y se frena después de la primera menstruación. La mayoría de las niñas casi han terminado de crecer entre los 14 y los 16.',
        'Niños: el estirón empieza más tarde, alrededor de los 12–13 años, y alcanza su pico cerca de los 14 (unos 3,5–4 pulgadas por año en el pico). El crecimiento continúa de forma más gradual hasta la adolescencia tardía: la mayoría de los niños alcanzan su estatura final alrededor de los 16–18.',
      ],
      callout: {
        type: 'tip',
        text: 'La primera menstruación es un hito útil: después de la menarquia, las niñas suelen crecer entre 1 y 3 pulgadas más en total, sobre todo en los 2–3 años siguientes. Después de eso, el crecimiento está prácticamente terminado.',
      },
    },
    {
      id: 'late-bloomers',
      heading: 'Desarrollo tardío y desarrollo temprano: ambos son normales',
      paragraphs: [
        'La genética marca el calendario. Los hijos suelen seguir el mismo ritmo que sus padres: si tú fuiste de desarrollo tardío, tu hijo probablemente también lo sea. Los que se desarrollan tarde suelen acabar igual de altos que los demás; simplemente llegan más tarde, y su periodo de crecimiento dura más.',
        'Por eso «mi hijo es más bajo que todos sus amigos» es una preocupación tan común a los 13 o 14 años — y tan a menudo se resuelve sola. Un chico que empieza su estirón a los 14 parecerá bajo junto a un amigo que empezó a los 12, y luego con frecuencia lo alcanza o lo supera a los 16.',
        'Consulta el percentil de tu hijo para ver dónde está para su edad — pero recuerda que la cifra importa menos que la tendencia:',
      ],
      link: {
        text: '→ Consulta el percentil de niños o niñas (gratis)',
        href: '/height-calculator/boys-percentile/',
      },
    },
    {
      id: 'what-to-track',
      heading: 'Lo que debes medir de verdad (la curva, no la cifra)',
      paragraphs: [
        'A los pediatras no les preocupa una medición aislada, sino los patrones. Así puedes hacer lo mismo en casa:',
      ],
      bulletPoints: [
        'Mide cada 6 meses: descalzo, contra una pared, por la mañana, y anota la fecha cada vez.',
        'Traza los puntos a lo largo del tiempo. Un ascenso constante — aunque sea lento, aunque sea en un percentil bajo — es tranquilizador.',
        'Anota los hitos de la pubertad: en las niñas, el desarrollo del pecho y la primera menstruación; en los niños, el aumento del tamaño testicular y el cambio de voz. El crecimiento debería acelerarse poco después de que empiecen.',
        'Compáralo con el patrón de tu propia familia: la estatura final suele quedar cerca del rango medio parental.',
      ],
      callout: {
        type: 'tip',
        text: '¿Quieres una idea aproximada de dónde acabará tu hijo? La fórmula de la estatura media parental da una estimación razonable con un margen de unas ±3,5 pulgadas.',
      },
      link: {
        text: '→ Predice la estatura adulta con la calculadora gratuita',
        href: '/height-calculator/child-height-predictor/',
      },
    },
    {
      id: 'when-to-worry',
      heading: 'Cuándo hablar con el pediatra',
      paragraphs: [
        'La mayoría de las preocupaciones sobre la estatura adolescente solo necesitan tiempo. Pero pide una revisión si se cumple alguna de estas condiciones — son las mismas señales de alarma que usan los pediatras:',
      ],
      bulletPoints: [
        'La curva de crecimiento está cayendo: tu hijo está bajando de líneas de percentil en varias mediciones (no solo una medición baja aislada).',
        'No hay signos de pubertad a los 13–14 años en las niñas o a los 14–15 en los niños.',
        'El crecimiento se ha detenido prácticamente durante más de un año y los hitos de la pubertad no han aparecido.',
        'La pubertad empezó muy temprano (antes de los 8 en niñas, antes de los 9 en niños): quienes empiezan pronto pueden acabar más bajos porque las placas de crecimiento se cierran antes.',
      ],
      callout: {
        type: 'note',
        text: 'Una sola medición baja, un mal año o ser el más bajo de la clase no están en esta lista. Los patrones a lo largo del tiempo son lo que los médicos toman en cuenta.',
      },
    },
  ],
  faqs: [
    {
      question: '¿4\'7" es bajo para un chico de 14 años?',
      answer:
        'Para un chico de 14 años que aún no ha empezado su estirón, puede ser completamente normal: los estirones de los niños a menudo no alcanzan su pico hasta los 14, y los de desarrollo tardío se ponen al día. Para una chica de 14 años está por debajo del promedio (la mayoría de las niñas están cerca de su estatura final a esa edad), así que conviene seguir su curva de crecimiento y mencionarlo en la próxima revisión. En ambos casos, la tendencia del último año importa más que la cifra.',
    },
    {
      question: '¿Cuándo dejan de crecer las niñas?',
      answer:
        'La mayoría de las niñas crecen más rápido alrededor de los 12 años y luego se frenan notablemente después de su primera menstruación. Tras la menarquia suelen ganar solo entre 1 y 3 pulgadas más durante los 2–3 años siguientes. A los 14–16 años, el crecimiento está prácticamente completo para la gran mayoría de las niñas.',
    },
    {
      question: 'Mi hijo es más bajo que todos sus amigos: ¿se pondrá al día?',
      answer:
        'Muy a menudo, sí. Los niños de desarrollo tardío con frecuencia crecen rápidamente a los 15–17 y terminan con una estatura cercana a su potencial genético, a veces más altos que los amigos que dieron el estirón antes. La pregunta clave es si muestra signos de pubertad y sigue creciendo. Si crece de forma constante en su propia curva, la paciencia suele ser la respuesta correcta.',
    },
    {
      question: '¿Todavía puedo predecir la estatura final de mi hijo adolescente?',
      answer:
        'Sí: la fórmula de la estatura media parental (basada en la estatura de ambos padres, ajustada por sexo) también funciona durante la adolescencia, con un margen aproximado de ±3,5 pulgadas. Se vuelve más precisa una vez que la pubertad está en marcha, porque el margen de crecimiento restante es más claro. Prueba la calculadora gratuita para una estimación instantánea.',
    },
  ],
  medicalDisclaimer:
    'Contenido educativo, no consejo médico. El patrón de crecimiento de cada adolescente es individual: solo un pediatra que siga a tu hijo a lo largo del tiempo puede juzgar si su crecimiento va por buen camino. Si algo de lo aquí expuesto te preocupa, eso por sí solo ya es motivo suficiente para preguntar en la próxima revisión.',
  relatedLinks: [
    { text: 'Percentil de estatura en niños', href: '/height-calculator/boys-percentile/' },
    { text: 'Percentil de estatura en niñas', href: '/height-calculator/girls-percentile/' },
    { text: 'Predictor de estatura infantil', href: '/height-calculator/child-height-predictor/' },
  ],
};
