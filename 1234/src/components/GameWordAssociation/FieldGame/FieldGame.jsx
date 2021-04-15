import React, { useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { array, func } from 'prop-types';

import { getWords } from '../../../utilities/rslang.service';
import AnswerEnglish from '../AnswerEnglish';
import ButtonDontKnow from './../ButtonDontKnow';
import ButtonsAnswer from './../ButtonsAnswer';
import * as S from './styled';

const FieldGame = ({
  arrRightAnswer,
  showStatistics,
  addRightAnswer,
  addWrongAnswer
}) => {
  const groupId = 1;
  const [wordsData, updateWordsData] = useState([]);
  const [rightAnswer, updateRightAnswer] = useState('');
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
    updateRightAnswer(gameWordsData[0].image);
    updateRightAnswerObj(gameWordsData[0]);
  }, [gameWordsData]);

  const showRight = () => {
    updateIsResultShown(true);
  };

  const resetAnswer = () => {
    if (gameWordsData.length > 1) {
      updateGameWordsData((prevArrValues) =>
        prevArrValues.filter((obj) => obj.image !== rightAnswer)
      );
      updateIsResultShown(false);
    } else {
      showStatistics();
    }
  };

  return (
    <>
      {wordsData[1] && gameWordsData[0] && (
        <Container>
          <Row>
            <Col className="d-flex justify-content-md-center">
              <S.Word>{rightAnswerObj.word}</S.Word>
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
  addRightAnswer: func,
  addWrongAnswer: func
};

export default FieldGame;
