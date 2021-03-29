import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as S from './styled.component';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Link to="/">
        <S.Btn>main</S.Btn>
      </Link>
      <Link to="/textbook/1">
        <S.Btn>textbook</S.Btn>
      </Link>
    </S.HeaderWrapper>
  );
};

export default Header;
