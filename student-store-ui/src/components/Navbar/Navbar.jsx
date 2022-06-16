import * as React from "react"
import "./Navbar.css"
import { Link, } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
    </nav>
  )
}
