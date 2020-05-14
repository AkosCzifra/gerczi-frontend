import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from '../../axios';
import ErrorHandler from '../../components/error-handler/ErrorHandler';
import MenuCategory from './menu-category/MenuCategory';

const MenuCover = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: url(${window.location.origin + '/images/menu_cover.jpg'});
  background-size: cover;
  background-position: center 85%;
`;

const Logo = styled.div`
  position: absolute;
  top: 4%;
  left: 6%;
  width: 150px;
  height: 150px;
  background: url(${window.location.origin + '/images/gerczi_logo_white.png'});
  background-size: cover;

  @media (min-width: 800px) {
    top: 5%;
    left: 8%;
    width: 200px;
    height: 200px;
  }
`;

const MenuTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  color: #886735;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  text-align: center;
  padding: 0 8px;
  box-sizing: border-box;
`;

const LogoTitle = styled.h1`
  display: none;

  @media (min-width: 600px) {
    display: block;
    position: absolute;
    top: 37%;
    left: 6%;
    color: white;
    font-size: 1.5rem;
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
  }

  @media (min-width: 800px) {
    font-size: 2rem;
    top: 50%;
    left: 8%;
  }
`;

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        let result = await axios.get('/categories');
        if (result && result.data.data) {
          result = result.data.data.map((category) => {
            return { ...category, isOpen: false };
          });
          setCategories(result);
        }
      } catch (err) {
        setError(err);
      }
    };
    getCategories();
  }, []);

  const showProductsByCategory = (id) => {
    const openCategory = categories.map((category) => {
      if (category._id === id) {
        category.isOpen = !category.isOpen;
      }
      return category;
    });
    setCategories(openCategory);
  };

  if (error) return <ErrorHandler error={error} />;

  if (!categories) return <h1>loading...</h1>;

  return (
    <React.Fragment>
      <MenuCover>
        <Logo />
        <LogoTitle>Our menu</LogoTitle>
      </MenuCover>
      <MenuTitle>
        ENJOY GerCzi burgers AT HOME, AT WORK AND ALL YEAR ROUND.
      </MenuTitle>
      {categories.map((category) => (
        <MenuCategory
          key={category._id}
          isOpen={category.isOpen}
          products={category.products}
          image={category.imageUrl}
          clickHandler={() => showProductsByCategory(category._id)}
        >
          {category.name}
        </MenuCategory>
      ))}
    </React.Fragment>
  );
};

export default Menu;
