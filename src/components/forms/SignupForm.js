import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import axios from '../../httpService/axios';
import Input from '../input/Input';
import {
  isEmailValid,
  isEmailExists,
  isPasswordValid,
  isConfrimPasswordMatch,
  errorMessages,
} from '../../utils/validation/RegisterValidation';

const SignupFormContainer = styled.form`
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

const SignupButton = styled.button`
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

const SignupForm = () => {
  const [signupForm, setSignupForm] = useState({
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
    confirmPassword: {
      elementConfig: {
        type: 'password',
        name: 'Confirm password',
        autoComplete: 'on',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
    firstName: {
      elementConfig: {
        type: 'text',
        name: 'First name',
        autoComplete: 'off',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
    lastName: {
      elementConfig: {
        type: 'text',
        name: 'Last name',
        autoComplete: 'off',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
  });

  const inputChangeHandler = async (e, identifier) => {
    let signUpForm = { ...signupForm };
    const inputValue = e.target.value;

    signUpForm[identifier].valid = true;

    switch (identifier) {
      case 'email':
        signUpForm = await checkEmailValidation(inputValue, identifier, signUpForm);
        break;
      case 'password':
        signUpForm = checkPasswordValidation(inputValue, identifier, signUpForm);
        break;
      case 'confirmPassword':
        signUpForm = checkIsPasswordMatch(inputValue, identifier, signUpForm);
        break;
      default:
        signUpForm = checkRequiredValidation(inputValue, identifier, signUpForm);
    }

    signUpForm[identifier].value = inputValue;
    signUpForm[identifier].touched = true;
    setSignupForm(signUpForm);
  };

  const checkEmailValidation = async (value, identifier, formData) => {
    if (!isEmailValid(value)) {
      return setValidationError(formData, errorMessages.invalidEmail, false, identifier);
    } else {
      let isExists;
      try {
        isExists = await isEmailExists(value);
      } catch (err) {
        console.log(err); // handle in state
      }
      if (isExists.data.data) {
        return setValidationError(formData, errorMessages.emailExists, false, identifier);
      }
    }
    return formData;
  };

  const checkPasswordValidation = (value, identifier, formData) => {
    if (!isPasswordValid(value)) {
      return setValidationError(formData, errorMessages.invalidPassowrd, false, identifier);
    }
    return formData;
  };

  const checkIsPasswordMatch = (value, identifier, formData) => {
    if (!isConfrimPasswordMatch(value, formData.password.value)) {
      return setValidationError(formData, errorMessages.wrongConfirmPassword, false, identifier);
    }
    return formData;
  };

  const checkRequiredValidation = (value, identifier, formData) => {
    if (value.length <= 0) {
      const requiredErrorMsg = `Please add your ${formData[identifier].elementConfig.name}!`;
      return setValidationError(formData, requiredErrorMsg, false, identifier);
    }
    return formData;
  };

  const setValidationError = (formData, errorMsg, isValid, identifier) => {
    formData[identifier].error = errorMsg;
    formData[identifier].valid = isValid;

    return formData;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let isValidForm = true;
    let signupData = {};
    for (let element in signupForm) {
      signupData[element] = signupForm[element].value;
      isValidForm = signupForm[element].valid && isValidForm;
    }

    if (!isValidForm) {
      toast.error('Please fill out the form correctly!', { autoClose: 2000 });
      return;
    }

    try {
      const response = await axios.post('/auth/sign-up', signupData);
      if (response.data.success) {
        toast.success('Successfully registered!', { autoClose: 2000 });
      }
    } catch (err) {
      console.error(err);
    }
  };

  let formElementsArray = [];
  for (let element in signupForm) {
    formElementsArray.push({ id: element, config: signupForm[element] });
  }

  return (
    <SignupFormContainer onSubmit={submitHandler}>
      <FormTitle>Sign up</FormTitle>
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
      <SignupButton type="submit">Signup</SignupButton>
      <Text>
        Already have an account? <RouterLink to={ROUTES.LOGIN}>Login</RouterLink>
      </Text>
    </SignupFormContainer>
  );
};

export default SignupForm;
