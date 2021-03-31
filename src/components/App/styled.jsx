import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';

export const Flash = styled(Alert)`
  position: absolute;
  right: 15px;
  top: 15px;
  box-shadow: 0 0 7px #000000 !important;
  z-index: 999999;
`;
