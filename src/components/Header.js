import React, { useState } from 'react'
import '../index.css'
import logo from '../images/Food Fire Logo.png'

const Header = () => {
  const [login, setLogin] = useState(false)
  const toggleClick = () => {
    if (login === false) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <button onClick={() => toggleClick}>Login</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
