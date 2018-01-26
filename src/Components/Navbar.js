import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink exact to='/search'>Search</NavLink></li>
      <li><NavLink to='/search/cats'>Cats</NavLink></li>
      <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
      <li><NavLink to='/search/computers'>Computers</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;