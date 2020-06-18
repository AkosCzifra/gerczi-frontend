import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { CartContext } from '../../context/CartContext';
import PersonalDataForm from '../../components/forms/PersonalDataForm';
import ShippingAddressForm from '../../components/forms/ShippingAddressForm';
import CartTable from './CartTable/CartTable';

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  }
`;

const ShippingInfoWrapper = styled(ContactInfoWrapper)``;

const PaymentInfoWrapper = styled(ContactInfoWrapper)``;

const Order = () => {
  const { cart, getSumPrice } = useContext(CartContext);
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

      shippingData[identifier].value = inputValue;
      shippingData[identifier].touched = true;
      setAddress(shippingData);
    } else if (identifier in contactData) {
      contactData[identifier].valid = true;

      contactData[identifier].value = inputValue;
      contactData[identifier].touched = true;
      setPersonalData(contactData);
    }
  };

  const createOrder = () => {
    let cartArray = [...cart].map((item) => {
      return { productId: item.productId, quantity: item.quantity };
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

  const submitOrder = () => {
    const order = createOrder();
    console.log(order);
  };

  if (cart && cart.length === 0) window.location.replace('/menu');

  return (
    <OrderContainer>
      <TableWrapper>
        <CartTable cart={cart} getSumPrice={getSumPrice} />
      </TableWrapper>
      <ContactInfoWrapper>
        <h1>Contact information</h1>
        <PersonalDataForm personalData={personalData} inputChangeHandler={inputChangeHandler} />
      </ContactInfoWrapper>
      <ShippingInfoWrapper>
        <h1>Shipping address</h1>
        <ShippingAddressForm address={address} inputChangeHandler={inputChangeHandler} />
      </ShippingInfoWrapper>
      <PaymentInfoWrapper>
        <h1>Payment information</h1>
      </PaymentInfoWrapper>
      <button onClick={submitOrder}>Click</button>
    </OrderContainer>
  );
};

export default Order;
