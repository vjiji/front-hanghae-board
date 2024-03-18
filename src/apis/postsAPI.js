const { baseURL } = require('./instance');

const postsAPI = {
  createPost: (post) =>
    baseURL.post('/api/posts', post),
  getPostAll: (post, category) =>
    baseURL.get(
      category
        ? `/api/posts/category/${category}`
        : '/api/posts',
      post,
    ),
  getPostDetail: (postId) =>
    baseURL.get(`/api/posts/${postId}`),
  updatePost: (id, post) =>
    baseURL.post(`/api/posts/${id}`, post),
  deletePost: (id) =>
    baseURL.delete(`/api/posts/${id}`),
  getPostsByTab: (tab, category, pageParam) =>
    baseURL.get(
      category
        ? `/api/posts/category/${category}/type/${tab}?num=${pageParam}`
        : `/api/posts/type/${tab}?num=${pageParam}`,
    ),
  getPostsSearch: (searchTerm) =>
    baseURL.get(
      `/api/posts/search?title=${searchTerm}`,
    ),
};

export default postsAPI;
