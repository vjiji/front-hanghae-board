import React from 'react';
import styled from 'styled-components';
import { StyledCloseButton } from 'components/common/Button';

const Modal = ({ children }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <StyledCloseButton onClick={() => {}} />
        {children}{' '}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

// 스타일드 컴포넌트 정의
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
