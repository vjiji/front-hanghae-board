import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const TabList = () => {
  const [isTab, setIsTab] = useState(false);
  const onClickTabBtn = () => {
    setIsTab(true);
    console.log(isTab);
  };
  return (
    <>
      <TabMenu>
        <TabBtns>
          <TabBtn
            isTab={isTab ? !isTab : isTab}
            onClick={onClickTabBtn}
          >
            최신
          </TabBtn>
          <TabBtn
            isTab={isTab ? !isTab : isTab}
            onClick={onClickTabBtn}
          >
            TOP인기
          </TabBtn>
        </TabBtns>
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
                    항해99 출신 개발자들이 한곳에
                    모여 작당모의를 진행 중이라..
                  </p>
                  <span>송두용 기자</span>
                  <span>994,999</span>
                </InfoWrap>
              </Link>
            </ListItem>
          </ContList>
        </TabContents>
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
  ${({ isTab }) =>
    isTab &&
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
const InfoWrap = styled.div``;

export default TabList;
