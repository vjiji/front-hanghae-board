import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainArticle>
      <ArticleTop>
        <BigArticle>
          <InfoWrap>
            <h2>
              &#34;항햐99 과연 이대로
              괜찮은가...&#34;
            </h2>
            <Editor>
              <span>이은미 기자</span>
              <span>88,000</span>
            </Editor>
          </InfoWrap>
          <ImgWrap>
            <img src="" alt="" />
          </ImgWrap>
        </BigArticle>
        <MiniArticle>
          <ImgWrap>
            <img src="" alt="" />
          </ImgWrap>
          <InfoWrap>
            <h3>
              &#34;최원장 튜터님 ㅅㄹ해요...&#34;
            </h3>
            <Editor>
              <span>김선하 기자</span>
              <span>88,000</span>
            </Editor>
          </InfoWrap>
        </MiniArticle>
      </ArticleTop>
      <ArticleMainList>
        <ul>
          <li>
            <p>요즘 개발자 어떤가요?</p>
            <ImgWrap>
              <img src="" alt="" />
            </ImgWrap>
          </li>
        </ul>
      </ArticleMainList>
    </MainArticle>
  );
};
const MainArticle = styled.div``;
const ArticleTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  h2 {
    font-size: 36px;
    font-weight: 800;
  }
`;
const BigArticle = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
const ArticleMainList = styled.div``;
const MiniArticle = styled.div``;
const InfoWrap = styled.div``;
const ImgWrap = styled.picture`
  img {
    width: 100%;
  }
`;
const Editor = styled.picture`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #999;
`;

export default Main;
