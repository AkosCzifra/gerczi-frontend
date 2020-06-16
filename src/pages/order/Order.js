import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Order = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  if (cart && cart.length === 0) window.location.replace('/menu');
  return <div>Order</div>;
};

export default Order;
