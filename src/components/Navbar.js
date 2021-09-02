import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../BBlogo.png'
import SearchForm from './SearchForm'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to='/'>
          <img src={logo} alt="" className='logo'/>
        </Link>
        <SearchForm />
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
