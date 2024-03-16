const { baseURL } = require('./instance');

const postsAPI = {
  createPost: (post) =>
    baseURL.post('/api/posts', post),
  getPostAll: (post) =>
    baseURL.get('/api/posts', post),
  getPostDetail: (postId) =>
    baseURL.get(`/api/posts/${postId}`),
  updatePost: (id, post) =>
    baseURL.post(`/api/posts/${id}`, post),
  deletePost: (id) =>
    baseURL.delete(`/api/posts/${id}`),
};

export default postsAPI;
