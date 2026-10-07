import type { ScheduledArticle } from '../types';

export const scheduled: ScheduledArticle = {
  publishDate: '2026-10-19',
  articles: {
    en: {
      id: 'prediction-methods',
      slug: 'child-height-prediction-methods-compared',
      title: 'Which Child Height Prediction Method Is Most Accurate?',
      subtitle: 'Bone-age X-ray, Khamis-Roche, and mid-parental height compared honestly — accuracy, what each one needs, and when each makes sense.',
      metaDescription: 'How accurate are child height predictors? Honest comparison of bone-age X-ray, the Khamis-Roche method, and mid-parental height — with margins of error.',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6 min read',
      badge: 'Method comparison',
      tocTitle: 'In this article',
      intro: {
        lead: 'Ranked by accuracy: bone-age X-ray (most accurate, needs a doctor) beats the Khamis-Roche method (about ±2 inches, needs the child’s current height, weight, and age), which beats the mid-parental formula (±8.5 cm, needs only the parents’ heights).',
        paragraphs: [
          'Every height predictor — online or in a clinic — is built on one of these three methods. The honest difference between them is not magic, but data: how much information about the child they use, and how wide the margin of error is.',
          'Below: how each method works, its real accuracy, and a clear rule for which one fits your situation.',
        ],
      },
      sections: [
        {
          id: 'at-a-glance',
          heading: 'The three methods at a glance',
          paragraphs: [
            'Here is the short version, before we go deeper into each one:',
          ],
          table: {
            headers: [
              'Method',
              'Typical error',
              'What you need',
              'Cost / access',
            ],
            rows: [
              [
                'Bone-age X-ray',
                'Most accurate',
                'Doctor visit + hand X-ray',
                'Clinic only',
              ],
              [
                'Khamis-Roche',
                '±~2 inches (~5 cm)',
                'Child’s age, height, weight + both parents’ heights',
                'Free calculator',
              ],
              [
                'Mid-parental',
                '±8.5 cm (~3.3 in)',
                'Both parents’ heights only',
                'Free calculator',
              ],
            ],
            footnote: 'Error margins are approximate published values. Individual results vary — growth is statistical, not exact.',
          },
        },
        {
          id: 'mid-parental',
          heading: 'Mid-parental height: the simplest estimate',
          paragraphs: [
            'This is the formula behind almost every free online predictor, and the one pediatricians quote in seconds:',
          ],
          bulletPoints: [
            'Boys: (father’s height + mother’s height + 13 cm) ÷ 2',
            'Girls: (father’s height + mother’s height − 13 cm) ÷ 2',
          ],
          callout: {
            type: 'tip',
            text: 'Example: father 178 cm, mother 165 cm. Boy: (178 + 165 + 13) ÷ 2 = 178 cm. Girl: (178 + 165 − 13) ÷ 2 = 165 cm. Expect ±8.5 cm around that number — the boy would likely land between 169.5 cm and 186.5 cm.',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'Khamis-Roche: the most accurate formula',
          paragraphs: [
            'Published by Khamis and Roche in 1994, this method adds the child’s own current measurements — age, height, and weight — to the parents’ heights, using regression coefficients derived from a large longitudinal study. Because it uses where the child actually is right now, it consistently outperforms mid-parental height.',
            'Its published error margin is roughly ±2 inches (about 5 cm) — noticeably tighter than mid-parental’s ±8.5 cm. It works for children roughly between ages 4 and 17, and the prediction gets better as the child gets older.',
          ],
          callout: {
            type: 'note',
            text: 'One honest limitation: the original Khamis-Roche study followed white American children. It is widely used, but it is still a population-based estimate — not a measurement of your specific child.',
          },
        },
        {
          id: 'bone-age',
          heading: 'Bone age: the clinical gold standard',
          paragraphs: [
            'When a pediatrician really needs precision — for example, when a child’s growth curve looks unusual — they order a bone-age X-ray of the left hand and wrist. A specialist compares the image to reference standards (the Greulich-Pyle atlas being the classic one) to determine skeletal age, then combines it with the growth chart to forecast adult height.',
            'This is the most accurate method available because it measures the child’s actual biological maturity, not just their calendar age. But it requires a doctor’s visit, radiation exposure (a very small dose), and clinical interpretation — it is not a DIY option.',
            'For everyday curiosity, the formulas above are more than enough. And if you want a quick estimate right now, the free predictor on this site uses the mid-parental method:',
          ],
          link: {
            text: '→ Predict your child’s adult height (free)',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'How accurate are online child height predictors?',
          answer: 'Most free predictors use the mid-parental formula, so their honest accuracy is about ±8.5 cm (±3.3 inches) around the result. Treat the number as the center of a range, not a promise.',
        },
        {
          question: 'What is the Khamis-Roche method?',
          answer: 'A height-prediction formula published in 1994 that uses the child’s age, height, and weight together with both parents’ heights. It is more accurate than mid-parental height — roughly ±2 inches — and works for children aged about 4 to 17.',
        },
        {
          question: 'Can doctors predict how tall my child will be?',
          answer: 'Yes. Pediatricians combine the mid-parental estimate with the child’s growth curve, and when needed, a bone-age X-ray of the hand and wrist. Bone age is the most accurate clinical method because it measures skeletal maturity directly.',
        },
        {
          question: 'Which method should I use for a 3-year-old?',
          answer: 'Mid-parental height is the reasonable choice — the Khamis-Roche method is validated from about age 4 onward. At 3, predictions are the least reliable anyway, since so much growth (and puberty timing) lies ahead.',
        },
      ],
      medicalDisclaimer: 'This article explains height-prediction methods for educational purposes and is not medical advice. If you have concerns about your child’s growth, consult a pediatrician.',
      relatedLinks: [
        {
          text: 'Child height predictor (free)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Predict your child’s adult height — full guide',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: 'Height percentile explained',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    pt: {
      id: 'prediction-methods',
      slug: 'qual-metodo-previsao-altura-mais-preciso',
      title: 'Qual Método de Previsão de Altura Infantil É o Mais Preciso?',
      subtitle: 'Radiografia da idade óssea, método Khamis-Roche e altura média parental comparados com honestidade — precisão, o que cada um exige e quando cada um faz sentido.',
      metaDescription: 'Qual a precisão dos preditores de altura infantil? Comparação honesta da radiografia da idade óssea, do método Khamis-Roche e da altura média parental — com margens de erro.',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6 min de leitura',
      badge: 'Comparação de métodos',
      tocTitle: 'Neste artigo',
      intro: {
        lead: 'Em ordem de precisão: a radiografia da idade óssea (o mais preciso, precisa de médico) supera o método Khamis-Roche (cerca de ±5 cm, precisa da altura, do peso e da idade atuais da criança), que por sua vez supera a fórmula da altura média parental (±8,5 cm, precisa só da altura dos pais).',
        paragraphs: [
          'Todo preditor de altura — online ou em consultório — usa um destes três métodos. A diferença honesta entre eles não é mágica, mas dados: quanta informação sobre a criança cada um usa e quão larga é a margem de erro.',
          'A seguir: como cada método funciona, sua precisão real e uma regra clara para escolher o ideal para o seu caso.',
        ],
      },
      sections: [
        {
          id: 'resumo',
          heading: 'Os três métodos em resumo',
          paragraphs: [
            'Versão curta, antes de entrarmos nos detalhes de cada um:',
          ],
          table: {
            headers: [
              'Método',
              'Erro típico',
              'Do que você precisa',
              'Custo / acesso',
            ],
            rows: [
              [
                'Radiografia da idade óssea',
                'O mais preciso',
                'Consulta médica + raio-X da mão',
                'Somente em clínica',
              ],
              [
                'Khamis-Roche',
                '±~5 cm',
                'Idade, altura e peso da criança + altura dos dois pais',
                'Calculadora grátis',
              ],
              [
                'Altura média parental',
                '±8,5 cm',
                'Somente a altura dos dois pais',
                'Calculadora grátis',
              ],
            ],
            footnote: 'As margens de erro são valores aproximados publicados. Resultados individuais variam — o crescimento é estatístico, não exato.',
          },
        },
        {
          id: 'altura-media-parental',
          heading: 'Altura média parental: a estimativa mais simples',
          paragraphs: [
            'É a fórmula por trás de quase todos os preditores online gratuitos — e a que os pediatras citam de cabeça:',
          ],
          bulletPoints: [
            'Meninos: (altura do pai + altura da mãe + 13 cm) ÷ 2',
            'Meninas: (altura do pai + altura da mãe − 13 cm) ÷ 2',
          ],
          callout: {
            type: 'tip',
            text: 'Exemplo: pai com 178 cm e mãe com 165 cm. Menino: (178 + 165 + 13) ÷ 2 = 178 cm. Menina: (178 + 165 − 13) ÷ 2 = 165 cm. Espere ±8,5 cm em torno desse número — o menino provavelmente ficaria entre 169,5 cm e 186,5 cm.',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'Khamis-Roche: a fórmula mais precisa',
          paragraphs: [
            'Publicado por Khamis e Roche em 1994, este método soma às alturas dos pais as medidas atuais da criança — idade, altura e peso — usando coeficientes de regressão obtidos de um grande estudo longitudinal. Como considera onde a criança está agora, ele supera consistentemente a altura média parental.',
            'Sua margem de erro publicada é de cerca de ±5 cm — visivelmente mais apertada que os ±8,5 cm da altura média parental. Funciona para crianças de aproximadamente 4 a 17 anos, e a previsão melhora conforme a criança cresce.',
          ],
          callout: {
            type: 'note',
            text: 'Uma limitação honesta: o estudo original de Khamis-Roche acompanhou crianças americanas brancas. O método é amplamente usado, mas continua sendo uma estimativa populacional — não uma medida do seu filho em particular.',
          },
        },
        {
          id: 'idade-ossea',
          heading: 'Idade óssea: o padrão clínico',
          paragraphs: [
            'Quando o pediatra precisa mesmo de precisão — por exemplo, quando a curva de crescimento da criança parece incomum — ele pede uma radiografia da idade óssea da mão e do punho esquerdos. Um especialista compara a imagem com padrões de referência (o atlas de Greulich-Pyle é o clássico) para determinar a idade esquelética e, então, combina com a curva de crescimento para prever a altura adulta.',
            'Este é o método mais preciso disponível porque mede a maturidade biológica real da criança, não apenas a idade cronológica. Mas exige consulta médica, exposição à radiação (uma dose muito pequena) e interpretação clínica — não é uma opção caseira.',
            'Para a curiosidade do dia a dia, as fórmulas acima são mais do que suficientes. E se você quer uma estimativa rápida agora mesmo, o preditor gratuito deste site usa o método da altura média parental:',
          ],
          link: {
            text: '→ Preveja a altura adulta do seu filho (grátis)',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'Qual a precisão dos preditores online de altura infantil?',
          answer: 'A maioria dos preditores gratuitos usa a fórmula da altura média parental, então a precisão honesta é de cerca de ±8,5 cm em torno do resultado. Trate o número como o centro de uma faixa, não como uma promessa.',
        },
        {
          question: 'O que é o método Khamis-Roche?',
          answer: 'Uma fórmula de previsão de altura publicada em 1994 que usa a idade, a altura e o peso da criança junto com a altura dos dois pais. É mais precisa que a altura média parental — cerca de ±5 cm — e funciona para crianças de aproximadamente 4 a 17 anos.',
        },
        {
          question: 'O médico consegue prever a altura do meu filho?',
          answer: 'Sim. O pediatra combina a estimativa da altura média parental com a curva de crescimento da criança e, quando necessário, uma radiografia da idade óssea da mão e do punho. A idade óssea é o método clínico mais preciso porque mede diretamente a maturidade esquelética.',
        },
        {
          question: 'Qual método usar para uma criança de 3 anos?',
          answer: 'A altura média parental é a escolha razoável — o método Khamis-Roche é validado a partir de cerca de 4 anos. Aos 3, as previsões são de qualquer forma as menos confiáveis, já que há muito crescimento (e o momento da puberdade) pela frente.',
        },
      ],
      medicalDisclaimer: 'Este artigo explica métodos de previsão de altura para fins educacionais e não é um conselho médico. Se você tem preocupações sobre o crescimento do seu filho, consulte um pediatra.',
      relatedLinks: [
        {
          text: 'Preditor de altura infantil (grátis)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Preveja a altura adulta do seu filho — guia completo',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: 'Percentil de altura explicado',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    es: {
      id: 'prediction-methods',
      slug: 'cual-metodo-prediccion-altura-es-mas-preciso',
      title: '¿Qué Método de Predicción de la Estatura Infantil Es el Más Preciso?',
      subtitle: 'Radiografía de edad ósea, Khamis-Roche y talla media parental comparados con honestidad — precisión, qué necesita cada uno y cuándo conviene cada método.',
      metaDescription: '¿Qué tan precisos son los predictores de estatura infantil? Comparación honesta de la radiografía de edad ósea, el método Khamis-Roche y la talla media parental — con sus márgenes de error.',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6 min de lectura',
      badge: 'Comparación de métodos',
      tocTitle: 'En este artículo',
      intro: {
        lead: 'Ordenados por precisión: la radiografía de edad ósea (la más precisa, requiere médico) supera al método Khamis-Roche (unos ±5 cm, necesita la estatura, el peso y la edad actuales del niño), que supera a la fórmula de la talla media parental (±8,5 cm, solo necesita la estatura de los padres).',
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
            headers: [
              'Método',
              'Error típico',
              'Qué necesitas',
              'Costo / acceso',
            ],
            rows: [
              [
                'Edad ósea (radiografía)',
                'El más preciso',
                'Visita al médico + radiografía de la mano',
                'Solo en clínica',
              ],
              [
                'Khamis-Roche',
                '±5 cm aprox.',
                'Edad, estatura y peso del niño + estatura de ambos padres',
                'Calculadora gratuita',
              ],
              [
                'Talla media parental',
                '±8,5 cm',
                'Solo la estatura de ambos padres',
                'Calculadora gratuita',
              ],
            ],
            footnote: 'Los márgenes de error son valores publicados aproximados. Los resultados individuales varían — el crecimiento es estadístico, no exacto.',
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
          answer: 'La mayoría de los predictores gratuitos usan la fórmula de la talla media parental, así que su precisión honesta es de unos ±8,5 cm alrededor del resultado. Trata el número como el centro de un rango, no como una promesa.',
        },
        {
          question: '¿Qué es el método Khamis-Roche?',
          answer: 'Una fórmula de predicción de la estatura publicada en 1994 que usa la edad, la estatura y el peso del niño junto con la estatura de ambos padres. Es más precisa que la talla media parental — unos ±5 cm — y funciona para niños de entre 4 y 17 años aproximadamente.',
        },
        {
          question: '¿Pueden los médicos predecir cuánto medirá mi hijo?',
          answer: 'Sí. Los pediatras combinan la estimación de la talla media parental con la curva de crecimiento del niño y, cuando hace falta, una radiografía de edad ósea de la mano y la muñeca. La edad ósea es el método clínico más preciso porque mide la madurez esquelética directamente.',
        },
        {
          question: '¿Qué método debo usar para un niño de 3 años?',
          answer: 'La talla media parental es la opción razonable — el método Khamis-Roche está validado desde aproximadamente los 4 años. A los 3, las predicciones son de todos modos las menos fiables, ya que aún quedan por delante mucho crecimiento (y el ritmo de la pubertad).',
        },
      ],
      medicalDisclaimer: 'Este artículo explica los métodos de predicción de la estatura con fines educativos y no es asesoramiento médico. Si tienes dudas sobre el crecimiento de tu hijo, consulta a un pediatra.',
      relatedLinks: [
        {
          text: 'Predictor de estatura infantil (gratis)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Predice la estatura adulta de tu hijo — guía completa',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: 'Percentil de estatura explicado',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    fr: {
      id: 'prediction-methods',
      slug: 'quelle-methode-prediction-taille-plus-precise',
      title: 'Quelle Méthode de Prédiction de la Taille d’un Enfant est la Plus Précise ?',
      subtitle: 'Radiographie de l’âge osseux, méthode Khamis-Roche et formule taille cible génétique comparées honnêtement — précision, ce que chacune exige et quand elle a du sens.',
      metaDescription: 'Quelle est la précision des prédicteurs de taille pour enfant ? Comparaison honnête entre la radiographie de l’âge osseux, la méthode Khamis-Roche et la taille cible génétique — avec les marges d’erreur.',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6 min de lecture',
      badge: 'Comparatif de méthodes',
      tocTitle: 'Dans cet article',
      intro: {
        lead: 'Par ordre de précision : la radiographie de l’âge osseux (la plus précise, nécessite un médecin) bat la méthode Khamis-Roche (environ ±2 pouces, nécessite la taille, le poids et l’âge actuels de l’enfant), qui bat elle-même la formule de la taille cible génétique (±8,5 cm, nécessite seulement la taille des deux parents).',
        paragraphs: [
          'Chaque prédicteur de taille — en ligne ou en cabinet — repose sur l’une de ces trois méthodes. La vraie différence entre elles n’a rien de magique : c’est une question de données, à savoir combien d’informations sur l’enfant elles utilisent et quelle est la marge d’erreur.',
          'Ci-dessous : comment fonctionne chaque méthode, sa précision réelle et une règle claire pour choisir celle qui correspond à votre situation.',
        ],
      },
      sections: [
        {
          id: 'at-a-glance',
          heading: 'Les trois méthodes en un coup d’œil',
          paragraphs: [
            'Voici la version courte, avant d’approfondir chacune d’elles :',
          ],
          table: {
            headers: [
              'Méthode',
              'Erreur typique',
              'Ce qu’il vous faut',
              'Coût / accès',
            ],
            rows: [
              [
                'Radiographie de l’âge osseux',
                'La plus précise',
                'Visite chez le médecin + radiographie de la main',
                'En clinique uniquement',
              ],
              [
                'Khamis-Roche',
                '±~2 pouces (~5 cm)',
                'Âge, taille, poids de l’enfant + taille des deux parents',
                'Calculatrice gratuite',
              ],
              [
                'Taille cible génétique',
                '±8,5 cm (~3,3 pouces)',
                'Seule la taille des deux parents',
                'Calculatrice gratuite',
              ],
            ],
            footnote: 'Les marges d’erreur sont des valeurs approximatives publiées. Les résultats individuels varient — la croissance est statistique, pas exacte.',
          },
        },
        {
          id: 'mid-parental',
          heading: 'Taille cible génétique : l’estimation la plus simple',
          paragraphs: [
            'C’est la formule qui alimente presque tous les prédicteurs gratuits en ligne, et celle que les pédiatres citent en quelques secondes :',
          ],
          bulletPoints: [
            'Garçons : (taille du père + taille de la mère + 13 cm) ÷ 2',
            'Filles : (taille du père + taille de la mère − 13 cm) ÷ 2',
          ],
          callout: {
            type: 'tip',
            text: 'Exemple : père 178 cm, mère 165 cm. Garçon : (178 + 165 + 13) ÷ 2 = 178 cm. Fille : (178 + 165 − 13) ÷ 2 = 165 cm. Comptez ±8,5 cm autour de ce chiffre — le garçon atterrirait probablement entre 169,5 cm et 186,5 cm.',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'Khamis-Roche : la formule la plus précise',
          paragraphs: [
            'Publiée par Khamis et Roche en 1994, cette méthode ajoute les mesures actuelles de l’enfant — âge, taille et poids — à la taille des parents, en utilisant des coefficients de régression issus d’une vaste étude longitudinale. Parce qu’elle tient compte de la situation réelle de l’enfant aujourd’hui, elle surpasse systématiquement la formule de la taille cible génétique.',
            'Sa marge d’erreur publiée est d’environ ±2 pouces (environ 5 cm) — nettement plus serrée que les ±8,5 cm de la formule parentale. Elle s’applique aux enfants entre 4 et 17 ans environ, et la prédiction s’améliore à mesure que l’enfant grandit.',
          ],
          callout: {
            type: 'note',
            text: 'Une limite à signaler honnêtement : l’étude Khamis-Roche originale a suivi des enfants blancs américains. Elle est largement utilisée, mais elle reste une estimation basée sur une population — pas une mesure de votre enfant en particulier.',
          },
        },
        {
          id: 'bone-age',
          heading: 'L’âge osseux : la référence clinique',
          paragraphs: [
            'Quand un pédiatre a vraiment besoin de précision — par exemple quand la courbe de croissance d’un enfant semble inhabituelle — il prescrit une radiographie de l’âge osseux de la main et du poignet gauches. Un spécialiste compare l’image à des standards de référence (l’atlas de Greulich-Pyle étant le plus classique) pour déterminer l’âge squelettique, puis le combine avec la courbe de croissance pour prédire la taille adulte.',
            'C’est la méthode la plus précise disponible, car elle mesure la maturité biologique réelle de l’enfant, et pas seulement son âge calendaire. Mais elle exige une visite chez le médecin, une exposition aux rayons X (une dose très faible) et une interprétation clinique — ce n’est pas une option à faire soi-même.',
            'Pour une simple curiosité, les formules ci-dessus suffisent largement. Et si vous voulez une estimation rapide dès maintenant, le prédicteur gratuit de ce site utilise la méthode de la taille cible génétique :',
          ],
          link: {
            text: '→ Prédire la taille adulte de mon enfant (gratuit)',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'Quelle est la précision des prédicteurs de taille en ligne pour enfant ?',
          answer: 'La plupart des prédicteurs gratuits utilisent la formule de la taille cible génétique : leur précision honnête est donc d’environ ±8,5 cm (±3,3 pouces) autour du résultat. Considérez le chiffre comme le centre d’une fourchette, pas comme une promesse.',
        },
        {
          question: 'Qu’est-ce que la méthode Khamis-Roche ?',
          answer: 'Une formule de prédiction de la taille publiée en 1994, qui utilise l’âge, la taille et le poids de l’enfant ainsi que la taille des deux parents. Elle est plus précise que la taille cible génétique — environ ±2 pouces — et s’applique aux enfants de 4 à 17 ans environ.',
        },
        {
          question: 'Les médecins peuvent-ils prédire la taille de mon enfant ?',
          answer: 'Oui. Les pédiatres combinent l’estimation de la taille cible génétique avec la courbe de croissance de l’enfant et, si nécessaire, une radiographie de l’âge osseux de la main et du poignet. L’âge osseux est la méthode clinique la plus précise car elle mesure directement la maturité squelettique.',
        },
        {
          question: 'Quelle méthode utiliser pour un enfant de 3 ans ?',
          answer: 'La taille cible génétique est le choix raisonnable — la méthode Khamis-Roche n’est validée qu’à partir de 4 ans environ. À 3 ans, les prédictions sont de toute façon les moins fiables, car il reste tant de croissance (et de timing pubertaire) devant l’enfant.',
        },
      ],
      medicalDisclaimer: 'Cet article explique les méthodes de prédiction de la taille à des fins éducatives et ne constitue pas un avis médical. Si la croissance de votre enfant vous inquiète, consultez un pédiatre.',
      relatedLinks: [
        {
          text: 'Prédicteur de taille pour enfant (gratuit)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Prédire la taille adulte de mon enfant — guide complet',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: 'Le percentile de taille expliqué',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    de: {
      id: 'prediction-methods',
      slug: 'welche-methode-groessenvorhersage-genaueste',
      title: 'Welche Methode zur Vorhersage der Körpergröße von Kindern ist am genauesten?',
      subtitle: 'Knochenalter-Röntgen, Khamis-Roche und mittlere Elterngröße im ehrlichen Vergleich — Genauigkeit, Voraussetzungen und wann welche Methode sinnvoll ist.',
      metaDescription: 'Wie genau sind Kindergrößen-Rechner? Ehrlicher Vergleich von Knochenalter-Röntgen, Khamis-Roche-Methode und mittlerer Elterngröße — mit Fehlergrenzen.',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6 Min. Lesezeit',
      badge: 'Methodenvergleich',
      tocTitle: 'In diesem Artikel',
      intro: {
        lead: 'Sortiert nach Genauigkeit: Das Knochenalter-Röntgen (am genauesten, erfordert einen Arztbesuch) schlägt die Khamis-Roche-Methode (etwa ±2 Zoll, benötigt aktuelle Körpergröße, Gewicht und Alter des Kindes), die wiederum die Formel der mittleren Elterngröße schlägt (±8,5 cm, benötigt nur die Größe der Eltern).',
        paragraphs: [
          'Jeder Größen-Rechner — online oder in der Praxis — basiert auf einer dieser drei Methoden. Der ehrliche Unterschied zwischen ihnen ist keine Magie, sondern Daten: wie viele Informationen über das Kind sie verwenden und wie breit die Fehlergrenze ist.',
          'Im Folgenden: Wie jede Methode funktioniert, ihre tatsächliche Genauigkeit und eine klare Regel, welche Methode zu Ihrer Situation passt.',
        ],
      },
      sections: [
        {
          id: 'at-a-glance',
          heading: 'Die drei Methoden im Überblick',
          paragraphs: [
            'Hier die Kurzfassung, bevor wir jede Methode genauer betrachten:',
          ],
          table: {
            headers: [
              'Methode',
              'Typischer Fehler',
              'Was Sie brauchen',
              'Kosten / Zugang',
            ],
            rows: [
              [
                'Knochenalter-Röntgen',
                'Am genauesten',
                'Arztbesuch + Röntgenbild der Hand',
                'Nur in der Praxis',
              ],
              [
                'Khamis-Roche',
                '±~2 Zoll (~5 cm)',
                'Alter, Körpergröße und Gewicht des Kindes + Größe beider Eltern',
                'Kostenloser Rechner',
              ],
              [
                'Mittlere Elterngröße',
                '±8,5 cm (~3,3 Zoll)',
                'Nur Größe beider Eltern',
                'Kostenloser Rechner',
              ],
            ],
            footnote: 'Fehlergrenzen sind ungefähre publizierte Werte. Individuelle Ergebnisse variieren — Wachstum ist statistisch, nicht exakt.',
          },
        },
        {
          id: 'mid-parental',
          heading: 'Mittlere Elterngröße: die einfachste Schätzung',
          paragraphs: [
            'Das ist die Formel hinter fast jedem kostenlosen Online-Rechner — und die, die Kinderärzte in wenigen Sekunden nennen:',
          ],
          bulletPoints: [
            'Jungen: (Größe des Vaters + Größe der Mutter + 13 cm) ÷ 2',
            'Mädchen: (Größe des Vaters + Größe der Mutter − 13 cm) ÷ 2',
          ],
          callout: {
            type: 'tip',
            text: 'Beispiel: Vater 178 cm, Mutter 165 cm. Junge: (178 + 165 + 13) ÷ 2 = 178 cm. Mädchen: (178 + 165 − 13) ÷ 2 = 165 cm. Rechnen Sie mit ±8,5 cm rund um diesen Wert — der Junge würde wahrscheinlich zwischen 169,5 cm und 186,5 cm landen.',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'Khamis-Roche: die genaueste Formel',
          paragraphs: [
            'Die 1994 von Khamis und Roche veröffentlichte Methode berücksichtigt zusätzlich die aktuellen Messwerte des Kindes — Alter, Körpergröße und Gewicht — und kombiniert sie mit der Größe beider Eltern, wobei Regressionskoeffizienten aus einer großen Längsschnittstudie verwendet werden. Da sie einbezieht, wo das Kind gerade tatsächlich steht, schneidet sie konstant besser ab als die mittlere Elterngröße.',
            'Ihre publizierte Fehlergrenze liegt bei etwa ±2 Zoll (rund 5 cm) — deutlich enger als die ±8,5 cm der mittleren Elterngröße. Sie funktioniert für Kinder etwa zwischen 4 und 17 Jahren, und die Vorhersage wird genauer, je älter das Kind ist.',
          ],
          callout: {
            type: 'note',
            text: 'Eine ehrliche Einschränkung: Die ursprüngliche Khamis-Roche-Studie untersuchte weiße amerikanische Kinder. Sie ist weit verbreitet, bleibt aber eine bevölkerungsbezogene Schätzung — keine Messung Ihres Kindes im Speziellen.',
          },
        },
        {
          id: 'bone-age',
          heading: 'Knochenalter: der klinische Goldstandard',
          paragraphs: [
            'Wenn ein Kinderarzt wirklich Präzision braucht — zum Beispiel, wenn die Wachstumskurve eines Kindes ungewöhnlich aussieht — verordnet er ein Knochenalter-Röntgen der linken Hand und des Handgelenks. Ein Spezialist vergleicht das Bild mit Referenzstandards (der Greulich-Pyle-Atlas ist der klassische) und bestimmt so das Skelettalter, das dann zusammen mit der Wachstumskurve die Erwachsenengröße prognostiziert.',
            'Dies ist die genaueste verfügbare Methode, weil sie die tatsächliche biologische Reife des Kindes misst — nicht nur sein Kalenderalter. Sie erfordert jedoch einen Arztbesuch, eine (sehr geringe) Strahlenbelastung und eine klinische Auswertung — also keine Option für zu Hause.',
            'Für die alltägliche Neugier reichen die Formeln oben völlig aus. Und wenn Sie jetzt schnell eine Schätzung wollen: Der kostenlose Rechner auf dieser Seite nutzt die mittlere Elterngröße:',
          ],
          link: {
            text: '→ Erwachsenengröße Ihres Kindes vorhersagen (kostenlos)',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'Wie genau sind Online-Rechner zur Körpergröße von Kindern?',
          answer: 'Die meisten kostenlosen Rechner verwenden die Formel der mittleren Elterngröße, daher liegt ihre ehrliche Genauigkeit bei etwa ±8,5 cm (±3,3 Zoll) rund um das Ergebnis. Betrachten Sie die Zahl als Mitte eines Bereichs — nicht als Versprechen.',
        },
        {
          question: 'Was ist die Khamis-Roche-Methode?',
          answer: 'Eine 1994 veröffentlichte Formel zur Vorhersage der Körpergröße, die Alter, Größe und Gewicht des Kindes zusammen mit der Größe beider Eltern verwendet. Sie ist genauer als die mittlere Elterngröße — etwa ±2 Zoll — und funktioniert für Kinder von etwa 4 bis 17 Jahren.',
        },
        {
          question: 'Können Ärzte vorhersagen, wie groß mein Kind wird?',
          answer: 'Ja. Kinderärzte kombinieren die Schätzung aus der mittleren Elterngröße mit der Wachstumskurve des Kindes und, falls nötig, einem Knochenalter-Röntgen von Hand und Handgelenk. Das Knochenalter ist die genaueste klinische Methode, weil es die Skelettreife direkt misst.',
        },
        {
          question: 'Welche Methode soll ich für ein 3-jähriges Kind verwenden?',
          answer: 'Die mittlere Elterngröße ist die vernünftige Wahl — die Khamis-Roche-Methode ist ab etwa 4 Jahren validiert. Mit 3 Jahren sind Vorhersagen ohnehin am unzuverlässigsten, da noch so viel Wachstum (und der Zeitpunkt der Pubertät) bevorsteht.',
        },
      ],
      medicalDisclaimer: 'Dieser Artikel erklärt Methoden zur Vorhersage der Körpergröße zu Bildungszwecken und ist keine medizinische Beratung. Wenn Sie Bedenken bezüglich des Wachstums Ihres Kindes haben, wenden Sie sich an einen Kinderarzt.',
      relatedLinks: [
        {
          text: 'Kindergrößen-Rechner (kostenlos)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Erwachsenengröße von Kindern vorhersagen — komplette Anleitung',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: 'Perzentile der Körpergröße erklärt',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    hi: {
      id: 'prediction-methods',
      slug: 'bachche-ki-unchai-bhavishyavani-sabse-sateek-tareeka',
      title: 'बच्चे की ऊंचाई का अनुमान लगाने का सबसे सटीक तरीका कौन-सा है?',
      subtitle: 'बोन-एज एक्स-रे, खामिस-रोशे और मिड-पैरेंटल ऊंचाई की ईमानदार तुलना — सटीकता, हर तरीके के लिए क्या चाहिए, और कौन-सा तरीका कब सही है।',
      metaDescription: 'बच्चे की ऊंचाई का अनुमान कितना सटीक होता है? बोन-एज एक्स-रे, खामिस-रोशे विधि और मिड-पैरेंटल ऊंचाई की ईमानदार तुलना — त्रुटि की सीमा सहित।',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6 मिनट में पढ़ें',
      badge: 'विधियों की तुलना',
      tocTitle: 'इस लेख में',
      intro: {
        lead: 'सटीकता के क्रम में: बोन-एज एक्स-रे (सबसे सटीक, डॉक्टर की ज़रूरत होती है) खामिस-रोशे विधि से बेहतर है (लगभग ±2 इंच, बच्चे की मौजूदा ऊंचाई, वज़न और उम्र चाहिए), और खामिस-रोशे मिड-पैरेंटल फ़ॉर्मूले से बेहतर है (±8.5 सेमी, सिर्फ माता-पिता की ऊंचाई चाहिए)।',
        paragraphs: [
          'हर ऊंचाई भविष्यवक्ता — ऑनलाइन हो या क्लीनिक में — इन्हीं तीन विधियों में से किसी एक पर आधारित है। इनके बीच ईमानदार अंतर कोई जादू नहीं, बल्कि डेटा है: हर विधि बच्चे के बारे में कितनी जानकारी इस्तेमाल करती है, और त्रुटि की सीमा कितनी चौड़ी है।',
          'आगे पढ़ें: हर विधि कैसे काम करती है, उसकी असली सटीकता क्या है, और आपकी स्थिति के लिए कौन-सा तरीका सही है — इसका स्पष्ट नियम।',
        ],
      },
      sections: [
        {
          id: 'at-a-glance',
          heading: 'तीनों विधियां एक नज़र में',
          paragraphs: [
            'पहले संक्षिप्त सारांश, फिर हर विधि के बारे में विस्तार से:',
          ],
          table: {
            headers: [
              'विधि',
              'आम त्रुटि',
              'क्या चाहिए',
              'लागत / पहुंच',
            ],
            rows: [
              [
                'बोन-एज एक्स-रे',
                'सबसे सटीक',
                'डॉक्टर के पास जाना + हाथ का एक्स-रे',
                'सिर्फ क्लीनिक में',
              ],
              [
                'खामिस-रोशे',
                '±~2 इंच (~5 सेमी)',
                'बच्चे की उम्र, ऊंचाई, वज़न + माता-पिता दोनों की ऊंचाई',
                'मुफ्त कैलकुलेटर',
              ],
              [
                'मिड-पैरेंटल',
                '±8.5 सेमी (~3.3 इंच)',
                'सिर्फ माता-पिता दोनों की ऊंचाई',
                'मुफ्त कैलकुलेटर',
              ],
            ],
            footnote: 'त्रुटि की सीमाएं प्रकाशित अनुमानित मान हैं। व्यक्तिगत परिणाम अलग हो सकते हैं — विकास सांख्यिकीय है, सटीक नहीं।',
          },
        },
        {
          id: 'mid-parental',
          heading: 'मिड-पैरेंटल ऊंचाई: सबसे आसान अनुमान',
          paragraphs: [
            'यही वह फ़ॉर्मूला है जिस पर लगभग हर मुफ्त ऑनलाइन भविष्यवक्ता आधारित है, और जिसे बाल रोग विशेषज्ञ पल भर में बता देते हैं:',
          ],
          bulletPoints: [
            'लड़के: (पिता की ऊंचाई + माता की ऊंचाई + 13 सेमी) ÷ 2',
            'लड़कियां: (पिता की ऊंचाई + माता की ऊंचाई − 13 सेमी) ÷ 2',
          ],
          callout: {
            type: 'tip',
            text: 'उदाहरण: पिता 178 सेमी, माता 165 सेमी। लड़का: (178 + 165 + 13) ÷ 2 = 178 सेमी। लड़की: (178 + 165 − 13) ÷ 2 = 165 सेमी। इस संख्या के आसपास ±8.5 सेमी की उम्मीद रखें — यानी लड़के की ऊंचाई 169.5 सेमी से 186.5 सेमी के बीच रहने की संभावना है।',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'खामिस-रोशे: सबसे सटीक फ़ॉर्मूला',
          paragraphs: [
            '1994 में खामिस और रोशे द्वारा प्रकाशित यह विधि माता-पिता की ऊंचाई के साथ बच्चे की मौजूदा माप — उम्र, ऊंचाई और वज़न — भी जोड़ती है, एक बड़े दीर्घकालिक अध्ययन से निकाले गए रिग्रेशन गुणांकों का इस्तेमाल करके। क्योंकि यह इस बात को ध्यान में रखती है कि बच्चा अभी वास्तव में कहां है, यह लगातार मिड-पैरेंटल ऊंचाई से बेहतर प्रदर्शन करती है।',
            'इसकी प्रकाशित त्रुटि सीमा लगभग ±2 इंच (लगभग 5 सेमी) है — मिड-पैरेंटल की ±8.5 सेमी से काफ़ी कम। यह लगभग 4 से 17 साल के बच्चों के लिए काम करती है, और बच्चा जितना बड़ा होता है, अनुमान उतना ही बेहतर होता जाता है।',
          ],
          callout: {
            type: 'note',
            text: 'एक ईमानदार सीमा: मूल खामिस-रोशे अध्ययन में श्वेत अमेरिकी बच्चों को शामिल किया गया था। इसका व्यापक इस्तेमाल होता है, लेकिन यह अब भी जनसंख्या-आधारित अनुमान है — आपके विशिष्ट बच्चे का माप नहीं।',
          },
        },
        {
          id: 'bone-age',
          heading: 'बोन एज: नैदानिक स्वर्ण मानक',
          paragraphs: [
            'जब बाल रोग विशेषज्ञ को सच में सटीकता चाहिए होती है — उदाहरण के लिए, जब बच्चे की विकास वक्र असामान्य दिखे — तो वे बाएं हाथ और कलाई का बोन-एज एक्स-रे करवाते हैं। विशेषज्ञ तस्वीर की तुलना संदर्भ मानकों से करते हैं (ग्रीलिख-पाइल एटलस सबसे प्रसिद्ध है) ताकि कंकाल की उम्र तय हो सके, फिर उसे विकास चार्ट के साथ जोड़कर वयस्क ऊंचाई का पूर्वानुमान लगाते हैं।',
            'यह सबसे सटीक उपलब्ध विधि है, क्योंकि यह कैलेंडर उम्र की बजाय बच्चे की वास्तविक जैविक परिपक्वता को मापती है। लेकिन इसके लिए डॉक्टर के पास जाना ज़रूरी है, विकिरण का सामना (बहुत छोटी खुराक) और नैदानिक व्याख्या चाहिए — यह घर पर खुद करने वाला विकल्प नहीं है।',
            'रोज़मर्रा की जिज्ञासा के लिए ऊपर दिए गए फ़ॉर्मूले काफ़ी हैं। और अगर आप अभी तुरंत एक अनुमान चाहते हैं, तो इस साइट का मुफ्त भविष्यवक्ता मिड-पैरेंटल विधि का इस्तेमाल करता है:',
          ],
          link: {
            text: '→ अपने बच्चे की वयस्क ऊंचाई का अनुमान लगाएं (मुफ्त)',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'ऑनलाइन बच्चे की ऊंचाई के भविष्यवक्ता कितने सटीक होते हैं?',
          answer: 'ज़्यादातर मुफ्त भविष्यवक्ता मिड-पैरेंटल फ़ॉर्मूले का इस्तेमाल करते हैं, इसलिए उनकी ईमानदार सटीकता परिणाम के आसपास लगभग ±8.5 सेमी (±3.3 इंच) है। इस संख्या को एक सीमा का केंद्र मानें, कोई वादा नहीं।',
        },
        {
          question: 'खामिस-रोशे विधि क्या है?',
          answer: '1994 में प्रकाशित ऊंचाई-अनुमान का एक फ़ॉर्मूला, जो माता-पिता दोनों की ऊंचाई के साथ बच्चे की उम्र, ऊंचाई और वज़न का इस्तेमाल करता है। यह मिड-पैरेंटल ऊंचाई से ज़्यादा सटीक है — लगभग ±2 इंच — और लगभग 4 से 17 साल के बच्चों के लिए काम करती है।',
        },
        {
          question: 'क्या डॉक्टर बता सकते हैं कि मेरा बच्चा कितना लंबा होगा?',
          answer: 'हां। बाल रोग विशेषज्ञ मिड-पैरेंटल अनुमान को बच्चे की विकास वक्र के साथ जोड़ते हैं, और ज़रूरत पड़ने पर हाथ और कलाई का बोन-एज एक्स-रे करवाते हैं। बोन एज सबसे सटीक नैदानिक विधि है, क्योंकि यह कंकाल की परिपक्वता को सीधे मापती है।',
        },
        {
          question: '3 साल के बच्चे के लिए कौन-सी विधि इस्तेमाल करूं?',
          answer: 'मिड-पैरेंटल ऊंचाई ही समझदारी भरा विकल्प है — खामिस-रोशे विधि लगभग 4 साल की उम्र से मान्य है। वैसे भी 3 साल में अनुमान सबसे कम विश्वसनीय होते हैं, क्योंकि आगे अभी बहुत विकास (और यौवन का समय) बाकी है।',
        },
      ],
      medicalDisclaimer: 'यह लेख शैक्षणिक उद्देश्यों के लिए ऊंचाई-अनुमान की विधियां समझाता है और चिकित्सा सलाह नहीं है। अगर आपको अपने बच्चे के विकास को लेकर कोई चिंता है, तो बाल रोग विशेषज्ञ से सलाह लें।',
      relatedLinks: [
        {
          text: 'बच्चे की ऊंचाई का भविष्यवक्ता (मुफ्त)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'अपने बच्चे की वयस्क ऊंचाई का अनुमान लगाएं — पूरी गाइड',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: 'ऊंचाई पर्सेंटाइल समझें',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    ja: {
      id: 'prediction-methods',
      slug: 'kodomo-shincho-yosoku-seido-hikaku',
      title: '子どもの将来の身長を予測する方法、どれが一番正確？',
      subtitle: '骨年齢レントゲン、Khamis-Roche法、中間親身長法を徹底比較——正確さ、必要なデータ、使い分けのポイントを正直に解説します。',
      metaDescription: '子どもの身長予測はどれくらい正確？骨年齢レントゲン、Khamis-Roche法、中間親身長法を誤差の幅とともに正直に比較します。',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6分で読める',
      badge: '方法の比較',
      tocTitle: 'この記事の内容',
      intro: {
        lead: '正確さの順に並べるとこうなります。骨年齢レントゲン（最も正確。医師の診察が必要）＞ Khamis-Roche法（誤差は約±5cm。子どもの現在の年齢・身長・体重と両親の身長が必要）＞ 中間親身長法（誤差は約±8.5cm。両親の身長だけで計算できます）。',
        paragraphs: [
          'オンラインの予測ツールも病院での診察も、使っているのはこの3つの方法のどれかです。正直なところ、その違いは魔法ではなく「データの量」です。子どもについての情報量が多ければ多いほど、誤差の幅は小さくなります。',
          '以下では、それぞれの方法の仕組みと本当の正確さ、そしてご家庭に合った方法の選び方を解説します。',
        ],
      },
      sections: [
        {
          id: 'at-a-glance',
          heading: '3つの方法をひと目で比較',
          paragraphs: [
            'まずは要点だけまとめておきます。詳しい解説はこの後に続きます。',
          ],
          table: {
            headers: [
              '方法',
              '誤差の目安',
              '必要なデータ',
              '費用・利用方法',
            ],
            rows: [
              [
                '骨年齢レントゲン',
                '最も正確',
                '医師の診察＋手のレントゲン',
                '医療機関のみ',
              ],
              [
                'Khamis-Roche法',
                '約±5cm（約±2インチ）',
                '子どもの年齢・身長・体重＋両親の身長',
                '無料の計算ツール',
              ],
              [
                '中間親身長法',
                '約±8.5cm（約±3.3インチ）',
                '両親の身長のみ',
                '無料の計算ツール',
              ],
            ],
            footnote: '誤差の幅は公表されているおおよその値です。実際の結果には個人差があります——成長は統計的なものであり、正確に当てはまるものではありません。',
          },
        },
        {
          id: 'mid-parental',
          heading: '中間親身長法：いちばん手軽な推定方法',
          paragraphs: [
            '無料のオンライン予測ツールのほぼすべてが使っている計算式で、小児科医がすぐに口頭で答えられるのもこの方法です。',
          ],
          bulletPoints: [
            '男の子：（父親の身長＋母親の身長＋13cm）÷ 2',
            '女の子：（父親の身長＋母親の身長−13cm）÷ 2',
          ],
          callout: {
            type: 'tip',
            text: '計算例：父親178cm、母親165cmの場合。男の子なら（178＋165＋13）÷2＝178cm。女の子なら（178＋165−13）÷2＝165cm。誤差は±8.5cmほど見込むので、男の子の場合は169.5cm〜186.5cmの範囲に収まる可能性が高い、ということになります。',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'Khamis-Roche法：数式のなかでは最も正確',
          paragraphs: [
            '1994年にKhamisとRocheが発表した方法です。両親の身長に加えて、子ども自身の現在の年齢・身長・体重を使い、大規模な縦断研究から導き出された回帰係数で計算します。「今の子どもの状態」を使うからこそ、中間親身長法を安定して上回る精度が出ます。',
            '公表されている誤差の幅は約±2インチ（約5cm）で、中間親身長法の±8.5cmより明らかに狭くなっています。対象はおおむね4歳〜17歳の子どもで、年齢が上がるほど予測の精度は高まります。',
          ],
          callout: {
            type: 'note',
            text: '正直にお伝えしたい注意点：Khamis-Roche法の元になった研究は、アメリカの白人の子どもたちを追跡したものです。広く使われている方法ですが、あくまで集団データに基づく推定であり、お子さん個人を直接測るものではありません。',
          },
        },
        {
          id: 'bone-age',
          heading: '骨年齢：臨床の現場でのゴールドスタンダード',
          paragraphs: [
            '子どもの成長曲線が気になるときなど、小児科医が本当に精密さを求める場合は、左手と手首の骨年齢レントゲンを撮ります。専門医がレントゲン画像を標準図譜（代表的なのがGreulich-Pyleアトラス）と見比べて「骨の年齢」を判定し、成長曲線と組み合わせて将来の身長を予測します。',
            '暦の年齢ではなく、子どもの実際の生物学的な成熟度を測るため、この方法が現在知られているなかで最も正確です。ただし、医師の診察が必要で、ごくわずかとはいえ放射線被ばくがあり、専門医の読影が欠かせません——ご家庭でできる手軽な方法ではありません。',
            'ふだんの「知りたい」程度であれば、上で紹介した数式で十分です。今すぐ手早く予測したい方は、このサイトの無料ツール（中間親身長法を使っています）をお試しください。',
          ],
          link: {
            text: '→ お子さんの将来の身長を予測する（無料）',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'オンラインの身長予測ツールはどれくらい正確ですか？',
          answer: '無料の予測ツールのほとんどは中間親身長法を使っているため、正直な精度は結果の±8.5cm（±3.3インチ）程度です。出た数字は「確定値」ではなく「この範囲の真ん中」と考えてください。',
        },
        {
          question: 'Khamis-Roche法とは何ですか？',
          answer: '1994年に発表された身長予測の計算式で、子どもの年齢・身長・体重と両親の身長を組み合わせて使います。中間親身長法より正確（誤差は約±2インチ）で、おおむね4歳〜17歳の子どもが対象です。',
        },
        {
          question: '医師は子どもの将来の身長を予測できますか？',
          answer: 'はい。小児科医は中間親身長法の推定値と子どもの成長曲線を組み合わせ、必要に応じて手と手首の骨年齢レントゲンを撮ります。骨の成熟度を直接測る骨年齢は、臨床で最も正確な方法です。',
        },
        {
          question: '3歳の子どもにはどの方法を使えばいいですか？',
          answer: '中間親身長法が妥当な選択です——Khamis-Roche法はおおむね4歳からが対象とされています。3歳の時点では、どの方法でも予測の信頼性は低めです。これからの成長や思春期のタイミングがまだ見えない時期だからです。',
        },
      ],
      medicalDisclaimer: 'この記事は身長予測の方法を教育目的で解説するものであり、医療的な助言ではありません。お子さんの成長について心配な点があれば、小児科医にご相談ください。',
      relatedLinks: [
        {
          text: '子どもの身長予測ツール（無料）',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'お子さんの将来の身長を予測する——完全ガイド',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: '身長のパーセンタイルとは',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    ko: {
      id: 'prediction-methods',
      slug: 'ai-ki-yecheug-bangbeob-junghwagdo-bigyo',
      title: '아이 키 예측 방법 중 가장 정확한 것은?',
      subtitle: '골연령 X선, Khamis-Roche법, 중간부모키법을 솔직하게 비교 — 정확도, 필요한 정보, 어떤 상황에 맞는지 정리했습니다.',
      metaDescription: '아이 키 예측기는 얼마나 정확할까? 골연령 X선, Khamis-Roche법, 중간부모키법의 솔직한 비교와 오차 범위를 확인하세요.',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6분 읽기',
      badge: '방법 비교',
      tocTitle: '이 글의 목차',
      intro: {
        lead: '정확도 순으로 정리하면: 골연령 X선(가장 정확, 의사 진료 필요)이 Khamis-Roche법(약 ±5cm, 아이의 현재 키·체중·나이가 필요)을 앞서고, Khamis-Roche법이 중간부모키법(±8.5cm, 부모의 키만 필요)보다 정확합니다.',
        paragraphs: [
          '온라인이든 병원이든 모든 키 예측기는 이 세 가지 방법 중 하나를 기반으로 합니다. 이들 사이의 솔직한 차이는 마법이 아니라 데이터입니다. 아이에 대한 정보를 얼마나 활용하는지, 그리고 오차 범위가 얼마나 넓은지가 핵심입니다.',
          '아래에서는 각 방법이 어떻게 작동하는지, 실제 정확도는 어느 정도인지, 그리고 내 상황에 어떤 방법이 맞는지 명확한 기준을 설명합니다.',
        ],
      },
      sections: [
        {
          id: 'at-a-glance',
          heading: '세 가지 방법 한눈에 보기',
          paragraphs: [
            '자세히 들어가기 전에 간단히 정리해 보겠습니다:',
          ],
          table: {
            headers: [
              '방법',
              '일반적인 오차',
              '필요한 정보',
              '비용 / 접근성',
            ],
            rows: [
              [
                '골연령 X선',
                '가장 정확',
                '병원 방문 + 손 X선 촬영',
                '병원에서만 가능',
              ],
              [
                'Khamis-Roche법',
                '±약 5cm(±2인치)',
                '아이의 나이·키·체중 + 부모 모두의 키',
                '무료 계산기',
              ],
              [
                '중간부모키법',
                '±8.5cm(약 3.3인치)',
                '부모 모두의 키만 필요',
                '무료 계산기',
              ],
            ],
            footnote: '오차 범위는 발표된 대략적인 수치입니다. 개인 결과는 다를 수 있습니다. 성장은 통계적인 것이지 정확한 예측이 아닙니다.',
          },
        },
        {
          id: 'mid-parental',
          heading: '중간부모키법: 가장 간단한 추정',
          paragraphs: [
            '거의 모든 무료 온라인 예측기의 기반이 되는 공식으로, 소아과 의사가 몇 초 만에 알려주는 방법이기도 합니다:',
          ],
          bulletPoints: [
            '남자아이: (아버지 키 + 어머니 키 + 13cm) ÷ 2',
            '여자아이: (아버지 키 + 어머니 키 − 13cm) ÷ 2',
          ],
          callout: {
            type: 'tip',
            text: '예시: 아버지 178cm, 어머니 165cm인 경우. 남자아이: (178 + 165 + 13) ÷ 2 = 178cm. 여자아이: (178 + 165 − 13) ÷ 2 = 165cm. 이 숫자에서 ±8.5cm 정도를 예상하세요. 남자아이는 169.5cm에서 186.5cm 사이에 들어갈 가능성이 높습니다.',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'Khamis-Roche법: 가장 정확한 공식',
          paragraphs: [
            '1994년 Khamis와 Roche가 발표한 이 방법은 부모의 키에 아이의 현재 나이·키·체중을 더해, 대규모 장기 연구에서 도출한 회귀 계수로 계산합니다. 아이가 지금 실제로 어디에 있는지를 반영하기 때문에 중간부모키법보다 꾸준히 더 정확합니다.',
            '발표된 오차 범위는 약 ±2인치(약 5cm)로, 중간부모키법의 ±8.5cm보다 눈에 띄게 좁습니다. 대략 4세부터 17세까지의 아이에게 적용되며, 나이가 많을수록 예측이 더 정확해집니다.',
          ],
          callout: {
            type: 'note',
            text: '솔직한 한계 하나: 원래 Khamis-Roche 연구는 백인 미국 아동을 대상으로 했습니다. 널리 사용되고 있지만, 여전히 인구 집단 기반의 추정치일 뿐, 내 아이를 직접 측정한 것은 아닙니다.',
          },
        },
        {
          id: 'bone-age',
          heading: '골연령: 임상에서의 황금 표준',
          paragraphs: [
            '소아과 의사가 정말 정밀한 판단이 필요할 때 — 예를 들어 아이의 성장 곡선이 이상해 보일 때 — 왼손과 손목의 골연령 X선을 촬영합니다. 전문의가 영상을 표준 도표(가장 유명한 것은 Greulich-Pyle 아틀라스)와 비교해 골격 연령을 판단한 뒤, 성장 곡선과 함께 성인 키를 예측합니다.',
            '이 방법이 가장 정확한 이유는 단순한 나이가 아니라 아이의 실제 생물학적 성숙도를 측정하기 때문입니다. 하지만 병원 방문이 필요하고, 방사선 노출(매우 적은 양)이 있으며, 의사의 해석이 필요합니다. 집에서 할 수 있는 방법은 아닙니다.',
            '일상적인 궁금증이라면 위의 공식들로 충분합니다. 그리고 지금 바로 빠르게 추정해 보고 싶다면, 이 사이트의 무료 예측기는 중간부모키법을 사용합니다:',
          ],
          link: {
            text: '→ 우리 아이 성인 키 예측하기 (무료)',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: '온라인 아이 키 예측기는 얼마나 정확한가요?',
          answer: '대부분의 무료 예측기는 중간부모키법을 사용하므로, 솔직한 정확도는 결과에서 약 ±8.5cm(±3.3인치) 정도입니다. 그 숫자를 약속이 아니라 범위의 중심점으로 받아들이세요.',
        },
        {
          question: 'Khamis-Roche법이란 무엇인가요?',
          answer: '1994년에 발표된 키 예측 공식으로, 아이의 나이·키·체중과 부모 모두의 키를 함께 사용합니다. 중간부모키법보다 정확하며(약 ±2인치), 대략 4세부터 17세까지의 아이에게 적용됩니다.',
        },
        {
          question: '의사가 우리 아이의 키를 예측할 수 있나요?',
          answer: '네. 소아과 의사는 중간부모키 추정과 아이의 성장 곡선을 함께 보고, 필요하면 손과 손목의 골연령 X선을 촬영합니다. 골연령은 골격 성숙도를 직접 측정하기 때문에 임상에서 가장 정확한 방법입니다.',
        },
        {
          question: '3살 아이에게는 어떤 방법을 써야 하나요?',
          answer: '중간부모키법이 합리적인 선택입니다. Khamis-Roche법은 대략 4세부터 검증되었습니다. 어차피 3살에는 앞으로의 성장과 사춘기 시기가 많이 남아 있어 예측이 가장 부정확한 시기입니다.',
        },
      ],
      medicalDisclaimer: '이 글은 키 예측 방법을 설명하는 교육 목적의 콘텐츠이며, 의학적 조언이 아닙니다. 아이의 성장에 대해 걱정되는 점이 있다면 소아과 의사와 상담하세요.',
      relatedLinks: [
        {
          text: '아이 키 예측기 (무료)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: '우리 아이 성인 키 예측 — 전체 가이드',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: '키 백분위수 설명',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    ar: {
      id: 'prediction-methods',
      slug: 'tariqat-tanabu-tool-aqt-al-akthar-duqqa',
      title: 'أي طريقة للتنبؤ بطول الطفل هي الأكثر دقة؟',
      subtitle: 'صورة العمر العظمي بالأشعة السينية، وطريقة خميس–روش، وطول الوالدين الوسيط — مقارنة صريحة: الدقة، وما تتطلبه كل طريقة، ومتى تناسب كل واحدة.',
      metaDescription: 'ما مدى دقة أدوات التنبؤ بطول الأطفال؟ مقارنة صريحة بين صورة العمر العظمي بالأشعة، وطريقة خميس–روش، وطول الوالدين الوسيط — مع هوامش الخطأ.',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '٦ دقائق للقراءة',
      badge: 'مقارنة بين الطرق',
      tocTitle: 'في هذا المقال',
      intro: {
        lead: 'مرتّبة حسب الدقة: صورة العمر العظمي بالأشعة السينية (الأكثر دقة، وتتطلب طبيبًا) تتفوق على طريقة خميس–روش (نحو ±٢ بوصة، وتتطلب طول الطفل ووزنه وعمره الحاليين)، التي تتفوق بدورها على معادلة طول الوالدين الوسيط (±٨٫٥ سم، وتحتاج فقط إلى طولَي الوالدين).',
        paragraphs: [
          'كل أداة للتنبؤ بالطول — عبر الإنترنت أو في العيادة — مبنية على واحدة من هذه الطرق الثلاث. والفرق الصادق بينها ليس سحرًا، بل بيانات: مقدار المعلومات التي تستخدمها عن الطفل، ومدى اتساع هامش الخطأ.',
          'فيما يلي: كيف تعمل كل طريقة، ودقتها الحقيقية، وقاعدة واضحة لاختيار الطريقة المناسبة لحالتك.',
        ],
      },
      sections: [
        {
          id: 'at-a-glance',
          heading: 'الطرق الثلاث بنظرة سريعة',
          paragraphs: [
            'هذه هي الخلاصة، قبل أن نتعمق في كل طريقة على حدة:',
          ],
          table: {
            headers: [
              'الطريقة',
              'الخطأ النموذجي',
              'ما تحتاجه',
              'التكلفة / الوصول',
            ],
            rows: [
              [
                'صورة العمر العظمي',
                'الأكثر دقة',
                'زيارة طبيب + أشعة سينية لليد',
                'في العيادة فقط',
              ],
              [
                'خميس–روش',
                '±٢ بوصة تقريبًا (نحو ٥ سم)',
                'عمر الطفل وطوله ووزنه + طولَي الوالدين',
                'حاسبة مجانية',
              ],
              [
                'الوالدين الوسيط',
                '±٨٫٥ سم (نحو ٣٫٣ بوصات)',
                'طولَي الوالدين فقط',
                'حاسبة مجانية',
              ],
            ],
            footnote: 'هوامش الخطأ قيم تقريبية منشورة. النتائج الفردية تختلف — فالنمو إحصائي، وليس دقيقًا تمامًا.',
          },
        },
        {
          id: 'mid-parental',
          heading: 'طول الوالدين الوسيط: أبسط تقدير',
          paragraphs: [
            'هذه هي المعادلة التي تستند إليها تقريبًا كل أداة تنبؤ مجانية على الإنترنت، وهي التي يذكرها أطباء الأطفال في ثوانٍ:',
          ],
          bulletPoints: [
            'للأولاد: (طول الأب + طول الأم + ١٣ سم) ÷ ٢',
            'للبنات: (طول الأب + طول الأم − ١٣ سم) ÷ ٢',
          ],
          callout: {
            type: 'tip',
            text: 'مثال: الأب ١٧٨ سم، والأم ١٦٥ سم. الولد: (١٧٨ + ١٦٥ + ١٣) ÷ ٢ = ١٧٨ سم. البنت: (١٧٨ + ١٦٥ − ١٣) ÷ ٢ = ١٦٥ سم. وتوقَّع هامش ±٨٫٥ سم حول هذا الرقم — فالولد سيكون غالبًا بين ١٦٩٫٥ سم و١٨٦٫٥ سم.',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'خميس–روش: أدق معادلة حسابية',
          paragraphs: [
            'نُشرت هذه الطريقة على يد خميس وروش عام ١٩٩٤، وهي تضيف قياسات الطفل الحالية — العمر والطول والوزن — إلى طولَي الوالدين، مستخدمةً معاملات انحدار مستمدة من دراسة طولية واسعة. ولأنها تستخدم المكان الذي يقف عنده الطفل فعليًا الآن، فإنها تتفوق باستمرار على طريقة الوالدين الوسيط.',
            'هامش الخطأ المنشور لها نحو ±٢ بوصة (حوالي ٥ سم) — أي أضيق بوضوح من ±٨٫٥ سم في طريقة الوالدين الوسيط. وهي صالحة للأطفال بين سن ٤ و١٧ تقريبًا، ويتحسن التنبؤ كلما كبر الطفل.',
          ],
          callout: {
            type: 'note',
            text: 'قيدٌ واحد بصراحة: الدراسة الأصلية لخميس–روش تابعت أطفالًا بيضًا من الأمريكيين. الطريقة مستخدمة على نطاق واسع، لكنها تظل تقديرًا سكانيًا — وليست قياسًا لطفلك تحديدًا.',
          },
        },
        {
          id: 'bone-age',
          heading: 'العمر العظمي: المعيار الذهبي السريري',
          paragraphs: [
            'عندما يحتاج طبيب الأطفال فعلًا إلى الدقة — مثلًا عندما يبدو منحنى نمو الطفل غير طبيعي — فإنه يطلب صورة أشعة سينية للعمر العظمي لليد اليسرى والرسغ. يقارن الأخصائي الصورة بمعايير مرجعية (وأشهرها أطلس غرويليخ–بايل) لتحديد العمر الهيكلي، ثم يجمعه مع مخطط النمو للتنبؤ بالطول البالغ.',
            'هذه هي أدق طريقة متاحة لأنها تقيس النضج البيولوجي الفعلي للطفل، وليس عمره التقويمي فقط. لكنها تتطلب زيارة طبيب، وتعرّضًا للإشعاع (بجرعة صغيرة جدًا)، وتفسيرًا سريريًا — فهي ليست خيارًا منزليًا.',
            'أما للفضول اليومي العادي، فالمعادلتان أعلاه أكثر من كافيتين. وإذا أردت تقديرًا سريعًا الآن، فإن أداة التنبؤ المجانية في هذا الموقع تستخدم طريقة الوالدين الوسيط:',
          ],
          link: {
            text: '→ تنبَّ بطول طفلك البالغ (مجانًا)',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'ما مدى دقة أدوات التنبؤ بطول الأطفال على الإنترنت؟',
          answer: 'معظم الأدوات المجانية تستخدم معادلة الوالدين الوسيط، لذا فدقتها الصريحة نحو ±٨٫٥ سم (±٣٫٣ بوصات) حول النتيجة. تعامَل مع الرقم على أنه مركز نطاق، وليس وعدًا.',
        },
        {
          question: 'ما هي طريقة خميس–روش؟',
          answer: 'معادلة للتنبؤ بالطول نُشرت عام ١٩٩٤ وتستخدم عمر الطفل وطوله ووزنه مع طولَي الوالدين. وهي أدق من طريقة الوالدين الوسيط — نحو ±٢ بوصة — وصالحة للأطفال بين سن ٤ و١٧ تقريبًا.',
        },
        {
          question: 'هل يستطيع الأطباء التنبؤ بطول طفلي؟',
          answer: 'نعم. يجمع أطباء الأطفال بين تقدير الوالدين الوسيط ومنحنى نمو الطفل، وعند الحاجة يطلبون صورة أشعة للعمر العظمي لليد والرسغ. العمر العظمي هو أدق طريقة سريرية لأنه يقيس النضج الهيكلي مباشرة.',
        },
        {
          question: 'أي طريقة أستخدم لطفل عمره ٣ سنوات؟',
          answer: 'طول الوالدين الوسيط هو الخيار المعقول — فطريقة خميس–روش معتمدة من سن ٤ تقريبًا فأكبر. وفي سن الثالثة تكون التنبؤات أقل موثوقية على أي حال، إذ لا يزال أمام الطفل الكثير من النمو (وتوقيت البلوغ) في المستقبل.',
        },
      ],
      medicalDisclaimer: 'هذا المقال يشرح طرق التنبؤ بالطول لأغراض تعليمية، وهو ليس استشارة طبية. إذا كانت لديك مخاوف بشأن نمو طفلك، فاستشر طبيب أطفال.',
      relatedLinks: [
        {
          text: 'أداة التنبؤ بطول الطفل (مجانًا)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'تنبَّ بطول طفلك البالغ — الدليل الكامل',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: 'شرح النسبة المئوية للطول',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    ru: {
      id: 'prediction-methods',
      slug: 'kakoy-metod-prognoza-rosta-samyy-tochnyy',
      title: 'Какой метод прогноза роста ребёнка самый точный?',
      subtitle: 'Рентген костного возраста, метод Хамиса-Роше и формула среднего родительского роста — честное сравнение: точность, что нужно для каждого метода и когда какой подходит.',
      metaDescription: 'Насколько точны предсказатели роста детей? Честное сравнение рентгена костного возраста, метода Хамиса-Роше и среднего родительского роста — с погрешностями.',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      readTime: '6 мин чтения',
      badge: 'Сравнение методов',
      tocTitle: 'В этой статье',
      intro: {
        lead: 'По точности ранжировка такая: рентген костного возраста (самый точный, нужен врач) точнее метода Хамиса-Роше (около ±2 дюймов, нужны текущий рост, вес и возраст ребёнка), а тот точнее формулы среднего родительского роста (±8,5 см, нужны только росты родителей).',
        paragraphs: [
          'Каждый предсказатель роста — онлайн или в клинике — построен на одном из этих трёх методов. Честная разница между ними не в магии, а в данных: сколько информации о ребёнке каждый использует и насколько широка погрешность.',
          'Ниже: как работает каждый метод, его реальная точность и понятное правило, какой подходит именно вам.',
        ],
      },
      sections: [
        {
          id: 'at-a-glance',
          heading: 'Три метода коротко',
          paragraphs: [
            'Сначала краткая версия — в детали погрузимся дальше:',
          ],
          table: {
            headers: [
              'Метод',
              'Типичная погрешность',
              'Что нужно',
              'Стоимость / доступ',
            ],
            rows: [
              [
                'Рентген костного возраста',
                'Самый точный',
                'Визит к врачу + рентген кисти',
                'Только в клинике',
              ],
              [
                'Хамис-Роше',
                '±~2 дюйма (~5 см)',
                'Возраст, рост, вес ребёнка + росты обоих родителей',
                'Бесплатный калькулятор',
              ],
              [
                'Средний родительский рост',
                '±8,5 см (~3,3 дюйма)',
                'Только росты обоих родителей',
                'Бесплатный калькулятор',
              ],
            ],
            footnote: 'Погрешности — приблизительные опубликованные значения. Индивидуальные результаты различаются — рост подчиняется статистике, а не точной формуле.',
          },
        },
        {
          id: 'mid-parental',
          heading: 'Средний родительский рост: самая простая оценка',
          paragraphs: [
            'На этой формуле работают почти все бесплатные онлайн-предсказатели, и именно её педиатры называют за секунды:',
          ],
          bulletPoints: [
            'Мальчики: (рост отца + рост матери + 13 см) ÷ 2',
            'Девочки: (рост отца + рост матери − 13 см) ÷ 2',
          ],
          callout: {
            type: 'tip',
            text: 'Пример: отец 178 см, мать 165 см. Мальчик: (178 + 165 + 13) ÷ 2 = 178 см. Девочка: (178 + 165 − 13) ÷ 2 = 165 см. Заложите ±8,5 см вокруг этого числа — то есть мальчик, скорее всего, окажется где-то между 169,5 см и 186,5 см.',
          },
        },
        {
          id: 'khamis-roche',
          heading: 'Хамис-Роше: самая точная формула',
          paragraphs: [
            'Опубликованный Хамисом и Роше в 1994 году, этот метод добавляет к росту родителей текущие измерения самого ребёнка — возраст, рост и вес — с использованием регрессионных коэффициентов из крупного лонгитюдного исследования. Поскольку он учитывает, где ребёнок находится прямо сейчас, он стабильно точнее среднего родительского роста.',
            'Его опубликованная погрешность — примерно ±2 дюйма (около 5 см) — заметно уже, чем ±8,5 см у среднего родительского роста. Он работает для детей примерно от 4 до 17 лет, и прогноз становится лучше по мере взросления ребёнка.',
          ],
          callout: {
            type: 'note',
            text: 'Одно честное ограничение: в оригинальном исследовании Хамиса и Роше наблюдались белые американские дети. Метод широко применяется, но это всё равно популяционная оценка — не измерение именно вашего ребёнка.',
          },
        },
        {
          id: 'bone-age',
          heading: 'Костный возраст: клинический золотой стандарт',
          paragraphs: [
            'Когда педиатру действительно нужна точность — например, если кривая роста ребёнка выглядит необычно — он назначает рентген костного возраста левой кисти и запястья. Специалист сравнивает снимок с эталонными стандартами (классический — атлас Грейлиха-Пайла), чтобы определить скелетный возраст, а затем сочетает его с графиком роста для прогноза взрослого роста.',
            'Это самый точный из доступных методов, потому что он измеряет фактическую биологическую зрелость ребёнка, а не просто календарный возраст. Но для него нужен визит к врачу, рентгеновское облучение (очень малая доза) и клиническая интерпретация — это не вариант «сделай сам».',
            'Для обычного любопытства формул выше более чем достаточно. А если нужна быстрая оценка прямо сейчас, бесплатный предсказатель на этом сайте использует метод среднего родительского роста:',
          ],
          link: {
            text: '→ Предсказать взрослый рост ребёнка (бесплатно)',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'Насколько точны онлайн-предсказатели роста детей?',
          answer: 'Большинство бесплатных предсказателей используют формулу среднего родительского роста, поэтому их честная точность — около ±8,5 см (±3,3 дюйма) вокруг результата. Воспринимайте число как центр диапазона, а не как обещание.',
        },
        {
          question: 'Что такое метод Хамиса-Роше?',
          answer: 'Формула прогноза роста, опубликованная в 1994 году, которая использует возраст, рост и вес ребёнка вместе с ростом обоих родителей. Она точнее среднего родительского роста — примерно ±2 дюйма — и работает для детей примерно от 4 до 17 лет.',
        },
        {
          question: 'Могут ли врачи предсказать, каким будет рост моего ребёнка?',
          answer: 'Да. Педиатры сочетают оценку среднего родительского роста с кривой роста ребёнка, а при необходимости — с рентгеном костного возраста кисти и запястья. Костный возраст — самый точный клинический метод, потому что он напрямую измеряет зрелость скелета.',
        },
        {
          question: 'Какой метод использовать для трёхлетнего ребёнка?',
          answer: 'Разумный выбор — средний родительский рост: метод Хамиса-Роше валидирован примерно с 4 лет. В 3 года прогнозы в любом случае наименее надёжны, ведь впереди ещё столько роста (и сроки полового созревания).',
        },
      ],
      medicalDisclaimer: 'Эта статья объясняет методы прогноза роста в образовательных целях и не является медицинской рекомендацией. Если у вас есть вопросы о росте вашего ребёнка, проконсультируйтесь с педиатром.',
      relatedLinks: [
        {
          text: 'Предсказатель роста ребёнка (бесплатно)',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Как предсказать взрослый рост ребёнка — полное руководство',
          href: '/articles/predict-your-childs-adult-height/',
        },
        {
          text: 'Что означает процентиль роста',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
  },
};
