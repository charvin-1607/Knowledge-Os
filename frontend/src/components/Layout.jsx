import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import LanguageLayout from './LanguageLayout'
import { useSelector } from 'react-redux'
import Footer from './Footer'


const Layout = () => {  

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
        
        <Navbar />


         {
           isAuthenticated && (
             <LanguageLayout />
            )
          }

          <Outlet />

          <Footer />
    
    </>
  )
}

export default Layout
