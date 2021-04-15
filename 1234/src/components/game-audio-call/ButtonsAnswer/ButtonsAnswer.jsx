import React, { useEffect, useRef, useState } from 'react';
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

  // const buttonNumber = useRef(null);

  const handleKey = (event) => {
    switch (event.keyCode) {
      case 49:
      case 97:
        document.getElementById('1').click();
        break;
      case 50:
      case 98:
        document.getElementById('2').click();
        break;
      case 51:
      case 99:
        document.getElementById('3').click();
        break;
      case 52:
      case 100:
        document.getElementById('4').click();
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

  const arrButtonsAnswer = arrAnswer.map((answer, index) => {
    return (
      <ButtonAnswer
        key={keyForAnswer++}
        id={index + 1}
        // ref={buttonNumber}
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
