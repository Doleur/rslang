import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

import ButtonAnswer from '../ButtonAnswer/ButtonAnswer';
import { getRandomArrAnswer } from '../function';

let keyForAnswer = 100;
const ButtonsAnswer = ({ wordsData, rightAnswer, isShowResult, showRight, addRightAnswer,rightAnswerObj, addWrongAnswer }) => {
  const [arrAnswer, updateArrAnswer] = useState(
    getRandomArrAnswer(wordsData, rightAnswer)
  );

  useEffect(() => {
    updateArrAnswer(getRandomArrAnswer(wordsData, rightAnswer));
  }, [wordsData, rightAnswer]);

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
export default ButtonsAnswer;
