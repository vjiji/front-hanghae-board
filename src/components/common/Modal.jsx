import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { StyledCloseButton } from 'components/common/Button';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalDim>
      <ModalOverlay>
        <ModalContainer>
          <StyledCloseButton onClick={onClose} />
          {children}
        </ModalContainer>
      </ModalOverlay>
    </ModalDim>,
    document.getElementById('modal-root'),
  );
};

export default Modal;

const ModalDim = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
