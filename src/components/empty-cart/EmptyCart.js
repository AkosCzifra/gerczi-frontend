import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  width: 80%;
  height: auto;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 5px 5px 10px rgba(200, 200, 200),
    -5px -5px 10px rgba(255, 255, 255);

  @media (min-width: 700px) {
    width: 60%;
  }

  h1 {
    margin: 8px 0;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    text-align: center;
    color: #8e1717;
  }
`;

const EmptyCartIcon = styled(RemoveShoppingCartIcon)`
  width: 40px !important;
  height: 40px !important;
  margin: 8px 0;
  color: #908870;
`;

const MenuLink = styled(Link)`
  color: white;
  border-radius: 10px;
  background: #886735;
  font-weight: 400;
  font-size: 1rem;
  padding: 8px 16px 6px 16px;
  margin: 8px 0;
  text-decoration: none;

  &:hover {
    background: #8e1717;
    cursor: pointer;
  }
`;

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <h1>There are currently no items in your shopping cart.</h1>
      <EmptyCartIcon />
      <MenuLink to="/menu">Go to menus</MenuLink>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
