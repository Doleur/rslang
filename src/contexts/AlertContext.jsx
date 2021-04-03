import React, { useContext, useState } from 'react';
import { node } from 'prop-types';

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [showAlert, updateShowAlert] = useState(false);
  const [alertType, updateAlertType] = useState(false);
  const [alertText, updateAlertText] = useState(false);

  const showAlertWithTimer = ({ text, type }) => {
    updateAlertText(text);
    updateAlertType(type);
    updateShowAlert(true);

    setTimeout(() => {
      updateShowAlert(false);
      updateAlertText('');
    }, 4000);
  };

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        updateShowAlert,
        alertType,
        updateAlertType,
        alertText,
        updateAlertText,
        showAlertWithTimer
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: node.isRequired
};
