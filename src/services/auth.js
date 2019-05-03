import qs from 'querystring';

import request from 'utils/request';

export const signUp = (email, password, username, avatar) =>
  request.post(
    '/register',
    qs.stringify({
      email,
      password,
      username,
      image: avatar
    })
  );

export const signIn = (email, password) =>
  request.post(
    '/login',
    qs.stringify({
      username: email,
      password
    })
  );

export const update = (id, token, avatar) =>
  request
    .post(
      '/users/update',
      qs.stringify({
        id,
        token,
        image: avatar
      })
    )
    .catch((...p) => console.log(p));
