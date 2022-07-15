import React from 'react'
import { Outlet, Link } from "react-router-dom"

import x from './navbar.module.css'

function Navbar() {
  return (
    <>
    <div className={x.navbar}>
      <p className={x.nav_item_2}><Link to='/blog' className={x.link}>Blog</Link></p>
      <p className={x.nav_item_1}><Link to='/' className={x.link}>Home</Link></p>
    </div>
    <Outlet/>
    </>
  )
}
export default Navbar
