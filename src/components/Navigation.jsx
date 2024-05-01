import React from 'react';

const Navigation = () => (
  <div className="Navigation">
    <h2 className="Logo">
      {' '}
      <span className="LogoSpace">LOGO</span>
    </h2>
    <div className="MenuContents">
      <form action="" className="SearchForm">
        <input className="SearchInput" type="text" placeholder="Search Property" />
        <button type="button" className="SubmitButton">Search</button>
      </form>
      <ul className="MenuItems">
        <li>Home</li>
        <li>Rent</li>
        <li>Sale</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

export default Navigation;
