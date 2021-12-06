import React, {useState} from 'react'
import Laptop from "./views/Laptop"
import './App.css'
// import './ewa.css'
// import './ewaInput.css'
import '../src/ewa/components/auth/login/login.css'
import '../src/ewa/components/auth/register/register.css'
import MainBody from "./views/MainBody"
import RegistrationPage from "./views/RegistrationPage"
import LoginPage from "./views/LoginPage"
import Auth from "./ewa/views/auth/Auth";
import Dashboard from "./ewa/views/dashboard/Dashboard";
// import Auth from "./ewa/views/auth/Auth"

function App() {
    let value = false
    let email = ""
    try {
        email = localStorage.getItem("userEmail")
        if (email !== "" && email !== null) {
            console.log(email)
            value = true
        }
    }catch(e){
        email= ""
        value = false
    }
    const [authenticated, setAuthenticated] = useState(value)
   return (
    <div className="container">
        {authenticated ? <Dashboard /> : <Auth setAuthenticated={setAuthenticated}/>}
    </div>

  )
}

export default App


