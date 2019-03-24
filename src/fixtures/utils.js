import faker from 'faker';

export const generateTimestamp = () => ({
  created_at: faker.date.recent()
});

export const generateLikes = () => ({
  likes: faker.random.number(7),
  liked: faker.random.boolean()
});

export const generateUser = () => ({
  name: faker.name.firstName(),
  avatar: faker.image.avatar()
});
