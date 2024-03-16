export const POST_CATEGORY = {
  DEFAULT: '전체',
  SOCIETY: '사회',
  CULTURE: '문화',
  SPORTS: '스포츠',
  ENTERTAINMENT: '연예',
  IT: 'IT',
};

export const CATEGORY_VALUE = [];
export const CATEGORY_KEY = [];

for (let key in POST_CATEGORY) {
  CATEGORY_KEY.push(key);
  CATEGORY_VALUE.push(POST_CATEGORY[key]);
}

export const TAB_NAME = {
  new: '최신',
  hot: 'HOT 이슈',
};

export const POST_TAB_DISPLAY_NAME = [];
export const POST_TAB_KEY = [];

for (let key in TAB_NAME) {
  POST_TAB_KEY.push(key);
  POST_TAB_DISPLAY_NAME.push(TAB_NAME[key]);
}
