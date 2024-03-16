import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(
    useLocation().search,
  );
}

const SearchResultsPage = () => {
  const query = useQuery();
  const searchTerm = query.get('query');

  // 여기서 searchTerm을 사용하여 검색 로직쓰기

  //api 검색 호출로 검색 결과를 가져오고,
  // 결과를 화면에 표시해야함

  return (
    <div>
      <h1>검색 결과</h1>
      <p>검색어: {searchTerm}</p>
      {/* 검색 결과*/}
    </div>
  );
};

export default SearchResultsPage;
