import qs from 'querystring';

import request from 'utils/request';

export const signUp = (email, password, username, avatar) =>
  request.post(
    '/register',
    qs.stringify({
      email,
      password,
      username
    })
  );

export const signIn = (email, password) =>
  request
    .post(
      '/login',
      qs.stringify({
        username: email,
        password
      })
    )
    .catch((...p) => console.log(p));
