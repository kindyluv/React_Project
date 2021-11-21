import React from 'react'

const InputContainer = (props) => {
    let {type , name, placeholder,} = props
    return (
        <div className="input_container">
            <label>
                {name}
            </label>
            <input type={type} placeholder={placeholder} className="register_input" />
        </div>
    )
}
export default InputContainer
