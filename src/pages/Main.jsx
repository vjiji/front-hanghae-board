import { baseURL } from 'apis/instance';
// import axios from 'axios';
import React, { useEffect } from 'react';

const Main = () => {
  console.log(
    process.env.REACT_APP_SERVER_BASE_URL,
  );
  const test = async () => {
    // const data = await axios.post(
    //   'http://3.34.179.179:8080',
    //   {
    //     email: 'jaesung2@example.com',
    //     password: 'Jaesung1235!',
    //     nickname: 'jaesung2',
    //     adminToken:
    //       'AAABnvxRVklrnYxKZ0aHgTBcXukeZygoC',
    //   },
    // );
    const data = await baseURL.post(
      '/user/signup',
      {
        email: 'jaesung2@example.com',
        password: 'Jaesung1235!',
        nickname: 'jaesung2',
        adminToken:
          'AAABnvxRVklrnYxKZ0aHgTBcXukeZygoC',
      },
    );
    console.log(data);
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <div>
      <h1>건들건들</h1>
    </div>
  );
};

export default Main;
