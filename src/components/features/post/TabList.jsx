import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const TabList = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <TabMenu>
        <TabBtns>
          <TabBtn
            $active={activeTab === 1}
            onClick={() => handleTabClick(1)}
          >
            최신
          </TabBtn>
          <TabBtn
            $active={activeTab === 2}
            onClick={() => handleTabClick(2)}
          >
            TOP인기
          </TabBtn>
        </TabBtns>
        {activeTab === 1 && (
          <TabContents>
            <ContList>
              <ListItem>
                <Link to="">
                  <ImgWrap>
                    <img src="" alt="" />
                  </ImgWrap>
                  <InfoWrap>
                    <em>IT</em>
                    <h3>개발자들 왜 모였나?</h3>
                    <p>
                      항해99 출신 개발자들이
                      한곳에 모여 작당모의를 진행
                      중이라..
                    </p>
                    <span>송두용 기자</span>
                    <span>994,999</span>
                  </InfoWrap>
                </Link>
              </ListItem>
            </ContList>
            <ContList>
              <ListItem>
                <Link to="">
                  <ImgWrap>
                    <img src="" alt="" />
                  </ImgWrap>
                  <InfoWrap>
                    <em>IT</em>
                    <h3>개발자들 왜 모였나?</h3>
                    <p>
                      항해99 출신 개발자들이
                      한곳에 모여 작당모의를 진행
                      중이라..
                    </p>
                    <span>송두용 기자</span>
                    <span>994,999</span>
                  </InfoWrap>
                </Link>
              </ListItem>
            </ContList>
          </TabContents>
        )}
        {activeTab === 2 && (
          <TabContents>
            <ContList>
              <ListItem>
                <Link to="">
                  <ImgWrap>
                    <img src="" alt="" />
                  </ImgWrap>
                  <InfoWrap>
                    <em>생활문화</em>
                    <h3>
                      Cafe 사업 만만치 않아..
                    </h3>
                    <p>
                      메가커피, 컴포즈 커피
                      너무나도 많은 카페 체인점이
                      생기고있는 가운데 봄...
                    </p>
                    <span>김선하 기자</span>
                    <span>994,999</span>
                  </InfoWrap>
                </Link>
              </ListItem>
            </ContList>
            <ContList>
              <ListItem>
                <Link to="">
                  <ImgWrap>
                    <img src="" alt="" />
                  </ImgWrap>
                  <InfoWrap>
                    <em>생활문화</em>
                    <h3>
                      한끼만 먹어도 살이 찌는 이유
                    </h3>
                    <p>밥을 많이 먹어서..</p>
                    <span>김준오 기자</span>
                    <span>994,999</span>
                  </InfoWrap>
                </Link>
              </ListItem>
            </ContList>
          </TabContents>
        )}
      </TabMenu>
    </>
  );
};

const TabMenu = styled.div`
  margin-top: 80px;
`;
const TabBtns = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;
const TabBtn = styled.button`
  position: relative;
  padding: 10px 0;
  min-width: 200px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    css`
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #222;
      }
    `}
`;
const TabContents = styled.div``;
const ContList = styled.div``;
const ListItem = styled.div`
  a {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    padding: 20px 0;
  }
`;
const ImgWrap = styled.div`
  //더미
  background: #ddd;
  height: 280px;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  em {
    font-size: 20px;
  }
  h3 {
    font-size: 30px;
    font-weight: 700;
  }
  p {
    font-size: 20px;
  }
  span {
    font-size: 16px;
    color: #777;
  }
  span + span {
    margin-top: auto;
  }
`;

export default TabList;
