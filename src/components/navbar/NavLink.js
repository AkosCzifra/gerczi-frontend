import React from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const StyledLi = styled.li`
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Link = styled.a`
    color: ${({ active }) => active ? '#886735' : 'var(--text-color)'};
    text-decoration: none;
    border-radius: 50%;
    padding: 2rem;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
  
    &:hover {
        filter: ${({ active }) => active ? 'brightness(90%)' : 'brightness(1.2)'};
    }

    & svg {
        fill: var(--text-color);
        width: 20px;
        height: 20px;
    }
`



function NavLink({ url, name }) {
    const { pathname } = useLocation()
    return (
        <StyledLi>
            <Link href={url} active={pathname === url}>
                {name}
            </Link>
        </StyledLi>

    )
}

export default NavLink;