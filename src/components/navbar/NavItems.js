import React from 'react';
import styled from 'styled-components'



const StyledUl = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  `

function NavItems(props) {
    return (
        <StyledUl>
            {props.children}
        </StyledUl>
    )
}

export default NavItems;