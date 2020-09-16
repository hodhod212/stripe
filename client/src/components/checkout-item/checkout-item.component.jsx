import React from 'react';
import { connect } from 'react-redux';
import StripeCheckoutButton from "../stripe-button/stripe-button.component";

import {
  clearItemFromCart,
  addItem,
  removeItem,
  clearCart
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
  ClearButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, onClearCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
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