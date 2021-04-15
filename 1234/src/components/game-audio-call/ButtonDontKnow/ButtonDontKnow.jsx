import React, { useEffect } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { bool, func, object } from 'prop-types';

import * as S from './styled';

const ButtonDontKnow = ({
  showRight,
  isResultShown,
  resetAnswer,
  rightAnswerObj,
  addWrongAnswer
}) => {
  const handleKey = (event) => {
    if (event.keyCode === 13) {
      clickHandler();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  });

  const clickHandler = () => {
    if (!isResultShown) {
      showRight();
      addWrongAnswer(rightAnswerObj);
    } else {
      resetAnswer();
    }
  };

  return (
    <S.ButtonAnswer variant="warning" onClick={clickHandler}>
      {isResultShown ? <ArrowRight size={30} /> : 'Не знаю'}
    </S.ButtonAnswer>
  );
};

ButtonDontKnow.propTypes = {
  showRight: func,
  isResultShown: bool,
  resetAnswer: func,
  rightAnswerObj: object,
  addWrongAnswer: func
};

export default ButtonDontKnow;
