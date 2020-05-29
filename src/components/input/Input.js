import React from 'react';
import styled, { css } from 'styled-components';

const InputLabel = styled.label`
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  padding: 3px 3px 2px 3px;
  border-radius: 10px;
  border: 1px solid #886735;
  font-size: 1.1rem;
  outline: none;
  background-color: #f5f5f5;
  margin-bottom: 22px;
  width: 90%;

  ${({ isError, isTouched }) =>
    isError &&
    isTouched &&
    css`
      border: 1px solid red;
      margin-bottom: 0;
    `}
`;

const ErrorMsg = styled.p`
  margin-top: 6px;
  font-size: 0.7rem;
  color: red;
  text-transform: uppercase;
  margin-bottom: 10px;
  width: 90%;
`;

const Input = ({ label, id, type, autoComplete, invalid, touched, errorMsg, changeHandler }) => {
  return (
    <React.Fragment>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledInput
        id={id}
        type={type}
        autoComplete={autoComplete}
        onBlur={changeHandler}
        isError={invalid}
        isTouched={touched}
      />
      {touched && invalid && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </React.Fragment>
  );
};

export default Input;
