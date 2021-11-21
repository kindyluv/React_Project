import React from 'react'
import MobileFrame from '../component/ewa_registration_page/MobileFrame'

const RegistrationPage = () => {
    return (
            <div className="reg_container">
                <MobileFrame />
            </div>
            
    
    )
}

export default RegistrationPage
// import React, { Component } from 'react'

// class RegistrationPage extends Component {

//     constructor(props){

//         this.state = {
//             firstName:'',
//             lastName:'',
//             phoneNumber:'',
//             email: '',
//             username:'',
//             password:'',
//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post('http://localhost:8080/api/v1/customer', this.state)
//         .then(response => {
//             console.log(response)
//         })
//     }

//    render() {
//         const{firstName, lastName, phoneNumber, email, username, password} = this.state
//         return(
//             <div>

//             </div>
//         )
//    }
// }

// export default RegistrationPage
