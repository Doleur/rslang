import axios from 'axios';

export const httpRSLang = axios.create({
  baseURL: 'https://react-rslang-be.herokuapp.com',
  headers: {
    'Content-type': 'application/json'
  }
});

export const httpRSLangAuthorized = ({ token }) =>
  axios.create({
    baseURL: 'https://react-rslang-be.herokuapp.com',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
