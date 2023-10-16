import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <div className="logo">
          COMPANY
      </div>

      <div className="display-menu">
         <Link className='menu' to={"/"}>DASHBOARD</Link>
         <Link className='menu' to={"/createAd"}>CREATE AD'S</Link>
      </div>
    </header>
  )
}

export default NavBar

