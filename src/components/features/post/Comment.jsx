import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import commentsAPI from 'apis/commentsAPI';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useState } from 'react';
import styled from 'styled-components';
// import { useQuery } from '@tanstack/react-query';

const Comment = ({ commentList, id }) => {
  const [newComment, setNewComment] =
    useState('');
  const handleChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const createComment = async (comment) => {
    const { data } =
      await commentsAPI.createComment(
        comment,
        id,
      );
    return data.data;
  };
  // const deleteComment = async (comment) => {
  //   const { data } =
  //     await commentsAPI.deleteComment(
  //       comment,
  //       id,
  //       commentId,
  //     );
  //   return data.data;
  // };
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries([
        'postDetail',
        id,
      ]);
      setNewComment('');
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleAddComment = () => {
    mutate(newComment, id);
  };

  const handleDelComment = () => {
    alert('d');
  };
  return (
    <>
      <CommentForm onSubmit={handleSubmit}>
        <h3>댓글</h3>
        <CommentInput>
          <Input
            placeholder="댓글을 입력해주세요."
            width="100%"
            value={newComment}
            onChange={handleChangeComment}
          />
          <Button
            handleClickButton={handleAddComment}
          >
            댓글작성
          </Button>
        </CommentInput>
        <CommentList>
          {commentList.map((list) => {
            return (
              <CommentItem key={list.id}>
                <span>{list.nickname}</span>
                <span>{list.createdAt}</span>
                <input
                  type="text"
                  value={list.comment}
                  onChange={() => {}}
                />
                <button>수정</button>
                <button
                  onClick={handleDelComment}
                >
                  삭제
                </button>
              </CommentItem>
            );
          })}
        </CommentList>
      </CommentForm>
    </>
  );
};
const CommentForm = styled.form`
  border-top: 1px solid #ddd;
  padding-top: 50px;
  margin-top: 40px;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const CommentInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CommentList = styled.ul`
  margin-top: 30px;
`;
const CommentItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  &&& input {
    margin: 0 20px;
    flex: 1;
    font-size: 16px;
    color: #222;
  }
  span {
    font-size: 16px;
    color: #777;
  }
  button {
    margin-left: auto;
    font-size: 16px;
  }
`;

export default Comment;
