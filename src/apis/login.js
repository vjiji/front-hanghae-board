// 회원가입 요청

import { baseURL } from './instance';
import userAPI from './userAPI';

export const signup = async (
  email,
  password,
  nickname,
  adminToken = '',
) => {
  try {
    const response = await baseURL.post(
      '/api/user/signup',
      {
        email,
        password,
        nickname,
        adminToken,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Signup error', error.response);
    throw error;
  }
};

// 로그인 요청

export const login = async (email, password) => {
  try {
    const response = await baseURL.post(
      '/api/user/login',
      {
        email,
        password,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Login error', error.response);
    throw error;
  }
};

// 회원정보 조회
export const getUser = async () => {
  try {
    const response = await userAPI.getUserInfo();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Get user info error',
      error.response,
    );
    throw error;
  }
};
