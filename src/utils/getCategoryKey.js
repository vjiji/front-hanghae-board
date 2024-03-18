import { POST_CATEGORY } from 'constants/sharedConstants';

export const getCategoryKey = (categoryValue) =>
  Object.entries(POST_CATEGORY).filter(
    ([, value]) => value === categoryValue,
  )[0][0];
