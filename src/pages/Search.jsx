import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import postsAPI from 'apis/postsAPI';
import PostItem from 'components/features/post/PostItem';
import { useParams } from 'react-router';

const getPostsSearch = async (searchTerm) => {
  const { data } =
    await postsAPI.getPostsSearch(searchTerm);
  return data.data.data;
};

const Search = () => {
  const { searchTerm } = useParams();
  const { data: posts } = useQuery({
    queryKey: ['postsSearch', searchTerm],
    queryFn: () => getPostsSearch(searchTerm),
    enabled: !!searchTerm,
  });
  if (!posts) return null;
  if (posts.length === 0) {
    return (
      <SearchResults>
        검색 결과가 없습니다!
      </SearchResults>
    );
  }
  return (
    <div>
      {posts.map((post) => (
        <PostItem
          key={post.id + post.nickname}
          post={post}
        />
      ))}
    </div>
  );
};

export default Search;

const SearchResults = styled.div`
  width: 300px;
  display: flex;
  font-size: 30px;
  margin: 200px auto;
`;
