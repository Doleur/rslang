import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { AlertProvider } from './contexts/AlertContext';
import { AuthenticationProvider } from './contexts/AuthenticationContext';

import './assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <AlertProvider>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </AlertProvider>,
  document.querySelector('#root')
);
