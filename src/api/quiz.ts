export type Quiz = {
  id?: number
  question: string;
  answer: string;
  description?: string;
  img?: string;
  a: string;
  b: string;
  c: string;
  d: string;
};

export const Quastions: Quiz[] = [
  {
    id: 1,
    question: 'Какие минеральные фильтры используются в кремах от загара?',
    answer: 'zinc oxide и titanium dioxide',
    a: 'zinc oxide и titanium dioxide',
    b: 'oxybenzone, avobenzone, octisalate, octocrylene, homosalate, octinoxate',
    c: 'zinc oxide',
    d: 'octisalate, octocrylene, homosalate',
  },
  {
    id: 2,
    question:
      'Название какой известной косметической компании произошло от сочетания женского имени и слова «вазелин»?',
    answer: 'Maybelline',
    a: 'Maybelline',
    b: 'Oriflame',
    c: 'Mary Kay',
    d: 'Nyx',
  },
  {
    id: 3,
    question: 'Где впервые использовали помаду?',
    answer: 'В Месопотамии',
    a: 'В дрвенем Китае',
    b: 'В Месопотамии',
    c: `В древней Индии`,
    d: 'В древнем египте',
  },
  {
    id: 4,
    question: 'В какой стране был изобретен лак для ногтей?',
    answer: 'В Китае',
    a: 'В Италии',
    b: 'В Японии',
    c: 'Во Франции',
    d: 'В Китае',
  },
  {
    id: 5, 
    question:
      'Какая известная косметическая компания была основана французским химиком Эженом Шуллером в 1909 году?',
    answer: `L'Oreal`,
    a: 'Maybelline',
    b: 'Avon',
    c: 'Amway',
    d: `L'Oreal`,
  },
];
