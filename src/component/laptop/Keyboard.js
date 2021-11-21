import React from 'react'
import Button from './Button'

const Keyboard = (props) => {
    return (
        
        <div className="keyboard">
            <div className="button" style={{backgroundColor: `${props.button}`}}>
                <Button/>
            </div>
            
            <div className="make">
            <div>
            {props.name}  Keyboard
          Made in 
            </div>
         
          <div>
          <div style={{
              color: 'gold', textAlign: 'center', fontWeight: 'bold' 
              }}>
                  {props.madeIn}
                  </div>
          </div>
            </div>
           
        </div>
    )
}

export default Keyboard
