import React from 'react';
import styled from 'styled-components';

import Input from '../input/Input';

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShippingAddressForm = ({ address, inputChangeHandler }) => {
  let formElementsArray = [];
  for (let element in address) {
    formElementsArray.push({ id: element, config: address[element] });
  }
  return (
    <FormContainer>
      {formElementsArray.map((element) => (
        <InputWrapper key={element.id}>
          <Input
            id={element.id}
            type={element.config.elementConfig.type}
            label={element.config.elementConfig.name}
            autoComplete={element.config.elementConfig.autoComplete}
            invalid={!element.config.valid}
            touched={element.config.touched}
            errorMsg={element.config.error}
            changeHandler={(e) => inputChangeHandler(e, element.id)}
          />
        </InputWrapper>
      ))}
    </FormContainer>
  );
};

export default ShippingAddressForm;
