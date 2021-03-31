import React, { useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';
import useSound from 'use-sound';

import { getWords } from '../../utilities/rslang.service';
import * as S from './styled';

const AudioCall = () => {
  const now = 20;
  const groupId = 1;
  const [wordsData, updateWordsData] = useState([]);
  const [wordTranslate, updateWordSound] = useState('');

  useEffect(() => {
    getWords(groupId, 0).then((response) => {
      updateWordsData(response.data);
    });
  }, []);

  useEffect(() => {
    const wordId = Math.floor(Math.random() * wordsData.length);
    updateWordSound(wordsData[wordId]?.wordTranslate);
  }, [wordsData]);

  // const [ play ] = useSound(soundTouch)

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
            <S.ButtonAnswer variant="outline-secondary">{wordTranslate}</S.ButtonAnswer>
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
