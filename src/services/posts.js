import request from 'utils/request';

export const queryAll = (id, token) => request.get('/posts/get', { params: { id, token } });
