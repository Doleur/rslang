import React from 'react';
import { VolumeUp } from 'react-bootstrap-icons';
import { array } from 'prop-types';

import { http } from '../../../constants/constants';
import * as S from './styled';

const FieldStatistics = ({ arrRightAnswer, arrWrongAnswer }) => {
  const handlePlayingSound = (audio) => {
    const audioUrl = http + audio;
    const wordAudio = new Audio(audioUrl);
    wordAudio.play();
  };
  const rightAnswers = (arrWord) =>
    arrWord.map((answer) => {
      return (
        <div key={answer.id}>
          <VolumeUp
            size={30}
            onClick={() => handlePlayingSound(answer.audio)}
          />
          <S.TextEnglish>{answer.word}</S.TextEnglish>
          <S.Translate> - {answer.wordTranslate}</S.Translate>
        </div>
      );
    });

  return (
    <>
      <h2>
        Знаю <S.NumberRightAnswer>{arrRightAnswer.length}</S.NumberRightAnswer>
      </h2>
      {rightAnswers(arrRightAnswer)}
      <h2>
        Ошибок{' '}
        <S.NumberWrongAnswer>{arrWrongAnswer.length}</S.NumberWrongAnswer>
      </h2>
      {rightAnswers(arrWrongAnswer)}
    </>
  );
};

FieldStatistics.propTypes = {
  arrRightAnswer: array,
  arrWrongAnswer: array
};

export default FieldStatistics;
