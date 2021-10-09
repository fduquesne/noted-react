import { mockedMarkdown } from './mocked-md';

export default [
  {
    id: '1633721804000',
    title: 'Birthday gifts',
    updatedAt: '1633721804000',
    content: mockedMarkdown,
    tags: ['birthday'],
    author: { name: 'Florian Duquesne', image: 'profile1.jpg' },
    isTrashed: false,
  },
  {
    id: '1633469297000',
    title: 'Shopping list',
    updatedAt: '1633469297000',
    content: mockedMarkdown,
    tags: ['shopping', 'list'],
    author: { name: 'Florian Duquesne', image: 'profile1.jpg' },
    isTrashed: false,
  },
  {
    id: '1632117004000',
    title: 'Daily to-do list',
    updatedAt: '1632117004000',
    content: mockedMarkdown,
    tags: ['to-do', 'list'],
    author: { name: 'Florian Duquesne', image: 'profile1.jpg' },
    isTrashed: false,
  },
];
