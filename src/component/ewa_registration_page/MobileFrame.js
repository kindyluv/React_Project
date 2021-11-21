import React from 'react'
import TopNav from './TopNav'
import Top_Circle from '../ewa_app_home/Top_Circle'
import Bottom_Circle from '../ewa_app_home/Bottom_Circle'
import IntroContainer from './IntroContainer'
import InputContainer from './InputContainer'
import Button from './Button'


const RegMobileFrame = () => {
    return (
        <div className="reg_mobile_frame">
            <TopNav/>
            <Top_Circle />
            <IntroContainer />
            <div>
            <InputContainer name="Email" type="text" placeholder="Enter Email Address" className="register_input" />
            <InputContainer name="FirstName" type="text" placeholder="Enter First Name" className="register_input" />
            <InputContainer name="LastName" type="text" placeholder="Enter Last Name" className="register_input" />
            <InputContainer name="Password" type="password" placeholder="Enter Password" className="register_input" />
            <Button color='#b0bf1a'/>
            </div>
            <Bottom_Circle />
        </div>
    )
}

export default RegMobileFrame
