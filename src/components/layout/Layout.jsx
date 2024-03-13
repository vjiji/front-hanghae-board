import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 1440px;
  min-width: 800px;
  margin: 0 auto;
  padding: 0 30px;
`;

const BodyContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
