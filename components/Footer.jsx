import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "../css/Footer.css"
  const Footer = () => {
    return (
      <footer className="footer">
        <h5>all rights to @ecom project</h5>
                <Link to ="/" className="link">Home</Link>
                <Link to ="/" className="link">About</Link>
                <Link to ="/" className="link">Product</Link>
                <Link to ="/" className="link">Cart</Link>
            </footer>
)}
export default Footer
