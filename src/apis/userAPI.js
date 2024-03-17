const { baseURL } = require('./instance');

const userAPI = {
  signup: (post) =>
    baseURL.post('/api/user/signup', post),
  login: (post) =>
    baseURL.post('/api/user/login', post),
  getUserInfo: () => baseURL.get('/api/auth'),
};

export default userAPI;
