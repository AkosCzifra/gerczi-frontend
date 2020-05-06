import React from 'react';
import { NavLink } from 'react-router-dom'

const NavItem = ({ url, children }) => {
    return (
        <li>
            <NavLink to={url}>
                {children}
            </NavLink>
        </li>
    )
}

export default NavItem;