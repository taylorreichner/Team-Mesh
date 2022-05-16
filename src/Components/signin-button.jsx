import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../style.css'
import '../Components/css/button.css'

const SigninButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <div className='button button-secondary'
      onClick={() => loginWithRedirect()}
    >
      <h4>Sign In</h4>
    </div>
    </>
  );
};

export default SigninButton;