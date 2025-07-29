import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './Layout/Layout'
import Index from './Pages/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
