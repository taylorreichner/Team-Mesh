import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const LogIn = ({ setLoading }) => {
  
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
    return <Redirect to="/feed" />;
  }
  if (err === 'invalid') {
    setErr('Incorrect email or password please try again!');
  }

  return (
    <>
    <form onSubmit={submit}>
        <textarea onChange={(e) => setEmail(e.target.value)}></textarea>
        <textarea onChange={(e) => setPassword(e.target.value)}></textarea>
        <button type="submit">click to login</button>
    </form>


    </>

  )


}

export default LogIn;