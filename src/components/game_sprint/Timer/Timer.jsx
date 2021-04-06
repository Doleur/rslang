import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';

import * as S from './styled';

const Timer = ({ updateIsGameOver }) => {
  const [time, updateTime] = useState(60);

  useEffect(() => {
    if (time === 0) {
      updateIsGameOver(true);
      return;
    }
    const timer = setTimeout(() => {
      updateTime((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <S.SprintTimer>{time}</S.SprintTimer>
    </>
  );
};

Timer.propTypes = {
  updateIsGameOver: func
};

export default Timer;
