import { Button, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Wrapper = styled(Container)`
  height: 90vh;
`;

export const RightSection = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 0;
  padding-left: 30px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  max-height: 400px;
  box-shadow: 0 0 7px #9e9e9e;
  border-radius: 10px;
  overflow: hidden;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px;
  justify-content: space-between;

  label {
    font-size: 18px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
`;

export const Input = styled(TextField)`
  width: inherit;
`;

export const ErrorMessage = styled.span`
  color: #fd2727;
  font-size: 10px;
`;

export const LoginButton = styled(Button)`
  background-color: #007bff !important;
`;

export const RedirectSection = styled.div`
  font-size: 12px;
  text-align: center;
`;

export const Text = styled.span`
  color: #848282;
`;
