import { useQuery } from '@tanstack/react-query';
import postsAPI from 'apis/postsAPI';
import Comment from 'components/features/post/Comment';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';

const getPostDetail = async (id) => {
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
          <button>삭제</button>
        </ButtonBox>
      </TitleBox>
      <p>{post.category}</p>
      <ImgBox>
        <img
          src={
            post.img ??
            'https://github.com/pmndrs/zustand/raw/main/bear.jpg'
          }
          alt="post image"
        />
      </ImgBox>
      <p>{post.contents}</p>
      <p>
        by. <strong>{post.nickname}</strong>
      </p>
      <Comment />
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
  }
`;

const ImgBox = styled.div`
  img {
    width: 100%;
  }
`;
