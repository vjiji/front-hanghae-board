import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import PostForm from 'components/features/post/PostForm';
import postsAPI from 'apis/postsAPI';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { convertFormForRequest } from 'utils/convertFormDataForRequest';
import { getCategoryKey } from 'utils/getCategoryKey';

const createPost = async (post) => {
  const { data } =
    await postsAPI.createPost(post);
  return data.data;
};

const NewPost = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      const { id } = data;
      reset();
      navigate(`/posts/${id}`, { replace: true });
      // Todo: 포스팅 성공 시, 캐싱된 포스트리스트 삭제 필요한지 확인
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const handlePost = (form) => {
    const formData = convertFormForRequest(
      {
        ...form,
        category: getCategoryKey(
          form['category'],
        ),
      },
      'createPostRequestDto',
    );

    mutate(formData);
  };

  return (
    <NewPostLayout>
      <PostForm
        formName={'뉴스 작성'}
        register={register}
        handleSubmit={handleSubmit(handlePost)}
        watch={watch}
        setValue={setValue}
        errors={errors}
      />
    </NewPostLayout>
  );
};

export default NewPost;

const NewPostLayout = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
`;
