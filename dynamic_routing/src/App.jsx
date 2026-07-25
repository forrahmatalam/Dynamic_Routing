import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import MyRoutes from './routes/MyRoutes';


const App = () => {
  return (
    <div>
      
      <Navbar/>
     <MyRoutes />

    </div>
  )
}

export default App
