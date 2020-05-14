import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 120px;
  margin: 18px 0;
  border-radius: 10px;
  background: #f5f5f5;
  box-shadow: 5px 5px 10px rgba(200, 200, 200),
    -5px -5px 10px rgba(255, 255, 255);
`;

const ProductPicture = styled.div`
  margin: 18px 18px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: ${(props) => `url(${props.picture})`};
  border: 1px solid #886735;
  background-size: cover;
  background-position: center center;
  box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfo = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  color: #8e1717;
  font-weight: 300;
  margin-bottom: 8px;
`;

const ProductIngredients = styled.p`
  color: #908870;
  font-style: italic;
  font-size: 1rem;
`;

const ProductPriceWrapper = styled.div`
  width: 20%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.p`
  width: 50px;
  color: #908870;
  font-weight: 400;
  font-size: 1.5rem;
  margin-right: 12px;
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
    border: 1.2px solid #8e1717;
    color: white;
    background: #8e1717;
    cursor: pointer;
  }
`;

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductPicture
        picture={
          product.imageUrl && `http://localhost:6969/${product.imageUrl}`
        }
      />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductIngredients>
          {product.ingredients.join(', ')}
        </ProductIngredients>
      </ProductInfo>
      <ProductPriceWrapper>
        <ProductPrice>{product.price} $</ProductPrice>
        <BuyButton>Add to cart</BuyButton>
      </ProductPriceWrapper>
    </ProductContainer>
  );
};

export default Product;
