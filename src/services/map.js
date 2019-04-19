import request from 'utils/request';
import qs from 'querystring';

export const queryPosts = (id, token, x, y) =>
  request
    .post(
      '/posts/map',
      qs.stringify({
        id,
        token,
        x,
        y
      })
    )
    .catch((...p) => console.log(p));
