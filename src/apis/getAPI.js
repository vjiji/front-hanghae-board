const { baseURL } = require('./instance');

const getAPI = {
  getPost: (post) =>
    baseURL.post('/posts', post),
};

export default getAPI;
