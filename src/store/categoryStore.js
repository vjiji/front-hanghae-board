import { create } from 'zustand';

const usePageStore = create((set) => ({
  pageInfo: {
    category: localStorage.getItem('category'),
    tab: 'new',
  },
  setCategory: (category) =>
    set(
      (state) =>
        (state.pageInfo = {
          ...state.pageInfo,
          category: category,
        }),
    ),
  setTab: (tab) =>
    set(
      (state) =>
        (state.pageInfo = {
          ...state.pageInfo,
          tab: tab,
        }),
    ),
}));

export default usePageStore;
