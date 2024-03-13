import React from 'react';
import styled from 'styled-components';
import icon from 'assets/upload-image-icon.svg';

const PostForm = () => {
  return (
    <FormLayout>
      <h1>뉴스 작성</h1>
      <select>
        <option
          value="none"
          selected
          disabled
          hidden
        >
          카테고리 선택
        </option>
        <option>test</option>
        <option>test2</option>
      </select>
      <input placeholder="뉴스 제목을 입력하세요." />
      <textarea placeholder="뉴스 내용을 입력하세요" />
      <Label htmlFor="image-input">
        <img src={icon} />
        <p> 이미지를 첨부해 주세요 (최대 5MB)</p>
      </Label>
      <input
        id="image-input"
        placeholder="이미지를 첨부해 주세요"
        type="file"
        style={{ visibility: 'hidden' }}
      />
      <ButtonBox>
        <button>취소</button>
        <button>작성</button>
      </ButtonBox>
    </FormLayout>
  );
};

export default PostForm;

const FormLayout = styled.form`
  width: 732px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: bold;
  }

  select {
    width: 360px;
    height: 70px;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #666;
  }

  input {
    border: 1px solid #666;
    height: 70px;
    padding: 0 20px;
    font-size: 20px;
    &::placeholder {
      color: #bababa;
    }
  }

  textarea {
    height: 600px;
    padding: 23px 20px;
    resize: none;
    border: 1px solid #666;
    font-size: 20px;
    &::placeholder {
      color: #bababa;
    }
  }
`;

const Label = styled.label`
  height: 70px;
  padding: 0 20px;
  border: 1px solid #666;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: cneter;
  color: #bababa;
  font-size: 20px;
  cursor: pointer;
`;

const ButtonBox = styled.div``;
