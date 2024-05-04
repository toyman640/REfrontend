import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../redux/user/userSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logOutUser()) // Dispatch the logout action
      .then(() => {
        navigate('/login-page');
      })
      .catch(() => {
      });
  };

  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>
        Hello
        {loggedUser.email}
      </p>
      <button type="button" onClick={handleLogout}>Logout</button>
      {' '}
      {/* Logout button */}
    </div>
  );
};

export default Dashboard;
