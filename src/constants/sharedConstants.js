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
