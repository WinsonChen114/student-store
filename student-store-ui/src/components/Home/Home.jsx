import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
  return (
    <div className="home">
      {/*<Hero />*/}
      <div id ="Buy">
      <h3>Products</h3>
        <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} 
      shoppingCart={shoppingCart}/>
      </div>
      <div id ="About">
        <h3>About</h3>
        <About />
      </div>
      <div id="Contact">
        <h3>Contact Us</h3>
        <Contact />
      </div>
    </div>
  )
}
