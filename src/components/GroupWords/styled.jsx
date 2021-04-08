import styled from 'styled-components';

export const GroupWords = styled.div`
  align-content: center;
  background-color: #fff;
  box-shadow: 3px 2px 10px 1px rgba(34, 60, 80, 0.6);
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 300px;
  justify-content: space-between;
  margin: 50px 10px 10px;
  padding: 10px;
  width: 200px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  button {
    margin: 0 auto;
    width: 130px;
    font-weight: bold;

    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

export const Text = styled.div`
  color: #000;
  font-size: 20px;
  text-align: center;
`;
