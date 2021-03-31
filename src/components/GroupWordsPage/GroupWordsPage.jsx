import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getWords } from '../../utilities/rslang.service';
import BasicPagination from '../Pagination';
import WordBlock from '../WordBlock';
import * as S from './styled';

const GroupWordsPage = ({ groupId }) => {
  const [wordsData, updateWordsData] = useState([]);
  const [currentPage, updateCurrentPage] = useState(1);

  useEffect(() => {
    getWords(groupId, currentPage - 1).then((response) => {
      updateWordsData(response.data);
    });
  }, [currentPage]);

  return (
    <S.GroupWordsPage>
      <S.PaginationWrapper>
        <BasicPagination
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      </S.PaginationWrapper>
      {wordsData.map((wordData, i) => (
        <WordBlock key={i} wordData={wordData}></WordBlock>
      ))}
      <S.PaginationWrapper>
        <BasicPagination
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      </S.PaginationWrapper>
    </S.GroupWordsPage>
  );
};

GroupWordsPage.propTypes = {
  history: PropTypes.object,
  groupId: PropTypes.string
};

export default GroupWordsPage;
