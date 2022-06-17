import * as React from "react"
import "./ProductCard.css"
import { formatPrice, } from "../../utils/format"
import { Link, } from "react-router-dom"

export default function ProductCard({ product, productId, quantity = 0, handleAddItemToCart, handleRemoveItemFromCart, showDescription }) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + product.id}>
          <img src={product.image} />
        </Link>
      </div>
      <p className="product-name">{product.name}</p>
      <p className="product-price">{formatPrice(product.price)}</p>
      {showDescription &&
        <p className="product-description">{product.description}</p>
      }
      <button type="button" className="add" onClick={() => handleAddItemToCart(productId)}>+</button>
      <button type="button" className="remove" onClick={() => handleRemoveItemFromCart(productId)}>-</button>
      <p className="product-quantity">{quantity}</p>
    </div>
  )
}
