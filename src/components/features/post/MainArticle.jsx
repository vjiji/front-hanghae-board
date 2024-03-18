import { useQuery } from '@tanstack/react-query';
import postsAPI from 'apis/postsAPI';
// import { getPostDetail } from 'pages/PostDetail';
import React from 'react';
import { Link } from 'react-router-dom';
import usePageStore from 'store/categoryStore';
import styled from 'styled-components';
import defaultImage from 'assets/logo.webp';

const MainArticle = () => {
  const { pageInfo } = usePageStore();
  const { category: currentCategory } = pageInfo;

  const { data: post } = useQuery({
    queryKey: [
      `posts${currentCategory ? `_${currentCategory}` : ''}`,
    ],
    queryFn: () =>
      getPostAll(post, currentCategory),
  });

  const getPostAll = async (post, category) => {
    const { data } = await postsAPI.getPostAll(
      post,
      category,
    );
    return data.data;
  };

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
                  <span>{post.hit}</span>
                </Editor>
              </div>
              <ImgWrap>
                <img
                  src={
                    !post.postImage
                      ? defaultImage
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
                      ? defaultImage
                      : post.postImage.url
                  }
                  alt=""
                />
              </ImgWrap>

              <h3>&#34;{post.title}&#34;</h3>
              <Editor>
                <span>{post.nickname} 기자</span>
                <span>{post.hit}</span>
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
                        ? defaultImage
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
    font-size: 30px;
    font-weight: 800;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const WeeklyArticle = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
const ArticleThumList = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    li {
      width: 100%;
      position: relative;
      overflow: hidden;
      p {
        position: absolute;
        bottom: 0;
        left: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.2;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
        width: 100%;
        color: #fff;
        padding: 10px 20px;
      }
    }
  }
`;
const HotArticle = styled(Link)`
  display: block;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    picture {
      order: 1;
    }
  }
  h3 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.2;
    @media (max-width: 900px) {
      font-size: 30px;
    }
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
  @media (max-width: 900px) {
    margin: 20px 0;
  }
`;
export default MainArticle;
