import { create } from 'zustand';
import {
  setCookie,
  getCookie,
  removeCookie,
} from '../cookies/cookies';

const useAuthStore = create((set) => ({
  // 초기 상태
  isLogIn: getCookie('token') ? true : false,
  token: getCookie('token'),
  userId: null,
  isReporter: null,
  email: null,
  nickname: null,
  // 로그인 상태
  login: (
    token,
    userId,
    isReporter,
    email,
    nickname,
  ) => {
    setCookie('token', token, {});
    set(() => ({
      userId,
      isReporter,
      email,
      nickname,
    }));
  },
  // 로그아웃 상태
  logout: () => {
    removeCookie('token', {});
    set(() => ({
      userId: null,
      isReporter: null,
      email: null,
      nickname: null,
    }));
  },
}));

export default useAuthStore;
