import React, { useEffect, useState } from 'react';

import axios from '../../axios';
import ErrorHandler from '../../components/errorHandler/ErrorHandler';
import styled from 'styled-components';

const Test = styled.div``;

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await axios.get('/categories');
        if (result && result.data.data) {
          setCategories(result.data.data);
        }
      } catch (err) {
        setError(err);
      }
    };
    getCategories();
  }, []);

  if (error) return <ErrorHandler error={error} />;

  if (!categories) return <h1>loading...</h1>; //kell pörgőfasz

  return (
    <Test>
      {categories.map((category) => (
        <h1 key={category._id}>{category.name}</h1>
      ))}
    </Test>
  );
};

export default Menu;
