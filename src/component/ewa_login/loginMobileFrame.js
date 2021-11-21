import React from 'react'
import LoginTopNav from './LoginTopNav'
import LoginIntroContainer from './LoginIntroContainer'
import Top_Circle from '../ewa_app_home/Top_Circle'
import LoginButton from './LoginButton'
import InputContainer from '../ewa_registration_page/InputContainer'
import Bottom_Circle from '../ewa_app_home/Bottom_Circle'

const loginMobileFrame = () => {
    return (
        <div className="login_mobile_frame">
            <LoginTopNav/>
            <Top_Circle />
            <LoginIntroContainer/>
            <InputContainer name="Email" type="text" placeholder="Enter Email Address" className="register_input" />
            <InputContainer name="Password" type="password" placeholder="Enter Password" className="register_input" />
            <LoginButton/>
            <Bottom_Circle />
        </div>
    )
}

export default loginMobileFrame
