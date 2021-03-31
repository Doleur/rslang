import styled from 'styled-components';

export const GroupWords = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #2f3dff;
  width: 200px;
  height: 300px;
  margin: 0 10px 10px;
  padding: 10px;
  box-shadow: 3px 2px 10px 1px rgba(34, 60, 80, 0.6);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Text = styled.div`
  font-size: 20px;
  color: #ffffff;
`;
