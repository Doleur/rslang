import React from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { bool, func, shape, string } from 'prop-types';
import useSound from 'use-sound';

import { http } from '../../constants/constants';
import { useAuthentication } from '../../contexts/AuthenticationContext';
import { createUserWord, updateUserWord } from '../../utilities/rslang.service';
import * as S from './styled';

const WordBlock = ({ wordData, triggerRefetch, canRestoreWord }) => {
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

  const deleteWord = () => {
    const request = userWord ? updateUserWord : createUserWord;

    request({
      userId: currentUser.userId,
      token: currentUser.token,
      wordId,
      params: { optional: { deleted: true } }
    })
      .then(() => triggerRefetch((prevValue) => !prevValue))
      .catch((error) => console.log(error));
  };

  const restoreWord = () => {
    updateUserWord({
      userId: currentUser.userId,
      token: currentUser.token,
      wordId,
      params: { optional: {} }
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
          <span>{word} </span>
          <span>{transcription} </span>
          <span>{wordTranslate}</span>
          {userWord && (
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
          {!userWord && (
            <S.UserActionButton variant="warning" onClick={markWordAsHard}>
              Сложное
            </S.UserActionButton>
          )}
          {canRestoreWord ? (
            <S.UserActionButton
              variant="primary"
              autoSize
              onClick={restoreWord}
            >
              Востановить
            </S.UserActionButton>
          ) : (
            <S.UserActionButton variant="danger" onClick={deleteWord}>
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
  canRestoreWord: bool
};

WordBlock.defaultProps = {
  canRestoreWord: false
};

export default WordBlock;
