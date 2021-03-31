import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import * as S from './styled';

const Header = () => {
  const history = useHistory();

  const handleLinkClick = (e, path) => {
    e.preventDefault();

    history.push(path);
  };

  return (
    <S.NavbarWrapper>
      <Navbar.Brand href="/" onClick={(event) => handleLinkClick(event, '/')}>
        Logo Here
      </Navbar.Brand>
      <Navbar.Brand
        href="/textbook"
        onClick={(event) => handleLinkClick(event, '/textbook')}
      >
        textbook
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <S.AuthWrapper>
          <Button
            as="a"
            onClick={(event) => handleLinkClick(event, '/login')}
            variant="outline-primary"
          >
            Войти
          </Button>
          <Button
            as="a"
            href="/signup"
            onClick={(event) => handleLinkClick(event, '/signup')}
            variant="primary"
          >
            Регистрация
          </Button>
        </S.AuthWrapper>
      </Navbar.Collapse>
    </S.NavbarWrapper>
  );
};

export default Header;
