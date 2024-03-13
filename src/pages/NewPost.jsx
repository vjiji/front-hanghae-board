import PostForm from 'components/features/post/PostForm';
import React from 'react';
import styled from 'styled-components';

const NewPost = () => {
  return (
    <NewPostLayout>
      <PostForm />
    </NewPostLayout>
  );
};

export default NewPost;

const NewPostLayout = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: center;
`;
