import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { logOutUser } from '../redux/user/userSlice';

const Navigation = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUserIn = useSelector((state) => state.user.user);
  const authToken = useSelector((state) => state.user.authToken);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    if (loggedUserIn && authToken && location.pathname !== '/login-page') {
      const checkUserStatus = async () => {
        try {
          const response = await dispatch(getCurrentUser());
          if (response.error || response.payload.status !== 200) {
            await dispatch(logOutUser());
            navigate('/login-page');
          }
        } catch (error) {
          console.error('Error fetching current user:', error);
          await dispatch(logOutUser());
          navigate('/login-page');
        }
      };

      checkUserStatus();
    }
  }, [dispatch, loggedUserIn, authToken, navigate, location.pathname]);

  const handleLogout = () => {
    dispatch(logOutUser())
      .then(() => {
        navigate('/login-page');
      })
      .catch(() => {
      });
  };

  return (
    <>
      <div className="Navigation">
        <div className="MobileLogoDiv">
          <h2 className="MobileLogo">
            {' '}
            <span className="LogoSpace">LOGO</span>
          </h2>
        </div>
        <div className="DeskTopNav">
          <h2 className="DeskTopLogo">
            {' '}
            <span className="LogoSpace">LOGO</span>
          </h2>
          {loggedUserIn && (
            <div className="AuthMenu">
              <ul className="AuthContent">
                <li>
                  Hello,
                  {' '}
                  {loggedUserIn.email}
                </li>
                <li>
                  <button type="button" className="LogOutButton" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
          <div className="MenuContents">
            {/* <form action="" className="SearchForm">
              <input className="SearchInput" type="text" placeholder="Search Property" />
              <button type="button" className="SubmitButton">Search</button>
            </form> */}
            <ul className="MenuItems">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                Rents
              </li>
              <li>
                Properties
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`MobileMenuBottom ${isScrollingDown ? 'hidden' : ''}`}>
        <ul className="MobileMenuContents">
          <li>Home</li>
          <li>List</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
