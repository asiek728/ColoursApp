import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "darkblue"
  }

  return (
    <>
      <nav>
        <h2>Colours App</h2>
        <ul className="nav-links">
          <li>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/colours" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Colour List</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

  );
}

export default NavBar
