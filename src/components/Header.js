import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Character Vault</h1>
    <NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="isActive">Create Character</NavLink>
    <NavLink to="/help" activeClassName="isActive">Help</NavLink>
  </header>
)

export default Header;