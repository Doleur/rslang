import { httpRSLang, httpRSLangAuthorized } from './http-common';

export const getWords = (group, page) => {
  return httpRSLang.get(`/words?group=${group}&page=${page}`);
};

export const getWordById = (id) => {
  return httpRSLang.get(`/words/${id}`);
};

export const signUp = ({ params }) => {
  return httpRSLang.post('/users', params);
};

export const signIn = ({ params }) => {
  return httpRSLang.post('/signin', params);
};

export const refreshToken = ({ userId, token }) => {
  return httpRSLangAuthorized({ token }).get(`/users/${userId}/tokens`);
};
