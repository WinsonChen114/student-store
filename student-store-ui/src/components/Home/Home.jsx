import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
  return (
    <div className="home">
      {/*<Hero />*/}
      <div id ="Buy">
        <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} 
      shoppingCart={shoppingCart}/>
      </div>
      <div id ="About">
        <h3>About</h3>

      </div>
      <div id="Contact">
        <h3>Contact Us</h3>
      </div>
    </div>
  )
}
