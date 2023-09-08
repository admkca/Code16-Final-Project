import React from 'react';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="src\images\navbar.png" alt="Logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5">
            <li className="nav-item ms-5">
              
                Prices
             
            </li>
            <li className="nav-item ms-5">
              
                Facilities
              
            </li>
            <li className="nav-item ms-5">
              
                Contacts
              
            </li>
            <li className="nav-item ms-5">
              
                News
              
            </li>
            <li className="nav-item ms-5">
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
