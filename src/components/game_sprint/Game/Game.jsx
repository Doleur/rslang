import React, { useEffect, useState } from 'react';
import { array, bool, func } from 'prop-types';

import { getWords } from '../../../utilities/rslang.service';
import Button from '../Button/Button';
import { getRandomNumber, shuffle } from '../helpers';
import * as S from './styled';

const Game = ({
  difficultiesWords,
  updateIsGameOver,
  updateFinalRightAnswer,
  updateFinalWrongAnswer,
  isOverTime
}) => {
  const [wordsDataPage1, updateWordsDataPage1] = useState([]);
  const [wordsDataPage2, updateWordsDataPage2] = useState([]);
  const [wordsDataPage3, updateWordsDataPage3] = useState([]);
  const [wordsData, updateWordsData] = useState([]);

  const [wordNumberInTheGame, updateWordNumberInTheGame] = useState(1);
  const [randomIndexWordAnswer, updateRandomIndexWordAnswer] = useState(0);
  const [score, updateScore] = useState(0);
  const [combo, updateCombo] = useState(0);
  const [rightAnswer, updateRightAnswer] = useState([]);
  const [wrongAnswer, updateWrongAnswer] = useState([]);

  const groupWords = difficultiesWords[0] - 1;
  const wordsPage1 = difficultiesWords[1] * 3 - 2;
  const wordsPage2 = difficultiesWords[1] * 3 - 1;
  const wordsPage3 = difficultiesWords[1] * 3;

  const checkOverTime = () => {
    if (!isOverTime) return;
    updateFinalRightAnswer([...rightAnswer]);
    updateFinalWrongAnswer([...wrongAnswer]);
    updateIsGameOver(true);
  };
  checkOverTime();

  const getRandomIndexWordAnswer = () => {
    const isCorrectAnswer = getRandomNumber(2);
    const indexCorrectWord = wordsData.length - wordNumberInTheGame;
    console.log(isCorrectAnswer, 'выбор ответа');
    isCorrectAnswer
      ? updateRandomIndexWordAnswer(
          indexCorrectWord === -1 ? 0 : indexCorrectWord
        )
      : updateRandomIndexWordAnswer(getRandomNumber(20));
  };

  const checkCorrect = (answer) => {
    const indexCorrectWord = wordsData.length - wordNumberInTheGame;
    const isCorrectTranslateWord = randomIndexWordAnswer === indexCorrectWord;

    if (isCorrectTranslateWord === answer) {
      updateCombo((prev) => prev + 1);
      updateRightAnswer([...rightAnswer, wordsData[indexCorrectWord]]);
    } else {
      updateCombo(0);
      updateWrongAnswer([...wrongAnswer, wordsData[indexCorrectWord]]);
    }

    if (!indexCorrectWord) {
      updateFinalRightAnswer([...rightAnswer, wordsData[indexCorrectWord]]);
      updateFinalWrongAnswer([...wrongAnswer, wordsData[indexCorrectWord]]);
      updateIsGameOver(true);
      return;
    }

    updateWordNumberInTheGame((prev) => prev + 1);
  };

  const checkCombo = () => {
    if (combo > 9) return { rate: 'A', score: 80, color: '#ff0000' };
    if (combo > 6) return { rate: 'B', score: 40, color: '#ff6600' };
    if (combo > 3) return { rate: 'C', score: 20, color: '#0084ff' };
    return { rate: 'D', score: 10, color: '#a7a7a7' };
  };

  const handleKey = (event) => {
    if (event.keyCode === 37) {
      checkCorrect(true);
    }
    if (event.keyCode === 39) {
      checkCorrect(false);
    }
  };

  useEffect(() => {
    getWords(groupWords, wordsPage1).then((response) => {
      updateWordsDataPage1(response.data);
    });
    getWords(groupWords, wordsPage2).then((response) => {
      updateWordsDataPage2(response.data);
    });
    getWords(groupWords, wordsPage3).then((response) => {
      updateWordsDataPage3(response.data);
    });
  }, []);

  useEffect(() => {
    if (
      !wordsDataPage1.length ||
      !wordsDataPage2.length ||
      !wordsDataPage3.length
    )
      return;
    const concatWordsData = wordsData.concat(
      wordsDataPage1,
      wordsDataPage2,
      wordsDataPage3
    );
    updateWordsData(shuffle(concatWordsData));
  }, [wordsDataPage1, wordsDataPage2, wordsDataPage3]);

  useEffect(() => {
    if (!wordsData.length) return;
    getRandomIndexWordAnswer();
  }, [wordsData]);

  useEffect(() => {
    getRandomIndexWordAnswer();
    if (!combo) return;
    if (combo <= 3) {
      updateScore((prev) => prev + 10);
      return;
    }
    if (combo <= 6) {
      updateScore((prev) => prev + 20);
      return;
    }
    if (combo <= 9) {
      updateScore((prev) => prev + 40);
      return;
    }
    updateScore((prev) => prev + 80);
  }, [wordNumberInTheGame]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  });

  return (
    wordsData.length && (
      <>
        <S.SprintBoard>
          <S.Score>{score}</S.Score>
          <S.Marks>
            <S.Circle isFilled={combo === 0 ? false : true} />
            <S.Circle
              isFilled={
                combo !== 0 && (combo % 3 !== 1 || combo > 9) ? true : false
              }
            />
            <S.Circle
              isFilled={
                combo !== 0 && (combo % 3 === 0 || combo > 9) ? true : false
              }
            />
          </S.Marks>
          <S.ComboWrapper>
            <S.ComboRate color={checkCombo().color}>
              {checkCombo().rate}
            </S.ComboRate>
            <S.ComboScore>+{checkCombo().score} очков за слово</S.ComboScore>
          </S.ComboWrapper>
          <S.Word>
            {wordsData[wordsData.length - wordNumberInTheGame].word}
          </S.Word>
          <S.WordTranslate>
            {wordsData[randomIndexWordAnswer].wordTranslate}
          </S.WordTranslate>
          <S.ButtonsWrapper>
            <Button
              nameButton={'Верно'}
              color={'primary'}
              answer={true}
              checkCorrect={checkCorrect}
            />
            <Button
              nameButton={'Неверно'}
              color={'secondary'}
              answer={false}
              checkCorrect={checkCorrect}
            />
          </S.ButtonsWrapper>
        </S.SprintBoard>
      </>
    )
  );
};

Game.propTypes = {
  difficultiesWords: array,
  updateIsGameOver: func,
  updateFinalRightAnswer: func,
  updateFinalWrongAnswer: func,
  isOverTime: bool
};

export default Game;
