import React from 'react';
import styled from 'styled-components';

import QuantyTotal from '../../../components/quanty-total/QuantyTotal';
import { API_ENDPOINT } from '../../../constants/apiEndpointConfig';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  width: 80%;
  height: auto;
  margin: 18px 0;
  border-radius: 10px;
  background: #f5f5f5;
  box-shadow: 5px 5px 10px rgba(200, 200, 200), -5px -5px 10px rgba(255, 255, 255);

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

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
  margin: 6px 6px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: ${(props) => `url(${props.picture})`};
  border: 1px solid #886735;
  background-size: cover;
  background-position: center center;
  box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.75);
`;

const ProductTitle = styled.h1`
  font-size: 1.5rem;
  color: #8e1717;
  font-weight: 400;
  width: 60%;
  margin-left: 12px;

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

const QuantyTotalWrapper = styled.div`
  align-self: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 1000px) {
    padding-right: 80px;
  }
`;

const CartItem = ({ product, increment, decrement, remove, quantity }) => {
  return (
    <ProductContainer>
      <ProductInfo>
        <ProductPicture picture={`${API_ENDPOINT + product.imageUrl}`} />
        <ProductTitle>{product.name}</ProductTitle>
      </ProductInfo>
      <QuantyTotalWrapper>
        <QuantyTotal
          key={product.productId}
          increment={increment}
          decrement={decrement}
          remove={remove}
          sumPrice={product.price * quantity}
          quantity={quantity}
        />
      </QuantyTotalWrapper>
    </ProductContainer>
  );
};

export default CartItem;
