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
    `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmFuZHkwMTA4QG5hdmVyLmNvbSIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzEwOTYxODM0LCJpYXQiOjE3MTA2MDE4MzR9.9Xw7S-1pyCKLYj-kSW9lmIh3KqeHZ6AVtAAM5eRdfEE`;
  return config;
});
