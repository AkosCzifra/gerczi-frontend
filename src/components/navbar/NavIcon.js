import React, { useState } from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const StyledLi = styled.li`
    width: calc(var(--nav-size)*0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledA = styled.a`
    text-decoration: none;
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
    transition: filter 300ms;
    
    &:hover {
        filter: brightness(1.2);
    }

    & svg {
        fill: ${({ active }) => active ? '#886735' : 'var(--text-color)'};
        width: 20px;
        height: 20px;
    }
`

function NavIcon(props) {
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false)
    return (
        <StyledLi>
            <StyledA href={props.url} active={pathname === props.url} onClick={() => setOpen(!open)}>
                {props.icon}
            </StyledA>
            {open && props.children}
        </StyledLi>
    )
}

export default NavIcon;