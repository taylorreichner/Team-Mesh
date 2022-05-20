import React, { useState } from 'react';
import { Redirect } from 'react-router';
import './auth-register-signin.css'

import '../../Components/css/backButton.css'

import BackButton from '../../assets/icons/icon-back-24.svg'


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [emailErr, setEmailErr] = useState('');

    const submit = async (e) => {
        e.preventDefault();
    
        const res = await fetch(
          `http://localhost:3001/api/v1/auth/register`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        const json = await res.json();
        const details = json.details;
    
        if (details === 'email already in use') {
          setEmailErr('email invalid');
        }
    
        if (details === 'created user') {
          setRedirect(true);
        }
      };
    
      if (redirect) {
        return <Redirect to={'/'} />;
      }
      if (emailErr === 'email invalid') {
        setEmailErr('Sorry that email is taken!');
      }



    return (
        <>
        <img src={BackButton} alt="Back Button" className='back-button' />
        <div className="register-signin-description">
            <h2 className='register-signin-title'>Nice to meet you!</h2>
            <p className="grey">Register for curated events and grow your professional network</p>
        </div>

        <form onSubmit={submit}>
        <div className="input-field-line input-1">
            <label className="input-line-label"><p>Email</p></label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your name" type="text"></input>
        </div>

        <div className="input-field-line input-2">
            <label className="input-line-label"><p>Password</p></label>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter your name" type="text"></input>
        </div>

        <div className="switch-auth">
            <p>Already registered?</p>
            <p className="blue-link">Sign In</p>
        </div>

        <button type="submit" className="button-primary button-2">
            <h4>Register</h4>
        </button>
        <div className="rect round-rect rect-blue register-signin-rect"> </div>
        </form>
        </> 
    )
}

export default Register;