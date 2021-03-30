import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

import * as S from './styled';

const Header = () => {
  return (
    <S.NavbarWrapper>
      <Navbar.Brand href="/">Logo Here</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <S.AuthWrapper>
          <Button as="a" variant="outline-primary">
            Войти
          </Button>
          <Button as="a" href="/signup" variant="primary">
            Регистрация
          </Button>
        </S.AuthWrapper>
      </Navbar.Collapse>
    </S.NavbarWrapper>
  );
};

export default Header;
