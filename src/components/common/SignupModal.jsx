import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { signup } from 'apis/login';
import Modal from './Modal';

const SignupModal = ({ onClose }) => {
  const [isReporter, setIsReporter] =
    useState(false);
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [adminToken, setAdminToken] =
    useState('');

  // 회원가입 성공 모달
  const [isSuccess, setIsSuccess] =
    useState(false);

  const [message, setMessage] = useState('');

  const handleModalButtonClick = () => {
    setMessage('');
    isSuccess && onClose();
  };

  const handleSignup = async () => {
    try {
      //회원가입 api 호출
      const response = await signup(
        email,
        password,
        nickname,
        adminToken,
      );
      console.log(response);
      setIsSuccess(true);
      setMessage('회원가입 성공!');
    } catch (error) {
      console.log(error);
      setMessage('회원가입에 실패하였습니다!');
    }
  };

  return (
    <>
      <Title>HanghaeBoard</Title>
      <UserBlock>
        <TabBtn
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
        </TabBtn>
      </UserBlock>
      <InputBlock>
        <h2>이메일*</h2>
        <Input
          placeholder="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
      </InputBlock>
      <InputBlock>
        <h2>닉네임*</h2>
        <Input
          placeholder="닉네임"
          value={nickname}
          onChange={(e) =>
            setNickname(e.target.value)
          }
        />
      </InputBlock>
      <InputBlock>
        <h2>비밀번호*</h2>
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </InputBlock>
      {isReporter && (
        <InputBlock>
          <h2>인증키*</h2>
          <Input
            placeholder="인증키"
            type="text"
            value={adminToken}
            onChange={(e) =>
              setAdminToken(e.target.value)
            }
          />
        </InputBlock>
      )}
      <Button onClick={handleSignup}>
        회원가입
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
};

export default SignupModal;

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

const TabBtn = styled.button`
  font-size: 14px;
  font-weight: ${(props) =>
    props.$active ? 'bold' : 'normal'};
`;

const InnerModalLayout = styled.div`
  text-align: center;
`;
