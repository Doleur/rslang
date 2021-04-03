import React, { useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

import { getWords } from '../../../utilities/rslang.service';
import ButtonDontNow from './../ButtonDontKnow';
import ButtonsAnswer from './../ButtonsAnswer';
import ButtonVolumeBig from './../ButtonVolumeBig';

const FieldGame = ({arrRightAnswer, showStatistics, addRightAnswer}) => {
  const groupId = 1;
  const [wordsData, updateWordsData] = useState([]);
  const [rightAnswer, updateTranslate] = useState('');
  const [audioPronunciation, updateAudioPronunciation] = useState('');
  const [gameWordsData, updateGameWordsData] = useState([]);
  const [isResultShown, updateIsResultShown] = useState(false);


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
    console.log(gameWordsData);
    updateTranslate(gameWordsData[gameWordsData.length - 1].wordTranslate);
    updateAudioPronunciation(gameWordsData[gameWordsData.length - 1].audio);
  }, [gameWordsData]);

  const showRight = () => {
    updateIsResultShown(true);
  };

  const resetAnswer = () => {
    if (gameWordsData.length > 1) {
      updateGameWordsData((prevArrValues) =>
        prevArrValues.filter((obj) => obj.wordTranslate !== rightAnswer)
      );
      updateIsResultShown(false);
    } else {
      showStatistics();
    }
  };

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
              isShowResult={isResultShown}
              wordsData={wordsData}
              rightAnswer={rightAnswer}
              showRight={showRight}
              addRightAnswer={addRightAnswer}
            />
          </Row>
          <Row>
            <Col className="d-flex justify-content-md-center">
              <ButtonDontNow
                showRight={showRight}
                isResultShown={isResultShown}
                resetAnswer={resetAnswer}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProgressBar
                variant="success"
                now={arrRightAnswer.length * 5}
                label={`${arrRightAnswer.length * 5}%`}
              ></ProgressBar>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default FieldGame;

