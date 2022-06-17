import * as React from "react"
import "./ShoppingCart.css"
import { formatPrice, } from "../../utils/format"

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  return (
    <div className="shopping-cart">
      {/*If no items in shopping cart*/}
      {shoppingCart.length === 0 && <h3 className="notification">No items added to cart yet. Start shopping now!</h3>}
      {/*If there are items in shopping cart*/}
      {shoppingCart.length !== 0 &&
        <div className="table">
          <div className="item-info">
            <div className="header">
              <span className="center">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>
            {shoppingCart.map((item) => {
              //Corresponding item in product array
              let product_item = products.find(x => x.id === item.itemId)
              return (
                <div className="product" key={product_item.name}>
                  <span className="cart-product-name">{product_item.name}</span>
                  <span className="cart-product-quantity">{item.quantity}</span>
                  <span className="cart-product-price">{formatPrice(product_item.price)}</span>
                  <span className="cart-product-subtotal">{formatPrice(item.quantity * product_item.price)}</span>
                </div>)
            })}
          </div>
        </div>

      }
    </div>
  )
}
