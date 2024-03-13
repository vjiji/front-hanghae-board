import React from 'react';
import styled from 'styled-components';

const NewPost = () => {
  return (
    <NewPostLayout>
      <h1>뉴스 작성</h1>
      <div>select</div>
      <input placeholder="뉴스 제목을 입력하세요." />
      <textarea placeholder="뉴스 내용을 입력하세요" />
      <input
        placeholder="이미지를 첨부해 주세요"
        type="file"
      />
      <ButtonBox>
        <button>취소</button>
        <button>작성</button>
      </ButtonBox>
    </NewPostLayout>
  );
};

export default NewPost;

const NewPostLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    margin-bottom: 15px;
    font-size: 30px;
  }
`;

const ButtonBox = styled.div``;
