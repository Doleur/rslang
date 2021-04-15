import React, { useEffect, useState } from 'react';
import { any, bool, func, object } from 'prop-types';

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
      {children}
    </S.ButtonAnswer>
  );
};

ButtonAnswer.propTypes = {
  children: any,
  isRightAnswer: bool,
  isShowResult: bool,
  showRight: func,
  addRightAnswer: func,
  rightAnswerObj: object,
  addWrongAnswer: func
};

export default ButtonAnswer;
