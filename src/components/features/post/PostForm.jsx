import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import { POST_CATEGORY } from 'constants/sharedConstants';
import icon from 'assets/upload-image-icon.svg';
import { useNavigate } from 'react-router-dom';
import Button from 'components/common/Button';

const PostForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: 'onSubmit',
  });

  const handleCategorySelect = (name) => {
    setValue('category', name);
  };
  const files = watch('imgFile');

  const handleFormSubmit = (form) => {
    const fileData = files[0];
    console.log(files);
    console.log({ ...form, fileData });
    console.log('add post');
  };

  return (
    <FormLayout
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h1>뉴스 작성</h1>
      <Select
        options={POST_CATEGORY}
        handleOptionSelect={handleCategorySelect}
        {...register('category', {
          required: '카테고리를 선택해주세요',
        })}
      />
      {errors.category && errors.category.message}
      <Input
        placeholder={'뉴스 제목을 입력하세요.'}
        width="360px"
        {...register('title', {
          required: '뉴스 제목을 입력해주세요',
        })}
      />
      {errors.title && errors.title.message}
      <textarea
        placeholder="뉴스 내용을 입력하세요"
        {...register('contents', {
          required: '뉴스 내용을 입력해주세요',
        })}
      />
      {errors.contents && errors.contents.message}

      <Label htmlFor="image-input">
        <img src={icon} />
        <p>
          {files?.[0]?.name ??
            '이미지를 첨부해 주세요 (최대 5MB)'}
        </p>
      </Label>
      <input
        id="image-input"
        placeholder="이미지를 첨부해 주세요"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        {...register('imgFile')}
      />
      <ButtonBox>
        <Button
          handleClickButton={() => navigate('/')}
          color="white"
        >
          취소
        </Button>
        <Button type="submit">작성</Button>
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

    &:focus {
      outline-color: #666;
    }
  }
`;

const Label = styled.label`
  height: 60px;
  padding: 0 20px;
  border: 2px solid #666;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #bababa;
  font-size: 18px;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
`;
