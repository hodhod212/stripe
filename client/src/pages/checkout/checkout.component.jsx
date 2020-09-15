import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PayPalPayment from "../../components/stripe-button/PayPalPayment";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
  selectCartItemsRemove,
} from "../../redux/cart/cart.selectors";

// import clearCart from '../../redux/cart/cart.actions';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  ClearButton
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total  }) => (
  
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>


    <ClearButton  >
    {/* <div onClick={() => clearCart()}>&#10095;</div> */}
      Clear button 
      </ClearButton>
    <WarningContainer>
      *Please use your credit cart for payment*
      <br />
    </WarningContainer>
    <StripeCheckoutButton price={total} />
    <PayPalPayment />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  remove: selectCartItemsRemove
  
});


export default connect(mapStateToProps)(CheckoutPage);
