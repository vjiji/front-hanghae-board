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
  getPostsByTab: (tab, category) =>
    baseURL.get(
      category
        ? `/api/posts/category/${category}/${tab}`
        : `/api/posts/${tab}`,
    ),
  getPostsSearch: (searchTerm) =>
    baseURL.get(
      `/api/posts/search?title=${searchTerm}`,
    ),
};

export default postsAPI;
