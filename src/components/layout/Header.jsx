import React from 'react';
import styled from 'styled-components';
import SearchIcon from 'icons/Search-icon.svg';
import PenIcon from 'icons/mdi_pen.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <NewsAction>
          <img src={PenIcon} alt="작성"></img>
          <News>뉴스 작성하기</News>
        </NewsAction>
        <Logo>항해보드</Logo>
        <UserActions>
          <CustomLink>로그인</CustomLink>
          <CustomLink>회원가입</CustomLink>
          <img src={SearchIcon} alt="검색" />
        </UserActions>
      </Section>
      <Nav>
        <NavItem href="#">정치</NavItem>
        <NavItem href="#">경제</NavItem>
        <NavItem href="#">사회</NavItem>
        <NavItem href="#">생활문화</NavItem>
        <NavItem href="#">세계</NavItem>
        <NavItem href="#">IT</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
  cursor: pointer;
`;

const News = styled.a`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const NewsAction = styled.div`
  display: flex;
  flex: 1 0 33%;
  align-items: center;
  gap: 10px;
  img {
    width: 22px;
    height: 22px;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 0 33%;
  gap: 20px;
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 30px;
`;

const NavItem = styled.a`
  font-size: 16px;
  color: #666;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #000;
  }
`;
const CustomLink = styled.a`
  cursor: pointer;
`;
