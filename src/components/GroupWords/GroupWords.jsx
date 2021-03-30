import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styled';

const GroupWords = ({ history, groupId, name }) => {
  return (
    <S.GroupWords
      onClick={() => {
        history.push(`/textbook/group/${groupId}`);
      }}
    >
      {name}
    </S.GroupWords>
  );
};

GroupWords.propTypes = {
  history: PropTypes.object,
  groupId: PropTypes.number,
  name: PropTypes.string
};

export default withRouter(GroupWords);
