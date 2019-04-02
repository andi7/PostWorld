import faker from 'faker';

import { generateUser, generateLikes, generateTimestamp } from './utils';

const distances = ['close', 'here', 'far'];

const generateComments = () =>
  new Array(faker.random.number(30)).fill(0).map((a, i) => ({
    id: i,
    user: generateUser(),
    text: faker.lorem.sentences(),
    ...generateLikes(),
    ...generateTimestamp()
  }));

export default (onlyImage = false) =>
  new Array(20).fill(0).map((el, index) => {
    const hasImage = onlyImage || Math.random() > 0.7;
    const hasText = !onlyImage && (hasImage ? Math.random() > 0.3 : true);

    return {
      id: index,
      user: generateUser(),
      content: {
        image: hasImage ? faker.image.food() : '',
        text: hasText ? faker.lorem.sentences() : ''
      },
      distance: distances[faker.random.number(2)],
      comments: faker.random.number(20),
      commentsList: generateComments(),
      ...generateLikes(),
      ...generateTimestamp()
    };
  });
