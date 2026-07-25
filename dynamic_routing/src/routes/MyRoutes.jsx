import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'

const MyRoutes = () => {
  return (
     <div>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/product" element={<Product/>}/>

      </Routes>
    </div>
  )
}

export default MyRoutes
