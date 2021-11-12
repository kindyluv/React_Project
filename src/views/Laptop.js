import React from 'react'
import Casing from '../component/laptop/Casing'
import Keyboard from '../component/laptop/Keyboard'
import Screen from '../component/laptop/Screen'
import "../laptop.css"

const Laptop = (props) => {
    let { name, color, madeIn} = props
    return (
        <div className="laptop">
            <Casing color={color}/>
            <Keyboard name={name} madeIn={madeIn}/>
        </div>
    )
}

export default Laptop

