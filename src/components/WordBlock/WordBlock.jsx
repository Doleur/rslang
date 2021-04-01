import React from 'react';
import { shape, string } from 'prop-types';

import { http } from '../../constants/constants';
import { useAuthentication } from '../../contexts/AuthenticationContext';
import * as S from './styled';

const WordBlock = ({ wordData }) => {
  const { currentUser } = useAuthentication();
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
      <S.WordDescription>
        <S.Word>
          <span>{word} </span>
          <span>{transcription} </span>
          <span>{wordTranslate}</span>
        </S.Word>
        <S.TextMeaning>
          <div dangerouslySetInnerHTML={{ __html: textMeaning }} />
          <div dangerouslySetInnerHTML={{ __html: textMeaningTranslate }} />
        </S.TextMeaning>
        <S.TextExample>
          <div dangerouslySetInnerHTML={{ __html: textExample }} />
          <div dangerouslySetInnerHTML={{ __html: textExampleTranslate }} />
        </S.TextExample>
      </S.WordDescription>
      {currentUser && (
        <S.UserActions>
          <S.UserActionButton variant="warning">Сложное</S.UserActionButton>
          <S.UserActionButton variant="danger">Удалить</S.UserActionButton>
        </S.UserActions>
      )}
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
