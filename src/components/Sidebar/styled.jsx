import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';

export const StyledLink = styled(NavLink)`
  color: black;
`;

const activeClassName = 'Mui-selected';

export const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: #c4c8ff;
  }
  &.${activeClassName} {
    background-color: #c4c8ff;
  }
`;
