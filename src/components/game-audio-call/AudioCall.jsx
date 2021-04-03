import React, { useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

import FieldGame from './FieldGame';
import FieldStatistics from './FieldStatistics';

const AudioCall = () => {
  const [isStatistics, updateStatistics] = useState(false);
  const [arrRightAnswer, updateArrRightAnswer] = useState([]);

  const addRightAnswer = (children) => {
    updateArrRightAnswer([...arrRightAnswer, children]);
    console.log(arrRightAnswer);
  };

  const showStatistics = () => {
    updateStatistics(true);
  };

  return (
    <>
      {isStatistics ? (
        <FieldStatistics arrRightAnswer={arrRightAnswer}/>
      ) : (
        <FieldGame
          arrRightAnswer={arrRightAnswer}
          showStatistics={showStatistics}
          addRightAnswer={addRightAnswer}
        />
      )}
    </>
  );
};

export default AudioCall;
