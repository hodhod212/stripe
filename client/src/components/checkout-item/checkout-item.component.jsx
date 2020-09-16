<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
=======
import React from 'react';
import { connect } from 'react-redux';
import StripeCheckoutButton from "../stripe-button/stripe-button.component";

>>>>>>> delete-cart
import {
  clearItemFromCart,
  addItem,
  removeItem,
<<<<<<< HEAD
} from "../../redux/cart/cart.actions";
=======
  clearCart
} from '../../redux/cart/cart.actions';
>>>>>>> delete-cart

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
<<<<<<< HEAD
} from "./checkout-item.styles";
=======
  ClearButton
} from './checkout-item.styles';
>>>>>>> delete-cart

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, onClearCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const qw = { quantity, price, name };
  axios
    .post("http://localhost:5000/create", qw)
    .then(() => console.log("Book Created"))
    .catch((err) => {
      console.error(err);
    });
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
      
    </CheckoutItemContainer>
    
  );
};

<<<<<<< HEAD
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
=======
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  onClearCart: () => (dispatch(clearCart()))
});
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClearCart: () => (dispatch(clearCart()))
//   }
// };
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
>>>>>>> delete-cart
