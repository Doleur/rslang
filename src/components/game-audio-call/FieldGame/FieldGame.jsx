import React, { useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { array, func } from 'prop-types';

import { getWords } from '../../../utilities/rslang.service';
import AnswerEnglish from '../AnswerEnglish';
import ButtonDontKnow from './../ButtonDontKnow';
import ButtonsAnswer from './../ButtonsAnswer';
import ButtonVolumeBig from './../ButtonVolumeBig';

const FieldGame = ({ arrRightAnswer, showStatistics, addRightAnswer, addWrongAnswer }) => {
  const groupId = 1;
  const [wordsData, updateWordsData] = useState([]);
  const [rightAnswer, updateRightAnswer] = useState('');
  const [audioPronunciation, updateAudioPronunciation] = useState('');
  const [gameWordsData, updateGameWordsData] = useState([]);
  const [isResultShown, updateIsResultShown] = useState(false);
  const [rightAnswerObj, updateRightAnswerObj] = useState({});

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
    updateRightAnswer(gameWordsData[0].wordTranslate);
    updateAudioPronunciation(gameWordsData[0].audio);
    updateRightAnswerObj(gameWordsData[0]);
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
            <Col className="d-flex justify-content-md-center">
            {isResultShown ? (
                <AnswerEnglish rightAnswerObj={rightAnswerObj} />
              ) : null}
            </Col>
          </Row>
          <Row>
            <ButtonsAnswer
              isShowResult={isResultShown}
              wordsData={wordsData}
              rightAnswer={rightAnswer}
              showRight={showRight}
              addRightAnswer={addRightAnswer}
              rightAnswerObj={rightAnswerObj}
              addWrongAnswer={addWrongAnswer}
            />
          </Row>
          <Row>
            <Col className="d-flex justify-content-md-center">
              <ButtonDontKnow
                showRight={showRight}
                isResultShown={isResultShown}
                resetAnswer={resetAnswer}
                rightAnswerObj={rightAnswerObj}
                addWrongAnswer={addWrongAnswer}
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

FieldGame.propTypes = {
  arrRightAnswer: array,
  showStatistics: func,
  addRightAnswer: func
};

export default FieldGame;
