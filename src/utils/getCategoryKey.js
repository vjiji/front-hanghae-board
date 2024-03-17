import { POST_CATEGORY } from 'constants/sharedConstants';

export const getCategoryKey = (categoryValue) =>
  Object.entries(POST_CATEGORY).filter(
    ([_, value]) => value === categoryValue,
  )[0][0];
