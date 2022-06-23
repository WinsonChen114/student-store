import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({ isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange = () => { }, handleOnSubmitCheckoutFormChange = () => { }, error }) {
  let displaymessage = false
  return (
    <>
      <div className="checkout-form">
        <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org"
          value={checkoutForm.email} onChange={(event) => handleOnCheckoutFormChange("email", event.target.value)}></input>
        <input className="checkout-form-input" type="text" name="name" placeholder="Student Name"
          value={checkoutForm.name} onChange={(event) => handleOnCheckoutFormChange("name", event.target.value)}></input>
      </div>
      <div className="button">
        <button className="checkout-button" onClick={() => {
          handleOnSubmitCheckoutFormChange()
          displaymessage = true
        }}>Checkout</button>
      </div>
      <div className="message">
        {displaymessage && error && <h2 className="error">Error Encountered</h2>}
        {displaymessage && !error && <h2 className="success">Success!</h2>}
      </div>
    </>
  )
}
