import React from 'react';
import styled from 'styled-components';
import { PageCover } from '../../styled/styledComponents';
import { Pictures } from '../../assets/index';

const HomeContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const CoverTitle = styled.h1`
  display: block;
  position: absolute;
  top: 55%;
  right: 5%;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.09em;

  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 60%;
    padding-top: 15px;
    border-bottom: 4px solid white;
  }
`;

const Logo = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: url(${window.location.origin + '/images/gerczi_logo_white.png'});
  background-size: cover;
  top: 5%;
  right: 12%;
  width: 170px;
  height: 170px;
`;

const Content = styled.div`
  margin: 32px 12px;
  text-align: justify;
`;

const Home = () => {
  return (
    <HomeContainer>
      <PageCover height="400px" image={Pictures.Headers.Home} positionY="50%">
        <Logo />
        <CoverTitle>Gerczi Restaurant</CoverTitle>
      </PageCover>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis diam maximus est
        elementum cursus. Mauris facilisis bibendum rhoncus. Aliquam erat volutpat. Donec semper
        luctus tortor, a tincidunt turpis imperdiet tempor. Sed ante ante, convallis elementum
        neque id, tempus molestie arcu. Aenean non quam mi. Donec consectetur euismod ante nec
        imperdiet. Curabitur lobortis arcu sit amet sollicitudin placerat. Aenean ac semper dolor,
        at posuere nisl. Suspendisse facilisis tristique felis, sit amet fermentum ante tincidunt
        vitae. Fusce commodo lorem ut massa hendrerit auctor. Sed velit augue, venenatis nec diam
        bibendum, feugiat ultrices neque. Duis justo lacus, tincidunt consequat tempor id, molestie
        eu mi. Integer pharetra in dui eu lobortis. Cras nec ultrices mauris. Nulla porttitor sed
        magna rutrum accumsan. Suspendisse semper sapien eget orci mattis dictum. Etiam eleifend
        tellus aliquet ante vulputate imperdiet. Integer viverra tellus urna, vel fringilla velit
        iaculis nec. Mauris quis molestie sem. Nullam lacus magna, consequat rutrum felis a, auctor
        volutpat magna. Etiam pharetra commodo sollicitudin. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Phasellus neque odio, porttitor non nibh id, vehicula ullamcorper
        sapien. Ut lobortis purus libero, vitae congue tellus luctus vitae. Vestibulum id tempor
        elit, et consequat orci. Mauris et dictum nunc, mattis varius tellus. Sed vulputate a lacus
        eu tempor. Vestibulum a sem ac libero molestie finibus. Nullam ac arcu quis eros rhoncus
        dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Cras dictum viverra felis vel sollicitudin. Phasellus a eros sit amet
        mauris imperdiet interdum. Duis condimentum orci lorem, eget eleifend justo ultrices sed.
        Nunc nec tortor ultricies dolor luctus viverra. Nam in lacus sapien. Aliquam efficitur
        ultrices eros a pharetra. Sed dignissim justo mollis tincidunt molestie. Aliquam erat
        volutpat. Vestibulum pretium commodo eros, nec imperdiet risus laoreet quis. Donec faucibus
        neque eu dui rutrum, in volutpat nulla pretium. Morbi eros diam, vehicula in lorem eget,
        facilisis sagittis sem. Morbi tincidunt sem dui, eu semper mauris semper eget. Donec non
        dolor in sem commodo suscipit. Generated 5 paragraphs, 329 words, 2259 bytes of Lorem Ipsum
      </Content>
    </HomeContainer>
  );
};

export default Home;
