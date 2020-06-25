import React from 'react';
import styled from 'styled-components';

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px;
  width: 60%;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 5px 5px 10px rgba(200, 200, 200), -5px -5px 10px rgba(255, 255, 255);
`;

const ContactInfo = styled.div`
  width: 100%;
  border-bottom: 1px solid #908870;
  margin-bottom: 6px;
`;

const ShippingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.div`
  h2 {
    display: inline-block;
    font-size: 1.1rem;
    margin-right: 8px;
  }

  p {
    display: inline-block;
    margin-bottom: 4px;
  }
`;

const PersonalDataCard = ({ user }) => {
  const { address } = user;
  return (
    <ContactInfoContainer>
      <ContactInfo>
        <Item>
          <h2>Name: </h2>
          <p>{`${user.firstName} ${user.lastName}`}</p>
        </Item>
        <Item>
          <h2>Email:</h2>
          <p>{user.email}</p>
        </Item>
        <Item>
          <h2>Phone:</h2>
          <p>{user.phoneNumber ? user.phoneNumber : '-'}</p>
        </Item>
      </ContactInfo>
      <ShippingInfo>
        <Item>
          <h2>Zip:</h2>
          <p>{address.zip ? address.zip : '-'}</p>
        </Item>
        <Item>
          <h2>City:</h2>
          <p>{address.city ? address.city : '-'}</p>
        </Item>
        <Item>
          <h2>Address:</h2>
          <p>{address.street ? address.street : '-'}</p>
        </Item>
      </ShippingInfo>
    </ContactInfoContainer>
  );
};

export default PersonalDataCard;
