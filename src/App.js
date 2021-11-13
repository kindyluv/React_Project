import React from 'react'
import Laptop from "./views/Laptop"
import './App.css'


function App() {

  let name = 'mojoyin'

  return (
    <div className="container">
      <Laptop name="Apple" color="gold" madeIn="China" button="red"/>
      <Laptop name="Dell" color="black" madeIn="Lagos" button="green"/>
    </div>
  )
}

export default App


