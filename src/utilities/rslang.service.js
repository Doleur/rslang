import { httpRSLang, httpRSLangAuthorized } from './http-common';

export const getWords = (group, page) => {
  return httpRSLang.get(`/words?group=${group}&page=${page}`);
};

export const getAggregatedWords = ({
  userId,
  group,
  page,
  wordsPerPage,
  filter,
  token
}) => {
  return httpRSLangAuthorized({ token }).get(
    `/users/${userId}/aggregatedWords?group=${group}&page=${page}&filter=${filter}&wordsPerPage=${wordsPerPage}`
  );
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

export const createUserWord = ({ userId, wordId, token, params }) => {
  return httpRSLangAuthorized({ token }).post(
    `/users/${userId}/words/${wordId}`,
    params
  );
};

export const updateUserWord = ({ userId, wordId, token, params }) => {
  return httpRSLangAuthorized({ token }).put(
    `/users/${userId}/words/${wordId}`,
    params
  );
};
