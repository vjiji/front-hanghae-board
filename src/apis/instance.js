import axios from 'axios';
// import Cookies from 'js-cookie';

export const baseURL = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: { 'Content-Type': `application/json` },
});

baseURL.interceptors.request.use((config) => {
  // const token = Cookies.get('token');
  // if (token) {
  //   config.headers['Authorization'] =
  //     `Bearer ${token}`;
  // }
  config.headers['Authorization'] =
    `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTIzQHRlc3QuY29tIiwiYXV0aCI6IlJFUE9SVEVSIiwiZXhwIjoxNzQ2MzgxMDI5LCJpYXQiOjE3MTAzODEwMjl9.6wE8pYMXOFIQUAlAs602Y_FgjnOsLYUPrwfJadIyskQ`;
  return config;
});
