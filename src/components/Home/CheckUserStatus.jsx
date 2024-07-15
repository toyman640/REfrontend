import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCurrentUser, logOutUser } from '../../redux/user/userSlice';

const CheckUserStatus = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loggedUserIn = useSelector((state) => state.user.user);
  const authToken = useSelector((state) => state.user.authToken);
  const loadingCurrentUser = useSelector((state) => state.user.loadingCurrentUser);

  useEffect(() => {
    if (loggedUserIn && authToken && !loadingCurrentUser) {
      const fetchCurrentUser = async () => {
        try {
          const response = await dispatch(getCurrentUser());
          if (response.error || response.payload.status !== 200) {
            await dispatch(logOutUser());
            navigate('/login-page');
          }
        } catch (error) {
          // console.error('Error fetching current user:', error);
          await dispatch(logOutUser());
          navigate('/login-page');
        }
      };

      fetchCurrentUser();
    }
  }, [location, dispatch, loggedUserIn, authToken, loadingCurrentUser, navigate]);

  return children;
};

export default CheckUserStatus;
