import React, { useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

import { getWords } from '../../utilities/rslang.service';
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
    if (!wordsData[1] || !gameWordsData[1]) return;
    const newGameWordsData = [...wordsData].sort(() => Math.random() - 0.5);
    updateGameWordsData(newGameWordsData);
    console.log(newGameWordsData);
    updateTranslate(gameWordsData[gameWordsData.length - 1].wordTranslate);
    updateAudioPronunciation(gameWordsData[gameWordsData.length - 1].audio);
    console.log(gameWordsData.length);
    //gameWordsData.shift();
    // console.log(getRandomArrAnswer(gameWordsData));
  }, [gameWordsData, wordsData]);

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
            <ButtonsAnswer arr={gameWordsData} rightAnswer={wordTranslate} />
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
      )}
    </>
  );
};

export default AudioCall;
