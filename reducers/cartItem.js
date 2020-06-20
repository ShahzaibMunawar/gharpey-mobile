import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  AGJUST_PRICE
} from "./action";
const INIT = {
  cart: [],
  total: 0,
  addedItems: []
};

const cartItems = (state = INIT, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      var flag = true;
      state.cart.map(item => {
        if (action.payload.id === item.id) {
          console.log("value already exist");
          flag = false;
        } else {
          console.log("New value");
        }
      });
      console.log(flag);
      if (flag) {
        return {
          ...state,
          cart: [action.payload, ...state.cart],
          total: state.total + action.payload.price
        };
      } else {
        return state;
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        total: state.total - action.payload.price,
        cart: state.cart.filter(cartItem => {
          return cartItem.id !== action.payload.id;
        })
      };
    case "AGJUST_PRICE":
      // console.log("AGJUST_PRICE start");
      // console.log(
      //   "This product total" + action.payload.price * action.payload.quantity
      // );
      // console.log("State Condition = ");
      // console.log(state.cart);
      var temptotal = 0;
      state.cart.map(product => {
        // console.log("product.price = " + product.price);
        // console.log("product.quantity = " + product.quantity);
        temptotal = temptotal + product.price * product.quantity;
      });
      // console.log("temptotal = " + temptotal);
      return {
        ...state,
        total: temptotal
      };
  }
  return state;
};

export default cartItems;
