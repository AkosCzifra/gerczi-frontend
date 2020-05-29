import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../../httpService/axios';

import Input from '../input/Input';
import { errorMessages, isEmailValid } from '../../utils/validation/RegisterValidation';
import { setJWTWithExpiry } from '../../utils/jwt-manager/JwtManager';

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
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

const LoginForm = ({ close }) => {
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
      window.confirm('Please fill out the form!');
      return;
    }

    try {
      const response = await axios.post('/auth/sign-in', loginData);
      if (response.data.success) {
        setJWTWithExpiry('jwt', response.data.jwt, 86400000);
        window.confirm('Successfully logged in!');
        close();
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        window.confirm('Wrong e-mail or password!');
      }
    }
  };

  let formElementsArray = [];
  for (let element in loginForm) {
    formElementsArray.push({ id: element, config: loginForm[element] });
  }

  return (
    <LoginFormContainer onSubmit={submitHandler}>
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
    </LoginFormContainer>
  );
};

export default LoginForm;
