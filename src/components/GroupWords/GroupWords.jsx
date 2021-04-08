import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styled';

const GroupWords = ({ history, groupId, name }) => {
  return (
    <S.GroupWords>
      <S.Text>{name}</S.Text>
      <Button
        variant="outline-primary"
        onClick={() => {
          history.push(`/textbook/group/${groupId}`);
        }}
      >
        Общее
      </Button>
      <Button
        variant="outline-primary"
        onClick={() => {
          history.push(`/textbook/group/${groupId}/difficult_words`);
        }}
      >
        Сложные
      </Button>
      <Button
        variant="outline-primary"
        onClick={() => {
          history.push(`/textbook/group/${groupId}/deleted_words`);
        }}
      >
        Удаленные
      </Button>
    </S.GroupWords>
  );
};

GroupWords.propTypes = {
  history: PropTypes.object,
  groupId: PropTypes.number,
  name: PropTypes.string
};

export default withRouter(GroupWords);
