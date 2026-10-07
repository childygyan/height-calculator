import type { ScheduledArticle } from '../types';

export const scheduled: ScheduledArticle = {
  publishDate: '2026-10-15',
  articles: {
    en: {
      id: 'teenager-height-normal',
      slug: 'is-my-teenagers-height-normal',
      title: 'Is My Teenager\'s Height Normal? Puberty & Growth Spurts',
      subtitle: 'Puberty timing explains almost every "too short" or "too tall" teenager. Here is what is normal at each stage — and the one pattern that actually matters.',
      metaDescription: 'Is my teenager\'s height normal? Puberty timelines for girls (10–14) and boys (12–16), late bloomers, what to track, and when to see the pediatrician.',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6 min read',
      badge: 'Guide for parents',
      tocTitle: 'In this article',
      intro: {
        lead: 'In almost every case, yes — your teenager’s height is normal. Puberty timing varies enormously between kids, and that timing explains nearly all the difference: a 13-year-old who hasn’t started their growth spurt can stand 6 inches shorter than a same-age friend and both are perfectly healthy.',
        paragraphs: [
          'The confusion is understandable. Between ages 12 and 16, children are spread across every stage of puberty — some finished, some barely started. Comparing your child to friends at the same age is comparing kids on completely different schedules.',
          'What actually matters is not the number on the tape measure today, but the shape of your child’s growth over time. Here is the timeline to expect, what to track, and the one warning sign worth a doctor’s visit.',
        ],
      },
      sections: [
        {
          id: 'puberty-timeline',
          heading: 'The puberty growth timeline: girls 10–14, boys 12–16',
          paragraphs: [
            'The growth spurt is the fastest period of growth since infancy, and it arrives on different schedules for girls and boys:',
          ],
          bulletPoints: [
            'Girls: the spurt usually starts around ages 10–11, peaks near age 12 (about 3–3.5 inches per year at peak), and slows down after the first period. Most girls are nearly done growing by 14–16.',
            'Boys: the spurt starts later, around ages 12–13, and peaks near age 14 (about 3.5–4 inches per year at peak). Growth continues more gradually into the late teens — most boys reach final height around 16–18.',
          ],
          callout: {
            type: 'tip',
            text: 'A girl’s first period is a useful milestone: after menarche, girls typically grow another 1–3 inches total, mostly within 2–3 years. After that, growth is essentially done.',
          },
        },
        {
          id: 'late-bloomers',
          heading: 'Late bloomers and early developers: both normal',
          paragraphs: [
            'Genetics sets the schedule. Children usually follow the same timing as their parents — if you were a late bloomer, your child probably is too. Late bloomers often end up just as tall as everyone else; they simply get there later, and their growth period runs longer.',
            'This is why "my son is shorter than all his friends" is such a common worry at 13 or 14 — and so often resolves on its own. A boy who starts his spurt at 14 will look short next to a friend who started at 12, then frequently catches up or passes him by 16.',
            'Check your teen’s percentile to see where they stand for their age — but remember, the number matters less than the trend:',
          ],
          link: {
            text: '→ Check the boys’ or girls’ percentile (free)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-to-track',
          heading: 'What to actually track (the curve, not the number)',
          paragraphs: [
            'Pediatricians don’t worry about a single measurement — they worry about patterns. Here is how to do the same at home:',
          ],
          bulletPoints: [
            'Measure every 6 months: barefoot, against a wall, in the morning, and write down the date each time.',
            'Plot the points over time. A steady climb — even a slow one, even at a low percentile — is reassuring.',
            'Note puberty milestones: for girls, breast development and first period; for boys, testicular enlargement and voice deepening. Growth should accelerate shortly after these begin.',
            'Compare against your own family pattern: final height usually lands near the mid-parental range.',
          ],
          callout: {
            type: 'tip',
            text: 'Want a rough idea of where your teen will end up? The mid-parental height formula gives a reasonable estimate with about a ±3.5-inch margin.',
          },
          link: {
            text: '→ Predict adult height with the free calculator',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'when-to-worry',
          heading: 'When to talk to the pediatrician',
          paragraphs: [
            'Most teen height worries need nothing but time. But do book a checkup if any of these apply — they are the same red flags pediatricians use:',
          ],
          bulletPoints: [
            'The growth curve is dropping: your teen is falling across percentile lines over several measurements (not just one low reading).',
            'No signs of puberty by age 13–14 in girls or 14–15 in boys.',
            'Growth has essentially stopped for more than a year while puberty milestones haven’t appeared.',
            'Puberty started very early (before 8 in girls, before 9 in boys) — early starters can end up shorter because growth plates close sooner.',
          ],
          callout: {
            type: 'note',
            text: 'A single short measurement, a bad year, or being the shortest in the class is not on this list. Patterns over time are what doctors act on.',
          },
        },
      ],
      faqs: [
        {
          question: 'Is 4\'7" short for a 14-year-old?',
          answer: 'For a 14-year-old boy who hasn’t started his growth spurt yet, it can be completely normal — boys’ spurts often don’t peak until 14, and late bloomers catch up. For a 14-year-old girl, it is below average (most girls are near their final height by this age), so it is worth tracking her growth curve and mentioning it at the next checkup. In both cases, the trend over the last year matters more than the number.',
        },
        {
          question: 'When do girls stop growing taller?',
          answer: 'Most girls grow fastest around age 12, then slow down significantly after their first period. After menarche they typically gain only another 1–3 inches over the next 2–3 years. By 14–16, growth is essentially complete for the vast majority of girls.',
        },
        {
          question: 'My son is shorter than all his friends — will he catch up?',
          answer: 'Very often, yes. Boys who bloom late frequently gain rapidly at 15–17 and finish at a height close to their genetic potential — sometimes taller than the friends who shot up early. The key question is whether he is showing puberty signs and still growing. If he is growing steadily along his own curve, patience is usually the right answer.',
        },
        {
          question: 'Can I still predict my teenager’s final height?',
          answer: 'Yes — the mid-parental height formula (based on both parents’ heights, adjusted for sex) works during the teen years too, with roughly a ±3.5-inch margin. It gets more accurate once puberty is underway, because the remaining growth window is clearer. Try the free calculator for an instant estimate.',
        },
      ],
      medicalDisclaimer: 'Educational content, not medical advice. Every teenager’s growth pattern is individual — only a pediatrician who follows your child over time can judge whether their growth is on track. If anything here worries you, that alone is reason enough to ask at the next checkup.',
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
      ],
    },
    pt: {
      id: 'teenager-height-normal',
      slug: 'altura-do-adolescente-e-normal',
      title: 'A Altura do Meu Filho Adolescente É Normal? Puberdade e Estirão do Crescimento',
      subtitle: 'O momento da puberdade explica quase todo adolescente "baixo demais" ou "alto demais". Veja o que é normal em cada fase — e o único padrão que realmente importa.',
      metaDescription: 'A altura do seu filho adolescente é normal? Cronograma da puberdade para meninas (10–14) e meninos (12–16), puberdade tardia, o que acompanhar e quando procurar o pediatra.',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6 min de leitura',
      badge: 'Guia para pais',
      tocTitle: 'Neste artigo',
      intro: {
        lead: 'Em quase todos os casos, sim — a altura do seu filho adolescente é normal. O momento da puberdade varia enormemente entre as crianças, e esse momento explica quase toda a diferença: um adolescente de 13 anos que ainda não teve o estirão pode ser uns 15 cm mais baixo que um amigo da mesma idade, e os dois estão perfeitamente saudáveis.',
        paragraphs: [
          'A confusão é compreensível. Entre os 12 e os 16 anos, as crianças estão espalhadas por todos os estágios da puberdade — algumas já terminaram, outras mal começaram. Comparar seu filho com os amigos da mesma idade é comparar crianças em cronogramas completamente diferentes.',
          'O que realmente importa não é o número da fita métrica hoje, mas o formato do crescimento do seu filho ao longo do tempo. Aqui está o cronograma esperado, o que acompanhar e o único sinal de alerta que merece uma consulta médica.',
        ],
      },
      sections: [
        {
          id: 'puberty-timeline',
          heading: 'O cronograma da puberdade: meninas 10–14, meninos 12–16',
          paragraphs: [
            'O estirão do crescimento é o período de crescimento mais rápido desde a infância, e ele chega em momentos diferentes para meninas e meninos:',
          ],
          bulletPoints: [
            'Meninas: o estirão geralmente começa por volta dos 10–11 anos, atinge o pico perto dos 12 (cerca de 7,5–9 cm por ano no pico) e desacelera após a primeira menstruação. A maioria das meninas está quase terminando de crescer entre 14 e 16 anos.',
            'Meninos: o estirão começa mais tarde, por volta dos 12–13 anos, e atinge o pico perto dos 14 (cerca de 9–10 cm por ano no pico). O crescimento continua mais devagar até o fim da adolescência — a maioria dos meninos atinge a altura final entre 16 e 18 anos.',
          ],
          callout: {
            type: 'tip',
            text: 'A primeira menstruação é um marco útil: após a menarca, as meninas costumam crescer apenas mais 2,5 a 7,5 cm no total, principalmente nos 2–3 anos seguintes. Depois disso, o crescimento está praticamente encerrado.',
          },
        },
        {
          id: 'late-bloomers',
          heading: 'Puberdade tardia e precoce: ambas normais',
          paragraphs: [
            'A genética define o cronograma. As crianças geralmente seguem o mesmo ritmo dos pais — se você foi uma puberdade tardia, seu filho provavelmente também será. Quem amadurece mais tarde costuma chegar à mesma altura que os outros; apenas chega lá depois, e o período de crescimento dura mais.',
            'É por isso que "meu filho é mais baixo que todos os amigos" é uma preocupação tão comum aos 13 ou 14 anos — e que se resolve sozinha na maioria das vezes. Um menino que começa o estirão aos 14 vai parecer baixo ao lado de um amigo que começou aos 12, e depois frequentemente alcança ou ultrapassa esse amigo aos 16.',
            'Confira o percentil do seu filho para ver onde ele está para a idade — mas lembre-se: o número importa menos que a tendência:',
          ],
          link: {
            text: '→ Confira o percentil de meninos ou meninas (grátis)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-to-track',
          heading: 'O que acompanhar de verdade (a curva, não o número)',
          paragraphs: [
            'Os pediatras não se preocupam com uma medida isolada — se preocupam com padrões. Veja como fazer o mesmo em casa:',
          ],
          bulletPoints: [
            'Meça a cada 6 meses: descalço, encostado na parede, de manhã, e anote a data de cada medição.',
            'Marque os pontos ao longo do tempo. Uma subida constante — mesmo lenta, mesmo num percentil baixo — é tranquilizadora.',
            'Anote os marcos da puberdade: nas meninas, desenvolvimento das mamas e primeira menstruação; nos meninos, aumento dos testículos e engrossamento da voz. O crescimento deve acelerar logo depois que eles começam.',
            'Compare com o padrão da sua própria família: a altura final costuma ficar perto da faixa da altura média parental.',
          ],
          callout: {
            type: 'tip',
            text: 'Quer uma ideia aproximada de onde seu filho vai chegar? A fórmula da altura média parental dá uma estimativa razoável, com margem de cerca de ±9 cm.',
          },
          link: {
            text: '→ Preveja a altura adulta com a calculadora gratuita',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'when-to-worry',
          heading: 'Quando conversar com o pediatra',
          paragraphs: [
            'A maioria das preocupações com a altura do adolescente só precisa de tempo. Mas marque uma consulta se algum destes pontos se aplicar — são os mesmos sinais de alerta que os pediatras usam:',
          ],
          bulletPoints: [
            'A curva de crescimento está caindo: seu filho está perdendo linhas de percentil ao longo de várias medições (não apenas uma medida baixa isolada).',
            'Sem sinais de puberdade até os 13–14 anos nas meninas ou 14–15 nos meninos.',
            'O crescimento praticamente parou por mais de um ano enquanto os marcos da puberdade não apareceram.',
            'A puberdade começou muito cedo (antes dos 8 nas meninas, antes dos 9 nos meninos) — quem começa cedo pode acabar mais baixo porque as placas de crescimento fecham mais rápido.',
          ],
          callout: {
            type: 'note',
            text: 'Uma medida baixa isolada, um ano ruim ou ser o mais baixo da turma não estão nesta lista. O que os médicos consideram são os padrões ao longo do tempo.',
          },
        },
      ],
      faqs: [
        {
          question: '1,40 m é baixo para um adolescente de 14 anos?',
          answer: 'Para um menino de 14 anos que ainda não começou o estirão, pode ser completamente normal — o pico do estirão nos meninos muitas vezes só chega aos 14, e quem amadurece tarde alcança os outros. Para uma menina de 14 anos, está abaixo da média (a maioria das meninas está perto da altura final nessa idade), então vale acompanhar a curva de crescimento e comentar na próxima consulta. Nos dois casos, a tendência do último ano importa mais que o número.',
        },
        {
          question: 'Quando as meninas param de crescer?',
          answer: 'A maioria das meninas cresce mais rápido por volta dos 12 anos e depois desacelera bastante após a primeira menstruação. Após a menarca, elas costumam ganhar apenas mais 2,5 a 7,5 cm nos 2–3 anos seguintes. Entre 14 e 16 anos, o crescimento está praticamente completo para a grande maioria das meninas.',
        },
        {
          question: 'Meu filho é mais baixo que todos os amigos — ele vai alcançar?',
          answer: 'Na maioria das vezes, sim. Meninos que amadurecem tarde frequentemente têm um ganho rápido entre 15 e 17 anos e terminam com uma altura próxima do seu potencial genético — às vezes mais altos que os amigos que esticaram cedo. A pergunta-chave é se ele está mostrando sinais de puberdade e continuando a crescer. Se está crescendo de forma constante na própria curva, a paciência costuma ser a resposta certa.',
        },
        {
          question: 'Ainda dá para prever a altura final do meu filho adolescente?',
          answer: 'Sim — a fórmula da altura média parental (baseada na altura dos dois pais, ajustada para o sexo) também funciona na adolescência, com margem de cerca de ±9 cm. Ela fica mais precisa quando a puberdade já está em andamento, porque a janela de crescimento restante fica mais clara. Teste a calculadora gratuita para uma estimativa imediata.',
        },
      ],
      medicalDisclaimer: 'Conteúdo educacional, não aconselhamento médico. O padrão de crescimento de cada adolescente é individual — apenas um pediatra que acompanha seu filho ao longo do tempo pode avaliar se o crescimento está no caminho certo. Se algo aqui te preocupou, isso por si só já é motivo suficiente para perguntar na próxima consulta.',
      relatedLinks: [
        {
          text: 'Percentil de altura dos meninos',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Percentil de altura das meninas',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Previsor de altura da criança',
          href: '/height-calculator/child-height-predictor/',
        },
      ],
    },
    es: {
      id: 'teenager-height-normal',
      slug: 'estatura-adolescente-es-normal',
      title: '¿La estatura de mi hijo adolescente es normal? Pubertad y estirones',
      subtitle: 'El momento de la pubertad explica casi todos los adolescentes «demasiado bajos» o «demasiado altos». Esto es lo que es normal en cada etapa — y el único patrón que de verdad importa.',
      metaDescription: '¿La estatura de mi adolescente es normal? Calendarios de pubertad para niñas (10–14) y niños (12–16), desarrollo tardío, qué medir y cuándo consultar al pediatra.',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6 min de lectura',
      badge: 'Guía para padres',
      tocTitle: 'En este artículo',
      intro: {
        lead: 'En casi todos los casos, sí: la estatura de tu hijo adolescente es normal. La pubertad llega en momentos muy distintos según cada niño, y ese desfase explica casi todas las diferencias: un chico de 13 años que aún no ha dado su estirón puede medir 6 pulgadas menos que un amigo de su misma edad y ambos estar perfectamente sanos.',
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
          answer: 'Para un chico de 14 años que aún no ha empezado su estirón, puede ser completamente normal: los estirones de los niños a menudo no alcanzan su pico hasta los 14, y los de desarrollo tardío se ponen al día. Para una chica de 14 años está por debajo del promedio (la mayoría de las niñas están cerca de su estatura final a esa edad), así que conviene seguir su curva de crecimiento y mencionarlo en la próxima revisión. En ambos casos, la tendencia del último año importa más que la cifra.',
        },
        {
          question: '¿Cuándo dejan de crecer las niñas?',
          answer: 'La mayoría de las niñas crecen más rápido alrededor de los 12 años y luego se frenan notablemente después de su primera menstruación. Tras la menarquia suelen ganar solo entre 1 y 3 pulgadas más durante los 2–3 años siguientes. A los 14–16 años, el crecimiento está prácticamente completo para la gran mayoría de las niñas.',
        },
        {
          question: 'Mi hijo es más bajo que todos sus amigos: ¿se pondrá al día?',
          answer: 'Muy a menudo, sí. Los niños de desarrollo tardío con frecuencia crecen rápidamente a los 15–17 y terminan con una estatura cercana a su potencial genético, a veces más altos que los amigos que dieron el estirón antes. La pregunta clave es si muestra signos de pubertad y sigue creciendo. Si crece de forma constante en su propia curva, la paciencia suele ser la respuesta correcta.',
        },
        {
          question: '¿Todavía puedo predecir la estatura final de mi hijo adolescente?',
          answer: 'Sí: la fórmula de la estatura media parental (basada en la estatura de ambos padres, ajustada por sexo) también funciona durante la adolescencia, con un margen aproximado de ±3,5 pulgadas. Se vuelve más precisa una vez que la pubertad está en marcha, porque el margen de crecimiento restante es más claro. Prueba la calculadora gratuita para una estimación instantánea.',
        },
      ],
      medicalDisclaimer: 'Contenido educativo, no consejo médico. El patrón de crecimiento de cada adolescente es individual: solo un pediatra que siga a tu hijo a lo largo del tiempo puede juzgar si su crecimiento va por buen camino. Si algo de lo aquí expuesto te preocupa, eso por sí solo ya es motivo suficiente para preguntar en la próxima revisión.',
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
      ],
    },
    fr: {
      id: 'teenager-height-normal',
      slug: 'taille-adolescent-normale',
      title: 'La taille de mon ado est-elle normale ? Puberté et poussées de croissance',
      subtitle: 'Le calendrier de la puberté explique presque tous les adolescents « trop petits » ou « trop grands ». Voici ce qui est normal à chaque étape — et le seul schéma qui compte vraiment.',
      metaDescription: 'La taille de mon adolescent est-elle normale ? Calendriers de puberté pour les filles (10–14 ans) et les garçons (12–16 ans), développeurs tardifs, quoi suivre, et quand consulter le pédiatre.',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6 min de lecture',
      badge: 'Guide pour les parents',
      tocTitle: 'Dans cet article',
      intro: {
        lead: 'Dans la quasi-totalité des cas, oui — la taille de votre adolescent est normale. Le calendrier de la puberté varie énormément d’un enfant à l’autre, et ce calendrier explique presque toutes les différences : un adolescent de 13 ans qui n’a pas encore commencé sa poussée de croissance peut mesurer 15 cm de moins qu’un ami du même âge, et les deux sont en parfaite santé.',
        paragraphs: [
          'La confusion est compréhensible. Entre 12 et 16 ans, les enfants sont répartis sur toutes les étapes de la puberté — certains ont terminé, d’autres ont à peine commencé. Comparer votre enfant à ses amis du même âge, c’est comparer des enfants qui suivent des calendriers complètement différents.',
          'Ce qui compte vraiment, ce n’est pas le chiffre sur le mètre ruban aujourd’hui, mais la forme de la croissance de votre enfant au fil du temps. Voici le calendrier à attendre, ce qu’il faut suivre, et le seul signe d’alerte qui mérite une visite chez le médecin.',
        ],
      },
      sections: [
        {
          id: 'puberty-timeline',
          heading: 'Le calendrier de la puberté : filles 10–14 ans, garçons 12–16 ans',
          paragraphs: [
            'La poussée de croissance est la période de croissance la plus rapide depuis la petite enfance, et elle arrive à des moments différents pour les filles et les garçons :',
          ],
          bulletPoints: [
            'Filles : la poussée commence généralement vers 10–11 ans, culmine vers 12 ans (environ 7 à 9 cm par an au pic), puis ralentit après les premières règles. La plupart des filles ont presque fini de grandir à 14–16 ans.',
            'Garçons : la poussée commence plus tard, vers 12–13 ans, et culmine vers 14 ans (environ 9 à 10 cm par an au pic). La croissance se poursuit plus progressivement jusqu’à la fin de l’adolescence — la plupart des garçons atteignent leur taille définitive vers 16–18 ans.',
          ],
          callout: {
            type: 'tip',
            text: 'Les premières règles sont un repère utile : après les premières règles, les filles grandissent généralement encore de 2 à 8 cm au total, principalement dans les 2 à 3 années qui suivent. Ensuite, la croissance est pratiquement terminée.',
          },
        },
        {
          id: 'late-bloomers',
          heading: 'Développeurs tardifs et précoces : les deux sont normaux',
          paragraphs: [
            'La génétique fixe le calendrier. Les enfants suivent généralement le même rythme que leurs parents — si vous étiez un développeur tardif, votre enfant le sera probablement aussi. Les développeurs tardifs finissent souvent aussi grands que tout le monde ; ils y arrivent simplement plus tard, et leur période de croissance dure plus longtemps.',
            'C’est pourquoi « mon fils est plus petit que tous ses amis » est une inquiétude si fréquente à 13 ou 14 ans — et qui se résout si souvent d’elle-même. Un garçon qui commence sa poussée à 14 ans paraîtra petit à côté d’un ami qui a commencé à 12 ans, puis le rattrape ou le dépasse fréquemment à 16 ans.',
            'Vérifiez le percentile de votre ado pour voir où il se situe pour son âge — mais n’oubliez pas, le chiffre compte moins que la tendance :',
          ],
          link: {
            text: '→ Vérifier le percentile des garçons ou des filles (gratuit)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-to-track',
          heading: 'Ce qu’il faut vraiment suivre (la courbe, pas le chiffre)',
          paragraphs: [
            'Les pédiatres ne s’inquiètent pas d’une mesure isolée — ils s’inquiètent des schémas. Voici comment faire la même chose à la maison :',
          ],
          bulletPoints: [
            'Mesurez tous les 6 mois : pieds nus, contre un mur, le matin, et notez la date à chaque fois.',
            'Tracez les points au fil du temps. Une montée régulière — même lente, même à un faible percentile — est rassurante.',
            'Notez les étapes de la puberté : pour les filles, le développement des seins et les premières règles ; pour les garçons, l’augmentation du volume testiculaire et la mue de la voix. La croissance devrait s’accélérer peu après le début de ces signes.',
            'Comparez avec le schéma familial : la taille définitive se situe généralement près de la fourchette de la taille parentale moyenne.',
          ],
          callout: {
            type: 'tip',
            text: 'Vous voulez une idée approximative de la taille finale de votre ado ? La formule de la taille parentale moyenne donne une estimation raisonnable avec une marge d’environ ±9 cm.',
          },
          link: {
            text: '→ Prédire la taille adulte avec le calculateur gratuit',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'when-to-worry',
          heading: 'Quand consulter le pédiatre',
          paragraphs: [
            'La plupart des inquiétudes sur la taille des ados n’ont besoin que de temps. Mais prenez rendez-vous si l’un de ces cas s’applique — ce sont les mêmes signaux d’alerte que les pédiatres utilisent :',
          ],
          bulletPoints: [
            'La courbe de croissance chute : votre ado perd des lignes de percentile sur plusieurs mesures (pas seulement une seule mesure basse).',
            'Aucun signe de puberté à 13–14 ans chez les filles ou 14–15 ans chez les garçons.',
            'La croissance s’est pratiquement arrêtée depuis plus d’un an alors que les étapes de la puberté ne sont pas apparues.',
            'La puberté a commencé très tôt (avant 8 ans chez les filles, avant 9 ans chez les garçons) — les développeurs précoces peuvent finir plus petits car les cartilages de croissance se ferment plus tôt.',
          ],
          callout: {
            type: 'note',
            text: 'Une seule mesure basse, une mauvaise année, ou être le plus petit de la classe ne figure pas sur cette liste. Ce sont les schémas dans le temps sur lesquels les médecins agissent.',
          },
        },
      ],
      faqs: [
        {
          question: 'Est-ce que 1,40 m, c’est petit pour un ado de 14 ans ?',
          answer: 'Pour un garçon de 14 ans qui n’a pas encore commencé sa poussée de croissance, cela peut être tout à fait normal — les poussées des garçons ne culminent souvent qu’à 14 ans, et les développeurs tardifs rattrapent leur retard. Pour une fille de 14 ans, c’est en dessous de la moyenne (la plupart des filles sont proches de leur taille définitive à cet âge), donc il vaut la peine de suivre sa courbe de croissance et d’en parler à la prochaine visite. Dans les deux cas, la tendance de la dernière année compte plus que le chiffre.',
        },
        {
          question: 'Quand les filles arrêtent-elles de grandir ?',
          answer: 'La plupart des filles grandissent le plus vite vers 12 ans, puis ralentissent nettement après leurs premières règles. Après les premières règles, elles ne gagnent généralement que 2 à 8 cm de plus sur les 2 à 3 années suivantes. À 14–16 ans, la croissance est pratiquement terminée pour l’immense majorité des filles.',
        },
        {
          question: 'Mon fils est plus petit que tous ses amis — va-t-il les rattraper ?',
          answer: 'Très souvent, oui. Les garçons qui se développent tard gagnent fréquemment beaucoup entre 15 et 17 ans et finissent à une taille proche de leur potentiel génétique — parfois plus grands que les amis qui ont poussé tôt. La vraie question est de savoir s’il montre des signes de puberté et s’il grandit toujours. S’il grandit régulièrement en suivant sa propre courbe, la patience est généralement la bonne réponse.',
        },
        {
          question: 'Puis-je encore prédire la taille définitive de mon adolescent ?',
          answer: 'Oui — la formule de la taille parentale moyenne (basée sur les tailles des deux parents, ajustée selon le sexe) fonctionne aussi pendant l’adolescence, avec une marge d’environ ±9 cm. Elle devient plus précise une fois la puberté bien engagée, car la fenêtre de croissance restante est plus claire. Essayez le calculateur gratuit pour une estimation instantanée.',
        },
      ],
      medicalDisclaimer: 'Contenu éducatif, non un avis médical. Le schéma de croissance de chaque adolescent est individuel — seul un pédiatre qui suit votre enfant dans le temps peut juger si sa croissance est sur la bonne voie. Si quelque chose ici vous inquiète, c’est déjà une raison suffisante pour en parler à la prochaine visite.',
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
          text: 'Prédicteur de taille adulte',
          href: '/height-calculator/child-height-predictor/',
        },
      ],
    },
    de: {
      id: 'teenager-height-normal',
      slug: 'ist-die-groesse-meines-teenagers-normal',
      title: 'Ist die Größe meines Teenagers normal? Pubertät & Wachstumsschübe',
      subtitle: 'Der Zeitpunkt der Pubertät erklärt fast jeden „zu kleinen" oder „zu großen" Teenager. Hier erfahren Sie, was in welcher Phase normal ist – und welches Muster wirklich zählt.',
      metaDescription: 'Ist die Größe meines Teenagers normal? Pubertäts-Zeitpläne für Mädchen (10–14) und Jungen (12–16), Spätzünder, was man beobachten sollte und wann zum Kinderarzt.',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6 Min. Lesezeit',
      badge: 'Ratgeber für Eltern',
      tocTitle: 'In diesem Artikel',
      intro: {
        lead: 'In fast allen Fällen: ja – die Größe Ihres Teenagers ist normal. Der Zeitpunkt der Pubertät schwankt enorm zwischen Kindern, und genau dieser Zeitpunkt erklärt nahezu alle Unterschiede: Ein 13-Jähriger, dessen Wachstumsschub noch nicht begonnen hat, kann 15 cm kleiner sein als ein gleichaltriger Freund – und beide sind völlig gesund.',
        paragraphs: [
          'Die Verwirrung ist verständlich. Zwischen 12 und 16 Jahren verteilen sich Kinder über alle Phasen der Pubertät – manche sind schon fertig, andere haben kaum angefangen. Sein Kind mit gleichaltrigen Freunden zu vergleichen heißt, Kinder mit völlig unterschiedlichen Zeitplänen zu vergleichen.',
          'Was wirklich zählt, ist nicht die Zahl auf dem Maßband heute, sondern die Form des Wachstumsverlaufs Ihres Kindes über die Zeit. Hier ist der zu erwartende Zeitplan, was Sie beobachten sollten und das eine Warnzeichen, das einen Arztbesuch wert ist.',
        ],
      },
      sections: [
        {
          id: 'puberty-timeline',
          heading: 'Der Pubertäts-Zeitplan: Mädchen 10–14, Jungen 12–16',
          paragraphs: [
            'Der Wachstumsschub ist die schnellste Wachstumsphase seit dem Säuglingsalter – und er kommt bei Mädchen und Jungen zu unterschiedlichen Zeitpunkten:',
          ],
          bulletPoints: [
            'Mädchen: Der Schub beginnt meist um das 10.–11. Lebensjahr, erreicht seinen Höhepunkt etwa mit 12 Jahren (Spitzenwachstum ca. 8–9 cm pro Jahr) und flacht nach der ersten Periode ab. Die meisten Mädchen sind mit 14–16 Jahren nahezu ausgewachsen.',
            'Jungen: Der Schub setzt später ein, etwa mit 12–13 Jahren, und erreicht seinen Höhepunkt um das 14. Lebensjahr (Spitzenwachstum ca. 9–10 cm pro Jahr). Danach geht das Wachstum bis in die späten Teenagerjahre langsamer weiter – die meisten Jungen erreichen ihre Endgröße mit 16–18.',
          ],
          callout: {
            type: 'tip',
            text: 'Die erste Periode ist ein nützlicher Meilenstein: Nach der Menarche wachsen Mädchen insgesamt noch etwa 2,5–8 cm, größtenteils innerhalb von 2–3 Jahren. Danach ist das Wachstum im Wesentlichen abgeschlossen.',
          },
        },
        {
          id: 'late-bloomers',
          heading: 'Spätzünder und Frühentwickler: beides normal',
          paragraphs: [
            'Die Gene bestimmen den Zeitplan. Kinder folgen meist dem gleichen Timing wie ihre Eltern – wenn Sie selbst ein Spätzünder waren, ist Ihr Kind es wahrscheinlich auch. Spätzünder werden am Ende oft genauso groß wie alle anderen; sie brauchen einfach länger, und ihre Wachstumsphase dauert länger an.',
            'Deshalb ist „mein Sohn ist kleiner als alle seine Freunde" mit 13 oder 14 Jahren eine so häufige Sorge – und sie löst sich so oft von selbst. Ein Junge, dessen Schub erst mit 14 beginnt, wirkt klein neben einem Freund, der mit 12 gestartet ist, holt ihn aber bis 16 häufig ein oder überholt ihn.',
            'Prüfen Sie das Perzentil Ihres Teenagers, um zu sehen, wo er für sein Alter steht – aber denken Sie daran: Die Zahl zählt weniger als der Trend:',
          ],
          link: {
            text: '→ Perzentil für Jungen oder Mädchen prüfen (kostenlos)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-to-track',
          heading: 'Was man wirklich beobachten sollte (die Kurve, nicht die Zahl)',
          paragraphs: [
            'Kinderärzte sorgen sich nicht über eine einzelne Messung – sie achten auf Muster. So machen Sie es zu Hause genauso:',
          ],
          bulletPoints: [
            'Alle 6 Monate messen: barfuß, an einer Wand, morgens, und jedes Mal das Datum notieren.',
            'Die Punkte über die Zeit auftragen. Ein stetiger Anstieg – auch ein langsamer, auch auf einem niedrigen Perzentil – ist beruhigend.',
            'Pubertäts-Meilensteine notieren: bei Mädchen Brustentwicklung und erste Periode; bei Jungen Hodenvergrößerung und Stimmbruch. Kurz nach deren Beginn sollte sich das Wachstum beschleunigen.',
            'Mit dem eigenen Familienmuster vergleichen: Die Endgröße landet meist nahe am mittleren Elternbereich.',
          ],
          callout: {
            type: 'tip',
            text: 'Sie möchten eine grobe Vorstellung, wo Ihr Teenager landen wird? Die Formel der mittleren Elterngröße liefert eine vernünftige Schätzung mit etwa ±9 cm Spielraum.',
          },
          link: {
            text: '→ Erwachsenengröße mit dem kostenlosen Rechner vorhersagen',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'when-to-worry',
          heading: 'Wann Sie mit dem Kinderarzt sprechen sollten',
          paragraphs: [
            'Die meisten Sorgen um die Teenagergröße brauchen nichts als Zeit. Vereinbaren Sie aber einen Termin, wenn einer dieser Punkte zutrifft – es sind dieselben Warnzeichen, die auch Kinderärzte nutzen:',
          ],
          bulletPoints: [
            'Die Wachstumskurve fällt ab: Ihr Teenager rutscht über mehrere Messungen hinweg über Perzentillinien nach unten (nicht nur eine einzelne niedrige Messung).',
            'Keine Pubertätszeichen bis 13–14 Jahre bei Mädchen bzw. 14–15 Jahre bei Jungen.',
            'Das Wachstum ist seit mehr als einem Jahr praktisch gestoppt, ohne dass Pubertätszeichen aufgetreten sind.',
            'Die Pubertät begann sehr früh (vor 8 Jahren bei Mädchen, vor 9 Jahren bei Jungen) – Frühstarter können kleiner bleiben, weil sich die Wachstumsfugen früher schließen.',
          ],
          callout: {
            type: 'note',
            text: 'Eine einzelne niedrige Messung, ein schlechtes Jahr oder der Kleinste in der Klasse zu sein steht nicht auf dieser Liste. Muster über die Zeit sind es, worauf Ärzte reagieren.',
          },
        },
      ],
      faqs: [
        {
          question: 'Sind 140 cm (4\'7") klein für einen 14-Jährigen?',
          answer: 'Für einen 14-jährigen Jungen, dessen Wachstumsschub noch nicht begonnen hat, kann das völlig normal sein – bei Jungen erreicht der Schub oft erst mit 14 seinen Höhepunkt, und Spätzünder holen auf. Für ein 14-jähriges Mädchen liegt es unter dem Durchschnitt (die meisten Mädchen sind in diesem Alter fast ausgewachsen), daher lohnt es sich, ihre Wachstumskurve zu verfolgen und es beim nächsten Check-up anzusprechen. In beiden Fällen zählt der Trend des letzten Jahres mehr als die Zahl.',
        },
        {
          question: 'Wann hören Mädchen auf, in die Höhe zu wachsen?',
          answer: 'Die meisten Mädchen wachsen um das 12. Lebensjahr am schnellsten und verlangsamen sich nach der ersten Periode deutlich. Nach der Menarche kommen meist nur noch etwa 2,5–8 cm in den folgenden 2–3 Jahren hinzu. Mit 14–16 Jahren ist das Wachstum bei der großen Mehrheit der Mädchen im Wesentlichen abgeschlossen.',
        },
        {
          question: 'Mein Sohn ist kleiner als alle seine Freunde – holt er noch auf?',
          answer: 'Sehr oft, ja. Jungen, die spät aufblühen, legen mit 15–17 häufig rasant zu und erreichen am Ende eine Größe nahe ihrem genetischen Potenzial – manchmal größer als die Freunde, die früh in die Höhe geschossen sind. Die entscheidende Frage ist, ob er Pubertätszeichen zeigt und weiter wächst. Wenn er stetig entlang seiner eigenen Kurve wächst, ist Geduld meist die richtige Antwort.',
        },
        {
          question: 'Kann man die Endgröße meines Teenagers noch vorhersagen?',
          answer: 'Ja – die Formel der mittleren Elterngröße (basierend auf der Größe beider Eltern, angepasst ans Geschlecht) funktioniert auch in den Teenagerjahren, mit etwa ±9 cm Spielraum. Sie wird genauer, sobald die Pubertät im Gange ist, weil das verbleibende Wachstumsfenster klarer ist. Probieren Sie den kostenlosen Rechner für eine sofortige Schätzung.',
        },
      ],
      medicalDisclaimer: 'Bildungsinhalt, keine medizinische Beratung. Das Wachstumsmuster jedes Teenagers ist individuell – nur ein Kinderarzt, der Ihr Kind über die Zeit begleitet, kann beurteilen, ob sein Wachstum auf Kurs ist. Wenn Sie etwas hier beunruhigt, ist das allein schon Grund genug, es beim nächsten Check-up anzusprechen.',
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
          text: 'Vorhersage der Kindergröße',
          href: '/height-calculator/child-height-predictor/',
        },
      ],
    },
    hi: {
      id: 'teenager-height-normal',
      slug: 'kishore-avastha-me-unchai-samanya-hai',
      title: 'क्या मेरे किशोर की ऊंचाई सामान्य है? युवावस्था और वृद्धि-उछाल',
      subtitle: 'युवावस्था का समय लगभग हर "बहुत छोटा" या "बहुत लंबा" किशोर की व्याख्या करता है। जानिए हर चरण में क्या सामान्य है — और वह एक पैटर्न जो सच में मायने रखता है।',
      metaDescription: 'क्या मेरे किशोर की ऊंचाई सामान्य है? लड़कियों (10–14) और लड़कों (12–16) के लिए युवावस्था की समयसीमा, देर से बढ़ने वाले बच्चे, क्या ट्रैक करें, और बाल रोग विशेषज्ञ से कब मिलें।',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6 मिनट में पढ़ें',
      badge: 'माता-पिता के लिए मार्गदर्शिका',
      tocTitle: 'इस लेख में',
      intro: {
        lead: 'लगभग हर मामले में, हाँ — आपके किशोर की ऊंचाई सामान्य है। बच्चों में युवावस्था का समय बहुत अलग-अलग होता है, और यही समय लगभग सारे अंतर की व्याख्या करता है: एक 13 साल का बच्चा जिसका वृद्धि-उछाल अभी शुरू नहीं हुआ है, उसी उम्र के दोस्त से 6 इंच छोटा हो सकता है — और दोनों बिल्कुल स्वस्थ हैं।',
        paragraphs: [
          'यह उलझन समझ में आती है। 12 से 16 साल की उम्र के बीच, बच्चे युवावस्था के हर चरण में बिखरे होते हैं — कुछ पूरी कर चुके हैं, कुछ की अभी शुरुआत ही हुई है। अपने बच्चे की उसी उम्र के दोस्तों से तुलना करना मतलब पूरी तरह अलग समय-सारणी पर चल रहे बच्चों की तुलना करना है।',
          'असल में जो मायने रखता है वह आज टेप पर आया नंबर नहीं, बल्कि समय के साथ आपके बच्चे की वृद्धि का आकार है। यहाँ अपेक्षित समयसीमा दी गई है, क्या ट्रैक करना है, और डॉक्टर के पास जाने लायक एक चेतावनी संकेत।',
        ],
      },
      sections: [
        {
          id: 'puberty-timeline',
          heading: 'युवावस्था वृद्धि समयसीमा: लड़कियाँ 10–14, लड़के 12–16',
          paragraphs: [
            'वृद्धि-उछाल शिशुकाल के बाद सबसे तेज़ वृद्धि की अवधि है, और यह लड़कियों और लड़कों के लिए अलग-अलग समय पर आता है:',
          ],
          bulletPoints: [
            'लड़कियाँ: उछाल आमतौर पर 10–11 साल की उम्र में शुरू होता है, 12 साल की उम्र के आसपास चरम पर पहुँचता है (चरम पर लगभग 3–3.5 इंच प्रति वर्ष), और पहले मासिक धर्म के बाद धीमा हो जाता है। अधिकांश लड़कियों की वृद्धि 14–16 साल तक लगभग पूरी हो जाती है।',
            'लड़के: उछाल बाद में शुरू होता है, लगभग 12–13 साल की उम्र में, और 14 साल के आसपास चरम पर पहुँचता है (चरम पर लगभग 3.5–4 इंच प्रति वर्ष)। वृद्धि किशोरावस्था के अंत तक धीरे-धीरे जारी रहती है — अधिकांश लड़के 16–18 साल तक अंतिम ऊंचाई प्राप्त कर लेते हैं।',
          ],
          callout: {
            type: 'tip',
            text: 'लड़की का पहला मासिक धर्म एक उपयोगी मील का पत्थर है: मासिक धर्म शुरू होने के बाद, लड़कियाँ आमतौर पर कुल मिलाकर 1–3 इंच और बढ़ती हैं, ज़्यादातर 2–3 साल के भीतर। उसके बाद, वृद्धि अनिवार्य रूप से पूरी हो जाती है।',
          },
        },
        {
          id: 'late-bloomers',
          heading: 'देर से बढ़ने वाले और जल्दी विकसित होने वाले: दोनों सामान्य',
          paragraphs: [
            'आनुवंशिकी समय-सारणी तय करती है। बच्चे आमतौर पर अपने माता-पिता के समान ही समय का पालन करते हैं — अगर आप देर से बढ़े थे, तो आपका बच्चा भी संभवतः देर से बढ़ेगा। देर से बढ़ने वाले बच्चे अक्सर बाकी सभी की तरह ही लंबे हो जाते हैं; वे बस वहाँ देर से पहुँचते हैं, और उनकी वृद्धि अवधि लंबी चलती है।',
            'इसीलिए "मेरा बेटा अपने सभी दोस्तों से छोटा है" 13 या 14 साल की उम्र में इतनी आम चिंता है — और इतनी बार अपने आप सुलझ जाती है। एक लड़का जिसका उछाल 14 साल में शुरू होता है, उस दोस्त के सामने छोटा लगेगा जिसका उछाल 12 में शुरू हुआ था, फिर अक्सर 16 तक बराबरी कर लेता है या उससे आगे निकल जाता है।',
            'अपने किशोर का पर्सेंटाइल देखें ताकि पता चले कि अपनी उम्र के हिसाब से वे कहाँ खड़े हैं — लेकिन याद रखें, रुझान से नंबर कम मायने रखता है:',
          ],
          link: {
            text: '→ लड़कों या लड़कियों का पर्सेंटाइल देखें (मुफ़्त)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-to-track',
          heading: 'असल में क्या ट्रैक करें (वक्र, नंबर नहीं)',
          paragraphs: [
            'बाल रोग विशेषज्ञ एक माप को लेकर चिंतित नहीं होते — वे पैटर्न को लेकर चिंतित होते हैं। घर पर भी यही करने का तरीका यहाँ है:',
          ],
          bulletPoints: [
            'हर 6 महीने में मापें: नंगे पैर, दीवार के सहारे, सुबह के समय, और हर बार तारीख़ लिख लें।',
            'समय के साथ बिंदुओं को प्लॉट करें। एक स्थिर चढ़ाई — भले ही धीमी हो, भले ही कम पर्सेंटाइल पर हो — आश्वस्त करने वाली है।',
            'युवावस्था के मील के पत्थर नोट करें: लड़कियों के लिए, स्तन विकास और पहला मासिक धर्म; लड़कों के लिए, अंडकोष का बढ़ना और आवाज़ का भारी होना। इनके शुरू होने के कुछ समय बाद वृद्धि तेज़ होनी चाहिए।',
            'अपने परिवार के पैटर्न से तुलना करें: अंतिम ऊंचाई आमतौर पर मध्य-माता-पिता (mid-parental) सीमा के आसपास होती है।',
          ],
          callout: {
            type: 'tip',
            text: 'यह जानना चाहते हैं कि आपका किशोर अंततः कितना लंबा होगा? मध्य-माता-पिता ऊंचाई सूत्र लगभग ±3.5 इंच के अंतर के साथ एक उचित अनुमान देता है।',
          },
          link: {
            text: '→ मुफ़्त कैलकुलेटर से वयस्क ऊंचाई का अनुमान लगाएँ',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'when-to-worry',
          heading: 'बाल रोग विशेषज्ञ से कब बात करें',
          paragraphs: [
            'किशोर ऊंचाई की अधिकांश चिंताओं को समय के अलावा कुछ नहीं चाहिए। लेकिन अगर इनमें से कोई भी लागू होता है तो जाँच ज़रूर करवाएँ — ये वही लाल झंडे हैं जिनका बाल रोग विशेषज्ञ उपयोग करते हैं:',
          ],
          bulletPoints: [
            'वृद्धि वक्र गिर रहा है: आपका किशोर कई मापों में पर्सेंटाइल रेखाओं से नीचे गिर रहा है (सिर्फ़ एक कम रीडिंग नहीं)।',
            'लड़कियों में 13–14 साल तक या लड़कों में 14–15 साल तक युवावस्था के कोई संकेत नहीं।',
            'एक साल से ज़्यादा समय से वृद्धि अनिवार्य रूप से रुक गई है जबकि युवावस्था के मील के पत्थर नहीं आए हैं।',
            'युवावस्था बहुत जल्दी शुरू हुई (लड़कियों में 8 से पहले, लड़कों में 9 से पहले) — जल्दी शुरू करने वालों की वृद्धि प्लेटें जल्दी बंद हो जाती हैं, इसलिए वे छोटे रह सकते हैं।',
          ],
          callout: {
            type: 'note',
            text: 'एक छोटी माप, एक खराब साल, या कक्षा में सबसे छोटा होना इस सूची में नहीं है। समय के साथ पैटर्न ही वह है जिस पर डॉक्टर कार्रवाई करते हैं।',
          },
        },
      ],
      faqs: [
        {
          question: 'क्या 4 फ़ुट 7 इंच 14 साल के बच्चे के लिए छोटा है?',
          answer: '14 साल के लड़के के लिए जिसका वृद्धि-उछाल अभी शुरू नहीं हुआ है, यह बिल्कुल सामान्य हो सकता है — लड़कों का उछाल अक्सर 14 तक चरम पर नहीं पहुँचता, और देर से बढ़ने वाले बच्चे बराबरी कर लेते हैं। 14 साल की लड़की के लिए, यह औसत से नीचे है (अधिकांश लड़कियाँ इस उम्र तक अपनी अंतिम ऊंचाई के करीब होती हैं), इसलिए उसके वृद्धि वक्र को ट्रैक करना और अगली जाँच में इसका ज़िक्र करना उचित है। दोनों ही मामलों में, पिछले एक साल का रुझान नंबर से ज़्यादा मायने रखता है।',
        },
        {
          question: 'लड़कियाँ लंबी बढ़ना कब बंद करती हैं?',
          answer: 'अधिकांश लड़कियाँ 12 साल की उम्र के आसपास सबसे तेज़ बढ़ती हैं, फिर पहले मासिक धर्म के बाद काफी धीमी हो जाती हैं। मासिक धर्म शुरू होने के बाद वे आमतौर पर अगले 2–3 साल में सिर्फ़ 1–3 इंच और बढ़ती हैं। 14–16 साल तक, अधिकांश लड़कियों की वृद्धि अनिवार्य रूप से पूरी हो जाती है।',
        },
        {
          question: 'मेरा बेटा अपने सभी दोस्तों से छोटा है — क्या वह बराबरी कर लेगा?',
          answer: 'बहुत अक्सर, हाँ। देर से खिलने वाले लड़के अक्सर 15–17 साल में तेज़ी से बढ़ते हैं और अपनी आनुवंशिक क्षमता के करीब ऊंचाई पर पहुँचते हैं — कभी-कभी उन दोस्तों से भी लंबे जो जल्दी बढ़े थे। असली सवाल यह है कि क्या उसमें युवावस्था के संकेत दिख रहे हैं और वह अभी भी बढ़ रहा है। अगर वह अपने वक्र पर स्थिरता से बढ़ रहा है, तो धैर्य आमतौर पर सही जवाब है।',
        },
        {
          question: 'क्या मैं अभी भी अपने किशोर की अंतिम ऊंचाई का अनुमान लगा सकता हूँ?',
          answer: 'हाँ — मध्य-माता-पिता ऊंचाई सूत्र (दोनों माता-पिता की ऊंचाई पर आधारित, लिंग के अनुसार समायोजित) किशोर वर्षों में भी काम करता है, लगभग ±3.5 इंच के अंतर के साथ। युवावस्था शुरू होने के बाद यह और सटीक हो जाता है, क्योंकि बची हुई वृद्धि अवधि स्पष्ट हो जाती है। तुरंत अनुमान के लिए मुफ़्त कैलकुलेटर आज़माएँ।',
        },
      ],
      medicalDisclaimer: 'शैक्षिक सामग्री, चिकित्सीय सलाह नहीं। हर किशोर की वृद्धि का पैटर्न व्यक्तिगत होता है — केवल एक बाल रोग विशेषज्ञ जो समय के साथ आपके बच्चे का अनुसरण करता है, यह आंक सकता है कि उनकी वृद्धि सही दिशा में है या नहीं। अगर यहाँ की कोई बात आपको चिंतित करती है, तो अकेले यही अगली जाँच में पूछने का पर्याप्त कारण है।',
      relatedLinks: [
        {
          text: 'लड़कों का ऊंचाई पर्सेंटाइल',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'लड़कियों का ऊंचाई पर्सेंटाइल',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'बच्चे की वयस्क ऊंचाई का अनुमान',
          href: '/height-calculator/child-height-predictor/',
        },
      ],
    },
    ja: {
      id: 'teenager-height-normal',
      slug: 'shishunki-shincho-seijo',
      title: '思春期の子どもの身長は正常？成長スパートと puberty の関係',
      subtitle: '「背が低すぎる」「高すぎる」と心配な思春期のお子さん——そのほとんどは思春期のタイミングの違いで説明できます。各段階で何が正常か、そして本当に重要な1つのパターンを解説します。',
      metaDescription: '思春期の子どもの身長は正常？女子（10〜14歳）・男子（12〜16歳）の思春期タイムライン、遅咲きタイプ、記録すべきポイント、小児科に相談すべきタイミング。',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6分で読める',
      badge: '保護者向けガイド',
      tocTitle: 'この記事の内容',
      intro: {
        lead: 'ほとんどの場合、答えは「はい、正常です」。思春期が始まるタイミングは子どもによって大きく異なり、その違いが身長の差のほぼすべてを説明します。成長スパートがまだ始まっていない13歳は、同い年の友達より15cm（約6インチ）低くても、どちらもまったく健康です。',
        paragraphs: [
          '混乱するのも無理はありません。12歳から16歳の間、子どもたちは思春期のあらゆる段階に散らばっています——終わった子もいれば、まだ始まったばかりの子もいるのです。同い年の友達と比べることは、まったく異なるスケジュールで走っている子ども同士を比べるようなものです。',
          '本当に重要なのは、今日のメジャーの数字ではなく、お子さんの成長の「形」です。ここでは、予想されるタイムライン、記録すべきこと、そして受診を検討すべき1つの警告サインを解説します。',
        ],
      },
      sections: [
        {
          id: 'puberty-timeline',
          heading: '思春期の成長タイムライン：女子10〜14歳、男子12〜16歳',
          paragraphs: [
            '成長スパートは、乳児期以来もっとも急速な成長の時期です。女子と男子では到来するスケジュールが異なります。',
          ],
          bulletPoints: [
            '女子：スパートは通常10〜11歳ごろに始まり、12歳ごろにピークを迎え（ピーク時は年間約8〜9cm伸びます）、初潮の後に鈍化します。ほとんどの女子は14〜16歳までにほぼ成長を終えます。',
            '男子：スパートはそれより遅く、12〜13歳ごろに始まり、14歳ごろにピークを迎えます（ピーク時は年間約9〜10cm）。その後も10代後半にかけて緩やかに成長が続き、ほとんどの男子は16〜18歳ごろに最終身長に達します。',
          ],
          callout: {
            type: 'tip',
            text: '女子の初潮は便利な目安になります。初潮の後、女子は通常あと合計2.5〜7.5cm（1〜3インチ）ほど伸び、そのほとんどは2〜3年以内です。それ以降の成長は基本的に終了です。',
          },
        },
        {
          id: 'late-bloomers',
          heading: '遅咲きも早咲きも、どちらも正常',
          paragraphs: [
            'スケジュールを決めるのは遺伝です。子どもはたいてい親と同じタイミングをたどります——あなたが遅咲きだったなら、お子さんもおそらく遅咲きです。遅咲きの子は、最終的にはみんなと同じくらいの身長になることが多く、ただ到達するのが遅いだけで、成長期間が長く続くのです。',
            'だからこそ「うちの子は友達より背が低い」という悩みが13〜14歳でよく聞かれ、そして多くの場合自然に解決します。スパートが14歳で始まる男子は、12歳で始めた友達の隣では低く見えますが、16歳までには追いつき、追い越すこともよくあります。',
            'お子さんが同年齢の中でどの位置にいるか、パーセンタイルで確認してみましょう——ただし、数字そのものより「変化の傾向」が大切だということを忘れないでください。',
          ],
          link: {
            text: '→ 男子・女子のパーセンタイルを確認する（無料）',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-to-track',
          heading: '記録すべきは「カーブ」であって「数字」ではない',
          paragraphs: [
            '小児科医が心配するのは1回の測定値ではなく、パターンです。家庭でも同じように記録できます。',
          ],
          bulletPoints: [
            '6か月ごとに測定する：裸足で壁に背をつけ、朝に測り、毎回日付を記録する。',
            '測定値を時系列でプロットする。たとえゆっくりでも、たとえ低いパーセンタイルでも、安定して伸びていれば安心です。',
            '思春期のマイルストーンを記録する：女子は乳房の発達と初潮、男子は精巣の増大と声変わり。これらが始まった直後から成長が加速するはずです。',
            '自分の家族のパターンと比べる：最終身長は通常、両親の中間値（ミッドペアレンタル）の範囲に収まります。',
          ],
          callout: {
            type: 'tip',
            text: 'お子さんが最終的にどのくらいになるか、おおよその目安が知りたいですか？ミッドペアレンタル身長の計算式なら、約±9cm（±3.5インチ）の誤差で妥当な推定ができます。',
          },
          link: {
            text: '→ 無料計算機で将来の身長を予測する',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'when-to-worry',
          heading: '小児科に相談すべきタイミング',
          paragraphs: [
            '思春期の身長の悩みのほとんどは、時間だけが解決策です。ただし、以下に当てはまる場合は受診を予約しましょう——小児科医が使うのと同じレッドフラグです。',
          ],
          bulletPoints: [
            '成長曲線が下降している：数回の測定にわたってパーセンタイルのラインを下がり続けている（1回だけ低い値が出た場合ではありません）。',
            '女子で13〜14歳、男子で14〜15歳になっても思春期の兆候が見られない。',
            '思春期のマイルストーンが現れないまま、1年以上ほとんど成長が止まっている。',
            '思春期がとても早く始まった（女子で8歳未満、男子で9歳未満）——早咲きは成長板が早く閉じるため、最終的に低くなることがあります。',
          ],
          callout: {
            type: 'note',
            text: '1回だけの低い測定値、伸び悩んだ1年、クラスで一番背が低いこと——これらはこのリストには入りません。医師が行動を起こすのは、時間をかけたパターンです。',
          },
        },
      ],
      faqs: [
        {
          question: '14歳で142cm（4フィート7インチ）は低いですか？',
          answer: '成長スパートがまだ始まっていない14歳の男子なら、まったく正常な範囲です——男子のスパートは14歳ごろにピークを迎えることが多く、遅咲きは追いつきます。14歳の女子の場合は平均より低めです（この年齢の女子はほぼ最終身長に近いため）、成長曲線を記録し、次の健診で相談する価値があります。どちらの場合も、数字そのものより過去1年間の「傾向」が重要です。',
        },
        {
          question: '女子の身長はいつ止まりますか？',
          answer: 'ほとんどの女子は12歳ごろにもっとも速く伸び、初潮の後に大きく鈍化します。初潮後は通常2〜3年かけてあと2.5〜7.5cm（1〜3インチ）ほど伸びるだけです。14〜16歳までに、女子の大多数の成長は基本的に完了します。',
        },
        {
          question: 'うちの息子は友達よりみんな低いですが、追いつきますか？',
          answer: '多くの場合、はい。遅咲きの男子は15〜17歳で急激に伸び、遺伝的な潜在身長に近い高さで終わることがよくあります——早く伸びた友達より最終的に高くなることもあります。重要なのは、思春期の兆候が見られ、自分のカーブに沿って着実に伸びているかどうかです。順調に伸びているなら、待つことがたいてい正解です。',
        },
        {
          question: '思春期の子どもの最終身長はまだ予測できますか？',
          answer: 'はい——両親の身長をもとにしたミッドペアレンタル身長の計算式（性別で調整）は、思春期にも使え、誤差は約±9cm（±3.5インチ）です。思春期が始まってからのほうが、残りの成長期間がはっきりするため精度が上がります。無料計算機で今すぐ推定してみましょう。',
        },
      ],
      medicalDisclaimer: '本コンテンツは教育目的であり、医療アドバイスではありません。思春期の成長パターンは一人ひとり異なります——お子さんの成長が順調かどうか判断できるのは、継続的に診ている小児科医だけです。ここで気になることがあれば、次の健診で相談する十分な理由になります。',
      relatedLinks: [
        {
          text: '男子の身長パーセンタイル',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: '女子の身長パーセンタイル',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: '子どもの将来身長予測',
          href: '/height-calculator/child-height-predictor/',
        },
      ],
    },
    ko: {
      id: 'teenager-height-normal',
      slug: 'sibdae-ki-jeongsang',
      title: '십대 자녀의 키, 정상일까요? 사춘기와 성장급등기',
      subtitle: '사춘기 시기가 십대의 "너무 작다" 또는 "너무 크다"는 걱정의 거의 모든 것을 설명합니다. 시기별 정상 범위와, 진짜 중요한 하나의 패턴을 확인하세요.',
      metaDescription: '우리 아이 키 정상인가요? 여아(10–14세)와 남아(12–16세)의 사춘기 타임라인, 늦게 크는 아이, 무엇을 기록해야 하는지, 소아과에 가야 할 때.',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6분 읽기',
      badge: '부모님 가이드',
      tocTitle: '이 글의 목차',
      intro: {
        lead: '거의 모든 경우에 답은 "네, 정상입니다"입니다. 사춘기 시기는 아이마다 크게 다르고, 그 시기 차이가 키 차이의 대부분을 설명합니다. 성장급등기가 아직 시작되지 않은 13살은 같은 나이 친구보다 15cm가량 작을 수 있지만, 둘 다 완전히 건강합니다.',
        paragraphs: [
          '헷갈리는 것도 당연합니다. 12세에서 16세 사이 아이들은 사춘기의 모든 단계에 흩어져 있습니다. 어떤 아이는 이미 끝났고, 어떤 아이는 이제 막 시작했습니다. 같은 나이 친구와 비교하는 것은 완전히 다른 시간표 위에 있는 아이들을 비교하는 셈입니다.',
          '진짜 중요한 것은 오늘 줄자로 잰 숫자가 아니라, 아이의 성장이 시간에 따라 그리는 모양입니다. 예상 타임라인, 기록해야 할 것, 그리고 병원 방문이 필요한 유일한 경고 신호를 정리했습니다.',
        ],
      },
      sections: [
        {
          id: 'puberty-timeline',
          heading: '사춘기 성장 타임라인: 여아 10–14세, 남아 12–16세',
          paragraphs: [
            '성장급등기는 유아기 이후 가장 빠른 성장 시기로, 여아와 남아에게 서로 다른 시간표로 찾아옵니다:',
          ],
          bulletPoints: [
            '여아: 급등기는 보통 10–11세쯤 시작해 12세 전후에 정점을 찍고(정점기 연간 약 8cm), 초경 이후 속도가 느려집니다. 대부분 14–16세면 성장이 거의 끝납니다.',
            '남아: 급등기는 더 늦게, 12–13세쯤 시작해 14세 전후에 정점을 찍습니다(정점기 연간 약 9–10cm). 이후 10대 후반까지 더 완만하게 자라, 대부분 16–18세에 최종 키에 도달합니다.',
          ],
          callout: {
            type: 'tip',
            text: '여아의 초경은 유용한 기준점입니다. 초경 후에는 보통 총 2–8cm 정도만 더 자라며, 대부분 2–3년 안에 끝납니다. 그 이후의 성장은 사실상 마무리 단계입니다.',
          },
        },
        {
          id: 'late-bloomers',
          heading: '늦게 크는 아이도, 일찍 크는 아이도 모두 정상',
          paragraphs: [
            '시기는 유전이 정합니다. 아이는 보통 부모와 비슷한 시기에 사춘기를 맞습니다. 부모가 늦게 컸다면 아이도 늦게 클 가능성이 큽니다. 늦게 크는 아이들은 결국 다른 아이들만큼 자라는 경우가 많습니다. 다만 나중에, 그리고 더 긴 기간에 걸쳐 자랄 뿐입니다.',
            '그래서 "우리 아들이 친구들보다 다 작아요"라는 고민이 13–14세에 흔하고, 또 대부분 저절로 해결됩니다. 14세에 급등기를 시작한 남아는 12세에 시작한 친구 옆에서 작아 보이다가, 16세가 되면 따라잡거나 오히려 앞서는 경우가 많습니다.',
            '아이의 백분위수를 확인해 현재 위치를 파악해 보세요. 다만 숫자는 추세보다 중요하지 않다는 점을 기억하세요:',
          ],
          link: {
            text: '→ 남아/여아 키 백분위수 확인하기 (무료)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-to-track',
          heading: '기록해야 할 것: 숫자보다 곡선',
          paragraphs: [
            '소아과 의사는 한 번의 측정값이 아니라 패턴을 봅니다. 집에서도 같은 방식으로 하세요:',
          ],
          bulletPoints: [
            '6개월마다 측정하세요. 맨발로, 벽에 기대어, 아침에 재고, 매번 날짜를 적어 둡니다.',
            '측정값을 시간 순서대로 점으로 찍어 보세요. 느리더라도, 낮은 백분위수라도 꾸준히 오르는 곡선이면 안심해도 됩니다.',
            '사춘기 이정표를 기록하세요. 여아는 유방 발달과 초경, 남아는 고환 크기와 변성기입니다. 이런 변화가 시작된 뒤 얼마 안 되어 성장이 빨라져야 합니다.',
            '가족 패턴과 비교하세요. 최종 키는 보통 부모 키의 중간 범위에 들어갑니다.',
          ],
          callout: {
            type: 'tip',
            text: '십대 자녀의 최종 키가 궁금하신가요? 중간부모키 공식으로 약 ±9cm 범위의 합리적인 예측이 가능합니다.',
          },
          link: {
            text: '→ 무료 계산기로 성인 키 예측하기',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'when-to-worry',
          heading: '소아과 의사와 상담해야 할 때',
          paragraphs: [
            '십대 키 고민의 대부분은 시간만으로 해결됩니다. 하지만 아래 중 하나라도 해당하면 검진을 예약하세요. 소아과 의사가 실제로 보는 경고 신호와 같습니다:',
          ],
          bulletPoints: [
            '성장 곡선이 떨어지고 있습니다: 여러 번의 측정에서 백분위수 선을 계속 아래로 벗어나고 있습니다(한 번 낮게 나온 것이 아닙니다).',
            '여아 13–14세, 남아 14–15세가 되었는데도 사춘기 징후가 없습니다.',
            '사춘기 이정표가 나타나지 않은 채 성장이 1년 넘게 사실상 멈췄습니다.',
            '사춘기가 너무 일찍 시작됐습니다(여아 8세 이전, 남아 9세 이전). 일찍 시작한 아이는 성장판이 빨리 닫혀 최종 키가 작아질 수 있습니다.',
          ],
          callout: {
            type: 'note',
            text: '한 번의 작은 측정값, 부진했던 한 해, 반에서 가장 작은 키는 이 목록에 없습니다. 의사가 판단하는 근거는 시간에 따른 패턴입니다.',
          },
        },
      ],
      faqs: [
        {
          question: '14살에 142cm면 키가 작은 건가요?',
          answer: '성장급등기가 아직 시작되지 않은 14살 남아라면 완전히 정상일 수 있습니다. 남아의 급등기는 14세 전후에 정점을 찍는 경우가 많고, 늦게 크는 아이들은 따라잡습니다. 14살 여아라면 평균보다는 작습니다(대부분 이 나이에 최종 키에 가깝기 때문입니다). 이 경우 성장 곡선을 기록하고 다음 검진 때 언급해 보세요. 어느 경우든 한 번의 숫자보다 지난 1년간의 추세가 더 중요합니다.',
        },
        {
          question: '여아는 언제 키 성장이 멈추나요?',
          answer: '대부분의 여아는 12세 전후에 가장 빨리 자란 뒤, 초경 이후 속도가 크게 느려집니다. 초경 후에는 2–3년 동안 2–8cm 정도만 더 자라는 것이 보통입니다. 14–16세가 되면 대다수 여아의 성장이 사실상 마무리됩니다.',
        },
        {
          question: '우리 아들이 친구들보다 다 작은데 따라잡을 수 있을까요?',
          answer: '대부분 그렇습니다. 늦게 크는 남아들은 15–17세에 급격히 자라 유전적 잠재력에 가까운 최종 키에 도달하는 경우가 많습니다. 일찍 쑥 큰 친구들보다 최종적으로 더 커지는 경우도 있습니다. 핵심은 사춘기 징후가 보이고 꾸준히 자라고 있는지입니다. 자기 곡선을 따라 안정적으로 자라고 있다면 기다리는 것이 보통 정답입니다.',
        },
        {
          question: '십대 자녀의 최종 키도 예측할 수 있나요?',
          answer: '네. 중간부모키 공식(부모의 키를 기준으로 성별을 조정한 공식)은 십대 시기에도 유효하며 오차는 약 ±9cm입니다. 사춘기가 진행 중일수록 남은 성장 기간이 명확해져 정확도가 올라갑니다. 무료 계산기로 바로 예측해 보세요.',
        },
      ],
      medicalDisclaimer: '교육용 콘텐츠이며 의학적 조언이 아닙니다. 모든 십대의 성장 패턴은 저마다 다릅니다. 아이의 성장이 정상 궤도에 있는지 판단할 수 있는 것은 시간을 두고 지켜본 소아과 의사뿐입니다. 이 글의 내용 중 걱정되는 부분이 있다면, 그것만으로도 다음 검진 때 물어볼 충분한 이유가 됩니다.',
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
      ],
    },
    ar: {
      id: 'teenager-height-normal',
      slug: 'hal-tool-al-murahiq-tabi3i',
      title: 'هل طول ابنك المراهق طبيعي؟ البلوغ وطفرات النمو',
      subtitle: 'توقيت البلوغ يفسّر تقريباً كل حالة مراهق "قصير جداً" أو "طويل جداً". إليك ما هو طبيعي في كل مرحلة — والنمط الوحيد الذي يهم فعلاً.',
      metaDescription: 'هل طول ابنك المراهق طبيعي؟ الجدول الزمني للبلوغ للبنات (10–14) والأولاد (12–16)، والمتأخرون في النمو، وما يجب تتبعه، ومتى تراجع طبيب الأطفال.',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6 دقائق للقراءة',
      badge: 'دليل للأهل',
      tocTitle: 'في هذا المقال',
      intro: {
        lead: 'في جميع الحالات تقريباً، نعم — طول ابنك المراهق طبيعي. يختلف توقيت البلوغ اختلافاً هائلاً بين الأطفال، وهذا التوقيت يفسّر معظم الفروقات: مراهق في الثالثة عشرة لم تبدأ طفرة نموه بعد قد يكون أقصر بست بوصات من صديق في نفس العمر، وكلاهما يتمتع بصحة ممتازة.',
        paragraphs: [
          'هذا الالتباس مفهوم. بين سن الثانية عشرة والسادسة عشرة، يتوزع الأطفال على كل مراحل البلوغ — بعضهم انتهى وبعضهم بالكاد بدأ. مقارنة طفلك بأصدقائه في نفس العمر هي مقارنة بين أطفال يسيرون على جداول زمنية مختلفة تماماً.',
          'ما يهم فعلاً ليس الرقم على شريط القياس اليوم، بل شكل نمو طفلك عبر الزمن. إليك الجدول الزمني المتوقع، وما يجب تتبعه، وعلامة التحذير الوحيدة التي تستحق زيارة الطبيب.',
        ],
      },
      sections: [
        {
          id: 'puberty-timeline',
          heading: 'الجدول الزمني لنمو البلوغ: البنات 10–14، والأولاد 12–16',
          paragraphs: [
            'طفرة النمو هي أسرع فترة نمو منذ الطفولة المبكرة، وتأتي في مواعيد مختلفة للبنات والأولاد:',
          ],
          bulletPoints: [
            'البنات: تبدأ الطفرة عادةً في سن 10–11، وتبلغ ذروتها قرب سن 12 (حوالي 3–3.5 بوصات سنوياً في الذروة)، ثم تتباطأ بعد أول دورة شهرية. معظم البنات يكدن ينتهين من النمو بحلول سن 14–16.',
            'الأولاد: تبدأ الطفرة متأخرة، في سن 12–13 تقريباً، وتبلغ ذروتها قرب سن 14 (حوالي 3.5–4 بوصات سنوياً في الذروة). يستمر النمو تدريجياً حتى أواخر سن المراهقة — ويصل معظم الأولاد إلى طولهم النهائي في سن 16–18.',
          ],
          callout: {
            type: 'tip',
            text: 'أول دورة شهرية للبنت علامة مفيدة: بعد الحيض الأول، تنمو البنات عادةً من 1 إلى 3 بوصات إضافية إجمالاً، معظمها خلال 2–3 سنوات. بعد ذلك، يكون النمو قد اكتمل عملياً.',
          },
        },
        {
          id: 'late-bloomers',
          heading: 'المتأخرون في النمو والمبكرون: كلاهما طبيعي',
          paragraphs: [
            'الجينات تحدد الجدول الزمني. عادةً يتبع الأطفال نفس توقيت أهلهم — فإذا كنت متأخراً في البلوغ، فغالباً طفلك كذلك. كثيراً ما يصل المتأخرون في النمو إلى نفس طول الآخرين في النهاية؛ فقط يصلون متأخرين، وفترة نموهم تمتد أطول.',
            'لهذا السبب يعد قلق "ابني أقصر من كل أصدقائه" شائعاً جداً في سن 13 أو 14 — وغالباً ما يُحل من تلقاء نفسه. الولد الذي تبدأ طفرته في سن 14 سيبدو قصيراً بجانب صديق بدأت طفرته في 12، ثم كثيراً ما يلحق به أو يتجاوزه بحلول سن 16.',
            'تحقق من النسبة المئوية لطول ابنك المراهق لترى أين يقف بالنسبة لعمره — لكن تذكر أن الرقم أقل أهمية من الاتجاه العام:',
          ],
          link: {
            text: '← تحقق من النسبة المئوية للأولاد أو البنات (مجاناً)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'what-to-track',
          heading: 'ما يجب تتبعه فعلاً (المنحنى، وليس الرقم)',
          paragraphs: [
            'أطباء الأطفال لا يقلقون من قياس واحد — بل من الأنماط. إليك كيف تفعل الشيء نفسه في البيت:',
          ],
          bulletPoints: [
            'قِس كل 6 أشهر: حافي القدمين، مقابل الحائط، في الصباح، واكتب التاريخ في كل مرة.',
            'ارسم النقاط عبر الزمن. الصعود الثابت — حتى لو كان بطيئاً، وحتى عند نسبة مئوية منخفضة — أمر مطمئن.',
            'لاحظ علامات البلوغ: عند البنات، نمو الثديين وأول دورة شهرية؛ وعند الأولاد، تضخم الخصيتين وتغير الصوت. يجب أن يتسارع النمو بعد بدء هذه العلامات بقليل.',
            'قارن مع نمط عائلتك: عادةً يقع الطول النهائي قرب متوسط طول الوالدين.',
          ],
          callout: {
            type: 'tip',
            text: 'تريد فكرة تقريبية عن المكان الذي سينتهي إليه ابنك المراهق؟ معادلة متوسط طول الوالدين تعطي تقديراً معقولاً بهامش حوالي ±3.5 بوصات.',
          },
          link: {
            text: '← توقع الطول النهائي بالحاسبة المجانية',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'when-to-worry',
          heading: 'متى تتحدث مع طبيب الأطفال',
          paragraphs: [
            'معظم مخاوف طول المراهقين لا تحتاج إلا إلى الوقت. لكن احجز فحصاً إذا انطبق أي مما يلي — فهي نفس علامات التحذير التي يستخدمها أطباء الأطفال:',
          ],
          bulletPoints: [
            'منحنى النمو يهبط: ابنك المراهق يعبر خطوط النسب المئوية نزولاً عبر عدة قياسات (وليس مجرد قراءة واحدة منخفضة).',
            'لا توجد علامات بلوغ بحلول سن 13–14 عند البنات أو 14–15 عند الأولاد.',
            'توقف النمو عملياً لأكثر من سنة بينما لم تظهر علامات البلوغ بعد.',
            'بدأ البلوغ مبكراً جداً (قبل 8 عند البنات، وقبل 9 عند الأولاد) — فالمبكرون قد ينتهون أقصر لأن صفائح النمو تُغلق أسرع.',
          ],
          callout: {
            type: 'note',
            text: 'قياس واحد قصير، أو سنة سيئة، أو كونه الأقصر في الصف ليست في هذه القائمة. الأنماط عبر الزمن هي ما يتصرف الأطباء بناءً عليه.',
          },
        },
      ],
      faqs: [
        {
          question: 'هل 4 أقدام و7 بوصات قصير لعمر 14 سنة؟',
          answer: 'لولد في الرابعة عشرة لم تبدأ طفرة نموه بعد، قد يكون ذلك طبيعياً تماماً — فطفرات الأولاد غالباً لا تبلغ ذروتها حتى سن 14، والمتأخرون يلحقون بالركب. أما لبنت في الرابعة عشرة فهو دون المتوسط (معظم البنات يقتربن من طولهن النهائي في هذا العمر)، لذا يستحق الأمر تتبع منحنى نموها وذكره في الفحص القادم. في الحالتين، الاتجاه العام خلال السنة الماضية أهم من الرقم نفسه.',
        },
        {
          question: 'متى تتوقف البنات عن النمو طولاً؟',
          answer: 'تنمو معظم البنات بأسرع وتيرة في سن 12 تقريباً، ثم يتباطأ النمو كثيراً بعد أول دورة شهرية. بعد الحيض الأول تكتسب البنات عادةً من 1 إلى 3 بوصات إضافية فقط خلال السنتين أو الثلاث التالية. وبحلول سن 14–16، يكون النمو قد اكتمل عملياً لدى الغالبية العظمى من البنات.',
        },
        {
          question: 'ابني أقصر من كل أصدقائه — هل سيلحق بهم؟',
          answer: 'غالباً جداً، نعم. الأولاد المتأخرون في النمو كثيراً ما ينمون بسرعة في سن 15–17 وينتهون بطول قريب من إمكاناتهم الوراثية — وأحياناً أطول من الأصدقاء الذين نموا مبكراً. السؤال المهم هو: هل تظهر عليه علامات البلوغ وهل ما زال ينمو؟ إذا كان ينمو بثبات على منحنى نموه الخاص، فالصبر عادةً هو الجواب الصحيح.',
        },
        {
          question: 'هل ما زال بإمكاني توقع الطول النهائي لابني المراهق؟',
          answer: 'نعم — معادلة متوسط طول الوالدين (المبنية على طولي الوالدين مع تعديل حسب الجنس) تعمل في سنوات المراهقة أيضاً، بهامش حوالي ±3.5 بوصات. وتصبح أكثر دقة بمجرد بدء البلوغ، لأن نافذة النمو المتبقية تصبح أوضح. جرّب الحاسبة المجانية للحصول على تقدير فوري.',
        },
      ],
      medicalDisclaimer: 'محتوى تثقيفي وليس نصيحة طبية. نمط نمو كل مراهق فردي — وطبيب الأطفال وحده، الذي يتابع طفلك عبر الزمن، هو من يستطيع الحكم على ما إذا كان نموه يسير على المسار الصحيح. إذا كان أي شيء هنا يقلقك، فهذا وحده سبب كافٍ للسؤال في الفحص القادم.',
      relatedLinks: [
        {
          text: 'النسبة المئوية لطول الأولاد',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'النسبة المئوية لطول البنات',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'متوقع طول الطفل النهائي',
          href: '/height-calculator/child-height-predictor/',
        },
      ],
    },
    ru: {
      id: 'teenager-height-normal',
      slug: 'rost-podrostka-normalno-li',
      title: 'Рост моего подростка в норме? Половое созревание и скачки роста',
      subtitle: 'Время начала полового созревания объясняет почти каждый случай «слишком низкий» или «слишком высокий» подросток. Вот что нормально на каждом этапе — и единственный показатель, который действительно важен.',
      metaDescription: 'Рост подростка в норме? Сроки полового созревания: девочки (10–14) и мальчики (12–16), позднее созревание, что отслеживать и когда идти к педиатру.',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      readTime: '6 мин чтения',
      badge: 'Гид для родителей',
      tocTitle: 'В этой статье',
      intro: {
        lead: 'Почти во всех случаях — да, рост вашего подростка в норме. Сроки полового созревания сильно различаются у детей, и именно они объясняют почти всю разницу: 13-летний подросток, у которого скачок роста ещё не начался, может быть на 15 см ниже сверстника — и оба при этом совершенно здоровы.',
        paragraphs: [
          'Недоумение понятно. В возрасте от 12 до 16 лет дети находятся на самых разных стадиях полового созревания: кто-то уже закончил, кто-то едва начал. Сравнивать своего ребёнка с друзьями-ровесниками — значит сравнивать детей, живущих по совершенно разным графикам.',
          'На самом деле важна не цифра на сантиметровой ленте сегодня, а форма кривой роста вашего ребёнка во времени. Вот ожидаемые сроки, что отслеживать и единственный тревожный признак, с которым стоит идти к врачу.',
        ],
      },
      sections: [
        {
          id: 'sroki-polovogo-sozrevaniya',
          heading: 'Сроки роста в половом созревании: девочки 10–14, мальчики 12–16',
          paragraphs: [
            'Скачок роста — самый быстрый период роста с младенчества, и у девочек и мальчиков он наступает в разное время:',
          ],
          bulletPoints: [
            'Девочки: скачок обычно начинается в 10–11 лет, пик приходится примерно на 12 лет (около 8–9 см в год на пике) и замедляется после первой менструации. Большинство девочек почти заканчивают расти к 14–16 годам.',
            'Мальчики: скачок начинается позже, примерно в 12–13 лет, пик — около 14 лет (примерно 9–10 см в год на пике). Затем рост продолжается медленнее до позднего подросткового возраста — окончательного роста большинство мальчиков достигают к 16–18 годам.',
          ],
          callout: {
            type: 'tip',
            text: 'Первая менструация у девочки — полезный ориентир: после менархе девочки обычно вырастают ещё на 3–8 см в сумме, в основном в течение 2–3 лет. После этого рост практически завершён.',
          },
        },
        {
          id: 'pozdnee-sozrevanie',
          heading: 'Позднее созревание и раннее развитие: оба варианта — норма',
          paragraphs: [
            'График задаёт генетика. Дети обычно повторяют сроки своих родителей: если вы созрели поздно, ваш ребёнок, скорее всего, тоже. Поздно созревающие дети часто в итоге вырастают такими же высокими, как все, — просто позже, и период их роста длится дольше.',
            'Именно поэтому «мой сын ниже всех своих друзей» — такая частая тревога в 13–14 лет, и так часто она разрешается сама собой. Мальчик, у которого скачок начался в 14, будет казаться низким рядом с другом, начавшим в 12, а к 16 годам нередко догоняет его или перегоняет.',
            'Проверьте процентиль роста вашего подростка, чтобы увидеть его место для своего возраста, — но помните: важнее не цифра, а тенденция:',
          ],
          link: {
            text: '→ Проверьте процентиль роста для мальчиков или девочек (бесплатно)',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'chto-otslezhivat',
          heading: 'Что на самом деле отслеживать (кривую, а не цифру)',
          paragraphs: [
            'Педиатров беспокоит не отдельное измерение, а закономерности. Вот как делать то же самое дома:',
          ],
          bulletPoints: [
            'Измеряйте каждые 6 месяцев: босиком, у стены, утром, и каждый раз записывайте дату.',
            'Стройте точки во времени. Устойчивый подъём — даже медленный, даже на низком процентиле — обнадёживает.',
            'Отмечайте этапы полового созревания: у девочек — развитие груди и первая менструация; у мальчиков — увеличение яичек и ломка голоса. Вскоре после их начала рост должен ускориться.',
            'Сравнивайте с семейным паттерном: итоговый рост обычно близок к средне-родительскому диапазону.',
          ],
          callout: {
            type: 'tip',
            text: 'Хотите примерно понять, каким вырастет ваш подросток? Формула средне-родительского роста даёт разумную оценку с погрешностью около ±9 см.',
          },
          link: {
            text: '→ Рассчитайте взрослый рост в бесплатном калькуляторе',
            href: '/height-calculator/child-height-predictor/',
          },
        },
        {
          id: 'kogda-k-vrachu',
          heading: 'Когда идти к педиатру',
          paragraphs: [
            'Большинство тревог о росте подростков со временем проходят сами. Но запишитесь на осмотр, если подходит любой из этих пунктов, — это те же красные флаги, которыми пользуются педиатры:',
          ],
          bulletPoints: [
            'Кривая роста падает: подросток пересекает линии процентилей вниз на нескольких измерениях (а не просто одно низкое значение).',
            'Нет признаков полового созревания к 13–14 годам у девочек или к 14–15 годам у мальчиков.',
            'Рост практически остановился больше чем на год, а этапы полового созревания так и не наступили.',
            'Половое созревание началось очень рано (до 8 лет у девочек, до 9 у мальчиков): рано созревшие могут в итоге оказаться ниже, потому что зоны роста закрываются раньше.',
          ],
          callout: {
            type: 'note',
            text: 'Одно низкое измерение, неудачный год или звание самого низкого в классе — не повод из этого списка. Врачи действуют по закономерностям во времени.',
          },
        },
      ],
      faqs: [
        {
          question: '142 см — это мало для 14-летнего?',
          answer: 'Для 14-летнего мальчика, у которого скачок роста ещё не начался, это может быть совершенно нормально: пик скачка у мальчиков часто приходится на 14 лет, и поздно созревающие догоняют. Для 14-летней девочки это ниже среднего (большинство девочек к этому возрасту близки к окончательному росту), поэтому стоит отслеживать её кривую роста и упомянуть это на следующем осмотре. В обоих случаях тенденция за последний год важнее цифры.',
        },
        {
          question: 'Когда девочки перестают расти?',
          answer: 'Быстрее всего девочки растут примерно в 12 лет, затем после первой менструации рост заметно замедляется. После менархе они обычно прибавляют лишь ещё 3–8 см за следующие 2–3 года. К 14–16 годам рост у подавляющего большинства девочек практически завершён.',
        },
        {
          question: 'Мой сын ниже всех своих друзей — он догонит?',
          answer: 'Очень часто — да. Мальчики, созревающие поздно, нередко быстро растут в 15–17 лет и в итоге достигают роста, близкого к генетическому потенциалу, — иногда выше друзей, выстреливших рано. Главный вопрос — есть ли признаки полового созревания и продолжается ли рост. Если он стабильно растёт по своей кривой, обычно правильный ответ — терпение.',
        },
        {
          question: 'Можно ли ещё предсказать итоговый рост подростка?',
          answer: 'Да: формула средне-родительского роста (по росту обоих родителей с поправкой на пол) работает и в подростковом возрасте, с погрешностью примерно ±9 см. Она становится точнее, когда половое созревание уже идёт, потому что окно оставшегося роста яснее. Попробуйте бесплатный калькулятор для мгновенной оценки.',
        },
      ],
      medicalDisclaimer: 'Материал носит образовательный характер и не является медицинской рекомендацией. Паттерн роста каждого подростка индивидуален — судить, в норме ли рост, может только педиатр, наблюдающий вашего ребёнка во времени. Если что-то из прочитанного вас беспокоит, этого уже достаточно, чтобы спросить на следующем осмотре.',
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
          text: 'Калькулятор роста ребёнка',
          href: '/height-calculator/child-height-predictor/',
        },
      ],
    },
  },
};
