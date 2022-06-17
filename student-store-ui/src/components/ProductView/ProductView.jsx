import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView({ product, productId, quantity, handleAddItemToCart = () => { }, handleRemoveItemFromCart = () => { }}) {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard key={product.id} product={product} productId={product.id} quantity = {quantity}
                     handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} showDescription={true}/>
    </div>
  )
}
