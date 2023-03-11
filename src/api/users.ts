export type User = {
  login: string;
  password: string;
  name: string;
};

export const Users: User[] = [
  {
    login: 'a.smirnov',
    password: '123',
    name: 'Артем',
  },
  {
    login: 'a.verenich',
    password: '1234',
    name: 'Алиса',
  },
  {
    login: 'adriana',
    password: '123',
    name: 'Адриана',
  },
  {
    login: '123',
    password: '123',
    name: 'Admin',
  },
];
