const getCartFromLocalhost = () => {
  let cart = [];
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  return cart;
};

export const addProductToCart = (id) => {
  let cart = getCartFromLocalhost();

  let contains = false;
  cart.map((item) => {
    if (item.productId === id) {
      contains = true;
      return (item.quantity += 1);
    }
    return item;
  });

  if (!contains) cart.push({ productId: id, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const decrementProductQuantity = (id) => {
  let cart = getCartFromLocalhost();
  if (cart.length === 0) return;

  cart.map((item) => {
    if (item.productId === id && item.quantity >= 2) {
      return (item.quantity -= 1);
    }
    return item;
  });

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const deleteProductFromCart = (id) => {
  let cart = getCartFromLocalhost();
  if (cart.length === 0) return;

  cart = cart.filter((item) => item.productId !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
};
