import React, { useContext, useEffect, useState } from 'react';
import { node } from 'prop-types';

import { refreshToken } from '../utilities/rslang.service';

const AuthenticationContext = React.createContext();

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export const AuthenticationProvider = ({ children }) => {
  const [currentUser, updateCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  );

  const setCurrentUserData = ({ data }) => {
    localStorage.setItem('currentUser', JSON.stringify(data));
    updateCurrentUser(data);
  };

  useEffect(() => {
    if (currentUser) {
      refreshToken({
        userId: currentUser.userId,
        token: currentUser.refreshToken
      }).then((response) => {
        const { token, refreshToken } = response.data;

        setCurrentUserData({
          data: { ...(currentUser || {}), token, refreshToken }
        });
      });
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        currentUser,
        updateCurrentUser,
        setCurrentUserData
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: node.isRequired
};
