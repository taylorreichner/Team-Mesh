import React, { useState } from 'react';
import { Navigate } from 'react-router';

const SignUp = () => {
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
        return <Navigate to={'/'} />;
      }
      if (emailErr === 'email invalid') {
        setEmailErr('Sorry that email is taken!');
      }



    return (
        <>
        <form onSubmit={submit}>
            <textarea onChange={(e) => setEmail(e.target.value)}/>
            <textarea onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>click</button>
        </form>
        
        </>
    )


}

export default SignUp;