import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/forms/LoginForm';
import { Pictures } from '../../assets';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background: url(${Pictures.Headers.Authentication});
  background-size: cover;
  background-repeat: none;
  margin-bottom: -155px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Login = () => {
  return (
    <Container>
      <Header />
      <LoginForm />
    </Container>
  );
};

export default Login;
