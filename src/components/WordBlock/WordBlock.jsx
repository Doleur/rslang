import React from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { func, oneOf, shape, string } from 'prop-types';
import useSound from 'use-sound';

import { http } from '../../constants/constants';
import { useAuthentication } from '../../contexts/AuthenticationContext';
import { createUserWord, updateUserWord } from '../../utilities/rslang.service';
import * as S from './styled';

const WordBlock = ({ wordData, triggerRefetch, pageType }) => {
  const { currentUser } = useAuthentication();

  const {
    word,
    image,
    audio,
    textMeaning,
    textExample,
    transcription,
    wordTranslate,
    textMeaningTranslate,
    textExampleTranslate,
    userWord
  } = wordData;
  const wordId = currentUser ? wordData._id : wordData.id;
  const request = userWord ? updateUserWord : createUserWord;

  const callRequest = ({ params }) => {
    request({
      userId: currentUser.userId,
      token: currentUser.token,
      wordId,
      params
    })
      .then(() => triggerRefetch((prevValue) => !prevValue))
      .catch((error) => console.log(error));
  };

  const [play, { stop, isPlaying }] = useSound(http + audio);

  const handlePlayingSound = () => {
    isPlaying ? stop() : play();
  };

  return (
    <S.WordBlock>
      <S.WordImage src={http + image} />
      <S.WordDescription>
        <S.Word>
          <span>{word}</span>
          <span>{transcription}</span>
          <span>{wordTranslate}</span>
          {userWord && userWord.difficulty === 'hard' && (
            <S.HardWord>
              <S.StarIcon />
              Сложное слово
            </S.HardWord>
          )}
          <span>{<VolumeUpIcon onClick={handlePlayingSound} />}</span>
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
          {pageType === 'general' &&
            ((userWord && userWord.difficulty !== 'hard') || !userWord) && (
              <S.UserActionButton
                variant="warning"
                onClick={() => callRequest({ params: { difficulty: 'hard' } })}
              >
                Сложное
              </S.UserActionButton>
            )}
          {pageType === 'deleted' && (
            <S.UserActionButton
              className="w-auto"
              variant="primary"
              onClick={() =>
                callRequest({
                  request: updateUserWord,
                  params: { optional: {} }
                })
              }
            >
              Востановить
            </S.UserActionButton>
          )}
          {pageType === 'difficult' && (
            <S.UserActionButton
              className="font-weight-bold w-auto"
              variant="primary"
              onClick={() =>
                callRequest({
                  request: updateUserWord,
                  params: { difficulty: 'none' }
                })
              }
            >
              Убрать из сложных слов
            </S.UserActionButton>
          )}
          {pageType === 'general' && (
            <S.UserActionButton
              variant="danger"
              onClick={() =>
                callRequest({ params: { optional: { deleted: true } } })
              }
            >
              Удалить
            </S.UserActionButton>
          )}
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
    audioExample: string,
    textMeaning: string,
    textExample: string,
    transcription: string,
    wordTranslate: string,
    textMeaningTranslate: string,
    textExampleTranslate: string
  }),
  triggerRefetch: func.isRequired,
  pageType: oneOf(['general', 'deleted', 'difficult'])
};

WordBlock.defaultProps = {
  canRestoreWord: false,
  canUnmarkWordAsHard: false
};

export default WordBlock;
