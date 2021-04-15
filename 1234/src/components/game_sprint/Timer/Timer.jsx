import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';

import * as S from './styled';

const Timer = ({ updateIsOverTime }) => {
  const [time, updateTime] = useState(60);

  useEffect(() => {
    if (time === 0) {
      updateIsOverTime(true);
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
  updateIsOverTime: func
};

export default Timer;
