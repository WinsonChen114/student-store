import * as React from "react"
import "./CheckoutForm.css"
import {formatPrice} from "../../utils/format"

export default function CheckoutForm({ allProducts, isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange = () => { },
  handleOnSubmitCheckoutFormChange = () => { }, error, setError = () => { }, receipt }) {
  const [displayMessage, setDisplayMessage] = React.useState(false)
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
          setDisplayMessage(true)
          setError()
          handleOnSubmitCheckoutFormChange()
        }}>Checkout</button>
      </div>
      <div className="message">
        {displayMessage && error && <h2 className="error">Error Encountered</h2>}
        {displayMessage && !error &&
          <>
            <h3 className="success">Success!</h3>
            <p>Showing receipt for {receipt.name} at {receipt.email}</p>
            <ul>
              {receipt["order"]?.map((item) => {
                return <li key = {item.itemId}>{item.quantity} {allProducts[item.itemId - 1].name} purchased at a cost of {allProducts[item.itemId - 1].price} for a total cost of {formatPrice(item.quantity * allProducts[item.itemId - 1].price)}.</li>
              })}
            </ul>
            <ul>
              <li>Before taxes, subtotal was {formatPrice(receipt.total/1.0875)}</li>
              <li>After taxes and fees were applied, the total comes out to {formatPrice(receipt.total)}</li>
            </ul>
          </>}
      </div>
    </>
  )
}
