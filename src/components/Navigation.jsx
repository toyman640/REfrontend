import React from "react";

const Navigation = () => {

  return (
    <div className="Navigation">
      <h2 className="Logo">LOGO</h2>
      <div className="MenuContents">
        <form action="">
          <input type="text" placeholder="Search Property" />
          <button>Search</button>
        </form>
        <ul className="MenuItems">
          <li>Home</li>
          <li>Rent</li>
          <li>Sale</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;