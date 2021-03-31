import React from 'react';
import { Navbar } from 'react-bootstrap';

import * as S from './styled';

const Header = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">Logo Here</Navbar.Brand>
      <Navbar.Brand href="/textbook">textbook</Navbar.Brand>
      <Navbar.Brand href="/game-audio-call">Audio call</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <S.SignInButton variant="outline-primary">Войти</S.SignInButton>
        <S.AuthButton variant="primary">Регистрация</S.AuthButton>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
