import create from 'zustand';

const useAuthStore = create((set) => ({
  //초기 상태
  isLogIn: false,
  token: null,
  //로그인 상태 설정
  login: (token) =>
    set(() => ({ isLogIn: true, token })),
  //로그아웃
  logout: () =>
    set(() => ({ isLogIn: false, token: null })),
}));

export default useAuthStore;
