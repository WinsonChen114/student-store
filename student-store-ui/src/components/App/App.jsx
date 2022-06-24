import * as React from "react"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.css"

export default function App() {
  //Array of products, to be used for displaying products
  const [products, setProducts] = React.useState([])
  //Is API currently fetching products?
  const [isFetching, setIsFetching] = React.useState()
  //Holds an error from API
  const [error, setError] = React.useState()
  //Is Sidebar open?
  const [isOpen, setIsOpen] = React.useState(false)
  //Shopping cart information
  const [shoppingCart, setShoppingCart] = React.useState([])
  //User Checkout Information
  const [checkoutForm, setCheckoutForm] = React.useState({ email: "", name: "" })
  //Receipt for Checkout
  const [receipt, setReceipt] = React.useState({})
  //Array of all of the products, functions as a lookup table
  const [allProducts, setAllProducts] = React.useState([])

  //Toggles Sidebar
  function handleOnToggle() {
    setIsOpen(!isOpen)
  }

  //Adds item to cart
  function handleAddItemToCart(productId) {
    let item = shoppingCart.find(x => x.itemId === productId)
    //If it exists, increment the quantity
    if (item) {
      item.quantity++
      setShoppingCart([...shoppingCart])
    }
    //Else, insert item
    else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }])
    }


  }

  //Removes item from cart
  function handleRemoveItemFromCart(productId) {
    let item_remove = shoppingCart.find(x => x.itemId === productId)
    //If it exists, decrement the quantity
    if (item_remove) {
      item_remove.quantity--

      //if the quantity is 0, remove it from the shopping cart
      if (item_remove.quantity === 0) {
        setShoppingCart(shoppingCart.filter((item) => (item.itemId !== item_remove.itemId)))
      }
      //Else, update the shopping cart
      else {
        setShoppingCart([...shoppingCart])
      }

    }
    //Else do nothing

  }

  //Changes Checkout Form information
  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm({
      ...checkoutForm,
      [name]: value,
    })
  }

  //Submits user's order to API
  function handleOnSubmitCheckoutForm() {
    axios.post("http://localhost:3001/store", { user: checkoutForm, shoppingCart: shoppingCart })
      .then((response) => {
        setShoppingCart([])
        setCheckoutForm({ email: "", name: "" })
        setReceipt({ ...response.data.purchase })
      })
      .catch((error) => { setError(error); console.log(error) })

  }
  //Use Effect runs on startup, and whenever it is updated
  //Gets products from the API
  //Runs whenever things in the dependency array changes
  React.useEffect(() => {
    axios.get("http://localhost:3001/store")
      .then((response) => {
        setProducts(response.data.products)
        setAllProducts(response.data.products)
        console.log(response.data.products)
      })
      .catch((error) => { setError(error); console.log(error) })

  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/*Renders Navbar and Sidebar at every path*/}
          <Navbar />
          <Hero />
          <SubNavbar products={products} setProducts={setProducts} />
          <Sidebar allProducts={allProducts} isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle} error={error} setError={setError} receipt={receipt} />
          <Routes>
            <Route path="/" element={<>
              <Home products={products} handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} />
              <Footer /></>} />
            <Route path="/products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemFromCart={handleRemoveItemFromCart} isFetching={isFetching} setIsFetching={setIsFetching}
              error={error} setError={setError} shoppingCart={shoppingCart} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>

    </div>
  )
}
