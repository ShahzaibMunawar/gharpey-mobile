const INIT = {};

const cartItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      console.log(action.payload);
      return state.filter(cartItem => {
        cartItem.id !== action.payload.id;
      });
  }

  return state;
};

export default cartItems;
