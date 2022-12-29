export const addItemToCart = (cartItems, payload) => {
  const { quantity, cartItemToAdd } = payload;
  const existingItem = cartItems.find((item) => item.id === cartItemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...cartItemToAdd, quantity: item.quantity + quantity }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity }];
};

export const cartItemsCount = (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0);
export const cartSubTotal = (items) =>
  items.reduce((acc, item) => acc + item.quantity * item.attributes.price, 0);
