import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

import { changeAnswer, getRandomArrAnswer } from '../game-audio-call/function';
import * as S from './styled';

const ButtonsAnswer = ({ arr, rightAnswer, updateGameWordsData }) => {
  const [colorButton, updateColorButton] = useState('outline-secondary');

  const arrAnswer = getRandomArrAnswer(arr, rightAnswer);
  const arrButtonsAnswer = arrAnswer.map((el, index) => {
    return (
      <S.ButtonAnswer
        key={index}
        variant={colorButton}
        onClick={(event) =>
          changeAnswer(
            event,
            rightAnswer,
            arr,
            updateGameWordsData,
            updateColorButton
          )
        }
      >
        {el}
      </S.ButtonAnswer>
    );
  });

  return (
    <Col className="d-flex justify-content-md-center">{arrButtonsAnswer}</Col>
  );
};
export default ButtonsAnswer;
