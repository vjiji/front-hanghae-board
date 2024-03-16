const { baseURL } = require('./instance');

const postsAPI = {
  createPost: (post) =>
    baseURL.post('/api/posts', post),
  getPostDetail: (postId) =>
    baseURL.get(`/api/posts/${postId}`),
  updatePost: (id, post) =>
    baseURL.post(`/api/posts/${id}`, post),
  deletePost: (id) =>
    baseURL.delete(`/api/posts/${id}`),
  getPostsByTab: (tab, category) =>
    baseURL.get(
      category
        ? `/api/posts/category/${category}/${tab}`
        : `/api/posts/${tab}`,
    ),
};

export default postsAPI;
