import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { useAlert } from '../../contexts/AlertContext';
import { signUp } from '../../utilities/rslang.service';
import * as S from './styled';

const SignUp = () => {
  const history = useHistory();
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [showPassword, updateShowPassword] = useState(false);
  const [errors, updateErrors] = useState({});
  const { showAlertWithTimer } = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsHash = {};

    if (password.length < 8) {
      errorsHash.password = 'Пароль должен содержать не менее 8 символов.';
    }
    if (name.length < 1) {
      errorsHash.name = 'Обязательно.';
    }
    if (email.length < 1) {
      errorsHash.email = 'Обязательно.';
    } else if (!email.match(/^.+@.+\..+$/)) {
      errorsHash.email = 'Укажите корректный адрес электронной почты.';
    }

    if (Object.keys(errorsHash).length) {
      updateErrors(errorsHash);
      return;
    } else if (Object.keys(errors).length) {
      updateErrors({});
    }

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    signUp({ params: { name, email, password } })
      .then(() => {
        showAlertWithTimer({
          type: 'success',
          text: 'Пользователь был успешно зарегистрирован.'
        });

        history.push('/login');
      })
      .catch(() => {
        showAlertWithTimer({
          type: 'error',
          text: 'Произошла ошибка. Попробуйте еще раз!'
        });
      });
  };

  return (
    <S.Wrapper>
      <Row className="h-100">
        <Col sm={8}>sm=8</Col>
        <S.RightSection sm={4}>
          <S.Form onSubmit={handleSubmit}>
            <S.FormInner>
              <h4>Регистрация</h4>
              <S.InputGroup>
                <S.Input
                  autoComplete="name"
                  id="user_name"
                  InputLabelProps={{ shrink: true }}
                  label="Имя"
                  onChange={(event) => updateName(event.target.value)}
                  required
                  type="name"
                />
                {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
              </S.InputGroup>
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
                {errors.email && (
                  <S.ErrorMessage>{errors.email}</S.ErrorMessage>
                )}
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
                {errors.password && (
                  <S.ErrorMessage>{errors.password}</S.ErrorMessage>
                )}
              </S.InputGroup>
              <S.SignUpButton type="submit" variant="primary" size="lg">
                Регистрация
              </S.SignUpButton>
              <S.RedirectSection>
                <S.Text>Уже есть аккаунт?</S.Text>
                <Link to="/login">{' Войти'}</Link>
              </S.RedirectSection>
            </S.FormInner>
          </S.Form>
        </S.RightSection>
      </Row>
    </S.Wrapper>
  );
};

export default SignUp;
