import styled, { css } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import PostItem from './PostItem';
import { TAB_NAME } from 'constants/sharedConstants';
import postsAPI from 'apis/postsAPI';
import usePageStore from 'store/categoryStore';

const getPosts = async (tab, category) => {
  const { data } = await postsAPI.getPostsByTab(
    tab,
    category,
  );
  return data.data;
};
const TabList = () => {
  const { pageInfo, setTab } = usePageStore();
  const {
    category: currentCategory,
    tab: currentTab,
  } = pageInfo;

  const { data: posts } = useQuery({
    queryKey: [
      `posts${currentCategory ? `_${currentCategory}` : ''}`,
      currentTab,
    ],
    queryFn: () =>
      getPosts(currentTab, currentCategory),
    enabled: !!currentTab,
  });

  const handleTabClick = (tabName) => {
    setTab(tabName);
  };

  if (!posts) return null;

  return (
    <>
      <TabMenu>
        <TabBtns>
          {Object.entries(TAB_NAME).map(
            ([name, value]) => (
              <TabBtn
                key={`${name}_${value}`}
                $active={currentTab === name}
                onClick={() =>
                  handleTabClick(name)
                }
              >
                {value}
              </TabBtn>
            ),
          )}
        </TabBtns>
        <ItemLayout>
          {posts.responseDto.map((post) => (
            <PostItem
              key={post.id + post.nickname}
              post={post}
              countInfo={`조회수 ${post.hit}`}
            />
          ))}
        </ItemLayout>
      </TabMenu>
    </>
  );
};

export default TabList;

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

const ItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
