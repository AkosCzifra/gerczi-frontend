import React from 'react';
import { Link } from 'react-router-dom';

import CartWithCounter from '../cart-with-counter/CartWithCounter';

const NavIcons = ({ quantity, navbarHandler }) => {
  return (
    <Link to="/cart" onClick={navbarHandler}>
      <CartWithCounter quantity={quantity} />
    </Link>
  );
};

export default NavIcons;
