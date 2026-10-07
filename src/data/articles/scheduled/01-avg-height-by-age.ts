import type { ScheduledArticle } from '../types';

export const scheduled: ScheduledArticle = {
  publishDate: '2026-10-07',
  articles: {
    en: {
      id: 'avg-height-by-age',
      slug: 'average-height-by-age-chart',
      title: 'Average Height by Age (0–20): The Complete Chart',
      subtitle: 'The average height for every age from birth to 20, for boys and girls — plus the growth milestones that explain the numbers.',
      metaDescription: 'Average height by age chart (0–20) for boys and girls, based on CDC/WHO growth data. See what is normal at every age and when to check the percentile.',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7 min read',
      badge: 'Reference guide',
      tocTitle: 'In this article',
      intro: {
        lead: 'A 10-year-old averages about 140 cm whether boy or girl; by 18, the averages are roughly 179 cm for young men and 166 cm for young women. Girls briefly outgrow boys around ages 11–12, then boys pull ahead during their later puberty spurt.',
        paragraphs: [
          'If you are checking whether your child is "normal for their age," this chart is your starting point. The values below are rounded 50th-percentile reference figures drawn from the CDC 2000 growth charts (ages 2–20) and WHO child growth standards (under 2) — the same references pediatricians use.',
          'One important note before the numbers: average is not the same as ideal. Healthy children spread widely around these values, and a single measurement matters far less than the pattern over time.',
        ],
      },
      sections: [
        {
          id: 'chart',
          heading: 'The complete chart: average height by age',
          paragraphs: [
            'Find the age, read across. Values are approximate 50th-percentile references in centimeters.',
          ],
          table: {
            headers: [
              'Age',
              'Boys (cm)',
              'Girls (cm)',
            ],
            rows: [
              [
                'Birth',
                '50',
                '49',
              ],
              [
                '1 year',
                '76',
                '75',
              ],
              [
                '2 years',
                '88',
                '87',
              ],
              [
                '3 years',
                '96',
                '95',
              ],
              [
                '4 years',
                '103',
                '102',
              ],
              [
                '5 years',
                '110',
                '109',
              ],
              [
                '6 years',
                '116',
                '115',
              ],
              [
                '7 years',
                '122',
                '121',
              ],
              [
                '8 years',
                '128',
                '128',
              ],
              [
                '9 years',
                '134',
                '134',
              ],
              [
                '10 years',
                '140',
                '140',
              ],
              [
                '11 years',
                '145',
                '146',
              ],
              [
                '12 years',
                '151',
                '152',
              ],
              [
                '13 years',
                '158',
                '158',
              ],
              [
                '14 years',
                '166',
                '162',
              ],
              [
                '15 years',
                '172',
                '164',
              ],
              [
                '16 years',
                '176',
                '165',
              ],
              [
                '17 years',
                '178',
                '166',
              ],
              [
                '18 years',
                '179',
                '166',
              ],
              [
                '19 years',
                '179',
                '166',
              ],
              [
                '20 years',
                '179',
                '166',
              ],
            ],
            footnote: 'Rounded 50th-percentile reference values based on CDC 2000 growth charts (ages 2–20) and WHO child growth standards (under 2). Individual healthy children vary widely around these figures.',
          },
          callout: {
            type: 'tip',
            text: 'Quick conversions: 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
          },
        },
        {
          id: 'milestones',
          heading: 'Key growth milestones the chart reveals',
          paragraphs: [
            'The raw numbers hide a few patterns worth knowing:',
          ],
          bulletPoints: [
            'The fastest growth happens in the first year: babies gain roughly 25 cm, more than in any later year of life.',
            'Girls hit their puberty spurt first — which is why they are slightly taller than boys around ages 11–12.',
            'Boys start their spurt about two years later but grow for longer, which is why the male average ends up about 13 cm higher.',
            'Growth plates typically close around 15–17 for girls and 17–19 for boys; after that, meaningful height gain stops.',
            'Between ages 8 and 10, boys and girls are nearly identical in average height — sex differences before puberty are tiny.',
          ],
        },
        {
          id: 'reading-numbers',
          heading: 'How to read these numbers',
          paragraphs: [
            'The chart shows the middle of the pack — half of children are above, half below. Being at the 25th or 75th percentile is just as normal as being at the 50th, as long as the child has always tracked near that line.',
            'What actually matters to pediatricians is not any single number on this chart, but the child’s own curve: a stable percentile over the years means healthy growth, even if that percentile is the 10th or the 90th.',
            'To see exactly where a child sits on the official curves, use the percentile calculators:',
          ],
          link: {
            text: '→ Boys’ height percentile calculator',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'when-to-check',
          heading: 'When the numbers deserve a second look',
          paragraphs: [
            'Don’t worry about one measurement. Do pay attention to the pattern:',
          ],
          bulletPoints: [
            'The percentile drops steadily across checkups (for example, 60th → 40th → 25th)',
            'Growth seems to stall for many months outside the normal slow periods',
            'The child sits below the 3rd or above the 97th percentile without medical follow-up',
          ],
          callout: {
            type: 'note',
            text: 'If any of the above sounds familiar, bring the dated measurements to the pediatrician — the pattern across time is what has medical value, not any single number.',
          },
          link: {
            text: '→ Girls’ height chart (CDC/WHO based)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: 'Is 5\'8" (173 cm) tall for a 13-year-old?',
          answer: 'Yes — well above average. A 13-year-old boy averages about 158 cm, so 173 cm lands roughly around the 90th percentile or higher. For a 13-year-old girl (average also ~158 cm at that age), it is equally above average. Keep in mind that early bloomers can be tall at 13 and end up average as adults once peers catch up.',
        },
        {
          question: 'Why are boys taller than girls after puberty?',
          answer: 'Testosterone drives a later, longer growth spurt in boys: it starts about two years after the girls’ spurt and continues for longer, and boys’ growth plates close later (around 17–19 vs 15–17 for girls). Before puberty, the sexes are nearly identical in average height.',
        },
        {
          question: 'My child is below the average — should I worry?',
          answer: 'Not from a single measurement. Check the percentile and, more importantly, whether it has been stable over time — a child who has always tracked near the 15th percentile is growing normally. See a pediatrician if the percentile keeps dropping, growth stalls for many months, or you are simply concerned.',
        },
        {
          question: 'At what age do teenagers stop growing?',
          answer: 'Most girls finish growing around 15–16, roughly two years after their first period. Most boys finish around 17–18, with small gains sometimes continuing into the early 20s. Once the growth plates close, no exercise or supplement can add meaningful height.',
        },
      ],
      relatedLinks: [
        {
          text: 'Boys’ height chart',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: 'Girls’ height chart',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: 'Boys’ height percentile',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Girls’ height percentile',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Predict your child’s adult height',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    pt: {
      id: 'avg-height-by-age',
      slug: 'altura-media-por-idade-tabela',
      title: 'Altura Média por Idade (0–20 Anos): A Tabela Completa',
      subtitle: 'A altura média para cada idade do nascimento aos 20 anos, para meninos e meninas — além dos marcos de crescimento que explicam os números.',
      metaDescription: 'Tabela de altura média por idade (0–20) para meninos e meninas, baseada nos dados de crescimento CDC/OMS. Veja o que é normal em cada idade e quando consultar o percentil.',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7 min de leitura',
      badge: 'Guia de referência',
      tocTitle: 'Neste artigo',
      intro: {
        lead: 'Aos 10 anos, a média é de cerca de 140 cm tanto para meninos quanto para meninas; aos 18, as médias ficam em torno de 179 cm para os rapazes e 166 cm para as moças. As meninas ultrapassam os meninos brevemente por volta dos 11–12 anos, e depois os meninos assumem a liderança durante o estirão mais tardio da puberdade.',
        paragraphs: [
          'Se você está verificando se seu filho está "normal para a idade", esta tabela é o seu ponto de partida. Os valores abaixo são referências arredondadas do 50º percentil, extraídas das curvas de crescimento CDC 2000 (idades 2–20) e dos padrões de crescimento infantil da OMS (menores de 2 anos) — as mesmas referências usadas pelos pediatras.',
          'Uma observação importante antes dos números: média não é o mesmo que ideal. Crianças saudáveis variam muito em torno desses valores, e uma única medição importa muito menos do que o padrão ao longo do tempo.',
        ],
      },
      sections: [
        {
          id: 'tabela',
          heading: 'A tabela completa: altura média por idade',
          paragraphs: [
            'Encontre a idade e leia ao lado. Os valores são referências aproximadas do 50º percentil, em centímetros.',
          ],
          table: {
            headers: [
              'Idade',
              'Meninos (cm)',
              'Meninas (cm)',
            ],
            rows: [
              [
                'Nascimento',
                '50',
                '49',
              ],
              [
                '1 ano',
                '76',
                '75',
              ],
              [
                '2 anos',
                '88',
                '87',
              ],
              [
                '3 anos',
                '96',
                '95',
              ],
              [
                '4 anos',
                '103',
                '102',
              ],
              [
                '5 anos',
                '110',
                '109',
              ],
              [
                '6 anos',
                '116',
                '115',
              ],
              [
                '7 anos',
                '122',
                '121',
              ],
              [
                '8 anos',
                '128',
                '128',
              ],
              [
                '9 anos',
                '134',
                '134',
              ],
              [
                '10 anos',
                '140',
                '140',
              ],
              [
                '11 anos',
                '145',
                '146',
              ],
              [
                '12 anos',
                '151',
                '152',
              ],
              [
                '13 anos',
                '158',
                '158',
              ],
              [
                '14 anos',
                '166',
                '162',
              ],
              [
                '15 anos',
                '172',
                '164',
              ],
              [
                '16 anos',
                '176',
                '165',
              ],
              [
                '17 anos',
                '178',
                '166',
              ],
              [
                '18 anos',
                '179',
                '166',
              ],
              [
                '19 anos',
                '179',
                '166',
              ],
              [
                '20 anos',
                '179',
                '166',
              ],
            ],
            footnote: 'Valores de referência arredondados do 50º percentil, baseados nas curvas de crescimento CDC 2000 (idades 2–20) e nos padrões de crescimento infantil da OMS (menores de 2 anos). Crianças saudáveis variam muito em torno desses números.',
          },
          callout: {
            type: 'tip',
            text: 'Conversões rápidas: 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
          },
        },
        {
          id: 'marcos',
          heading: 'Principais marcos de crescimento que a tabela revela',
          paragraphs: [
            'Os números brutos escondem alguns padrões que vale a pena conhecer:',
          ],
          bulletPoints: [
            'O crescimento mais rápido acontece no primeiro ano: os bebês ganham cerca de 25 cm, mais do que em qualquer outro ano da vida.',
            'As meninas entram no estirão da puberdade primeiro — por isso são um pouco mais altas que os meninos por volta dos 11–12 anos.',
            'Os meninos começam o estirão cerca de dois anos depois, mas crescem por mais tempo — por isso a média masculina termina cerca de 13 cm acima.',
            'As placas de crescimento costumam se fechar por volta dos 15–17 anos nas meninas e dos 17–19 nos meninos; depois disso, o ganho significativo de altura termina.',
            'Entre 8 e 10 anos, meninos e meninas têm praticamente a mesma altura média — as diferenças entre os sexos antes da puberdade são mínimas.',
          ],
        },
        {
          id: 'lendo-numeros',
          heading: 'Como interpretar esses números',
          paragraphs: [
            'A tabela mostra o meio do pelotão — metade das crianças está acima, metade abaixo. Estar no 25º ou no 75º percentil é tão normal quanto estar no 50º, desde que a criança sempre tenha acompanhado essa mesma linha.',
            'O que realmente importa para os pediatras não é nenhum número isolado desta tabela, mas a curva da própria criança: um percentil estável ao longo dos anos significa crescimento saudável, mesmo que esse percentil seja o 10º ou o 90º.',
            'Para ver exatamente onde uma criança se posiciona nas curvas oficiais, use as calculadoras de percentil:',
          ],
          link: {
            text: '→ Calculadora de percentil de altura para meninos',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'quando-verificar',
          heading: 'Quando os números merecem um olhar mais atento',
          paragraphs: [
            'Não se preocupe com uma única medição. Preste atenção ao padrão:',
          ],
          bulletPoints: [
            'O percentil cai de forma constante entre as consultas (por exemplo, 60º → 40º → 25º)',
            'O crescimento parece estagnar por muitos meses fora dos períodos normais de desaceleração',
            'A criança está abaixo do 3º ou acima do 97º percentil sem acompanhamento médico',
          ],
          callout: {
            type: 'note',
            text: 'Se algum dos itens acima soa familiar, leve as medições com data ao pediatra — o padrão ao longo do tempo é o que tem valor médico, não nenhum número isolado.',
          },
          link: {
            text: '→ Tabela de altura para meninas (baseada em CDC/OMS)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: 'Ter 1,73 m é alto para uma criança de 13 anos?',
          answer: 'Sim — bem acima da média. Um menino de 13 anos tem em média cerca de 158 cm, então 173 cm fica em torno do 90º percentil ou acima. Para uma menina de 13 anos (média também de ~158 cm nessa idade), é igualmente acima da média. Lembre-se de que quem amadurece cedo pode ser alto aos 13 e terminar na média na vida adulta, quando os colegas alcançam.',
        },
        {
          question: 'Por que os meninos ficam mais altos que as meninas depois da puberdade?',
          answer: 'A testosterona provoca nos meninos um estirão mais tardio e mais longo: ele começa cerca de dois anos depois do estirão das meninas e dura mais tempo, e as placas de crescimento dos meninos se fecham mais tarde (por volta dos 17–19 anos, contra 15–17 nas meninas). Antes da puberdade, os sexos têm praticamente a mesma altura média.',
        },
        {
          question: 'Meu filho está abaixo da média — devo me preocupar?',
          answer: 'Não por causa de uma única medição. Verifique o percentil e, mais importante, se ele se manteve estável ao longo do tempo — uma criança que sempre esteve perto do 15º percentil está crescendo normalmente. Procure um pediatra se o percentil continuar caindo, se o crescimento estagnar por muitos meses ou se você simplesmente estiver preocupado.',
        },
        {
          question: 'Com que idade os adolescentes param de crescer?',
          answer: 'A maioria das meninas termina de crescer por volta dos 15–16 anos, cerca de dois anos após a primeira menstruação. A maioria dos meninos termina por volta dos 17–18 anos, com pequenos ganhos às vezes continuando até o início dos 20. Quando as placas de crescimento se fecham, nenhum exercício ou suplemento consegue aumentar a altura de forma significativa.',
        },
      ],
      relatedLinks: [
        {
          text: 'Tabela de altura para meninos',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: 'Tabela de altura para meninas',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: 'Percentil de altura para meninos',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Percentil de altura para meninas',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Preveja a altura adulta do seu filho',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    es: {
      id: 'avg-height-by-age',
      slug: 'estatura-promedio-por-edad-tabla',
      title: 'Estatura Promedio por Edad (0–20): La Tabla Completa',
      subtitle: 'La estatura promedio para cada edad, desde el nacimiento hasta los 20 años, en niños y niñas — además de los hitos de crecimiento que explican los números.',
      metaDescription: 'Tabla de estatura promedio por edad (0–20) en niños y niñas, basada en datos de crecimiento de CDC/OMS. Mira qué es normal a cada edad y cuándo conviene revisar el percentil.',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7 min de lectura',
      badge: 'Guía de referencia',
      tocTitle: 'En este artículo',
      intro: {
        lead: 'Un niño de 10 años mide en promedio unos 140 cm, sea niño o niña; a los 18, los promedios son aproximadamente 179 cm para los jóvenes y 166 cm para las jóvenes. Las niñas superan brevemente a los niños alrededor de los 11–12 años, y luego los niños toman la delantera durante su estirón puberal más tardío.',
        paragraphs: [
          'Si estás verificando si tu hijo o hija está «normal para su edad», esta tabla es tu punto de partida. Los valores a continuación son cifras de referencia redondeadas del percentil 50, tomadas de las curvas de crecimiento CDC 2000 (edades 2–20) y de los estándares de crecimiento infantil de la OMS (menores de 2 años) — las mismas referencias que usan los pediatras.',
          'Una nota importante antes de los números: promedio no es lo mismo que ideal. Los niños sanos se distribuyen ampliamente alrededor de estos valores, y una sola medición importa mucho menos que el patrón a lo largo del tiempo.',
        ],
      },
      sections: [
        {
          id: 'tabla',
          heading: 'La tabla completa: estatura promedio por edad',
          paragraphs: [
            'Busca la edad y lee en horizontal. Los valores son referencias aproximadas del percentil 50, en centímetros.',
          ],
          table: {
            headers: [
              'Edad',
              'Niños (cm)',
              'Niñas (cm)',
            ],
            rows: [
              [
                'Nacimiento',
                '50',
                '49',
              ],
              [
                '1 año',
                '76',
                '75',
              ],
              [
                '2 años',
                '88',
                '87',
              ],
              [
                '3 años',
                '96',
                '95',
              ],
              [
                '4 años',
                '103',
                '102',
              ],
              [
                '5 años',
                '110',
                '109',
              ],
              [
                '6 años',
                '116',
                '115',
              ],
              [
                '7 años',
                '122',
                '121',
              ],
              [
                '8 años',
                '128',
                '128',
              ],
              [
                '9 años',
                '134',
                '134',
              ],
              [
                '10 años',
                '140',
                '140',
              ],
              [
                '11 años',
                '145',
                '146',
              ],
              [
                '12 años',
                '151',
                '152',
              ],
              [
                '13 años',
                '158',
                '158',
              ],
              [
                '14 años',
                '166',
                '162',
              ],
              [
                '15 años',
                '172',
                '164',
              ],
              [
                '16 años',
                '176',
                '165',
              ],
              [
                '17 años',
                '178',
                '166',
              ],
              [
                '18 años',
                '179',
                '166',
              ],
              [
                '19 años',
                '179',
                '166',
              ],
              [
                '20 años',
                '179',
                '166',
              ],
            ],
            footnote: 'Valores de referencia redondeados del percentil 50, basados en las curvas de crecimiento CDC 2000 (edades 2–20) y en los estándares de crecimiento infantil de la OMS (menores de 2 años). Los niños sanos varían ampliamente alrededor de estas cifras.',
          },
          callout: {
            type: 'tip',
            text: 'Conversiones rápidas: 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
          },
        },
        {
          id: 'hitos',
          heading: 'Hitos clave de crecimiento que revela la tabla',
          paragraphs: [
            'Los números brutos esconden algunos patrones que vale la pena conocer:',
          ],
          bulletPoints: [
            'El crecimiento más rápido ocurre en el primer año: los bebés ganan unos 25 cm, más que en cualquier otro año de la vida.',
            'Las niñas inician su estirón puberal primero — por eso son ligeramente más altas que los niños alrededor de los 11–12 años.',
            'Los niños empiezan su estirón unos dos años más tarde, pero crecen durante más tiempo, por lo que el promedio masculino termina unos 13 cm más alto.',
            'Las placas de crecimiento suelen cerrarse alrededor de los 15–17 años en las niñas y 17–19 en los niños; después de eso, el aumento significativo de estatura se detiene.',
            'Entre los 8 y los 10 años, niños y niñas tienen una estatura promedio casi idéntica — las diferencias por sexo antes de la pubertad son mínimas.',
          ],
        },
        {
          id: 'leer-numeros',
          heading: 'Cómo interpretar estos números',
          paragraphs: [
            'La tabla muestra el punto medio — la mitad de los niños están por encima y la mitad por debajo. Estar en el percentil 25 o en el 75 es igual de normal que estar en el 50, siempre que el niño se haya mantenido cerca de esa línea.',
            'Lo que realmente importa para los pediatras no es ningún número aislado de esta tabla, sino la curva propia del niño: un percentil estable a lo largo de los años significa un crecimiento saludable, incluso si ese percentil es el 10 o el 90.',
            'Para ver exactamente dónde se ubica un niño en las curvas oficiales, usa las calculadoras de percentiles:',
          ],
          link: {
            text: '→ Calculadora de percentil de estatura para niños',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'cuando-revisar',
          heading: 'Cuándo los números merecen una segunda mirada',
          paragraphs: [
            'No te preocupes por una sola medición. Presta atención al patrón:',
          ],
          bulletPoints: [
            'El percentil baja de forma constante entre controles (por ejemplo, 60 → 40 → 25)',
            'El crecimiento parece detenerse durante muchos meses, fuera de los períodos lentos normales',
            'El niño está por debajo del percentil 3 o por encima del 97 sin seguimiento médico',
          ],
          callout: {
            type: 'note',
            text: 'Si alguno de estos puntos te suena familiar, lleva las mediciones con fecha al pediatra — el patrón a lo largo del tiempo es lo que tiene valor médico, no ningún número aislado.',
          },
          link: {
            text: '→ Tabla de estatura para niñas (basada en CDC/OMS)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: '¿Es alto 1,73 m (5\'8") para un niño de 13 años?',
          answer: 'Sí — está bastante por encima del promedio. Un niño de 13 años mide en promedio unos 158 cm, así que 173 cm se ubica aproximadamente en el percentil 90 o más. Para una niña de 13 años (promedio también de ~158 cm a esa edad), también está por encima del promedio. Ten en cuenta que los que maduran temprano pueden ser altos a los 13 y terminar en el promedio de adultos cuando sus compañeros los alcancen.',
        },
        {
          question: '¿Por qué los niños son más altos que las niñas después de la pubertad?',
          answer: 'La testosterona impulsa un estirón más tardío y prolongado en los niños: empieza unos dos años después del estirón de las niñas y dura más tiempo, y las placas de crecimiento de los niños se cierran más tarde (alrededor de los 17–19 frente a 15–17 en las niñas). Antes de la pubertad, los sexos son casi idénticos en estatura promedio.',
        },
        {
          question: 'Mi hijo está por debajo del promedio — ¿debo preocuparme?',
          answer: 'No por una sola medición. Revisa el percentil y, más importante aún, si se ha mantenido estable a lo largo del tiempo — un niño que siempre ha estado cerca del percentil 15 está creciendo con normalidad. Consulta al pediatra si el percentil sigue bajando, el crecimiento se detiene durante muchos meses o simplemente te preocupa.',
        },
        {
          question: '¿A qué edad dejan de crecer los adolescentes?',
          answer: 'La mayoría de las niñas terminan de crecer alrededor de los 15–16 años, aproximadamente dos años después de su primera menstruación. La mayoría de los niños termina alrededor de los 17–18, con pequeños aumentos que a veces continúan hasta principios de los 20. Una vez que las placas de crecimiento se cierran, ningún ejercicio ni suplemento puede agregar estatura significativa.',
        },
      ],
      relatedLinks: [
        {
          text: 'Tabla de estatura para niños',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: 'Tabla de estatura para niñas',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: 'Percentil de estatura para niños',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Percentil de estatura para niñas',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Predice la estatura adulta de tu hijo',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    fr: {
      id: 'avg-height-by-age',
      slug: 'taille-moyenne-par-age-tableau',
      title: 'Taille moyenne par âge (0–20 ans) : le tableau complet',
      subtitle: 'La taille moyenne à chaque âge, de la naissance à 20 ans, pour les garçons et les filles — avec les étapes de croissance qui expliquent les chiffres.',
      metaDescription: 'Tableau de la taille moyenne par âge (0–20 ans) pour les garçons et les filles, basé sur les données de croissance CDC/OMS. Voyez ce qui est normal à chaque âge et quand vérifier le percentile.',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7 min de lecture',
      badge: 'Guide de référence',
      tocTitle: 'Dans cet article',
      intro: {
        lead: 'À 10 ans, la taille moyenne est d’environ 140 cm, garçon ou fille ; à 18 ans, les moyennes sont d’environ 179 cm pour les jeunes hommes et 166 cm pour les jeunes femmes. Les filles dépassent brièvement les garçons vers 11–12 ans, puis les garçons prennent de l’avance lors de leur poussée de croissance pubertaire plus tardive.',
        paragraphs: [
          'Si vous cherchez à savoir si votre enfant a une taille « normale pour son âge », ce tableau est votre point de départ. Les valeurs ci-dessous sont des références arrondies au 50e percentile, tirées des courbes de croissance CDC 2000 (2–20 ans) et des normes de croissance de l’OMS (moins de 2 ans) — les mêmes références qu’utilisent les pédiatres.',
          'Une remarque importante avant les chiffres : la moyenne n’est pas l’idéal. Les enfants en bonne santé se répartissent largement autour de ces valeurs, et une seule mesure compte bien moins que la trajectoire dans le temps.',
        ],
      },
      sections: [
        {
          id: 'chart',
          heading: 'Le tableau complet : taille moyenne par âge',
          paragraphs: [
            'Trouvez l’âge, lisez en travers. Les valeurs sont des références approximatives au 50e percentile, en centimètres.',
          ],
          table: {
            headers: [
              'Âge',
              'Garçons (cm)',
              'Filles (cm)',
            ],
            rows: [
              [
                'Naissance',
                '50',
                '49',
              ],
              [
                '1 an',
                '76',
                '75',
              ],
              [
                '2 ans',
                '88',
                '87',
              ],
              [
                '3 ans',
                '96',
                '95',
              ],
              [
                '4 ans',
                '103',
                '102',
              ],
              [
                '5 ans',
                '110',
                '109',
              ],
              [
                '6 ans',
                '116',
                '115',
              ],
              [
                '7 ans',
                '122',
                '121',
              ],
              [
                '8 ans',
                '128',
                '128',
              ],
              [
                '9 ans',
                '134',
                '134',
              ],
              [
                '10 ans',
                '140',
                '140',
              ],
              [
                '11 ans',
                '145',
                '146',
              ],
              [
                '12 ans',
                '151',
                '152',
              ],
              [
                '13 ans',
                '158',
                '158',
              ],
              [
                '14 ans',
                '166',
                '162',
              ],
              [
                '15 ans',
                '172',
                '164',
              ],
              [
                '16 ans',
                '176',
                '165',
              ],
              [
                '17 ans',
                '178',
                '166',
              ],
              [
                '18 ans',
                '179',
                '166',
              ],
              [
                '19 ans',
                '179',
                '166',
              ],
              [
                '20 ans',
                '179',
                '166',
              ],
            ],
            footnote: 'Valeurs de référence arrondies au 50e percentile, basées sur les courbes de croissance CDC 2000 (2–20 ans) et les normes de croissance de l’OMS (moins de 2 ans). Les enfants en bonne santé varient largement autour de ces chiffres.',
          },
          callout: {
            type: 'tip',
            text: 'Conversions rapides : 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
          },
        },
        {
          id: 'milestones',
          heading: 'Étapes clés de croissance que révèle le tableau',
          paragraphs: [
            'Les chiffres bruts cachent quelques constantes qui valent la peine d’être connues :',
          ],
          bulletPoints: [
            'La croissance la plus rapide a lieu la première année : les bébés gagnent environ 25 cm, plus qu’au cours de toute autre année de leur vie.',
            'Les filles connaissent leur poussée pubertaire en premier — c’est pourquoi elles sont légèrement plus grandes que les garçons vers 11–12 ans.',
            'Les garçons commencent leur poussée environ deux ans plus tard mais grandissent plus longtemps, d’où une taille moyenne finale supérieure d’environ 13 cm.',
            'Les plaques de croissance se referment généralement vers 15–17 ans chez les filles et 17–19 ans chez les garçons ; après cela, la taille ne gagne plus de façon significative.',
            'Entre 8 et 10 ans, garçons et filles ont presque la même taille moyenne — les différences entre sexes avant la puberté sont minimes.',
          ],
        },
        {
          id: 'reading-numbers',
          heading: 'Comment lire ces chiffres',
          paragraphs: [
            'Le tableau montre le milieu du peloton — la moitié des enfants sont au-dessus, l’autre moitié en dessous. Se situer au 25e ou au 75e percentile est tout aussi normal qu’au 50e, tant que l’enfant a toujours suivi à peu près cette ligne.',
            'Ce qui compte vraiment pour les pédiatres, ce n’est pas un chiffre isolé de ce tableau, mais la courbe propre de l’enfant : un percentile stable au fil des ans signifie une croissance saine, même s’il s’agit du 10e ou du 90e percentile.',
            'Pour voir exactement où se situe un enfant sur les courbes officielles, utilisez les calculateurs de percentile :',
          ],
          link: {
            text: '→ Calculateur de percentile de taille pour garçons',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'when-to-check',
          heading: 'Quand les chiffres méritent un second regard',
          paragraphs: [
            'Ne vous inquiétez pas pour une seule mesure. Surveillez en revanche la trajectoire :',
          ],
          bulletPoints: [
            'Le percentile baisse régulièrement d’un contrôle à l’autre (par exemple, 60e → 40e → 25e)',
            'La croissance semble stagner pendant de longs mois, en dehors des périodes de ralentissement normal',
            'L’enfant se situe en dessous du 3e ou au-dessus du 97e percentile sans suivi médical',
          ],
          callout: {
            type: 'note',
            text: 'Si l’un des points ci-dessus vous semble familier, apportez les mesures datées chez le pédiatre — c’est la trajectoire dans le temps qui a une valeur médicale, pas un chiffre isolé.',
          },
          link: {
            text: '→ Courbe de taille des filles (basée CDC/OMS)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: '173 cm (5\'8"), est-ce grand pour un enfant de 13 ans ?',
          answer: 'Oui — bien au-dessus de la moyenne. Un garçon de 13 ans mesure en moyenne environ 158 cm, donc 173 cm se situe à peu près au niveau du 90e percentile, voire au-delà. Pour une fille de 13 ans (moyenne également d’environ 158 cm à cet âge), c’est tout aussi au-dessus de la moyenne. Gardez à l’esprit que les enfants à puberté précoce peuvent être grands à 13 ans puis finir dans la moyenne à l’âge adulte, une fois leurs camarades rattrapés.',
        },
        {
          question: 'Pourquoi les garçons sont-ils plus grands que les filles après la puberté ?',
          answer: 'La testostérone provoque chez les garçons une poussée de croissance plus tardive et plus longue : elle commence environ deux ans après celle des filles et dure plus longtemps, et les plaques de croissance des garçons se referment plus tard (vers 17–19 ans contre 15–17 ans pour les filles). Avant la puberté, les sexes sont presque identiques en taille moyenne.',
        },
        {
          question: 'Mon enfant est en dessous de la moyenne — dois-je m’inquiéter ?',
          answer: 'Pas sur la base d’une seule mesure. Vérifiez le percentile et, surtout, sa stabilité dans le temps — un enfant qui a toujours suivi à peu près le 15e percentile grandit normalement. Consultez un pédiatre si le percentile baisse continuellement, si la croissance stagne pendant de longs mois, ou simplement si vous êtes inquiet.',
        },
        {
          question: 'À quel âge les adolescents arrêtent-ils de grandir ?',
          answer: 'La plupart des filles finissent de grandir vers 15–16 ans, environ deux ans après leurs premières règles. La plupart des garçons finissent vers 17–18 ans, avec parfois de petits gains jusqu’au début de la vingtaine. Une fois les plaques de croissance refermées, aucun exercice ni complément ne peut ajouter une taille significative.',
        },
      ],
      relatedLinks: [
        {
          text: 'Courbe de taille des garçons',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: 'Courbe de taille des filles',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: 'Percentile de taille des garçons',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Percentile de taille des filles',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Prédire la taille adulte de votre enfant',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    de: {
      id: 'avg-height-by-age',
      slug: 'durchschnittsgroesse-nach-alter-tabelle',
      title: 'Durchschnittsgröße nach Alter (0–20): Die vollständige Tabelle',
      subtitle: 'Die durchschnittliche Körpergröße für jedes Alter von der Geburt bis 20 – für Jungen und Mädchen – plus die Wachstums-Meilensteine, die die Zahlen erklären.',
      metaDescription: 'Durchschnittsgröße nach Alter (0–20) für Jungen und Mädchen, basierend auf CDC/WHO-Wachstumsdaten. Erfahren Sie, was in jedem Alter normal ist und wann ein Perzentil-Check sinnvoll ist.',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7 Min. Lesezeit',
      badge: 'Referenzleitfaden',
      tocTitle: 'In diesem Artikel',
      intro: {
        lead: 'Ein 10-jähriges Kind ist im Durchschnitt etwa 140 cm groß – egal ob Junge oder Mädchen; mit 18 liegen die Durchschnittswerte bei etwa 179 cm für junge Männer und 166 cm für junge Frauen. Mädchen überholen Jungen kurzzeitig mit etwa 11–12 Jahren, dann ziehen die Jungen im späteren Pubertätsschub vorbei.',
        paragraphs: [
          'Wenn Sie prüfen möchten, ob Ihr Kind „normal groß für sein Alter“ ist, ist diese Tabelle Ihr Ausgangspunkt. Die Werte unten sind gerundete 50.-Perzentil-Referenzwerte aus den CDC-2000-Wachstumskurven (2–20 Jahre) und den WHO-Wachstumsstandards (unter 2 Jahre) – denselben Referenzen, die auch Kinderärzte verwenden.',
          'Ein wichtiger Hinweis vor den Zahlen: Durchschnitt ist nicht gleich ideal. Gesunde Kinder streuen weit um diese Werte, und eine einzelne Messung sagt weit weniger aus als der Verlauf über die Zeit.',
        ],
      },
      sections: [
        {
          id: 'tabelle',
          heading: 'Die vollständige Tabelle: Durchschnittsgröße nach Alter',
          paragraphs: [
            'Suchen Sie das Alter und lesen Sie quer. Die Werte sind ungefähre 50.-Perzentil-Referenzwerte in Zentimetern.',
          ],
          table: {
            headers: [
              'Alter',
              'Jungen (cm)',
              'Mädchen (cm)',
            ],
            rows: [
              [
                'Geburt',
                '50',
                '49',
              ],
              [
                '1 Jahr',
                '76',
                '75',
              ],
              [
                '2 Jahre',
                '88',
                '87',
              ],
              [
                '3 Jahre',
                '96',
                '95',
              ],
              [
                '4 Jahre',
                '103',
                '102',
              ],
              [
                '5 Jahre',
                '110',
                '109',
              ],
              [
                '6 Jahre',
                '116',
                '115',
              ],
              [
                '7 Jahre',
                '122',
                '121',
              ],
              [
                '8 Jahre',
                '128',
                '128',
              ],
              [
                '9 Jahre',
                '134',
                '134',
              ],
              [
                '10 Jahre',
                '140',
                '140',
              ],
              [
                '11 Jahre',
                '145',
                '146',
              ],
              [
                '12 Jahre',
                '151',
                '152',
              ],
              [
                '13 Jahre',
                '158',
                '158',
              ],
              [
                '14 Jahre',
                '166',
                '162',
              ],
              [
                '15 Jahre',
                '172',
                '164',
              ],
              [
                '16 Jahre',
                '176',
                '165',
              ],
              [
                '17 Jahre',
                '178',
                '166',
              ],
              [
                '18 Jahre',
                '179',
                '166',
              ],
              [
                '19 Jahre',
                '179',
                '166',
              ],
              [
                '20 Jahre',
                '179',
                '166',
              ],
            ],
            footnote: 'Gerundete 50.-Perzentil-Referenzwerte auf Basis der CDC-2000-Wachstumskurven (2–20 Jahre) und der WHO-Wachstumsstandards (unter 2 Jahre). Gesunde Kinder streuen individuell stark um diese Werte.',
          },
          callout: {
            type: 'tip',
            text: 'Schnelle Umrechnungen: 150 cm ≈ 4\'11", 160 cm ≈ 5\'3", 170 cm ≈ 5\'7", 180 cm ≈ 5\'11".',
          },
        },
        {
          id: 'meilensteine',
          heading: 'Wichtige Wachstums-Meilensteine in der Tabelle',
          paragraphs: [
            'Hinter den reinen Zahlen verbergen sich einige Muster, die man kennen sollte:',
          ],
          bulletPoints: [
            'Das schnellste Wachstum findet im ersten Lebensjahr statt: Babys legen rund 25 cm zu – mehr als in jedem späteren Lebensjahr.',
            'Mädchen erleben ihren Pubertätsschub zuerst – deshalb sind sie mit etwa 11–12 Jahren etwas größer als Jungen.',
            'Jungen starten ihren Schub etwa zwei Jahre später, wachsen aber länger – darum liegt der männliche Durchschnitt am Ende etwa 13 cm höher.',
            'Die Wachstumsfugen schließen sich bei Mädchen typischerweise mit 15–17 Jahren, bei Jungen mit 17–19 Jahren; danach endet nennenswertes Größenwachstum.',
            'Zwischen 8 und 10 Jahren sind Jungen und Mädchen im Durchschnitt fast identisch groß – die Geschlechtsunterschiede vor der Pubertät sind winzig.',
          ],
        },
        {
          id: 'werte-lesen',
          heading: 'So lesen Sie diese Zahlen richtig',
          paragraphs: [
            'Die Tabelle zeigt die Mitte – die Hälfte der Kinder liegt darüber, die Hälfte darunter. Auch das 25. oder 75. Perzentil ist genauso normal wie das 50., solange das Kind schon immer in etwa auf dieser Linie lag.',
            'Was Kinderärzten wirklich wichtig ist, ist nicht eine einzelne Zahl aus dieser Tabelle, sondern die eigene Kurve des Kindes: Ein stabiles Perzentil über die Jahre bedeutet gesundes Wachstum – auch beim 10. oder 90. Perzentil.',
            'Um genau zu sehen, wo ein Kind auf den offiziellen Kurven liegt, nutzen Sie die Perzentil-Rechner:',
          ],
          link: {
            text: '→ Perzentil-Rechner für Jungen',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'pruefen',
          heading: 'Wann die Zahlen einen zweiten Blick verdienen',
          paragraphs: [
            'Wegen einer einzelnen Messung müssen Sie sich keine Sorgen machen. Achten Sie aber auf das Muster:',
          ],
          bulletPoints: [
            'Das Perzentil sinkt bei Kontrollen stetig (zum Beispiel 60. → 40. → 25.)',
            'Das Wachstum scheint über viele Monate zu stagnieren – außerhalb der normalen langsamen Phasen',
            'Das Kind liegt unter dem 3. oder über dem 97. Perzentil ohne ärztliche Begleitung',
          ],
          callout: {
            type: 'note',
            text: 'Wenn Ihnen etwas davon bekannt vorkommt, nehmen Sie die datierten Messungen mit zum Kinderarzt – der Verlauf über die Zeit hat medizinischen Wert, nicht eine einzelne Zahl.',
          },
          link: {
            text: '→ Größentabelle für Mädchen (CDC/WHO-basiert)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: 'Sind 5\'8" (173 cm) groß für einen 13-Jährigen?',
          answer: 'Ja – deutlich über dem Durchschnitt. Ein 13-jähriger Junge ist im Schnitt etwa 158 cm groß, 173 cm liegen also ungefähr beim 90. Perzentil oder höher. Für ein 13-jähriges Mädchen (in dem Alter ebenfalls im Schnitt ~158 cm) gilt das Gleiche. Bedenken Sie: Frühentwickler können mit 13 groß sein und als Erwachsene im Durchschnitt landen, sobald die Gleichaltrigen aufholen.',
        },
        {
          question: 'Warum sind Jungen nach der Pubertät größer als Mädchen?',
          answer: 'Testosteron sorgt bei Jungen für einen späteren, längeren Wachstumsschub: Er beginnt etwa zwei Jahre nach dem Schub der Mädchen und dauert länger an, und die Wachstumsfugen der Jungen schließen sich später (etwa 17–19 statt 15–17 Jahre bei Mädchen). Vor der Pubertät sind die Geschlechter im Durchschnitt fast identisch groß.',
        },
        {
          question: 'Mein Kind liegt unter dem Durchschnitt – muss ich mir Sorgen machen?',
          answer: 'Nicht wegen einer einzelnen Messung. Prüfen Sie das Perzentil und vor allem, ob es über die Zeit stabil geblieben ist – ein Kind, das schon immer beim 15. Perzentil lag, wächst normal. Zum Kinderarzt sollten Sie, wenn das Perzentil immer weiter sinkt, das Wachstum über viele Monate stagniert oder Sie einfach besorgt sind.',
        },
        {
          question: 'In welchem Alter hören Teenager auf zu wachsen?',
          answer: 'Die meisten Mädchen sind mit etwa 15–16 Jahren ausgewachsen, ungefähr zwei Jahre nach der ersten Periode. Die meisten Jungen sind mit etwa 17–18 Jahren fertig, manchmal mit kleinen Zuwächsen bis in die frühen Zwanziger. Sobald sich die Wachstumsfugen geschlossen haben, können weder Sport noch Nahrungsergänzung noch nennenswert Größe hinzufügen.',
        },
      ],
      relatedLinks: [
        {
          text: 'Größentabelle für Jungen',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: 'Größentabelle für Mädchen',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: 'Perzentil-Rechner für Jungen',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Perzentil-Rechner für Mädchen',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Erwachsenengröße Ihres Kindes vorhersagen',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    hi: {
      id: 'avg-height-by-age',
      slug: 'umar-ke-hisab-se-ausat-lambai-chart',
      title: 'उम्र के हिसाब से औसत लंबाई (0–20): पूरा चार्ट',
      subtitle: 'जन्म से 20 साल तक हर उम्र में लड़कों और लड़कियों की औसत लंबाई — और वो विकास के पड़ाव जो इन नंबरों को समझाते हैं।',
      metaDescription: 'लड़कों और लड़कियों के लिए उम्र के हिसाब से औसत लंबाई का चार्ट (0–20), CDC/WHO ग्रोथ डेटा पर आधारित। देखें हर उम्र में क्या सामान्य है और परसेंटाइल कब चेक करें।',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7 मिनट में पढ़ें',
      badge: 'संदर्भ गाइड',
      tocTitle: 'इस लेख में',
      intro: {
        lead: 'एक 10 साल के बच्चे की औसत लंबाई लगभग 140 सेमी होती है, चाहे वो लड़का हो या लड़की; 18 की उम्र तक औसत करीब 179 सेमी (युवकों में) और 166 सेमी (युवतियों में) हो जाता है। लड़कियां 11–12 साल की उम्र में लड़कों से थोड़ी आगे निकल जाती हैं, फिर लड़के अपनी देर से आने वाली ग्रोथ स्पर्ट के दौरान आगे बढ़ जाते हैं।',
        paragraphs: [
          'अगर आप देख रहे हैं कि आपका बच्चा "अपनी उम्र के हिसाब से सामान्य" है या नहीं, तो ये चार्ट आपके लिए शुरुआती बिंदु है। नीचे दिए गए मान CDC 2000 ग्रोथ चार्ट (2–20 वर्ष) और WHO चाइल्ड ग्रोथ स्टैंडर्ड (2 वर्ष से कम) से लिए गए 50वें परसेंटाइल के गोल-मोल संदर्भ आंकड़े हैं — वही संदर्भ जिन्हें बाल रोग विशेषज्ञ इस्तेमाल करते हैं।',
          'नंबर देखने से पहले एक ज़रूरी बात: औसत का मतलब आदर्श नहीं होता। इन आंकड़ों के आसपास स्वस्थ बच्चे काफी फैले हुए होते हैं, और एक बार का माप समय के साथ दिखने वाले पैटर्न से कहीं कम मायने रखता है।',
        ],
      },
      sections: [
        {
          id: 'chart',
          heading: 'पूरा चार्ट: उम्र के हिसाब से औसत लंबाई',
          paragraphs: [
            'उम्र ढूंढें, दाईं ओर पढ़ें। मान सेंटीमीटर में दिए गए अनुमानित 50वें परसेंटाइल संदर्भ आंकड़े हैं।',
          ],
          table: {
            headers: [
              'उम्र',
              'लड़के (सेमी)',
              'लड़कियां (सेमी)',
            ],
            rows: [
              [
                'जन्म',
                '50',
                '49',
              ],
              [
                '1 वर्ष',
                '76',
                '75',
              ],
              [
                '2 वर्ष',
                '88',
                '87',
              ],
              [
                '3 वर्ष',
                '96',
                '95',
              ],
              [
                '4 वर्ष',
                '103',
                '102',
              ],
              [
                '5 वर्ष',
                '110',
                '109',
              ],
              [
                '6 वर्ष',
                '116',
                '115',
              ],
              [
                '7 वर्ष',
                '122',
                '121',
              ],
              [
                '8 वर्ष',
                '128',
                '128',
              ],
              [
                '9 वर्ष',
                '134',
                '134',
              ],
              [
                '10 वर्ष',
                '140',
                '140',
              ],
              [
                '11 वर्ष',
                '145',
                '146',
              ],
              [
                '12 वर्ष',
                '151',
                '152',
              ],
              [
                '13 वर्ष',
                '158',
                '158',
              ],
              [
                '14 वर्ष',
                '166',
                '162',
              ],
              [
                '15 वर्ष',
                '172',
                '164',
              ],
              [
                '16 वर्ष',
                '176',
                '165',
              ],
              [
                '17 वर्ष',
                '178',
                '166',
              ],
              [
                '18 वर्ष',
                '179',
                '166',
              ],
              [
                '19 वर्ष',
                '179',
                '166',
              ],
              [
                '20 वर्ष',
                '179',
                '166',
              ],
            ],
            footnote: 'CDC 2000 ग्रोथ चार्ट (2–20 वर्ष) और WHO चाइल्ड ग्रोथ स्टैंडर्ड (2 वर्ष से कम) पर आधारित गोल-मोल 50वें परसेंटाइल संदर्भ मान। स्वस्थ बच्चों में इन आंकड़ों के आसपास काफी अंतर होता है।',
          },
          callout: {
            type: 'tip',
            text: 'तुरंत रूपांतरण: 150 सेमी ≈ 4\'11", 160 सेमी ≈ 5\'3", 170 सेमी ≈ 5\'7", 180 सेमी ≈ 5\'11"।',
          },
        },
        {
          id: 'milestones',
          heading: 'चार्ट से दिखने वाले अहम विकास पड़ाव',
          paragraphs: [
            'कच्चे नंबरों के पीछे कुछ पैटर्न छिपे हैं जो जानने लायक हैं:',
          ],
          bulletPoints: [
            'सबसे तेज़ वृद्धि पहले साल में होती है: शिशु लगभग 25 सेमी बढ़ते हैं, जो जीवन के किसी भी बाद के साल से ज़्यादा है।',
            'लड़कियों की प्यूबर्टी स्पर्ट पहले आती है — इसीलिए 11–12 साल की उम्र में वो लड़कों से थोड़ी लंबी होती हैं।',
            'लड़कों की स्पर्ट लगभग दो साल बाद शुरू होती है लेकिन लंबे समय तक चलती है, इसीलिए पुरुषों का औसत अंत में लगभग 13 सेमी ज़्यादा होता है।',
            'ग्रोथ प्लेटें आमतौर पर लड़कियों में 15–17 और लड़कों में 17–19 साल के आसपास बंद हो जाती हैं; उसके बाद लंबाई में कोई खास वृद्धि नहीं होती।',
            '8 से 10 साल की उम्र के बीच लड़कों और लड़कियों की औसत लंबाई लगभग एक जैसी होती है — प्यूबर्टी से पहले लिंग के आधार पर अंतर बहुत कम होता है।',
          ],
        },
        {
          id: 'reading-numbers',
          heading: 'इन नंबरों को कैसे पढ़ें',
          paragraphs: [
            'चार्ट बीच की रेखा दिखाता है — आधे बच्चे इससे ऊपर, आधे नीचे। 25वें या 75वें परसेंटाइल पर होना उतना ही सामान्य है जितना 50वें पर, बशर्ते बच्चा हमेशा उसी रेखा के आसपास रहा हो।',
            'बाल रोग विशेषज्ञों के लिए इस चार्ट का कोई एक नंबर नहीं, बल्कि बच्चे का अपना कर्व मायने रखता है: सालों तक स्थिर परसेंटाइल स्वस्थ वृद्धि का संकेत है, भले ही वो परसेंटाइल 10वां हो या 90वां।',
            'आधिकारिक कर्व पर बच्चा ठीक कहां खड़ा है, ये देखने के लिए परसेंटाइल कैलकुलेटर इस्तेमाल करें:',
          ],
          link: {
            text: '→ लड़कों का लंबाई परसेंटाइल कैलकुलेटर',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'when-to-check',
          heading: 'जब इन नंबरों पर दोबारा नज़र डालनी चाहिए',
          paragraphs: [
            'एक बार के माप पर चिंता न करें। लेकिन पैटर्न पर ध्यान ज़रूर दें:',
          ],
          bulletPoints: [
            'परसेंटाइल लगातार गिरता जाए (जैसे, 60वां → 40वां → 25वां)',
            'सामान्य धीमी अवधि के बाहर कई महीनों तक वृद्धि रुकी लगे',
            'बच्चा बिना चिकित्सा फॉलो-अप के तीसरे से नीचे या 97वें से ऊपर के परसेंटाइल पर हो',
          ],
          callout: {
            type: 'note',
            text: 'अगर ऊपर की कोई बात पहचानी-सी लगे, तो तारीख़ों के साथ लिए गए माप बाल रोग विशेषज्ञ को दिखाएं — चिकित्सकीय मायने समय के साथ दिखने वाले पैटर्न का है, किसी एक नंबर का नहीं।',
          },
          link: {
            text: '→ लड़कियों का लंबाई चार्ट (CDC/WHO आधारित)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: 'क्या 13 साल के बच्चे के लिए 5\'8" (173 सेमी) लंबा है?',
          answer: 'हां — औसत से काफी ऊपर। 13 साल के लड़के की औसत लंबाई लगभग 158 सेमी होती है, इसलिए 173 सेमी मोटे तौर पर 90वें परसेंटाइल या उससे ऊपर आता है। 13 साल की लड़की के लिए भी (इस उम्र में औसत भी ~158 सेमी ही है) ये औसत से उतना ही ऊपर है। ध्यान रखें कि जल्दी बढ़ने वाले बच्चे 13 की उम्र में लंबे हो सकते हैं और साथियों के पकड़ने पर वयस्क होकर औसत पर आ सकते हैं।',
        },
        {
          question: 'प्यूबर्टी के बाद लड़के लड़कियों से लंबे क्यों होते हैं?',
          answer: 'टेस्टोस्टेरोन लड़कों में देर से और लंबी चलने वाली ग्रोथ स्पर्ट चलाता है: ये लड़कियों की स्पर्ट के लगभग दो साल बाद शुरू होती है और ज़्यादा समय तक चलती है, और लड़कों की ग्रोथ प्लेटें भी देर से बंद होती हैं (लड़कियों के 15–17 के मुकाबले 17–19 के आसपास)। प्यूबर्टी से पहले दोनों की औसत लंबाई लगभग एक जैसी होती है।',
        },
        {
          question: 'मेरा बच्चा औसत से नीचे है — क्या मुझे चिंता करनी चाहिए?',
          answer: 'एक बार के माप से नहीं। परसेंटाइल देखें और सबसे ज़रूरी, वो समय के साथ स्थिर रहा है या नहीं — 15वें परसेंटाइल के आसपास हमेशा रहने वाला बच्चा सामान्य रूप से बढ़ रहा है। अगर परसेंटाइल लगातार गिरता जाए, कई महीनों तक वृद्धि रुकी लगे, या आपको बस चिंता हो, तो बाल रोग विशेषज्ञ से मिलें।',
        },
        {
          question: 'किशोरों की लंबाई किस उम्र में बढ़ना बंद होती है?',
          answer: 'ज़्यादातर लड़कियां 15–16 साल के आसपास बढ़ना बंद कर देती हैं, यानी पहले पीरियड के लगभग दो साल बाद। ज़्यादातर लड़के 17–18 के आसपास बंद करते हैं, कभी-कभी बीस के दशक की शुरुआत में थोड़ी वृद्धि होती रहती है। ग्रोथ प्लेटें बंद होने के बाद कोई व्यायाम या सप्लीमेंट खास लंबाई नहीं बढ़ा सकता।',
        },
      ],
      relatedLinks: [
        {
          text: 'लड़कों का लंबाई चार्ट',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: 'लड़कियों का लंबाई चार्ट',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: 'लड़कों का लंबाई परसेंटाइल',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'लड़कियों का लंबाई परसेंटाइल',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'अपने बच्चे की वयस्क लंबाई का अनुमान लगाएं',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    ja: {
      id: 'avg-height-by-age',
      slug: 'nenrei-betsu-heikin-shincho-hyo',
      title: '年齢別平均身長（0〜20歳）：完全チャート',
      subtitle: '0歳から20歳までの年齢別の平均身長を、男の子・女の子別に掲載 — 数字の背景にある成長のマイルストーンも解説します。',
      metaDescription: '年齢別平均身長チャート（0〜20歳）。CDC・WHOの成長データに基づく男の子・女の子の平均身長。各年齢の正常範囲と、パーセンタイルを確認すべきタイミングがわかります。',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7分で読める',
      badge: 'リファレンスガイド',
      tocTitle: 'この記事の内容',
      intro: {
        lead: '10歳の平均身長は男の子・女の子ともに約140cm。18歳では男性が約179cm、女性が約166cmになります。11〜12歳頃は女の子が男の子を一時的に追い越しますが、その後の思春期の成長スパートで男の子が再び上回ります。',
        paragraphs: [
          'お子さんの身長が「年齢相応かどうか」を確認したいなら、このチャートがスタート地点です。以下の数値は、CDC 2000成長曲線（2〜20歳）とWHO小児成長基準（2歳未満）から取った50パーセンタイル値（中央値）を四捨五入したものです。小児科医が使うのと同じ基準です。',
          '数字を見る前に大切な注意点があります。平均は「理想」とは違います。健康なお子さんの身長はこれらの数値を中心に広く分布しますし、1回だけの測定値は、長期的な成長パターンほど重要ではありません。',
        ],
      },
      sections: [
        {
          id: 'chart',
          heading: '完全チャート：年齢別平均身長',
          paragraphs: [
            '年齢を探して、横に読んでください。数値はcm単位のおおよその50パーセンタイル値です。',
          ],
          table: {
            headers: [
              '年齢',
              '男の子（cm）',
              '女の子（cm）',
            ],
            rows: [
              [
                '出生時',
                '50',
                '49',
              ],
              [
                '1歳',
                '76',
                '75',
              ],
              [
                '2歳',
                '88',
                '87',
              ],
              [
                '3歳',
                '96',
                '95',
              ],
              [
                '4歳',
                '103',
                '102',
              ],
              [
                '5歳',
                '110',
                '109',
              ],
              [
                '6歳',
                '116',
                '115',
              ],
              [
                '7歳',
                '122',
                '121',
              ],
              [
                '8歳',
                '128',
                '128',
              ],
              [
                '9歳',
                '134',
                '134',
              ],
              [
                '10歳',
                '140',
                '140',
              ],
              [
                '11歳',
                '145',
                '146',
              ],
              [
                '12歳',
                '151',
                '152',
              ],
              [
                '13歳',
                '158',
                '158',
              ],
              [
                '14歳',
                '166',
                '162',
              ],
              [
                '15歳',
                '172',
                '164',
              ],
              [
                '16歳',
                '176',
                '165',
              ],
              [
                '17歳',
                '178',
                '166',
              ],
              [
                '18歳',
                '179',
                '166',
              ],
              [
                '19歳',
                '179',
                '166',
              ],
              [
                '20歳',
                '179',
                '166',
              ],
            ],
            footnote: 'CDC 2000成長曲線（2〜20歳）とWHO小児成長基準（2歳未満）に基づく50パーセンタイル値の概数。健康なお子さんの身長はこれらの数値を中心に大きくばらつきます。',
          },
          callout: {
            type: 'tip',
            text: '換算の目安：150cm ≈ 4フィート11インチ、160cm ≈ 5フィート3インチ、170cm ≈ 5フィート7インチ、180cm ≈ 5フィート11インチ。',
          },
        },
        {
          id: 'milestones',
          heading: 'チャートから読み取れる成長のマイルストーン',
          paragraphs: [
            '生の数字には、知っておきたいパターンがいくつか隠れています。',
          ],
          bulletPoints: [
            '最も成長が速いのは生後1年間です。赤ちゃんは約25cm伸びますが、これは人生でその後に訪れるどの1年よりも大きな伸びです。',
            '女の子は思春期のスパートが先に来ます。そのため11〜12歳頃は男の子より少し背が高くなります。',
            '男の子はスパートが約2年遅れて始まりますが、成長期間が長いため、最終的な平均身長は約13cm高くなります。',
            '骨端線（成長板）は女の子では15〜17歳頃、男の子では17〜19歳頃に閉じるのが一般的です。その後の大きな身長の伸びは止まります。',
            '8〜10歳の間は、男の子と女の子の平均身長はほぼ同じです。思春期前の性差はごくわずかです。',
          ],
        },
        {
          id: 'reading-numbers',
          heading: 'この数字の読み方',
          paragraphs: [
            'このチャートが示すのは真ん中の値です。半分のお子さんはこれより高く、半分は低くなります。25パーセンタイルや75パーセンタイルも、ずっとそのライン付近をたどってきたなら、50パーセンタイルと同じくらい正常です。',
            '小児科医が本当に重視するのは、このチャートのどの数字でもなく、お子さん自身の成長曲線です。10パーセンタイルでも90パーセンタイルでも、長年にわたって安定していれば健康な成長と言えます。',
            'お子さんが公式の曲線上でどの位置にあるかを正確に知りたい方は、パーセンタイル計算機をご利用ください。',
          ],
          link: {
            text: '→ 男の子の身長パーセンタイル計算機',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'when-to-check',
          heading: '数字をもう一度見直すべきとき',
          paragraphs: [
            '1回だけの測定値は気にしなくて大丈夫です。注意すべきはパターンです。',
          ],
          bulletPoints: [
            '検診のたびにパーセンタイルが着実に下がっている（例：60 → 40 → 25パーセンタイル）',
            '通常の成長が緩やかな時期以外で、数か月以上成長が止まったように見える',
            '医学的なフォローなしに3パーセンタイル未満または97パーセンタイル超えている',
          ],
          callout: {
            type: 'note',
            text: '上記のいずれかに心当たりがある場合は、日付入りの測定記録を小児科医に持参してください。医学的に意味があるのは1回だけの数字ではなく、時間の経過に伴うパターンです。',
          },
          link: {
            text: '→ 女の子の身長チャート（CDC・WHO基準）',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: '13歳で173cm（5フィート8インチ）は背が高いほうですか？',
          answer: 'はい、かなり平均より上です。13歳の男の子の平均は約158cmなので、173cmはおよそ90パーセンタイル以上に相当します。13歳の女の子（この年齢の平均も約158cm）にとっても同様に平均より高い方です。ただし、早熟のお子さんは13歳の時点で背が高くても、友達が追いついてくると最終的には平均的になることもあります。',
        },
        {
          question: 'なぜ思春期の後は男の子の方が背が高くなるのですか？',
          answer: 'テストステロンによって男の子の成長スパートは遅く、長く続くからです。女の子より約2年遅れて始まり、より長期間続き、骨端線も遅く閉じます（男の子17〜19歳頃、女の子15〜17歳頃）。思春期前の平均身長は男女でほぼ同じです。',
        },
        {
          question: 'うちの子は平均より低いですが、心配すべきですか？',
          answer: '1回だけの測定値では心配いりません。パーセンタイルを確認し、さらに重要なのは、それが長期間安定しているかどうかです。ずっと15パーセンタイル付近をたどってきたお子さんは正常に成長しています。パーセンタイルが下がり続けている、数か月以上成長が止まっている、または単に心配な場合は小児科医に相談してください。',
        },
        {
          question: 'ティーンエイジャーは何歳で身長が止まりますか？',
          answer: '女の子は初潮から約2年後の15〜16歳頃に成長が終わるのが一般的です。男の子は17〜18歳頃に終わり、20歳代初めまでわずかに伸びることもあります。骨端線が閉じた後は、運動やサプリメントで意味のある身長の伸びは得られません。',
        },
      ],
      relatedLinks: [
        {
          text: '男の子の身長チャート',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: '女の子の身長チャート',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: '男の子の身長パーセンタイル',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: '女の子の身長パーセンタイル',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'お子さんの将来の身長を予測する',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    ko: {
      id: 'avg-height-by-age',
      slug: 'nai-byeol-pyeonggyun-ki-pyo',
      title: '나이별 평균 키(0~20세): 완벽한 차트',
      subtitle: '출생부터 20세까지 모든 나이의 평균 키 — 숫자 뒤에 숨은 주요 성장 단계까지 함께 알아보세요.',
      metaDescription: 'CDC/WHO 성장 데이터 기반 나이별 평균 키 차트(0~20세, 남녀). 모든 나이에서 정상 범위를 확인하고 백분위수를 언제 확인해야 하는지 알아보세요.',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7분 읽기',
      badge: '참고 가이드',
      tocTitle: '이 글의 목차',
      intro: {
        lead: '10세 어린이는 남녀 구분 없이 평균 약 140cm이며, 18세가 되면 평균적으로 남성은 약 179cm, 여성은 약 166cm이 됩니다. 여아가 11~12세 무렵에 남아를 잠시 앞지르다가, 이후 사춘기 성장 급등기를 거치며 남아가 다시 앞서게 됩니다.',
        paragraphs: [
          '우리 아이가 "나이 또래에 비해 정상적인지" 확인하고 있다면, 이 차트가 출발점입니다. 아래 수치는 CDC 2000 성장 차트(2~20세)와 WHO 아동 성장 표준(2세 미만)에서 가져온 반올림된 50백분위수 참고값으로, 소아과 의사가 사용하는 것과 같은 기준입니다.',
          '숫자를 보기 전에 중요한 한 가지: 평균이 곧 이상적인 것은 아닙니다. 건강한 아이들은 이 값 주변에 넓게 분포하며, 한 번의 측정보다 시간에 따른 패턴이 훨씬 중요합니다.',
        ],
      },
      sections: [
        {
          id: 'chart',
          heading: '전체 차트: 나이별 평균 키',
          paragraphs: [
            '나이를 찾고 가로로 읽으세요. 수치는 센티미터 단위의 대략적인 50백분위수 참고값입니다.',
          ],
          table: {
            headers: [
              '나이',
              '남아 (cm)',
              '여아 (cm)',
            ],
            rows: [
              [
                '출생',
                '50',
                '49',
              ],
              [
                '1세',
                '76',
                '75',
              ],
              [
                '2세',
                '88',
                '87',
              ],
              [
                '3세',
                '96',
                '95',
              ],
              [
                '4세',
                '103',
                '102',
              ],
              [
                '5세',
                '110',
                '109',
              ],
              [
                '6세',
                '116',
                '115',
              ],
              [
                '7세',
                '122',
                '121',
              ],
              [
                '8세',
                '128',
                '128',
              ],
              [
                '9세',
                '134',
                '134',
              ],
              [
                '10세',
                '140',
                '140',
              ],
              [
                '11세',
                '145',
                '146',
              ],
              [
                '12세',
                '151',
                '152',
              ],
              [
                '13세',
                '158',
                '158',
              ],
              [
                '14세',
                '166',
                '162',
              ],
              [
                '15세',
                '172',
                '164',
              ],
              [
                '16세',
                '176',
                '165',
              ],
              [
                '17세',
                '178',
                '166',
              ],
              [
                '18세',
                '179',
                '166',
              ],
              [
                '19세',
                '179',
                '166',
              ],
              [
                '20세',
                '179',
                '166',
              ],
            ],
            footnote: 'CDC 2000 성장 차트(2~20세)와 WHO 아동 성장 표준(2세 미만)을 기반으로 한 반올림된 50백분위수 참고값입니다. 건강한 아이들도 이 수치 주변에서 크게 다를 수 있습니다.',
          },
          callout: {
            type: 'tip',
            text: '간단한 환산: 150cm ≈ 4\'11", 160cm ≈ 5\'3", 170cm ≈ 5\'7", 180cm ≈ 5\'11".',
          },
        },
        {
          id: 'milestones',
          heading: '차트가 알려주는 주요 성장 단계',
          paragraphs: [
            '숫자만 보면 알기 어려운 몇 가지 패턴이 있습니다:',
          ],
          bulletPoints: [
            '가장 빠른 성장은 생후 1년 차에 일어납니다. 아기는 약 25cm가 자라는데, 이는 인생의 어떤 해보다 큰 성장입니다.',
            '여아가 사춘기 성장 급등기를 먼저 겪습니다 — 그래서 11~12세 무렵에는 여아가 남아보다 약간 더 큽니다.',
            '남아는 약 2년 늦게 급등기가 시작되지만 더 오래 자라기 때문에, 최종적으로 남성 평균이 약 13cm 더 높습니다.',
            '성장판은 보통 여아 15~17세, 남아 17~19세 무렵에 닫히며, 그 이후에는 의미 있는 키 성장이 멈춥니다.',
            '8~10세 사이에는 남아와 여아의 평균 키가 거의 같습니다 — 사춘기 이전의 성별 차이는 매우 작습니다.',
          ],
        },
        {
          id: 'reading-numbers',
          heading: '이 숫자를 읽는 방법',
          paragraphs: [
            '차트는 집단의 중간을 보여줍니다 — 아이의 절반은 위에, 절반은 아래에 있습니다. 아이가 항상 그 선 근처를 따라왔다면 25백분위수나 75백분위수도 50백분위수만큼 정상입니다.',
            '소아과 의사가 실제로 중요하게 보는 것은 이 차트의 특정 숫자가 아니라 아이 자신의 곡선입니다. 그 백분위수가 10백분위수든 90백분위수든, 수년에 걸쳐 안정적인 백분위수를 유지하는 것은 건강한 성장의 신호입니다.',
            '공식 곡선상에서 아이가 정확히 어디에 있는지 확인하려면 백분위수 계산기를 사용하세요:',
          ],
          link: {
            text: '→ 남아 키 백분위수 계산기',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'when-to-check',
          heading: '숫자를 다시 살펴봐야 할 때',
          paragraphs: [
            '한 번의 측정에 걱정하지 마세요. 패턴에 주목하세요:',
          ],
          bulletPoints: [
            '검진 때마다 백분위수가 꾸준히 떨어진다 (예: 60 → 40 → 25 백분위수)',
            '정상적인 성장 둔화기가 아닌데도 수개월 동안 성장이 멈춘 것처럼 보인다',
            '의학적 추적 없이 3백분위수 아래나 97백분위수 위에 있다',
          ],
          callout: {
            type: 'note',
            text: '위 중 해당되는 것이 있다면 날짜가 기록된 측정값을 소아과 의사에게 가져가세요 — 의학적으로 가치 있는 것은 하나의 숫자가 아니라 시간에 따른 패턴입니다.',
          },
          link: {
            text: '→ 여아 키 차트 (CDC/WHO 기준)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: '13세에 173cm(5\'8")는 큰 편인가요?',
          answer: '네 — 평균보다 훨씬 큽니다. 13세 남아의 평균은 약 158cm이므로 173cm는 대략 90백분위수 이상에 해당합니다. 13세 여아(그 나이의 평균도 약 158cm)에게도 마찬가지로 평균 이상입니다. 다만 일찍 사춘기를 맞은 아이는 13세에 키가 크다가 친구들이 따라잡으면서 성인이 되면 평균이 될 수 있다는 점을 기억하세요.',
        },
        {
          question: '사춘기 이후에 남아가 여아보다 큰 이유는 무엇인가요?',
          answer: '테스토스테론이 남아에게 더 늦고 긴 성장 급등기를 가져오기 때문입니다. 여아의 급등기보다 약 2년 늦게 시작되고 더 오래 지속되며, 성장판도 더 늦게 닫힙니다(여아 15~17세 대비 남아 17~19세). 사춘기 이전에는 평균 키가 성별에 관계없이 거의 같습니다.',
        },
        {
          question: '우리 아이가 평균보다 작은데 걱정해야 할까요?',
          answer: '한 번의 측정만으로는 걱정할 필요 없습니다. 백분위수를 확인하고, 더 중요하게는 그 백분위수가 시간이 지나도 안정적인지 보세요 — 항상 15백분위수 근처를 따라온 아이는 정상적으로 성장하고 있는 것입니다. 백분위수가 계속 떨어지거나, 수개월 동안 성장이 멈추거나, 단순히 걱정이 된다면 소아과 의사와 상담하세요.',
        },
        {
          question: '십대는 몇 살에 성장이 멈추나요?',
          answer: '대부분의 여아는 초경 약 2년 후인 15~16세 무렵에 성장이 끝납니다. 대부분의 남아는 17~18세 무렵에 끝나며, 20대 초반까지 조금 더 자라기도 합니다. 성장판이 닫히면 어떤 운동이나 영양제도 의미 있는 키 증가를 가져올 수 없습니다.',
        },
      ],
      relatedLinks: [
        {
          text: '남아 키 차트',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: '여아 키 차트',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: '남아 키 백분위수',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: '여아 키 백분위수',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: '우리 아이의 성인 키 예측하기',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    ar: {
      id: 'avg-height-by-age',
      slug: 'mutawassit-al-tool-hasab-al-3umr',
      title: 'متوسط الطول حسب العمر (0–20): الجدول الكامل',
      subtitle: 'متوسط طول الأطفال والمراهقين من الولادة حتى عمر 20 عامًا، للذكور والإناث — مع أبرز محطات النمو التي تفسّر هذه الأرقام.',
      metaDescription: 'جدول متوسط الطول حسب العمر (0–20) للذكور والإناث، استنادًا إلى بيانات النمو من CDC ومنظمة الصحة العالمية. تعرّف على ما هو طبيعي في كل عمر، ومتى ينبغي مراجعة المئين.',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7 دقائق للقراءة',
      badge: 'دليل مرجعي',
      tocTitle: 'في هذا المقال',
      intro: {
        lead: 'يبلغ متوسط طول الطفل في عمر 10 سنوات حوالي 140 سم سواء كان ذكرًا أم أنثى؛ وفي عمر 18 عامًا، يبلغ المتوسط حوالي 179 سم للشبان و166 سم للشابات. تتفوق الفتيات على الفتيان لفترة قصيرة في عمر 11–12 عامًا، ثم يتقدم الفتيان خلال طفرة البلوغ المتأخرة لديهم.',
        paragraphs: [
          'إذا كنت تتساءل عما إذا كان طول طفلك "طبيعيًا بالنسبة لعمره"، فهذا الجدول هو نقطة البداية. القيم أدناه هي أرقام مرجعية مقربة للمئين الخمسين، مستمدة من مخططات النمو الصادرة عن CDC عام 2000 (للأعمار 2–20) ومعايير نمو الأطفال لمنظمة الصحة العالمية (لمن هم دون السنتين) — وهي المراجع نفسها التي يستخدمها أطباء الأطفال.',
          'ملاحظة مهمة قبل الأرقام: المتوسط ليس هو المثالي. تتوزع أطوال الأطفال الأصحاء على نطاق واسع حول هذه القيم، وقياس واحد منفرد أقل أهمية بكثير من نمط القياسات عبر الزمن.',
        ],
      },
      sections: [
        {
          id: 'al-jadwal',
          heading: 'الجدول الكامل: متوسط الطول حسب العمر',
          paragraphs: [
            'اعثر على العمر ثم اقرأ الأرقام المقابلة. القيم هي مراجع تقريبية للمئين الخمسين بوحدة السنتيمتر.',
          ],
          table: {
            headers: [
              'العمر',
              'الذكور (سم)',
              'الإناث (سم)',
            ],
            rows: [
              [
                'عند الولادة',
                '50',
                '49',
              ],
              [
                'سنة واحدة',
                '76',
                '75',
              ],
              [
                'سنتان',
                '88',
                '87',
              ],
              [
                '3 سنوات',
                '96',
                '95',
              ],
              [
                '4 سنوات',
                '103',
                '102',
              ],
              [
                '5 سنوات',
                '110',
                '109',
              ],
              [
                '6 سنوات',
                '116',
                '115',
              ],
              [
                '7 سنوات',
                '122',
                '121',
              ],
              [
                '8 سنوات',
                '128',
                '128',
              ],
              [
                '9 سنوات',
                '134',
                '134',
              ],
              [
                '10 سنوات',
                '140',
                '140',
              ],
              [
                '11 سنة',
                '145',
                '146',
              ],
              [
                '12 سنة',
                '151',
                '152',
              ],
              [
                '13 سنة',
                '158',
                '158',
              ],
              [
                '14 سنة',
                '166',
                '162',
              ],
              [
                '15 سنة',
                '172',
                '164',
              ],
              [
                '16 سنة',
                '176',
                '165',
              ],
              [
                '17 سنة',
                '178',
                '166',
              ],
              [
                '18 سنة',
                '179',
                '166',
              ],
              [
                '19 سنة',
                '179',
                '166',
              ],
              [
                '20 سنة',
                '179',
                '166',
              ],
            ],
            footnote: 'قيم مرجعية مقربة للمئين الخمسين، استنادًا إلى مخططات النمو الصادرة عن CDC عام 2000 (للأعمار 2–20) ومعايير نمو الأطفال لمنظمة الصحة العالمية (لمن هم دون السنتين). تختلف أطوال الأطفال الأصحاء اختلافًا واسعًا حول هذه الأرقام.',
          },
          callout: {
            type: 'tip',
            text: 'تحويلات سريعة: 150 سم ≈ 4\'11"، 160 سم ≈ 5\'3"، 170 سم ≈ 5\'7"، 180 سم ≈ 5\'11".',
          },
        },
        {
          id: 'marahil-al-numuw',
          heading: 'أبرز محطات النمو التي يكشفها الجدول',
          paragraphs: [
            'تخفي هذه الأرقام الخام بعض الأنماط الجديرة بالمعرفة:',
          ],
          bulletPoints: [
            'يحدث أسرع نمو في السنة الأولى: يكتسب الرضع حوالي 25 سم، وهو أكثر مما يكتسبونه في أي سنة لاحقة من حياتهم.',
            'تصل الفتيات إلى طفرة البلوغ أولًا — ولهذا السبب يكنّ أطول قليلًا من الفتيان في عمر 11–12 عامًا.',
            'يبدأ الفتيان طفرتهم بعد ذلك بنحو سنتين لكنهم يواصلون النمو لفترة أطول، ولهذا السبب ينتهي متوسط طول الذكور أعلى بنحو 13 سم.',
            'تُغلق صفائح النمو عادةً في عمر 15–17 لدى الفتيات و17–19 لدى الفتيان؛ وبعد ذلك تتوقف أي زيادة ذات معنى في الطول.',
            'بين عمر 8 و10 سنوات، يكون متوسط طول الفتيان والفتيات متطابقًا تقريبًا — فالفروق بين الجنسين قبل البلوغ ضئيلة جدًا.',
          ],
        },
        {
          id: 'qiraat-al-arqam',
          heading: 'كيف تقرأ هذه الأرقام',
          paragraphs: [
            'يُظهر الجدول منتصف المجموعة — نصف الأطفال فوقه ونصفهم تحته. التواجد عند المئين 25 أو 75 طبيعي تمامًا كالتواجد عند المئين 50، ما دام الطفل يسير دائمًا بالقرب من ذلك الخط.',
            'ما يهم أطباء الأطفال فعلًا ليس أي رقم منفرد في هذا الجدول، بل منحنى نمو الطفل نفسه: ثبات المئين عبر السنوات يعني نموًا صحيًا، حتى لو كان هذا المئين هو العاشر أو التسعين.',
            'لمعرفة موقع طفلك بدقة على المنحنيات الرسمية، استخدم حاسبات المئين:',
          ],
          link: {
            text: '→ حاسبة مئين طول الفتيان',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'mata-tantabih',
          heading: 'متى تستحق الأرقام نظرة ثانية',
          paragraphs: [
            'لا تقلق بشأن قياس واحد. انتبه إلى النمط:',
          ],
          bulletPoints: [
            'انخفاض المئين باستمرار عبر الفحوصات (مثلًا من 60 إلى 40 ثم إلى 25)',
            'توقف النمو لعدة أشهر خارج فترات التباطؤ الطبيعية',
            'وجود الطفل تحت المئين الثالث أو فوق المئين 97 دون متابعة طبية',
          ],
          callout: {
            type: 'note',
            text: 'إذا كان أي مما سبق مألوفًا لديك، فأحضر القياسات المؤرخة إلى طبيب الأطفال — فالنمط عبر الزمن هو ما له قيمة طبية، وليس أي رقم منفرد.',
          },
          link: {
            text: '→ جدول طول الفتيات (استنادًا إلى CDC ومنظمة الصحة العالمية)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: 'هل يُعد طول 173 سم (5\'8") طويلًا لطفل في عمر 13 عامًا؟',
          answer: 'نعم — إنه أعلى بكثير من المتوسط. يبلغ متوسط طول الفتى في عمر 13 عامًا حوالي 158 سم، لذا فإن 173 سم يقع تقريبًا عند المئين 90 أو أعلى. وبالنسبة للفتاة في عمر 13 عامًا (المتوسط أيضًا حوالي 158 سم في ذلك العمر)، فهو أعلى من المتوسط بالقدر نفسه. وتذكّر أن المراهقين المبكرين قد يكونون طوالًا في سن 13 ثم ينتهي بهم الأمر ضمن المتوسط عندما يلحق بهم أقرانهم.',
        },
        {
          question: 'لماذا يكون الفتيان أطول من الفتيات بعد البلوغ؟',
          answer: 'يدفع هرمون التستوستيرون طفرة نمو متأخرة وأطول لدى الفتيان: تبدأ بعد طفرة الفتيات بنحو سنتين وتستمر لفترة أطول، كما تُغلق صفائح النمو لديهم لاحقًا (حوالي 17–19 مقابل 15–17 لدى الفتيات). وقبل البلوغ، يكون متوسط طول الجنسين متطابقًا تقريبًا.',
        },
        {
          question: 'طفلي أقل من المتوسط — هل يجب أن أقلق؟',
          answer: 'ليس بناءً على قياس واحد. تحقق من المئين، والأهم من ذلك ما إذا كان ثابتًا عبر الزمن — فالطفل الذي يسير دائمًا بالقرب من المئين 15 ينمو بشكل طبيعي. راجع طبيب الأطفال إذا استمر المئين في الانخفاض، أو توقف النمو لعدة أشهر، أو كنت قلقًا ببساطة.',
        },
        {
          question: 'في أي عمر يتوقف المراهقون عن النمو؟',
          answer: 'تنهي معظم الفتيات نموهن في عمر 15–16 تقريبًا، أي بعد نحو سنتين من أول دورة شهرية. وينهي معظم الفتيان نموهم في عمر 17–18 تقريبًا، مع احتمال استمرار زيادات صغيرة حتى أوائل العشرينيات. وبمجرد إغلاق صفائح النمو، لا يمكن لأي تمرين أو مكمل غذائي أن يضيف طولًا ذا معنى.',
        },
      ],
      relatedLinks: [
        {
          text: 'جدول طول الفتيان',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: 'جدول طول الفتيات',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: 'مئين طول الفتيان',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'مئين طول الفتيات',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'توقّع الطول البالغ لطفلك',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
    ru: {
      id: 'avg-height-by-age',
      slug: 'sredniy-rost-po-vozrastu-tablitsa',
      title: 'Средний рост по возрасту (0–20): полная таблица',
      subtitle: 'Средний рост для каждого возраста от рождения до 20 лет — для мальчиков и девочек, а также основные этапы роста, объясняющие эти цифры.',
      metaDescription: 'Таблица среднего роста по возрасту (0–20) для мальчиков и девочек на основе данных CDC/ВОЗ. Узнайте, что считается нормой в каждом возрасте и когда стоит проверить перцентиль.',
      datePublished: '2026-10-07',
      dateModified: '2026-10-07',
      readTime: '7 мин чтения',
      badge: 'Справочное руководство',
      tocTitle: 'В этой статье',
      intro: {
        lead: 'Десятилетний ребёнок в среднем имеет рост около 140 см — и мальчик, и девочка; к 18 годам средние значения составляют примерно 179 см у юношей и 166 см у девушек. Девочки ненадолго обгоняют мальчиков в возрасте около 11–12 лет, а затем мальчики вырываются вперёд во время более позднего пубертатного скачка.',
        paragraphs: [
          'Если вы проверяете, соответствует ли рост вашего ребёнка «норме для его возраста», эта таблица — ваша отправная точка. Значения ниже — округлённые справочные показатели 50-го перцентиля из кривых роста CDC 2000 (возраст 2–20 лет) и стандартов роста детей ВОЗ (до 2 лет) — тех же справочников, которыми пользуются педиатры.',
          'Одна важная оговорка перед цифрами: средний показатель — не то же самое, что идеальный. Здоровые дети широко разбросаны вокруг этих значений, и одно измерение значит гораздо меньше, чем динамика во времени.',
        ],
      },
      sections: [
        {
          id: 'chart',
          heading: 'Полная таблица: средний рост по возрасту',
          paragraphs: [
            'Найдите возраст и читайте поперёк. Значения — приблизительные справочные показатели 50-го перцентиля в сантиметрах.',
          ],
          table: {
            headers: [
              'Возраст',
              'Мальчики (см)',
              'Девочки (см)',
            ],
            rows: [
              [
                'При рождении',
                '50',
                '49',
              ],
              [
                '1 год',
                '76',
                '75',
              ],
              [
                '2 года',
                '88',
                '87',
              ],
              [
                '3 года',
                '96',
                '95',
              ],
              [
                '4 года',
                '103',
                '102',
              ],
              [
                '5 лет',
                '110',
                '109',
              ],
              [
                '6 лет',
                '116',
                '115',
              ],
              [
                '7 лет',
                '122',
                '121',
              ],
              [
                '8 лет',
                '128',
                '128',
              ],
              [
                '9 лет',
                '134',
                '134',
              ],
              [
                '10 лет',
                '140',
                '140',
              ],
              [
                '11 лет',
                '145',
                '146',
              ],
              [
                '12 лет',
                '151',
                '152',
              ],
              [
                '13 лет',
                '158',
                '158',
              ],
              [
                '14 лет',
                '166',
                '162',
              ],
              [
                '15 лет',
                '172',
                '164',
              ],
              [
                '16 лет',
                '176',
                '165',
              ],
              [
                '17 лет',
                '178',
                '166',
              ],
              [
                '18 лет',
                '179',
                '166',
              ],
              [
                '19 лет',
                '179',
                '166',
              ],
              [
                '20 лет',
                '179',
                '166',
              ],
            ],
            footnote: 'Округлённые справочные значения 50-го перцентиля на основе кривых роста CDC 2000 (возраст 2–20 лет) и стандартов роста детей ВОЗ (до 2 лет). Показатели здоровых детей широко варьируются вокруг этих цифр.',
          },
          callout: {
            type: 'tip',
            text: 'Быстрые пересчёты: 150 см ≈ 4\'11", 160 см ≈ 5\'3", 170 см ≈ 5\'7", 180 см ≈ 5\'11".',
          },
        },
        {
          id: 'milestones',
          heading: 'Ключевые этапы роста, которые раскрывает таблица',
          paragraphs: [
            'За сухими цифрами скрывается несколько закономерностей, которые стоит знать:',
          ],
          bulletPoints: [
            'Самый быстрый рост происходит в первый год жизни: младенцы прибавляют около 25 см — больше, чем в любой последующий год жизни.',
            'Девочки вступают в пубертатный скачок раньше — поэтому в возрасте около 11–12 лет они немного выше мальчиков.',
            'Мальчики начинают свой скачок примерно на два года позже, но растут дольше — поэтому средний рост мужчин в итоге примерно на 13 см выше.',
            'Зоны роста обычно закрываются в возрасте 15–17 лет у девочек и 17–19 лет у мальчиков; после этого значимого прибавления в росте уже не происходит.',
            'В возрасте от 8 до 10 лет мальчики и девочки почти не различаются по среднему росту — до пубертата различия между полами минимальны.',
          ],
        },
        {
          id: 'reading-numbers',
          heading: 'Как правильно читать эти цифры',
          paragraphs: [
            'В таблице показана середина распределения — половина детей выше, половина ниже. Находиться на 25-м или 75-м перцентиле так же нормально, как и на 50-м, если ребёнок всегда шёл примерно по этой же линии.',
            'Для педиатров важна не какая-то конкретная цифра из этой таблицы, а собственная кривая ребёнка: стабильный перцентиль на протяжении лет означает здоровый рост, даже если этот перцентиль — 10-й или 90-й.',
            'Чтобы увидеть, где именно находится ребёнок на официальных кривых, воспользуйтесь калькуляторами перцентилей:',
          ],
          link: {
            text: '→ Калькулятор перцентиля роста для мальчиков',
            href: '/height-calculator/boys-percentile/',
          },
        },
        {
          id: 'when-to-check',
          heading: 'Когда цифры заслуживают более пристального внимания',
          paragraphs: [
            'Не переживайте из-за одного измерения. Обращайте внимание на динамику:',
          ],
          bulletPoints: [
            'Перцентиль стабильно снижается от осмотра к осмотру (например, 60-й → 40-й → 25-й)',
            'Рост, кажется, замер на многие месяцы вне обычных медленных периодов',
            'Ребёнок находится ниже 3-го или выше 97-го перцентиля без медицинского наблюдения',
          ],
          callout: {
            type: 'note',
            text: 'Если что-то из перечисленного вам знакомо, принесите датированные измерения педиатру — медицинскую ценность имеет динамика во времени, а не отдельное число.',
          },
          link: {
            text: '→ Таблица роста для девочек (на основе CDC/ВОЗ)',
            href: '/height-calculator/girls-chart/',
          },
        },
      ],
      faqs: [
        {
          question: 'Рост 173 см (5\'8") — это много для 13-летнего?',
          answer: 'Да — заметно выше среднего. Тринадцатилетний мальчик в среднем имеет рост около 158 см, так что 173 см — это примерно 90-й перцентиль или выше. Для тринадцатилетней девочки (средний рост в этом возрасте тоже ~158 см) это точно так же выше среднего. Помните: рано созревшие дети могут быть высокими в 13 лет, а к взрослому возрасту оказаться средними, когда сверстники их догонят.',
        },
        {
          question: 'Почему мальчики после пубертата выше девочек?',
          answer: 'Тестостерон запускает у мальчиков более поздний и длительный скачок роста: он начинается примерно на два года позже, чем у девочек, и продолжается дольше, а зоны роста у мальчиков закрываются позже (около 17–19 лет против 15–17 лет у девочек). До пубертата средний рост мальчиков и девочек почти не различается.',
        },
        {
          question: 'Мой ребёнок ниже среднего — стоит ли беспокоиться?',
          answer: 'Не из-за одного измерения. Проверьте перцентиль и, что важнее, был ли он стабилен во времени — ребёнок, который всегда шёл около 15-го перцентиля, растёт нормально. Обратитесь к педиатру, если перцентиль продолжает снижаться, рост замер на многие месяцы или вы просто обеспокоены.',
        },
        {
          question: 'В каком возрасте подростки перестают расти?',
          answer: 'Большинство девочек заканчивают расти около 15–16 лет, примерно через два года после первой менструации. Большинство мальчиков — около 17–18 лет, при этом небольшие прибавки иногда продолжаются до начала третьего десятка. После закрытия зон роста ни упражнения, ни добавки не могут дать значимого прибавления в росте.',
        },
      ],
      relatedLinks: [
        {
          text: 'Таблица роста для мальчиков',
          href: '/height-calculator/boys-chart/',
        },
        {
          text: 'Таблица роста для девочек',
          href: '/height-calculator/girls-chart/',
        },
        {
          text: 'Перцентиль роста для мальчиков',
          href: '/height-calculator/boys-percentile/',
        },
        {
          text: 'Перцентиль роста для девочек',
          href: '/height-calculator/girls-percentile/',
        },
        {
          text: 'Предскажите взрослый рост ребёнка',
          href: '/articles/predict-your-childs-adult-height/',
        },
      ],
    },
  },
};
