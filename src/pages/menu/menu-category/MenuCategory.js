import React from 'react';
import styled, { css } from 'styled-components';

import Product from '../../../components/product/Product';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { apiEndpoint } from '../../../apiEndpointConfig';

const CategoryBadge = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2rem;
  padding: 60px 0;
  border-top: 0.05px solid #886735;
  cursor: pointer;
  color: ${(props) => (props.isOpen ? 'white' : 'black')};
  background-color: ${(props) => (props.isOpen ? '#141414' : 'white')};
  transition: background-color 0.7s ease-in-out;

  &:hover {
    color: white;
    background-color: #141414;
  }
`;

const CategoryTitle = styled.h1`
  position: relative;
  z-index: 5;
  pointer-events: none;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  padding: 0 70px;

  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;

const OpenCloseIcon = styled(HighlightOffIcon)`
  position: absolute;
  top: 38%;
  right: 6%;
  width: 30px !important;
  height: 30px !important;
  z-index: 5;
  pointer-events: none;
  transform: rotate(${(props) => (props.isopen === 'true' ? 0 : -135)}deg);
  transition: transform 1.2s ease !important;

  @media (min-width: 700px) {
    top: 33%;
    width: 45px !important;
    height: 45px !important;
  }
`;

const CategoryBadgePicture = styled.div`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.isOpen ? `url(${props.image})` : `#141414`)};
  padding-bottom: 80px;
  transform: translateY(0) scale(1);
  transition: opacity 1.2s, transform 1.2s, scale 1s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 0.75;
      background-size: cover;
      background-position: center center;
      transform: translateY(-80px) scale(1.2);
    `}

  &:hover {
    opacity: 0.75;
    background: ${(props) => `url(${props.image})`};
    background-size: cover;
    background-position: center center;
    transform: translateY(-80px)
      ${(props) => (props.isOpen ? `scale(1.2)` : ``)};
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 1.2s ease-in-out, opacity 1.2s;
  ${(props) =>
    props.isOpen &&
    css`
      max-height: 800px;
      opacity: 1;
    `}
`;

const MenuCategory = (props) => {
  return (
    <React.Fragment>
      <CategoryBadge onClick={props.clickHandler} isOpen={props.isOpen}>
        <CategoryTitle>{props.children}</CategoryTitle>
        <OpenCloseIcon isopen={props.isOpen.toString()} />
        <CategoryBadgePicture
          image={`${apiEndpoint + props.image}`}
          isOpen={props.isOpen}
        />
      </CategoryBadge>
      <ProductsContainer isOpen={props.isOpen}>
        {props.products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </ProductsContainer>
    </React.Fragment>
  );
};

export default MenuCategory;
