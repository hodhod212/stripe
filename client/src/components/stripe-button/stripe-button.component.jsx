import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import { clearCart } from "../../redux/cart/cart.actions";
import { persistor } from "../../redux/store";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const StripeCheckoutButton = ({ price, onClearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPp21Ei9eadDgdeQQALFAL0uIku87FMAqdgiSMrxrqVKjSHTZhcSnLgMAA348RbP2oLk5LZC4UNw07B5Df2llAJ00N0tIBFag";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",

      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then(async (response) => {
        window.location.href = "/success";
        persistor.purge();

        console.log("response", response.data);
        persistor.purge();

        const cartItems = {};
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

        window.location.href = "/fail";
      });
  };
  return (
    <>
      <StripeCheckout
        label="Pay by Stripe"
        name="Gothenburg Clothing"
        billingAddress
        shippingAddress
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
