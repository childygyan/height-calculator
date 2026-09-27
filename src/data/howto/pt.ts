import type { HowToGuideData } from './types';

export const ptHowToGuide: HowToGuideData = {
  locale: 'pt',
  title: 'Como Usar o Height Calculator',
  subtitle: 'Um guia completo, passo a passo, para medir, converter, comparar e entender a altura — do crescimento do bebê à estatura adulta.',
  badge: 'Guia Completo do Usuário',
  metaDescription: 'Aprenda a usar o Height Calculator: meça a altura com precisão, converta cm e pés/pol, calcule diferenças de altura, verifique percentis e entenda as curvas de crescimento.',
  readTime: '8 min de leitura',
  tocTitle: 'Índice',
  intro: {
    lead: 'O Height Calculator é uma calculadora de altura gratuita criada para ajudar você a prever, acompanhar e realmente entender a altura — dos primeiros centímetros do bebê à estatura adulta.',
    paragraphs: [
      'Seja você um pai ou mãe acompanhando o crescimento do bebê, curioso para saber qual será a altura adulta do seu filho, ou apenas convertendo entre centímetros e pés/polegadas, números brutos raramente contam a história completa. Ler que uma criança tem 95 cm é abstrato; ver onde isso se encontra na curva de percentis do CDC/OMS — ou o que isso prevê para a altura adulta — transforma um número em compreensão.',
      'Este guia acompanha você por cada recurso: medição precisa, conversão de unidades, percentis de crescimento, previsão de altura infantil e leitura correta dos resultados.',
    ],
  },
  sections: [
    {
      id: 'what-is-height-calculator',
      heading: '1. O Que é uma Calculadora de Altura?',
      paragraphs: [
        'Uma calculadora de altura transforma números brutos em respostas claras. Em vez de se perguntar o que um percentil significa, quantos centímetros separam duas alturas ou qual será a altura futura de uma criança, a calculadora resolve isso instantaneamente — com base em referências reais de crescimento.',
        'No Height Calculator, você pode converter entre centímetros e pés/polegadas, calcular a diferença exata entre duas alturas, verificar onde uma altura se encontra nas referências de percentis do CDC/OMS e estimar a altura adulta de uma criança a partir da altura dos pais — tudo grátis, sem criar conta.',
      ],
      callout: {
        type: 'info',
        text: 'Todos os resultados são estimativas educacionais baseadas em dados públicos de crescimento — nunca orientação médica.',
      },
    },
    {
      id: 'measuring-accurately',
      heading: '2. Como Medir a Altura com Precisão',
      paragraphs: [
        'Todo bom cálculo começa com uma boa medição. Uma medição descuidada de 2 cm pode deslocar um percentil inteiro, por isso vale a pena fazer do jeito certo.',
      ],
      steps: [
        { number: 1, title: 'Fique descalço', description: 'Retire os sapatos e meias grossas. Meça sempre sem calçados para manter a consistência.' },
        { number: 2, title: 'Encoste-se na parede', description: 'Fique com as costas retas contra uma parede lisa, calcanhares juntos, olhando para frente.' },
        { number: 3, title: 'Marque o topo da cabeça', description: 'Use um objeto plano (como um livro) encostado na parede, formando um ângulo reto com o topo da cabeça.' },
        { number: 4, title: 'Meça até 0,1 cm', description: 'Meça do chão até a marca com precisão de 0,1 cm ou ⅛ de polegada.' },
        { number: 5, title: 'Bebês: meça deitado', description: 'Para bebês e crianças pequenas, meça o comprimento deitado, da cabeça aos calcanhares estendidos.' },
      ],
      callout: {
        type: 'tip',
        text: 'Meça sempre no mesmo horário do dia — a altura pode variar até 1 cm entre a manhã e a noite.',
      },
    },
    {
      id: 'unit-conversion',
      heading: '3. Conversão de Unidades: cm ↔ Pés e Polegadas',
      paragraphs: [
        'A calculadora alterna instantaneamente entre o sistema métrico (cm) e o imperial (pés/pol). A conversão usa o padrão internacional exato: 1 polegada = 2,54 cm e 1 pé = 30,48 cm — sem arredondamentos aproximados.',
        'Por exemplo, 5 pés 10 pol equivalem a precisamente 177,8 cm, e 170 cm correspondem a 5 pés 6,9 pol. Você pode trocar de unidade a qualquer momento sem perder os dados inseridos.',
      ],
    },
    {
      id: 'understanding-percentiles',
      heading: '4. Entendendo os Percentis de Altura',
      paragraphs: [
        'Um percentil compara a altura de uma criança com grandes conjuntos de dados populacionais de referência para a mesma idade e sexo. Uma criança no percentil 75 é mais alta do que cerca de 75 em cada 100 crianças da mesma idade e sexo — não é uma nota, é uma posição na distribuição.',
        'Nossas referências usam as curvas de crescimento do CDC (2 a 20 anos) e os Padrões de Crescimento Infantil da OMS (do nascimento aos 5 anos) — as mesmas referências que os pediatras utilizam em consultório.',
      ],
      callout: {
        type: 'note',
        text: 'Estar no percentil 25 ou 90 não é bom nem ruim por si só. O que importa é seguir a própria curva de crescimento ao longo do tempo.',
      },
    },
    {
      id: 'child-height-predictor',
      heading: '5. Preditor de Altura Adulta da Criança',
      paragraphs: [
        'O preditor usa o método da altura média parental, a fórmula padrão de referência dos pediatras: para meninos, (altura do pai + altura da mãe + 13 cm) ÷ 2; para meninas, (altura do pai + altura da mãe − 13 cm) ÷ 2.',
        'O resultado é sempre apresentado com uma faixa típica honesta de cerca de ±8–10 cm. É uma estimativa, não uma garantia: genética, nutrição, sono e saúde influenciam a altura final, e nenhum preditor é 100% preciso.',
      ],
    },
    {
      id: 'growth-charts',
      heading: '6. Curvas de Crescimento: CDC e OMS',
      paragraphs: [
        'As curvas de crescimento mostram como a altura evolui com a idade. As curvas do CDC cobrem dos 2 aos 20 anos com base em pesquisas nacionais de saúde dos EUA; os padrões da OMS cobrem do nascimento aos 5 anos, construídos a partir de um estudo multinacional com crianças saudáveis.',
        'Acompanhar a altura do seu filho na curva ao longo do tempo é mais informativo do que uma única medição: uma curva estável, mesmo em um percentil baixo, geralmente indica crescimento saudável.',
      ],
    },
    {
      id: 'baby-growth',
      heading: '7. Acompanhando o Crescimento do Bebê',
      paragraphs: [
        'Nos primeiros anos, o crescimento é rápido e cada centímetro conta. Meça o comprimento do bebê deitado, do topo da cabeça aos calcanhares, com as pernas estendidas suavemente.',
        'Use os padrões da OMS (0 a 5 anos) como referência e anote cada medição com a data. Medições mensais nos primeiros 2 anos criam um histórico valioso para as consultas pediátricas.',
      ],
    },
    {
      id: 'reading-your-results',
      heading: '8. Como Ler os Resultados',
      paragraphs: [
        'Cada resultado da calculadora vem com contexto. A conversão de unidades mostra o valor exato nos dois sistemas. O percentil mostra a posição da criança na curva de crescimento para a idade e o sexo informados.',
        'A previsão de altura adulta inclui a faixa típica esperada (±8–10 cm) — leia sempre o intervalo, não apenas o número central. E a diferença entre duas alturas é apresentada em cm e em pés/polegadas.',
      ],
    },
    {
      id: 'practical-tips',
      heading: '9. Dicas Práticas',
      paragraphs: [
        'Pequenos hábitos tornam suas medições e cálculos muito mais confiáveis:',
      ],
      bulletPoints: [
        'Meça sempre no mesmo horário e nas mesmas condições.',
        'Anote a data de cada medição para montar o histórico de crescimento.',
        'Use a mesma fita métrica ou estadiômetro para todas as medições.',
        'Para crianças, compare sempre com a curva do sexo e da idade corretos.',
        'Não compare percentis do CDC com os da OMS — são referências diferentes.',
        'Lembre-se: resultados são estimativas educacionais, não diagnóstico médico.',
      ],
    },
    {
      id: 'who-benefits',
      heading: '10. Quem se Beneficia do Height Calculator?',
      paragraphs: [
        'Pais acompanhando o crescimento dos filhos, futuros pais curiosos sobre a altura dos filhos, adultos convertendo medidas para documentos ou roupas, e qualquer pessoa que queira entender o que os números de altura realmente significam.',
        'O acesso é gratuito e ilimitado — sem cadastro, sem downloads, em qualquer dispositivo.',
      ],
    },
    {
      id: 'faq-troubleshoot',
      heading: '11. Perguntas Frequentes e Solução de Problemas',
      paragraphs: [
        'Os dados inseridos sumiram ao trocar de unidade? Não se preocupe: a calculadora preserva os valores ao alternar entre cm e pés/pol. Se um percentil parecer inesperado, confira se a idade e o sexo estão corretos — um ano de diferença muda bastante a curva.',
        'A previsão de altura mostra um intervalo amplo? Isso é intencional: a faixa de ±8–10 cm reflete a variação real entre crianças. Nenhum método sério promete precisão de um centímetro.',
      ],
    },
    {
      id: 'final-cta',
      heading: '12. Comece Seu Primeiro Cálculo Hoje',
      paragraphs: [
        'Pronto para calcular? A calculadora de altura é rápida, gratuita e ilimitada. Insira uma altura, converta unidades, verifique um percentil ou preveja a altura adulta de uma criança — e entenda de verdade o que os números significam.',
      ],
    },
  ],
  faqTransition: {
    badge: 'Tem Perguntas?',
    heading: 'Confira Nossas Perguntas Frequentes',
    text: 'Saiba mais sobre os percentis, as curvas de crescimento, a conversão de unidades e a previsão de altura do Height Calculator.',
    ctaText: 'Ver Todas as Perguntas Frequentes',
    ctaHref: '/pt/#faq',
  },
  finalCta: {
    heading: 'Pronto para Calcular Sua Altura?',
    description: 'Abra o centro do Height Calculator agora — converta unidades, compare alturas, verifique percentis e preveja a altura adulta de crianças, tudo em uma calculadora gratuita.',
    buttonText: 'Abrir o Height Calculator',
    buttonHref: '/height-calculator/',
    secondaryText: 'Ver Curvas de Crescimento',
    secondaryHref: '/height-calculator/boys-chart/',
  },
};
