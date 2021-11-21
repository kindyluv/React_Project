import axios from 'axios'
import React from 'react'
const onFormSubmit = () => {
    axios.post({
        method: 'GET',
        url: "http://localhost:8080/api/customer/ehis@poofmail.com"}
        ) .then((response) => {
            console.log(response);
            }, (error) =>{
                console.log(error)
            }
        );
}
const LoginButton = () => {
    return (
        <div>
        <button className="login_btn" onClick={onFormSubmit}>login </button>
    </div>
    )
}

export default LoginButton