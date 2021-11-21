import React from 'react'
import Input from '../../reusables/Input'
import img from "../../../../assets/background.svg"
import imgb from "../../../../assets/background2.svg"
import Button from '../../reusables/Button'
import "./register.css"

const Register = (props) => {
    let {setState} = props
    const inputFields = [
        {label: "Email", placeholder: "Enter your email"},
        {label: "FirstName", placeholder: "Enter your fistname"},
        {label: "LastName", placeholder: "Enter your lastname"},
        {label: "Password", placeholder: "Enter your password"}
    ]
    return (
        <div className="register_container">
            <div className="register_header">
                <div className="ewa_logo">
                </div>
                <button onClick={()=> setState('login')}>
                    LOGIN
                </button>
            </div>
            <img className="top_circle" src={img} alt="circle_background" />
            <div className="text_container">
                <h4>Welcome to ewa</h4>
                <p>Get access to amazing ewa deals from the comfort of your home</p>
            </div>
            <div className="form_container">
                {inputFields.map((field, index) => <Input key={index} field={field}/>)}
            </div>
            <img className="bottom_circle" src={imgb} alt="circle_background" />

            <Button name="register"/>
            
        </div>
    )
}

export default Register
