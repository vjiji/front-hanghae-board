import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import postsAPI from 'apis/postsAPI';
import { ScrollToTopButton } from 'components/common/Button';
import Comment from 'components/features/post/Comment';
import { POST_CATEGORY } from 'constants/sharedConstants';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import useAuthStore from 'store/authStore';
import styled from 'styled-components';

const deletePost = async (postId) => {
  await postsAPI.deletePost(postId);
  return;
};

export const getPostDetail = async (id) => {
  const { data } =
    await postsAPI.getPostDetail(id);
  return data.data;
};

const PostDetail = () => {
  const { id: postId } = useParams();
  const navigate = useNavigate();
  const { nickname } = useAuthStore();
  const { data } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
    enabled: !!postId,
  });
  const { mutate: handleDelete } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      navigate('/');
      // Todo : 삭제 후 메인페이지 캐싱 데이터 삭제 필요한지 확인
    },
  });

  if (!data) return <div>....loading</div>;

  const { first: post, second: comment } = data;

  return (
    <PostDetailLayout>
      <TitleBox>
        <h1>{post.title}</h1>
        {post.nickname === nickname && (
          <ButtonBox>
            <button
              onClick={() =>
                navigate(`/editpost/${post.id}`)
              }
            >
              수정
            </button>
            <button
              onClick={() => handleDelete(postId)}
            >
              삭제
            </button>
          </ButtonBox>
        )}
      </TitleBox>
      <div className="post-detail__category-box">
        <p>{POST_CATEGORY[post.category]}</p>
        <strong>조회수 : {post.hit}</strong>
      </div>
      <ImgBox>
        <img
          src={
            post.postImageList[0]?.url ??
            'https://github.com/pmndrs/zustand/raw/main/bear.jpg'
          }
          alt="post image"
        />
      </ImgBox>
      <p>{post.contents}</p>

      <Comment
        id={post.id}
        commentList={comment.data}
      />
      <ScrollToTopButton></ScrollToTopButton>
    </PostDetailLayout>
  );
};

export default PostDetail;

const PostDetailLayout = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;

  p {
    font-size: 20px;
    line-height: 1.5;
  }

  strong {
    font-weight: bold;
  }

  .post-detail__category-box {
    display: flex;
    justify-content: space-between;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 35px;
    font-weight: bold;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 20px;

  button {
    border: none;
    background: #fff;
    font-size: 16px;

    &:hover {
      background: rgb(185, 235, 255, 0.2);
      font-weight: 500;
    }
  }
`;

const ImgBox = styled.div`
  img {
    width: 100%;
  }
`;
