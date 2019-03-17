import faker from 'faker';

const distances = ['close', 'here', 'far'];

export default new Array(20).fill(0).map((el, index) => {
  const hasImage = Math.random() > 0.7;
  const hasText = hasImage ? Math.random() > 0.3 : true;

  return {
    id: index,
    poster: {
      name: faker.name.firstName(),
      avatar: faker.image.avatar()
    },
    content: {
      image: hasImage ? faker.image.food() : '',
      text: hasText ? faker.lorem.sentences() : ''
    },
    likes: faker.random.number(7),
    liked: faker.random.boolean(),
    comments: faker.random.number(30),
    created_at: faker.date.recent(),
    distance: distances[faker.random.number(2)]
  };
});
