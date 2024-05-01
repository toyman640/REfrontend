import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
      </form>
    </div>
  );
};

export default Login;
