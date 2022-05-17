import React from 'react';
// import AuthNav from '../../Components/auth-nav';
import './auth.css'
import '../../Components/css/backButton.css'

import Logo from '../../assets/icons/icon-logo-54.png'
import AuthImg from '../../assets/auth/auth-welcome.png'
import BackButton from '../../assets/icons/icon-back-24.svg'

const Auth = () => {
    return (
        <>
        <img src={BackButton} alt="Back Button" className='back-button' />
        <div className="auth-description">
            <img src={AuthImg} alt="Welcome" className="auth-img" />
            <div className="auth-title">
                <img src={Logo} alt="Mesh Logo" className="auth-logo" />
                <h1>mesh</h1>
            </div>
            <p className='grey'>A place for developers, designers, and product managers to gain tech career traction</p>
        </div>
        <button className="button-primary button-1">
            <h4>Register</h4>
        </button>
        <button className="button-secondary button-2">
            <h4>Sign In</h4>
            {/* <AuthNav /> */}
        </button>
        <div className="rect round-rect rect-white rect-flip auth-rect"> </div>
        <div className="background"></div>
        </> 
    )
}

export default Auth;