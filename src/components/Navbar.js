import React from 'react'

import './Navbar.css'
import logo from '../logo.png'

/**
 * functional react component Navbar
 * @function
 * @returns {JSX.Element} - react component
 */
function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-links">

        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>

        <li>
          <a href="/about" className="nav-link">
            about
          </a>
        </li>

        <li>
          <a href="/tours" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar