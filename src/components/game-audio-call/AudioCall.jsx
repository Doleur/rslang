import React, { useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

import { getWords } from '../../utilities/rslang.service';
import ButtonDontNow from '../buttonDontNow';
import ButtonsAnswer from './../buttonAnswer';
import ButtonVolumeBig from './../buttonVolumeBig';
import * as S from './styled';

const AudioCall = () => {
  const now = 20;
  const groupId = 1;
  const [wordsData, updateWordsData] = useState([]);
  const [wordTranslate, updateTranslate] = useState('');
  const [audioPronunciation, updateAudioPronunciation] = useState('');
  const [gameWordsData, updateGameWordsData] = useState([]);

  // const gameWordsData = [...wordsData].sort(() => Math.random() - 0.5);

  useEffect(() => {
    getWords(groupId, 0).then((response) => {
      updateWordsData(response.data);
    });
  }, []);

  useEffect(() => {
    const newGameWordsData = [...wordsData].sort(() => Math.random() - 0.5);
    updateGameWordsData(newGameWordsData);
  }, [wordsData]);

  useEffect(() => {
    if (!gameWordsData.length) return;
    updateTranslate(gameWordsData[gameWordsData.length - 1].wordTranslate);
    updateAudioPronunciation(gameWordsData[gameWordsData.length - 1].audio);
  }, [gameWordsData]);

  return (
    <>
      {wordsData[1] && (
        <Container>
          <Row>
            <Col className="d-flex justify-content-md-center">
              <ButtonVolumeBig audio={audioPronunciation} />
            </Col>
          </Row>
          <Row>
            <ButtonsAnswer
              arr={gameWordsData}
              rightAnswer={wordTranslate}
              updateGameWordsData={updateGameWordsData}
            />
          </Row>
          <Row>
            <Col className="d-flex justify-content-md-center">
              <ButtonDontNow />
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
      )}
    </>
  );
};

export default AudioCall;
