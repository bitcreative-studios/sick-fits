import React from "react"
import Nav from "./Nav"

const Header = () => {
  return (
    <header>
      <div className="bar">
        <a href="">Sick Fits</a>
      </div>
      <Nav />
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </header>
  )
}

export default Header
