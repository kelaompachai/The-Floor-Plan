// the components that make up the login page

import React, { useState } from 'react';
import Login from './components/login';

function LoginWrapper() {
  // const [signup, setSignup] = useState(false);

  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginWrapper;
