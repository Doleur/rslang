import React, { useContext, useState } from 'react';
import { node } from 'prop-types';

const AuthenticationContext = React.createContext();

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export const AuthenticationProvider = ({ children }) => {
  const [currentUser, updateCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  );

  return (
    <AuthenticationContext.Provider
      value={{
        currentUser,
        updateCurrentUser
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: node.isRequired
};
