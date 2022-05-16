import React from 'react';
import AuthNav from '../../Components/auth-nav';
import './auth.css'
import Logo from '../../assets/icon-logo-54.png'

import AuthImg from '../../assets/auth-welcome.png'

const Auth = () => {
    return (
        <>
        <div className="auth-description">
            <img src={AuthImg} alt="Welcome" className="auth-img" />
            <div className="auth-title">
                <img src={Logo} alt="Mesh Logo" className="auth-logo" />
                <h1>mesh</h1>
            </div>
            <p className='grey'>A place for developers, designers, and product managers to gain tech career traction</p>
        </div>
        <div className="register-button">
        </div>
        <div className="signin-button">
            <AuthNav />
        </div>
        <div className="round-rect rect-white rect-flip auth-rect"> </div>
        <div className="background"></div>
        </> 
    )
}

export default Auth;