export type Quiz = {
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
    question: 'Какие минеральные фильтры используются в кремах от загара?',
    answer: 'zinc oxide и titanium dioxide',
    a: 'zinc oxide и titanium dioxide',
    b: 'oxybenzone, avobenzone, octisalate, octocrylene, homosalate, octinoxate',
    c: 'zinc oxide',
    d: 'octisalate, octocrylene, homosalate',
  },
  {
    question:
      'Название какой известной косметической компании произошло от сочетания женского имени и слова «вазелин»?',
    answer: 'Maybelline',
    a: 'Maybelline',
    b: 'Oriflame',
    c: 'Mary Kay',
    d: 'Nyx',
  },
  {
    question: 'Где впервые использовали помаду?',
    answer: 'В Месопотамии',
    a: 'В дрвенем Китае',
    b: 'В Месопотамии',
    c: `В древней Индии`,
    d: 'В древнем египте',
  },
  {
    question: 'В какой стране был изобретен лак для ногтей?',
    answer: 'В Китае',
    a: 'В Италии',
    b: 'В Японии',
    c: 'Во Франции',
    d: 'В Китае',
  },
  {
    question:
      'Какая известная косметическая компания была основана французским химиком Эженом Шуллером в 1909 году?',
    answer: `L'Oreal`,
    a: 'Maybelline',
    b: 'Avon',
    c: 'Amway',
    d: `L'Oreal`,
  },
  {
    question: 'В какой стране был изобретен лак для ногтей?',
    img: 'https://sun9-79.userapi.com/impg/VccuiwkTy67XI-PKsVFRRj0v-FqX4ypPaHMHtQ/z31Ilb89d8c.jpg?size=714x745&quality=95&sign=8480f5fc0223c08a91c9d5a8ab6645c7&type=album',
    answer: 'В Китае',
    a: 'В Италии',
    b: 'В Японии',
    c: 'Во Франции',
    d: 'В Китае',
  },
];
