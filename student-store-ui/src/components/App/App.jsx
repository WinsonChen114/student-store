import * as React from "react"
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
  let products = []
  //Is API currently fetching products?
  let isFetching = false
  //Holds an error from API
  let error =""
  //Is Sidebar open?
  let isOpen = false
  //Shopping cart information
  const [shoppingCart, setShoppingCart] = React.useState([])
  //Not sure how this will work right now
  let checkoutForm = ""
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>

            {/*Renders Home, Navbar, and Sidebar at every path*/}
            <Route path="/" element=
              {<> <Home />
                <Navbar />
                <Sidebar /> </>} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />

            {/* <Navbar />
            <Sidebar />
            <Home /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
