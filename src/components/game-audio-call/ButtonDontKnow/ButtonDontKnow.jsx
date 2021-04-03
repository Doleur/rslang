import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

import * as S from './styled';

const ButtonDontNow = ({showRight, isResultShown, resetAnswer}) => {

  const clickHandler = () => {
    if (!isResultShown) {
      showRight();
    } else {
      resetAnswer();
    }
  }

  return (
    <S.ButtonAnswer
      variant="warning"
      onClick={clickHandler}
    >
      {isResultShown
        ? <ArrowRight size={30} />
        : 'Не знаю'}
    </S.ButtonAnswer>
  );
};

export default ButtonDontNow;
