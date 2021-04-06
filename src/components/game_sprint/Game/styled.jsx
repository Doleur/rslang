import styled from 'styled-components';

export const SprintBoard = styled.div`
  background-color: rgba(47, 61, 255, 0.15);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 600px;
  height: 600px;
`;

export const Score = styled.div`
  text-align: center;
  font-size: 50px;
`;

export const Marks = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid green;
  margin: 0 10px;
  border-radius: 50px;
  background-color: ${(props) => (props.isFilled ? 'green' : 'none')};
`;

export const ComboWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;

export const ComboRate = styled.div`
  color: ${(props) => props.color};
  font-size: 100px;
  font-weight: 900;
`;

export const ComboScore = styled.div`
  font-size: 20px;
  margin-top: -20px;
`;

export const Word = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-top: 60px;
`;

export const WordTranslate = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  margin-top: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
