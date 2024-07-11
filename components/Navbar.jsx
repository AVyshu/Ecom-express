import React from 'react'
import "../css/Navbar.css"
import {Link,NavLink} from "react-router-dom"
function Navbar() {
  return (
    <>
       <nav>
        <div className='logo'>
            <img src="logo.jpg" height="70px" width="100px" alt="logo"></img>
        </div>
        <div className='navlinks'>
            <NavLink to="/" className='link'>Home</NavLink>
            <NavLink to="/about" className='link'>About</NavLink>
            <NavLink to="/product" className='link'>Products</NavLink>
            <NavLink to="/cart" className='link'>Cart</NavLink>
        </div>
        <div className='login'>
            <Link to="/Login">
            <button>LOGIN</button>
            </Link>
        </div>
       </nav>
    </>
  )
}

export default Navbar
