import React, { useEffect, useState } from 'react';

import * as S from './styled';

const getBootstrapClass = (isRightAnswer) =>
  isRightAnswer ? 'success' : 'danger';

const ButtonAnswer = ({ children, isRightAnswer, isShowResult, showRight, addRightAnswer }) => {
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
      addRightAnswer(children);
    }
  };

  return (
    <S.ButtonAnswer variant={bootstrapClass} onClick={clickHandler}>
      {children}
    </S.ButtonAnswer>
  );
};

export default ButtonAnswer;
