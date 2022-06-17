import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  return (
    <section className={isOpen ? "sidebar" : "sidebar closed"}>
      <button type="button" className="toggle-button" onClick={handleOnToggle}>Button</button>
      {isOpen &&
        <><ShoppingCart isOpen={isOpen} products={products} shoppingCart={shoppingCart}/>
          <CheckoutForm /> </>}
    </section>
  )
}
