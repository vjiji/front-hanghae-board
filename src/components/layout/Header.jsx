import React from 'react';
import styled from 'styled-components';
import SearchIcon from 'icons/Search-icon.svg';
import PenIcon from 'icons/mdi_pen.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <TopSection>
        <Logo>항해보드</Logo>
      </TopSection>
      <Section>
        <NewsAction>
          <img src={PenIcon} alt="작성"></img>
          <News>뉴스 작성하기</News>
        </NewsAction>
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
  // 나중에 border빼기!
  border: 1px solid #000;
  display: flex;
  padding: 15px 0;
  flex-direction: column;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
  cursor: pointer;
`;

const News = styled.a`
  font-size: 16px;
  padding-left: 10px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const NewsAction = styled.div`
  width: 150px;
  align-items: center;
`;

const UserActions = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.a`
  margin: 0 16px;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const CustomLink = styled.a`
  cursor: pointer;
`;
