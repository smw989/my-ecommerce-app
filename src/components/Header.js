import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-top">
      <img src="/images/logo.png" alt="Company Logo" />
      <div>Company Name</div>
    </div>
    <nav className='header-nav'>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/products" activeClassName="active">Products</NavLink>
      <NavLink to="/login" activeClassName="active">Login</NavLink>
    </nav>
  </header>
);

export default Header;
