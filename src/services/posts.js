import request from 'utils/request';
import qs from 'querystring';

export const queryAll = (id, token) =>
  request.get('/posts/get', {
    params: { id, token }
  });

export const create = (id, token, tag, body) =>
  request.post(
    '/posts/create',
    qs.stringify({ id, token, ptype: tag, body, latitude: 3, longitude: 3 })
  );

export const like = (id, token, postId) =>
  request.post('/like', qs.stringify({ id, token, object_id: postId, type: 'post' }));

export const unlike = (id, token, postId) =>
  request.post('/unlike', qs.stringify({ id, token, object_id: postId, type: 'post' }));
