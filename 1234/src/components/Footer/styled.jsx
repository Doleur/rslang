import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  background-color: #fff;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 10px;
  margin: 5px;
`;

export const FooterLogoRss = styled.a`
  width: 80px;
`;
