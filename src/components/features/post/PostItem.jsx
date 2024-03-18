import { POST_CATEGORY } from 'constants/sharedConstants';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostItem = ({ post, countInfo }) => {
  const {
    postId,
    nickname,
    title,
    category,
    contnents,
    // postImage,
  } = post;
  return (
    <ListItem key={postId}>
      <Link to="">
        <ImgWrap>
          <img src="" alt="" />
        </ImgWrap>
        <InfoWrap>
          <em>{POST_CATEGORY[category]}</em>
          <h3>{title}</h3>
          <p>{contnents}</p>
          <span>{nickname} 기자</span>
          <span>994,999</span>
          <span>{countInfo}</span>
        </InfoWrap>
      </Link>
    </ListItem>
  );
};

export default PostItem;

const ListItem = styled.div`
  a {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    padding: 20px 0;
  }
`;
const ImgWrap = styled.div`
  //더미
  background: #ddd;
  height: 280px;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  em {
    font-size: 20px;
  }
  h3 {
    font-size: 30px;
    font-weight: 700;
  }
  p {
    font-size: 20px;
  }
  span {
    font-size: 16px;
    color: #777;
  }
  span + span {
    margin-top: auto;
  }
`;
