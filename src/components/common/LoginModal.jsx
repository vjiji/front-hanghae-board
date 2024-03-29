import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { login } from 'apis/login';
import useAuthStore from 'store/authStore';
import Modal from './Modal';

function LoginModal({ onClose }) {
  // const router = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePW = (e) => {
    setPassword(e.target.value);
  };
  const loginSuccess = (response) => {
    // Todo: 토큰, 유저정보 안넘어옴
    const { userId, role, email, nickname } =
      response;

    useAuthStore.getState().login({
      userId,
      isReporter: role === 'REPORTER',
      email,
      nickname,
    });
  };

  const [isSuccess, setIsSuccess] =
    useState(false);
  const [message, setMessage] = useState('');

  const onClickLogin = async () => {
    if (
      !id.trim().length ||
      !password.trim().length
    ) {
      setMessage('모든 항목을 입력해주세요!');
      return;
    }
    try {
      const data = await login(id, password);
      if (data) {
        setIsSuccess(true);
        setMessage('로그인에 성공하였습니다!');
        loginSuccess(data);
      }
    } catch (error) {
      console.error('Login error', error);
      setMessage(error.response.data.message);
    }
    setId('');
    setPassword('');
  };

  // const [isReporter, setIsReporter] =
  //   useState(false);

  const handleModalButtonClick = () => {
    setMessage('');
    isSuccess && onClose();
  };

  return (
    <>
      <Title>HanghaeBoard</Title>
      <UserBlock>
        {/* <TabBtn
          $active={!isReporter}
          onClick={() => setIsReporter(false)}
        >
          일반회원
        </TabBtn>
        <TabBtn
          $active={isReporter}
          onClick={() => setIsReporter(true)}
        >
          기자
        </TabBtn> */}
      </UserBlock>
      <InputBlock>
        <h2>이메일*</h2>
        <Input
          type="text"
          value={id}
          placeholder="email"
          onChange={onChangeId}
        />
      </InputBlock>
      <InputBlock>
        <h2>비밀번호*</h2>
        <Input
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={onChangePW}
        />
      </InputBlock>
      <Button onClick={onClickLogin}>
        로그인
      </Button>
      <Modal
        isOpen={message}
        onClose={handleModalButtonClick}
      >
        <InnerModalLayout>
          <h2>{message}</h2>
          <Button
            onClick={handleModalButtonClick}
          >
            확인
          </Button>
        </InnerModalLayout>
      </Modal>
    </>
  );
}

export default LoginModal;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
`;

const InputBlock = styled.div`
  width: 100%;
  margin-bottom: 20px;
  input {
    margin-top: 5px;
    width: 100%;
  }
`;

const UserBlock = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 15px;
`;

// const TabBtn = styled.button`
//   font-size: 14px;
//   font-weight: ${(props) =>
//     props.$active ? 'bold' : 'normal'};
// `;

const InnerModalLayout = styled.div`
  text-align: center;
`;
