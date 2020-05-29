import axios from '../../httpService/axios';

const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const number = /[0-9]/;
const upperCase = /[A-Z]/;
const lowerCase = /[a-z]/;

export const errorMessages = {
  invalidEmail: 'Should be a valid email!',
  emailExists: 'This email is already exists!',
  invalidPassowrd:
    'Password should contain 1 upper, 1 lower, 1 number character and at least 5 characters!',
  wrongConfirmPassword: "Confirm password should match with 'Password'!",
};

export const isEmailValid = (email) => {
  return validEmail.test(email);
};

export const isEmailExists = async (email) => await axios.get(`/auth/exists/${email}`);

export const isPasswordValid = (password) => {
  return (
    lowerCase.test(password) &&
    upperCase.test(password) &&
    number.test(password) &&
    password.length >= 5
  );
};

export const isConfrimPasswordMatch = (confirmPassword, password) => {
  return password === confirmPassword;
};
