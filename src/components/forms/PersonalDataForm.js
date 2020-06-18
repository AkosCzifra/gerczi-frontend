import React from 'react';
import styled from 'styled-components';

import Input from '../input/Input';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const PersonalDataForm = ({ personalData, inputChangeHandler }) => {
  let formElementsArray = [];
  for (let element in personalData) {
    formElementsArray.push({ id: element, config: personalData[element] });
  }
  return (
    <FormContainer>
      {formElementsArray.map((element) => (
        <Input
          key={element.id}
          id={element.id}
          type={element.config.elementConfig.type}
          label={element.config.elementConfig.name}
          autoComplete={element.config.elementConfig.autoComplete}
          invalid={!element.config.valid}
          touched={element.config.touched}
          errorMsg={element.config.error}
          changeHandler={(e) => inputChangeHandler(e, element.id)}
        />
      ))}
    </FormContainer>
  );
};

export default PersonalDataForm;
