import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({ products = [], handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} productId={product.id} quantity={shoppingCart.find(x => x.itemId === product.id)?.quantity}
                     handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} showDescription={false}/>
      ))}
    </div>
  )
}
