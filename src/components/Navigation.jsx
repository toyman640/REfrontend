import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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

  return (
    <>
      <div className="Navigation">
        <h2 className="MobileLogo">
          {' '}
          <span className="LogoSpace">LOGO</span>
        </h2>
        <div className="DeskTopNav">
          <h2 className="DeskTopLogo">
            {' '}
            <span className="LogoSpace">LOGO</span>
          </h2>
          <div className="MenuContents">
            {/* <form action="" className="SearchForm">
              <input className="SearchInput" type="text" placeholder="Search Property" />
              <button type="button" className="SubmitButton">Search</button>
            </form> */}
            <ul className="MenuItems">
              <li>Home</li>
              <li>Rent</li>
              <li>Sale</li>
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
