import { useQuery } from '@tanstack/react-query';
import postsAPI from 'apis/postsAPI';
// import { getPostDetail } from 'pages/PostDetail';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainArticle = () => {
  const getPostAll = async (post) => {
    const { data } =
      await postsAPI.getPostAll(post);
    return data.data;
  };

  const { data: post } = useQuery({
    queryKey: ['getPost'],
    queryFn: () => getPostAll(post),
  });
  console.log(post);
  if (!post) {
    return null;
  }
  return (
    <MainArticleWrap>
      <ArticleTop>
        {post
          .filter((_, index) => index === 0)
          .map((post) => (
            <WeeklyArticle
              to={`/posts/${post.id}`}
              key={post.id}
            >
              <div>
                <h2>&#34;{post.title}&#34;</h2>
                <Editor>
                  <span>
                    {post.nickname} 기자
                  </span>
                  <span>88,000</span>
                </Editor>
              </div>
              <ImgWrap>
                <img
                  src={
                    !post.postImage
                      ? ''
                      : post.postImage.url
                  }
                  alt=""
                />
              </ImgWrap>
            </WeeklyArticle>
          ))}
        {post
          .filter((_, index) => index === 1)
          .map((post) => (
            <HotArticle
              to={`/posts/${post.id}`}
              key={post.id}
            >
              <ImgWrap>
                <img
                  src={
                    !post.postImage
                      ? ''
                      : post.postImage.url
                  }
                  alt=""
                />
              </ImgWrap>

              <h3>&#34;{post.title}&#34;</h3>
              <Editor>
                <span>{post.nickname} 기자</span>
                <span>88,000</span>
              </Editor>
            </HotArticle>
          ))}
      </ArticleTop>
      <ArticleThumList>
        <ul>
          {post.slice(2, 6).map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <p>{post.title}</p>
                <ImgWrap>
                  <img
                    src={
                      !post.postImage
                        ? ''
                        : post.postImage.url
                    }
                    alt=""
                  />
                </ImgWrap>
              </Link>
            </li>
          ))}
        </ul>
      </ArticleThumList>
    </MainArticleWrap>
  );
};

const MainArticleWrap = styled.div`
  margin-top: 30px;
`;
const ArticleTop = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  h2 {
    font-size: 36px;
    font-weight: 800;
  }
`;
const WeeklyArticle = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;
const ArticleThumList = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    li {
      width: 100%;
      position: relative;
      overflow: hidden;
      p {
        position: absolute;
        bottom: 15px;
        left: 15px;
      }
    }
  }
`;
const HotArticle = styled(Link)`
  display: block;
  h3 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
  }
`;
const ImgWrap = styled.picture`
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  height: 0;
  width: 100%;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
  }
`;
const Editor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  color: #999;
`;
export default MainArticle;
