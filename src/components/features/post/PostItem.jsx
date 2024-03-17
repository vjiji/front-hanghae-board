import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostItem = ({ post }) => {
  const {
    id,
    nickname,
    title,
    category,
    contnents,
    postImage,
    hit,
  } = post;

  return (
    <ListItem>
      <Link to={`/posts/${id}`}>
        {/* <ImgWrap>
          <img
            src={postImage?.url}
            alt={postImage?.imageName}
          />
        </ImgWrap> */}
        <ImgBox
          $img={
            postImage?.url ??
            'https://github.com/pmndrs/zustand/raw/main/bear.jpg'
          }
        ></ImgBox>
        <InfoWrap>
          <em>{category}</em>
          <h3>{title}</h3>
          <p>{contnents}</p>
          <span>{nickname} 기자</span>
          <span>조회수: {hit}</span>
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

  img {
    height: 100%;
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

const ImgBox = styled.div`
  width: 100%;
  height: 280px;
  background-image: ${({ $img }) =>
    `url(${$img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
