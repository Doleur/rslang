import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getWords } from '../../utilities/rslang.service';
import BasicPagination from '../Pagination';
import * as S from './styled';

const GroupWords = ({ groupId }) => {
  const [wordsData, updateWordsData] = useState([]);
  const [currentPage, updateCurrentPage] = useState(1);

  useEffect(() => {
    getWords(groupId, currentPage - 1).then((response) => {
      updateWordsData(response.data);
    });
  }, [currentPage]);

  return (
    <S.GroupWordsPage>
      {wordsData.map((wordData, i) => (
        <div key={i}>{wordData.word}</div>
      ))}
      <BasicPagination
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
    </S.GroupWordsPage>
  );
};

GroupWords.propTypes = {
  history: PropTypes.object,
  groupId: PropTypes.string
};

export default GroupWords;
