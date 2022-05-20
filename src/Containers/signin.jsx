import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './auth-register-signin.css'

import '../Components/css/backButton.css'

import BackButton from '../assets/icons/icon-back-24.svg'


const Signin = ({setLoading}) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const user = await fetch(
      `http://localhost:3001/api/v1/auth/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      }
      );
      

    const userData = await user.json();
    const userStatus = userData.status;
    
    if (userStatus === 'success') {
      setLoading('resolved');
      setRedirect(true);
    }
    if (userStatus === 'failed') {
      setErr('invalid');
    }
  };
  
  if (redirect) {
    return <Redirect to="/explore" />;
  }
  if (err === 'invalid') {
    setErr('Incorrect email or password please try again!');
  }

    return (
        <>
        <img src={BackButton} alt="Back Button" className='back-button' />
        <div className="register-signin-description">
            <h2 register-signin-title>Welcome back!</h2>
            <p className="grey">Sign in to continue learning and growing your professional network</p>
        </div>
        <form onSubmit={submit}>
        <div class="input-field-line input-1">
            <label className="input-line-label"><p>Email</p></label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your name" type="text"></input>
        </div>

        <div class="input-field-line input-2">
            <label className="input-line-label"><p>Password</p></label>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter your name" type="text"></input>
        </div>
        
        <div className="switch-auth">
            <p>Not registered yet?</p>
            <p className="blue-link">Register</p>
        </div>

        <button className="button-primary button-2">
            <h4>Sign In</h4>
        </button>
        <div className="rect round-rect rect-blue register-signin-rect"> </div>
        </form>
        </> 
    )
}

export default Signin;