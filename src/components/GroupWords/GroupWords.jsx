import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthentication } from '../../contexts/AuthenticationContext';
import * as S from './styled';

const GroupWords = ({ history, groupId, name }) => {
  const { currentUser } = useAuthentication();

  const handleClick = (path) => {
    if (!currentUser) return;

    history.push(path);
  };

  const DifficultWordsButton = () => (
    <span className="d-inline-block mr-auto ml-auto">
      <S.NotebookButton
        disabledbutton={currentUser ? null : 'true'}
        variant="outline-primary"
        onClick={() =>
          handleClick(`/textbook/group/${groupId}/difficult_words`)
        }
      >
        Сложные
      </S.NotebookButton>
    </span>
  );
  const DeletedWordsButton = () => (
    <span className="d-inline-block mr-auto ml-auto">
      <S.NotebookButton
        disabledbutton={currentUser ? null : 'true'}
        variant="outline-primary"
        onClick={() => handleClick(`/textbook/group/${groupId}/deleted_words`)}
      >
        Удаленные
      </S.NotebookButton>
    </span>
  );

  return (
    <S.GroupWords isUserLoggedIn={!!currentUser}>
      <S.Text>{name}</S.Text>
      <S.NotebookButton
        variant="outline-primary"
        onClick={() => history.push(`/textbook/group/${groupId}`)}
      >
        Общее
      </S.NotebookButton>
      {currentUser ? (
        <>
          {DifficultWordsButton()}
          {DeletedWordsButton()}
        </>
      ) : (
        <>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Войдите в систему чтобы получить доступ к этой секции.
              </Tooltip>
            }
          >
            {DifficultWordsButton()}
          </OverlayTrigger>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Войдите в систему чтобы получить доступ к этой секции.
              </Tooltip>
            }
          >
            {DeletedWordsButton()}
          </OverlayTrigger>
        </>
      )}
    </S.GroupWords>
  );
};

GroupWords.propTypes = {
  history: PropTypes.object,
  groupId: PropTypes.number,
  name: PropTypes.string
};

export default withRouter(GroupWords);
