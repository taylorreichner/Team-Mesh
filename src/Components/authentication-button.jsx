import React from 'react';

import SigninButton from './signin-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <SigninButton />;
};

export default AuthenticationButton;