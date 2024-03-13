import styled from 'styled-components';
import icon from 'assets/upload-image-icon.svg';
import Input from 'components/common/Input';
import { useForm } from 'react-hook-form';
import { POST_CATEGORY } from 'constants/sharedConstants';
import { useState } from 'react';
import Select from 'components/common/Select';
// import { POST_CATEGORY } from 'constants/sharedConstants';

const PostForm = () => {
  const formValues = {
    title: '',
    content: '',
    image: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: formValues,
  });

  const handleFormSubmit = (form) => {
    console.log({ category, ...form });
    console.log('add post');
  };

  const [category, setCategory] = useState('');
  const handleCategorySelect = (name) => {
    setCategory(name);
  };

  return (
    <FormLayout
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h1>뉴스 작성</h1>
      <Select
        options={POST_CATEGORY}
        selected={category}
        handleOptionClick={handleCategorySelect}
      />
      <p>
        {errors?.title && errors.title.message}
      </p>
      <Input
        placeholder={'뉴스 제목을 입력하세요.'}
        width="360px"
        name={formValues.title}
        {...register('title', {
          required: '뉴스 제목을 입력해주세요',
        })}
      />
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
        <button type="submit">작성</button>
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
    height: 60px;
    padding: 0 20px;
    font-size: 18px;
    border: none;
    border-bottom: 2px solid #666;
    color: #bababa;
  }

  textarea {
    height: 600px;
    padding: 23px 20px;
    resize: none;
    border: 2px solid #666;
    border-radius: 10px;
    font-size: 18px;

    &::placeholder {
      color: #bababa;
    }
  }
`;

const Label = styled.label`
  height: 60px;
  padding: 0 20px;
  border: 2px solid #666;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #bababa;
  font-size: 20px;
  cursor: pointer;
`;

const ButtonBox = styled.div``;
