import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80px;
  background-color: #121212;

  p {
    font-weight: bold;
    font-size: 1.1rem;
    color: #908870;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© GerCzi Company</p>
    </StyledFooter>
  );
};

export default Footer;
