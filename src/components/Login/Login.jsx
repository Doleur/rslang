import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { useAlert } from '../../contexts/AlertContext';
import { useAuthentication } from '../../contexts/AuthenticationContext';
import { signIn } from '../../utilities/rslang.service';
import * as S from './styled';

const Login = () => {
  const history = useHistory();
  const { showAlertWithTimer } = useAlert();
  const { updateCurrentUser } = useAuthentication();
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [showPassword, updateShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn({ params: { name, email, password } })
      .then((response) => {
        const { token, name, userId } = response.data;

        localStorage.setItem(
          'currentUser',
          JSON.stringify({ token, name, userId })
        );
        updateCurrentUser({ token, name, userId });

        history.push('/');

        showAlertWithTimer({
          type: 'success',
          text: 'Вы успешно вошли в систему!'
        });
      })
      .catch(() => {
        showAlertWithTimer({
          type: 'error',
          text: 'Неверный email или пароль.'
        });
      });
  };

  return (
    <S.Wrapper>
      <Row className="h-100">
        <Col sm={8}></Col>
        <S.RightSection sm={4}>
          <S.Form onSubmit={handleSubmit}>
            <S.FormInner>
              <h4>Войти</h4>
              <S.InputGroup>
                <S.Input
                  autoComplete="email"
                  id="user_email"
                  InputLabelProps={{ shrink: true }}
                  label="Email"
                  onChange={(event) => updateEmail(event.target.value)}
                  required
                  type="email"
                />{' '}
              </S.InputGroup>
              <S.InputGroup>
                <S.Input
                  autoComplete="password"
                  id="user_password"
                  InputLabelProps={{ shrink: true }}
                  label="Пароль"
                  onChange={(event) => updatePassword(event.target.value)}
                  required
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => updateShowPassword(!showPassword)}
                          onMouseDown={() => updateShowPassword(!showPassword)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </S.InputGroup>
              <S.LoginButton type="submit" variant="primary" size="lg">
                Войти
              </S.LoginButton>
              <S.RedirectSection>
                <S.Text>Нет аккаунта?</S.Text>
                <Link to="/signup">{' Регистрация'}</Link>
              </S.RedirectSection>
            </S.FormInner>
          </S.Form>
        </S.RightSection>
      </Row>
    </S.Wrapper>
  );
};

export default Login;
