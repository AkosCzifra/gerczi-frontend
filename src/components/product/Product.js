import React, { useContext } from 'react';
import styled from 'styled-components';

import { CartContext } from '../../context/CartContext';
import { API_ENDPOINT } from '../../constants/apiEndpointConfig';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: auto;
  margin: 18px 0;
  padding: 6px;
  border-radius: 10px;
  background: #f5f5f5;
  box-shadow: 5px 5px 10px rgba(200, 200, 200), -5px -5px 10px rgba(255, 255, 255);

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const ProductPictureInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 12px;

  @media (min-width: 700px) {
    margin: 0;
    justify-content: flex-start;
    width: 80%;
  }

  @media (min-width: 1000px) {
    padding-left: 24px;
  }
`;

const ProductPicture = styled.div`
  margin-right: 6px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: ${(props) => `url(${props.picture})`};
  border: 1px solid #886735;
  background-size: cover;
  background-position: center center;
  box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.75);

  @media (min-width: 700px) {
    margin: 8px;
  }
`;

const ProductInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    padding: 0 12px;
  }
`;

const ProductTitle = styled.h1`
  font-size: 1.5rem;
  color: #8e1717;
  font-weight: 400;
  margin-bottom: 8px;
`;

const ProductIngredients = styled.p`
  color: #908870;
  font-style: italic;
  font-size: 0.9rem;

  @media (min-width: 700px) {
    font-size: 1rem;
  }
`;

const ProductPriceWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0 10px 10px 0;

  @media (min-width: 700px) {
    width: 40%;
    padding: 0 15px 0 0;
  }

  @media (min-width: 1000px) {
    padding-right: 24px;
  }
`;

const ProductPrice = styled.p`
  width: 50px;
  color: #908870;
  font-weight: 400;
  font-size: 1.3rem;
  margin-right: 4px;

  @media (min-width: 700px) {
    margin-right: 12px;
  }
`;

const BuyButton = styled.button`
  color: #8e1717;
  border-radius: 10px;
  border: 1.5px solid #8e1717;
  background: transparent;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  padding: 8px 6px 6px 6px;

  &:hover {
    border: 1.5px solid #8e1717;
    color: white;
    background: #8e1717;
    cursor: pointer;
  }
`;

const Product = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  return (
    <ProductContainer>
      <ProductPictureInfoWrapper>
        <ProductPicture picture={product.imageUrl && `${API_ENDPOINT + product.imageUrl}`} />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductIngredients>{product.ingredients.join(', ')}</ProductIngredients>
        </ProductInfo>
      </ProductPictureInfoWrapper>
      <ProductPriceWrapper>
        <ProductPrice>{product.price} $</ProductPrice>
        <BuyButton onClick={() => addProduct(product)}>Add to cart</BuyButton>
      </ProductPriceWrapper>
    </ProductContainer>
  );
};

export default Product;
