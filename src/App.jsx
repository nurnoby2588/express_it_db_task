import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Component/Products'
import CreateStore from './Component/CreateStore'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router'
import SingleProduct from './Component/SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<CreateStore />} />
        <Route path='/products'  element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
        {/* <Products></Products> */}
        {/* <CreateStore></CreateStore> */}
      </div>
    </>
  )
}

export default App
