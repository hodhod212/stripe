import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { clearCart } from "../../redux/cart/cart.actions";
import { persistor } from "../../redux/store";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
function Paypal({ total, onClearCart }) {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking product",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order) {
            onClearCart();
            persistor.purge();
            window.location.href = "/success";
          } else {
            window.location.href = "/fail";
          }
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [total, onClearCart]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  onClearCart: () => dispatch(clearCart()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps, mapDispatchToProps)(Paypal);
