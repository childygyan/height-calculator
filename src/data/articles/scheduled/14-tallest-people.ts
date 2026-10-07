import type { ScheduledArticle } from '../types';

export const scheduled: ScheduledArticle = {
  publishDate: '2026-10-20',
  articles: {
    en: {
      id: 'tallest-people',
      slug: 'tallest-people-in-the-world',
      title: 'Tallest People in the World: Records and the Science',
      subtitle: 'From Robert Wadlow’s verified 272 cm to today’s living record holders — the true stories behind extreme height, and what actually causes it.',
      metaDescription: 'Who is the tallest person in the world? Robert Wadlow (272 cm) holds the all-time record; Sultan Kösen (251 cm) is the tallest living man. Stories, verified data, and the science of gigantism.',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6 min read',
      badge: 'Records & stories',
      tocTitle: 'In this article',
      intro: {
        lead: 'The tallest person ever reliably measured was Robert Wadlow, an American who reached 272 cm (8 ft 11 in) before his death in 1940. The tallest living man is Sultan Kösen of Turkey, at 251 cm (8 ft 2.8 in).',
        paragraphs: [
          'Extreme height fascinates us — but behind every record is a real person, and usually a medical story. Unlike ordinary tallness, which is mostly inherited, heights above roughly 230 cm almost always result from a hormonal condition called gigantism.',
          'Below: the verified records, the living title holders, and an honest explanation of why extreme height happens — told with the respect these stories deserve.',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: 'Robert Wadlow: the tallest person ever',
          paragraphs: [
            'Robert Pershing Wadlow was born in Alton, Illinois, in 1918 — a normal-sized baby who simply never stopped growing. By age 8 he was already 188 cm, taller than his father. At 18 he measured 254 cm, and he kept growing until the day he died.',
            'His final recorded height, taken 18 days before his death, was 272 cm (8 ft 11.1 in) — a Guinness World Records entry that has stood unchallenged for over 80 years. Wadlow was known as the "Gentle Giant": by all accounts kind, soft-spoken, and remarkably good-natured about the crowds that followed him.',
            'But his height came at a terrible cost. His legs and feet required custom braces, and he had little feeling in them. In July 1940, a faulty brace rubbed a blister on his ankle that became infected. He died in his sleep on July 15, aged just 22. His coffin weighed nearly half a ton and required twelve pallbearers.',
          ],
          callout: {
            type: 'note',
            text: 'Wadlow’s growth was caused by hyperplasia of his pituitary gland, which flooded his body with growth hormone. Doctors at the time had no treatment that could have stopped it.',
          },
        },
        {
          id: 'living-giants',
          heading: 'The tallest people alive today',
          paragraphs: [
            'No one living has come close to Wadlow — but the current record holders have remarkable stories of their own:',
          ],
          bulletPoints: [
            'Sultan Kösen (Turkey, born 1982) — 251 cm (8 ft 2.8 in), the tallest living man. His growth was driven by a tumor on his pituitary gland; after gamma-knife surgery in 2010, his growth finally stopped. He could not finish school because of his size, but later found work and married in 2013.',
            'Rumeysa Gelgi (Turkey, born 1997) — 215.16 cm (7 ft 0.7 in), the tallest living woman. Her height comes from Weaver syndrome, a rare genetic condition. She is an advocate for disability awareness and mostly uses a wheelchair.',
          ],
          table: {
            headers: [
              'Person',
              'Height',
              'Status',
            ],
            rows: [
              [
                'Robert Wadlow (USA)',
                '272 cm (8′11″)',
                'All-time record, verified',
              ],
              [
                'John Rogan (USA)',
                '267 cm (8′9″)',
                'Verified',
              ],
              [
                'John Carroll (USA)',
                '263.5 cm (8′7.7″)',
                'Verified',
              ],
              [
                'Sultan Kösen (Turkey)',
                '251 cm (8′2.8″)',
                'Tallest living man',
              ],
              [
                'Rumeysa Gelgi (Turkey)',
                '215.2 cm (7′0.7″)',
                'Tallest living woman',
              ],
            ],
            footnote: 'Heights per Guinness World Records and documented medical measurements. Many historical claims above 272 cm were never independently verified.',
          },
          callout: {
            type: 'tip',
            text: 'A cautionary tale: Leonid Stadnyk of Ukraine claimed 257 cm, but refused independent measurement — and Guinness stripped his title in 2008. Only independently verified measurements count as records.',
          },
        },
        {
          id: 'science',
          heading: 'Why extreme height happens: the science',
          paragraphs: [
            'Being very tall — say, 195 or 200 cm — is almost entirely genetic and perfectly healthy. Extreme height beyond about 230 cm is different: it nearly always signals gigantism, a rare hormonal disorder.',
            'The usual cause is a benign tumor (adenoma) on the pituitary gland, the pea-sized gland at the base of the brain that controls growth hormone. When it overproduces the hormone during childhood — before the growth plates in the bones fuse — the whole skeleton keeps growing far past its genetic target.',
            'If the same hormone excess begins after the growth plates have closed (in adulthood), height cannot increase anymore. Instead the hands, feet, and jaw enlarge — a related condition called acromegaly.',
            'Modern medicine can treat gigantism: surgery to remove the tumor, medication to block growth hormone, or targeted radiation. Sultan Kösen’s growth was halted this way. A century ago, Robert Wadlow had no such option.',
          ],
          callout: {
            type: 'warning',
            text: 'Extreme height is not simply "extra tallness" — it comes with serious health burdens: joint damage, cardiovascular strain, and greatly reduced life expectancy. These records are medical stories, not goals.',
          },
        },
        {
          id: 'compare',
          heading: 'See how you measure up',
          paragraphs: [
            'Curious where you stand next to Wadlow — or next to an average person from any country? Our free comparison tool lets you line yourself up against anyone, side by side:',
          ],
          link: {
            text: '→ Compare your height now',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'Who is the tallest person alive?',
          answer: 'Sultan Kösen of Turkey, at 251 cm (8 ft 2.8 in), recognized by Guinness World Records as the tallest living man. The tallest living woman is Rumeysa Gelgi, also of Turkey, at 215.16 cm.',
        },
        {
          question: 'How tall was Robert Wadlow?',
          answer: '272 cm (8 ft 11.1 in) — measured 18 days before his death in 1940. It remains the tallest reliably documented height in human history.',
        },
        {
          question: 'What causes extreme height?',
          answer: 'Almost always gigantism: a benign pituitary tumor overproducing growth hormone during childhood, before the bone growth plates fuse. Ordinary tallness, by contrast, is overwhelmingly genetic and healthy.',
        },
        {
          question: 'Could someone grow taller than Robert Wadlow?',
          answer: 'Theoretically possible, but no verified case has come close in 80+ years. Modern treatment usually halts pathological growth early, and Guinness requires rigorous independent measurement — which is why unverified historical claims don’t count.',
        },
      ],
      medicalDisclaimer: 'Educational content, not medical advice. Gigantism and growth disorders are medical conditions — only a healthcare professional can diagnose or treat them. If you have concerns about abnormal growth, consult a doctor.',
      relatedLinks: [
        {
          text: 'Height Comparison',
          href: '/compare/',
        },
        {
          text: 'Average height by country',
          href: '/articles/average-height-by-country/',
        },
        {
          text: 'Predict your child’s adult height',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    pt: {
      id: 'tallest-people',
      slug: 'pessoas-mais-altas-do-mundo',
      title: 'As Pessoas Mais Altas do Mundo: Recordes e a Ciência por Trás',
      subtitle: 'Dos 272 cm verificados de Robert Wadlow aos recordistas vivos de hoje — as histórias reais por trás da altura extrema e o que realmente a causa.',
      metaDescription: 'Quem é a pessoa mais alta do mundo? Robert Wadlow (272 cm) detém o recorde de todos os tempos; Sultan Kösen (251 cm) é o homem vivo mais alto. Histórias, dados verificados e a ciência do gigantismo.',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6 min de leitura',
      badge: 'Recordes & histórias',
      tocTitle: 'Neste artigo',
      intro: {
        lead: 'A pessoa mais alta já medida de forma confiável foi Robert Wadlow, um americano que chegou a 272 cm (8 pés e 11 polegadas) antes de morrer em 1940. O homem vivo mais alto é Sultan Kösen, da Turquia, com 251 cm (8 pés, 2,8 polegadas).',
        paragraphs: [
          'A altura extrema nos fascina — mas por trás de cada recorde há uma pessoa real e, geralmente, uma história médica. Diferentemente da estatura alta comum, que é em grande parte herdada, alturas acima de cerca de 230 cm quase sempre resultam de uma condição hormonal chamada gigantismo.',
          'A seguir: os recordes verificados, os detentores vivos dos títulos e uma explicação honesta de por que a altura extrema acontece — contada com o respeito que essas histórias merecem.',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: 'Robert Wadlow: a pessoa mais alta de todos os tempos',
          paragraphs: [
            'Robert Pershing Wadlow nasceu em Alton, Illinois, em 1918 — um bebê de tamanho normal que simplesmente nunca parou de crescer. Aos 8 anos já media 188 cm, mais alto que o pai. Aos 18, media 254 cm, e continuou crescendo até o dia em que morreu.',
            'Sua última altura registrada, medida 18 dias antes de sua morte, foi de 272 cm (8 pés e 11,1 polegadas) — um recorde do Guinness World Records que permanece incontestável há mais de 80 anos. Wadlow era conhecido como o "Gigante Gentil": segundo todos os relatos, era gentil, de fala mansa e lidava com surpreendente bom humor com as multidões que o seguiam.',
            'Mas sua altura teve um custo terrível. Suas pernas e pés exigiam órteses sob medida, e ele tinha pouca sensibilidade neles. Em julho de 1940, uma órtese defeituosa causou uma bolha no tornozelo que infeccionou. Ele morreu dormindo em 15 de julho, com apenas 22 anos. Seu caixão pesava quase meia tonelada e precisou de doze carregadores.',
          ],
          callout: {
            type: 'note',
            text: 'O crescimento de Wadlow foi causado por uma hiperplasia da glândula hipófise, que inundou seu corpo com hormônio do crescimento. Os médicos da época não tinham nenhum tratamento capaz de detê-lo.',
          },
        },
        {
          id: 'living-giants',
          heading: 'As pessoas mais altas vivas hoje',
          paragraphs: [
            'Ninguém vivo chegou perto de Wadlow — mas os atuais recordistas têm histórias notáveis por si sós:',
          ],
          bulletPoints: [
            'Sultan Kösen (Turquia, nascido em 1982) — 251 cm (8 pés e 2,8 polegadas), o homem vivo mais alto. Seu crescimento foi provocado por um tumor na hipófise; após uma cirurgia com bisturi gama em 2010, seu crescimento finalmente parou. Ele não conseguiu terminar os estudos por causa de seu tamanho, mas depois encontrou trabalho e se casou em 2013.',
            'Rumeysa Gelgi (Turquia, nascida em 1997) — 215,16 cm (7 pés e 0,7 polegada), a mulher viva mais alta. Sua altura vem da síndrome de Weaver, uma condição genética rara. Ela é defensora da conscientização sobre deficiência e usa cadeira de rodas na maior parte do tempo.',
          ],
          table: {
            headers: [
              'Pessoa',
              'Altura',
              'Status',
            ],
            rows: [
              [
                'Robert Wadlow (EUA)',
                '272 cm (8′11″)',
                'Recorde de todos os tempos, verificado',
              ],
              [
                'John Rogan (EUA)',
                '267 cm (8′9″)',
                'Verificado',
              ],
              [
                'John Carroll (EUA)',
                '263,5 cm (8′7,7″)',
                'Verificado',
              ],
              [
                'Sultan Kösen (Turquia)',
                '251 cm (8′2,8″)',
                'Homem vivo mais alto',
              ],
              [
                'Rumeysa Gelgi (Turquia)',
                '215,2 cm (7′0,7″)',
                'Mulher viva mais alta',
              ],
            ],
            footnote: 'Alturas segundo o Guinness World Records e medições médicas documentadas. Muitas alegações históricas acima de 272 cm nunca foram verificadas de forma independente.',
          },
          callout: {
            type: 'tip',
            text: 'Um conto de advertência: Leonid Stadnyk, da Ucrânia, alegava ter 257 cm, mas se recusou a ser medido de forma independente — e o Guinness cassou seu título em 2008. Só medições verificadas de forma independente contam como recordes.',
          },
        },
        {
          id: 'science',
          heading: 'Por que a altura extrema acontece: a ciência',
          paragraphs: [
            'Ser muito alto — digamos, 195 ou 200 cm — é quase inteiramente genético e perfeitamente saudável. A altura extrema além de cerca de 230 cm é diferente: ela quase sempre indica gigantismo, um raro distúrbio hormonal.',
            'A causa usual é um tumor benigno (adenoma) na glândula hipófise, a glândula do tamanho de uma ervilha na base do cérebro que controla o hormônio do crescimento. Quando ela produz o hormônio em excesso durante a infância — antes de as placas de crescimento dos ossos se fecharem — todo o esqueleto continua crescendo muito além de sua meta genética.',
            'Se o mesmo excesso hormonal começa depois que as placas de crescimento já se fecharam (na vida adulta), a altura não pode mais aumentar. Em vez disso, as mãos, os pés e a mandíbula aumentam — uma condição relacionada chamada acromegalia.',
            'A medicina moderna pode tratar o gigantismo: cirurgia para remover o tumor, medicamentos para bloquear o hormônio do crescimento ou radiação direcionada. O crescimento de Sultan Kösen foi interrompido dessa forma. Um século atrás, Robert Wadlow não tinha essa opção.',
          ],
          callout: {
            type: 'warning',
            text: 'A altura extrema não é simplesmente "ser extra alto" — ela vem com sérios encargos à saúde: danos às articulações, sobrecarga cardiovascular e expectativa de vida muito reduzida. Esses recordes são histórias médicas, não metas.',
          },
        },
        {
          id: 'compare',
          heading: 'Veja como você se compara',
          paragraphs: [
            'Curioso para saber onde você fica ao lado de Wadlow — ou ao lado de uma pessoa média de qualquer país? Nossa ferramenta gratuita de comparação permite que você se alinhe lado a lado com qualquer pessoa:',
          ],
          link: {
            text: '→ Compare sua altura agora',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'Quem é a pessoa viva mais alta?',
          answer: 'Sultan Kösen, da Turquia, com 251 cm (8 pés e 2,8 polegadas), reconhecido pelo Guinness World Records como o homem vivo mais alto. A mulher viva mais alta é Rumeysa Gelgi, também da Turquia, com 215,16 cm.',
        },
        {
          question: 'Qual era a altura de Robert Wadlow?',
          answer: '272 cm (8 pés e 11,1 polegadas) — medidos 18 dias antes de sua morte em 1940. Continua sendo a altura mais alta documentada de forma confiável na história da humanidade.',
        },
        {
          question: 'O que causa a altura extrema?',
          answer: 'Quase sempre o gigantismo: um tumor benigno da hipófise que produz hormônio do crescimento em excesso durante a infância, antes de as placas de crescimento dos ossos se fecharem. A estatura alta comum, em contraste, é majoritariamente genética e saudável.',
        },
        {
          question: 'Alguém poderia crescer mais que Robert Wadlow?',
          answer: 'Teoricamente possível, mas nenhum caso verificado chegou perto em mais de 80 anos. O tratamento moderno costuma interromper o crescimento patológico cedo, e o Guinness exige medição independente rigorosa — por isso alegações históricas não verificadas não contam.',
        },
      ],
      medicalDisclaimer: 'Conteúdo educacional, não aconselhamento médico. Gigantismo e distúrbios do crescimento são condições médicas — apenas um profissional de saúde pode diagnosticá-los ou tratá-los. Se você tem preocupações com crescimento anormal, consulte um médico.',
      relatedLinks: [
        {
          text: 'Comparação de altura',
          href: '/compare/',
        },
        {
          text: 'Altura média por país',
          href: '/articles/average-height-by-country/',
        },
        {
          text: 'Preveja a altura adulta do seu filho',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    es: {
      id: 'tallest-people',
      slug: 'personas-mas-altas-del-mundo',
      title: 'Las personas más altas del mundo: récords y ciencia',
      subtitle: 'Desde los verificados 272 cm de Robert Wadlow hasta los poseedores actuales del récord — las historias reales detrás de la estatura extrema, y qué la causa realmente.',
      metaDescription: '¿Quién es la persona más alta del mundo? Robert Wadlow (272 cm) tiene el récord de todos los tiempos; Sultan Kösen (251 cm) es el hombre vivo más alto. Historias, datos verificados y la ciencia del gigantismo.',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6 min de lectura',
      badge: 'Récords e historias',
      tocTitle: 'En este artículo',
      intro: {
        lead: 'La persona más alta jamás medida de forma fiable fue Robert Wadlow, un estadounidense que alcanzó 272 cm (8 pies 11 pulgadas) antes de su muerte en 1940. El hombre vivo más alto es Sultan Kösen, de Turquía, con 251 cm (8 pies 2,8 pulgadas).',
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
            headers: [
              'Persona',
              'Estatura',
              'Estado',
            ],
            rows: [
              [
                'Robert Wadlow (EE. UU.)',
                '272 cm (8′11″)',
                'Récord histórico, verificado',
              ],
              [
                'John Rogan (EE. UU.)',
                '267 cm (8′9″)',
                'Verificado',
              ],
              [
                'John Carroll (EE. UU.)',
                '263,5 cm (8′7,7″)',
                'Verificado',
              ],
              [
                'Sultan Kösen (Turquía)',
                '251 cm (8′2,8″)',
                'Hombre vivo más alto',
              ],
              [
                'Rumeysa Gelgi (Turquía)',
                '215,2 cm (7′0,7″)',
                'Mujer viva más alta',
              ],
            ],
            footnote: 'Estaturas según Guinness World Records y mediciones médicas documentadas. Muchas afirmaciones históricas por encima de 272 cm nunca fueron verificadas de forma independiente.',
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
          answer: 'Sultan Kösen, de Turquía, con 251 cm (8 pies 2,8 pulgadas), reconocido por Guinness World Records como el hombre vivo más alto. La mujer viva más alta es Rumeysa Gelgi, también de Turquía, con 215,16 cm.',
        },
        {
          question: '¿Cuánto medía Robert Wadlow?',
          answer: '272 cm (8 pies 11,1 pulgadas) — medido 18 días antes de su muerte en 1940. Sigue siendo la estatura más alta documentada de forma fiable en la historia de la humanidad.',
        },
        {
          question: '¿Qué causa la estatura extrema?',
          answer: 'Casi siempre el gigantismo: un tumor pituitario benigno que produce un exceso de hormona del crecimiento durante la infancia, antes de que los cartílagos de crecimiento óseo se fusionen. La estatura alta común, en cambio, es abrumadoramente genética y saludable.',
        },
        {
          question: '¿Podría alguien crecer más que Robert Wadlow?',
          answer: 'Teóricamente posible, pero ningún caso verificado se ha acercado en más de 80 años. El tratamiento moderno suele detener el crecimiento patológico a tiempo, y Guinness exige una medición independiente rigurosa — por eso las afirmaciones históricas sin verificar no cuentan.',
        },
      ],
      medicalDisclaimer: 'Contenido educativo, no consejo médico. El gigantismo y los trastornos del crecimiento son condiciones médicas: solo un profesional de la salud puede diagnosticarlos o tratarlos. Si te preocupa un crecimiento anormal, consulta a un médico.',
      relatedLinks: [
        {
          text: 'Comparador de estatura',
          href: '/compare/',
        },
        {
          text: 'Estatura promedio por país',
          href: '/articles/average-height-by-country/',
        },
        {
          text: 'Predice la estatura adulta de tu hijo',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    fr: {
      id: 'tallest-people',
      slug: 'personnes-les-plus-grandes-du-monde',
      title: 'Les personnes les plus grandes du monde : records et science',
      subtitle: 'Des 272 cm vérifiés de Robert Wadlow aux détenteurs actuels des records — les histoires vraies derrière les tailles extrêmes, et ce qui les provoque réellement.',
      metaDescription: 'Qui est la personne la plus grande du monde ? Robert Wadlow (272 cm) détient le record absolu ; Sultan Kösen (251 cm) est l’homme vivant le plus grand. Récits, données vérifiées et la science du gigantisme.',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6 min de lecture',
      badge: 'Records et récits',
      tocTitle: 'Dans cet article',
      intro: {
        lead: 'La personne la plus grande jamais mesurée de façon fiable est Robert Wadlow, un Américain qui atteignit 272 cm (8′11″) avant sa mort en 1940. L’homme vivant le plus grand est Sultan Kösen, de Turquie, avec 251 cm (8′2,8″).',
        paragraphs: [
          'Les tailles extrêmes nous fascinent — mais derrière chaque record se cache une vraie personne, et le plus souvent une histoire médicale. Contrairement à une grande taille ordinaire, qui est surtout héréditaire, les tailles au-delà d’environ 230 cm résultent presque toujours d’une affection hormonale appelée gigantisme.',
          'Ci-dessous : les records vérifiés, les détenteurs actuels des titres, et une explication honnête de l’origine des tailles extrêmes — racontée avec le respect que ces histoires méritent.',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: 'Robert Wadlow : la personne la plus grande de tous les temps',
          paragraphs: [
            'Robert Pershing Wadlow naquit à Alton, dans l’Illinois, en 1918 — un bébé de taille normale qui ne cessa tout simplement jamais de grandir. À 8 ans, il mesurait déjà 188 cm, dépassant son père. À 18 ans, il atteignait 254 cm, et il continua de grandir jusqu’au jour de sa mort.',
            'Sa dernière taille enregistrée, mesurée 18 jours avant son décès, était de 272 cm (8′11,1″) — une entrée au Guinness World Records qui tient depuis plus de 80 ans. Wadlow était surnommé le « Gentle Giant » (le gentil géant) : d’après tous les témoignages, il était aimable, d’une douceur remarquable, et prenait avec beaucoup de bonne humeur les foules qui le suivaient.',
            'Mais sa taille eut un coût terrible. Ses jambes et ses pieds nécessitaient des attelles sur mesure, et il y avait peu de sensibilité. En juillet 1940, une attelle défectueuse lui causa une ampoule à la cheville qui s’infecta. Il mourut dans son sommeil le 15 juillet, à seulement 22 ans. Son cercueil pesait près d’une demi-tonne et nécessita douze porteurs.',
          ],
          callout: {
            type: 'note',
            text: 'La croissance de Wadlow était due à une hyperplasie de son hypophyse, qui inondait son corps d’hormone de croissance. À l’époque, les médecins ne disposaient d’aucun traitement capable de l’arrêter.',
          },
        },
        {
          id: 'geants-vivants',
          heading: 'Les personnes les plus grandes vivant aujourd’hui',
          paragraphs: [
            'Personne de vivant ne s’est approché de Wadlow — mais les détenteurs actuels des records ont eux aussi des histoires remarquables :',
          ],
          bulletPoints: [
            'Sultan Kösen (Turquie, né en 1982) — 251 cm (8′2,8″), l’homme vivant le plus grand. Sa croissance était due à une tumeur de l’hypophyse ; après une opération au Gamma Knife en 2010, sa croissance s’arrêta enfin. Il ne put terminer ses études à cause de sa taille, mais trouva plus tard un emploi et se maria en 2013.',
            'Rumeysa Gelgi (Turquie, née en 1997) — 215,16 cm (7′0,7″), la femme vivante la plus grande. Sa taille provient du syndrome de Weaver, une maladie génétique rare. Elle milite pour la sensibilisation au handicap et se déplace principalement en fauteuil roulant.',
          ],
          table: {
            headers: [
              'Personne',
              'Taille',
              'Statut',
            ],
            rows: [
              [
                'Robert Wadlow (États-Unis)',
                '272 cm (8′11″)',
                'Record absolu, vérifié',
              ],
              [
                'John Rogan (États-Unis)',
                '267 cm (8′9″)',
                'Vérifié',
              ],
              [
                'John Carroll (États-Unis)',
                '263,5 cm (8′7,7″)',
                'Vérifié',
              ],
              [
                'Sultan Kösen (Turquie)',
                '251 cm (8′2,8″)',
                'Homme vivant le plus grand',
              ],
              [
                'Rumeysa Gelgi (Turquie)',
                '215,2 cm (7′0,7″)',
                'Femme vivante la plus grande',
              ],
            ],
            footnote: 'Tailles d’après le Guinness World Records et des mesures médicales documentées. De nombreuses affirmations historiques au-delà de 272 cm n’ont jamais été vérifiées de façon indépendante.',
          },
          callout: {
            type: 'tip',
            text: 'Un conte édifiant : Leonid Stadnyk, d’Ukraine, affirmait mesurer 257 cm, mais refusa toute mesure indépendante — et le Guinness lui retira son titre en 2008. Seules les mesures vérifiées de façon indépendante comptent comme records.',
          },
        },
        {
          id: 'science',
          heading: 'Pourquoi les tailles extrêmes existent : la science',
          paragraphs: [
            'Être très grand — disons 195 ou 200 cm — est presque entièrement génétique et parfaitement sain. Au-delà d’environ 230 cm, c’est différent : cela signale presque toujours un gigantisme, un trouble hormonal rare.',
            'La cause habituelle est une tumeur bénigne (adénome) de l’hypophyse, cette glande de la taille d’un pois située à la base du cerveau qui contrôle l’hormone de croissance. Lorsqu’elle en produit trop pendant l’enfance — avant que les cartilages de croissance des os ne se soudent — tout le squelette continue de grandir bien au-delà de sa cible génétique.',
            'Si ce même excès d’hormone débute après la fermeture des cartilages de croissance (à l’âge adulte), la taille ne peut plus augmenter. En revanche, les mains, les pieds et la mâchoire s’élargissent — une affection apparentée appelée acromégalie.',
            'La médecine moderne peut traiter le gigantisme : chirurgie pour retirer la tumeur, médicaments bloquant l’hormone de croissance, ou radiothérapie ciblée. C’est ainsi que la croissance de Sultan Kösen fut stoppée. Un siècle plus tôt, Robert Wadlow n’avait pas cette option.',
          ],
          callout: {
            type: 'warning',
            text: 'Une taille extrême n’est pas simplement « être très grand » — elle s’accompagne de lourdes conséquences pour la santé : articulations abîmées, sollicitation cardiovasculaire et espérance de vie fortement réduite. Ces records sont des histoires médicales, pas des objectifs.',
          },
        },
        {
          id: 'comparer',
          heading: 'Voyez où vous vous situez',
          paragraphs: [
            'Curieux de savoir où vous vous situez face à Wadlow — ou face à une personne moyenne de n’importe quel pays ? Notre outil de comparaison gratuit vous permet de vous aligner côte à côte avec qui vous voulez :',
          ],
          link: {
            text: '→ Comparez votre taille',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'Qui est la personne vivante la plus grande ?',
          answer: 'Sultan Kösen, de Turquie, avec 251 cm (8′2,8″), reconnu par le Guinness World Records comme l’homme vivant le plus grand. La femme vivante la plus grande est Rumeysa Gelgi, également de Turquie, avec 215,16 cm.',
        },
        {
          question: 'Quelle était la taille de Robert Wadlow ?',
          answer: '272 cm (8′11,1″) — mesurés 18 jours avant sa mort en 1940. Cela reste la plus grande taille documentée de façon fiable dans l’histoire de l’humanité.',
        },
        {
          question: 'Qu’est-ce qui provoque les tailles extrêmes ?',
          answer: 'Presque toujours le gigantisme : une tumeur bénigne de l’hypophyse qui produit trop d’hormone de croissance pendant l’enfance, avant la soudure des cartilages de croissance. Une grande taille ordinaire, en revanche, est très majoritairement génétique et saine.',
        },
        {
          question: 'Quelqu’un pourrait-il dépasser Robert Wadlow ?',
          answer: 'Théoriquement possible, mais aucun cas vérifié ne s’en est approché depuis plus de 80 ans. La médecine moderne stoppe généralement tôt la croissance pathologique, et le Guinness exige une mesure indépendante rigoureuse — c’est pourquoi les affirmations historiques non vérifiées ne comptent pas.',
        },
      ],
      medicalDisclaimer: 'Contenu éducatif, non un avis médical. Le gigantisme et les troubles de la croissance sont des affections médicales — seul un professionnel de santé peut les diagnostiquer ou les traiter. Si une croissance anormale vous inquiète, consultez un médecin.',
      relatedLinks: [
        {
          text: 'Comparaison de taille',
          href: '/compare/',
        },
        {
          text: 'Taille moyenne par pays',
          href: '/articles/average-height-by-country/',
        },
        {
          text: 'Prédire la taille adulte de votre enfant',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    de: {
      id: 'tallest-people',
      slug: 'groesste-menschen-der-welt',
      title: 'Die größten Menschen der Welt: Rekorde und die Wissenschaft dahinter',
      subtitle: 'Von Robert Wadlows bestätigten 272 cm bis zu den heutigen lebenden Rekordhaltern — die wahren Geschichten hinter extremer Körpergröße und was sie wirklich verursacht.',
      metaDescription: 'Wer ist der größte Mensch der Welt? Robert Wadlow (272 cm) hält den Allzeit-Rekord; Sultan Kösen (251 cm) ist der größte lebende Mann. Geschichten, bestätigte Daten und die Wissenschaft des Gigantismus.',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6 Min. Lesezeit',
      badge: 'Rekorde & Geschichten',
      tocTitle: 'In diesem Artikel',
      intro: {
        lead: 'Der größte Mensch, der je zuverlässig vermessen wurde, war Robert Wadlow, ein Amerikaner, der vor seinem Tod 1940 ganze 272 cm (8 ft 11 in) erreichte. Der größte lebende Mann ist Sultan Kösen aus der Türkei mit 251 cm (8 ft 2.8 in).',
        paragraphs: [
          'Extreme Körpergröße fasziniert uns — doch hinter jedem Rekord steht ein echter Mensch, und meist eine medizinische Geschichte. Im Gegensatz zur gewöhnlichen Großwüchsigkeit, die größtenteils vererbt ist, sind Körpergrößen jenseits von etwa 230 cm fast immer die Folge einer Hormonstörung namens Gigantismus.',
          'Im Folgenden: die bestätigten Rekorde, die lebenden Titelträger und eine ehrliche Erklärung, warum extreme Körpergröße entsteht — erzählt mit dem Respekt, den diese Geschichten verdienen.',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: 'Robert Wadlow: der größte Mensch aller Zeiten',
          paragraphs: [
            'Robert Pershing Wadlow wurde 1918 in Alton, Illinois, geboren — ein normal großes Baby, das einfach nie aufhörte zu wachsen. Mit 8 Jahren war er bereits 188 cm groß, größer als sein Vater. Mit 18 maß er 254 cm, und er wuchs weiter bis zu seinem Todestag.',
            'Seine letzte gemessene Größe, 18 Tage vor seinem Tod, betrug 272 cm (8 ft 11.1 in) — ein Eintrag im Guinness-Buch der Rekorde, der seit über 80 Jahren unangefochten ist. Wadlow war als „Gentle Giant" (sanfter Riese) bekannt: nach allem, was man weiß, freundlich, leise und bemerkenswert gelassen angesichts der Menschenmengen, die ihm folgten.',
            'Doch seine Größe forderte einen schrecklichen Preis. Seine Beine und Füße brauchten maßgefertigte Schienen, und er hatte kaum Gefühl in ihnen. Im Juli 1940 rieb eine defekte Schiene eine Blase an seinem Knöchel auf, die sich entzündete. Er starb im Schlaf am 15. Juli, gerade einmal 22 Jahre alt. Sein Sarg wog fast eine halbe Tonne und brauchte zwölf Sargträger.',
          ],
          callout: {
            type: 'note',
            text: 'Wadlows Wachstum wurde durch eine Hyperplasie seiner Hirnanhangsdrüse verursacht, die seinen Körper mit Wachstumshormon flutete. Die Ärzte hatten damals keine Behandlung, die das hätte stoppen können.',
          },
        },
        {
          id: 'living-giants',
          heading: 'Die größten heute lebenden Menschen',
          paragraphs: [
            'Kein lebender Mensch ist an Wadlow herangekommen — doch die aktuellen Rekordhalter haben selbst bemerkenswerte Geschichten:',
          ],
          bulletPoints: [
            'Sultan Kösen (Türkei, geb. 1982) — 251 cm (8 ft 2.8 in), der größte lebende Mann. Sein Wachstum wurde durch einen Tumor an der Hirnanhangsdrüse angetrieben; nach einer Gamma-Knife-Operation 2010 stoppte sein Wachstum endlich. Wegen seiner Größe konnte er die Schule nicht beenden, fand später aber Arbeit und heiratete 2013.',
            'Rumeysa Gelgi (Türkei, geb. 1997) — 215,16 cm (7 ft 0.7 in), die größte lebende Frau. Ihre Größe rührt vom Weaver-Syndrom her, einer seltenen genetischen Erkrankung. Sie setzt sich für die Rechte von Menschen mit Behinderungen ein und nutzt meist einen Rollstuhl.',
          ],
          table: {
            headers: [
              'Person',
              'Größe',
              'Status',
            ],
            rows: [
              [
                'Robert Wadlow (USA)',
                '272 cm (8′11″)',
                'Allzeit-Rekord, bestätigt',
              ],
              [
                'John Rogan (USA)',
                '267 cm (8′9″)',
                'Bestätigt',
              ],
              [
                'John Carroll (USA)',
                '263,5 cm (8′7.7″)',
                'Bestätigt',
              ],
              [
                'Sultan Kösen (Türkei)',
                '251 cm (8′2.8″)',
                'Größter lebender Mann',
              ],
              [
                'Rumeysa Gelgi (Türkei)',
                '215,2 cm (7′0.7″)',
                'Größte lebende Frau',
              ],
            ],
            footnote: 'Größenangaben laut Guinness World Records und dokumentierten medizinischen Messungen. Viele historische Behauptungen über 272 cm wurden nie unabhängig überprüft.',
          },
          callout: {
            type: 'tip',
            text: 'Eine warnende Geschichte: Leonid Stadnyk aus der Ukraine behauptete 257 cm, verweigerte aber eine unabhängige Vermessung — und Guinness entzog ihm 2008 den Titel. Als Rekord zählt nur eine unabhängig bestätigte Messung.',
          },
        },
        {
          id: 'science',
          heading: 'Warum extreme Körpergröße entsteht: die Wissenschaft',
          paragraphs: [
            'Sehr groß zu sein — etwa 195 oder 200 cm — ist fast ausschließlich genetisch bedingt und völlig gesund. Extreme Körpergröße jenseits von etwa 230 cm ist etwas anderes: Sie deutet fast immer auf Gigantismus hin, eine seltene Hormonstörung.',
            'Die übliche Ursache ist ein gutartiger Tumor (Adenom) an der Hirnanhangsdrüse, der erbsengroßen Drüse an der Hirnbasis, die das Wachstumshormon steuert. Wenn sie in der Kindheit — bevor die Wachstumsfugen in den Knochen sich schließen — zu viel Hormon produziert, wächst das gesamte Skelett weit über sein genetisches Ziel hinaus.',
            'Beginnt derselbe Hormonüberschuss erst nach dem Schluss der Wachstumsfugen (im Erwachsenenalter), kann die Körpergröße nicht mehr zunehmen. Stattdessen vergrößern sich Hände, Füße und Kiefer — ein verwandtes Krankheitsbild namens Akromegalie.',
            'Die moderne Medizin kann Gigantismus behandeln: Operation zur Entfernung des Tumors, Medikamente zur Blockierung des Wachstumshormons oder gezielte Bestrahlung. Sultan Kösens Wachstum wurde auf diese Weise gestoppt. Vor hundert Jahren hatte Robert Wadlow diese Möglichkeit nicht.',
          ],
          callout: {
            type: 'warning',
            text: 'Extreme Körpergröße ist nicht einfach „extra groß" — sie bringt ernsthafte gesundheitliche Belastungen mit sich: Gelenkschäden, Herz-Kreislauf-Belastung und deutlich verkürzte Lebenserwartung. Diese Rekorde sind medizinische Geschichten, keine Ziele.',
          },
        },
        {
          id: 'compare',
          heading: 'Schau, wie du dich schlägst',
          paragraphs: [
            'Neugierig, wo du im Vergleich zu Wadlow stehst — oder zu einem Durchschnitt aus einem beliebigen Land? Unser kostenloses Vergleichstool stellt dich Seite an Seite neben jeden:',
          ],
          link: {
            text: '→ Jetzt Größe vergleichen',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'Wer ist der größte lebende Mensch?',
          answer: 'Sultan Kösen aus der Türkei mit 251 cm (8 ft 2.8 in), vom Guinness-Buch der Rekorde als größter lebender Mann anerkannt. Die größte lebende Frau ist Rumeysa Gelgi, ebenfalls aus der Türkei, mit 215,16 cm.',
        },
        {
          question: 'Wie groß war Robert Wadlow?',
          answer: '272 cm (8 ft 11.1 in) — gemessen 18 Tage vor seinem Tod 1940. Es bleibt die größte zuverlässig dokumentierte Körpergröße der Menschheitsgeschichte.',
        },
        {
          question: 'Was verursacht extreme Körpergröße?',
          answer: 'Fast immer Gigantismus: ein gutartiger Hirnanhangsdrüsen-Tumor, der in der Kindheit zu viel Wachstumshormon produziert, bevor die Wachstumsfugen der Knochen sich schließen. Gewöhnliche Großwüchsigkeit ist dagegen überwiegend genetisch und gesund.',
        },
        {
          question: 'Könnte jemand größer werden als Robert Wadlow?',
          answer: 'Theoretisch möglich, aber kein bestätigter Fall ist seit über 80 Jahren auch nur nahe herangekommen. Die moderne Medizin stoppt krankhaftes Wachstum meist frühzeitig, und Guinness verlangt eine rigorose unabhängige Vermessung — deshalb zählen unbestätigte historische Behauptungen nicht.',
        },
      ],
      medicalDisclaimer: 'Bildungsinhalt, keine medizinische Beratung. Gigantismus und Wachstumsstörungen sind Erkrankungen — nur medizinisches Fachpersonal kann sie diagnostizieren oder behandeln. Bei Bedenken über abnormales Wachstum einen Arzt aufsuchen.',
      relatedLinks: [
        {
          text: 'Größenvergleich',
          href: '/compare/',
        },
        {
          text: 'Durchschnittsgröße nach Land',
          href: '/articles/average-height-by-country/',
        },
        {
          text: 'Die erwachsene Größe deines Kindes vorhersagen',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    hi: {
      id: 'tallest-people',
      slug: 'duniya-ke-sabse-lambe-log',
      title: 'दुनिया के सबसे लंबे लोग: रिकॉर्ड और विज्ञान',
      subtitle: 'रॉबर्ट वाडलो के प्रमाणित 272 सेमी से लेकर आज के जीवित रिकॉर्ड धारकों तक — अत्यधिक लंबाई के पीछे की सच्ची कहानियां, और इसका असली कारण क्या है।',
      metaDescription: 'दुनिया का सबसे लंबा व्यक्ति कौन है? रॉबर्ट वाडलो (272 सेमी) के नाम सर्वकालिक रिकॉर्ड है; सुल्तान कोसेन (251 सेमी) सबसे लंबे जीवित पुरुष हैं। कहानियां, प्रमाणित आंकड़े और जाइगेंटिज्म का विज्ञान।',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6 मिनट में पढ़ें',
      badge: 'रिकॉर्ड और कहानियां',
      tocTitle: 'इस लेख में',
      intro: {
        lead: 'अब तक मापा गया सबसे लंबा व्यक्ति रॉबर्ट वाडलो था, एक अमेरिकी जिसकी लंबाई 1940 में मृत्यु से पहले 272 सेमी (8 फीट 11 इंच) तक पहुंच गई थी। सबसे लंबे जीवित पुरुष तुर्की के सुल्तान कोसेन हैं, जिनकी लंबाई 251 सेमी (8 फीट 2.8 इंच) है।',
        paragraphs: [
          'अत्यधिक लंबाई हमें मोहित करती है — लेकिन हर रिकॉर्ड के पीछे एक असली इंसान है, और आमतौर पर एक चिकित्सीय कहानी। सामान्य लंबाई के विपरीत, जो ज्यादातर विरासत में मिलती है, लगभग 230 सेमी से ऊपर की लंबाई लगभग हमेशा जाइगेंटिज्म नामक एक हार्मोनल स्थिति का परिणाम होती है।',
          'नीचे: प्रमाणित रिकॉर्ड, वर्तमान खिताब धारक, और अत्यधिक लंबाई क्यों होती है इसकी ईमानदार व्याख्या — उस सम्मान के साथ जिसके ये कहानियां हकदार हैं।',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: 'रॉबर्ट वाडलो: अब तक का सबसे लंबा व्यक्ति',
          paragraphs: [
            'रॉबर्ट पर्शिंग वाडलो का जन्म 1918 में इलिनोइस के आल्टन में हुआ था — एक सामान्य आकार का बच्चा जो बस बढ़ना बंद ही नहीं हुआ। 8 साल की उम्र तक वह पहले से ही 188 सेमी का था, अपने पिता से भी लंबा। 18 साल की उम्र में उसकी लंबाई 254 सेमी थी, और वह अपनी मृत्यु के दिन तक बढ़ता रहा।',
            'उसकी मृत्यु से 18 दिन पहले दर्ज की गई अंतिम लंबाई 272 सेमी (8 फीट 11.1 इंच) थी — गिनीज वर्ल्ड रिकॉर्ड्स की एक प्रविष्टि जो 80 से अधिक वर्षों से अटूट है। वाडलो को "जेंटल जायंट" के नाम से जाना जाता था: सभी के अनुसार वह दयालु, मृदुभाषी था, और उसके पीछे चलने वाली भीड़ को लेकर आश्चर्यजनक रूप से सहज था।',
            'लेकिन उसकी लंबाई की भारी कीमत चुकानी पड़ी। उसके पैरों और टांगों के लिए विशेष ब्रेस की जरूरत थी, और उनमें उसे बहुत कम महसूस होता था। जुलाई 1940 में, एक खराब ब्रेस ने उसके टखने पर छाला बना दिया जो संक्रमित हो गया। 15 जुलाई को, मात्र 22 साल की उम्र में, वह नींद में ही चल बसा। उसका ताबूत लगभग आधा टन वजनी था और उसे बारह कहारों की जरूरत पड़ी।',
          ],
          callout: {
            type: 'note',
            text: 'वाडलो की वृद्धि उसकी पिट्यूटरी ग्रंथि की अतिवृद्धि (हाइपरप्लासिया) के कारण हुई थी, जिसने उसके शरीर में ग्रोथ हार्मोन भर दिया था। उस समय के डॉक्टरों के पास इसे रोकने का कोई इलाज नहीं था।',
          },
        },
        {
          id: 'living-giants',
          heading: 'आज के सबसे लंबे जीवित लोग',
          paragraphs: [
            'कोई भी जीवित व्यक्ति वाडलो के करीब नहीं पहुंचा है — लेकिन वर्तमान रिकॉर्ड धारकों की अपनी कहानियां भी उल्लेखनीय हैं:',
          ],
          bulletPoints: [
            'सुल्तान कोसेन (तुर्की, जन्म 1982) — 251 सेमी (8 फीट 2.8 इंच), सबसे लंबे जीवित पुरुष। उनकी वृद्धि उनकी पिट्यूटरी ग्रंथि पर एक ट्यूमर के कारण हुई थी; 2010 में गामा-नाइफ सर्जरी के बाद, उनकी वृद्धि आखिरकार रुक गई। अपने आकार के कारण वह स्कूल पूरा नहीं कर सके, लेकिन बाद में उन्हें काम मिला और 2013 में उन्होंने शादी की।',
            'रुमेयसा गेलगी (तुर्की, जन्म 1997) — 215.16 सेमी (7 फीट 0.7 इंच), सबसे लंबी जीवित महिला। उनकी लंबाई वीवर सिंड्रोम के कारण है, एक दुर्लभ आनुवंशिक स्थिति। वह विकलांगता जागरूकता की समर्थक हैं और ज्यादातर व्हीलचेयर का उपयोग करती हैं।',
          ],
          table: {
            headers: [
              'व्यक्ति',
              'लंबाई',
              'स्थिति',
            ],
            rows: [
              [
                'रॉबर्ट वाडलो (अमेरिका)',
                '272 सेमी (8′11″)',
                'सर्वकालिक रिकॉर्ड, प्रमाणित',
              ],
              [
                'जॉन रोगन (अमेरिका)',
                '267 सेमी (8′9″)',
                'प्रमाणित',
              ],
              [
                'जॉन कैरोल (अमेरिका)',
                '263.5 सेमी (8′7.7″)',
                'प्रमाणित',
              ],
              [
                'सुल्तान कोसेन (तुर्की)',
                '251 सेमी (8′2.8″)',
                'सबसे लंबे जीवित पुरुष',
              ],
              [
                'रुमेयसा गेलगी (तुर्की)',
                '215.2 सेमी (7′0.7″)',
                'सबसे लंबी जीवित महिला',
              ],
            ],
            footnote: 'लंबाई गिनीज वर्ल्ड रिकॉर्ड्स और दस्तावेजीकृत चिकित्सीय माप के अनुसार। 272 सेमी से ऊपर के कई ऐतिहासिक दावे कभी स्वतंत्र रूप से प्रमाणित नहीं हुए।',
          },
          callout: {
            type: 'tip',
            text: 'एक चेतावनी भरी कहानी: यूक्रेन के लियोनिद स्टाडनिक ने 257 सेमी का दावा किया, लेकिन स्वतंत्र माप से इनकार कर दिया — और गिनीज ने 2008 में उनका खिताब छीन लिया। केवल स्वतंत्र रूप से प्रमाणित माप ही रिकॉर्ड के रूप में गिने जाते हैं।',
          },
        },
        {
          id: 'science',
          heading: 'अत्यधिक लंबाई क्यों होती है: विज्ञान',
          paragraphs: [
            'बहुत लंबा होना — मान लीजिए 195 या 200 सेमी — लगभग पूरी तरह आनुवंशिक है और बिल्कुल स्वस्थ है। लगभग 230 सेमी से ऊपर की अत्यधिक लंबाई अलग है: यह लगभग हमेशा जाइगेंटिज्म का संकेत देती है, एक दुर्लभ हार्मोनल विकार।',
            'आम कारण पिट्यूटरी ग्रंथि पर एक सौम्य ट्यूमर (एडिनोमा) होता है, वह मटर के आकार की ग्रंथि जो मस्तिष्क के आधार पर होती है और ग्रोथ हार्मोन को नियंत्रित करती है। जब यह बचपन में — हड्डियों में ग्रोथ प्लेट्स के जुड़ने से पहले — हार्मोन का अधिक उत्पादन करती है, तो पूरा कंकाल अपने आनुवंशिक लक्ष्य से कहीं आगे बढ़ता रहता है।',
            'यदि वही हार्मोन अधिकता ग्रोथ प्लेट्स के बंद होने के बाद (वयस्कता में) शुरू होती है, तो लंबाई अब नहीं बढ़ सकती। इसके बजाय हाथ, पैर और जबड़ा बड़े हो जाते हैं — एक संबंधित स्थिति जिसे एक्रोमेगली कहा जाता है।',
            'आधुनिक चिकित्सा जाइगेंटिज्म का इलाज कर सकती है: ट्यूमर हटाने के लिए सर्जरी, ग्रोथ हार्मोन को रोकने के लिए दवा, या लक्षित विकिरण। सुल्तान कोसेन की वृद्धि इसी तरह रोकी गई थी। एक सदी पहले, रॉबर्ट वाडलो के पास ऐसा कोई विकल्प नहीं था।',
          ],
          callout: {
            type: 'warning',
            text: 'अत्यधिक लंबाई सिर्फ "थोड़ा ज्यादा लंबा होना" नहीं है — इसके साथ गंभीर स्वास्थ्य बोझ आते हैं: जोड़ों का नुकसान, हृदय पर दबाव, और बहुत कम जीवन प्रत्याशा। ये रिकॉर्ड चिकित्सीय कहानियां हैं, लक्ष्य नहीं।',
          },
        },
        {
          id: 'compare',
          heading: 'देखें आप कहां खड़े हैं',
          paragraphs: [
            'जानना चाहते हैं कि वाडलो के बगल में — या किसी भी देश के औसत व्यक्ति के बगल में — आप कहां खड़े हैं? हमारा मुफ्त तुलना टूल आपको किसी से भी, आमने-सामने, खुद को मिलाने देता है:',
          ],
          link: {
            text: '→ अभी अपनी लंबाई की तुलना करें',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'सबसे लंबा जीवित व्यक्ति कौन है?',
          answer: 'तुर्की के सुल्तान कोसेन, 251 सेमी (8 फीट 2.8 इंच), गिनीज वर्ल्ड रिकॉर्ड्स द्वारा सबसे लंबे जीवित पुरुष के रूप में मान्यता प्राप्त। सबसे लंबी जीवित महिला भी तुर्की की रुमेयसा गेलगी हैं, 215.16 सेमी।',
        },
        {
          question: 'रॉबर्ट वाडलो कितने लंबे थे?',
          answer: '272 सेमी (8 फीट 11.1 इंच) — 1940 में उनकी मृत्यु से 18 दिन पहले मापा गया। यह मानव इतिहास में अब तक की सबसे लंबी विश्वसनीय रूप से दस्तावेजीकृत लंबाई है।',
        },
        {
          question: 'अत्यधिक लंबाई का क्या कारण है?',
          answer: 'लगभग हमेशा जाइगेंटिज्म: बचपन में, हड्डियों की ग्रोथ प्लेट्स के जुड़ने से पहले, ग्रोथ हार्मोन का अधिक उत्पादन करने वाला एक सौम्य पिट्यूटरी ट्यूमर। इसके विपरीत, सामान्य लंबाई भारी मात्रा में आनुवंशिक और स्वस्थ होती है।',
        },
        {
          question: 'क्या कोई रॉबर्ट वाडलो से लंबा हो सकता है?',
          answer: 'सैद्धांतिक रूप से संभव है, लेकिन 80 से अधिक वर्षों में कोई प्रमाणित मामला करीब भी नहीं आया। आधुनिक इलाज आमतौर पर रोगजनक वृद्धि को जल्दी रोक देता है, और गिनीज को कठोर स्वतंत्र माप की आवश्यकता होती है — इसीलिए अप्रमाणित ऐतिहासिक दावे गिने नहीं जाते।',
        },
      ],
      medicalDisclaimer: 'शैक्षणिक सामग्री, चिकित्सीय सलाह नहीं। जाइगेंटिज्म और वृद्धि विकार चिकित्सीय स्थितियां हैं — केवल एक स्वास्थ्य पेशेवर ही इनका निदान या इलाज कर सकता है। यदि आपको असामान्य वृद्धि को लेकर चिंता है, तो डॉक्टर से परामर्श करें।',
      relatedLinks: [
        {
          text: 'लंबाई की तुलना',
          href: '/compare/',
        },
        {
          text: 'देश के अनुसार औसत लंबाई',
          href: '/articles/average-height-by-country/',
        },
        {
          text: 'अपने बच्चे की वयस्क लंबाई का अनुमान लगाएं',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    ja: {
      id: 'tallest-people',
      slug: 'sekaiichi-se-no-takai-hitobito',
      title: '世界で最も背の高い人々：記録と科学',
      subtitle: 'ロバート・ワドローの検証済み272cmから、現在生きている記録保持者まで——異常な高身長の背後にある真実の物語と、その原因を解説します。',
      metaDescription: '世界で最も背の高い人は？ ロバート・ワドロー（272cm）が歴代記録保持者、スルタン・キョセン（251cm）は存命で最も背の高い男性。検証済みの記録、物語、そして巨人症の科学。',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6分で読める',
      badge: '記録と物語',
      tocTitle: 'この記事の内容',
      intro: {
        lead: '信頼できる記録が残る中で最も背の高い人は、1940年に亡くなるまでに272cm（8フィート11インチ）に達したアメリカ人のロバート・ワドローです。存命で最も背の高い男性は、トルコのスルタン・キョセンで、251cm（8フィート2.8インチ）です。',
        paragraphs: [
          '異常な高身長は私たちを魅了します。しかし記録の背後にはいつも実在の人物がいて、多くの場合、医学的な物語があります。遺伝が大半を占める普通の高身長とは異なり、およそ230cmを超える身長は、ほぼ例外なく「巨人症」と呼ばれるホルモン異常が原因です。',
          '以下では、検証済みの記録、存命の記録保持者、そしてなぜ異常な高身長が起こるのかを、これらの物語にふさわしい敬意をもって正直に解説します。',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: 'ロバート・ワドロー：史上最も背の高い人物',
          paragraphs: [
            'ロバート・パーシング・ワドローは1918年、イリノイ州オルトンで生まれました。生まれたときは普通の大きさの赤ちゃんでしたが、成長がまったく止まりませんでした。8歳のときにはすでに188cmあり、父親より背が高くなっていました。18歳で254cmを記録し、亡くなるその日まで伸び続けました。',
            '亡くなる18日前に測定された最終記録は272cm（8フィート11.1インチ）——ギネス世界記録として80年以上、誰にも破られていない記録です。ワドローは「優しい巨人（ジェントル・ジャイアント）」として知られ、周囲の証言によれば、親切で物静か、そして群がる人々に対して驚くほど穏やかな人でした。',
            'しかし、その身長には大きな代償が伴いました。脚と足には特注の装具が必要で、感覚もほとんどありませんでした。1940年7月、装具の不具合で足首にできた水ぶくれが感染し、彼は7月15日、わずか22歳で眠るように亡くなりました。棺の重さは約500kg近くあり、担ぐのに12人が必要でした。',
          ],
          callout: {
            type: 'note',
            text: 'ワドローの成長は、脳下垂体の過形成が原因で、体内に成長ホルモンが過剰に分泌されたことによるものでした。当時の医師には、それを止める治療法がありませんでした。',
          },
        },
        {
          id: 'living-giants',
          heading: '現在生きている最も背の高い人々',
          paragraphs: [
            'ワドローに迫る人物は今もいませんが、現在の記録保持者にもそれぞれ驚くべき物語があります：',
          ],
          bulletPoints: [
            'スルタン・キョセン（トルコ、1982年生まれ）——251cm（8フィート2.8インチ）、存命で最も背の高い男性。成長の原因は脳下垂体の腫瘍でしたが、2010年のガンマナイフ手術により、ついに成長が止まりました。体格のため学校を卒業できませんでしたが、その後仕事を見つけ、2013年に結婚しました。',
            'ルメイサ・ゲルギ（トルコ、1997年生まれ）——215.16cm（7フィート0.7インチ）、存命で最も背の高い女性。身長の原因はウィーバー症候群という稀な遺伝性疾患です。障害への理解を広める活動家であり、主に車椅子で生活しています。',
          ],
          table: {
            headers: [
              '人物',
              '身長',
              '状況',
            ],
            rows: [
              [
                'ロバート・ワドロー（アメリカ）',
                '272cm（8フィート11インチ）',
                '歴代記録、検証済み',
              ],
              [
                'ジョン・ローガン（アメリカ）',
                '267cm（8フィート9インチ）',
                '検証済み',
              ],
              [
                'ジョン・キャロル（アメリカ）',
                '263.5cm（8フィート7.7インチ）',
                '検証済み',
              ],
              [
                'スルタン・キョセン（トルコ）',
                '251cm（8フィート2.8インチ）',
                '存命で最も背の高い男性',
              ],
              [
                'ルメイサ・ゲルギ（トルコ）',
                '215.2cm（7フィート0.7インチ）',
                '存命で最も背の高い女性',
              ],
            ],
            footnote: '身長はギネス世界記録および記録に残る医学的測定に基づきます。272cmを上回るとされる歴史上の主張の多くは、独立した検証を受けたことがありません。',
          },
          callout: {
            type: 'tip',
            text: '教訓となる話：ウクライナのレオニード・スタドニクは257cmを主張しましたが、独立した測定を拒否し、2008年にギネスの称号を剥奪されました。記録として認められるのは、独立して検証された測定値だけです。',
          },
        },
        {
          id: 'science',
          heading: 'なぜ異常な高身長が起こるのか：科学',
          paragraphs: [
            '195cmや200cmといった「とても背が高い」のは、ほぼ完全に遺伝によるもので、まったく健康です。しかし、およそ230cmを超える異常な高身長は別物で、ほぼ例外なく巨人症という稀なホルモン異常を示します。',
            '一般的な原因は、脳の基底部にある小指大の腺「脳下垂体」にできる良性腫瘍（腺腫）です。骨の成長板が閉じる前の小児期に成長ホルモンが過剰に分泌されると、遺伝的な目標をはるかに超えて全身の骨格が伸び続けます。',
            '同じホルモン過剰が、成長板が閉じた後（成人期）に始まった場合は、身長は伸びません。その代わり、手・足・顎が大きくなる「先端巨大症」という関連疾患になります。',
            '現代医学では巨人症を治療できます。腫瘍を摘出する手術、成長ホルモンを抑える薬、標的を絞った放射線治療などです。スルタン・キョセンの成長はこの方法で止まりました。100年前のロバート・ワドローには、この選択肢がありませんでした。',
          ],
          callout: {
            type: 'warning',
            text: '異常な高身長は単なる「もっと背が高い」ではありません。関節の損傷、心血管への負担、著しく短い平均寿命など、深刻な健康上の負担を伴います。これらの記録は医学的な物語であり、目指すべき目標ではありません。',
          },
        },
        {
          id: 'compare',
          heading: 'あなたはどのくらい？比べてみましょう',
          paragraphs: [
            'ワドローや世界各国の平均的な人と比べて、あなたはどの位置にいるでしょうか？ 無料の比較ツールで、並べて比べてみましょう：',
          ],
          link: {
            text: '→ 今すぐ身長を比べる',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: '存命で最も背の高い人は誰ですか？',
          answer: 'トルコのスルタン・キョセンで、251cm（8フィート2.8インチ）。ギネス世界記録が認める存命で最も背の高い男性です。存命で最も背の高い女性は、同じくトルコのルメイサ・ゲルギで215.16cmです。',
        },
        {
          question: 'ロバート・ワドローの身長はどのくらいでしたか？',
          answer: '272cm（8フィート11.1インチ）——1940年に亡くなる18日前に測定されました。人類史上、信頼できる記録が残る中で最も高い身長です。',
        },
        {
          question: '異常な高身長の原因は何ですか？',
          answer: 'ほぼ例外なく巨人症です。小児期に骨の成長板が閉じる前に、脳下垂体の良性腫瘍が成長ホルモンを過剰に分泌することで起こります。一方、普通の高身長は圧倒的に遺伝によるもので、健康的です。',
        },
        {
          question: 'ワドローより背の高い人は現れますか？',
          answer: '理論的には可能ですが、80年以上にわたり検証済みの事例は一つもありません。現代では病的な成長は早期に治療で止まることが多く、ギネスは厳密な独立測定を要求するため、検証されていない歴史上の主張は記録として認められません。',
        },
      ],
      medicalDisclaimer: '教育目的のコンテンツであり、医学的アドバイスではありません。巨人症や成長障害は医学的な疾患であり、診断や治療は医療専門家だけが行えます。異常な成長について心配がある場合は、医師に相談してください。',
      relatedLinks: [
        {
          text: '身長の比較',
          href: '/compare/',
        },
        {
          text: '国別の平均身長',
          href: '/articles/average-height-by-country/',
        },
        {
          text: '子どもの将来の身長を予測する',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    ko: {
      id: 'tallest-people',
      slug: 'sesangeseo-gajang-keun-saramdeul',
      title: '세계에서 가장 키가 큰 사람들: 기록과 그 이면의 과학',
      subtitle: '검증된 272cm의 로버트 와들로우부터 오늘날 살아 있는 기록 보유자들까지 — 비정상적인 키 뒤에 숨겨진 진짜 이야기와 그 원인을 알아봅니다.',
      metaDescription: '세계에서 가장 키가 큰 사람은? 로버트 와들로우(272cm)가 역대 최고 기록 보유자이며, 술탄 쾨센(251cm)이 현재 살아 있는 가장 키가 큰 남성입니다. 이야기, 검증된 데이터, 거인증의 과학.',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6분 읽기',
      badge: '기록과 이야기',
      tocTitle: '이 글의 내용',
      intro: {
        lead: '신뢰할 수 있게 측정된 역대 가장 키가 큰 사람은 1940년 사망 전 272cm(8 ft 11 in)에 도달한 미국인 로버트 와들로우입니다. 현재 살아 있는 가장 키가 큰 남성은 터키의 술탄 쾨센으로, 251cm(8 ft 2.8 in)입니다.',
        paragraphs: [
          '비정상적인 키는 우리를 매료시킵니다. 하지만 모든 기록 뒤에는 실제 인물이 있고, 대개는 의학적인 이야기가 있습니다. 유전이 대부분을 차지하는 일반적인 장신과 달리, 대략 230cm를 넘는 키는 거의 항상 거인증이라는 호르몬 질환의 결과입니다.',
          '아래에서 검증된 기록들, 현재 살아 있는 기록 보유자들, 그리고 비정상적인 키가 왜 생기는지에 대한 솔직한 설명을 전해드립니다 — 이 이야기들이 마땅히 받아야 할 존중을 담아서요.',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: '로버트 와들로우: 역대 가장 키가 큰 사람',
          paragraphs: [
            '로버트 퍼싱 와들로우는 1918년 미국 일리노이주 앨턴에서 태어났습니다 — 평범한 크기의 아기였지만, 성장이 멈추지 않았습니다. 8살 때 이미 188cm로 아버지보다 컸고, 18살에는 254cm를 기록했으며, 세상을 떠나기 직전까지 계속 자랐습니다.',
            '사망 18일 전에 측정된 그의 마지막 키는 272cm(8 ft 11.1 in) — 기네스 세계기록으로 80년 넘게 깨지지 않고 있습니다. 와들로우는 "온화한 거인(Gentle Giant)"으로 불렸습니다. 알려진 바에 따르면 그는 친절하고 말수가 적었으며, 자신을 따라다니는 인파를 놀라울 정도로 너그럽게 대했습니다.',
            '하지만 그의 키에는 끔찍한 대가가 따랐습니다. 다리와 발에는 맞춤형 보조기가 필요했고, 감각이 거의 없었습니다. 1940년 7월, 불량 보조기가 발목에 물집을 만들었고 그것이 감염되었습니다. 그는 7월 15일, 겨우 22살의 나이로 잠든 채 세상을 떠났습니다. 그의 관은 무게가 거의 0.5톤에 달해 열두 명의 운구인이 필요했습니다.',
          ],
          callout: {
            type: 'note',
            text: '와들로우의 성장은 뇌하수체 과형성 때문이었습니다. 뇌하수체가 성장호르몬을 과다 분비해 몸이 멈추지 않고 자란 것입니다. 당시 의사들에게는 이를 멈출 치료법이 없었습니다.',
          },
        },
        {
          id: 'living-giants',
          heading: '오늘날 살아 있는 가장 키가 큰 사람들',
          paragraphs: [
            '살아 있는 사람 중 와들로우에 근접한 사람은 아무도 없습니다 — 하지만 현재 기록 보유자들의 이야기도 놀랍습니다.',
          ],
          bulletPoints: [
            '술탄 쾨센(터키, 1982년생) — 251cm(8 ft 2.8 in), 살아 있는 가장 키가 큰 남성. 뇌하수체 종양 때문에 성장이 멈추지 않았고, 2010년 감마나이프 수술을 받은 뒤에야 성장이 멈췄습니다. 키 때문에 학업을 마치지 못했지만, 이후 일자리를 얻고 2013년에 결혼했습니다.',
            '루메이사 겔기(터키, 1997년생) — 215.16cm(7 ft 0.7 in), 살아 있는 가장 키가 큰 여성. 희귀 유전 질환인 위버 증후군 때문입니다. 장애 인식 개선을 위한 활동을 하고 있으며, 주로 휠체어를 사용합니다.',
          ],
          table: {
            headers: [
              '인물',
              '키',
              '기록 상태',
            ],
            rows: [
              [
                '로버트 와들로우 (미국)',
                '272 cm (8′11″)',
                '역대 최고 기록, 검증됨',
              ],
              [
                '존 로건 (미국)',
                '267 cm (8′9″)',
                '검증됨',
              ],
              [
                '존 캐럴 (미국)',
                '263.5 cm (8′7.7″)',
                '검증됨',
              ],
              [
                '술탄 쾨센 (터키)',
                '251 cm (8′2.8″)',
                '살아 있는 가장 키가 큰 남성',
              ],
              [
                '루메이사 겔기 (터키)',
                '215.2 cm (7′0.7″)',
                '살아 있는 가장 키가 큰 여성',
              ],
            ],
            footnote: '기네스 세계기록과 문서화된 의학 측정 기준. 272cm를 넘는 역사적 주장 중 상당수는 독립적으로 검증된 적이 없습니다.',
          },
          callout: {
            type: 'tip',
            text: '교훈이 되는 사례: 우크라이나의 레오니드 스타드니크는 257cm라고 주장했지만 독립 측정을 거부했고, 기네스는 2008년 그의 타이틀을 박탈했습니다. 독립적으로 검증된 측정만이 기록으로 인정됩니다.',
          },
        },
        {
          id: 'science',
          heading: '비정상적인 키가 생기는 이유: 과학',
          paragraphs: [
            '이를테면 195cm나 200cm처럼 매우 큰 키는 거의 전적으로 유전이며 건강상 아무 문제가 없습니다. 하지만 약 230cm를 넘는 극단적인 키는 다릅니다. 이는 거의 항상 거인증이라는 드문 호르몬 질환의 신호입니다.',
            '가장 흔한 원인은 뇌하수체에 생긴 양성 종양(선종)입니다. 뇌하수체는 뇌 밑바닥에 있는 완두콩만 한 샘으로 성장호르몬을 조절합니다. 이 샘이 어린 시절 — 뼈의 성장판이 닫히기 전에 — 호르몬을 과다 분비하면, 골격 전체가 유전적 목표를 훨씬 넘어 계속 자랍니다.',
            '같은 호르몬 과다가 성장판이 닫힌 성인기에 시작되면 키는 더 이상 자라지 않습니다. 대신 손, 발, 턱이 커지는 관련 질환인 말단비대증이 나타납니다.',
            '현대 의학은 거인증을 치료할 수 있습니다. 종양을 제거하는 수술, 성장호르몬을 차단하는 약물, 정밀 방사선 치료 등이 있습니다. 술탄 쾨센의 성장도 이런 방식으로 멈췄습니다. 100년 전 로버트 와들로우에게는 그런 선택지가 없었습니다.',
          ],
          callout: {
            type: 'warning',
            text: '극단적인 키는 단순히 "조금 더 큰 키"가 아닙니다. 관절 손상, 심혈관 부담, 크게 단축된 수명 등 심각한 건강 부담이 따릅니다. 이 기록들은 목표가 아니라 의학적 이야기입니다.',
          },
        },
        {
          id: 'compare',
          heading: '와들로우와 나를 비교해 보세요',
          paragraphs: [
            '와들로우 옆에 서면 내가 어떻게 보일지, 혹은 어느 나라 평균과 비교하면 어떤지 궁금하신가요? 무료 비교 도구로 나란히 비교해 보세요.',
          ],
          link: {
            text: '→ 지금 내 키 비교하기',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: '현재 살아 있는 가장 키가 큰 사람은 누구인가요?',
          answer: '터키의 술탄 쾨센으로, 251cm(8 ft 2.8 in)이며 기네스 세계기록이 인정한 살아 있는 가장 키가 큰 남성입니다. 살아 있는 가장 키가 큰 여성은 역시 터키의 루메이사 겔기로, 215.16cm입니다.',
        },
        {
          question: '로버트 와들로우는 얼마나 컸나요?',
          answer: '272cm(8 ft 11.1 in) — 1940년 사망 18일 전에 측정되었습니다. 인류 역사상 신뢰할 수 있게 문서화된 가장 큰 키로 남아 있습니다.',
        },
        {
          question: '비정상적인 키의 원인은 무엇인가요?',
          answer: '거의 항상 거인증 때문입니다. 어린 시절 뼈의 성장판이 닫히기 전에 양성 뇌하수체 종양이 성장호르몬을 과다 분비하는 것입니다. 반면 일반적인 장신은 압도적으로 유전이며 건강합니다.',
        },
        {
          question: '로버트 와들로우보다 더 클 수 있을까요?',
          answer: '이론적으로는 가능하지만, 80년 넘게 검증된 사례 중 그에 근접한 경우는 없었습니다. 현대 치료는 대개 병적 성장을 조기에 멈추게 하고, 기네스는 엄격한 독립 측정을 요구하기 때문에 검증되지 않은 역사적 주장은 인정되지 않습니다.',
        },
      ],
      medicalDisclaimer: '교육 목적의 콘텐츠이며 의학적 조언이 아닙니다. 거인증과 성장 장애는 의학적 질환으로, 진단과 치료는 의료 전문가만이 할 수 있습니다. 비정상적인 성장에 대한 우려가 있다면 의사와 상담하세요.',
      relatedLinks: [
        {
          text: '키 비교하기',
          href: '/compare/',
        },
        {
          text: '국가별 평균 키',
          href: '/articles/average-height-by-country/',
        },
        {
          text: '우리 아이의 성인 키 예측하기',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    ar: {
      id: 'tallest-people',
      slug: 'atwal-nas-fi-al-3alam',
      title: 'أطول الناس في العالم: الأرقام القياسية والعلم وراءها',
      subtitle: 'من روبرت وادلو الذي بلغ 272 سم وفق قياسات موثقة، إلى حاملي الألقاب الأحياء اليوم — القصص الحقيقية وراء الطول الشديد، وما الذي يسببه فعلاً.',
      metaDescription: 'من هو أطول شخص في العالم؟ روبرت وادلو (272 سم) صاحب الرقم القياسي عبر التاريخ؛ وسلطان كوسن (251 سم) أطول رجل حي. قصص وبيانات موثقة وشرح علم العملقة.',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6 دقائق للقراءة',
      badge: 'أرقام وقصص',
      tocTitle: 'في هذا المقال',
      intro: {
        lead: 'أطول شخص تم قياسه بشكل موثوق في التاريخ هو روبرت وادلو، الأمريكي الذي بلغ 272 سم (8 أقدام و11 بوصة) قبل وفاته عام 1940. أما أطول رجل حي فهو سلطان كوسن من تركيا، بطول 251 سم (8 أقدام و2.8 بوصة).',
        paragraphs: [
          'الطول الشديد يثير فضولنا — لكن وراء كل رقم قياسي إنسان حقيقي، وغالباً قصة طبية. فعلى عكس الطول العادي الذي تحدده الوراثة في معظمه، فإن الأطوال التي تتجاوز 230 سم تنتج في الغالب عن حالة هرمونية تُسمى العملقة.',
          'في ما يلي: الأرقام القياسية الموثقة، وحاملو الألقاب الأحياء، وشرح صادق لأسباب الطول الشديد — بقدر الاحترام الذي تستحقه هذه القصص.',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: 'روبرت وادلو: أطول إنسان في التاريخ',
          paragraphs: [
            'وُلد روبرت بيرشينغ وادلو في ألتون بولاية إلينوي عام 1918 — طفلاً بحجم طبيعي لم يتوقف عن النمو أبداً. في سن الثامنة كان قد بلغ 188 سم، أطول من والده. وفي الثامنة عشرة قيس طوله 254 سم، واستمر في النمو حتى يوم وفاته.',
            'كان آخر طول مسجل له، قبل 18 يوماً من وفاته، 272 سم (8 أقدام و11.1 بوصة) — رقم في موسوعة غينيس ظل صامداً بلا منازع لأكثر من 80 عاماً. عُرف وادلو بلقب «العملاق اللطيف»: كان، بشهادة الجميع، طيباً، هادئاً، ويتعامل بروح طيبة مع الحشود التي كانت تتبعه.',
            'لكن طوله جاء بثمن باهظ. كانت ساقاه وقدماه تحتاجان إلى دعامات مخصصة، وكان إحساسه بهما ضعيفاً. وفي يوليو 1940، سببت دعامة معيبة احتكاكاً أدى إلى ظهور بثرة في كاحله تحولت إلى عدوى. توفي في نومه في 15 يوليو، وعمره 22 عاماً فقط. وزن نعشه قرابة نصف طن، واحتاج إلى اثني عشر حاملاً.',
          ],
          callout: {
            type: 'note',
            text: 'كان سبب نمو وادلو تضخماً في الغدة النخامية أغرق جسمه بهرمون النمو. ولم يكن لدى أطباء ذلك العصر أي علاج يمكن أن يوقف ذلك.',
          },
        },
        {
          id: 'living-giants',
          heading: 'أطول الناس الأحياء اليوم',
          paragraphs: [
            'لم يقترب أي شخص حي من رقم وادلو — لكن لحاملي الألقاب الحاليين قصص رائعة بحد ذاتها:',
          ],
          bulletPoints: [
            'سلطان كوسن (تركيا، وُلد 1982) — 251 سم (8 أقدام و2.8 بوصة)، أطول رجل حي. كان سبب نموه ورماً في الغدة النخامية؛ وبعد جراحة بأشعة غاما عام 2010 توقف نموه أخيراً. لم يستطع إتمام دراسته بسبب حجمه، لكنه وجد عملاً لاحقاً وتزوج عام 2013.',
            'روميسا غيلغي (تركيا، وُلدت 1997) — 215.16 سم (7 أقدام و0.7 بوصة)، أطول امرأة حية. يعود طولها إلى متلازمة ويفر، وهي حالة وراثية نادرة. وهي ناشطة في التوعية بحقوق ذوي الإعاقة وتستخدم الكرسي المتحرك غالباً.',
          ],
          table: {
            headers: [
              'الشخص',
              'الطول',
              'الحالة',
            ],
            rows: [
              [
                'روبرت وادلو (الولايات المتحدة)',
                '272 سم (8′11″)',
                'الرقم القياسي عبر التاريخ، موثق',
              ],
              [
                'جون روغان (الولايات المتحدة)',
                '267 سم (8′9″)',
                'موثق',
              ],
              [
                'جون كارول (الولايات المتحدة)',
                '263.5 سم (8′7.7″)',
                'موثق',
              ],
              [
                'سلطان كوسن (تركيا)',
                '251 سم (8′2.8″)',
                'أطول رجل حي',
              ],
              [
                'روميسا غيلغي (تركيا)',
                '215.2 سم (7′0.7″)',
                'أطول امرأة حية',
              ],
            ],
            footnote: 'الأطوال وفق موسوعة غينيس للأرقام القياسية وقياسات طبية موثقة. كثير من الادعاءات التاريخية التي تتجاوز 272 سم لم يتم التحقق منها بشكل مستقل.',
          },
          callout: {
            type: 'tip',
            text: 'قصة للعبرة: ادعى ليونيد ستادنيك من أوكرانيا أنه بلغ 257 سم، لكنه رفض القياس المستقل — فسحبت منه غينيس اللقب عام 2008. القياسات الموثقة بشكل مستقل وحدها تُحتسب كأرقام قياسية.',
          },
        },
        {
          id: 'science',
          heading: 'لماذا يحدث الطول الشديد: العلم',
          paragraphs: [
            'أن تكون طويلاً جداً — مثل 195 أو 200 سم — أمر تحدده الوراثة في الغالب وهو طبيعي تماماً. أما الطول الشديد الذي يتجاوز 230 سم فأمر مختلف: فهو يكاد يكون دائماً علامة على العملقة، وهي اضطراب هرموني نادر.',
            'السبب المعتاد هو ورم حميد (ورم غدي) في الغدة النخامية، وهي غدة بحجم حبة البازلاء في قاعدة الدماغ تتحكم في هرمون النمو. فعندما تفرز كميات زائدة من الهرمون في مرحلة الطفولة — قبل التحام صفائح النمو في العظام — يستمر الهيكل العظمي كله في النمو متجاوزاً بكثير الهدف الوراثي.',
            'أما إذا بدأت زيادة الهرمون نفسها بعد إغلاق صفائح النمو (في سن الرشد)، فلا يمكن أن يزداد الطول. بدلاً من ذلك تتضخم اليدان والقدمان والفك — وهي حالة ذات صلة تُسمى ضخامة الأطراف (الأكروميغالي).',
            'يمكن للطب الحديث علاج العملقة: جراحة لإزالة الورم، أو أدوية لمنع هرمون النمو، أو إشعاع موجه. وهكذا توقف نمو سلطان كوسن. أما قبل قرن من الزمن، فلم يكن أمام روبرت وادلو أي خيار من هذا القبيل.',
          ],
          callout: {
            type: 'warning',
            text: 'الطول الشديد ليس مجرد «طول زائد» — بل يأتي مع أعباء صحية خطيرة: تلف المفاصل، وإجهاد القلب والأوعية الدموية، وانخفاض كبير في متوسط العمر المتوقع. هذه الأرقام قصص طبية، وليست أهدافاً.',
          },
        },
        {
          id: 'compare',
          heading: 'انظر أين تقف أنت',
          paragraphs: [
            'هل لديك فضول لتعرف أين تقف مقارنةً بوادلو — أو مقارنةً بشخص متوسط الطول من أي دولة؟ أداة المقارنة المجانية لدينا تتيح لك أن تضع نفسك بجانب أي شخص، جنباً إلى جنب:',
          ],
          link: {
            text: '← قارن طولك الآن',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'من هو أطول شخص حي؟',
          answer: 'سلطان كوسن من تركيا، بطول 251 سم (8 أقدام و2.8 بوصة)، المعترف به من موسوعة غينيس للأرقام القياسية كأطول رجل حي. أما أطول امرأة حية فهي روميسا غيلغي، من تركيا أيضاً، بطول 215.16 سم.',
        },
        {
          question: 'كم كان طول روبرت وادلو؟',
          answer: '272 سم (8 أقدام و11.1 بوصة) — قيس قبل 18 يوماً من وفاته عام 1940. وما يزال أطول طول موثق بشكل موثوق في تاريخ البشرية.',
        },
        {
          question: 'ما الذي يسبب الطول الشديد؟',
          answer: 'في الغالب العملقة: ورم حميد في الغدة النخامية يفرز كميات زائدة من هرمون النمو في مرحلة الطفولة، قبل التحام صفائح النمو في العظام. أما الطول العادي، بالمقابل، فتحدده الوراثة في الغالب وهو أمر صحي.',
        },
        {
          question: 'هل يمكن أن يتجاوز أحد طول روبرت وادلو؟',
          answer: 'نظرياً ممكن، لكن لم تقترب أي حالة موثقة من رقمه منذ أكثر من 80 عاماً. فالعلاج الحديث عادةً ما يوقف النمو المرضي مبكراً، وتشترط غينيس قياساً مستقلاً صارماً — ولهذا لا تُحتسب الادعاءات التاريخية غير الموثقة.',
        },
      ],
      medicalDisclaimer: 'محتوى تثقيفي وليس استشارة طبية. العملقة واضطرابات النمو حالات طبية — ولا يمكن تشخيصها أو علاجها إلا مختص صحي. إذا كانت لديك مخاوف بشأن نمو غير طبيعي، فاستشر طبيباً.',
      relatedLinks: [
        {
          text: 'مقارنة الطول',
          href: '/compare/',
        },
        {
          text: 'متوسط الطول حسب الدولة',
          href: '/articles/average-height-by-country/',
        },
        {
          text: 'توقع طول طفلك عند البلوغ',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    ru: {
      id: 'tallest-people',
      slug: 'samye-vysokie-lyudi-v-mire',
      title: 'Самые высокие люди в мире: рекорды и наука',
      subtitle: 'От подтверждённых 272 см Роберта Уодлоу до современных обладателей рекордов — реальные истории экстремального роста и объяснение его причин.',
      metaDescription: 'Кто самый высокий человек в мире? Роберт Уодлоу (272 см) — обладатель абсолютного рекорда; Султан Кёсен (251 см) — самый высокий из ныне живущих. Истории, проверенные данные и наука о гигантизме.',
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      readTime: '6 мин чтения',
      badge: 'Рекорды и истории',
      tocTitle: 'В этой статье',
      intro: {
        lead: 'Самым высоким человеком, чей рост был достоверно измерен, был американец Роберт Уодлоу — 272 см (8 футов 11 дюймов) незадолго до его смерти в 1940 году. Самый высокий из ныне живущих мужчин — Султан Кёсен из Турции, его рост составляет 251 см (8 футов 2,8 дюйма).',
        paragraphs: [
          'Экстремальный рост завораживает, но за каждым рекордом стоит реальный человек — и, как правило, медицинская история. В отличие от обычного высокого роста, который в основном наследственный, рост выше примерно 230 см почти всегда является следствием гормонального заболевания — гигантизма.',
          'Далее: подтверждённые рекорды, обладатели титулов среди ныне живущих и честное объяснение того, почему возникает экстремальный рост, — рассказанное с уважением, которого заслуживают эти истории.',
        ],
      },
      sections: [
        {
          id: 'wadlow',
          heading: 'Роберт Уодлоу: самый высокий человек в истории',
          paragraphs: [
            'Роберт Першинг Уодлоу родился в городе Олтон, штат Иллинойс, в 1918 году — обычным младенцем, который просто не перестал расти. К восьми годам его рост составлял уже 188 см — выше, чем у отца. В 18 лет он достиг 254 см и продолжал расти вплоть до дня своей смерти.',
            'Его последний зафиксированный рост, измеренный за 18 дней до смерти, составил 272 см (8 футов 11,1 дюйма) — запись в Книге рекордов Гиннесса, которая остаётся непревзойдённой уже более 80 лет. Уодлоу был известен как «Нежный великан»: по свидетельствам очевидцев, он был добрым, мягким в общении и на удивление спокойно относился к толпам, которые его преследовали.',
            'Но рост дался ему страшной ценой. Ноги и стопы требовали индивидуальных ортезов, и он почти не чувствовал их. В июле 1940 года неисправный ортез натёр мозоль на лодыжке, которая воспалилась. Он умер во сне 15 июля, в возрасте всего 22 лет. Его гроб весил почти полтонны, и его несли двенадцать человек.',
          ],
          callout: {
            type: 'note',
            text: 'Рост Уодлоу был вызван гиперплазией гипофиза, из-за которой организм переполнялся гормоном роста. В то время у врачей не было лечения, которое могло бы это остановить.',
          },
        },
        {
          id: 'living-giants',
          heading: 'Самые высокие люди из ныне живущих',
          paragraphs: [
            'Никто из ныне живущих даже близко не подошёл к Уодлоу — но у современных рекордсменов тоже замечательные истории:',
          ],
          bulletPoints: [
            'Султан Кёсен (Турция, род. 1982) — 251 см (8 футов 2,8 дюйма), самый высокий из ныне живущих мужчин. Его рост был вызван опухолью гипофиза; после операции гамма-ножом в 2010 году рост наконец остановился. Из-за роста он не смог закончить школу, но позже нашёл работу и женился в 2013 году.',
            'Румейса Гелги (Турция, род. 1997) — 215,16 см (7 футов 0,7 дюйма), самая высокая из ныне живущих женщин. Её рост — следствие редкого генетического заболевания, синдрома Уивера. Она выступает за осведомлённость о проблемах людей с инвалидностью и в основном передвигается в инвалидной коляске.',
          ],
          table: {
            headers: [
              'Человек',
              'Рост',
              'Статус',
            ],
            rows: [
              [
                'Роберт Уодлоу (США)',
                '272 см (8′11″)',
                'Абсолютный рекорд, подтверждён',
              ],
              [
                'Джон Роган (США)',
                '267 см (8′9″)',
                'Подтверждён',
              ],
              [
                'Джон Кэрролл (США)',
                '263,5 см (8′7,7″)',
                'Подтверждён',
              ],
              [
                'Султан Кёсен (Турция)',
                '251 см (8′2,8″)',
                'Самый высокий из ныне живущих',
              ],
              [
                'Румейса Гелги (Турция)',
                '215,2 см (7′0,7″)',
                'Самая высокая из ныне живущих',
              ],
            ],
            footnote: 'Рост по данным Книги рекордов Гиннесса и задокументированных медицинских измерений. Многие исторические заявления о росте выше 272 см так и не были независимо подтверждены.',
          },
          callout: {
            type: 'tip',
            text: 'Поучительная история: украинец Леонид Стадник заявлял о росте 257 см, но отказался от независимых измерений — и Книга рекордов Гиннесса лишила его титула в 2008 году. Рекордом считается только независимо подтверждённое измерение.',
          },
        },
        {
          id: 'science',
          heading: 'Почему возникает экстремальный рост: наука',
          paragraphs: [
            'Очень высокий рост — скажем, 195 или 200 см — почти полностью определяется генетикой и совершенно нормален для здоровья. Экстремальный рост выше примерно 230 см — другое дело: он почти всегда сигнализирует о гигантизме, редком гормональном заболевании.',
            'Обычная причина — доброкачественная опухоль (аденома) гипофиза, крошечной железы у основания мозга, которая управляет гормоном роста. Когда в детстве, до закрытия зон роста в костях, она вырабатывает слишком много гормона, весь скелет продолжает расти далеко за пределы генетической нормы.',
            'Если тот же избыток гормона начинается после закрытия зон роста (во взрослом возрасте), рост увеличиться уже не может. Вместо этого увеличиваются кисти, стопы и челюсть — это родственное состояние называется акромегалией.',
            'Современная медицина умеет лечить гигантизм: удаление опухоли хирургическим путём, препараты, блокирующие гормон роста, или направленная лучевая терапия. Именно так был остановлен рост Султана Кёсена. Сто лет назад у Роберта Уодлоу такого варианта не было.',
          ],
          callout: {
            type: 'warning',
            text: 'Экстремальный рост — это не просто «очень высокий рост»: он сопряжён с серьёзными проблемами со здоровьем — повреждением суставов, нагрузкой на сердечно-сосудистую систему и значительным сокращением продолжительности жизни. Эти рекорды — медицинские истории, а не цели.',
          },
        },
        {
          id: 'compare',
          heading: 'Посмотрите, как выглядите вы',
          paragraphs: [
            'Любопытно, как вы смотритесь рядом с Уодлоу — или рядом со средним человеком из любой страны? Наш бесплатный инструмент сравнения позволяет сопоставить ваш рост с кем угодно, бок о бок:',
          ],
          link: {
            text: '→ Сравнить свой рост',
            href: '/compare/',
          },
        },
      ],
      faqs: [
        {
          question: 'Кто самый высокий человек из ныне живущих?',
          answer: 'Султан Кёсен из Турции, рост 251 см (8 футов 2,8 дюйма), признанный Книгой рекордов Гиннесса самым высоким из ныне живущих мужчин. Самая высокая из ныне живущих женщин — также из Турции, Румейса Гелги, её рост 215,16 см.',
        },
        {
          question: 'Каким был рост Роберта Уодлоу?',
          answer: '272 см (8 футов 11,1 дюйма) — измерено за 18 дней до его смерти в 1940 году. Это остаётся самым высоким достоверно зафиксированным ростом в истории человечества.',
        },
        {
          question: 'Что вызывает экстремальный рост?',
          answer: 'Почти всегда гигантизм: доброкачественная опухоль гипофиза, вызывающая избыточную выработку гормона роста в детстве, до закрытия зон роста в костях. Обычный высокий рост, напротив, в подавляющем большинстве случаев наследственный и здоровый.',
        },
        {
          question: 'Может ли кто-нибудь вырасти выше Роберта Уодлоу?',
          answer: 'Теоретически возможно, но ни одного подтверждённого случая не было уже более 80 лет. Современное лечение обычно останавливает патологический рост на ранней стадии, а Книга рекордов Гиннесса требует строгих независимых измерений — поэтому неподтверждённые исторические заявления не считаются.',
        },
      ],
      medicalDisclaimer: 'Материал носит образовательный характер и не является медицинской рекомендацией. Гигантизм и нарушения роста — это медицинские состояния: диагностировать и лечить их может только врач. Если у вас есть опасения по поводу аномального роста, обратитесь к врачу.',
      relatedLinks: [
        {
          text: 'Сравнение роста',
          href: '/compare/',
        },
        {
          text: 'Средний рост по странам',
          href: '/articles/average-height-by-country/',
        },
        {
          text: 'Предсказать рост ребёнка',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
  },
};
