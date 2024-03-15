import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Input from 'components/common/Input';

const SignupModal = () => {
  const [isReporter, setIsReporter] =
    useState(false);

  return (
    <>
      <Title>HanghaeBoard</Title>
      <UserBlock>
        <TabBtn
          active={!isReporter}
          onClick={() => setIsReporter(false)}
        >
          일반회원
        </TabBtn>
        <TabBtn
          active={isReporter}
          onClick={() => setIsReporter(true)}
        >
          기자
        </TabBtn>
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
      {isReporter && (
        <InputBlock>
          <h2>인증키*</h2>
          <Input
            placeholder="인증키"
            type="text"
          />
        </InputBlock>
      )}
      <Button>회원가입</Button>
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
    props.active ? 'bold' : 'normal'};
`;
