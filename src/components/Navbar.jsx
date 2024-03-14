import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <Link to={"/"}>
      <h2>OnlineShop</h2>
      </Link>
      <Link to={"/cart"}>
      <div className="nav-bag">
      <i className="bag-quantity fa fa-shopping-bag" aria-hidden="true"> 
        <span className="bag-quantity">
          <span>3</span>
        </span>
      </i>
      </div>
      </Link>
    
    </div>
  )
}

export default Navbar