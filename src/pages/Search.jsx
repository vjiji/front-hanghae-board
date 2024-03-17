// import { useNavigate } from "react-router";
import { useQuery } from '@tanstack/react-query';
import postsAPI from 'apis/postsAPI';
import { useParams } from 'react-router';

const getPostsSearch = async (searchTerm) => {
  const { data } =
    await postsAPI.getPostsSearch(searchTerm);
  console.log(data);
  return data.data;
};

const Search = () => {
  const { searchTerm } = useParams();
  // const navigate = useNavigate();
  const { data: posts } = useQuery({
    queryKey: ['postsSearch', searchTerm],
    queryFn: () => getPostsSearch(searchTerm),
    enabled: !!searchTerm,
  });
  if (!posts) return null;
  return <div></div>;
  //여기서 map사용해서 postltem들을 보여준다!
};

export default Search;
