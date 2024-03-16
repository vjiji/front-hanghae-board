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

  if (!post) {
    return null;
  }
  return (
    <MainArticleWrap>
      <ArticleTop>
        {post.map((post) => {
          return (
            <WeeklyArticle to="/" key={post.id}>
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
                <img src="" alt="" />
              </ImgWrap>
            </WeeklyArticle>
          );
        })}
        <HotArticle to="/">
          <ImgWrap>
            <img src="" alt="" />
          </ImgWrap>
          <div>
            <h3>
              &#34;최원장 튜터님 ㅅㄹ해요...&#34;
            </h3>
            <Editor>
              <span>김선하 기자</span>
              <span>88,000</span>
            </Editor>
          </div>
        </HotArticle>
      </ArticleTop>
      <ArticleThumList>
        <ul>
          <li>
            <Link to="/">
              <p>요즘 개발자 어떤가요?</p>
              <ImgWrap>
                <img src="" alt="" />
              </ImgWrap>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>요즘 개발자 어떤가요?</p>
              <ImgWrap>
                <img src="" alt="" />
              </ImgWrap>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>요즘 개발자 어떤가요?</p>
              <ImgWrap>
                <img src="" alt="" />
              </ImgWrap>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>요즘 개발자 어떤가요?</p>
              <ImgWrap>
                <img src="" alt="" />
              </ImgWrap>
            </Link>
          </li>
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
  img {
    height: 400px;
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
    li {
      width: 100%;
      position: relative;
      background: #ddd;
      overflow: hidden;
      height: 180px;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
      p {
        position: absolute;
        bottom: 15px;
        left: 15px;
      }
    }
  }
`;
const HotArticle = styled(Link)``;
const ImgWrap = styled.picture`
  background: #ddd;
  img {
    width: 100%;
  }
`;
const Editor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  color: #999;
`;
export default MainArticle;
