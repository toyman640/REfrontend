import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../redux/user/userSlice";

const ProtectRoute = ({ element: Component, ...rest }) => {
  const dispatch = useDispatch();
  const getCurrentUserLoaded = useSelector((state) => state.user.currentUser !== null);
  const currentUser = useSelector((state) => state.user.currentUser);
  
  console.log("Initial State:", currentUser); // Log initial state
  
  useEffect(() => {
    if (!getCurrentUserLoaded) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, getCurrentUserLoaded]);

  console.log("Updated State:", currentUser); // Log updated state
 
  return currentUser ? <Component {...rest} /> : <Navigate to="login-page" />;
};

export default ProtectRoute;
