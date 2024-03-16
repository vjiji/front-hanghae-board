import { useState } from 'react';
import styled, { css } from 'styled-components';
import PostItem from './PostItem';
import {
  POST_TAB_KEY,
  TAB_NAME,
} from 'constants/sharedConstants';
// import postsAPI from 'apis/postsAPI';
import { useQuery } from '@tanstack/react-query';

const getPosts = async (tab, category) => {
  console.log(tab, category);
  // const data = await postsAPI.getPostsByTab(
  //   tab,
  //   category,
  // );
  // console.log(data);
  // return data;
};
const TabList = () => {
  const currentCategory =
    localStorage.getItem('category');
  const [activeTab, setActiveTab] = useState(
    POST_TAB_KEY[0],
  );
  const { data: posts } = useQuery({
    queryKey: [
      `posts${currentCategory ? `_${currentCategory}` : ''}`,
      activeTab,
    ],
    queryFn: getPosts(activeTab, currentCategory),
    enabled: !!activeTab,
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  if (!posts) return null;
  console.log(posts);
  return (
    <>
      <TabMenu>
        <TabBtns>
          {Object.entries(TAB_NAME).map(
            ([name, value]) => (
              <TabBtn
                key={`${name}_${value}`}
                $active={activeTab === name}
                onClick={() =>
                  handleTabClick(name)
                }
              >
                {value}
              </TabBtn>
            ),
          )}
        </TabBtns>
        <PostItem />
        <PostItem />
        <PostItem />
      </TabMenu>
    </>
  );
};

const TabMenu = styled.div`
  margin-top: 80px;
`;
const TabBtns = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;
const TabBtn = styled.button`
  position: relative;
  padding: 10px 0;
  min-width: 200px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    css`
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #222;
      }
    `}
`;

export default TabList;
