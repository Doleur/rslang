import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const WordBlock = styled.div`
  display: flex;
  padding: 20px;
`;

export const WordImage = styled.div`
  background: url(${(props) => props.src}) 50% 50% / 180px auto;
  height: 120px;
  width: 180px;
  border-radius: 30px;
  margin: 10px 0;
  margin-right: 30px;
`;

export const WordDescription = styled.div`
  max-width: 900px;
  width: 100%;
`;

export const Word = styled.div`
  span {
    margin-right: 10px;
  }
`;

export const TextMeaning = styled.div`
  padding: 10px 20px;
`;

export const TextExample = styled.div`
  padding: 10px 20px;
`;

export const UserActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserActionButton = styled(Button)`
  display: block;
  width: 100px;

  :last-child {
    margin-top: 10px;
  }
`;
