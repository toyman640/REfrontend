import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, mopUp } from '../redux/user/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

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
        if (action.payload && action.payload.user.status.code === 200) {
          navigate('/dashboard-page');
        } else {
          setErrorMessage('Login credentials are incorrect. Please try again.');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setErrorMessage('Login credentials are incorrect. Please try again.');
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      });
  };

  return (
    <div className="Login-page">
      <h2 className="Title">Login to your dashboard</h2>
      {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="LoginField">
          <label className="FormLabel" htmlFor="email">
            Email
            <input type="email" name="email" id="email" className="InputField" value={formData.email} onChange={handleInputChange} />
          </label>
        </div>
        <div className="LoginField">
          <label className="FormLabel" htmlFor="password">
            Password
            <input type="password" name="password" className="InputField" id="password" value={formData.password} onChange={handleInputChange} />
          </label>
        </div>
        <input type="submit" className="LoginButton" value="Login" />
      </form>
    </div>
  );
};

export default Login;
