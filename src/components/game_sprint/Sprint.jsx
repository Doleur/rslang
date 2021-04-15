import React, { useState } from 'react';

import FieldStatistics from '../game-audio-call/FieldStatistics';
import Game from './Game/Game';
import StartScreen from './StartScreen/StartScreen';
import Timer from './Timer/Timer';
import * as S from './styled';

const Sprint = () => {
  const [difficultiesWords, updateDifficultiesWords] = useState(0);
  const [isGameOver, updateIsGameOver] = useState(false);
  const [isOverTime, updateIsOverTime] = useState(false);

  const [finalRightAnswer, updateFinalRightAnswer] = useState([]);
  const [finalWrongAnswer, updateFinalWrongAnswer] = useState([]);

  const gameScreen = () => {
    if (isGameOver)
      return (
        <div>
          <FieldStatistics
            arrRightAnswer={finalRightAnswer}
            arrWrongAnswer={finalWrongAnswer}
          />
        </div>
      );
    if (difficultiesWords)
      return (
        <>
          <Game
            difficultiesWords={difficultiesWords}
            updateIsGameOver={updateIsGameOver}
            updateFinalRightAnswer={updateFinalRightAnswer}
            updateFinalWrongAnswer={updateFinalWrongAnswer}
            isOverTime={isOverTime}
          />
          <Timer updateIsOverTime={updateIsOverTime} />
        </>
      );

    return <StartScreen updateDifficultiesWords={updateDifficultiesWords} />;
  };
  return <S.SprintWrapper>{gameScreen()}</S.SprintWrapper>;
};

export default Sprint;
