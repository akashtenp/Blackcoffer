import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './Layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
