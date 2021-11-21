import React from 'react'
import LoginPage from '../../views/LoginPage'

const LoginTopNav = () => {
    return (
        <div className="reg_top_nav_">
        <a href={<LoginPage/>}>
        <div className="reg_top_nav_btn">REGISTER</div>
        </a>
        </div>
    )
}

export default LoginTopNav
