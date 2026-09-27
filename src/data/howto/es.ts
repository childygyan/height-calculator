import type { HowToGuideData } from './types';

export const esHowToGuide: HowToGuideData = {
  locale: 'es',
  title: 'Cómo Usar Height Calculator',
  subtitle: 'Una guía completa, paso a paso, para medir, convertir, comparar y comprender la altura — desde el crecimiento del bebé hasta la estatura adulta.',
  badge: 'Guía Completa del Usuario',
  metaDescription: 'Aprende a usar Height Calculator: mide la altura con precisión, convierte cm y pies/pulg, calcula diferencias de altura, comprueba percentiles y comprende las curvas de crecimiento.',
  readTime: '8 min de lectura',
  tocTitle: 'Índice',
  intro: {
    lead: 'Height Calculator es una calculadora de altura gratuita creada para ayudarte a predecir, seguir y comprender realmente la altura — desde los primeros centímetros del bebé hasta la estatura adulta.',
    paragraphs: [
      'Tanto si eres padre o madre siguiendo el crecimiento de tu bebé, como si te preguntas cuánto medirá tu hijo de adulto, o simplemente conviertes entre centímetros y pies/pulgadas, los números brutos rara vez cuentan toda la historia. Leer que un niño mide 95 cm es abstracto; ver dónde cae eso en la curva de percentiles de los CDC/OMS — o lo que predice para la altura adulta — convierte un número en comprensión.',
      'Esta guía te acompaña por cada función: medición precisa, conversión de unidades, percentiles de crecimiento, predicción de altura infantil y lectura correcta de los resultados.',
    ],
  },
  sections: [
    {
      id: 'what-is-height-calculator',
      heading: '1. ¿Qué Es una Calculadora de Altura?',
      paragraphs: [
        'Una calculadora de altura convierte números brutos en respuestas claras. En lugar de preguntarte qué significa un percentil, cuántos centímetros separan dos alturas o cuánto medirá un niño en el futuro, la calculadora lo resuelve al instante — basándose en referencias reales de crecimiento.',
        'En Height Calculator puedes convertir entre centímetros y pies/pulgadas, calcular la diferencia exacta entre dos alturas, comprobar dónde cae una altura en las referencias de percentiles de los CDC/OMS y estimar la altura adulta de un niño a partir de la altura de sus padres — todo gratis, sin crear una cuenta.',
      ],
      callout: {
        type: 'info',
        text: 'Todos los resultados son estimaciones educativas basadas en datos públicos de crecimiento — nunca consejo médico.',
      },
    },
    {
      id: 'measuring-accurately',
      heading: '2. Cómo Medir la Altura con Precisión',
      paragraphs: [
        'Todo buen cálculo empieza con una buena medición. Una medición descuidada de 2 cm puede desplazar un percentil entero, así que vale la pena hacerlo bien.',
      ],
      steps: [
        { number: 1, title: 'Descalzo', description: 'Quítate los zapatos y los calcetines gruesos. Mide siempre sin calzado para mantener la consistencia.' },
        { number: 2, title: 'Apóyate en la pared', description: 'Ponte con la espalda recta contra una pared lisa, talones juntos, mirando al frente.' },
        { number: 3, title: 'Marca la coronilla', description: 'Usa un objeto plano (como un libro) apoyado en la pared, formando un ángulo recto con la parte superior de la cabeza.' },
        { number: 4, title: 'Mide hasta 0,1 cm', description: 'Mide desde el suelo hasta la marca con una precisión de 0,1 cm o ⅛ de pulgada.' },
        { number: 5, title: 'Bebés: mide tumbado', description: 'Para bebés y niños pequeños, mide la longitud tumbado, desde la cabeza hasta los talones extendidos.' },
      ],
      callout: {
        type: 'tip',
        text: 'Mide siempre a la misma hora del día: la altura puede variar hasta 1 cm entre la mañana y la noche.',
      },
    },
    {
      id: 'unit-conversion',
      heading: '3. Conversión de Unidades: cm ↔ Pies y Pulgadas',
      paragraphs: [
        'La calculadora cambia al instante entre el sistema métrico (cm) e imperial (pies/pulg). La conversión usa el estándar internacional exacto: 1 pulgada = 2,54 cm y 1 pie = 30,48 cm — sin redondeos aproximados.',
        'Por ejemplo, 5 pies 10 pulg equivalen a precisamente 177,8 cm, y 170 cm corresponden a 5 pies 6,9 pulg. Puedes cambiar de unidad en cualquier momento sin perder los datos introducidos.',
      ],
    },
    {
      id: 'understanding-percentiles',
      heading: '4. Cómo Entender los Percentiles de Altura',
      paragraphs: [
        'Un percentil compara la altura de un niño con grandes conjuntos de datos poblacionales de referencia para la misma edad y sexo. Un niño en el percentil 75 es más alto que unos 75 de cada 100 niños de su misma edad y sexo — no es una nota, es una posición en la distribución.',
        'Nuestras referencias usan las curvas de crecimiento de los CDC (2 a 20 años) y los Estándares de Crecimiento Infantil de la OMS (del nacimiento a los 5 años) — las mismas referencias que usan los pediatras en consulta.',
      ],
      callout: {
        type: 'note',
        text: 'Estar en el percentil 25 o 90 no es bueno ni malo por sí solo. Lo que importa es seguir la propia curva de crecimiento a lo largo del tiempo.',
      },
    },
    {
      id: 'child-height-predictor',
      heading: '5. Predictor de Altura Adulta del Niño',
      paragraphs: [
        'El predictor usa el método de la altura media parental, la fórmula estándar de referencia de los pediatras: para niños, (altura del padre + altura de la madre + 13 cm) ÷ 2; para niñas, (altura del padre + altura de la madre − 13 cm) ÷ 2.',
        'El resultado siempre se presenta con un rango típico honesto de unos ±8–10 cm. Es una estimación, no una garantía: la genética, la nutrición, el sueño y la salud influyen en la altura final, y ningún predictor es 100 % preciso.',
      ],
    },
    {
      id: 'growth-charts',
      heading: '6. Curvas de Crecimiento: CDC y OMS',
      paragraphs: [
        'Las curvas de crecimiento muestran cómo evoluciona la altura con la edad. Las curvas de los CDC cubren de los 2 a los 20 años basándose en encuestas nacionales de salud de EE. UU.; los estándares de la OMS cubren del nacimiento a los 5 años, elaborados a partir de un estudio multinacional con niños sanos.',
        'Seguir la altura de tu hijo en la curva a lo largo del tiempo es más informativo que una sola medición: una curva estable, incluso en un percentil bajo, suele indicar un crecimiento saludable.',
      ],
    },
    {
      id: 'baby-growth',
      heading: '7. Cómo Seguir el Crecimiento del Bebé',
      paragraphs: [
        'En los primeros años el crecimiento es rápido y cada centímetro cuenta. Mide la longitud del bebé tumbado, desde la coronilla hasta los talones, con las piernas estiradas suavemente.',
        'Usa los estándares de la OMS (0 a 5 años) como referencia y anota cada medición con su fecha. Las mediciones mensuales durante los primeros 2 años crean un historial valioso para las visitas al pediatra.',
      ],
    },
    {
      id: 'reading-your-results',
      heading: '8. Cómo Leer los Resultados',
      paragraphs: [
        'Cada resultado de la calculadora viene con contexto. La conversión de unidades muestra el valor exacto en ambos sistemas. El percentil muestra la posición del niño en la curva de crecimiento para la edad y el sexo indicados.',
        'La predicción de altura adulta incluye el rango típico esperado (±8–10 cm): lee siempre el intervalo, no solo el número central. Y la diferencia entre dos alturas se presenta en cm y en pies/pulgadas.',
      ],
    },
    {
      id: 'practical-tips',
      heading: '9. Consejos Prácticos',
      paragraphs: [
        'Pequeños hábitos hacen que tus mediciones y cálculos sean mucho más fiables:',
      ],
      bulletPoints: [
        'Mide siempre a la misma hora y en las mismas condiciones.',
        'Anota la fecha de cada medición para construir el historial de crecimiento.',
        'Usa la misma cinta métrica o tallímetro para todas las mediciones.',
        'En niños, compara siempre con la curva del sexo y la edad correctos.',
        'No compares percentiles de los CDC con los de la OMS: son referencias distintas.',
        'Recuerda: los resultados son estimaciones educativas, no un diagnóstico médico.',
      ],
    },
    {
      id: 'who-benefits',
      heading: '10. ¿Quién se Beneficia de Height Calculator?',
      paragraphs: [
        'Padres que siguen el crecimiento de sus hijos, futuros padres curiosos por la altura de sus hijos, adultos que convierten medidas para documentos o ropa, y cualquier persona que quiera entender lo que realmente significan los números de altura.',
        'El acceso es gratuito e ilimitado: sin registro, sin descargas, en cualquier dispositivo.',
      ],
    },
    {
      id: 'faq-troubleshoot',
      heading: '11. Preguntas Frecuentes y Solución de Problemas',
      paragraphs: [
        '¿Los datos introducidos desaparecieron al cambiar de unidad? No te preocupes: la calculadora conserva los valores al alternar entre cm y pies/pulg. Si un percentil parece inesperado, comprueba que la edad y el sexo sean correctos: un año de diferencia cambia mucho la curva.',
        '¿La predicción de altura muestra un intervalo amplio? Es intencional: el rango de ±8–10 cm refleja la variación real entre niños. Ningún método serio promete precisión de un centímetro.',
      ],
    },
    {
      id: 'final-cta',
      heading: '12. Empieza Tu Primer Cálculo Hoy',
      paragraphs: [
        '¿Listo para calcular? La calculadora de altura es rápida, gratuita e ilimitada. Introduce una altura, convierte unidades, comprueba un percentil o predice la altura adulta de un niño — y comprende de verdad lo que significan los números.',
      ],
    },
  ],
  faqTransition: {
    badge: '¿Tienes Preguntas?',
    heading: 'Consulta Nuestras Preguntas Frecuentes',
    text: 'Aprende más sobre los percentiles, las curvas de crecimiento, la conversión de unidades y la predicción de altura de Height Calculator.',
    ctaText: 'Ver Todas las Preguntas Frecuentes',
    ctaHref: '/es/#faq',
  },
  finalCta: {
    heading: '¿Listo para Calcular Tu Altura?',
    description: 'Abre el centro de Height Calculator ahora: convierte unidades, compara alturas, comprueba percentiles y predice la altura adulta de los niños, todo en una calculadora gratuita.',
    buttonText: 'Abrir Height Calculator',
    buttonHref: '/height-calculator/',
    secondaryText: 'Ver Curvas de Crecimiento',
    secondaryHref: '/height-calculator/boys-chart/',
  },
};
