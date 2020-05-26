import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarLinkWrapper = styled.li`
  list-style: none;
  width: 100%;
  text-align: center;
  border-top: 0.5px solid #886735;

  &:last-child {
    border-bottom: 0.1px solid #886735;
  }

  @media (min-width: 700px) {
    list-style: none;
    position: relative;
    margin: 0 12px;
    border: none;

    &:last-child {
      border: none;
    }

    &:nth-child(n + 2)::before {
      content: '';
      background: #886735;
      display: block;
      height: 16px;
      position: absolute;
      top: -2px;
      left: -12px;
      width: 1px;
    }
  }
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #908870;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  padding: 12px 0 10px 0;
  display: block;

  &.active {
    color: white;
    background-color: #886735;
  }

  @media (min-width: 700px) {
    padding: 0;
    display: inline;

    &.active {
      color: #886735;
      background: inherit;
    }
  }
`;

const NavItem = ({ url, children, navbarHandler }) => {
  return (
    <NavbarLinkWrapper onClick={navbarHandler}>
      <NavbarLink to={url} exact>
        {children}
      </NavbarLink>
    </NavbarLinkWrapper>
  );
};

export default NavItem;
