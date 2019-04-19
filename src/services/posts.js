import request from 'utils/request';
import qs from 'querystring';

export const queryAll = (id, token, postType, sortType, page = 0) =>
  request.get('/posts/get', {
    params: {
      id,
      token,
      filter: postType,
      sort: sortType,
      page
    }
  });

export const queryMap = (id, token, x, y) =>
  request.post(
    '/posts/map',
    qs.stringify({
      id,
      token,
      x,
      y
    })
  );

export const create = (id, token, tag, body, latitude, longitude) =>
  request.post('/posts/create', qs.stringify({ id, token, ptype: tag, body, latitude, longitude }));

export const like = (id, token, postId) =>
  request.post('/like', qs.stringify({ id, token, object_id: postId, type: 'post' }));

export const unlike = (id, token, postId) =>
  request.post('/unlike', qs.stringify({ id, token, object_id: postId, type: 'post' }));
