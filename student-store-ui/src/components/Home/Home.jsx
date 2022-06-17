import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"

export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
  return (
    <div className="home">
      {/*<Hero />*/}
      <a id="Buylink"></a>
      <div id ="Buy">
        <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} 
      shoppingCart={shoppingCart}/>
      </div>
      <a id="Aboutlink"></a>
      <div id ="About">
        <h3>About</h3>
        <About />
      </div>
      <a id="Contactlink"></a>
      <div id="Contact">
        <h3>Contact Us</h3>
      </div>
    </div>
  )
}
