import axios from 'axios';
// import Cookies from 'js-cookie';

export const baseURL = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

baseURL.interceptors.request.use((config) => {
  // const token = Cookies.get('token');
  // if (token) {
  //   config.headers['Authorization'] =
  //     `Bearer ${token}`;
  // }
  config.headers['Authorization'] =
    `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTIzQHRlc3QuY29tIiwiYXV0aCI6IlJFUE9SVEVSIiwiZXhwIjoxNzQ2NTE3OTI1LCJpYXQiOjE3MTA1MTc5MjV9.PoWzaQWDF4EdMJ_SJFo28kAPRRvlq_EyILoOvI16UTE`;
  return config;
});
