import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../redux/user/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutUser()) // Dispatch the logout action
      .then(() => {
        navigate('/login-page'); // Navigate to the login page after successful logout
      })
      .catch((error) => {
        console.log('Logout error:', error); // Handle any logout errors
      });
  };

  return (
    <div>
      <h2>Dashboard Page</h2>
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
    </div>
  );
};

export default Dashboard;
