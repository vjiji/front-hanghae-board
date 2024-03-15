const { baseURL } = require('./instance');

const commentsAPI = {
  createComment: (comment, postId) =>
    baseURL.post(
      `/api/posts/${postId}/comments`,
      comment,
    ),
  deleteComment: (comment, postId, commentId) =>
    baseURL.delete(
      `/api/posts/${postId}/comments/${commentId}`, comment
    ),
};

export default commentsAPI;
