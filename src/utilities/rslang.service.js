import { httpRSLang } from './http-common';

export const getWords = (group, page) => {
  return httpRSLang.get(`/words?group=${group}&page=${page}`);
};

export const getWordById = (id) => {
  return httpRSLang.get(`/words/${id}`);
};
