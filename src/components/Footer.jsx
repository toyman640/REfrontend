import React from 'react';

const Footer = () => (
  <div className="Footer">
    <div className="FooterInner">
      <div>
        <h2>
          {' '}
          <span>LOGO</span>
        </h2>
        <p>contact@mail.com</p>
      </div>
      <div className="MenuDiv">
        <ul className="FooterMenu">
          <li>
            Home
            <hr className="MenuHr" />
          </li>
          <li>
            About
            <hr className="MenuHr" />
          </li>
          <li>
            Blog
            <hr className="MenuHr" />
          </li>
          <li>
            Contact
            <hr className="MenuHr" />
          </li>
        </ul>
      </div>
    </div>
    <p className="CopyRight">Copyright &#169;2024</p>
  </div>
);

export default Footer;
