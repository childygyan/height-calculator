import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'cm-to-feet-inches',
  slug: 'cm-a-pies-y-pulgadas',
  title: 'Cm a pies y pulgadas: la guía completa de conversión',
  subtitle:
    'La fórmula exacta, un ejemplo resuelto paso a paso y una tabla de referencia rápida: convierte cualquier altura de centímetros a pies y pulgadas en segundos.',
  metaDescription:
    'Convierte cm a pies y pulgadas: la fórmula exacta, un ejemplo resuelto (175 cm = 5\'9"), una tabla de referencia rápida (150–200 cm) y respuestas a las preguntas más frecuentes.',
  datePublished: '2026-10-08',
  dateModified: '2026-10-08',
  readTime: '5 min de lectura',
  badge: 'Guía de referencia',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'Para convertir cm a pies y pulgadas: divide los centímetros entre 30.48 para obtener los pies y multiplica la parte decimal por 12 para obtener las pulgadas restantes. Ejemplo: 175 cm ÷ 30.48 = 5.741 pies, y 0.741 × 12 = 8.9 pulgadas; por tanto, 175 cm = 5\'8.9", que normalmente se redondea a 5\'9".',
    paragraphs: [
      'Los centímetros son el estándar mundial, pero los pies y las pulgadas siguen mandando en Estados Unidos y el Reino Unido: en perfiles de citas, formularios médicos y estadísticas deportivas. Saber la conversión de memoria te evita andar buscando la calculadora cada vez.',
      'A continuación: las dos fórmulas exactas, un ejemplo resuelto paso a paso y una tabla de referencia completa de 150 a 200 cm.',
    ],
  },
  sections: [
    {
      id: 'formula',
      heading: 'La fórmula',
      paragraphs: [
        'Solo necesitas dos datos: 1 pie = 30.48 cm y 1 pulgada = 2.54 cm (ambos exactos por definición internacional). A partir de ahí, la conversión se hace en dos pasos:',
      ],
      bulletPoints: [
        'Paso 1 — pies: divide los centímetros entre 30.48. El número entero son tus pies.',
        'Paso 2 — pulgadas: toma el resto decimal y multiplícalo por 12. Esas son tus pulgadas.',
      ],
      callout: {
        type: 'tip',
        text: 'Atajo para la parte de las pulgadas: pulgadas totales = cm ÷ 2.54. Luego, pies = número entero ÷ 12, y lo que sobre son las pulgadas. Mismo resultado, un paso menos si prefieres trabajar en pulgadas.',
      },
    },
    {
      id: 'worked-example',
      heading: 'Ejemplo resuelto: 175 cm',
      paragraphs: [],
      steps: [
        {
          number: 1,
          title: 'Divide entre 30.48',
          description: '175 ÷ 30.48 = 5.741. El número entero te da 5 pies.',
        },
        {
          number: 2,
          title: 'Multiplica el resto por 12',
          description: '0.741 × 12 = 8.9. Esas son tus pulgadas.',
        },
        {
          number: 3,
          title: 'Lee el resultado',
          description: '175 cm = 5\'8.9"; en el habla cotidiana, 5\'9".',
        },
      ],
      callout: {
        type: 'note',
        text: 'En la conversación diaria, las alturas casi siempre se redondean a la pulgada entera más cercana: 5\'8.9" se convierte en 5\'9", y 5\'3.0" se queda en 5\'3".',
      },
    },
    {
      id: 'reference-table',
      heading: 'Tabla de referencia rápida (150–200 cm)',
      paragraphs: [
        'Las alturas más comunes, ya convertidas, sin hacer cuentas:',
      ],
      table: {
        headers: ['Centímetros', 'Pies y pulgadas', 'Cómo se dice'],
        rows: [
          ['150 cm', '4\'11.1"', '4\'11"'],
          ['155 cm', '5\'1.0"', '5\'1"'],
          ['160 cm', '5\'3.0"', '5\'3"'],
          ['165 cm', '5\'5.0"', '5\'5"'],
          ['170 cm', '5\'7.0"', '5\'7"'],
          ['175 cm', '5\'8.9"', '5\'9"'],
          ['180 cm', '5\'10.9"', '5\'11"'],
          ['185 cm', '6\'0.8"', '6\'1"'],
          ['190 cm', '6\'2.8"', '6\'3"'],
          ['195 cm', '6\'4.8"', '6\'5"'],
          ['200 cm', '6\'6.7"', '6\'7"'],
        ],
        footnote:
          'Conversiones exactas con un decimal; "cómo se dice" es la forma redondeada de todos los días.',
      },
    },
    {
      id: 'reverse',
      heading: 'En sentido contrario: de pies y pulgadas a cm',
      paragraphs: [
        'Para convertir de vuelta, multiplica los pies por 30.48 y las pulgadas por 2.54, y suma. Ejemplo: 5\'9" = (5 × 30.48) + (9 × 2.54) = 152.4 + 22.86 = 175.26 cm ≈ 175 cm.',
        '¿Lo haces a menudo? Olvídate de los cálculos mentales: nuestro conversor lo hace al instante en ambas direcciones.',
      ],
      link: {
        text: '→ Abre la calculadora de altura',
        href: '/height-calculator/',
      },
    },
  ],
  faqs: [
    {
      question: '¿Cuántos cm hay en un pie?',
      answer:
        'Exactamente 30.48 cm. El pie quedó fijado en este valor por acuerdo internacional en 1959.',
    },
    {
      question: '¿Cuántos cm hay en una pulgada?',
      answer:
        'Exactamente 2.54 cm. Por eso dividir los centímetros entre 2.54 te da las pulgadas totales.',
    },
    {
      question: '¿Cuánto es 175 cm en pies y pulgadas?',
      answer:
        '175 cm = 5\'8.9", que se redondea a 5\'9" en el habla cotidiana.',
    },
    {
      question: '¿Por qué los estadounidenses siguen usando pies y pulgadas?',
      answer:
        'Estados Unidos mantuvo el sistema imperial por tradición y por el coste de cambiarlo: las señales de tráfico, la construcción y los hábitos diarios funcionan en pies y pulgadas. Casi todo el mundo, y toda la ciencia, usa en cambio el sistema métrico.',
    },
  ],
  relatedLinks: [
    { text: 'Calculadora de altura', href: '/height-calculator/' },
    { text: 'Altura promedio por país', href: '/articles/average-height-by-country/' },
  ],
};
