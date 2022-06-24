import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({ allProducts, isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, error, setError, receipt}) {
  return (
    <section className={isOpen ? "sidebar" : "sidebar closed"}>
      <button type="button" className="toggle-button" onClick={handleOnToggle}>Button</button>
      {isOpen &&
        <><ShoppingCart isOpen={isOpen} allProducts={allProducts} shoppingCart={shoppingCart} />
          <CheckoutForm allProducts={allProducts} isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutFormChange={handleOnSubmitCheckoutForm} error={error} setError={setError} receipt={receipt}/> </>}
    </section>
  )
}
