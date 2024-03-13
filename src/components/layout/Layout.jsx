import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Layout = () => {
  return (
    <Container>
      <BodyContainer>
        <Header />
        <Outlet />
      </BodyContainer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const BodyContainer = styled.div`
  max-width: 1100px;
  padding: 0 20px;
  margin: 0 auto;
`;
