import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useAuthentication } from '../../contexts/AuthenticationContext';
import { getAggregatedWords, getWords } from '../../utilities/rslang.service';
import BasicPagination from '../Pagination';
import WordBlock from '../WordBlock';
import * as S from './styled';

const GroupWordsPage = ({ groupId }) => {
  const { currentUser } = useAuthentication();
  const [wordsData, updateWordsData] = useState([]);
  const [currentPage, updateCurrentPage] = useState(1);
  const [refetch, triggerRefetch] = useState(false);

  useEffect(() => {
    if (currentUser) {
      getAggregatedWords({
        userId: currentUser.userId,
        token: currentUser.token,
        group: groupId,
        page: currentPage - 1,
        wordsPerPage: 20,
        filter: JSON.stringify({
          $or: [{ 'userWord.difficulty': 'hard' }, { userWord: null }],
          $and: [{ 'userWord.optional.deleted': null }]
        })
      }).then((response) => {
        updateWordsData(response.data[0].paginatedResults);
      });
    } else {
      getWords(groupId, currentPage - 1).then((response) => {
        updateWordsData(response.data);
      });
    }
  }, [currentPage, refetch]);

  return (
    <S.GroupWordsPage>
      <S.PaginationWrapper>
        <BasicPagination
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      </S.PaginationWrapper>
      {wordsData.map((wordData, i) => (
        <div key={i}>
          <WordBlock
            wordData={wordData}
            triggerRefetch={triggerRefetch}
          ></WordBlock>
          {i < wordsData.length - 1 && <S.Spacer />}
        </div>
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
