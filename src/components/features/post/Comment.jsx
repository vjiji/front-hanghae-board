import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useState } from 'react';
import styled from 'styled-components';
// import { useQuery } from '@tanstack/react-query';

const Comment = () => {
  const [newComment, setNewComment] =
    useState('');
  const handleChangeComment = (e) => {
    setNewComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const comments = {
      id: 1,
      writer: '함석원',
      date: 20240315,
      comment: '좋은글 감사합니다',
    };
    setNewComment('');
    console.log(comments);
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
            handleChangeInput={
              handleChangeComment
            }
          />
          <Button
            handleClickButton={handleSubmit}
          >
            댓글작성
          </Button>
        </CommentInput>
        <CommentList>
          <CommentItem>
            <span>함석원</span>
            <span>03.31</span>
            <p>좋은글 감사합니다.</p>
            <button>수정</button>
            <button>삭제</button>
          </CommentItem>
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
  &&& p {
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
