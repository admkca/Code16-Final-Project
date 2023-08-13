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
              
                Ціни
             
            </li>
            <li className="nav-item ms-5">
              
                Зали
              
            </li>
            <li className="nav-item ms-5">
              
                Контакти
              
            </li>
            <li className="nav-item ms-5">
              
                Новини
              
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
