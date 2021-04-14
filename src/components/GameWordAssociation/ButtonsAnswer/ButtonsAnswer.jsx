import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { array, bool, func, object, string } from 'prop-types';

import { http } from '../../../constants/constants';
import ButtonAnswer from '../ButtonAnswer/ButtonAnswer';
import { getRandomArrAnswer } from '../function';
import * as S from './styled';

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
        <S.ImageAnswer src={http + answer} />
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
