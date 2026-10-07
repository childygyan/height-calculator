import type { ArticleData } from '../../types';

export const translation: ArticleData = {
  id: 'tallest-people',
  slug: 'personas-mas-altas-del-mundo',
  title: 'Las personas más altas del mundo: récords y ciencia',
  subtitle:
    'Desde los verificados 272 cm de Robert Wadlow hasta los poseedores actuales del récord — las historias reales detrás de la estatura extrema, y qué la causa realmente.',
  metaDescription:
    '¿Quién es la persona más alta del mundo? Robert Wadlow (272 cm) tiene el récord de todos los tiempos; Sultan Kösen (251 cm) es el hombre vivo más alto. Historias, datos verificados y la ciencia del gigantismo.',
  datePublished: '2026-10-20',
  dateModified: '2026-10-20',
  readTime: '6 min de lectura',
  badge: 'Récords e historias',
  tocTitle: 'En este artículo',
  intro: {
    lead:
      'La persona más alta jamás medida de forma fiable fue Robert Wadlow, un estadounidense que alcanzó 272 cm (8 pies 11 pulgadas) antes de su muerte en 1940. El hombre vivo más alto es Sultan Kösen, de Turquía, con 251 cm (8 pies 2,8 pulgadas).',
    paragraphs: [
      'La estatura extrema nos fascina, pero detrás de cada récord hay una persona real, y normalmente una historia médica. A diferencia de la estatura alta común, que es mayormente hereditaria, las alturas por encima de unos 230 cm casi siempre son resultado de una condición hormonal llamada gigantismo.',
      'A continuación: los récords verificados, los actuales poseedores del título, y una explicación honesta de por qué ocurre la estatura extrema — contada con el respeto que merecen estas historias.',
    ],
  },
  sections: [
    {
      id: 'wadlow',
      heading: 'Robert Wadlow: la persona más alta de la historia',
      paragraphs: [
        'Robert Pershing Wadlow nació en Alton, Illinois, en 1918: un bebé de tamaño normal que simplemente nunca dejó de crecer. A los 8 años ya medía 188 cm, más alto que su padre. A los 18 medía 254 cm, y siguió creciendo hasta el día de su muerte.',
        'Su estatura final registrada, tomada 18 días antes de su fallecimiento, fue de 272 cm (8 pies 11,1 pulgadas) — un récord Guinness que lleva más de 80 años sin ser superado. Wadlow era conocido como el «Gigante Amable»: según todos los testimonios, era bondadoso, de voz suave y notablemente paciente con las multitudes que lo seguían.',
        'Pero su altura tuvo un precio terrible. Sus piernas y pies necesitaban férulas a medida, y apenas tenía sensibilidad en ellos. En julio de 1940, una férula defectuosa le produjo una ampolla en el tobillo que se infectó. Murió mientras dormía el 15 de julio, con solo 22 años. Su ataúd pesaba casi media tonelada y requirió doce porteadores.',
      ],
      callout: {
        type: 'note',
        text: 'El crecimiento de Wadlow fue causado por una hiperplasia de la glándula pituitaria, que inundó su cuerpo de hormona del crecimiento. Los médicos de la época no disponían de ningún tratamiento que pudiera detenerlo.',
      },
    },
    {
      id: 'living-giants',
      heading: 'Las personas vivas más altas de la actualidad',
      paragraphs: [
        'Nadie vivo se ha acercado a Wadlow, pero los actuales poseedores del récord tienen historias notables:',
      ],
      bulletPoints: [
        'Sultan Kösen (Turquía, nacido en 1982) — 251 cm (8 pies 2,8 pulgadas), el hombre vivo más alto. Su crecimiento fue provocado por un tumor en la glándula pituitaria; tras una cirugía con bisturí de rayos gamma en 2010, su crecimiento por fin se detuvo. No pudo terminar la escuela por su tamaño, pero más tarde encontró trabajo y se casó en 2013.',
        'Rumeysa Gelgi (Turquía, nacida en 1997) — 215,16 cm (7 pies 0,7 pulgadas), la mujer viva más alta. Su altura proviene del síndrome de Weaver, una condición genética rara. Es activista por la concienciación sobre la discapacidad y usa silla de ruedas la mayor parte del tiempo.',
      ],
      table: {
        headers: ['Persona', 'Estatura', 'Estado'],
        rows: [
          ['Robert Wadlow (EE. UU.)', '272 cm (8′11″)', 'Récord histórico, verificado'],
          ['John Rogan (EE. UU.)', '267 cm (8′9″)', 'Verificado'],
          ['John Carroll (EE. UU.)', '263,5 cm (8′7,7″)', 'Verificado'],
          ['Sultan Kösen (Turquía)', '251 cm (8′2,8″)', 'Hombre vivo más alto'],
          ['Rumeysa Gelgi (Turquía)', '215,2 cm (7′0,7″)', 'Mujer viva más alta'],
        ],
        footnote:
          'Estaturas según Guinness World Records y mediciones médicas documentadas. Muchas afirmaciones históricas por encima de 272 cm nunca fueron verificadas de forma independiente.',
      },
      callout: {
        type: 'tip',
        text: 'Una historia de advertencia: Leonid Stadnyk, de Ucrania, afirmó medir 257 cm, pero se negó a una medición independiente — y Guinness le retiró el título en 2008. Solo las mediciones verificadas de forma independiente cuentan como récords.',
      },
    },
    {
      id: 'science',
      heading: 'Por qué ocurre la estatura extrema: la ciencia',
      paragraphs: [
        'Ser muy alto — digamos 195 o 200 cm — es casi totalmente genético y perfectamente saludable. La estatura extrema por encima de unos 230 cm es otra cosa: casi siempre indica gigantismo, un trastorno hormonal raro.',
        'La causa habitual es un tumor benigno (adenoma) en la glándula pituitaria, la glándula del tamaño de un guisante en la base del cerebro que controla la hormona del crecimiento. Cuando produce un exceso de esta hormona durante la infancia — antes de que los cartílagos de crecimiento de los huesos se fusionen — todo el esqueleto sigue creciendo muy por encima de su objetivo genético.',
        'Si ese mismo exceso hormonal comienza después de que los cartílagos de crecimiento se han cerrado (en la edad adulta), la altura ya no puede aumentar. En cambio, las manos, los pies y la mandíbula se agrandan — una condición relacionada llamada acromegalia.',
        'La medicina moderna puede tratar el gigantismo: cirugía para extirpar el tumor, medicamentos para bloquear la hormona del crecimiento o radiación dirigida. El crecimiento de Sultan Kösen se detuvo así. Hace un siglo, Robert Wadlow no tenía esa opción.',
      ],
      callout: {
        type: 'warning',
        text: 'La estatura extrema no es simplemente «ser extra alto»: conlleva graves cargas para la salud — daño articular, esfuerzo cardiovascular y una esperanza de vida muy reducida. Estos récords son historias médicas, no metas.',
      },
    },
    {
      id: 'compare',
      heading: 'Descubre cómo te comparas',
      paragraphs: [
        '¿Tienes curiosidad por saber dónde quedas junto a Wadlow, o junto a una persona promedio de cualquier país? Nuestra herramienta gratuita de comparación te permite ponerte lado a lado con quien quieras:',
      ],
      link: {
        text: '→ Compara tu estatura ahora',
        href: '/compare/',
      },
    },
  ],
  faqs: [
    {
      question: '¿Quién es la persona viva más alta?',
      answer:
        'Sultan Kösen, de Turquía, con 251 cm (8 pies 2,8 pulgadas), reconocido por Guinness World Records como el hombre vivo más alto. La mujer viva más alta es Rumeysa Gelgi, también de Turquía, con 215,16 cm.',
    },
    {
      question: '¿Cuánto medía Robert Wadlow?',
      answer:
        '272 cm (8 pies 11,1 pulgadas) — medido 18 días antes de su muerte en 1940. Sigue siendo la estatura más alta documentada de forma fiable en la historia de la humanidad.',
    },
    {
      question: '¿Qué causa la estatura extrema?',
      answer:
        'Casi siempre el gigantismo: un tumor pituitario benigno que produce un exceso de hormona del crecimiento durante la infancia, antes de que los cartílagos de crecimiento óseo se fusionen. La estatura alta común, en cambio, es abrumadoramente genética y saludable.',
    },
    {
      question: '¿Podría alguien crecer más que Robert Wadlow?',
      answer:
        'Teóricamente posible, pero ningún caso verificado se ha acercado en más de 80 años. El tratamiento moderno suele detener el crecimiento patológico a tiempo, y Guinness exige una medición independiente rigurosa — por eso las afirmaciones históricas sin verificar no cuentan.',
    },
  ],
  medicalDisclaimer:
    'Contenido educativo, no consejo médico. El gigantismo y los trastornos del crecimiento son condiciones médicas: solo un profesional de la salud puede diagnosticarlos o tratarlos. Si te preocupa un crecimiento anormal, consulta a un médico.',
  relatedLinks: [
    { text: 'Comparador de estatura', href: '/compare/' },
    { text: 'Estatura promedio por país', href: '/articles/average-height-by-country/' },
    { text: 'Predice la estatura adulta de tu hijo', href: '/articles/predict-your-childs-adult-height/' },
  ],
};
