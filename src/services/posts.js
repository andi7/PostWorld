import request from 'utils/request';
import qs from 'querystring';

export const queryAll = (id, token) =>
  request.get('/posts/get', {
    params: { id, token }
  });

export const create = (id, token, tag, body) =>
  request.get(
    '/posts/create',
    qs.stringify({ id, token, ptype: tag, body, latitude: 3, longitude: 3 })
  );
