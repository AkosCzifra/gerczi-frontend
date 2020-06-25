import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { toast } from 'react-toastify';
import axios from '../../../httpService/axios';

import { errorMessages, isEmailValid } from '../../../utils/validation/RegisterValidation';
import PersonalDataForm from '../../../components/forms/PersonalDataForm';
import ShippingAddressForm from '../../../components/forms/ShippingAddressForm';
import PersonalDataCard from './personal-data-card/PersonalDataCard';

const PersonalDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  h1 {
    margin-bottom: 12px;
  }
`;

const ContactInfoWrapper = styled.div`
  width: 80%;

  h1 {
    margin: 8px 0 12px 0;
    font-size: 1.1rem;
    color: #8f2626;
    text-transform: uppercase;
    border-bottom: 1px solid #908870;
  }
`;

const ShippingInfoWrapper = styled(ContactInfoWrapper)``;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: 1s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      max-height: 440px;
    `}
`;

const Button = styled.button`
  color: white;
  border-radius: 10px;
  background: #886735;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  padding: 8px 16px 6px 16px;
  border: none;
  text-decoration: none;

  &:hover {
    background: #8e1717;
    cursor: pointer;
  }
`;

const PersonalData = ({ user }) => {
  const [address, setAddress] = useState({
    zip: {
      elementConfig: {
        type: 'number',
        name: 'Zip code',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
    city: {
      elementConfig: {
        type: 'text',
        name: 'City',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
    street: {
      elementConfig: {
        type: 'text',
        name: 'Street address',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
  });
  const [personalData, setPersonalData] = useState({
    firstName: {
      elementConfig: {
        type: 'text',
        name: 'First name',
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
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
    email: {
      elementConfig: {
        type: 'text',
        name: 'E-mail',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
    phoneNumber: {
      elementConfig: {
        type: 'text',
        name: 'Phone number',
      },
      value: '',
      valid: false,
      touched: false,
      error: '',
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const inputChangeHandler = (e, identifier) => {
    let shippingData = { ...address };
    let contactData = { ...personalData };
    const inputValue = e.target.value;

    if (identifier in shippingData) {
      shippingData[identifier].valid = true;

      shippingData = checkRequiredValidation(inputValue, identifier, shippingData);
      shippingData[identifier].value = inputValue;
      shippingData[identifier].touched = true;

      setAddress(shippingData);
    } else if (identifier in contactData) {
      contactData[identifier].valid = true;

      if (identifier === 'email' && !isEmailValid(inputValue))
        contactData = setValidationError(
          contactData,
          errorMessages.invalidEmail,
          false,
          identifier
        );
      contactData = checkRequiredValidation(inputValue, identifier, contactData);

      contactData[identifier].value = inputValue;
      contactData[identifier].touched = true;
      setPersonalData(contactData);
    }
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

  const dataChangeHandler = async () => {
    let isValidForm = true;
    let userData = {};
    const data = { ...personalData, ...address };

    for (let element in data) {
      userData[element] = data[element].value;
      isValidForm = data[element].valid && isValidForm;
    }

    if (!isValidForm) {
      toast.error('Please fill out the form!', { autoClose: 2000 });
      return;
    }

    try {
      const req = await axios.post('/auth/change-personal-data', userData);

      if (req.data && req.data.success) {
        window.location.replace('/profile');
      }
      console.log(req);
    } catch (err) {
      console.error(err);
    }

    console.log(userData);
  };

  return (
    <PersonalDataContainer>
      <h1>Contact info</h1>
      <PersonalDataCard user={user} />
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close form' : 'Change contact info'}
      </Button>
      <FormWrapper isOpen={isOpen}>
        <ContactInfoWrapper>
          <h1>Contact information</h1>
          <PersonalDataForm personalData={personalData} inputChangeHandler={inputChangeHandler} />
        </ContactInfoWrapper>
        <ShippingInfoWrapper>
          <h1>Shipping address</h1>
          <ShippingAddressForm address={address} inputChangeHandler={inputChangeHandler} />
        </ShippingInfoWrapper>
        <Button onClick={dataChangeHandler}>Change data</Button>
      </FormWrapper>
    </PersonalDataContainer>
  );
};

export default PersonalData;
