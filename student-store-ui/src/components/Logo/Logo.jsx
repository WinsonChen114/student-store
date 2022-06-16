import * as React from "react"
import "./Logo.css"
import { Link, } from "react-router-dom"

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="src/assets/Wave_logo.png" alt="Wave logo" width={60}/>
      </Link>
    </div>
  )
}
