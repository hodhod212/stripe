import React, { useState, useEffect } from "react";
import { persistor } from "../../redux/store";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import Logo from "./images/star.svg";
import { clearCart } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const StripeCheckoutButton = ({ price, onClearCart }) => {
  // const myprops = Props.cartItems
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPp21Ei9eadDgdeQQALFAL0uIku87FMAqdgiSMrxrqVKjSHTZhcSnLgMAA348RbP2oLk5LZC4UNw07B5Df2llAJ00N0tIBFag";

  const onToken = (token) => {
    console.log("YOOOOOOOOOOO");
    axios({
      url: "payment",
      method: "post",

      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then(async (response) => {
        alert("succesful payment");
        console.log("response", response.data);
        persistor.purge();
        
        
        const cartItems = {
          
        };

        onClearCart();

        await axios
          .post("http://localhost:5000/create", cartItems)
          .then(() => console.log(cartItems))
          .catch((err) => {
            console.error("");
          });
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <>
      <StripeCheckout
        label="Pay by Stripe"
        name="Gothenburg Clothing"
        billingAddress
        shippingAddress
        image={Logo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay by Stripe"
        token={onToken}
        stripeKey={publishableKey}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onClearCart: () => dispatch(clearCart()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});


export default connect( mapStateToProps, mapDispatchToProps)(StripeCheckoutButton);
// export default connect(mapDispatchToProps)(StripeCheckoutButton)