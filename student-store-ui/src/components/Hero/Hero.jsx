import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1>Welcome!</h1>
          <p>Please Buy Something</p>
        </div>
        <img className="hero-img" src="http://localhost:3000/src/assets/Whale.png" />
      </div>
    </div>
  )
}
