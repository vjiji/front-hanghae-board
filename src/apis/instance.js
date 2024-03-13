import axios from 'axios';
import Cookies from 'js-cookie';

export const baseURL = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

baseURL.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers['Authorization'] =
      `Bearer ${token}`;
  }
  return config;
});
