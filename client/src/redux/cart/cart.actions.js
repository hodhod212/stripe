import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEMs,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const  clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = cartItems => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems
});
export function emptyCart()  {
  console.log("clear_action")
  return {
    type: CartActionTypes.EMPTY_CART
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClearCart: () => (dispatch(clearCart()))
  }
};