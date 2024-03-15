const { baseURL } = require('./instance');

const userAPI = {
  signup: (post) =>
    baseURL.post('/api/user/signup', post),
  login: (post) =>
    baseURL.post('/api/user/login', post),
  getUserInfo: (token) =>
    baseURL.get('/api/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default userAPI;
