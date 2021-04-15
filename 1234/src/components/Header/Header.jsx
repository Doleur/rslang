import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useAuthentication } from '../../contexts/AuthenticationContext';
import * as S from './styled';

const Header = () => {
  const history = useHistory();
  const { currentUser, updateCurrentUser } = useAuthentication();

  const handleLinkClick = (e, path) => {
    e.preventDefault();

    history.push(path);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem('currentUser');
    updateCurrentUser(undefined);

    history.push('/rslang/login');
  };

  return (
    <S.NavbarWrapper>
      <Navbar.Brand href="/rslang/" onClick={(event) => handleLinkClick(event, '/rslang/')}>
        Logo Here
      </Navbar.Brand>
      <S.AuthWrapper>
        {currentUser && (
          <>
            <S.User>{currentUser.name}</S.User>
            <Button
              as="a"
              onClick={(event) => handleLogout(event)}
              variant="outline-primary"
            >
              Выйти
            </Button>
          </>
        )}
        {!currentUser && (
          <>
            <Button
              as="a"
              onClick={(event) => handleLinkClick(event, '/rslang/login')}
              variant="outline-primary"
            >
              Войти
            </Button>
            <Button
              as="a"
              href="/rslang/signup"
              onClick={(event) => handleLinkClick(event, '/rslang/signup')}
              variant="primary"
            >
              Регистрация
            </Button>
          </>
        )}
      </S.AuthWrapper>
    </S.NavbarWrapper>
  );
};

export default Header;
