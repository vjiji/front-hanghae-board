const { baseURL } = require('./instance');

const postsAPI = {
  createPost: (post) =>
    baseURL.post('/api/posts', post),
  getPostDetail: (postId) =>
    baseURL.get(`/api/posts/${postId}`),
  updatePost: (id, post) =>
    baseURL.post(`/api/posts/${id}`, post),
  // axios put 메서드 안될 경우 fetch
  // fetch(
  //   `${process.env.REACT_APP_SERVER_BASE_URL}/api/posts/${id}`,
  //   {
  //     method: 'PUT',
  //     body: post,
  //   },
  // ),
};

export default postsAPI;
