import faker from 'faker';

import { generateLikes, generateUser } from './utils';

const generateGoing = () => ({
  going: faker.random.number(60),
  goingKnown: new Array(faker.random.number(3)).fill(0).map(() => generateUser()),
  isGoing: faker.random.boolean()
});

export default new Array(20).fill(0).map((el, i) => ({
  id: i,
  name: faker.lorem.words(),
  time: faker.date.future(),
  location: faker.address.streetName(),
  image: faker.image.business(),
  ...generateGoing(),
  ...generateLikes()
}));
