const { baseURL } = require('./instance');

const postsAPI = {
  createPost: (post) =>
    baseURL.post('/api/posts', post),
  getPostDetail: (postId) =>
    baseURL.get(`/api/posts/${postId}`),
};

export default postsAPI;
