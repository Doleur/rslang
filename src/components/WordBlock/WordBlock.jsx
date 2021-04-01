import React from 'react';
import { func, shape, string } from 'prop-types';

import { http } from '../../constants/constants';
import { useAuthentication } from '../../contexts/AuthenticationContext';
import { createUserWord } from '../../utilities/rslang.service';
import * as S from './styled';

const WordBlock = ({ wordData, triggerRefetch }) => {
  const { currentUser } = useAuthentication();
  const {
    word,
    image,
    textMeaning,
    textExample,
    transcription,
    wordTranslate,
    textMeaningTranslate,
    textExampleTranslate,
    userWord
  } = wordData;
  const wordId = currentUser ? wordData._id : wordData.id;

  const markWordAsHard = () => {
    createUserWord({
      userId: currentUser.userId,
      token: currentUser.token,
      wordId,
      params: { difficulty: 'hard' }
    })
      .then(() => triggerRefetch((prevValue) => !prevValue))
      .catch((error) => console.log(error));
  };

  return (
    <S.WordBlock>
      <S.WordImage src={http + image} />
      <S.WordDescription>
        <S.Word>
          <span>{word} </span>
          <span>{transcription} </span>
          <span>{wordTranslate}</span>
          {userWord && (
            <S.HardWord>
              <S.StarIcon />
              Сложное слово
            </S.HardWord>
          )}
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
          {!userWord && (
            <S.UserActionButton variant="warning" onClick={markWordAsHard}>
              Сложное
            </S.UserActionButton>
          )}
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
  }),
  triggerRefetch: func.isRequired
};

export default WordBlock;
