import React from 'react';

const Main = () => {
  console.log(
    process.env.REACT_APP_SERVER_BASE_URL,
  );
  return (
    <div>
      <h1>건들건들</h1>
    </div>
  );
};

export default Main;
