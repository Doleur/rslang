import React from 'react';
import { shape, string } from 'prop-types';

import * as S from './styled';

const AnswerEnglish = ({ rightAnswerObj }) => {
  const { word, transcription } = rightAnswerObj;
  return (
    <div>
      <S.TextEnglish>{word}</S.TextEnglish>
      <S.Transcription>{transcription}</S.Transcription>
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
