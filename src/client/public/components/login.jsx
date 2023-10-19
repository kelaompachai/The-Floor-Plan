/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function login() {
  return (
    <>
      <h3>The Floor Plan</h3>
      <div className="login-container">
        <form className="login-form" method="post">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" />
          <div className="button-div">
            <button type="submit" formAction="/users/login">Login</button>
            <button type="submit" formAction="/users/signup">Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default login;
