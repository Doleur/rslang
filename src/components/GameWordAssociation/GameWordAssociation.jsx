import React, { useState } from 'react';

import FieldGame from './FieldGame';
import FieldStatistics from './FieldStatistics';

const GameWordAssociation = () => {
  const [isStatistics, updateStatistics] = useState(false);
  const [arrRightAnswer, updateArrRightAnswer] = useState([]);
  const [arrWrongAnswer, updateArrWrongAnswer] = useState([]);

  const addRightAnswer = (answerObj) => {
    updateArrRightAnswer([...arrRightAnswer, answerObj]);
  };

  const addWrongAnswer = (answerObj) => {
    updateArrWrongAnswer([...arrWrongAnswer, answerObj]);
  };

  const showStatistics = () => {
    updateStatistics(true);
  };

  return (
    <>
      {isStatistics ? (
        <FieldStatistics
          arrRightAnswer={arrRightAnswer}
          arrWrongAnswer={arrWrongAnswer}
        />
      ) : (
        <FieldGame
          arrRightAnswer={arrRightAnswer}
          showStatistics={showStatistics}
          addRightAnswer={addRightAnswer}
          addWrongAnswer={addWrongAnswer}
        />
      )}
    </>
  );
};

export default GameWordAssociation;
