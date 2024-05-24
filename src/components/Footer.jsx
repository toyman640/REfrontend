import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <div>
          <h2 className="MobileLogo">
            {' '}
            <span className="LogoSpace">LOGO</span>
          </h2>
          <p>contact@mail.com</p>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;