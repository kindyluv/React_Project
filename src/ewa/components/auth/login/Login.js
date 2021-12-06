import React, {useState} from 'react'
import Input from '../../reusables/Input'
import "./login.css"
import img from "../../../assets/background.svg"
import img2 from "../../../assets/background2.svg"
import Button from '../../reusables/Button'

const Login = (props) => {
    let{setState, setAuthenticated} = props

    const inputFields = [
        {name: "email", label: "Email", placeholder: "Enter your email"},
        {name: "password",label: "Password", placeholder: "Enter your password"}
    ]

    let initialData = {
        email: "", password: ""
    }

    const [inputData, setInputData] = useState(initialData)

    const handleLogin = () => {
        if(inputData.email !== "" && inputData.password !== "") {
            let email = inputData.email
            localStorage.setItem("userEmail", email)
            setAuthenticated(true)
        } else {
            alert("User info is incomplete")
        }
    }

    const handleInput=(e)=>{
        let data = {...inputData, [e.target.name]: e.target.value}
        setInputData(data)
    }

    return (
        <div className="login_container">
            <div className="login_header">
                <div className="ewa_logo">

                </div>
                <button onClick={()=>setState('register')}>
                    REGISTER
                </button>
            </div>
            <img className="top_circle" src={img} alt="circlebackground" />
            <div className="text_container">
                <h4>Welcome to ewa</h4>
                <p>Get access to amazing ewa deals from the comfort of your home</p>
            </div>

            <div className="form_container">
                {inputFields.map((field, index) =>
                    <Input value={inputData[field.name]} onChange={handleInput} key={index} field={field}/>)}
            </div>

            <Button name="login" onClick={handleLogin}/>
            <img className="bottom_circle" src={img2} alt="circlebackground"/>
        </div>
    )
}

export default Login
