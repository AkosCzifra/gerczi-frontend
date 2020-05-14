import React from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const LeftIcon = styled.span`
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms, background-color 400ms;
    margin-right: 0.5rem;

    & svg {
        fill: var(--text-color);
        width: 20px;
        height: 20px;
    }
`

const MenuItem = styled.a`
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
    height: 50px;
    color: ${({ active }) => active ? '#886735' : 'var(--text-color)'};
    text-decoration: none;
    &:hover {
        filter: brightness(1.3);
        background-color: #525357;
        ${LeftIcon} {
            background-color: gray;
        }
    }

    & svg {
        fill: ${({ active }) => active ? '#886735' : 'var(--text-color)'};
    }
`

const RightIcon = styled.span`
    margin-left: auto;
    right: 20%;
`


function DropdownItem({ children, leftIcon, rightIcon, url, goToMenu, setMenu }) {
    const { pathname } = useLocation();
    return (
        <MenuItem href={url} active={pathname === url} onClick={() => goToMenu && setMenu(goToMenu)}>
            <LeftIcon>{leftIcon}</LeftIcon>
            {children}
            <RightIcon>{rightIcon}</RightIcon>
        </MenuItem>
    )
}
export default DropdownItem;