import React, { useEffect, useState } from 'react';

// import { withRouter } from 'react-router-dom';
import { nameGroupWords } from '../../constants/constants';
import GroupWords from '../GroupWords';
import * as S from './styled';
// import PropTypes from 'prop-types';

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
