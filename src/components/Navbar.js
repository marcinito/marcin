import React from 'react';
import {NavLink} from 'react-router-dom'
function Navbar() {
  return <div>
      <ul className="navbarul">
          <li><NavLink to="/">AboutMe</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/credential">Credential</NavLink></li>
         
      </ul>
  </div>;
}

export default Navbar;
