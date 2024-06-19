import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/userSlice';

const ProtectRoute = ({ element: Component }) => {
  const dispatch = useDispatch();
  const getCurrentUserLoaded = useSelector((state) => state.user.currentUser !== null);

  useEffect(() => {
    if (!getCurrentUserLoaded) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, getCurrentUserLoaded]);

  const currentUser = useSelector((state) => state.user.currentUser);

  return currentUser ? <Component element={Component} /> : <Navigate to="/login-page" />;
};

ProtectRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectRoute;
