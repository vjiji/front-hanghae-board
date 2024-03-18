import axios from 'axios';
import { getCookie } from 'cookies/cookies';

export const baseURL = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

baseURL.interceptors.request.use((config) => {
  
  const token = getCookie('token');
  if (token) {
    config.headers['Authorization'] =
      `Bearer ${token}`;
  }
  //이거 살려서 로그인 회원가입 로그아웃 진행하고 기능 잘 되는지 확인!
  // config.headers['Authorization'] =
  //   `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmFuZHkwMTA4QG5hdmVyLmNvbSIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzEwOTYxODM0LCJpYXQiOjE3MTA2MDE4MzR9.9Xw7S-1pyCKLYj-kSW9lmIh3KqeHZ6AVtAAM5eRdfEE`;
  return config;

 
});
