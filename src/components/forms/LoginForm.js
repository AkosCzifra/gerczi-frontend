import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../httpService/axios';
import { toast } from 'react-toastify';
import * as ROUTES from '../../constants/routes';

import Input from '../input/Input';
import { AuthContext } from '../../context/AuthContext';
import { errorMessages, isEmailValid } from '../../utils/validation/RegisterValidation';

const LoginFormContainer = styled.form`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 60px auto;
  padding: 15px;
  border: 1px solid #886735;
  background-color: white;
`;

const FormTitle = styled.h1`
  width: 90%;
  text-align: center;
  padding-bottom: 12px;
  margin: 36px 0 60px 0;
  border-bottom: 1px solid #886735;
`;

const Text = styled.p`
  margin: 30px 0;
`;

const RouterLink = styled(Link)`
  text-decoration: none;
  color: #8e1717;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  color: white;
  border-radius: 10px;
  background: #886735;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  padding: 8px 16px 6px 16px;
  border: none;
  width: 90px;

  &:hover {
    background: #8e1717;
    cursor: pointer;
  }
`;

const LoginForm = () => {
  const { adjustJwt } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    email: {
      elementConfig: {
        type: 'text',
        name: 'Your e-mail',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
    password: {
      elementConfig: {
        type: 'password',
        name: 'Password',
        autoComplete: 'on',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
  });

  const inputChangeHandler = (e, identifier) => {
    let copyForm = { ...loginForm };
    const inputValue = e.target.value;

    copyForm[identifier].valid = true;

    if (identifier === 'email') {
      copyForm = emailCheckValidation(inputValue, identifier, copyForm);
    }

    copyForm[identifier].touched = true;
    copyForm[identifier].value = inputValue;
    setLoginForm(copyForm);
  };

  const emailCheckValidation = (value, identifier, formData) => {
    if (!isEmailValid(value)) {
      formData[identifier].error = errorMessages.invalidEmail;
      formData[identifier].valid = false;
    }
    return formData;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let isValidForm = true;
    let loginData = {};
    for (let element in loginForm) {
      loginData[element] = loginForm[element].value;
      isValidForm = loginForm[element].valid && isValidForm;
    }

    if (!isValidForm) {
      toast.error('Please fill out the form!', { autoClose: 2000 });
      return;
    }

    try {
      const response = await axios.post('/auth/sign-in', loginData);
      if (response.data.success) {
        adjustJwt(response.data.jwt);
        window.location.replace(`${ROUTES.PROFILE}`);
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        toast.error('Wrong e-mail or password!', { autoClose: 2000 });
      }
    }
  };

  let formElementsArray = [];
  for (let element in loginForm) {
    formElementsArray.push({ id: element, config: loginForm[element] });
  }

  return (
    <LoginFormContainer onSubmit={submitHandler}>
      <FormTitle>Login</FormTitle>
      {formElementsArray.map((element) => (
        <Input
          key={element.id}
          id={element.id}
          type={element.config.elementConfig.type}
          label={element.config.elementConfig.name}
          autoComplete={element.config.elementConfig.autoComplete}
          invalid={!element.config.valid}
          touched={element.config.touched}
          errorMsg={element.config.error}
          changeHandler={(e) => inputChangeHandler(e, element.id)}
        />
      ))}
      <LoginButton type="submit">Login</LoginButton>
      <Text>
        Do not have an account? <RouterLink to={ROUTES.SIGNUP}>Sign up</RouterLink>
      </Text>
    </LoginFormContainer>
  );
};

export default LoginForm;
