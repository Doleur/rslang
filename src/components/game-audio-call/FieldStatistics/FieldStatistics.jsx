import React from 'react';

const FieldStatistics = ({arrRightAnswer}) => {
  return <div>
    {`Вы знаете ${arrRightAnswer.length * 5}%`}
    </div>
}

export default FieldStatistics;
