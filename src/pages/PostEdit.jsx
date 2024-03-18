import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getPostDetail } from './PostDetail';
import styled from 'styled-components';
import PostForm from 'components/features/post/PostForm';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import postsAPI from 'apis/postsAPI';
import { convertFormForRequest } from 'utils/convertFormDataForRequest';
import { POST_CATEGORY } from 'constants/sharedConstants';
import { getCategoryKey } from 'utils/getCategoryKey';

const updatePost = async ({ post, postId }) => {
  const { data } = await postsAPI.updatePost(
    postId,
    post,
  );

  return data.data;
};

const PostEdit = () => {
  const { id: postId } = useParams();
  const navigate = useNavigate();

  const { data: post } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
    enabled: !!postId,
  });

  useEffect(() => {
    if (post) {
      handleGetPostSuccess(post.first);
    }
  }, [post]);

  const { mutate } = useMutation({
    mutationFn: updatePost,
    onSuccess: (data) => {
      const { id } = data;
      navigate(`/posts/${id}`, { replace: true });
      // Todo: 업데이트 성공 시, 캐싱된 포스트 삭제 필요한지 확인
    },
  });

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: 'onSubmit' });

  const handleGetPostSuccess = (post) => {
    setValue('title', post.title);
    setValue(
      'category',
      POST_CATEGORY[post.category],
    );
    setValue('contents', post.contents);
  };

  const handleUpdate = (form) => {
    const formData = convertFormForRequest(
      {
        ...form,
        category: getCategoryKey(
          form['category'],
        ),
        imgId: post.first.postImageList[0]?.id,
      },
      'updatePostRequestDto',
    );
    mutate({ post: formData, postId });
  };

  if (!post) return <div>....loading</div>;

  return (
    <NewPostLayout>
      <PostForm
        formName={'뉴스 수정'}
        register={register}
        handleSubmit={handleSubmit(handleUpdate)}
        watch={watch}
        setValue={setValue}
        errors={errors}
        imageName={
          post.first.postImageList[0]?.imageName
        }
      />
    </NewPostLayout>
  );
};

export default PostEdit;

const NewPostLayout = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
`;
