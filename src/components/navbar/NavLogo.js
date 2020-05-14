import React from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'


const Link = styled.a`
    text-decoration: none;
    --button-size: calc(var(--nav-size) * 0.5);
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    filter: brightness(85%);

    
    &:hover {
        filter: brightness(100%);
    }

    & img {
        width: 55px;
        height: 55px;
    }
`

function NavLogo({ url }) {
    const { pathname } = useLocation()
    return (
        <Link href={url} active={pathname === url}>
            <img src={require('../icons/gerczi-white.png')} alt="GerCzi"></img>
        </Link >

    )
}

export default NavLogo;