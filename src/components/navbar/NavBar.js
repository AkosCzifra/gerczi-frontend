import React from 'react';
import styled from 'styled-components'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import NavItems from './NavItems'
import NavIcon from './NavIcon'
import NavLogo from './NavLogo'
import NavLink from './NavLink'
import DropdownMenu from './DropdownMenu';



const Nav = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
  display: flex;
  justify-content: space-between;
`

function Navbar() {
    return (
        <Nav>
            <NavLogo url="/"></NavLogo>
            <NavItems>
                <NavLink name="Menu" url="/menu"></NavLink>
                <NavLink name="Contact" url="/contact"></NavLink>
                <NavLink name="About" url="/about"></NavLink>
                <NavIcon icon={<AccountCircleIcon />} url="#">
                    <DropdownMenu />
                </NavIcon>
                <NavIcon icon={<ShoppingCartIcon />} url="/cart"></NavIcon>
            </NavItems>
        </Nav>
    )
}

export default Navbar;