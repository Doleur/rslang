import React, { useEffect, useState } from 'react';
import { bool, func, number, object, string } from 'prop-types';

import * as S from './styled';

const getBootstrapClass = (isRightAnswer) =>
  isRightAnswer ? 'success' : 'danger';

const ButtonAnswer = ({
  children,
  isRightAnswer,
  isShowResult,
  showRight,
  addRightAnswer,
  rightAnswerObj,
  addWrongAnswer,
  id
}) => {
  const [bootstrapClass, updateBootstrapClass] = useState('outline-secondary');

  useEffect(() => {
    if (isShowResult) {
      updateBootstrapClass(getBootstrapClass(isRightAnswer));
    }
  }, [isShowResult, isRightAnswer]);

  const clickHandler = () => {
    updateBootstrapClass(getBootstrapClass(isRightAnswer));
    //console.log(getBootstrapClass(isRightAnswer));
    showRight();
    if (isRightAnswer) {
      addRightAnswer(rightAnswerObj);
    } else {
      addWrongAnswer(rightAnswerObj);
    }
  };

  return (
    <S.ButtonAnswer
      variant={bootstrapClass}
      onClick={clickHandler}
      disabled={isShowResult}
      id={id}
    >
      {id}) {children}
    </S.ButtonAnswer>
  );
};

ButtonAnswer.propTypes = {
  children: string,
  isRightAnswer: bool,
  isShowResult: bool,
  showRight: func,
  addRightAnswer: func,
  rightAnswerObj: object,
  addWrongAnswer: func,
  id: number
};

export default ButtonAnswer;
