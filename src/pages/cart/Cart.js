import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';

import { CartContext } from '../../context/CartContext';
import { PageCover } from '../../styled/styledComponents';
import CartItem from './cart-item/CartItem';
import CartSummaryCard from '../../components/cart-summary-card/CartSummaryCard';
import EmptyCart from '../../components/empty-cart/EmptyCart';

const CartTitle = styled.h1`
  position: absolute;
  top: 40%;
  left: 25%;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.09em;

  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 60%;
    padding-top: 15px;
    border-bottom: 4px solid white;
  }

  @media (min-width: 450px) {
    left: 30%;
    font-size: 2rem;
  }

  @media (min-width: 700px) {
    left: 42%;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  background: #f5f5f5;
  width: 100%;
  min-height: 300px;

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      justify-content: center;
    `}
`;

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const {
    cart,
    increment,
    decrement,
    remove,
    getSumQuantity,
    getSumPrice,
  } = useContext(CartContext);

  useEffect(() => {
    const cartContext = cart;
    setCartProducts(cartContext);
  }, [cart]);

  let renderCart;
  if (cartProducts.length === 0) {
    renderCart = (
      <ItemsContainer isEmpty={true}>
        <EmptyCart />
      </ItemsContainer>
    );
  } else {
    renderCart = (
      <React.Fragment>
        <ItemsContainer>
          {cartProducts.map((item) => (
            <CartItem
              key={item.productId}
              product={item}
              increment={() => increment(item.productId)}
              decrement={() => decrement(item.productId)}
              remove={() => remove(item.productId)}
              quantity={item.quantity}
            />
          ))}
        </ItemsContainer>
        <CartSummaryCard
          sumQuantity={getSumQuantity()}
          sumPrice={getSumPrice()}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <PageCover
        height="200px"
        image="/images/cart_cover.jpg"
        positionY="center"
      >
        <CartTitle>Your cart</CartTitle>
      </PageCover>
      {renderCart}
    </React.Fragment>
  );
};

export default Cart;
