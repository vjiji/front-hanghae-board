import { POST_CATEGORY } from 'constants/sharedConstants';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultImage from 'assets/logo.webp';

const PostItem = ({ post, countInfo }) => {
  const {
    id,
    nickname,
    title,
    category,
    contnents,
    postImage,
  } = post;

  return (
    <ListItem>
      <Link to={`/posts/${id}`}>
        <ImgWrap>
          <img
            src={postImage?.url ?? defaultImage}
            alt={postImage?.imageName}
          />
        </ImgWrap>
        <InfoWrap>
          <em>{POST_CATEGORY[category]}</em>
          <h3>{title}</h3>
          <p>{contnents}</p>
          <span>{nickname} 기자</span>
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

const ImgWrap = styled.picture`
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  height: 0;
  width: 100%;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
  }
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
