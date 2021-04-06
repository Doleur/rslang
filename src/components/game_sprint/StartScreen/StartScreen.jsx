import React, { useState } from 'react';
import { func } from 'prop-types';

import { nameGroupWords } from '../../../constants/constants';
import * as S from './styled';

const StartScreen = ({ updateDifficultiesWords }) => {
  const difficultiesNumber = new Array(10);
  const [groupNumber, updateGroupNumber] = useState(0);

  const newGroupNumber = (event) => {
    updateGroupNumber(+event.target.innerText);
  };

  const newDifficulties = (event) => {
    updateDifficultiesWords([groupNumber, +event.target.innerText]);
  };

  const SelectingCategories = () => {
    if (groupNumber)
      return (
        <>
          <h3>Выберите сложность слов</h3>
          <S.CategoriesWrapper>
            {difficultiesNumber.fill(0).map((name, groupId) => (
              <S.CategoryElement onClick={newDifficulties} key={groupId}>
                {groupId + 1}
              </S.CategoryElement>
            ))}
          </S.CategoriesWrapper>
        </>
      );
    return (
      <>
        <h3>Выберите сложность категории</h3>
        <S.CategoriesWrapper>
          {nameGroupWords.map((name, groupId) => (
            <S.CategoryElement onClick={newGroupNumber} key={groupId}>
              {groupId + 1}
            </S.CategoryElement>
          ))}
        </S.CategoriesWrapper>
      </>
    );
  };
  return (
    <>
      <S.StartScreen>{SelectingCategories()}</S.StartScreen>
    </>
  );
};

StartScreen.propTypes = {
  updateDifficultiesWords: func
};

export default StartScreen;
