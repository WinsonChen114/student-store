import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import {Link,} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />


      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/#About"}>About Us</Link>
        <Link to={"/#Contact"}>Contact Us</Link>
        <Link to={"/#Buy"}>Buy Now</Link>
      </div>

    </nav>
  )
}
