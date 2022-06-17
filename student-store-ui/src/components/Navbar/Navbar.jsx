import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link, } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
      </div>

      <div className="links">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/#Aboutlink"}>About Us</Link></li>
          <li><Link to={"/#Contactlink"}>Contact Us</Link></li>
          <li><Link to={"/#Buylink"}>Buy Now</Link></li>
        </ul>


      </div>

    </nav>
  )
}
