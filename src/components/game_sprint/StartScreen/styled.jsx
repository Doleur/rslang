import styled from 'styled-components';

export const StartScreen = styled.div`
  width: 600px;
  height: 600px;
  background-color: purple;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  background-color: blue;
`;

export const CategoryElement = styled.div`
  font-size: 20px;
  text-align: center;
  min-width: 30px;
  margin: 10px;
  background-color: red;
  &:hover {
    cursor: pointer;
  }
`;
