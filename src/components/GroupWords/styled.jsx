import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const GroupWords = styled.div`
  align-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 3px 2px 10px 1px rgba(34, 60, 80, 0.6);
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 300px;
  justify-content: space-between;
  margin: 50px 10px 10px;
  padding: 10px;
  width: 200px;

  &:hover {
    transform: scale(1.05);
  }

  span:last-child {
    margin-bottom: 25px;
  }

  button {
    margin: 0 auto;
    width: 130px;
    font-weight: bold;
  }
`;

export const NotebookButton = styled(Button)`
  ${({ disabledbutton }) =>
    disabledbutton === 'true' &&
    `
    color: #007bff;
    background-color: transparent;
    border-color: #007bff;
    opacity: .65;
    cursor: not-allowed !important;

    :hover {
      color: #007bff;
      background-color: transparent;
      border-color: #007bff;
    }
  `}
`;

export const Text = styled.div`
  color: #000;
  font-size: 20px;
  text-align: center;
`;
