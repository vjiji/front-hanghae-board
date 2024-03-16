import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.36.56.100:8080',
});

// 회원가입 요청

export const signup = async (
  email,
  password,
  nickname,
  adminToken = '',
) => {
  try {
    const response = await api.post(
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
    const response = await api.post(
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
export const getUserInfo = async (token) => {
  try {
    const response = await api.get('/api/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Get user info error',
      error.response,
    );
    throw error;
  }
};
