import React, { useState } from 'react';

import Game from './Game/Game';
import GameOver from './GameOver/GameOver';
import StartScreen from './StartScreen/StartScreen';
import * as S from './styled';

const Sprint = () => {
  const [difficultiesWords, updateDifficultiesWords] = useState([1, 1]);
  const [isGameOver, updateIsGameOver] = useState(false);

  const gameScreen = () => {
    if (isGameOver) return <GameOver />;
    if (difficultiesWords)
      return (
        <Game
          difficultiesWords={difficultiesWords}
          updateIsGameOver={updateIsGameOver}
        />
      );

    return <StartScreen updateDifficultiesWords={updateDifficultiesWords} />;
  };
  return <S.SprintWrapper>{gameScreen()}</S.SprintWrapper>;
};

export default Sprint;
