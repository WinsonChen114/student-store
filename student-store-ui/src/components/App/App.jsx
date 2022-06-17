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
  const [isFetching, setIsFetching] = React.useState(false)
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
  function handleAddItemtoCart(productId) {
    let item = shoppingCart.find(x => x.itemId === productId)
    //If it exists, increment the quantity
    if (item) {
      let items = shoppingCart
      let newitem = items.find(x => x.itemId === productId)
      newitem.quantity++
      setShoppingCart(items)
    }
    //Else, insert item
    else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }])
    }
    console.log(shoppingCart)
  }

  //Removes item from cart
  function handleRemoveItemFromCart(productId) {
    let item = shoppingCart.find(x => x.itemId === productId)
    //If it exists, decrement the quantity
    if (item) {

      //if the quantity is 0, remove it from the shopping cart
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
          <Routes>
            {/*Renders Home, Navbar, and Sidebar at every path*/}
            <Route path="/" element=
              {<> <Navbar />
                <Home products={products} handleAddItemToCart={handleAddItemtoCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
                <Sidebar /> </>} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
