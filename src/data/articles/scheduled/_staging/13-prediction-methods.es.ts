import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'prediction-methods',
  slug: 'cual-metodo-prediccion-altura-es-mas-preciso',
  title: '¿Qué Método de Predicción de la Estatura Infantil Es el Más Preciso?',
  subtitle:
    'Radiografía de edad ósea, Khamis-Roche y talla media parental comparados con honestidad — precisión, qué necesita cada uno y cuándo conviene cada método.',
  metaDescription:
    '¿Qué tan precisos son los predictores de estatura infantil? Comparación honesta de la radiografía de edad ósea, el método Khamis-Roche y la talla media parental — con sus márgenes de error.',
  datePublished: '2026-10-19',
  dateModified: '2026-10-19',
  readTime: '6 min de lectura',
  badge: 'Comparación de métodos',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'Ordenados por precisión: la radiografía de edad ósea (la más precisa, requiere médico) supera al método Khamis-Roche (unos ±5 cm, necesita la estatura, el peso y la edad actuales del niño), que supera a la fórmula de la talla media parental (±8,5 cm, solo necesita la estatura de los padres).',
    paragraphs: [
      'Todo predictor de estatura — en línea o en la clínica — se basa en uno de estos tres métodos. La diferencia honesta entre ellos no es magia, sino datos: cuánta información del niño utilizan y qué tan amplio es el margen de error.',
      'A continuación: cómo funciona cada método, su precisión real y una regla clara para saber cuál conviene en tu caso.',
    ],
  },
  sections: [
    {
      id: 'at-a-glance',
      heading: 'Los tres métodos de un vistazo',
      paragraphs: [
        'Esta es la versión corta, antes de entrar en detalle con cada uno:',
      ],
      table: {
        headers: ['Método', 'Error típico', 'Qué necesitas', 'Costo / acceso'],
        rows: [
          ['Edad ósea (radiografía)', 'El más preciso', 'Visita al médico + radiografía de la mano', 'Solo en clínica'],
          ['Khamis-Roche', '±5 cm aprox.', 'Edad, estatura y peso del niño + estatura de ambos padres', 'Calculadora gratuita'],
          ['Talla media parental', '±8,5 cm', 'Solo la estatura de ambos padres', 'Calculadora gratuita'],
        ],
        footnote:
          'Los márgenes de error son valores publicados aproximados. Los resultados individuales varían — el crecimiento es estadístico, no exacto.',
      },
    },
    {
      id: 'mid-parental',
      heading: 'Talla media parental: la estimación más sencilla',
      paragraphs: [
        'Esta es la fórmula detrás de casi todos los predictores gratuitos en línea, y la que los pediatras calculan en segundos:',
      ],
      bulletPoints: [
        'Niños: (estatura del padre + estatura de la madre + 13 cm) ÷ 2',
        'Niñas: (estatura del padre + estatura de la madre − 13 cm) ÷ 2',
      ],
      callout: {
        type: 'tip',
        text: 'Ejemplo: padre 178 cm, madre 165 cm. Niño: (178 + 165 + 13) ÷ 2 = 178 cm. Niña: (178 + 165 − 13) ÷ 2 = 165 cm. Espera ±8,5 cm alrededor de ese número — el niño probablemente medirá entre 169,5 cm y 186,5 cm.',
      },
    },
    {
      id: 'khamis-roche',
      heading: 'Khamis-Roche: la fórmula más precisa',
      paragraphs: [
        'Publicado por Khamis y Roche en 1994, este método suma las medidas actuales del niño — edad, estatura y peso — a la estatura de los padres, usando coeficientes de regresión derivados de un amplio estudio longitudinal. Como parte de dónde está el niño ahora mismo, supera consistentemente a la talla media parental.',
        'Su margen de error publicado es de aproximadamente ±5 cm (unas 2 pulgadas) — notablemente más estrecho que los ±8,5 cm de la talla media parental. Funciona para niños entre los 4 y los 17 años aproximadamente, y la predicción mejora a medida que el niño crece.',
      ],
      callout: {
        type: 'note',
        text: 'Una limitación honesta: el estudio original de Khamis-Roche siguió a niños blancos estadounidenses. Es un método muy usado, pero sigue siendo una estimación basada en población — no una medición de tu hijo en particular.',
      },
    },
    {
      id: 'bone-age',
      heading: 'Edad ósea: el estándar de oro clínico',
      paragraphs: [
        'Cuando un pediatra necesita verdadera precisión — por ejemplo, cuando la curva de crecimiento del niño parece inusual — pide una radiografía de edad ósea de la mano y la muñeca izquierdas. Un especialista compara la imagen con estándares de referencia (el atlas de Greulich-Pyle es el clásico) para determinar la edad esquelética y luego la combina con la tabla de crecimiento para prever la estatura adulta.',
        'Este es el método más preciso disponible porque mide la madurez biológica real del niño, no solo su edad cronológica. Pero requiere una visita al médico, exposición a radiación (una dosis muy pequeña) e interpretación clínica — no es una opción casera.',
        'Para la curiosidad cotidiana, las fórmulas anteriores son más que suficientes. Y si quieres una estimación rápida ahora mismo, el predictor gratuito de este sitio usa el método de la talla media parental:',
      ],
      link: {
        text: '→ Predice la estatura adulta de tu hijo (gratis)',
        href: '/height-calculator/child-height-predictor/',
      },
    },
  ],
  faqs: [
    {
      question: '¿Qué tan precisos son los predictores de estatura infantil en línea?',
      answer:
        'La mayoría de los predictores gratuitos usan la fórmula de la talla media parental, así que su precisión honesta es de unos ±8,5 cm alrededor del resultado. Trata el número como el centro de un rango, no como una promesa.',
    },
    {
      question: '¿Qué es el método Khamis-Roche?',
      answer:
        'Una fórmula de predicción de la estatura publicada en 1994 que usa la edad, la estatura y el peso del niño junto con la estatura de ambos padres. Es más precisa que la talla media parental — unos ±5 cm — y funciona para niños de entre 4 y 17 años aproximadamente.',
    },
    {
      question: '¿Pueden los médicos predecir cuánto medirá mi hijo?',
      answer:
        'Sí. Los pediatras combinan la estimación de la talla media parental con la curva de crecimiento del niño y, cuando hace falta, una radiografía de edad ósea de la mano y la muñeca. La edad ósea es el método clínico más preciso porque mide la madurez esquelética directamente.',
    },
    {
      question: '¿Qué método debo usar para un niño de 3 años?',
      answer:
        'La talla media parental es la opción razonable — el método Khamis-Roche está validado desde aproximadamente los 4 años. A los 3, las predicciones son de todos modos las menos fiables, ya que aún quedan por delante mucho crecimiento (y el ritmo de la pubertad).',
    },
  ],
  medicalDisclaimer:
    'Este artículo explica los métodos de predicción de la estatura con fines educativos y no es asesoramiento médico. Si tienes dudas sobre el crecimiento de tu hijo, consulta a un pediatra.',
  relatedLinks: [
    { text: 'Predictor de estatura infantil (gratis)', href: '/height-calculator/child-height-predictor/' },
    { text: 'Predice la estatura adulta de tu hijo — guía completa', href: '/articles/predict-your-childs-adult-height/' },
    { text: 'Percentil de estatura explicado', href: '/articles/height-percentile-explained/' },
  ],
};
