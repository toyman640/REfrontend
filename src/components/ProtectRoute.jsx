import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/userSlice';

const ProtectRoute = ({ element: Component, ...rest }) => {
  const dispatch = useDispatch();
  const getCurrentUserLoaded = useSelector((state) => state.user.currentUser !== null);

  useEffect(() => {
    if (!getCurrentUserLoaded) {
      console.log('protect ran');
      dispatch(getCurrentUser());
    }
  }, [dispatch, getCurrentUserLoaded]);

  const currentUser = useSelector((state) => state.user.currentUser);

  console.log('Updated State:', currentUser); // Log updated state

  return currentUser ? <Component {...rest} /> : <Navigate to="login-page" />;
};

export default ProtectRoute;
