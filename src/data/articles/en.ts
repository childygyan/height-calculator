import type { ArticleData, ArticleUiStrings, LocaleArticleSet } from './types';

export const enArticles: ArticleData[] = [
  {
    id: 'avg-height-by-country',
    slug: 'average-height-by-country',
    title: 'Average Height by Country: Complete Table 2026',
    subtitle:
      'Discover the average height of men and women in 15 countries — including Brazil — and understand why it varies so much around the world.',
    metaDescription:
      'Average height by country table 2026: Brazil, Netherlands, USA, Portugal and more. See where Brazil ranks and what explains the differences.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 min read',
    badge: 'Reference guide',
    tocTitle: 'In this article',
    intro: {
      lead:
        'The average height in Brazil is approximately 175.7 cm for men and 162.9 cm for women. The tallest country in the world is the Netherlands, at 183.8 cm (men) and 170.4 cm (women).',
      paragraphs: [
        'Average height varies dramatically between countries — more than 20 cm separate the tallest populations from the shortest. Genetics, childhood nutrition, public health, and even socioeconomic level shape these numbers over generations.',
        'Below you will find a table with the most cited values from published studies, plus the context that numbers alone do not show: why Brazil sits where it does, and what it really means to be "above" or "below" average.',
      ],
    },
    sections: [
      {
        id: 'tabela',
        heading: 'Table: average height by country',
        paragraphs: [
          'The values below are approximate adult averages compiled from published population studies. Small variations between sources are normal — average height changes with the study year, the age group measured, and the methodology.',
        ],
        table: {
          headers: ['Country', 'Men (cm)', 'Women (cm)'],
          rows: [
            ['Netherlands', '183,8', '170,4'],
            ['Montenegro', '183,3', '169,6'],
            ['Denmark', '182,6', '169,1'],
            ['Germany', '180,3', '166,6'],
            ['France', '178,6', '164,5'],
            ['United Kingdom', '177,5', '164,4'],
            ['USA', '177,1', '163,5'],
            ['Italy', '176,5', '165,0'],
            ['Spain', '176,1', '163,0'],
            ['Brazil', '175,7', '162,9'],
            ['China', '175,7', '163,5'],
            ['Argentina', '174,5', '161,0'],
            ['Portugal', '173,9', '163,0'],
            ['South Korea', '174,9', '162,3'],
            ['Japan', '172,1', '158,5'],
            ['Mexico', '169,5', '160,8'],
            ['India', '166,3', '155,5'],
          ],
          footnote:
            'Approximate values. Sources vary in year, age group, and measurement method — use as a reference, not as an exact measurement.',
        },
      },
      {
        id: 'brasil-contexto',
        heading: 'Where Brazil stands',
        paragraphs: [
          'Brazil sits right in the middle of the world ranking — above the global average, but below the countries of northern Europe. Within Latin America, Brazil is among the tallest, ahead of Mexico, Peru, and Bolivia.',
          'One important detail: the Brazilian average height has been rising for decades, following improvements in nutrition and public health. Each new generation measures, on average, a little more than the previous one — a trend observed in almost every developing country.',
        ],
      },
      {
        id: 'por-que-varia',
        heading: 'Why does average height vary so much?',
        paragraphs: [
          'Three factors explain almost all the difference between countries:',
        ],
        bulletPoints: [
          'Genetics (about 80% of individual variation): populations with a history of selection for greater stature — like the Dutch and Montenegrins — keep that trait for generations.',
          'Childhood nutrition: adequate protein, calcium, and calories in the first years of life are decisive. Countries that eliminated child malnutrition saw average height rise within a generation.',
          'Public health: sanitation, vaccination, and access to pediatricians reduce the diseases that limit growth.',
        ],
        callout: {
          type: 'tip',
          text: 'Height is mostly set by the end of adolescence. Once the growth plates close (around ages 18–20), no exercise or supplement has been proven to increase stature.',
        },
      },
      {
        id: 'compare-se',
        heading: 'How to compare yourself to the average',
        paragraphs: [
          'Knowing your country’s average is interesting — but what really matters for health is how you compare to your own growth curve over time, not to a single number.',
          'Want to see where you fit in? Use our free calculator to convert and compare your height:',
        ],
        link: {
          text: '→ Open the Height Calculator',
          href: '/height-calculator/',
        },
      },
    ],
    faqs: [
      {
        question: 'Which country has the highest average height in the world?',
        answer:
          'The Netherlands leads: about 183.8 cm for men and 170.4 cm for women, according to the most cited population studies.',
      },
      {
        question: 'Is the average height in Brazil increasing?',
        answer:
          'Yes. As in most developing countries, improvements in nutrition and public health have been raising the Brazilian average with each generation.',
      },
      {
        question: 'Is 175 cm considered tall in Brazil?',
        answer:
          'For men, 175 cm is practically the national average (175.7 cm). For women, it would be well above the female average (162.9 cm) — sex context matters as much as country context.',
      },
      {
        question: 'Why are the Dutch so tall?',
        answer:
          'A combination of genetics, excellent childhood nutrition, and one of the best public health systems in the world, maintained for generations. There is no single "secret".',
      },
    ],
    relatedLinks: [
      { text: 'Height Calculator', href: '/height-calculator/' },
      { text: 'Height Comparison', href: '/compare/' },
      { text: 'How to measure your height correctly', href: '/articles/how-to-measure-your-height-correctly/' },
    ],
  },
  {
    id: 'measure-height-correctly',
    slug: 'how-to-measure-your-height-correctly',
    title: 'How to Measure Your Height Correctly at Home',
    subtitle:
      'A simple step-by-step to measure your height accurately using only a wall, a book, and a tape measure — without common mistakes.',
    metaDescription:
      'Learn how to measure your height correctly at home: step-by-step, common mistakes that steal centimeters, and the best time of day to measure yourself.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 min read',
    badge: 'Step by step',
    tocTitle: 'In this article',
    intro: {
      lead:
        'To measure your height correctly: stand barefoot against a flat wall, heels together, look straight ahead, mark the top of your head with a book, and measure from the floor to the mark. Measure in the morning for the tallest, most consistent value.',
      paragraphs: [
        'It sounds simple, but most people measure wrong — and the error reaches 2 or 3 centimeters. Slouched posture, a soft rug under your feet, and measuring at night are the most common culprits.',
        'Follow the step-by-step below and your measurement will match a doctor’s office reading.',
      ],
    },
    sections: [
      {
        id: 'passo-a-passo',
        heading: 'Step by step',
        paragraphs: [],
        steps: [
          {
            number: 1,
            title: 'Pick the right spot',
            description:
              'A flat wall and a level, hard floor (tile, wood, or concrete). Avoid rugs — they compress and steal up to 1 cm from the measurement.',
          },
          {
            number: 2,
            title: 'Remove shoes and accessories',
            description:
              'Barefoot, no thick socks. Remove clips, caps, or high buns that change the top of your head.',
          },
          {
            number: 3,
            title: 'Position your body',
            description:
              'Heels together against the wall, back and shoulders straight but relaxed, arms at your sides. Look straight ahead, chin parallel to the floor.',
          },
          {
            number: 4,
            title: 'Mark the top of your head',
            description:
              'Ask someone for help or use a hardcover book: rest it on the top of your head at a 90° angle to the wall and make a light pencil mark.',
          },
          {
            number: 5,
            title: 'Measure from the floor to the mark',
            description:
              'Use a tape measure, keeping it taut and vertical. Record in centimeters with one decimal place.',
          },
        ],
      },
      {
        id: 'melhor-horario',
        heading: 'The best time to measure yourself',
        paragraphs: [
          'Always measure in the morning, right after waking up. During the day, gravity compresses the discs in your spine and you "shrink" 1 to 2 cm by nightfall. To track your height over time, measure at the same time — preferably in the morning.',
        ],
        callout: {
          type: 'tip',
          text: 'Comparing with old measurements? Check whether they were taken at the same time of day. A 1.5 cm difference between morning and evening is completely normal.',
        },
      },
      {
        id: 'erros-comuns',
        heading: 'Common mistakes that change the result',
        paragraphs: [],
        bulletPoints: [
          'Measuring on a rug or carpet (compresses 0.5–1 cm)',
          'Hunching your shoulders or tilting your head down',
          'Wearing shoes or thick socks',
          'Marking the forehead instead of the highest point of the head',
          'Loose or tilted tape measure',
          'Measuring at night and comparing with a morning measurement',
        ],
      },
      {
        id: 'criancas',
        heading: 'Measuring children',
        paragraphs: [
          'For children under 2, the correct measurement is taken lying down (length), not standing. From age 2 onward, use the same step-by-step above — and record the date of each measurement to track the growth curve.',
          'If the child’s curve drops in percentile consistently, it is worth talking to the pediatrician:',
        ],
        link: {
          text: '→ Understanding height percentiles',
          href: '/articles/height-percentile-explained/',
        },
      },
    ],
    faqs: [
      {
        question: 'Can I measure myself alone?',
        answer:
          'Yes, using a book against the wall as a marker. Accuracy is slightly lower than with help, but following the step-by-step keeps the error under 0.5 cm.',
      },
      {
        question: 'Why does my height change during the day?',
        answer:
          'The intervertebral discs compress under gravity throughout the day. It is normal to "lose" 1–2 cm between morning and night — it is not a sign of a problem.',
      },
      {
        question: 'Do phone apps measure height accurately?',
        answer:
          'Apps with LiDAR (recent iPhone Pro models) get close, but wall + tape measure remains the most reliable and cheapest method.',
      },
    ],
    relatedLinks: [
      { text: 'Height Calculator', href: '/height-calculator/' },
      { text: 'Average height by country', href: '/articles/average-height-by-country/' },
    ],
  },
  {
    id: 'predict-child-height',
    slug: 'predict-your-childs-adult-height',
    title: 'How to Predict Your Child’s Adult Height',
    subtitle:
      'The formula pediatricians use to estimate children’s future height — with a worked example and the limits you need to know.',
    metaDescription:
      'Adult height prediction: the mid-parental height formula used by pediatricians, a worked step-by-step example, and a free calculator.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '5 min read',
    badge: 'Guide for parents',
    tocTitle: 'In this article',
    intro: {
      lead:
        'The most widely used way for pediatricians to estimate a child’s adult height is the mid-parental height formula: for boys, (father’s height + mother’s height + 13) ÷ 2; for girls, (father’s height + mother’s height − 13) ÷ 2. The result has a margin of about ±8.5 cm.',
      paragraphs: [
        'This estimate works because genetics accounts for about 80% of final height. But it is a statistical starting point — not a prophecy. Nutrition, health, and the individual pace of puberty move the final result within that margin.',
        'Below: the formula with an example, when it works best, and when to doubt the number.',
      ],
    },
    sections: [
      {
        id: 'formula',
        heading: 'The formula, with an example',
        paragraphs: [
          'Add the parents’ heights in centimeters, adjust for the child’s sex, and divide by 2:',
        ],
        bulletPoints: [
          'Boys: (father + mother + 13) ÷ 2',
          'Girls: (father + mother − 13) ÷ 2',
        ],
        callout: {
          type: 'tip',
          text: 'Example: father 178 cm and mother 165 cm. Boy: (178 + 165 + 13) ÷ 2 = 178 cm. Girl: (178 + 165 − 13) ÷ 2 = 165 cm. Allow ±8.5 cm of margin — so the boy would end up between 169.5 cm and 186.5 cm.',
        },
      },
      {
        id: 'calcule-agora',
        heading: 'Calculate in seconds',
        paragraphs: [
          'Doing the math by hand is simple, but our calculator applies the formula automatically and shows the full estimate range:',
        ],
        link: {
          text: '→ Predict my child’s height (free)',
          href: '/height-calculator/child-height-predictor/',
        },
      },
      {
        id: 'limites',
        heading: 'Limits you need to know',
        paragraphs: [
          'The formula assumes average conditions. It loses accuracy when:',
        ],
        bulletPoints: [
          'There is a large height difference between the parents (the real margin grows)',
          'The child experienced malnutrition, chronic illness, or very early/late puberty',
          'The parents are not the biological parents (the genetics considered are biological)',
          'The child is still a baby — the prediction gets more reliable from ages 2–3 onward',
        ],
        callout: {
          type: 'note',
          text: 'No at-home method replaces the growth assessment done by a pediatrician, who uses percentile curves and, when needed, bone age (a hand X-ray).',
        },
      },
      {
        id: 'o-que-fazer',
        heading: 'What to do with the number',
        paragraphs: [
          'Use the prediction as a calm reference — for example, to buy clothes ahead of time or satisfy curiosity. Don’t use it to set rigid expectations for the child.',
          'The real warning sign is not the prediction itself, but the growth curve: if the child has been dropping in percentile consistently, that does deserve a conversation with the pediatrician.',
        ],
        link: {
          text: '→ Understanding height percentiles',
          href: '/articles/height-percentile-explained/',
        },
      },
    ],
    faqs: [
      {
        question: 'Is the prediction reliable?',
        answer:
          'It is the best simple estimate available and is used by pediatricians worldwide — but with a ±8.5 cm margin. For an accurate assessment, the pediatrician combines the formula with the growth curve and bone age.',
      },
      {
        question: 'Do exercises or supplements change the predicted height?',
        answer:
          'There is no evidence that exercises, stretching, or supplements increase height beyond genetic potential. Good nutrition and adequate sleep in childhood ensure the child reaches that potential — not exceeds it.',
      },
      {
        question: 'At what age does the prediction get more accurate?',
        answer:
          'From ages 2–3 onward, the child’s growth curve already gives solid clues. During puberty, the prediction combined with bone age is the most accurate.',
      },
    ],
    medicalDisclaimer:
      'Educational content, not medical advice. Height estimates do not replace a pediatrician’s assessment. If you have concerns about your child’s growth, consult a doctor.',
    relatedLinks: [
      { text: 'Child height predictor', href: '/height-calculator/child-height-predictor/' },
      { text: 'Height percentile explained', href: '/articles/height-percentile-explained/' },
    ],
  },
  {
    id: 'height-percentile-explained',
    slug: 'height-percentile-explained',
    title: 'Height Percentile: What It Means and When to Worry',
    subtitle:
      'Finally understand what the pediatrician means by "40th percentile" — and what the real warning sign is on the growth curve.',
    metaDescription:
      'Height percentile explained for parents: what it means, how to read the growth curve (CDC/WHO), and when to see the pediatrician.',
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    readTime: '6 min read',
    badge: 'Guide for parents',
    tocTitle: 'In this article',
    intro: {
      lead:
        'Being in the 40th height percentile means 40% of children of the same age and sex are shorter and 60% are taller. It is not a grade — it is a comparison. What matters is not the number alone, but whether the child stays at the same percentile over time.',
      paragraphs: [
        'Many parents panic when they hear "15th percentile" as if it were a failing grade. It isn’t. A child who has always been at the 15th percentile and stays there is growing exactly as they should.',
        'In this guide: how to read the number, what the CDC and WHO curves show, and what the real reason is to see the pediatrician.',
      ],
    },
    sections: [
      {
        id: 'o-que-e',
        heading: 'What the percentile really tells you',
        paragraphs: [
          'The percentile positions the child relative to a healthy reference population of the same age and sex:',
        ],
        bulletPoints: [
          '50th percentile = exactly average (half above, half below)',
          '90th percentile = taller than 90% of children the same age',
          '10th percentile = taller than only 10% (i.e., 90% are taller)',
        ],
        callout: {
          type: 'tip',
          text: 'Think of the percentile as a "line": it tells you where the child stands in line, not whether they are doing well. Doing well = staying in the same spot in line over the years.',
        },
      },
      {
        id: 'trajetoria',
        heading: 'Trajectory matters more than position',
        paragraphs: [
          'Pediatricians look at the shape of the curve, not the dot. Three patterns:',
        ],
        bulletPoints: [
          'Stable curve (always near the same percentile) → normal growth, even at the 5th or 95th percentile',
          'Consistent percentile drop (e.g., 75 → 50 → 30) → deserves medical evaluation',
          'Below the 3rd or above the 97th percentile → the pediatrician will investigate more closely',
        ],
      },
      {
        id: 'curvas',
        heading: 'Where the curves come from: CDC and WHO',
        paragraphs: [
          'The reference curves come from large population studies: CDC 2000 (USA) for older children and WHO standards for children under 5. A reliable percentile calculator should say which database it uses — if it doesn’t, be skeptical.',
          'Our calculator uses the real CDC 2000 and WHO data, with no approximations:',
        ],
        link: {
          text: '→ Calculate height percentile (free)',
          href: '/height-calculator/boys-percentile/',
        },
      },
      {
        id: 'quando-procurar',
        heading: 'When to see the pediatrician',
        paragraphs: [
          'Use the percentile as context, but see the pediatrician if:',
        ],
        bulletPoints: [
          'The percentile drops consistently between checkups',
          'Growth seems to have stopped for many months',
          'The child is below the 3rd or above the 97th percentile without follow-up',
          'You are simply worried — a parent’s intuition counts',
        ],
        callout: {
          type: 'warning',
          text: 'A single measurement says very little. The pattern across several dated measurements is what has medical value.',
        },
      },
    ],
    faqs: [
      {
        question: 'Does a low percentile mean my child will be short?',
        answer:
          'Not necessarily. The percentile describes the current position on the curve, and children at the 10th percentile can perfectly well finish adolescence within the range predicted by family genetics. What matters is the stability of the curve.',
      },
      {
        question: 'What is the difference between the CDC and WHO curves?',
        answer:
          'WHO publishes standards for children under 5 based on breastfed children under ideal conditions; CDC 2000 covers ages 2 to 20 with data from the American population. Good calculators use the right database for each age.',
      },
      {
        question: 'My child dropped from the 60th to the 45th percentile. Is it serious?',
        answer:
          'A small change between two measurements can be normal (measurement error, time of day). The warning sign is a consistent drop across several checkups. When in doubt, show the dated measurements to the pediatrician.',
      },
    ],
    medicalDisclaimer:
      'Educational content, not medical advice. Percentile curves are screening tools — only a healthcare professional can assess your child’s growth. If in doubt, consult a pediatrician.',
    relatedLinks: [
      { text: 'Boys’ height percentile', href: '/height-calculator/boys-percentile/' },
      { text: 'Girls’ height percentile', href: '/height-calculator/girls-percentile/' },
      { text: 'Predict your child’s adult height', href: '/articles/predict-your-childs-adult-height/' },
    ],
  },
];

export const enArticleUi: ArticleUiStrings = {
  hubSegment: 'articles',
  navLabel: 'Articles',
  homeLabel: 'Home',
  hubTitle: 'Articles about Height',
  hubSubtitle: 'Practical guides written to answer exactly what you searched for — no fluff.',
  hubDescription: 'Practical guides about height: average height by country, how to measure your height, predicting your child\'s adult height, and growth percentiles.',
  faqHeading: 'Frequently asked questions',
  readAlsoHeading: 'Read also',
  tocLabel: 'In this article',
};

export const enArticleSet: LocaleArticleSet = {
  ui: enArticleUi,
  articles: enArticles,
};
