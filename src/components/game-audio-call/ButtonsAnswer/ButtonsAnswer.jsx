import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

import ButtonAnswer from '../ButtonAnwer/ButtonAnswer';
import { getRandomArrAnswer } from '../function';

let keyForAnswer = 100;
const ButtonsAnswer = ({ wordsData, rightAnswer, isShowResult, showRight, addRightAnswer }) => {
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
