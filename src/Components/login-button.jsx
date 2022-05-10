import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Components/button/button.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='button button-primary'
      onClick={() => loginWithRedirect()}
    >
      Log In
    </div>
  );
};

export default LoginButton;