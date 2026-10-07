import type { ScheduledArticle } from '../types';

export const scheduled: ScheduledArticle = {
  publishDate: '2026-10-16',
  articles: {
    en: {
      id: 'short-stature',
      slug: 'short-stature-when-to-see-pediatrician',
      title: 'Short Stature in Children: When to Talk to Your Pediatrician',
      subtitle: 'A practical checklist for worried parents: 5 observable signs that deserve a pediatrician’s opinion — and why most short children are perfectly healthy.',
      metaDescription: 'Short stature in children: what it means, 5 signs to watch for, how to track growth at home, and when to talk to your pediatrician.',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6 min read',
      badge: 'Guide for parents',
      tocTitle: 'In this article',
      intro: {
        lead: 'Talk to your pediatrician if your child is consistently below the 3rd percentile for height, is growing noticeably slower than before, is falling off their growth curve, or is much shorter than their genetic potential suggests. Most short children are completely healthy — but these signs deserve a professional opinion.',
        paragraphs: [
          'It is completely normal to worry when your child is the shortest in class. The reassuring truth first: the vast majority of short children are healthy — they are simply following their family’s growth pattern, or they are late bloomers who catch up during puberty.',
          'That said, growth is one of the best windows into a child’s overall health, and pediatricians take it seriously. This guide gives you a practical checklist of what to observe, how to track growth at home, and exactly when to bring it up with your pediatrician. It is guidance, not a diagnosis — only a doctor who examines your child can say what is going on.',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: 'What “short stature” actually means',
          paragraphs: [
            'Doctors use the term “short stature” as a screening label, not a diagnosis. It generally means a child’s height is below the 3rd percentile for their age and sex — in other words, shorter than about 97 out of 100 children the same age.',
            'A few important nuances parents often miss:',
          ],
          bulletPoints: [
            'The 3rd percentile is a statistical cutoff, not a verdict. A healthy child can sit at the 2nd percentile their whole life and be perfectly fine.',
            'What matters far more than the number is the pattern: a child who has always tracked along the 5th percentile is usually fine; a child who drops from the 50th to the 10th deserves a closer look.',
            'Family context matters enormously. A child of two short parents who is short themselves is usually just following genetics.',
          ],
          callout: {
            type: 'note',
            text: '“Short” is relative. The same height can be completely normal for one child and worth investigating in another — it depends on the growth curve, the parents’ heights, and the child’s overall health.',
          },
        },
        {
          id: 'signs-checklist',
          heading: '5 signs worth mentioning to your pediatrician',
          paragraphs: [
            'None of these signs alone means something is wrong — but each is a good reason to bring up growth at your child’s next checkup, or to book one sooner:',
          ],
          steps: [
            {
              number: 1,
              title: 'Growth has noticeably slowed down',
              description: 'Children grow fastest as babies, then settle into a steadier pace (roughly 5–6 cm per year in mid-childhood). If your child’s growth seems to have stalled for many months — clothes and shoes never need replacing — mention it.',
            },
            {
              number: 2,
              title: 'Falling off their growth curve',
              description: 'The single most meaningful signal. If your child used to track along the 40th percentile and is now at the 15th, that downward crossing of percentile lines is exactly what pediatricians look for.',
            },
            {
              number: 3,
              title: 'Much shorter than family height would predict',
              description: 'If both parents are tall but the child is very short — far below what the mid-parental height formula predicts — it is worth discussing. A big gap between expected and actual height can flag that something is interfering with growth.',
            },
            {
              number: 4,
              title: 'Delayed puberty signs (or very early ones)',
              description: 'No signs of puberty by age 14 in boys or 13 in girls, combined with short stature, is worth an evaluation. Conversely, very early puberty can also limit final height, because growth plates close sooner.',
            },
            {
              number: 5,
              title: 'Other symptoms alongside shortness',
              description: 'Short stature plus chronic tiredness, digestive problems, frequent illness, or delayed development milestones deserves prompt attention — growth can be affected by thyroid issues, celiac disease, anemia, and other treatable conditions.',
            },
          ],
          callout: {
            type: 'tip',
            text: 'Write down what you observe with dates before the appointment. “She grew only 2 cm in the last year” is far more useful to a doctor than “she seems short.”',
          },
        },
        {
          id: 'track-at-home',
          heading: 'How to track your child’s growth at home',
          paragraphs: [
            'You do not need to wait for the annual checkup to keep an eye on growth. Dated measurements, taken consistently, are genuinely useful — pediatricians love parents who bring them.',
          ],
          steps: [
            {
              number: 1,
              title: 'Measure every 6 months',
              description: 'More often than that, normal measurement error hides the real trend. Every 6 months is the sweet spot for spotting a pattern.',
            },
            {
              number: 2,
              title: 'Keep conditions identical',
              description: 'Same time of day (morning is best), barefoot, against a flat wall, heels together, looking straight ahead. Small inconsistencies create fake “slowdowns.”',
            },
            {
              number: 3,
              title: 'Plot it on a percentile chart',
              description: 'A single number means little; the curve means everything. Use a calculator based on real CDC/WHO reference data and save each result with its date:',
            },
          ],
          link: {
            text: '→ Check your child’s height percentile (free)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: 'What the pediatrician will actually do',
          paragraphs: [
            'Many parents avoid raising the topic because they fear bad news or unnecessary tests. In reality, the first visit is usually reassuring and straightforward:',
          ],
          bulletPoints: [
            'Review the growth history — this is why your dated measurements matter so much.',
            'Do a physical exam and review overall health, nutrition, and development.',
            'Compare the child’s height to the parents’ heights to estimate genetic potential.',
            'Only if something looks off: check bone age (a simple hand X-ray), and possibly blood tests for thyroid function, celiac disease, or growth hormone levels.',
          ],
          callout: {
            type: 'note',
            text: 'Most evaluations end with “everything looks fine, let’s recheck in 6 months.” That reassurance — based on data, not guessing — is exactly what the visit is for.',
          },
          link: {
            text: '→ Estimate your child’s adult height range',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'What is considered short stature in children?',
          answer: 'As a screening definition, height below the 3rd percentile for age and sex. But pediatricians care more about the growth pattern over time and the family context than about any single cutoff. A child who has always been near the 3rd percentile and is otherwise healthy is usually just short — not sick.',
        },
        {
          question: 'Can short stature be treated?',
          answer: 'It depends entirely on the cause — which is why an evaluation matters. Most short children need no treatment at all. When an underlying condition is found (such as hypothyroidism or celiac disease), treating that condition often restores normal growth. Growth hormone therapy exists but is reserved for specific diagnosed conditions, decided by a pediatric endocrinologist — never something to pursue on your own.',
        },
        {
          question: 'My child seems to have stopped growing. Should I worry?',
          answer: 'A true halt in growth over many months deserves a pediatrician’s opinion — bring dated measurements so the doctor can see the actual trend. That said, growth naturally slows before puberty, and brief plateaus are normal. The key question your pediatrician will ask is whether the overall curve is still on track.',
        },
        {
          question: 'Is my short child just a late bloomer?',
          answer: 'Often, yes — especially boys with a family history of late puberty (“constitutional delay”). These children grow at a normal rate but start puberty later, then catch up. A pediatrician can usually distinguish this pattern from something needing treatment by looking at the growth curve, bone age, and family history. When in doubt, ask.',
        },
      ],
      medicalDisclaimer: 'Educational content only — not medical advice and not a diagnosis. Growth concerns should always be evaluated by a pediatrician who examines your child. If you are worried about your child’s growth, talk to your pediatrician; do not wait, and do not try to diagnose or treat anything yourself.',
      relatedLinks: [
        {
          text: 'Boys’ height percentile',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Girls’ height percentile',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Child height predictor',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Height percentile explained',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    pt: {
      id: 'short-stature',
      slug: 'baixa-estatura-quando-procurar-pediatra',
      title: 'Baixa Estatura em Crianças: Quando Falar com o Pediatra',
      subtitle: 'Um checklist prático para pais preocupados: 5 sinais observáveis que merecem a opinião de um pediatra — e por que a maioria das crianças baixinhas é perfeitamente saudável.',
      metaDescription: 'Baixa estatura em crianças: o que significa, 5 sinais para observar, como acompanhar o crescimento em casa e quando falar com o pediatra.',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6 min de leitura',
      badge: 'Guia para pais',
      tocTitle: 'Neste artigo',
      intro: {
        lead: 'Fale com o pediatra se o seu filho estiver consistentemente abaixo do 3º percentil de altura, estiver crescendo visivelmente mais devagar do que antes, estiver saindo da sua curva de crescimento ou for muito mais baixo do que o potencial genético sugere. A maioria das crianças baixinhas é completamente saudável — mas esses sinais merecem uma opinião profissional.',
        paragraphs: [
          'É completamente normal se preocupar quando o seu filho é o mais baixo da turma. A notícia boa primeiro: a grande maioria das crianças baixinhas é saudável — elas estão apenas seguindo o padrão de crescimento da família, ou são aquelas que florescem mais tarde e alcançam os colegas na puberdade.',
          'Dito isso, o crescimento é uma das melhores janelas para a saúde geral da criança, e os pediatras levam isso a sério. Este guia traz um checklist prático do que observar, como acompanhar o crescimento em casa e exatamente quando levar o assunto ao pediatra. É uma orientação, não um diagnóstico — só um médico que examine o seu filho pode dizer o que está acontecendo.',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: 'O que “baixa estatura” realmente significa',
          paragraphs: [
            'Os médicos usam o termo “baixa estatura” como um rótulo de triagem, não como um diagnóstico. Em geral, significa que a altura da criança está abaixo do 3º percentil para a idade e o sexo — ou seja, mais baixa do que cerca de 97 em cada 100 crianças da mesma idade.',
            'Algumas nuances importantes que muitos pais não percebem:',
          ],
          bulletPoints: [
            'O 3º percentil é um ponto de corte estatístico, não uma sentença. Uma criança saudável pode ficar no 2º percentil a vida inteira e estar perfeitamente bem.',
            'O que importa muito mais do que o número é o padrão: uma criança que sempre acompanhou o 5º percentil geralmente está bem; uma criança que cai do 50º para o 10º merece um olhar mais atento.',
            'O contexto familiar importa enormemente. Um filho de dois pais baixos que também é baixo geralmente está apenas seguindo a genética.',
          ],
          callout: {
            type: 'note',
            text: '“Baixo” é relativo. A mesma altura pode ser completamente normal para uma criança e merecer investigação em outra — depende da curva de crescimento, da altura dos pais e da saúde geral da criança.',
          },
        },
        {
          id: 'signs-checklist',
          heading: '5 sinais que valem uma conversa com o pediatra',
          paragraphs: [
            'Nenhum desses sinais sozinho significa que algo está errado — mas cada um é um bom motivo para falar sobre crescimento na próxima consulta do seu filho, ou para adiantar uma:',
          ],
          steps: [
            {
              number: 1,
              title: 'O crescimento desacelerou visivelmente',
              description: 'As crianças crescem mais rápido quando bebês e depois entram num ritmo mais estável (cerca de 5–6 cm por ano no meio da infância). Se o crescimento do seu filho parece ter parado por muitos meses — roupas e sapatos nunca precisam ser trocados — mencione isso.',
            },
            {
              number: 2,
              title: 'Está saindo da curva de crescimento',
              description: 'O sinal mais significativo de todos. Se o seu filho costumava acompanhar o 40º percentil e agora está no 15º, essa queda cruzando as linhas de percentil é exatamente o que os pediatras procuram.',
            },
            {
              number: 3,
              title: 'Muito mais baixo do que a altura da família faria prever',
              description: 'Se os dois pais são altos, mas a criança é muito baixa — bem abaixo do que a fórmula da altura alvo parental prevê — vale a pena conversar. Uma grande diferença entre o esperado e o real pode indicar que algo está interferindo no crescimento.',
            },
            {
              number: 4,
              title: 'Sinais de puberdade atrasados (ou muito precoces)',
              description: 'Nenhum sinal de puberdade até os 14 anos nos meninos ou 13 nas meninas, combinado com baixa estatura, merece uma avaliação. Por outro lado, a puberdade muito precoce também pode limitar a altura final, porque as placas de crescimento se fecham mais cedo.',
            },
            {
              number: 5,
              title: 'Outros sintomas junto com a baixa estatura',
              description: 'Baixa estatura acompanhada de cansaço crônico, problemas digestivos, doenças frequentes ou atraso nos marcos de desenvolvimento merece atenção rápida — o crescimento pode ser afetado por problemas de tireoide, doença celíaca, anemia e outras condições tratáveis.',
            },
          ],
          callout: {
            type: 'tip',
            text: 'Anote o que você observa com datas antes da consulta. “Ela cresceu só 2 cm no último ano” é muito mais útil para o médico do que “ela parece baixa”.',
          },
        },
        {
          id: 'track-at-home',
          heading: 'Como acompanhar o crescimento do seu filho em casa',
          paragraphs: [
            'Você não precisa esperar a consulta anual para ficar de olho no crescimento. Medições com data, feitas de forma consistente, são genuinamente úteis — pediatras adoram pais que levam esses registros.',
          ],
          steps: [
            {
              number: 1,
              title: 'Meça a cada 6 meses',
              description: 'Com mais frequência que isso, o erro normal de medição esconde a tendência real. A cada 6 meses é o intervalo ideal para perceber um padrão.',
            },
            {
              number: 2,
              title: 'Mantenha as condições idênticas',
              description: 'Mesmo horário do dia (de manhã é melhor), descalço, encostado numa parede plana, calcanhares juntos, olhando para frente. Pequenas inconsistências criam “desacelerações” falsas.',
            },
            {
              number: 3,
              title: 'Registre num gráfico de percentil',
              description: 'Um número isolado diz pouco; a curva diz tudo. Use uma calculadora baseada em dados reais de referência do CDC/OMS e salve cada resultado com a data:',
            },
          ],
          link: {
            text: '→ Verifique o percentil de altura do seu filho (grátis)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: 'O que o pediatra vai fazer na prática',
          paragraphs: [
            'Muitos pais evitam tocar no assunto por medo de más notícias ou exames desnecessários. Na realidade, a primeira consulta costuma ser tranquilizadora e simples:',
          ],
          bulletPoints: [
            'Revisar o histórico de crescimento — é por isso que as suas medições com data importam tanto.',
            'Fazer um exame físico e avaliar a saúde geral, a nutrição e o desenvolvimento.',
            'Comparar a altura da criança com a dos pais para estimar o potencial genético.',
            'Só se algo parecer fora do normal: verificar a idade óssea (um simples raio-X da mão) e, possivelmente, exames de sangue para função da tireoide, doença celíaca ou níveis de hormônio do crescimento.',
          ],
          callout: {
            type: 'note',
            text: 'A maioria das avaliações termina com “está tudo bem, vamos reavaliar em 6 meses”. Essa tranquilidade — baseada em dados, não em achismo — é exatamente para isso que serve a consulta.',
          },
          link: {
            text: '→ Estime a faixa de altura adulta do seu filho',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'O que é considerado baixa estatura em crianças?',
          answer: 'Como definição de triagem, altura abaixo do 3º percentil para a idade e o sexo. Mas os pediatras se importam mais com o padrão de crescimento ao longo do tempo e o contexto familiar do que com qualquer ponto de corte isolado. Uma criança que sempre ficou perto do 3º percentil e é saudável geralmente é apenas baixinha — não doente.',
        },
        {
          question: 'Baixa estatura tem tratamento?',
          answer: 'Depende inteiramente da causa — e é por isso que uma avaliação importa. A maioria das crianças baixinhas não precisa de nenhum tratamento. Quando uma condição de base é encontrada (como hipotireoidismo ou doença celíaca), tratar essa condição costuma restaurar o crescimento normal. A terapia com hormônio do crescimento existe, mas é reservada para condições específicas diagnosticadas, decidida por um endocrinologista pediátrico — nunca algo para buscar por conta própria.',
        },
        {
          question: 'Meu filho parece ter parado de crescer. Devo me preocupar?',
          answer: 'Uma parada real no crescimento por muitos meses merece a opinião de um pediatra — leve medições com data para que o médico veja a tendência real. Dito isso, o crescimento desacelera naturalmente antes da puberdade, e pausas breves são normais. A pergunta-chave que o pediatra fará é se a curva geral continua no rumo certo.',
        },
        {
          question: 'Meu filho baixo é só um caso de desenvolvimento tardio?',
          answer: 'Muitas vezes, sim — especialmente meninos com histórico familiar de puberdade tardia (“atraso constitucional”). Essas crianças crescem num ritmo normal, mas entram na puberdade mais tarde e depois alcançam os colegas. Um pediatra geralmente consegue distinguir esse padrão de algo que precise de tratamento olhando a curva de crescimento, a idade óssea e o histórico familiar. Na dúvida, pergunte.',
        },
      ],
      medicalDisclaimer: 'Conteúdo apenas educacional — não é orientação médica nem diagnóstico. Questões sobre o crescimento devem sempre ser avaliadas por um pediatra que examine o seu filho. Se você está preocupado com o crescimento do seu filho, fale com o pediatra; não espere, e não tente diagnosticar nem tratar nada por conta própria.',
      relatedLinks: [
        {
          text: 'Percentil de altura para meninos',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Percentil de altura para meninas',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Previsão da altura do seu filho',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Percentil de altura explicado',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    es: {
      id: 'short-stature',
      slug: 'baja-estatura-cuando-ver-pediatra',
      title: 'Baja estatura en niños: cuándo hablar con el pediatra',
      subtitle: 'Una lista práctica para padres preocupados: 5 señales observables que merecen la opinión de un pediatra — y por qué la mayoría de los niños bajos están perfectamente sanos.',
      metaDescription: 'Baja estatura en niños: qué significa, 5 señales a las que prestar atención, cómo seguir el crecimiento en casa y cuándo hablar con el pediatra.',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6 min de lectura',
      badge: 'Guía para padres',
      tocTitle: 'En este artículo',
      intro: {
        lead: 'Habla con tu pediatra si tu hijo está de forma constante por debajo del percentil 3 de estatura, crece notablemente más despacio que antes, se está saliendo de su curva de crecimiento o es mucho más bajo de lo que sugiere su potencial genético. La mayoría de los niños bajos están completamente sanos — pero estas señales merecen una opinión profesional.',
        paragraphs: [
          'Es completamente normal preocuparse cuando tu hijo es el más bajo de la clase. Lo tranquilizador primero: la gran mayoría de los niños bajos están sanos — simplemente siguen el patrón de crecimiento de su familia, o son de desarrollo tardío y recuperan el ritmo durante la pubertad.',
          'Dicho esto, el crecimiento es una de las mejores ventanas a la salud general de un niño, y los pediatras lo toman en serio. Esta guía te da una lista práctica de qué observar, cómo seguir el crecimiento en casa y exactamente cuándo comentarlo con tu pediatra. Es una orientación, no un diagnóstico — solo un médico que examine a tu hijo puede decir qué está pasando.',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: 'Qué significa realmente «baja estatura»',
          paragraphs: [
            'Los médicos usan el término «baja estatura» como etiqueta de cribado, no como diagnóstico. En general significa que la estatura del niño está por debajo del percentil 3 para su edad y sexo — es decir, más bajo que unos 97 de cada 100 niños de su misma edad.',
            'Algunos matices importantes que muchos padres pasan por alto:',
          ],
          bulletPoints: [
            'El percentil 3 es un límite estadístico, no un veredicto. Un niño sano puede estar en el percentil 2 toda su vida y estar perfectamente bien.',
            'Lo que importa mucho más que el número es el patrón: un niño que siempre ha seguido el percentil 5 suele estar bien; un niño que baja del percentil 50 al 10 merece una revisión más atenta.',
            'El contexto familiar importa muchísimo. Un niño de dos padres bajos que es bajo él mismo suele estar simplemente siguiendo la genética.',
          ],
          callout: {
            type: 'note',
            text: '«Bajo» es relativo. La misma estatura puede ser completamente normal en un niño y merecer una investigación en otro — depende de la curva de crecimiento, de la estatura de los padres y de la salud general del niño.',
          },
        },
        {
          id: 'signs-checklist',
          heading: '5 señales que conviene mencionar al pediatra',
          paragraphs: [
            'Ninguna de estas señales por sí sola significa que algo vaya mal — pero cada una es una buena razón para hablar del crecimiento en la próxima revisión de tu hijo, o para pedir cita antes:',
          ],
          steps: [
            {
              number: 1,
              title: 'El crecimiento se ha frenado notablemente',
              description: 'Los niños crecen más rápido de bebés y luego se estabilizan en un ritmo más constante (unos 5–6 cm al año en la infancia media). Si el crecimiento de tu hijo parece haberse detenido durante muchos meses — la ropa y los zapatos nunca hay que cambiarlos de talla — menciónalo.',
            },
            {
              number: 2,
              title: 'Se está saliendo de su curva de crecimiento',
              description: 'La señal más significativa. Si tu hijo solía seguir el percentil 40 y ahora está en el 15, ese cruce descendente de las líneas de percentil es exactamente lo que buscan los pediatras.',
            },
            {
              number: 3,
              title: 'Mucho más bajo de lo que predeciría la estatura familiar',
              description: 'Si ambos padres son altos pero el niño es muy bajo — muy por debajo de lo que predice la fórmula de la estatura media parental — conviene comentarlo. Una gran diferencia entre la estatura esperada y la real puede indicar que algo está interfiriendo con el crecimiento.',
            },
            {
              number: 4,
              title: 'Pubertad retrasada (o muy temprana)',
              description: 'Sin señales de pubertad a los 14 años en niños o a los 13 en niñas, combinado con baja estatura, merece una evaluación. Por el contrario, una pubertad muy temprana también puede limitar la estatura final, porque las placas de crecimiento se cierran antes.',
            },
            {
              number: 5,
              title: 'Otros síntomas además de la baja estatura',
              description: 'Baja estatura más cansancio crónico, problemas digestivos, enfermedades frecuentes o retraso en los hitos del desarrollo merece atención pronta — el crecimiento puede verse afectado por problemas de tiroides, enfermedad celíaca, anemia y otras afecciones tratables.',
            },
          ],
          callout: {
            type: 'tip',
            text: 'Anota lo que observes con fechas antes de la cita. «Solo creció 2 cm en el último año» es mucho más útil para un médico que «me parece bajo».',
          },
        },
        {
          id: 'track-at-home',
          heading: 'Cómo seguir el crecimiento de tu hijo en casa',
          paragraphs: [
            'No tienes que esperar a la revisión anual para vigilar el crecimiento. Las mediciones con fecha, tomadas de forma consistente, son realmente útiles — a los pediatras les encanta que los padres las lleven.',
          ],
          steps: [
            {
              number: 1,
              title: 'Mide cada 6 meses',
              description: 'Con más frecuencia, el error normal de medición oculta la tendencia real. Cada 6 meses es el punto ideal para detectar un patrón.',
            },
            {
              number: 2,
              title: 'Mantén las condiciones idénticas',
              description: 'Misma hora del día (por la mañana es mejor), descalzo, contra una pared plana, talones juntos, mirando al frente. Las pequeñas inconsistencias crean «frenazos» falsos.',
            },
            {
              number: 3,
              title: 'Plótalo en una tabla de percentiles',
              description: 'Un solo número dice poco; la curva lo dice todo. Usa una calculadora basada en datos de referencia reales de los CDC/OMS y guarda cada resultado con su fecha:',
            },
          ],
          link: {
            text: '→ Consulta el percentil de estatura de tu hijo (gratis)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: 'Qué hará realmente el pediatra',
          paragraphs: [
            'Muchos padres evitan sacar el tema porque temen malas noticias o pruebas innecesarias. En realidad, la primera visita suele ser tranquilizadora y sencilla:',
          ],
          bulletPoints: [
            'Revisará el historial de crecimiento — por eso tus mediciones con fecha importan tanto.',
            'Hará un examen físico y revisará la salud general, la nutrición y el desarrollo.',
            'Comparará la estatura del niño con la de los padres para estimar el potencial genético.',
            'Solo si algo no cuadra: comprobará la edad ósea (una simple radiografía de la mano) y posiblemente análisis de sangre para la función tiroidea, enfermedad celíaca o niveles de hormona del crecimiento.',
          ],
          callout: {
            type: 'note',
            text: 'La mayoría de las evaluaciones terminan con un «todo se ve bien, revisemos en 6 meses». Esa tranquilidad — basada en datos, no en suposiciones — es exactamente para lo que sirve la visita.',
          },
          link: {
            text: '→ Estima el rango de estatura adulta de tu hijo',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: '¿Qué se considera baja estatura en niños?',
          answer: 'Como definición de cribado, una estatura por debajo del percentil 3 para la edad y el sexo. Pero a los pediatras les importa más el patrón de crecimiento a lo largo del tiempo y el contexto familiar que cualquier límite concreto. Un niño que siempre ha estado cerca del percentil 3 y por lo demás está sano suele ser simplemente bajo — no enfermo.',
        },
        {
          question: '¿La baja estatura tiene tratamiento?',
          answer: 'Depende por completo de la causa — por eso importa la evaluación. La mayoría de los niños bajos no necesitan ningún tratamiento. Cuando se encuentra una afección subyacente (como hipotiroidismo o enfermedad celíaca), tratarla suele restaurar el crecimiento normal. La terapia con hormona del crecimiento existe, pero está reservada a afecciones diagnosticadas específicas, decidida por un endocrinólogo pediátrico — nunca algo que buscar por tu cuenta.',
        },
        {
          question: 'Mi hijo parece haber dejado de crecer. ¿Debo preocuparme?',
          answer: 'Una detención real del crecimiento durante muchos meses merece la opinión de un pediatra — lleva mediciones con fecha para que el médico pueda ver la tendencia real. Dicho esto, el crecimiento se frena de forma natural antes de la pubertad y las pausas breves son normales. La pregunta clave que te hará tu pediatra es si la curva general sigue en su rumbo.',
        },
        {
          question: '¿Mi hijo bajo es simplemente de desarrollo tardío?',
          answer: 'A menudo, sí — sobre todo los niños con antecedentes familiares de pubertad tardía («retraso constitucional»). Estos niños crecen a un ritmo normal pero empiezan la pubertad más tarde, y luego recuperan el terreno. Un pediatra suele distinguir este patrón de algo que requiera tratamiento mirando la curva de crecimiento, la edad ósea y los antecedentes familiares. Ante la duda, pregunta.',
        },
      ],
      medicalDisclaimer: 'Contenido educativo únicamente — no es consejo médico ni un diagnóstico. Las preocupaciones sobre el crecimiento siempre deben ser evaluadas por un pediatra que examine a tu hijo. Si te preocupa el crecimiento de tu hijo, habla con tu pediatra; no esperes y no intentes diagnosticar ni tratar nada por tu cuenta.',
      relatedLinks: [
        {
          text: 'Percentil de estatura en niños',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Percentil de estatura en niñas',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Predictor de estatura infantil',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Percentil de estatura explicado',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    fr: {
      id: 'short-stature',
      slug: 'petite-taille-quand-voir-pediatre',
      title: 'Petite Taille chez l’Enfant : Quand Voir le Pédiatre',
      subtitle: 'Une liste de vérification pratique pour les parents inquiets : 5 signes observables qui méritent l’avis d’un pédiatre — et pourquoi la plupart des enfants petits sont en parfaite santé.',
      metaDescription: 'Petite taille chez l’enfant : ce que cela signifie, 5 signes à surveiller, comment suivre la croissance à la maison, et quand parler à votre pédiatre.',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6 min de lecture',
      badge: 'Guide pour les parents',
      tocTitle: 'Dans cet article',
      intro: {
        lead: 'Consultez votre pédiatre si votre enfant se situe durablement sous le 3e percentile de taille, grandit nettement moins vite qu’avant, décroche de sa courbe de croissance, ou est beaucoup plus petit que ne le laisserait présager son potentiel génétique. La plupart des enfants petits sont en parfaite santé — mais ces signes méritent un avis professionnel.',
        paragraphs: [
          'Il est tout à fait normal de s’inquiéter quand votre enfant est le plus petit de la classe. La bonne nouvelle d’abord : la grande majorité des enfants petits sont en bonne santé — ils suivent simplement le schéma de croissance de leur famille, ou ce sont des « retardataires » qui rattrapent leur retard à la puberté.',
          'Cela dit, la croissance est l’une des meilleures fenêtres sur la santé globale d’un enfant, et les pédiatres la prennent très au sérieux. Ce guide vous donne une liste de vérification pratique : quoi observer, comment suivre la croissance à la maison, et quand exactement en parler à votre pédiatre. Ce sont des conseils, pas un diagnostic — seul un médecin qui examine votre enfant peut dire ce qu’il en est.',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: 'Ce que signifie vraiment « petite taille »',
          paragraphs: [
            'Les médecins utilisent le terme « petite taille » comme une étiquette de dépistage, pas comme un diagnostic. Cela signifie généralement que la taille de l’enfant se situe sous le 3e percentile pour son âge et son sexe — autrement dit, plus petit qu’environ 97 enfants sur 100 du même âge.',
            'Quelques nuances importantes que les parents oublient souvent :',
          ],
          bulletPoints: [
            'Le 3e percentile est un seuil statistique, pas un verdict. Un enfant en bonne santé peut rester au 2e percentile toute sa vie et aller parfaitement bien.',
            'Ce qui compte bien plus que le chiffre, c’est la trajectoire : un enfant qui a toujours suivi le 5e percentile va généralement bien ; un enfant qui chute du 50e au 10e mérite un examen plus attentif.',
            'Le contexte familial compte énormément. Un enfant de deux parents petits qui est lui-même petit suit généralement sa génétique, tout simplement.',
          ],
          callout: {
            type: 'note',
            text: '« Petit » est relatif. Une même taille peut être tout à fait normale pour un enfant et justifier un bilan pour un autre — tout dépend de la courbe de croissance, de la taille des parents et de l’état de santé général de l’enfant.',
          },
        },
        {
          id: 'signs-checklist',
          heading: '5 signes à mentionner à votre pédiatre',
          paragraphs: [
            'Aucun de ces signes pris isolément ne signifie que quelque chose ne va pas — mais chacun est une bonne raison d’aborder la croissance lors de la prochaine visite de contrôle, ou d’en avancer une :',
          ],
          steps: [
            {
              number: 1,
              title: 'La croissance a nettement ralenti',
              description: 'Les enfants grandissent très vite bébés, puis adoptent un rythme plus régulier (environ 5 à 6 cm par an en milieu d’enfance). Si la croissance de votre enfant semble à l’arrêt depuis plusieurs mois — les vêtements et les chaussures n’ont jamais besoin d’être remplacés — mentionnez-le.',
            },
            {
              number: 2,
              title: 'Il décroche de sa courbe de croissance',
              description: 'Le signal le plus significatif. Si votre enfant suivait le 40e percentile et se retrouve au 15e, ce franchissement des lignes de percentile vers le bas est exactement ce que les pédiatres recherchent.',
            },
            {
              number: 3,
              title: 'Beaucoup plus petit que ne le prédit la taille familiale',
              description: 'Si les deux parents sont grands mais que l’enfant est très petit — bien en dessous de ce que prédit la formule de la taille cible génétique — cela vaut la peine d’en discuter. Un écart important entre la taille attendue et la taille réelle peut signaler que quelque chose freine la croissance.',
            },
            {
              number: 4,
              title: 'Puberté tardive (ou au contraire très précoce)',
              description: 'L’absence de signes de puberté à 14 ans chez les garçons ou 13 ans chez les filles, combinée à une petite taille, justifie un bilan. À l’inverse, une puberté très précoce peut aussi limiter la taille finale, car les cartilages de croissance se ferment plus tôt.',
            },
            {
              number: 5,
              title: 'D’autres symptômes accompagnent la petite taille',
              description: 'Une petite taille associée à une fatigue chronique, des troubles digestifs, des maladies fréquentes ou un retard des étapes du développement mérite une attention rapide — la croissance peut être affectée par des problèmes de thyroïde, la maladie cœliaque, l’anémie et d’autres affections traitables.',
            },
          ],
          callout: {
            type: 'tip',
            text: 'Notez ce que vous observez avec les dates avant le rendez-vous. « Elle n’a grandi que de 2 cm cette année » est bien plus utile pour un médecin que « elle me semble petite ».',
          },
        },
        {
          id: 'track-at-home',
          heading: 'Comment suivre la croissance de votre enfant à la maison',
          paragraphs: [
            'Inutile d’attendre la visite annuelle pour surveiller la croissance. Des mesures datées, prises de façon régulière, sont réellement utiles — les pédiatres adorent les parents qui les apportent.',
          ],
          steps: [
            {
              number: 1,
              title: 'Mesurez tous les 6 mois',
              description: 'Plus souvent, l’erreur de mesure normale masque la vraie tendance. Tous les 6 mois, c’est le bon rythme pour repérer un schéma.',
            },
            {
              number: 2,
              title: 'Gardez des conditions identiques',
              description: 'Toujours à la même heure (le matin, c’est le mieux), pieds nus, contre un mur plat, talons joints, regard droit devant. De petites variations créent de faux « ralentissements ».',
            },
            {
              number: 3,
              title: 'Reportez les mesures sur une courbe de percentiles',
              description: 'Un chiffre isolé veut dire peu ; la courbe veut dire tout. Utilisez un calculateur basé sur de vraies données de référence CDC/OMS et enregistrez chaque résultat avec sa date :',
            },
          ],
          link: {
            text: '→ Vérifiez le percentile de taille de votre enfant (gratuit)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: 'Ce que le pédiatre va réellement faire',
          paragraphs: [
            'Beaucoup de parents n’osent pas aborder le sujet par crainte d’une mauvaise nouvelle ou d’examens inutiles. En réalité, la première consultation est généralement rassurante et simple :',
          ],
          bulletPoints: [
            'Revoir l’historique de croissance — c’est pourquoi vos mesures datées comptent tant.',
            'Faire un examen clinique et passer en revue la santé globale, la nutrition et le développement.',
            'Comparer la taille de l’enfant à celles des parents pour estimer le potentiel génétique.',
            'Seulement si quelque chose semble anormal : vérifier l’âge osseux (une simple radiographie de la main), et éventuellement des analyses de sang pour la fonction thyroïdienne, la maladie cœliaque ou les taux d’hormone de croissance.',
          ],
          callout: {
            type: 'note',
            text: 'La plupart des bilans se terminent par « tout semble normal, on recontrôle dans 6 mois ». Cette réassurance — fondée sur des données, pas sur des suppositions — est exactement le but de la visite.',
          },
          link: {
            text: '→ Estimez la fourchette de taille adulte de votre enfant',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'Qu’est-ce qu’on considère comme une petite taille chez l’enfant ?',
          answer: 'Par définition de dépistage, une taille sous le 3e percentile pour l’âge et le sexe. Mais les pédiatres s’intéressent davantage à l’évolution de la croissance dans le temps et au contexte familial qu’à un seuil unique. Un enfant qui a toujours été proche du 3e percentile et qui est par ailleurs en bonne santé est généralement juste petit — pas malade.',
        },
        {
          question: 'La petite taille peut-elle se traiter ?',
          answer: 'Tout dépend de la cause — c’est pourquoi un bilan est important. La plupart des enfants petits n’ont besoin d’aucun traitement. Quand une affection sous-jacente est découverte (comme l’hypothyroïdie ou la maladie cœliaque), la traiter restaure souvent une croissance normale. Le traitement par hormone de croissance existe mais est réservé à des affections diagnostiquées précises, décidé par un endocrinologue pédiatre — jamais quelque chose à envisager seul.',
        },
        {
          question: 'Mon enfant semble avoir arrêté de grandir. Dois-je m’inquiéter ?',
          answer: 'Un véritable arrêt de la croissance sur plusieurs mois mérite l’avis d’un pédiatre — apportez des mesures datées pour que le médecin visualise la vraie tendance. Cela dit, la croissance ralentit naturellement avant la puberté, et de brefs plateaux sont normaux. La question clé que posera votre pédiatre : la courbe globale reste-t-elle sur sa trajectoire ?',
        },
        {
          question: 'Mon enfant petit est-il simplement un « retardataire » ?',
          answer: 'Souvent, oui — surtout les garçons avec des antécédents familiaux de puberté tardive (« retard constitutionnel »). Ces enfants grandissent à un rythme normal mais entrent en puberté plus tard, puis rattrapent leur retard. Un pédiatre distingue généralement ce schéma d’un problème nécessitant un traitement en examinant la courbe de croissance, l’âge osseux et les antécédents familiaux. En cas de doute, posez la question.',
        },
      ],
      medicalDisclaimer: 'Contenu éducatif uniquement — ni avis médical, ni diagnostic. Toute inquiétude concernant la croissance doit toujours être évaluée par un pédiatre qui examine votre enfant. Si la croissance de votre enfant vous préoccupe, parlez-en à votre pédiatre ; n’attendez pas, et n’essayez ni de diagnostiquer ni de traiter quoi que ce soit vous-même.',
      relatedLinks: [
        {
          text: 'Percentile de taille des garçons',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Percentile de taille des filles',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Prédicteur de taille de l’enfant',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Le percentile de taille expliqué',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    de: {
      id: 'short-stature',
      slug: 'kleinwuchs-wann-zum-kinderarzt',
      title: 'Kleinwuchs bei Kindern: Wann Sie mit dem Kinderarzt sprechen sollten',
      subtitle: 'Eine praktische Checkliste für besorgte Eltern: 5 sichtbare Anzeichen, die ein Gespräch mit dem Kinderarzt verdienen — und warum die meisten kleinen Kinder völlig gesund sind.',
      metaDescription: 'Kleinwuchs bei Kindern: Was es bedeutet, 5 Warnzeichen, Wachstum zu Hause messen und wann der Weg zum Kinderarzt fällig ist.',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6 Min. Lesezeit',
      badge: 'Ratgeber für Eltern',
      tocTitle: 'In diesem Artikel',
      intro: {
        lead: 'Sprechen Sie mit Ihrem Kinderarzt, wenn Ihr Kind dauerhaft unter der 3. Perzentile für seine Größe liegt, deutlich langsamer wächst als zuvor, aus seiner Wachstumskurve herausfällt oder viel kleiner ist, als es seine Veranlagung erwarten ließe. Die meisten kleinen Kinder sind völlig gesund — doch diese Anzeichen verdienen eine fachliche Meinung.',
        paragraphs: [
          'Es ist ganz normal, sich Sorgen zu machen, wenn das eigene Kind das kleinste in der Klasse ist. Doch vorweg die beruhigende Wahrheit: Die überwältigende Mehrheit kleiner Kinder ist gesund — sie folgt einfach dem Wachstumsmuster der Familie oder sie sind Spätentwickler, die in der Pubertät aufholen.',
          'Gleichzeitig ist das Wachstum eines der besten Fenster zur Gesundheit eines Kindes, und Kinderärzte nehmen es ernst. Diese Anleitung gibt Ihnen eine praktische Checkliste: worauf Sie achten sollten, wie Sie das Wachstum zu Hause verfolgen und wann Sie es beim Kinderarzt ansprechen. Sie ist eine Orientierung, keine Diagnose — nur ein Arzt, der Ihr Kind untersucht, kann sagen, was wirklich los ist.',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: 'Was „Kleinwuchs“ eigentlich bedeutet',
          paragraphs: [
            'Ärzte verwenden den Begriff „Kleinwuchs“ als Screening-Begriff, nicht als Diagnose. Er bedeutet im Allgemeinen: Die Körpergröße eines Kindes liegt unter der 3. Perzentile für sein Alter und Geschlecht — also kleiner als etwa 97 von 100 gleichaltrigen Kindern.',
            'Ein paar wichtige Feinheiten, die Eltern oft übersehen:',
          ],
          bulletPoints: [
            'Die 3. Perzentile ist ein statistischer Grenzwert, kein Urteil. Ein gesundes Kind kann sein Leben lang auf der 2. Perzentile liegen und völlig gesund sein.',
            'Viel wichtiger als die Zahl ist das Muster: Ein Kind, das schon immer auf der 5. Perzentile lag, ist in der Regel unauffällig; ein Kind, das von der 50. auf die 10. Perzentile abrutscht, verdient einen genaueren Blick.',
            'Der familiäre Hintergrund zählt enorm. Ein Kind zweier kleiner Eltern, das selbst klein ist, folgt meist einfach der Genetik.',
          ],
          callout: {
            type: 'note',
            text: '„Klein“ ist relativ. Dieselbe Körpergröße kann bei einem Kind völlig normal und bei einem anderen abklärungsbedürftig sein — es kommt auf die Wachstumskurve, die Größe der Eltern und die allgemeine Gesundheit des Kindes an.',
          },
        },
        {
          id: 'signs-checklist',
          heading: '5 Anzeichen, die Sie beim Kinderarzt ansprechen sollten',
          paragraphs: [
            'Keines dieser Anzeichen allein bedeutet, dass etwas nicht stimmt — aber jedes ist ein guter Grund, das Wachstum beim nächsten Vorsorgetermin anzusprechen oder einen Termin vorzuziehen:',
          ],
          steps: [
            {
              number: 1,
              title: 'Das Wachstum hat sich spürbar verlangsamt',
              description: 'Kinder wachsen als Babys am schnellsten und pendeln sich dann auf ein gleichmäßigeres Tempo ein (etwa 5–6 cm pro Jahr im mittleren Kindesalter). Wenn das Wachstum Ihres Kindes über viele Monate scheinbar stehengeblieben ist — Kleidung und Schuhe müssen nie ersetzt werden — sprechen Sie es an.',
            },
            {
              number: 2,
              title: 'Es fällt aus seiner Wachstumskurve heraus',
              description: 'Das aussagekräftigste Signal überhaupt. Wenn Ihr Kind früher auf der 40. Perzentile lag und jetzt auf der 15. ist, dann ist genau dieses Abwärtskreuzen der Perzentillinien das, worauf Kinderärzte achten.',
            },
            {
              number: 3,
              title: 'Viel kleiner, als es die Familiengröße erwarten ließe',
              description: 'Wenn beide Eltern groß sind, das Kind aber sehr klein ist — weit unter dem, was die Mittelwert-Formel der Elterngröße vorhersagt — lohnt sich ein Gespräch. Eine große Lücke zwischen erwarteter und tatsächlicher Größe kann darauf hindeuten, dass etwas das Wachstum bremst.',
            },
            {
              number: 4,
              title: 'Verzögerte Pubertätsanzeichen (oder sehr frühe)',
              description: 'Keine Anzeichen der Pubertät bis zum Alter von 14 bei Jungen oder 13 bei Mädchen, in Kombination mit Kleinwuchs, verdient eine Abklärung. Umgekehrt kann eine sehr frühe Pubertät die endgültige Größe begrenzen, weil sich die Wachstumsfugen früher schließen.',
            },
            {
              number: 5,
              title: 'Weitere Symptome neben der Kleinheit',
              description: 'Kleinwuchs plus chronische Müdigkeit, Verdauungsprobleme, häufige Krankheiten oder verzögerte Entwicklungsmeilensteine verdient rasche Aufmerksamkeit — das Wachstum kann durch Schilddrüsenprobleme, Zöliakie, Blutarmut und andere behandelbare Erkrankungen beeinträchtigt sein.',
            },
          ],
          callout: {
            type: 'tip',
            text: 'Schreiben Sie vor dem Termin mit Datum auf, was Sie beobachten. „Sie ist im letzten Jahr nur 2 cm gewachsen“ ist für einen Arzt weit hilfreicher als „sie wirkt klein.“',
          },
        },
        {
          id: 'track-at-home',
          heading: 'So verfolgen Sie das Wachstum Ihres Kindes zu Hause',
          paragraphs: [
            'Sie müssen nicht bis zur jährlichen Vorsorgeuntersuchung warten, um das Wachstum im Blick zu behalten. Datierte Messungen, konsequent durchgeführt, sind wirklich nützlich — Kinderärzte freuen sich über Eltern, die sie mitbringen.',
          ],
          steps: [
            {
              number: 1,
              title: 'Alle 6 Monate messen',
              description: 'Häufiger als das verdeckt der normale Messfehler den echten Trend. Alle 6 Monate ist der ideale Rhythmus, um ein Muster zu erkennen.',
            },
            {
              number: 2,
              title: 'Bedingungen immer gleich halten',
              description: 'Gleiche Tageszeit (morgens ist am besten), barfuß, an einer geraden Wand, Fersen zusammen, geradeaus schauen. Kleine Unstimmigkeiten erzeugen falsche „Wachstumsstopps“.',
            },
            {
              number: 3,
              title: 'In eine Perzentilkurve eintragen',
              description: 'Eine einzelne Zahl sagt wenig; die Kurve sagt alles. Nutzen Sie einen Rechner auf Basis echter CDC/WHO-Referenzdaten und speichern Sie jedes Ergebnis mit Datum:',
            },
          ],
          link: {
            text: '→ Größenperzentil Ihres Kindes prüfen (kostenlos)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: 'Was der Kinderarzt tatsächlich tut',
          paragraphs: [
            'Viele Eltern scheuen das Thema aus Angst vor schlechten Nachrichten oder unnötigen Tests. In Wirklichkeit ist der erste Besuch meist beruhigend und unkompliziert:',
          ],
          bulletPoints: [
            'Die Wachstumshistorie durchgehen — deshalb sind Ihre datierten Messungen so wertvoll.',
            'Eine körperliche Untersuchung sowie die Prüfung von Allgemeingesundheit, Ernährung und Entwicklung.',
            'Die Größe des Kindes mit der Größe der Eltern vergleichen, um das genetische Potenzial einzuschätzen.',
            'Nur wenn etwas auffällig wirkt: das Knochenalter bestimmen (ein einfaches Röntgen der Hand) und eventuell Bluttests auf Schilddrüsenfunktion, Zöliakie oder Wachstumshormonwerte.',
          ],
          callout: {
            type: 'note',
            text: 'Die meisten Abklärungen enden mit „alles sieht gut aus, kontrollieren wir in 6 Monaten erneut.“ Genau diese Beruhigung — auf Daten gestützt, nicht geraten — ist der Sinn des Besuchs.',
          },
          link: {
            text: '→ Endgrößenbereich Ihres Kindes schätzen',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'Was gilt bei Kindern als Kleinwuchs?',
          answer: 'Als Screening-Definition: eine Körpergröße unter der 3. Perzentile für Alter und Geschlecht. Doch Kinderärzte interessiert das Wachstumsmuster über die Zeit und der familiäre Hintergrund mehr als jeder einzelne Grenzwert. Ein Kind, das schon immer in der Nähe der 3. Perzentile lag und sonst gesund ist, ist meist einfach klein — nicht krank.',
        },
        {
          question: 'Kann Kleinwuchs behandelt werden?',
          answer: 'Das hängt ganz von der Ursache ab — deshalb ist eine Abklärung so wichtig. Die meisten kleinen Kinder brauchen gar keine Behandlung. Wird eine zugrunde liegende Erkrankung gefunden (etwa eine Schilddrüsenunterfunktion oder Zöliakie), stellt die Behandlung dieser Erkrankung oft das normale Wachstum wieder her. Eine Wachstumshormontherapie gibt es, aber sie ist bestimmten diagnostizierten Erkrankungen vorbehalten und wird vom Kinderendokrinologen entschieden — niemals etwas, das man auf eigene Faust verfolgt.',
        },
        {
          question: 'Mein Kind scheint nicht mehr zu wachsen. Muss ich mir Sorgen machen?',
          answer: 'Ein echter Wachstumsstillstand über viele Monate verdient die Meinung eines Kinderarztes — bringen Sie datierte Messungen mit, damit der Arzt den tatsächlichen Trend sehen kann. Allerdings verlangsamt sich das Wachstum vor der Pubertät natürlicherweise, und kurze Plateaus sind normal. Die entscheidende Frage Ihres Kinderarztes wird sein, ob die Gesamtkurve noch auf Kurs ist.',
        },
        {
          question: 'Ist mein kleines Kind einfach ein Spätentwickler?',
          answer: 'Oft ja — besonders Jungen mit spätreifer Pubertät in der Familie („konstitutionelle Entwicklungsverzögerung“). Diese Kinder wachsen in normalem Tempo, kommen aber später in die Pubertät und holen dann auf. Ein Kinderarzt kann dieses Muster anhand von Wachstumskurve, Knochenalter und Familiengeschichte meist von behandlungsbedürftigen Ursachen unterscheiden. Im Zweifel: nachfragen.',
        },
      ],
      medicalDisclaimer: 'Nur zu Bildungszwecken — kein medizinischer Rat und keine Diagnose. Wachstumsbedenken sollten immer von einem Kinderarzt abgeklärt werden, der Ihr Kind untersucht. Wenn Sie sich Sorgen um das Wachstum Ihres Kindes machen, sprechen Sie mit Ihrem Kinderarzt; warten Sie nicht ab und versuchen Sie nicht, selbst etwas zu diagnostizieren oder zu behandeln.',
      relatedLinks: [
        {
          text: 'Größenperzentil für Jungen',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Größenperzentil für Mädchen',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Vorhersage der Erwachsenengröße',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Größenperzentil erklärt',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    hi: {
      id: 'short-stature',
      slug: 'bachche-ki-kam-lambai-kab-doctor-ko-dikhaye',
      title: 'बच्चों में छोटा कद: बाल रोग विशेषज्ञ से कब बात करें',
      subtitle: 'चिंतित माता-पिता के लिए व्यावहारिक चेकलिस्ट: 5 देखे जा सकने वाले संकेत जिन पर डॉक्टर की राय ज़रूरी है — और ज़्यादातर छोटे कद वाले बच्चे पूरी तरह स्वस्थ क्यों होते हैं।',
      metaDescription: 'बच्चों में छोटा कद: इसका मतलब क्या है, किन 5 संकेतों पर नज़र रखें, घर पर लंबाई कैसे नापें, और बाल रोग विशेषज्ञ से कब बात करें।',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6 मिनट में पढ़ें',
      badge: 'माता-पिता के लिए गाइड',
      tocTitle: 'इस लेख में',
      intro: {
        lead: 'अगर आपका बच्चा लगातार अपनी उम्र और लिंग के हिसाब से तीसरे परसेंटाइल से नीचे है, पहले से धीमी गति से बढ़ रहा है, अपनी ग्रोथ कर्व से नीचे गिर रहा है, या अपनी आनुवंशिक क्षमता से बहुत छोटा है, तो बाल रोग विशेषज्ञ से बात करें। ज़्यादातर छोटे कद वाले बच्चे पूरी तरह स्वस्थ होते हैं — लेकिन इन संकेतों पर डॉक्टर की राय ज़रूरी है।',
        paragraphs: [
          'जब आपका बच्चा क्लास में सबसे छोटा हो तो चिंता होना बिल्कुल स्वाभाविक है। पहले राहत की बात: छोटे कद वाले ज़्यादातर बच्चे स्वस्थ होते हैं — वे बस अपने परिवार के ग्रोथ पैटर्न का पालन कर रहे होते हैं, या देर से बढ़ने वाले बच्चे होते हैं जो प्यूबर्टी के दौरान पकड़ बना लेते हैं।',
          'हालांकि, लंबाई बच्चे के समग्र स्वास्थ्य को समझने का सबसे अच्छा ज़रिया है, और बाल रोग विशेषज्ञ इसे गंभीरता से लेते हैं। यह गाइड आपको बताता है कि क्या देखें, घर पर लंबाई कैसे नापें, और बाल रोग विशेषज्ञ से कब बात करें। यह मार्गदर्शन है, निदान नहीं — केवल वह डॉक्टर जो आपके बच्चे की जांच करता है, बता सकता है कि असल में क्या चल रहा है।',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: '“छोटा कद” का असल मतलब क्या है',
          paragraphs: [
            'डॉक्टर “छोटा कद” शब्द का इस्तेमाल एक स्क्रीनिंग लेबल के तौर पर करते हैं, निदान के तौर पर नहीं। इसका सामान्य मतलब है कि बच्चे की लंबाई उसकी उम्र और लिंग के हिसाब से तीसरे परसेंटाइल से नीचे है — यानी उसी उम्र के 100 बच्चों में से लगभग 97 से छोटा।',
            'कुछ ज़रूरी बारीकियां जो माता-पिता अक्सर चूक जाते हैं:',
          ],
          bulletPoints: [
            'तीसरा परसेंटाइल एक सांख्यिकीय कटऑफ है, कोई फैसला नहीं। एक स्वस्थ बच्चा पूरी ज़िंदगी दूसरे परसेंटाइल पर रह सकता है और बिल्कुल ठीक हो सकता है।',
            'संख्या से कहीं ज़्यादा मायने पैटर्न का है: जो बच्चा हमेशा पांचवें परसेंटाइल के आसपास रहा है, वह आमतौर पर ठीक है; लेकिन जो बच्चा 50वें से गिरकर 10वें परसेंटाइल पर आ गया है, उसे करीब से देखना चाहिए।',
            'पारिवारिक संदर्भ बहुत मायने रखता है। दो छोटे कद वाले माता-पिता का छोटा बच्चा आमतौर पर बस आनुवंशिकी का पालन कर रहा होता है।',
          ],
          callout: {
            type: 'note',
            text: '“छोटा” सापेक्ष है। एक ही लंबाई एक बच्चे के लिए पूरी तरह सामान्य हो सकती है और दूसरे में जांच की वजह — यह ग्रोथ कर्व, माता-पिता की लंबाई और बच्चे के समग्र स्वास्थ्य पर निर्भर करता है।',
          },
        },
        {
          id: 'signs-checklist',
          heading: '5 संकेत जिनका ज़िक्र बाल रोग विशेषज्ञ से करना चाहिए',
          paragraphs: [
            'इनमें से कोई भी एक संकेत अपने आप में यह नहीं कहता कि कुछ गलत है — लेकिन हर एक संकेत बच्चे के अगले चेकअप में लंबाई की बात उठाने, या जल्दी अपॉइंटमेंट लेने की अच्छी वजह है:',
          ],
          steps: [
            {
              number: 1,
              title: 'बढ़ने की रफ्तार में साफ कमी',
              description: 'बच्चे शैशवावस्था में सबसे तेज़ बढ़ते हैं, फिर एक स्थिर गति पर आ जाते हैं (बचपन के मध्य में लगभग 5–6 सेमी प्रति वर्ष)। अगर आपके बच्चे की लंबाई कई महीनों से थमी हुई लगे — कपड़े और जूते कभी बदलने की ज़रूरत न पड़े — तो इसका ज़िक्र करें।',
            },
            {
              number: 2,
              title: 'अपनी ग्रोथ कर्व से नीचे गिरना',
              description: 'सबसे ज़्यादा मायने रखने वाला संकेत। अगर आपका बच्चा पहले 40वें परसेंटाइल के आसपास था और अब 15वें पर है, तो परसेंटाइल रेखाओं का यह नीचे की ओर पार करना ठीक वही है जिसे बाल रोग विशेषज्ञ देखते हैं।',
            },
            {
              number: 3,
              title: 'पारिवारिक लंबाई के अनुमान से बहुत छोटा',
              description: 'अगर दोनों माता-पिता लंबे हैं लेकिन बच्चा बहुत छोटा है — मिड-पैरेंटल हाइट फॉर्मूले के अनुमान से काफी नीचे — तो इस पर चर्चा ज़रूरी है। अपेक्षित और असल लंबाई के बीच बड़ा अंतर इस बात का संकेत हो सकता है कि कोई चीज़ बढ़त में बाधा डाल रही है।',
            },
            {
              number: 4,
              title: 'प्यूबर्टी के लक्षणों में देरी (या बहुत जल्दी आना)',
              description: 'लड़कों में 14 साल या लड़कियों में 13 साल तक प्यूबर्टी के कोई लक्षण न दिखना, छोटे कद के साथ मिलकर, जांच का कारण है। इसके उल्ट, बहुत जल्दी प्यूबर्टी भी अंतिम लंबाई सीमित कर सकती है, क्योंकि ग्रोथ प्लेट जल्दी बंद हो जाती हैं।',
            },
            {
              number: 5,
              title: 'छोटेपन के साथ अन्य लक्षण',
              description: 'छोटे कद के साथ लगातार थकान, पाचन संबंधी समस्याएं, बार-बार बीमार पड़ना, या विकास के मील के पत्थरों में देरी — इन पर तुरंत ध्यान देना चाहिए। थायरॉइड की समस्या, सीलिएक रोग, एनीमिया और अन्य इलाज योग्य स्थितियों से बढ़त प्रभावित हो सकती है।',
            },
          ],
          callout: {
            type: 'tip',
            text: 'अपॉइंटमेंट से पहले जो भी देखें, उसे तारीख के साथ लिख लें। “पिछले एक साल में वह केवल 2 सेमी बढ़ी” डॉक्टर के लिए “वह छोटी लगती है” से कहीं ज़्यादा उपयोगी है।',
          },
        },
        {
          id: 'track-at-home',
          heading: 'घर पर बच्चे की लंबाई कैसे नापें',
          paragraphs: [
            'बढ़त पर नज़र रखने के लिए सालाना चेकअप का इंतज़ार ज़रूरी नहीं। तारीख के साथ ली गई नियमित माप सच में उपयोगी होती हैं — बाल रोग विशेषज्ञ उन माता-पिता को पसंद करते हैं जो इन्हें लेकर आते हैं।',
          ],
          steps: [
            {
              number: 1,
              title: 'हर 6 महीने में नापें',
              description: 'इससे ज़्यादा बार नापने पर सामान्य माप-त्रुटि असल रुझान को छिपा देती है। पैटर्न पकड़ने के लिए हर 6 महीने सबसे सही अंतराल है।',
            },
            {
              number: 2,
              title: 'हर बार एक जैसी स्थितियां रखें',
              description: 'दिन का एक ही समय (सुबह सबसे अच्छा), नंगे पैर, समतल दीवार के सहारे, एड़ियां साथ में, सीधे सामने देखते हुए। छोटी-छोटी असंगतियां नकली “धीमी बढ़त” दिखाती हैं।',
            },
            {
              number: 3,
              title: 'इसे परसेंटाइल चार्ट पर अंकित करें',
              description: 'एक अकेली संख्या का कोई मतलब नहीं; कर्व का सब कुछ मतलब है। असल CDC/WHO संदर्भ डेटा पर आधारित कैलकुलेटर इस्तेमाल करें और हर परिणाम को उसकी तारीख के साथ सहेजें:',
            },
          ],
          link: {
            text: '→ अपने बच्चे का हाइट परसेंटाइल जांचें (मुफ्त)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: 'बाल रोग विशेषज्ञ असल में क्या करेगा',
          paragraphs: [
            'कई माता-पिता यह मुद्दा इसलिए नहीं उठाते क्योंकि उन्हें बुरी खबर या बेवजह जांचों का डर होता है। असल में पहली मुलाकात आमतौर पर भरोसेमंद और सीधी-सादी होती है:',
          ],
          bulletPoints: [
            'ग्रोथ इतिहास की समीक्षा करेगा — इसीलिए आपकी तारीख वाली माप इतनी मायने रखती हैं।',
            'शारीरिक जांच करेगा और समग्र स्वास्थ्य, पोषण और विकास की समीक्षा करेगा।',
            'आनुवंशिक क्षमता का अनुमान लगाने के लिए बच्चे की लंबाई की तुलना माता-पिता की लंबाई से करेगा।',
            'केवल तभी जब कुछ असामान्य लगे: बोन एज की जांच (हाथ का एक साधारण एक्स-रे), और संभवतः थायरॉइड फंक्शन, सीलिएक रोग या ग्रोथ हार्मोन स्तर के लिए रक्त जांच।',
          ],
          callout: {
            type: 'note',
            text: 'ज़्यादातर जांचें “सब कुछ ठीक लग रहा है, 6 महीने में दोबारा देखते हैं” पर खत्म होती हैं। यह भरोसा — अंदाज़े पर नहीं, डेटा पर आधारित — ठीक वही है जिसके लिए यह मुलाकात होती है।',
          },
          link: {
            text: '→ अपने बच्चे की वयस्क लंबाई की सीमा का अनुमान लगाएं',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'बच्चों में छोटा कद किसे माना जाता है?',
          answer: 'स्क्रीनिंग की परिभाषा के तौर पर, उम्र और लिंग के हिसाब से तीसरे परसेंटाइल से नीचे की लंबाई। लेकिन बाल रोग विशेषज्ञ किसी एक कटऑफ से ज़्यादा समय के साथ बढ़त के पैटर्न और पारिवारिक संदर्भ को महत्व देते हैं। जो बच्चा हमेशा तीसरे परसेंटाइल के आसपास रहा है और अन्यथा स्वस्थ है, वह आमतौर पर बस छोटा है — बीमार नहीं।',
        },
        {
          question: 'क्या छोटे कद का इलाज हो सकता है?',
          answer: 'यह पूरी तरह कारण पर निर्भर करता है — इसीलिए जांच ज़रूरी है। ज़्यादातर छोटे बच्चों को किसी इलाज की ज़रूरत नहीं होती। जब कोई अंदरूनी स्थिति मिलती है (जैसे हाइपोथायरॉइडिज़्म या सीलिएक रोग), तो उसका इलाज अक्सर सामान्य बढ़त बहाल कर देता है। ग्रोथ हार्मोन थेरेपी मौजूद है लेकिन केवल विशिष्ट निदानित स्थितियों के लिए रखी गई है, जिसका फैसला बाल रोग एंडोक्रिनोलॉजिस्ट करता है — इसे कभी खुद से न आज़माएं।',
        },
        {
          question: 'मेरा बच्चा बढ़ना बंद हो गया लगता है। क्या चिंता करनी चाहिए?',
          answer: 'कई महीनों तक बढ़त का सच में रुक जाना बाल रोग विशेषज्ञ की राय का हकदार है — तारीख वाली माप लेकर जाएं ताकि डॉक्टर असल रुझान देख सके। हालांकि, प्यूबर्टी से पहले बढ़त स्वाभाविक रूप से धीमी होती है, और छोटे ठहराव सामान्य हैं। आपके बाल रोग विशेषज्ञ का मुख्य सवाल होगा कि समग्र कर्व अभी भी पटरी पर है या नहीं।',
        },
        {
          question: 'क्या मेरा छोटा बच्चा बस देर से बढ़ने वाला है?',
          answer: 'अक्सर, हां — खासकर वे लड़के जिनके परिवार में देर से प्यूबर्टी का इतिहास है (“संवैधानिक देरी”)। ये बच्चे सामान्य गति से बढ़ते हैं लेकिन प्यूबर्टी देर से शुरू करते हैं, फिर पकड़ बना लेते हैं। बाल रोग विशेषज्ञ ग्रोथ कर्व, बोन एज और पारिवारिक इतिहास देखकर इस पैटर्न को इलाज की ज़रूरत वाली स्थिति से अलग कर सकता है। संदेह हो तो पूछें।',
        },
      ],
      medicalDisclaimer: 'केवल शैक्षणिक सामग्री — चिकित्सकीय सलाह या निदान नहीं। बढ़त संबंधी चिंताओं का मूल्यांकन हमेशा उस बाल रोग विशेषज्ञ को करना चाहिए जो आपके बच्चे की जांच करता है। अगर आपको अपने बच्चे की बढ़त की चिंता है, तो अपने बाल रोग विशेषज्ञ से बात करें; इंतज़ार न करें, और खुद से कुछ निदान या इलाज करने की कोशिश न करें।',
      relatedLinks: [
        {
          text: 'लड़कों का हाइट परसेंटाइल',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'लड़कियों का हाइट परसेंटाइल',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'बच्चे की लंबाई का अनुमान',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'हाइट परसेंटाइल समझें',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    ja: {
      id: 'short-stature',
      slug: 'te-shincho-shoni-i-jushin',
      title: '子どもの低身長：小児科医に相談すべきタイミング',
      subtitle: '心配な保護者のための実践チェックリスト：小児科医の意見を聞くべき5つのサインと、背の低い子のほとんどが健康である理由。',
      metaDescription: '子どもの低身長とは何か、注意すべき5つのサイン、自宅での成長の記録方法、小児科医に相談すべきタイミングを解説します。',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6分で読める',
      badge: '保護者向けガイド',
      tocTitle: 'この記事の内容',
      intro: {
        lead: 'お子さんが身長の3パーセンタイルを一貫して下回っている、以前より成長が明らかに遅くなっている、成長曲線から外れてきている、または遺伝的に予測される身長よりずっと低い場合は、小児科医に相談してください。背の低い子のほとんどは完全に健康ですが、これらのサインには専門家の意見が必要です。',
        paragraphs: [
          'クラスで一番背が低いと、親として心配になるのは当然のことです。まず安心していただきたいのは、背の低い子の圧倒的大多数は健康だということです。単に家族の成長パターンを受け継いでいるか、思春期に追いつく「遅咲き」タイプであることがほとんどです。',
          'ただし、成長は子どもの全身の健康を知るうえで最も優れた手がかりのひとつであり、小児科医はこれを真剣に受け止めます。このガイドでは、観察すべきポイントをチェックリスト形式で、自宅での成長の記録方法、そして小児科医に相談すべきタイミングを具体的にお伝えします。これはあくまで指針であり、診断ではありません。お子さんを実際に診察した医師だけが、何が起きているかを判断できます。',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: '「低身長」とは実際には何を意味するのか',
          paragraphs: [
            '医師が使う「低身長」という言葉は、診断名ではなくスクリーニング用のラベルです。一般的には、年齢と性別に対して身長が3パーセンタイルを下回る状態を指します。つまり、同い年の子ども100人のうち約97人より低いということです。',
            '保護者が見落としがちないくつかの重要なポイント：',
          ],
          bulletPoints: [
            '3パーセンタイルは統計上の区切りであり、判定ではありません。2パーセンタイル付近をずっと辿ってきた健康な子どもは、何の問題もありません。',
            '数字そのものより大切なのはパターンです。ずっと5パーセンタイル付近を辿ってきた子は通常問題ありませんが、50パーセンタイルから10パーセンタイルへ落ちてきた子は詳しく調べる価値があります。',
            '家族の背景は非常に重要です。両親ともに背が低いのに子どもも低い場合、たいていは遺伝を受け継いでいるだけです。',
          ],
          callout: {
            type: 'note',
            text: '「低い」は相対的なものです。同じ身長でも、成長曲線、両親の身長、子どもの全体的な健康状態によって、まったく正常な場合と調べる価値がある場合があります。',
          },
        },
        {
          id: 'signs-checklist',
          heading: '小児科医に伝えるべき5つのサイン',
          paragraphs: [
            'これらのサインのどれかひとつだけで何か問題があるとは限りませんが、どれも次回の健診で成長について相談する、または早めに受診する良い理由になります：',
          ],
          steps: [
            {
              number: 1,
              title: '成長が明らかに遅くなった',
              description: '子どもは赤ちゃんの頃に最も速く伸び、その後は安定したペースに落ち着きます（幼児期中期では年間約5〜6cm）。何か月も成長が止まったように見える場合——服や靴のサイズがずっと変わらない場合——は伝えてみましょう。',
            },
            {
              number: 2,
              title: '成長曲線から外れてきている',
              description: '最も意味のあるサインです。以前は40パーセンタイル付近を辿っていたのに今は15パーセンタイルまで落ちているなど、パーセンタイルのラインを下向きに横切っている状態は、まさに小児科医が注目するポイントです。',
            },
            {
              number: 3,
              title: '家族の身長から予測されるよりずっと低い',
              description: '両親ともに背が高いのに子どもがとても低い場合——両親の身長からの予測式（mid-parental height）を大きく下回る場合——は相談する価値があります。予測と実際の大きな差は、何かが成長を妨げているサインかもしれません。',
            },
            {
              number: 4,
              title: '思春期の遅れ（または早すぎる兆候）',
              description: '男の子で14歳、女の子で13歳になっても思春期の兆候がなく、低身長を伴う場合は評価を受ける価値があります。逆に、思春期が非常に早い場合も、骨端線が早く閉じるため最終身長が低くなることがあります。',
            },
            {
              number: 5,
              title: '低身長に加えて他の症状がある',
              description: '慢性的な疲れやすさ、消化器の不調、よく病気になる、発達の遅れなどを伴う低身長は、早めの対応が必要です。甲状腺の問題、セリアック病、貧血など、治療可能な原因が成長に影響していることがあります。',
            },
          ],
          callout: {
            type: 'tip',
            text: '受診前に、観察したことを日付とともにメモしておきましょう。「この1年で2cmしか伸びませんでした」は、「なんとなく背が低い気がします」より医師にとってずっと有益です。',
          },
        },
        {
          id: 'track-at-home',
          heading: '自宅で子どもの成長を記録する方法',
          paragraphs: [
            '成長を見守るのに年1回の健診を待つ必要はありません。条件をそろえて記録した日付つきの測定値は本当に役立ちます——記録を持参する保護者を小児科医は大歓迎します。',
          ],
          steps: [
            {
              number: 1,
              title: '6か月ごとに測る',
              description: 'それより頻繁に測ると、測定誤差で本当の傾向が見えなくなります。パターンを見つけるには6か月ごとがちょうど良い間隔です。',
            },
            {
              number: 2,
              title: '条件を毎回そろえる',
              description: '同じ時間帯（朝がおすすめ）、裸足、平らな壁に背を向け、かかとをそろえ、まっすぐ前を向きます。小さな条件の違いが「成長が遅い」という偽の結果を生みます。',
            },
            {
              number: 3,
              title: 'パーセンタイルチャートにプロットする',
              description: '1回の数字にはあまり意味がありませんが、曲線にはすべてが表れます。CDC・WHOの実データを基にした計算ツールを使い、日付とともに結果を保存しましょう：',
            },
          ],
          link: {
            text: '→ お子さんの身長パーセンタイルをチェック（無料）',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: '小児科医が実際に行うこと',
          paragraphs: [
            '悪い知らせや不要な検査を恐れて、相談を避ける保護者も少なくありません。実際には、初回の受診はたいてい安心できるシンプルなものです：',
          ],
          bulletPoints: [
            '成長の履歴を確認します——だからこそ、日付つきの記録がこれほど重要なのです。',
            '身体診察を行い、全体的な健康、栄養、発達を確認します。',
            '両親の身長と子どもの身長を比較し、遺伝的な可能性を見積もります。',
            '何か気になる点がある場合のみ：骨年齢の確認（手の簡単なX線）や、甲状腺機能・セリアック病・成長ホルモンなどの血液検査を行うことがあります。',
          ],
          callout: {
            type: 'note',
            text: '評価の多くは「今のところ問題ありません。6か月後にまた確認しましょう」で終わります。推測ではなくデータに基づいたその安心感こそが、受診の目的です。',
          },
          link: {
            text: '→ お子さんの成人身長の目安を予測する',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: '子どもで低身長とされるのはどのくらいですか？',
          answer: 'スクリーニング上の定義では、年齢と性別に対して身長が3パーセンタイルを下回ることです。ただし小児科医が重視するのは、1回の区切り値よりも、長期的な成長パターンと家族の背景です。ずっと3パーセンタイル付近で、他に問題のない子どもは、たいてい「背が低いだけ」で病気ではありません。',
        },
        {
          question: '低身長は治療できますか？',
          answer: '原因によってまったく異なります——だからこそ評価が重要なのです。背の低い子のほとんどは治療の必要がありません。原因が見つかった場合（甲状腺機能低下症やセリアック病など）、その原因を治療することで正常な成長が取り戻せることが多いです。成長ホルモン治療は存在しますが、診断が確定した特定の状態に限られ、小児内分泌専門医が判断するものです——自己判断で進めるものでは決してありません。',
        },
        {
          question: '子どもの成長が止まったように見えます。心配すべきですか？',
          answer: '何か月も本当に成長が止まっている場合は、小児科医の意見を聞く価値があります。日付つきの記録を持参すれば、医師は実際の傾向を確認できます。ただし、思春期前の成長の鈍化は自然なことですし、短い停滞期も正常です。小児科医が確認するのは、全体の曲線が順調かどうかという点です。',
        },
        {
          question: 'うちの子は単なる遅咲きなのでしょうか？',
          answer: '多くの場合、その通りです——特に、家族に思春期の遅い人がいる男の子によく見られる「体質性思春期遅発症」です。こうした子は正常なペースで成長しますが、思春期が遅く始まり、その後に追いつきます。小児科医は、成長曲線、骨年齢、家族歴を見ることで、このパターンと治療が必要なものを見分けられます。迷ったら相談しましょう。',
        },
      ],
      medicalDisclaimer: '本コンテンツは教育目的の情報提供であり、医学的な助言や診断ではありません。成長に関する心配は、必ずお子さんを診察する小児科医に評価してもらってください。お子さんの成長に不安がある場合は小児科医に相談し、待たずに、自己判断での診断や治療は絶対に行わないでください。',
      relatedLinks: [
        {
          text: '男の子の身長パーセンタイル',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: '女の子の身長パーセンタイル',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: '子どもの身長予測',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: '身長パーセンタイルの解説',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    ko: {
      id: 'short-stature',
      slug: 'jeoshinjang-eodde-ttae-uiwon',
      title: '아이 키가 작을 때: 소아과 의사와 상담해야 하는 시점',
      subtitle: '걱정 많은 부모를 위한 실용 체크리스트: 소아과 진료가 필요한 관찰 가능한 5가지 신호 — 그리고 키 작은 아이 대부분이 완전히 건강하다는 이유.',
      metaDescription: '아이 저신장의 의미, 주의해야 할 5가지 신호, 집에서 성장 추적하는 방법, 그리고 소아과 의사와 상담해야 하는 시점.',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6분 읽기',
      badge: '부모 가이드',
      tocTitle: '이 글의 목차',
      intro: {
        lead: '아이가 키 백분위수 3퍼센타일 미만에 지속적으로 머물거나, 예전보다 눈에 띄게 천천히 자라거나, 성장 곡선에서 벗어나고 있거나, 유전적으로 예상되는 키보다 훨씬 작다면 소아과 의사와 상담하세요. 키가 작은 아이 대부분은 완전히 건강합니다 — 하지만 이런 신호는 전문가의 소견이 필요합니다.',
        paragraphs: [
          '반에서 아이가 가장 작을 때 걱정되는 것은 당연합니다. 먼저 안심할 사실부터 말씀드리면, 키가 작은 아이의 압도적 다수는 건강합니다 — 단순히 가족의 성장 패턴을 따르고 있거나, 사춘기에 따라잡는 만성장형일 뿐입니다.',
          '다만 성장은 아이의 전반적인 건강을 보여주는 가장 좋은 창 중 하나이며, 소아과 의사들은 이를 진지하게 받아들입니다. 이 가이드에서는 관찰해야 할 점, 집에서 성장을 추적하는 방법, 그리고 소아과 의사에게 정확히 언제 이야기해야 하는지를 담은 실용 체크리스트를 드립니다. 이는 안내일 뿐 진단이 아닙니다 — 아이를 직접 진찰한 의사만이 무슨 일인지 알 수 있습니다.',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: '‘저신장’이 실제로 의미하는 것',
          paragraphs: [
            '의사들은 ‘저신장’이라는 용어를 선별(screening) 기준으로 사용하지, 진단명으로 사용하지 않습니다. 일반적으로 같은 나이·성별 기준 키가 3퍼센타일 미만인 경우를 말합니다 — 즉, 같은 나이 아이 100명 중 약 97명보다 작다는 뜻입니다.',
            '부모들이 자주 놓치는 몇 가지 중요한 뉘앙스가 있습니다:',
          ],
          bulletPoints: [
            '3퍼센타일은 통계적 기준선이지, 판정이 아닙니다. 평생 2퍼센타일에 머무는 건강한 아이도 완전히 괜찮을 수 있습니다.',
            '숫자보다 훨씬 중요한 것은 패턴입니다. 항상 5퍼센타일 근처를 따라온 아이라면 보통 괜찮습니다. 50퍼센타일에서 10퍼센타일로 떨어진 아이라면 자세히 살펴볼 가치가 있습니다.',
            '가족 배경이 매우 중요합니다. 부모 모두 키가 작은데 아이도 작다면, 보통은 단순히 유전을 따르고 있는 것입니다.',
          ],
          callout: {
            type: 'note',
            text: '‘작다’는 것은 상대적입니다. 같은 키도 한 아이에게는 완전히 정상일 수 있고, 다른 아이에게는 조사가 필요할 수 있습니다 — 성장 곡선, 부모의 키, 아이의 전반적인 건강 상태에 달려 있습니다.',
          },
        },
        {
          id: 'signs-checklist',
          heading: '소아과 의사에게 말할 만한 5가지 신호',
          paragraphs: [
            '이 신호들 중 어느 하나만으로 문제가 있다는 뜻은 아닙니다 — 하지만 각각은 다음 정기 검진 때 성장을 언급하거나, 검진을 앞당겨 예약할 만한 좋은 이유입니다:',
          ],
          steps: [
            {
              number: 1,
              title: '성장이 눈에 띄게 느려졌다',
              description: '아이는 영아기에 가장 빨리 자라고, 이후에는 비교적 일정한 속도로 자랍니다(아동 중기에는 연간 약 5–6cm). 몇 달 동안 성장이 멈춘 것처럼 보이고 옷이나 신발을 갈아입힐 필요가 전혀 없다면 언급해 보세요.',
            },
            {
              number: 2,
              title: '성장 곡선에서 벗어나고 있다',
              description: '가장 의미 있는 신호입니다. 아이가 예전에 40퍼센타일을 따라가다가 지금은 15퍼센타일에 있다면, 백분위수 선을 아래로 가로지르는 이 하락이야말로 소아과 의사가 찾는 바로 그것입니다.',
            },
            {
              number: 3,
              title: '가족 키로 예상한 것보다 훨씬 작다',
              description: '부모 모두 키가 큰데 아이가 매우 작다면 — 중간부모키 공식으로 예측한 키보다 훨씬 아래라면 — 논의해 볼 가치가 있습니다. 예상 키와 실제 키의 큰 차이는 성장을 방해하는 무언가의 신호일 수 있습니다.',
            },
            {
              number: 4,
              title: '사춘기 징후가 늦거나(또는 매우 빠르다)',
              description: '남아는 14세, 여아는 13세까지 사춘기 징후가 없고 키도 작다면 검사가 필요합니다. 반대로 사춘기가 매우 빨리 오면 성장판이 일찍 닫혀 최종 키가 제한될 수 있습니다.',
            },
            {
              number: 5,
              title: '키가 작은 것 외에 다른 증상이 있다',
              description: '저신장에 만성 피로, 소화 문제, 잦은 질병, 발달 이정표 지연이 동반된다면 신속한 관심이 필요합니다 — 갑상선 문제, 소아지방변증(셀리악병), 빈혈 등 치료 가능한 질환이 성장에 영향을 줄 수 있습니다.',
            },
          ],
          callout: {
            type: 'tip',
            text: '진료 전에 관찰한 내용을 날짜와 함께 적어 가세요. “키가 작은 것 같아요”보다 “지난 1년간 2cm밖에 안 컸어요”가 의사에게 훨씬 유용합니다.',
          },
        },
        {
          id: 'track-at-home',
          heading: '집에서 아이 성장을 추적하는 방법',
          paragraphs: [
            '성장을 살피기 위해 매년 정기 검진까지 기다릴 필요는 없습니다. 일관되게 잰 날짜별 측정 기록은 진짜로 유용합니다 — 소아과 의사들은 이런 기록을 가져오는 부모를 좋아합니다.',
          ],
          steps: [
            {
              number: 1,
              title: '6개월마다 측정하세요',
              description: '그보다 자주 재면 정상적인 측정 오차가 진짜 추세를 가립니다. 패턴을 파악하기에는 6개월마다가 가장 좋습니다.',
            },
            {
              number: 2,
              title: '조건을 항상 동일하게 유지하세요',
              description: '같은 시간대(아침이 가장 좋습니다), 맨발, 평평한 벽에 기대어, 발뒤꿈치를 붙이고 정면을 봅니다. 작은 차이가 가짜 ‘성장 둔화’를 만들어냅니다.',
            },
            {
              number: 3,
              title: '백분위수 차트에 기록하세요',
              description: '숫자 하나는 별 의미가 없습니다. 곡선이 전부입니다. 실제 CDC/WHO 기준 데이터를 사용하는 계산기를 이용해 매번 날짜와 함께 결과를 저장하세요:',
            },
          ],
          link: {
            text: '→ 아이 키 백분위수 확인하기 (무료)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: '소아과 의사가 실제로 하는 일',
          paragraphs: [
            '나쁜 소식이나 불필요한 검사가 두려워 이야기를 꺼내지 못하는 부모가 많습니다. 실제로 첫 진료는 대개 안심이 되고 간단합니다:',
          ],
          bulletPoints: [
            '성장 기록을 검토합니다 — 그래서 날짜별 측정 기록이 그토록 중요한 것입니다.',
            '신체 검진을 하고 전반적인 건강, 영양, 발달 상태를 확인합니다.',
            '부모의 키와 아이의 키를 비교해 유전적 잠재력을 추정합니다.',
            '뭔가 이상해 보일 때만: 골연령을 확인하고(간단한 손 엑스레이), 갑상선 기능, 셀리악병, 성장호르몬 수치 등에 대한 혈액 검사를 할 수 있습니다.',
          ],
          callout: {
            type: 'note',
            text: '대부분의 검사는 “다 괜찮아 보이네요, 6개월 후에 다시 확인해 봅시다”로 끝납니다. 추측이 아닌 데이터에 기반한 그 안심이야말로 진료의 목적입니다.',
          },
          link: {
            text: '→ 아이의 성인 예상 키 범위 알아보기',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: '아이의 저신장 기준은 무엇인가요?',
          answer: '선별 기준으로는 나이·성별 기준 키가 3퍼센타일 미만인 경우입니다. 하지만 소아과 의사는 단일 기준선보다 시간에 따른 성장 패턴과 가족 배경을 더 중요하게 봅니다. 항상 3퍼센타일 근처에 있었고 그 외에는 건강한 아이라면 보통은 단순히 키가 작은 것이지, 아픈 것이 아닙니다.',
        },
        {
          question: '저신장은 치료할 수 있나요?',
          answer: '원인에 따라 완전히 다릅니다 — 그래서 검사가 중요한 것입니다. 키가 작은 아이 대부분은 치료가 전혀 필요 없습니다. 기저 질환(갑상선기능저하증이나 셀리악병 등)이 발견되면 그 질환을 치료하면 정상 성장이 회복되는 경우가 많습니다. 성장호르몬 치료는 존재하지만 특정 진단된 질환에만 사용되며 소아내분비 전문의가 결정합니다 — 스스로 시도할 일이 절대 아닙니다.',
        },
        {
          question: '아이가 성장을 멈춘 것 같아요. 걱정해야 하나요?',
          answer: '몇 달 동안 진짜로 성장이 멈췄다면 소아과 의사의 소견을 받을 만합니다 — 날짜별 측정 기록을 가져가면 의사가 실제 추세를 볼 수 있습니다. 다만 사춘기 전에는 성장이 자연스럽게 느려지고, 잠깐의 정체기도 정상입니다. 소아과 의사가 물을 핵심 질문은 전체 곡선이 여전히 궤도에 있는지 여부입니다.',
        },
        {
          question: '키 작은 우리 아이가 그냥 만성장형인 건가요?',
          answer: '종종 그렇습니다 — 특히 사춘기가 늦은 가족력이 있는 남아의 경우(‘체질성 성장·사춘기 지연’)가 그렇습니다. 이런 아이들은 정상 속도로 자라지만 사춘기가 늦게 시작되고 이후 따라잡습니다. 소아과 의사는 성장 곡선, 골연령, 가족력을 보고 이 패턴과 치료가 필요한 경우를 보통 구분할 수 있습니다. 의심스러우면 물어보세요.',
        },
      ],
      medicalDisclaimer: '교육용 콘텐츠일 뿐 의학적 조언이나 진단이 아닙니다. 성장 관련 걱정은 반드시 아이를 직접 진찰하는 소아과 의사의 평가를 받아야 합니다. 아이의 성장이 걱정된다면 소아과 의사와 상담하세요. 기다리지 말고, 스스로 진단하거나 치료하려 하지 마세요.',
      relatedLinks: [
        {
          text: '남아 키 백분위수',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: '여아 키 백분위수',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: '아이 성인 키 예측',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: '키 백분위수 쉽게 이해하기',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    ru: {
      id: 'short-stature',
      slug: 'nizkoroslost-kogda-k-pediatru',
      title: 'Низкорослость у детей: когда стоит обратиться к педиатру',
      subtitle: 'Практический чек-лист для встревоженных родителей: 5 заметных признаков, которые стоит обсудить с педиатром, — и почему большинство невысоких детей абсолютно здоровы.',
      metaDescription: 'Низкорослость у детей: что это значит, 5 признаков, на которые стоит обратить внимание, как следить за ростом дома и когда поговорить с педиатром.',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6 мин чтения',
      badge: 'Гид для родителей',
      tocTitle: 'В этой статье',
      intro: {
        lead: 'Поговорите с педиатром, если ваш ребёнок стабильно находится ниже 3-го процентиля по росту, стал заметно медленнее расти, чем раньше, «выпадает» из своей кривой роста или значительно ниже, чем предполагает его наследственный потенциал. Большинство невысоких детей совершенно здоровы — но эти признаки заслуживают профессиональной оценки.',
        paragraphs: [
          'Переживать, когда ваш ребёнок самый низкий в классе, — совершенно нормально. Сначала хорошая новость: подавляющее большинство невысоких детей здоровы — они просто идут по семейному сценарию роста или являются «поздноцветами», которые догоняют сверстников в пубертате.',
          'При этом рост — одно из лучших окон в общее здоровье ребёнка, и педиатры относятся к нему серьёзно. Этот гид даёт практический чек-лист: за чем наблюдать, как измерять рост дома и когда именно поднять вопрос у педиатра. Это руководство, а не диагноз — что происходит, может сказать только врач, осмотревший вашего ребёнка.',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: 'Что на самом деле означает «низкорослость»',
          paragraphs: [
            'Врачи используют термин «низкорослость» как скрининговую метку, а не диагноз. Обычно это означает, что рост ребёнка ниже 3-го процентиля для его возраста и пола — то есть ниже, чем примерно у 97 из 100 детей того же возраста.',
            'Несколько важных нюансов, которые родители часто упускают из виду:',
          ],
          bulletPoints: [
            '3-й процентиль — это статистическая граница, а не приговор. Здоровый ребёнок может всю жизнь находиться на 2-м процентиле и быть совершенно в порядке.',
            'Гораздо важнее цифры — динамика: ребёнок, который всегда шёл по 5-му процентилю, обычно в норме; а вот ребёнок, спустившийся с 50-го на 10-й, заслуживает более пристального внимания.',
            'Семейный контекст имеет огромное значение. Ребёнок двух невысоких родителей, который сам невысок, обычно просто следует генетике.',
          ],
          callout: {
            type: 'note',
            text: '«Низкий» — понятие относительное. Один и тот же рост может быть совершенно нормальным для одного ребёнка и поводом для обследования для другого — всё зависит от кривой роста, роста родителей и общего здоровья ребёнка.',
          },
        },
        {
          id: 'signs-checklist',
          heading: '5 признаков, о которых стоит сказать педиатру',
          paragraphs: [
            'Ни один из этих признаков сам по себе не означает, что что-то не так, — но каждый из них является хорошим поводом поднять тему роста на ближайшем осмотре или записаться пораньше:',
          ],
          steps: [
            {
              number: 1,
              title: 'Рост заметно замедлился',
              description: 'Быстрее всего дети растут младенцами, затем темп становится ровнее (примерно 5–6 см в год в среднем детстве). Если рост ребёнка как будто остановился на много месяцев — одежда и обувь никогда не становятся малы, — упомяните об этом.',
            },
            {
              number: 2,
              title: 'Выпадение из кривой роста',
              description: 'Самый значимый сигнал. Если ребёнок раньше шёл по 40-му процентилю, а теперь на 15-м, это пересечение процентильных линий вниз — именно то, на что смотрят педиатры.',
            },
            {
              number: 3,
              title: 'Значительно ниже, чем предсказывает рост семьи',
              description: 'Если оба родителя высокие, а ребёнок очень низкий — далеко ниже прогноза по формуле среднего родительского роста, — это стоит обсудить. Большой разрыв между ожидаемым и фактическим ростом может сигнализировать о том, что росту что-то мешает.',
            },
            {
              number: 4,
              title: 'Задержка признаков пубертата (или, наоборот, очень ранние)',
              description: 'Отсутствие признаков полового созревания к 14 годам у мальчиков или к 13 у девочек в сочетании с низкорослостью заслуживает обследования. И наоборот, очень ранний пубертат тоже может ограничить итоговый рост, потому что зоны роста закрываются раньше.',
            },
            {
              number: 5,
              title: 'Другие симптомы на фоне низкорослости',
              description: 'Низкорослость плюс хроническая усталость, проблемы с пищеварением, частые болезни или задержка этапов развития заслуживают скорейшего внимания — на рост могут влиять проблемы щитовидной железы, целиакия, анемия и другие поддающиеся лечению состояния.',
            },
          ],
          callout: {
            type: 'tip',
            text: 'Запишите свои наблюдения с датами перед приёмом. «За последний год она выросла всего на 2 см» гораздо полезнее врачу, чем «кажется, она низкая».',
          },
        },
        {
          id: 'track-at-home',
          heading: 'Как следить за ростом ребёнка дома',
          paragraphs: [
            'Не нужно ждать ежегодного осмотра, чтобы держать рост под контролем. Датированные измерения, сделанные стабильно, действительно полезны — педиатры обожают родителей, которые их приносят.',
          ],
          steps: [
            {
              number: 1,
              title: 'Измеряйте каждые 6 месяцев',
              description: 'Чаще — нет смысла: обычная погрешность измерения скроет реальный тренд. Каждые 6 месяцев — оптимальный ритм, чтобы заметить закономерность.',
            },
            {
              number: 2,
              title: 'Держите условия одинаковыми',
              description: 'Одно и то же время суток (лучше утро), босиком, у ровной стены, пятки вместе, взгляд прямо. Малейшие несоответствия создают ложные «замедления».',
            },
            {
              number: 3,
              title: 'Отмечайте на процентильном графике',
              description: 'Одно число мало что значит; кривая — всё. Используйте калькулятор на реальных эталонных данных CDC/ВОЗ и сохраняйте каждый результат с датой:',
            },
          ],
          link: {
            text: '→ Проверьте процентиль роста ребёнка (бесплатно)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: 'Что педиатр будет делать на самом деле',
          paragraphs: [
            'Многие родители избегают поднимать тему, потому что боятся плохих новостей или ненужных анализов. На практике первый визит обычно проходит успокаивающе и просто:',
          ],
          bulletPoints: [
            'Разберёт историю роста — вот почему ваши датированные измерения так важны.',
            'Проведёт осмотр и оценит общее здоровье, питание и развитие.',
            'Сравнит рост ребёнка с ростом родителей, чтобы оценить генетический потенциал.',
            'Только если что-то насторожит: проверит костный возраст (простой рентген кисти) и, возможно, анализы крови на функцию щитовидной железы, целиакию или уровень гормона роста.',
          ],
          callout: {
            type: 'note',
            text: 'Большинство обследований заканчиваются фразой «всё выглядит хорошо, проверим через 6 месяцев». Это успокоение — на основе данных, а не догадок, — и есть смысл визита.',
          },
          link: {
            text: '→ Оцените диапазон взрослого роста ребёнка',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'Что считается низкорослостью у детей?',
          answer: 'Как скрининговое определение — рост ниже 3-го процентиля для возраста и пола. Но педиатрам важнее динамика роста во времени и семейный контекст, чем любая отдельная граница. Ребёнок, который всегда был около 3-го процентиля и в остальном здоров, обычно просто невысокий — а не больной.',
        },
        {
          question: 'Низкорослость лечится?',
          answer: 'Это полностью зависит от причины — поэтому обследование так важно. Большинству невысоких детей лечение вообще не нужно. Когда находится лежащее в основе состояние (например, гипотиреоз или целиакия), его лечение часто возвращает нормальный рост. Терапия гормоном роста существует, но она предназначена для конкретных диагностированных состояний и назначается детским эндокринологом — никогда не стоит добиваться её самостоятельно.',
        },
        {
          question: 'Кажется, мой ребёнок перестал расти. Стоит ли беспокоиться?',
          answer: 'Настоящая остановка роста на протяжении многих месяцев заслуживает мнения педиатра — принесите датированные измерения, чтобы врач увидел реальный тренд. При этом перед пубертатом рост естественно замедляется, а короткие плато — норма. Ключевой вопрос, который задаст педиатр: идёт ли общая кривая по-прежнему по плану.',
        },
        {
          question: 'Мой невысокий ребёнок — просто поздноцвет?',
          answer: 'Часто да — особенно мальчики с семейной историей позднего пубертата («конституциональная задержка»). Такие дети растут нормальным темпом, но позже вступают в пубертат, а затем догоняют. Педиатр обычно отличает этот сценарий от требующего лечения по кривой роста, костному возрасту и семейной истории. Если сомневаетесь — спросите.',
        },
      ],
      medicalDisclaimer: 'Только образовательный контент — не медицинская консультация и не диагноз. Вопросы, связанные с ростом, всегда должен оценивать педиатр, осмотревший вашего ребёнка. Если вас беспокоит рост ребёнка, поговорите с педиатром: не ждите и не пытайтесь ставить диагноз или лечиться самостоятельно.',
      relatedLinks: [
        {
          text: 'Процентиль роста мальчиков',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Процентиль роста девочек',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Прогноз роста ребёнка',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'Что такое процентиль роста',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
    ar: {
      id: 'short-stature',
      slug: 'qasr-al-qama-mata-tastashir-tabib',
      title: 'قصر القامة لدى الأطفال: متى تستشير طبيب الأطفال',
      subtitle: 'قائمة عملية للآباء القلقين: 5 علامات واضحة تستحق استشارة طبيب الأطفال — ولماذا معظم الأطفال قصار القامة يتمتعون بصحة ممتازة.',
      metaDescription: 'قصر القامة لدى الأطفال: ماذا يعني، 5 علامات يجب مراقبتها، كيف تتابع نمو طفلك في البيت، ومتى تستشير طبيب الأطفال.',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      readTime: '6 دقائق قراءة',
      badge: 'دليل للوالدين',
      tocTitle: 'في هذا المقال',
      intro: {
        lead: 'استشر طبيب الأطفال إذا كان طفلك باستمرار أدنى من المئوية الثالثة للطول، أو أصبح نموه أبطأ بشكل ملحوظ من قبل، أو بدأ ينحرف عن منحنى نموه المعتاد، أو كان أقصر بكثير مما توحي به إمكاناته الوراثية. معظم الأطفال قصار القامة بصحة ممتازة — لكن هذه العلامات تستحق رأيًا طبيًا متخصصًا.',
        paragraphs: [
          'من الطبيعي تمامًا أن تقلق عندما يكون طفلك الأقصر في صفه. والحقيقة المطمئنة أولًا: الغالبية الساحقة من الأطفال قصار القامة أصحاء تمامًا — فهم ببساطة يتبعون نمط النمو العائلي، أو أنهم من المتأخرين في النمو الذين يلحقون بأقرانهم خلال البلوغ.',
          'ومع ذلك، يُعد النمو من أفضل المؤشرات على صحة الطفل العامة، وأطباء الأطفال يأخذونه على محمل الجد. يقدم لك هذا الدليل قائمة عملية بما يجب أن تلاحظه، وكيف تتابع نمو طفلك في البيت، ومتى بالضبط تطرح الموضوع على طبيب الأطفال. هذا إرشاد وليس تشخيصًا — فالطبيب وحده، بعد فحص طفلك، هو من يستطيع معرفة ما يحدث.',
        ],
      },
      sections: [
        {
          id: 'what-is-short-stature',
          heading: 'ماذا يعني «قصر القامة» فعليًا؟',
          paragraphs: [
            'يستخدم الأطباء مصطلح «قصر القامة» كتصنيف للفحص الأولي، وليس كتشخيص. وهو يعني عمومًا أن طول الطفل أدنى من المئوية الثالثة لعمره وجنسه — أي أقصر من نحو 97 طفلًا من أصل 100 في نفس العمر.',
            'بعض الفروق الدقيقة المهمة التي يغفل عنها كثير من الآباء:',
          ],
          bulletPoints: [
            'المئوية الثالثة حد إحصائي وليست حكمًا نهائيًا. فطفل سليم قد يبقى عند المئوية الثانية طوال حياته ويكون بصحة ممتازة.',
            'الأهم بكثير من الرقم هو النمط: طفل يسير دائمًا على خط المئوية الخامسة عادة لا مشكلة فيه؛ أما طفل هبط من المئوية الخمسين إلى العاشرة فيستحق نظرة فاحصة.',
            'السياق العائلي مهم للغاية. فطفل أبواه قصيران وهو قصير مثلهما يتبع في الغالب الوراثة فحسب.',
          ],
          callout: {
            type: 'note',
            text: '«القصير» أمر نسبي. فالطول نفسه قد يكون طبيعيًا تمامًا لطفل ويستحق التحقق لطفل آخر — وذلك يعتمد على منحنى النمو، وطول الوالدين، والصحة العامة للطفل.',
          },
        },
        {
          id: 'signs-checklist',
          heading: '5 علامات تستحق أن تذكرها لطبيب الأطفال',
          paragraphs: [
            'لا تعني أي من هذه العلامات وحدها أن هناك خطأ ما — لكن كل واحدة منها سبب وجيه لطرح موضوع النمو في الفحص الدوري القادم لطفلك، أو لتقديم موعد الفحص:',
          ],
          steps: [
            {
              number: 1,
              title: 'تباطؤ ملحوظ في النمو',
              description: 'ينمو الأطفال بأسرع وتيرة وهم رضع، ثم يستقرون على إيقاع أكثر ثباتًا (نحو 5–6 سم سنويًا في منتصف الطفولة). فإذا بدا نمو طفلك متوقفًا منذ أشهر طويلة — والملابس والأحذية لا تحتاج إلى استبدال أبدًا — فاذكر ذلك.',
            },
            {
              number: 2,
              title: 'الانحراف عن منحنى النمو',
              description: 'هذه هي الإشارة الأكثر دلالة على الإطلاق. فإذا كان طفلك يسير على خط المئوية الأربعين ثم أصبح عند المئوية الخامسة عشرة، فإن هذا الهبوط عبر خطوط المئوية هو بالضبط ما يبحث عنه أطباء الأطفال.',
            },
            {
              number: 3,
              title: 'أقصر بكثير مما يتنبأ به طول العائلة',
              description: 'إذا كان الوالدان طويلين والطفل قصير جدًا — أدنى بكثير مما تتنبأ به معادلة طول الوالدين المتوسط — فالأمر يستحق النقاش. فالفجوة الكبيرة بين الطول المتوقع والفعلي قد تشير إلى وجود ما يعيق النمو.',
            },
            {
              number: 4,
              title: 'تأخر علامات البلوغ (أو ظهورها مبكرًا جدًا)',
              description: 'غياب علامات البلوغ حتى سن 14 لدى الأولاد أو 13 لدى البنات، مع قصر القامة، يستحق التقييم. وعلى العكس، البلوغ المبكر جدًا قد يحد أيضًا من الطول النهائي، لأن صفائح النمو تُغلق في وقت أبكر.',
            },
            {
              number: 5,
              title: 'أعراض أخرى مع قصر القامة',
              description: 'قصر القامة المصحوب بإرهاق مزمن، أو مشاكل هضمية، أو أمراض متكررة، أو تأخر في مراحل النمو، يستحق اهتمامًا سريعًا — فقد يتأثر النمو بمشاكل الغدة الدرقية، أو الداء البطني (حساسية القمح)، أو فقر الدم، وحالات أخرى قابلة للعلاج.',
            },
          ],
          callout: {
            type: 'tip',
            text: 'دوّن ما تلاحظه مع التواريخ قبل موعد الطبيب. فقولك «نمت ابنتي سنتيمترين فقط في السنة الماضية» أنفع للطبيب بكثير من قولك «تبدو قصيرة».',
          },
        },
        {
          id: 'track-at-home',
          heading: 'كيف تتابع نمو طفلك في البيت',
          paragraphs: [
            'لا تحتاج إلى انتظار الفحص السنوي لمراقبة النمو. فالقياسات المؤرخة، إذا أُخذت بانتظام، مفيدة فعلًا — وأطباء الأطفال يحبون الآباء الذين يأتون بها.',
          ],
          steps: [
            {
              number: 1,
              title: 'قِس الطول كل 6 أشهر',
              description: 'إذا قست أكثر من ذلك، فإن هامش الخطأ الطبيعي في القياس يُخفي الاتجاه الحقيقي. كل 6 أشهر هو الإيقاع المثالي لرصد أي نمط.',
            },
            {
              number: 2,
              title: 'حافظ على شروط متطابقة',
              description: 'نفس الوقت من اليوم (الصباح أفضل)، حافي القدمين، والظهر ملاصق لجدار مستوٍ، والكعبان متقاربان، والنظر إلى الأمام مباشرة. فالاختلافات البسيطة تُنتج «تباطؤات» وهمية.',
            },
            {
              number: 3,
              title: 'ارسم القياسات على مخطط المئويات',
              description: 'الرقم وحده لا يعني الكثير؛ أما المنحنى فيعني كل شيء. استخدم حاسبة تعتمد على بيانات مرجعية حقيقية من مراكز مكافحة الأمراض ومنظمة الصحة العالمية، واحفظ كل نتيجة مع تاريخها:',
            },
          ],
          link: {
            text: '← تحقق من مئوية طول طفلك (مجانًا)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-pediatrician-does',
          heading: 'ما الذي سيفعله طبيب الأطفال فعليًا؟',
          paragraphs: [
            'يتجنب كثير من الآباء طرح الموضوع خوفًا من أخبار سيئة أو فحوصات غير ضرورية. لكن في الواقع، تكون الزيارة الأولى مطمئنة ومباشرة في العادة:',
          ],
          bulletPoints: [
            'مراجعة تاريخ النمو — ولهذا السبب تُعد قياساتك المؤرخة مهمة للغاية.',
            'إجراء فحص سريري ومراجعة الصحة العامة والتغذية والنمو.',
            'مقارنة طول الطفل بطول الوالدين لتقدير الإمكانات الوراثية.',
            'فقط إذا بدا شيء غير طبيعي: فحص العمر العظمي (أشعة سينية بسيطة لليد)، وربما تحاليل دم لوظائف الغدة الدرقية أو الداء البطني أو مستويات هرمون النمو.',
          ],
          callout: {
            type: 'note',
            text: 'معظم التقييمات تنتهي بعبارة «كل شيء يبدو طبيعيًا، لنعِد الفحص بعد 6 أشهر». وهذه الطمأنينة — المبنية على البيانات لا على التخمين — هي بالضبط ما تكون الزيارة من أجله.',
          },
          link: {
            text: '← قدّر نطاق الطول البالغ لطفلك',
            href: '/height-calculator/child-height-predictor/',
          },
        },
      ],
      faqs: [
        {
          question: 'ماذا يُعد قصر قامة لدى الأطفال؟',
          answer: 'حسب تعريف الفحص الأولي، هو الطول الأدنى من المئوية الثالثة للعمر والجنس. لكن أطباء الأطفال يهتمون بنمط النمو عبر الزمن والسياق العائلي أكثر من أي حد ثابت. فالطفل الذي بقي دائمًا قريبًا من المئوية الثالثة وهو بصحة جيدة يكون عادة مجرد قصير — وليس مريضًا.',
        },
        {
          question: 'هل يمكن علاج قصر القامة؟',
          answer: 'يعتمد ذلك كليًا على السبب — ولهذا السبب يُعد التقييم الطبي مهمًا. فمعظم الأطفال قصار القامة لا يحتاجون إلى أي علاج. وعند اكتشاف حالة كامنة (مثل قصور الغدة الدرقية أو الداء البطني)، فإن علاج تلك الحالة غالبًا ما يعيد النمو إلى طبيعته. ويوجد علاج بهرمون النمو لكنه مخصص لحالات مشخصة بعينها، ويقرره طبيب الغدد الصماء للأطفال — وليس شيئًا تسعى إليه بنفسك أبدًا.',
        },
        {
          question: 'يبدو أن طفلي توقف عن النمو. هل عليّ القلق؟',
          answer: 'التوقف الحقيقي عن النمو لعدة أشهر يستحق رأي طبيب الأطفال — أحضر قياسات مؤرخة ليرى الطبيب الاتجاه الفعلي. ومع ذلك، يتباطأ النمو طبيعيًا قبل البلوغ، والفترات القصيرة من الثبات أمر طبيعي. والسؤال الأساسي الذي سيطرحه طبيب الأطفال: هل المنحنى العام ما زال يسير على مساره؟',
        },
        {
          question: 'هل طفلي القصير مجرد متأخر في النمو؟',
          answer: 'غالبًا نعم — خاصة الأولاد الذين لديهم تاريخ عائلي للبلوغ المتأخر («التأخر البنيوي»). فهؤلاء الأطفال ينمون بوتيرة طبيعية لكنهم يبلغون متأخرين، ثم يلحقون بأقرانهم. وعادة ما يستطيع طبيب الأطفال التمييز بين هذا النمط وبين ما يستدعي العلاج بالنظر إلى منحنى النمو والعمر العظمي والتاريخ العائلي. وعند الشك، اسأل.',
        },
      ],
      medicalDisclaimer: 'محتوى تثقيفي فقط — وليس استشارة طبية ولا تشخيصًا. ويجب أن تُقيَّم مخاوف النمو دائمًا من قبل طبيب أطفال يفحص طفلك. فإذا كنت قلقًا بشأن نمو طفلك، تحدث إلى طبيب الأطفال؛ ولا تنتظر، ولا تحاول تشخيص أو علاج أي شيء بنفسك.',
      relatedLinks: [
        {
          text: 'مئوية طول الأولاد',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'مئوية طول البنات',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'متنبئ طول الطفل',
          href: '/height-calculator/child-height-predictor/',
        },
        {
          text: 'شرح مئوية الطول',
          href: '/articles/height-percentile-explained/',
        },
      ],
    },
  },
};
