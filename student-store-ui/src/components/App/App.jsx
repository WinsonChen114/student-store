import * as React from "react"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.css"

export default function App() {
  //Array of products
  const [products, setProducts] = React.useState([])
  //Is API currently fetching products?
  const [isFetching, setIsFetching] = React.useState()
  //Holds an error from API
  const [error, setError] = React.useState("")
  //Is Sidebar open?
  const [isOpen, setIsOpen] = React.useState(false)
  //Shopping cart information
  const [shoppingCart, setShoppingCart] = React.useState([])
  //User Checkout Information
  const [checkoutForm, setCheckoutForm] = React.useState(["", ""])

  //Toggles Sidebar
  function handleOnToggle() {
    setIsOpen(!isOpen)
  }

  //Adds item to cart
  function handleAddItemToCart(productId) {
    let item = shoppingCart.find(x => x.itemId === productId)
    //If it exists, increment the quantity
    if (item) {
      let items = shoppingCart
      let newitem = items.find(x => x.itemId === productId)
      newitem.quantity++

      //Putting just items causes the React not to register the change, because shopping cart is still referencing the same array
      //slice returns a new arry, empty parenthesis makes slice keep it the same
      setShoppingCart(items.slice())
    }
    //Else, insert item
    else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }])
    }


  }

  //Removes item from cart
  function handleRemoveItemFromCart(productId) {
    let item = shoppingCart.find(x => x.itemId === productId)
    //If it exists, decrement the quantity
    if (item) {
      let items = shoppingCart
      let newitem = items.find(x => x.itemId === productId)
      newitem.quantity--

      //if the quantity is 0, remove it from the shopping cart
      if (newitem.quantity === 0) {
        setShoppingCart(items.filter((item) => (item.itemId !== newitem.itemId)))
      }
      //Else, update the shopping cart
      else {
        setShoppingCart(items.slice())
      }

    }
    //Else do nothing

  }

  //Changes Checkout Form information
  function handleOnCheckoutFormChange(name, value) {


  }

  //Submits user's order to API
  function handleOnSubmitCheckoutForm() {

  }
  //Use Effect runs are startup, and whenever it is updated
  //Gets products from the API
  //Runs whenever things in the dependency array changes
  React.useEffect(() => {
    axios.get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => { setProducts(response.data.products); console.log(response.data.products) })
      .catch((error) => { setError(error); console.log(error) })

  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/*Renders Navbar and Sidebar at every path*/}
          <Navbar />
          <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle} />
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
