/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';


function login() {
  const loginHandler = () => {
    console.log('cheese');
  };

  return (
    <>
      <h3>The Floor Plan</h3>
      <div className="login-container">
        <form className="login-form" action="/users" method="post">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input name="password" type="text" id="password" />
          <div className="button-div">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default login;
