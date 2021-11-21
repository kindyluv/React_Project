import React from 'react'
import Casing from '../component/laptop/Casing'
import Keyboard from '../component/laptop/Keyboard'
import Screen from '../component/laptop/Screen'
import "../laptop.css"


const Laptop = (props) => {
    let { name, color, madeIn, button} = props
    return (
        <div className="laptop">
            <Casing color={color}/>
            <Keyboard button={button} name={name} madeIn={madeIn} button={button}/>
        </div>
    )
}

export default Laptop

