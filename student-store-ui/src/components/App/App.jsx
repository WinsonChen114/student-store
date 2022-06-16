import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            
            {/*Renders Home, Navbar, and Sidebar at every path*/}
            <Route path="/" element = {<> <Home />
                                          <Navbar />
                                          <Sidebar/> </>}/>
            <Route path="/products/:productId" element={<ProductDetail/>}/>
            
            {/* <Navbar />
            <Sidebar />
            <Home /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
