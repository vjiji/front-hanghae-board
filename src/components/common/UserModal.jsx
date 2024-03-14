import React from 'react';
import styled from 'styled-components';
import Button, {
  StyledCloseButton,
} from 'components/common/Button';
import Input from 'components/common/Input';

const UserModal = () => {
  return (
    <ModalOverlay>
      <StyledCloseButton></StyledCloseButton>
      <ModalContainer>
        <Title>HanghaeBoard</Title>
        <UserBlock>
          <h1>일반회원</h1>
          <Reporter>기자</Reporter>
        </UserBlock>
        <InputBlock>
          <h2>아이디*</h2>
          <Input placeholder="아이디" />
        </InputBlock>
        <InputBlock>
          <h2>비밀번호*</h2>
          <Input
            placeholder="비밀번호"
            type="password"
          />
        </InputBlock>
        <InputBlock>
          <h2>비밀번호 확인*</h2>
          <Input
            placeholder="비밀번호 확인"
            type="password"
          />
        </InputBlock>
        <Button>확인</Button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default UserModal;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
`;

const ModalOverlay = styled.div`
  width: 430px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBlock = styled.div`
  margin-bottom: 20px;
`;

const UserBlock = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const Reporter = styled.div`
  margin-left: 10px;
`;
