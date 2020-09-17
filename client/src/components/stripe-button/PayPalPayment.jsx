import React, { useState } from "react";
import PayPal from "./PayPal";
import { persistor } from "../../redux/store";
function PayPalPayment() {
  const [checkout, setCheckout] = useState(false);

  return (
    <div>
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckout(true);
          }}
        >
          Pay by PayPal
        </button>
      )}
    </div>
  );
}
persistor.purge();
export default PayPalPayment;
