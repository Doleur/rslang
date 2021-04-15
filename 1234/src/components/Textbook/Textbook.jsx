import React from 'react';

import { nameGroupWords } from '../../constants/constants';
import GroupWords from '../GroupWords';
import * as S from './styled';

const Textbook = () => {
  return (
    <S.TextbookWrapper>
      {nameGroupWords.map((name, groupId) => (
        <GroupWords groupId={groupId} name={name} key={groupId} />
      ))}
    </S.TextbookWrapper>
  );
};

export default Textbook;
