import React from 'react';
import { shape, string } from 'prop-types';

import { http } from '../../../constants/constants';
import * as S from './styled';

const AnswerEnglish = ({ rightAnswerObj }) => {
  const { word, transcription, image } = rightAnswerObj;
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <S.TextEnglish>{word}</S.TextEnglish>
        <S.Transcription>{transcription}</S.Transcription>
      </div>
      <S.ImageWrapper>
        <img src={http + image} />
      </S.ImageWrapper>
    </div>
  );
};

AnswerEnglish.propTypes = {
  rightAnswerObj: shape({
    word: string,
    transcription: string
  })
};

export default AnswerEnglish;
