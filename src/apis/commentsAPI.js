const { baseURL } = require('./instance');

const commentsAPI = {
  createComment: (comment, postId) =>
    baseURL.post(
      `/api/posts/${postId}/comments`,
      comment,
    ),
  deleteComment: (postId, commentId) =>
    baseURL.delete(
      `/api/posts/${postId}/comments/${commentId}`,
    ),
  modifyComment: (postId, commentId) =>
    baseURL.put(
      `/api/posts/${postId}/comments/${commentId}`,
    ),
};

export default commentsAPI;
