import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';

import * as S from './styled';

const AudioCall = () => {
  const now = 20;
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-md-center">
            <S.ButtonVolume size="lg" variant="outline-secondary">
              <VolumeUp size={96} />
            </S.ButtonVolume>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-md-center">
            <S.ButtonAnswer variant="outline-secondary"></S.ButtonAnswer>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-md-center">
            <S.ButtonAnswer variant="warning">Не знаю</S.ButtonAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar
              variant="success"
              now={now}
              label={`${now}%`}
            ></ProgressBar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AudioCall;
