import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import postsAPI from 'apis/postsAPI';
import Comment from 'components/features/post/Comment';
import { POST_CATEGORY } from 'constants/sharedConstants';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
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
  const { data: post } = useQuery({
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

  if (!post) return <div>....loading</div>;

  return (
    <PostDetailLayout>
      <TitleBox>
        <h1>{post.title}</h1>
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
      </TitleBox>
      <p>{POST_CATEGORY[post.category]}</p>
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
      <p>
        by. <strong>{post.nickname}</strong>
      </p>
      <Comment
        id={post.id}
        commentList={post.commentList}
      />
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
