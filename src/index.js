import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { AlertProvider } from './contexts/AlertContext';

import './assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <AlertProvider>
    <App />
  </AlertProvider>,
  document.querySelector('#root')
);
