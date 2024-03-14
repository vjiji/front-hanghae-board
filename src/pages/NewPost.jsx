import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import PostForm from 'components/features/post/PostForm';
import postsAPI from 'apis/postsAPI';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const createPost = async (post) => {
  const { data } =
    await postsAPI.createPost(post);
  return data;
};

const NewPost = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      const { id } = data;
      navigate(`/posts/${id}`, { replace: true });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: 'onSubmit',
  });

  const handlePost = (formData) => {
    mutate(formData);
  };

  return (
    <NewPostLayout>
      <PostForm
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
