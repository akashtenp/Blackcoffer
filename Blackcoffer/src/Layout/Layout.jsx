import { Outlet } from 'react-router-dom'
import Navbar from '@/Pages/Navbar'
import React from 'react'

const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* <Navbar /> */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Outlet where Index.jsx will render */}
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
