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
  modifyComment: ({ comment, id, commentId }) =>
    baseURL.put(
      `/api/posts/${id}/comments/${commentId}`,
      { comment: comment },
    ),
};

export default commentsAPI;
