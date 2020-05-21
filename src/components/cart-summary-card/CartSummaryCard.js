import React from 'react';
import styled from 'styled-components';

const CartSummaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
`;

const CartSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  padding: 8px;

  @media (min-width: 700px) {
    width: 80%;
  }
`;

const CartSummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px;

  h1 {
    color: #908870;
    font-size: 0.6rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    padding-bottom: 6px;

    @media (min-width: 700px) {
      font-size: 0.9rem;
    }
  }

  p {
    color: #886735;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.09em;
  }
`;

const CheckoutButton = styled.button`
  color: white;
  border-radius: 10px;
  background: #886735;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  padding: 8px 16px 6px 16px;
  border: none;

  &:hover {
    background: #8e1717;
    cursor: pointer;
  }
`;

const CartSummaryCard = ({ sumQuantity, sumPrice }) => {
  return (
    <CartSummaryContainer>
      <CartSummary>
        <CartSummaryItem>
          <h1>Items in cart</h1>
          <p>{sumQuantity}</p>
        </CartSummaryItem>
        <CartSummaryItem>
          <h1>Subtotal</h1>
          <p>${sumPrice}</p>
        </CartSummaryItem>
        <CheckoutButton>Checkout</CheckoutButton>
      </CartSummary>
    </CartSummaryContainer>
  );
};

export default CartSummaryCard;
