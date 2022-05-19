import React from 'react';
import './auth-register-signin.css'

import '../Components/css/backButton.css'

import BackButton from '../assets/icons/icon-back-24.svg'


const Signin = () => {
    return (
        <>
        <img src={BackButton} alt="Back Button" className='back-button' />
        <div className="register-signin-description">
            <h2 register-signin-title>Welcome back!</h2>
            <p className="grey">Sign in to continue learning and growing your professional network</p>
        </div>

        <div class="input-field-line input-1">
            <label className="input-line-label"><p>Full Name</p></label>
            <input placeholder="Enter your name" type="text"></input>
        </div>

        <div class="input-field-line input-2">
            <label className="input-line-label"><p>Full Name</p></label>
            <input placeholder="Enter your name" type="text"></input>
        </div>
        
        <div className="switch-auth">
            <p>Not registered yet?</p>
            <p className="blue-link">Register</p>
        </div>

        <button className="button-primary button-2">
            <h4>Sign In</h4>
        </button>
        <div className="rect round-rect rect-blue register-signin-rect"> </div>
        </> 
    )
}

export default Signin;