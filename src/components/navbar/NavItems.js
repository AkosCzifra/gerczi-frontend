import React from 'react';

import NavItem from './NavItem';

const NavItems = (props) => {
  return (
    <ul>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/menu">Menu</NavItem>
      <NavItem url="/contact">Contact</NavItem>
      <NavItem url="/about">About</NavItem>
      <NavItem url="/cart">Cart</NavItem>
    </ul>
  );
};

export default NavItems;
