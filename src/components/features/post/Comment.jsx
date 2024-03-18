import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import commentsAPI from 'apis/commentsAPI';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import CancleIcon from 'icons/cancle-icon.svg';

const Comment = ({ commentList, id }) => {
  const [newComment, setNewComment] =
    useState('');
  const [commentId, setcommentId] = useState('');
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
  const deleteComment = async (commentId) => {
    const { data } =
      await commentsAPI.deleteComment(
        id,
        commentId,
      );

    return data.data;
  };
  const modifyComment = async ({
    newComment,
    commentId,
  }) => {
    const { data } =
      await commentsAPI.modifyComment({
        comment: newComment,
        id,
        commentId,
      });

    return data.data;
  };

  const queryClient = useQueryClient();
  const { mutate: createMutate } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries([
        'postDetail',
        id,
      ]);
      setNewComment('');
    },
  });
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries([
        'postDetail',
        id,
      ]);
    },
  });
  const { mutate: modifyMutate } = useMutation({
    mutationFn: modifyComment,
    onSuccess: () => {
      queryClient.invalidateQueries([
        'postDetail',
        id,
      ]);
      setNewComment('');
      setcommentId('');
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      createMutate({ comment: newComment }, id);
    } else {
      alert('한글자 이상 작성해주세요.');
    }
  };
  const handleDelComment = (commentId) => {
    deleteMutate(commentId);
  };
  const handleModifyBtn = (list) => {
    setNewComment(list.comment);
    setcommentId(list.id);
  };
  const handleModifyComment = (commentId) => {
    modifyMutate({
      newComment,
      commentId,
    });
  };
  const handleCancleModify = () => {
    setNewComment('');
    setcommentId('');
  };
  return (
    <>
      <CommentForm onSubmit={handleSubmit}>
        <h3>댓글</h3>
        <CommentInput>
          <InputWarp $commentId={commentId}>
            <Input
              className="comment-input"
              placeholder="댓글을 입력해주세요."
              width="100%"
              value={newComment}
              onChange={handleChangeComment}
            />
            {commentId && (
              <button
                className="cancle-btn"
                onClick={handleCancleModify}
              ></button>
            )}
          </InputWarp>
          {!commentId ? (
            <Button
              handleClickButton={handleAddComment}
            >
              댓글작성
            </Button>
          ) : (
            <Button
              handleClickButton={() =>
                handleModifyComment(commentId)
              }
            >
              수정완료
            </Button>
          )}
        </CommentInput>
        <CommentList>
          {commentList.map((list) => {
            return (
              <CommentItem key={list.id}>
                <span>{list.nickname}</span>
                <span>{list.createdAt}</span>
                <p className="comment">
                  {list.comment}
                </p>
                <button
                  onClick={() =>
                    handleModifyBtn(list)
                  }
                >
                  수정
                </button>
                <button
                  onClick={() =>
                    handleDelComment(list.id)
                  }
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
  button {
    margin: 0;
  }
`;
const InputWarp = styled.div`
  position: relative;
  width: 100%;
  ${({ $commentId }) =>
    $commentId &&
    css`
      .cancle-btn {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background: url(${CancleIcon}) no-repeat
          100%;
      }
      .comment-input {
        width: 100%;
        padding-right: 60px;
        position: relative;
        background: #f1f1f1;
      }
    `}
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
  .comment {
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
