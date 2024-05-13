import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const ProtectRoute = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  // return(
  //   <Route path={path} element={currentUser ? element : <Navigate to="/login-page" />} />
  
  // );
  return currentUser ? <Component {...rest} /> : <Navigate to="login-page" />
};

export default ProtectRoute;
