import { mockedMarkdown } from './mocked-md';

export default [
  {
    title: 'Birthday gifts',
    updatedAt: '1633721804000',
    content: mockedMarkdown,
    tags: ['birthday'],
    author: { name: 'Florian Duquesne', image: 'profile1.jpg' },
  },
  {
    title: 'Shopping list',
    updatedAt: '1633469297000',
    content:
      'Amet luctus venenatis lectus magna fringilla urna porttitor. Elit duis tristique sollicitudin nibh sit amet. Volutpat ac tincidunt vitae semper quis.',
    tags: ['shopping', 'list'],
  },
  {
    title: 'Daily to-do list',
    updatedAt: '1632117004000',
    content:
      'Nec feugiat in fermentum posuere urna nec tincidunt. At quis risus sed vulputate odio ut. Leo in vitae turpis massa sed elementum tempus egestas. Cursus risus at ultrices mi tempus.',
    tags: ['to-do', 'list'],
  },
];
