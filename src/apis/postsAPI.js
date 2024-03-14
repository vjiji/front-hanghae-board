const { baseURL } = require('./instance');

const postsAPI = {
  createPost: (post) =>
    baseURL.post('/api/posts', post),
};

export default postsAPI;
