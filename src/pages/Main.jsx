import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainArticle>
      <ArticleTop>
        <div>
          <div>
            <h2>
              &#34;항햐99 과연 이대로
              괜찮은가...&#34;
            </h2>
            <div>
              <span>이은미 기자</span>
              <span>88,000</span>
            </div>
          </div>
          <picture>
            <img src="" alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <img src="" alt="" />
          </picture>
          <h3>
            &#34;최원장 튜터님 ㅅㄹ해요...&#34;
          </h3>
          <div>
            <span>김선하 기자</span>
            <span>88,000</span>
          </div>
        </div>
      </ArticleTop>
      <ArticleBottom>
        <ul>
          <li>
            <p>요즘 개발자 어떤가요?</p>
            <div>
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </ArticleBottom>
    </MainArticle>
  );
};
const ArticleMain = styled.div``;
const ArticleList = styled.div``;

export default Main;
