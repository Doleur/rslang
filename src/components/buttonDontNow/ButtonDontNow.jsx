import React, { useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

import { getRightAnswer } from '../game-audio-call/function';
import * as S from './styled';

const ButtonDontNow = () => {
  const [keyButton, updateValueButton] = useState(false);
  const valueButton = () => {
    return keyButton ? <ArrowRight size={30} /> : 'Не знаю';
  };
  // console.log(val)
  return (
    <S.ButtonAnswer
      variant="warning"
      onClick={(event) => getRightAnswer(event, updateValueButton)}
    >
      {valueButton()}
    </S.ButtonAnswer>
  );
};

export default ButtonDontNow;
