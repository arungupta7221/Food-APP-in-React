import React, { useState } from 'react'
import '../index.css'
import logo from '../images/Food Fire Logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  const [login, setLogin] = useState(false)
  const toggleClick = () => {
    if (login === false) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart - {cartItems.length}</Link>
          <button onClick={() => toggleClick}>Login</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
