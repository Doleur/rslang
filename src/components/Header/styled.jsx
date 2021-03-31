import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export const NavbarWrapper = styled(Navbar)``;

export const AuthWrapper = styled.div`
  margin-left: auto;

  a {
    width: 125px;

    &:not(:last-child) {
      margin-right: 1em;
    }
  }
`;

export const User = styled.span`
  margin-right: 10px;
`;
