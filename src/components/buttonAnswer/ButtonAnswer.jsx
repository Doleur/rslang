import React from 'react';
import { Col } from 'react-bootstrap';

import { changeAnswer, getRandomArrAnswer } from '../game-audio-call/function';
import * as S from './styled';

const ButtonsAnswer = ({ arr, rightAnswer, updateGameWordsData }) => {
  const arrAnswer = getRandomArrAnswer(arr, rightAnswer);
  const arrButtonsAnswer = arrAnswer.map((el, index) => {
    return (
      <S.ButtonAnswer
        key={index}
        variant="outline-secondary"
        onClick={(event) => changeAnswer(event, rightAnswer, arr, updateGameWordsData)}
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
