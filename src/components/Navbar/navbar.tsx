import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/Writeit.png'

type NavbarProps = {
  btnText: string
  btnRoute: string
}

const Navbar: React.FC<NavbarProps> = ({ btnText, btnRoute }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-links">
        <NavLink to="/about" className="navbar-about oval-button">
          About Us
        </NavLink>
        <NavLink to="/contact" className="navbar-contact oval-button">
          Contact Us
        </NavLink>
        <NavLink to="/pricing" className="navbar-pricing oval-button">
          Pricing
        </NavLink>
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search oval-button"
        />
        <Link to={btnRoute} className="navbar-login oval-button">
          {btnText}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
