import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getCart,
  addProductToCart,
  incrementProductInCart,
  decrementProductQuantity,
  deleteProductFromCart,
} from '../utils/cart-manager/cartManager';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState(getCart());

  const addProduct = (product) => {
    const modifiedCart = addProductToCart(product);
    setCart(modifiedCart);
    toast.info(`${product.name} added to the cart!`, { autoClose: 2000 });
  };

  const increment = (id) => {
    const modifiedCart = incrementProductInCart(id);
    setCart(modifiedCart);
  };

  const decrement = (id) => {
    const modifiedCart = decrementProductQuantity(id);
    setCart(modifiedCart);
  };

  const remove = (id) => {
    const modifiedCart = deleteProductFromCart(id);
    setCart(modifiedCart);
  };

  const getSumQuantity = () => {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.quantity));
    return sum;
  };

  const getSumPrice = () => {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.price * item.quantity));
    return sum;
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addProduct: addProduct,
        increment: increment,
        decrement: decrement,
        remove: remove,
        getSumQuantity: getSumQuantity,
        getSumPrice: getSumPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
