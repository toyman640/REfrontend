import React, { useState } from "react";
import { useDispatch } from "react-redux";
import loginUser from '../redux/user'

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  }


  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
