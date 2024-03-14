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
  margin: 100px 0;
  display: flex;
  justify-content: center;
`;
