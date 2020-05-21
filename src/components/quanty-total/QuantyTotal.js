import React from 'react';
import styled, { css } from 'styled-components';

import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const QuantyTotalContainer = styled.div`
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Increment = styled(AddBoxIcon)`
  color: #8e1717;
  cursor: pointer;
`;

const Quantity = styled.p`
  color: #886735;
  padding: 0 8px 0 8px;
  width: 20px;
  font-size: 1.3rem;
  text-align: center;
`;

const Decrement = styled(IndeterminateCheckBoxIcon)`
  color: #8e1717;
  cursor: pointer;

  ${(props) =>
    props.isone === 'true' &&
    css`
      cursor: unset;
      color: #908870;
    `}
`;

const SumPrice = styled.p`
  color: #886735;
  text-align: center;
  font-size: 1.3rem;
  width: 60px;
  margin: 0 12px 0 12px;
`;

const Delete = styled(DeleteForeverIcon)`
  color: #8e1717;
  cursor: pointer;
  width: 30px !important;
  height: 30px !important;
`;

const QuantyTotal = (props) => {
  return (
    <QuantyTotalContainer>
      <Decrement
        onClick={props.decrement}
        isone={props.quantity === 1 ? 'true' : 'false'}
      />
      <Quantity>{props.quantity}</Quantity>
      <Increment onClick={props.increment} />
      <SumPrice>${props.sumPrice}</SumPrice>
      <Delete onClick={props.remove} />
    </QuantyTotalContainer>
  );
};

export default QuantyTotal;
