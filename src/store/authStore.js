import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // 초기 상태
  userId: null,
  isReporter: null,
  email: null,
  nickname: null,
  // 로그인 상태
  login: (
    userId,
    isReporter,
    email,
    nickname,
  ) => {
    console.log(userId, 'redux');
    set(() => ({
      userId,
      isReporter,
      email,
      nickname,
    }));
  },
  // 로그아웃 상태
  logout: () => {
    set(() => ({
      userId: null,
      isReporter: null,
      email: null,
      nickname: null,
    }));
  },
}));

export default useAuthStore;
