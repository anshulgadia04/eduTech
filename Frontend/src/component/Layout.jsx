import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({isAuthenticated,handleLogout ,userid}) {
  return (
    <>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} userid = {userid}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout