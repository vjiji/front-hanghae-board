import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Auth from 'components/common/Auth';

const Layout = () => {
  return (
    <Container>
      <Auth />
      <BodyContainer>
        <Header />
        <Outlet />
      </BodyContainer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  position: relative;
  margin: 0 0 100px;
`;

const BodyContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;
