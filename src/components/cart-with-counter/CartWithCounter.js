import React from 'react';
import styled from 'styled-components';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWithCounterContainer = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  margin: 85px 0 20px 0;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

const CartIcon = styled(ShoppingCartIcon)`
  position: relative;
  width: 28px !important;
  height: 28px !important;
  color: #908870;
`;

const CartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 100%;
  background: #8e1717;
  width: 20px;
  height: 20px;
  color: #908870;
`;

const CartWithCounter = ({ quantity }) => {
  return (
    <CartWithCounterContainer>
      <CartIcon />
      <CartCounter>
        <p>{quantity}</p>
      </CartCounter>
    </CartWithCounterContainer>
  );
};

export default CartWithCounter;
