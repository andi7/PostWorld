import request from 'utils/request';
import qs from 'querystring';

export const queryAll = (postId, id, token) =>
  request.post(
    '/comments/get',
    qs.stringify({
      post_id: postId,
      id,
      token
    })
  );

export const create = (comment, postId, id, token) =>
  request.post(
    '/comments/create',
    qs.stringify({
      body: comment,
      post_id: postId,
      id,
      token
    })
  );
