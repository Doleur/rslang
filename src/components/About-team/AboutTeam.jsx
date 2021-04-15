import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import alena from '../../assets/img/Alena.jpg';
import andrey from '../../assets/img/Andrey.jpg';
import dima from '../../assets/img/Dima.png';
import gitHubIcon from '../../assets/img/github.png';
import * as S from './styled';

const AboutTeam = () => {
  return (
    <Container>
      <h2>О команде</h2>
      <Row>
        <Col xs>
          <h3>
            <a href="https://github.com/doleur">Дима</a>
          </h3>
          <S.WrapperImage>
            <img src={dima} />
          </S.WrapperImage>
          <p>
            Тимлид команды. Занимался созданием Электронного учебника, игры
            "Спринт", меню и навигацией приложения.
          </p>
        </Col>
        <Col xs>
          <h3>
            <a href="https://github.com/AndryGinger">Андрей</a>
          </h3>
          <S.WrapperImage>
            <img src={andrey} />
          </S.WrapperImage>
          <p>
            Работал над бэкэндом, создавал в словаре функцмональность сложных и
            удаленных слов, а также авторизацию.
          </p>
        </Col>
        <Col xs>
          <h3>
            <a href="https://github.com/Alena-Zykava">Алёна</a>
          </h3>
          <S.WrapperImage>
            <img src={alena} />
          </S.WrapperImage>
          <p>
            Занималась созданием главной страницы, игр "Аудиовызов" и "Своя
            игра".
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutTeam;
