import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';

import { useAuthentication } from '../../contexts/AuthenticationContext';
import { getAggregatedWords } from '../../utilities/rslang.service';
import Pagination from '../Pagination';
import WordBlock from '../WordBlock';
import * as S from './styled';

const DifficultWords = ({ groupId }) => {
  const { currentUser } = useAuthentication();
  const [wordsData, updateWordsData] = useState([]);
  const [currentPage, updateCurrentPage] = useState(1);
  const [pageCount, updatePageCount] = useState(0);
  const [refetch, triggerRefetch] = useState(false);

  if (!currentUser) {
    return null;
  }

  useEffect(() => {
    getAggregatedWords({
      userId: currentUser.userId,
      token: currentUser.token,
      group: groupId,
      page: currentPage - 1,
      wordsPerPage: 20,
      filter: JSON.stringify({
        $and: [{ 'userWord.difficulty': 'hard' }]
      })
    }).then((response) => {
      const {
        paginatedResults,
        totalCount: [{ count }]
      } = response.data[0];

      updateWordsData(paginatedResults);
      updatePageCount(Math.ceil(count / 20));
    });
  }, [currentPage, refetch]);

  if (wordsData.length === 0) {
    return null;
  }

  return (
    <S.GroupWordsPage>
      {pageCount > 1 && (
        <S.PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            updateCurrentPage={updateCurrentPage}
            pageCount={pageCount}
          />
        </S.PaginationWrapper>
      )}
      <S.WordsList>
        {wordsData.map((wordData, i) => (
          <div key={wordData.id || wordData._id}>
            <WordBlock
              wordData={wordData}
              triggerRefetch={triggerRefetch}
              canUnmarkWordAsHard
            ></WordBlock>
            {i < wordsData.length - 1 && <S.Spacer />}
          </div>
        ))}
      </S.WordsList>
      {pageCount > 1 && (
        <S.PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            updateCurrentPage={updateCurrentPage}
            pageCount={pageCount}
          />
        </S.PaginationWrapper>
      )}
    </S.GroupWordsPage>
  );
};

DifficultWords.propTypes = {
  groupId: string.isRequired
};

export default DifficultWords;
