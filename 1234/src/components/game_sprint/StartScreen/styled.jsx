import styled from 'styled-components';

export const StartScreen = styled.div`
  text-align: center;
  background-color: rgba(47, 61, 255, 0.15);
  border-radius: 20px;
  padding: 10px;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
`;

export const CategoryElement = styled.div`
  font-size: 30px;
  text-align: center;
  min-width: 40px;
  margin: 60px 10px 10px;
  background-color: rgba(47, 102, 255, 0.527);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
