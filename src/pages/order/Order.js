import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { errorMessages, isEmailValid } from '../../utils/validation/RegisterValidation';
import axios from '../../httpService/axios';
import PersonalDataForm from '../../components/forms/PersonalDataForm';
import ShippingAddressForm from '../../components/forms/ShippingAddressForm';
import CartTable from './CartTable/CartTable';

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  width: 100%;
`;
const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
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

const ShippingInfoWrapper = styled(ContactInfoWrapper)`
  margin: 12px 0;
`;

const PaymentInfoWrapper = styled(ContactInfoWrapper)`
  margin: 12px 0;
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
  margin-bottom: 12px;

  &:hover {
    background: #8e1717;
    cursor: pointer;
  }
`;

const Order = (props) => {
  const { cart, getSumPrice, deleteCartFromContext } = useContext(CartContext);
  const { jwt } = useContext(AuthContext);
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

  const createOrder = () => {
    let cartArray = [...cart].map((item) => {
      return { productName: item.name, quantity: item.quantity, price: item.price };
    });

    let contactInfo = {};
    for (let element in personalData) {
      contactInfo[element] = personalData[element].value;
    }

    let shippingInfo = {};
    for (let element in address) {
      shippingInfo[element] = address[element].value;
    }
    // payment info and if user is logged in => userId

    const order = {
      contactInfo: contactInfo,
      shippingInfo: shippingInfo,
      orderedItems: cartArray,
      date: new Date(),
    };

    return order;
  };

  const submitOrder = async () => {
    let isValidForm = true;
    let data = {};
    const formData = { ...personalData, ...address };

    for (let element in formData) {
      data[element] = formData[element].value;
      isValidForm = formData[element].valid && isValidForm;
    }

    if (!isValidForm) {
      toast.error('Please fill out the form!', { autoClose: 2000 });
      return;
    }

    const order = createOrder();

    try {
      const request = await axios.post('/order/post-order', order);
      if (request && request.data.success) {
        toast.success('Thank you for your order!');
        props.history.replace('/');
        deleteCartFromContext();
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (cart && !cart.length) window.location.replace('/menu');

  return (
    <OrderContainer>
      <TableWrapper>
        <CartTable cart={cart} getSumPrice={getSumPrice} />
      </TableWrapper>
      {jwt ? (
        <React.Fragment>
          <ContactInfoWrapper>
            <h1>Contact information</h1>
            <PersonalDataForm
              personalData={personalData}
              inputChangeHandler={inputChangeHandler}
            />
          </ContactInfoWrapper>
          <ShippingInfoWrapper>
            <h1>Shipping address</h1>
            <ShippingAddressForm address={address} inputChangeHandler={inputChangeHandler} />
          </ShippingInfoWrapper>
          <PaymentInfoWrapper>
            <h1>Payment information</h1>
          </PaymentInfoWrapper>
          <Button onClick={submitOrder}>Submit order</Button>
        </React.Fragment>
      ) : (
        <h1>Please login or signup if you want to order!</h1>
      )}
    </OrderContainer>
  );
};

export default withRouter(Order);
