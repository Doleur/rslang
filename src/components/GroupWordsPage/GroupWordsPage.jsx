import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getWords } from '../../utilities/rslang.service';
import * as S from './styled';

const GroupWords = ({ groupId }) => {
  const [wordsData, updateWordsData] = useState([]);

  useEffect(() => {
    getWords(groupId, 0).then((response) => {
      updateWordsData(response.data);
    });
  }, []);

  return (
    <S.GroupWordsPage>
      {wordsData.map((wordData) => (
        <div>{wordData.word}</div>
      ))}
    </S.GroupWordsPage>
  );
};

GroupWords.propTypes = {
  history: PropTypes.object,
  groupId: PropTypes.string
};

export default GroupWords;
