import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Component/Products'
import CreateStore from './Component/CreateStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Products></Products> */}
        <CreateStore></CreateStore>
      </div>
    </>
  )
}

export default App
