import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <header>
      <NavLink to="/">Food</NavLink>
      <NavLink to="/">Bars & NightLife</NavLink>
      <NavLink to="/">Art & Culture</NavLink>
      <NavLink to="/">Health & Wellness</NavLink>
    </header>
  );
};

export default Navbar;
