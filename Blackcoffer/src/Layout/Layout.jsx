import { Outlet } from 'react-router-dom'
import Navbar from '@/Pages/Navbar'
import React from 'react'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen overflow-hidden">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
