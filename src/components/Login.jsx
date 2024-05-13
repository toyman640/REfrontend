import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/user/userSlice';
import { mopUp } from '../redux/user/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    mopUp();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      user: {
        email: formData.email,
        password: formData.password,
      },
    };
    dispatch(loginUser(userData))
      .then((action) => {
        if (action.payload.user.status.code === 200) {
          navigate('/dashboard-page');
        } else {
          navigate('/login-page');
        }
      })
      .catch(() => {
      });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} />
          </label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
