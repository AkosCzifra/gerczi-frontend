export const getCart = () => {
  let cart = [];
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  return cart;
};

export const addProductToCart = ({ _id, price, name, imageUrl }) => {
  let cart = getCart();

  let contains = false;
  cart.map((item) => {
    if (item.productId === _id) {
      contains = true;
      return (item.quantity += 1);
    }
    return item;
  });

  if (!contains)
    cart.push({
      productId: _id,
      quantity: 1,
      price: price,
      name: name,
      imageUrl: imageUrl,
    });
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
};

export const incrementProductInCart = (id) => {
  let cart = getCart();

  cart.map((item) => {
    if (item.productId === id) {
      return (item.quantity += 1);
    }
    return item;
  });

  localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
};

export const decrementProductQuantity = (id) => {
  let cart = getCart();
  if (cart.length === 0) return;

  cart.map((item) => {
    if (item.productId === id && item.quantity >= 2) {
      return (item.quantity -= 1);
    }
    return item;
  });

  localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
};

export const deleteProductFromCart = (id) => {
  let cart = getCart();
  if (cart.length === 0) return;

  cart = cart.filter((item) => item.productId !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
};
