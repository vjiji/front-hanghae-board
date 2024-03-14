import Button from 'components/common/Button';
import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <>
      <InnerWrap>
        <CommentWrap>
          <Input />
          <Button />
        </CommentWrap>
      </InnerWrap>
    </>
  );
};
const CommentWrap = styled.div`
  display: flex;
  align-items: center;
`;
const InnerWrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export default Detail;
