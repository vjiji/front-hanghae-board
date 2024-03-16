import styled from 'styled-components';
import Select from 'components/common/Select';
import { CATEGORY_VALUE } from 'constants/sharedConstants';
import icon from 'assets/upload-image-icon.svg';
import { useNavigate } from 'react-router-dom';
import Button from 'components/common/Button';
import RefInput from 'components/common/RefInput';

const PostForm = ({
  formName,
  register,
  handleSubmit,
  errors,
  watch,
  setValue,
  imageName,
}) => {
  const navigate = useNavigate();

  const handleCategorySelect = (name) => {
    setValue('category', name);
  };
  const files = watch('files');
  const selectedCategory = watch('category');

  return (
    <FormLayout onSubmit={handleSubmit}>
      <h1>{formName}</h1>
      <FieldBox>
        <Select
          options={CATEGORY_VALUE}
          handleOptionSelect={
            handleCategorySelect
          }
          {...register('category', {
            required: '카테고리를 선택해주세요',
          })}
        />
        {!selectedCategory &&
          errors.category?.message}
      </FieldBox>
      <FieldBox>
        <RefInput
          placeholder={'뉴스 제목을 입력하세요.'}
          width="360px"
          {...register('title', {
            required: '뉴스 제목을 입력해주세요',
          })}
        />
        {errors.title && errors.title.message}
      </FieldBox>
      <FieldBox>
        <textarea
          placeholder="뉴스 내용을 입력하세요"
          {...register('contents', {
            required: '뉴스 내용을 입력해주세요',
          })}
        />
        {errors.contents &&
          errors.contents.message}
      </FieldBox>

      <Label htmlFor="image-input">
        <img src={icon} />
        <p>
          {imageName ??
            files?.[0]?.name ??
            '이미지를 첨부해 주세요 (최대 5MB)'}
        </p>
      </Label>
      <input
        id="image-input"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        {...register('files')}
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

const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

  p {
    color: red;
  }
`;
