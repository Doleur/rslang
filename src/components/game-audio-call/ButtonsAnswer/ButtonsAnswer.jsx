import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { array, bool, func, object, string } from 'prop-types';

import ButtonAnswer from '../ButtonAnswer/ButtonAnswer';
import { getRandomArrAnswer } from '../GetRandomArrAnswer';

let keyForAnswer = 100;
const ButtonsAnswer = ({
  wordsData,
  rightAnswer,
  isShowResult,
  showRight,
  addRightAnswer,
  rightAnswerObj,
  addWrongAnswer
}) => {
  const [arrAnswer, updateArrAnswer] = useState(
    getRandomArrAnswer(wordsData, rightAnswer)
  );

  const handleKey = (event) => {
    switch (event.keyCode) {
      case 49:
      case 97:
      case 50:
      case 98:
      case 51:
      case 99:
      case 52:
      case 100:
        showRight();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    updateArrAnswer(getRandomArrAnswer(wordsData, rightAnswer));
  }, [wordsData, rightAnswer]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  });

  const arrButtonsAnswer = arrAnswer.map((answer) => {
    return (
      <ButtonAnswer
        key={keyForAnswer++}
        isRightAnswer={answer === rightAnswer}
        isShowResult={isShowResult}
        showRight={showRight}
        addRightAnswer={addRightAnswer}
        rightAnswerObj={rightAnswerObj}
        addWrongAnswer={addWrongAnswer}
      >
        {answer}
      </ButtonAnswer>
    );
  });

  return (
    <Col className="d-flex justify-content-md-center">{arrButtonsAnswer}</Col>
  );
};

ButtonsAnswer.propTypes = {
  wordsData: array,
  rightAnswer: string,
  isShowResult: bool,
  showRight: func,
  addRightAnswer: func,
  rightAnswerObj: object,
  addWrongAnswer: func
};

export default ButtonsAnswer;
