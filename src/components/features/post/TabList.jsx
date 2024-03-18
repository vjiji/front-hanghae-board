import { useEffect, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import PostItem from './PostItem';
import { TAB_NAME } from 'constants/sharedConstants';
import postsAPI from 'apis/postsAPI';
import usePageStore from 'store/categoryStore';
import { throttle } from 'lodash';

const getPosts = async (
  tab,
  category,
  pageParam,
) => {
  const { data } = await postsAPI.getPostsByTab(
    tab,
    category,
    pageParam,
  );
  const { responseDto, hasNext } = data.data;
  return {
    result: responseDto,
    nextPage: pageParam + 1,
    isLast: !hasNext,
  };
};
const TabList = () => {
  const { pageInfo, setTab } = usePageStore();
  const {
    category: currentCategory,
    tab: currentTab,
  } = pageInfo;

  const handleTabClick = (tabName) => {
    setTab(tabName);
  };

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [
      `posts${currentCategory ? `_${currentCategory}` : ''}`,
      currentTab,
    ],
    queryFn: ({ pageParam = 1 }) =>
      getPosts(
        currentTab,
        currentCategory,
        pageParam,
      ),
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLast)
        return lastPage.nextPage;
      return undefined;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
  });

  const posts = useMemo(() => {
    let list = [];
    data &&
      data.pages.forEach(
        ({ result }) =>
          (list = [...list, ...result]),
      );
    return list;
  }, [data]);

  const handleScroll = throttle(() => {
    if (
      document.documentElement.scrollHeight -
        50 <=
      document.documentElement.scrollTop +
        document.documentElement.clientHeight
    ) {
      fetchNextPage();
    }
  }, 1000);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      handleScroll,
    );
    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      );
    };
  }, [handleScroll]);

  if (!data)
    return <LoadingText>....loading</LoadingText>;

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
        <button onClick={() => fetchNextPage()}>
          test
        </button>
        <ItemLayout>
          {posts.map((post) => (
            <PostItem
              key={post.id + post.nickname}
              post={post}
              countInfo={`조회수 ${post.hit}`}
            />
          ))}
        </ItemLayout>
        {isFetchingNextPage && (
          <LoadingText>....loading</LoadingText>
        )}
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

const LoadingText = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
