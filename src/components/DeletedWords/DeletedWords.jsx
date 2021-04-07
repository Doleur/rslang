import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';

import { useAuthentication } from '../../contexts/AuthenticationContext';
import { getAggregatedWords } from '../../utilities/rslang.service';
import Pagination from '../Pagination';
import WordBlock from '../WordBlock';
import * as S from './styled';

const DeletedWords = ({ groupId }) => {
  const { currentUser } = useAuthentication();
  const [wordsData, updateWordsData] = useState([]);
  const [currentPage, updateCurrentPage] = useState(1);
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
        $and: [{ 'userWord.optional.deleted': true }]
      })
    }).then((response) => {
      updateWordsData(response.data[0].paginatedResults);
    });
  }, [currentPage, refetch]);

  return (
    <S.GroupWordsPage>
      <S.PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      </S.PaginationWrapper>
      {wordsData.map((wordData, i) => (
        <div key={wordData.id || wordData._id}>
          <WordBlock
            wordData={wordData}
            triggerRefetch={triggerRefetch}
            canRestoreWord
          ></WordBlock>
          {i < wordsData.length - 1 && <S.Spacer />}
        </div>
      ))}
      <S.PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      </S.PaginationWrapper>
    </S.GroupWordsPage>
  );
};

DeletedWords.propTypes = {
  groupId: string.isRequired
};

export default DeletedWords;
