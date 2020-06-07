import React from 'react';
import styled from 'styled-components';

import { PageCover } from '../../styled/styledComponents';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverTitle = styled.h1`
  position: absolute;
  top: 45%;
  left: 44%;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.09em;
`;

const Logo = styled.div`
  width: 160px;
  height: 160px;
  background: url(${window.location.origin + '/images/gerczi_logo_black.png'});
  background-size: cover;
`;

const ContactInfoWrapper = styled.div`
  margin: 42px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 12px;
    text-transform: uppercase;
    color: #141414;
    letter-spacing: 0.09em;
    font-weight: normal;

    &::after {
      content: '';
      display: block;
      margin: 0 auto;
      width: 60%;
      padding-top: 15px;
      border-bottom: 4px solid #141414;
    }
  }

  h2 {
    margin: 12px 0 36px 0;
    color: #171717;
    font-size: 1.2rem;
    margin-left: 12px;
  }
`;

const ContactInfo = styled.section`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  color: #886735;

  p {
    color: #141414;
    font-size: 1.2rem;
    margin-left: 12px;
  }
`;

const MapTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px 0;
  border-top: 1px solid #908870;

  p {
    color: #886735;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.09em;
  }
`;

const MapOuterDiv = styled.div`
  position: relative;
  text-align: right;
  height: 500px;
  width: 100%;
`;

const MapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
`;

const Contact = () => {
  return (
    <React.Fragment>
      <PageCover height="200px" image="/images/contact_cover.jpg" positionY="75%">
        <CoverTitle>Contact</CoverTitle>
      </PageCover>
      <ContactContainer>
        <ContactInfoWrapper>
          <Logo />
          <h1>Gerczi restaurant</h1>
          <h2>Mon-Sat: 11am to 8pm</h2>
          <ContactInfo>
            <EmailIcon />
            <p>restaurant@gerczi.com</p>
          </ContactInfo>
          <ContactInfo>
            <PhoneIcon />
            <p>+36 30 616 61 61</p>
          </ContactInfo>
          <ContactInfo>
            <LocationOnIcon />
            <p>1138, Budapest Váci street 178.</p>
          </ContactInfo>
        </ContactInfoWrapper>
        <MapTitle>
          <p>Come on in and pull up a chair.</p>
        </MapTitle>

        <MapOuterDiv>
          <MapCanvas>
            <iframe
              title="location"
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=dunapl%C3%A1za&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </MapCanvas>
        </MapOuterDiv>
      </ContactContainer>
    </React.Fragment>
  );
};

export default Contact;
