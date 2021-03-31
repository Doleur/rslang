import React from 'react';
// import { withRouter } from 'react-router-dom';
import { shape, string } from 'prop-types';

import { http } from '../../constants/constants';
import * as S from './styled';

const WordBlock = ({ wordData }) => {
  const {
    word,
    image,
    textMeaning,
    textExample,
    transcription,
    wordTranslate,
    textMeaningTranslate,
    textExampleTranslate
  } = wordData;
  return (
    <S.WordBlock>
      <S.WordImage src={http + image} />
      <div>
        <div>
          <span>{word} </span>
          <span>{transcription} </span>
          <span>{wordTranslate}</span>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: textMeaning }} />
          <div dangerouslySetInnerHTML={{ __html: textExample }} />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: textMeaningTranslate }} />
          <div dangerouslySetInnerHTML={{ __html: textExampleTranslate }} />
        </div>
      </div>
    </S.WordBlock>
  );
};

WordBlock.propTypes = {
  wordData: shape({
    id: string,
    word: string,
    image: string,
    audio: string,
    audioMeaning: string,
    audioExample: string,
    textMeaning: string,
    textExample: string,
    transcription: string,
    wordTranslate: string,
    textMeaningTranslate: string,
    textExampleTranslate: string
  })
};

export default WordBlock;
