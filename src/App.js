import React from 'react'
import Laptop from "./views/Laptop"
import './App.css'
import './ewa.css'
import './ewaInput.css'
import MainBody from "./views/MainBody"
import RegistrationPage from "./views/RegistrationPage"
import LoginPage from "./views/LoginPage"
// import Auth from "./ewa/views/auth/Auth"

function App() {

  // let name = 'mojoyin'

  return (
    <div className="container">
      {/* <Laptop name="Apple" color="gold" madeIn="China" button="red"/> */}
      {/* <Laptop name="Dell" color="black" madeIn="Lagos" button="green"/> */}
       <LoginPage/>
      <MainBody/>
      <RegistrationPage/> 
      {/* <Auth/> */}
    </div>
  )
}

export default App


