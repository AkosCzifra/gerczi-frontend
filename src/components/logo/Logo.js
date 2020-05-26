import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoImage = styled.div`
  width: 60px;
  height: 60px;
  background: url(${window.location.origin + '/images/logo.jpg'});
  background-size: cover;
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoImage />
    </Link>
  );
};

export default Logo;
