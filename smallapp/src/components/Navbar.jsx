import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  background-color:; /* Olive green background */
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    font-family: 'Century Gothic', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
      color: #b5a27a; /* Warm gold on hover */
    }

    &.active {
      border-bottom: 2px solid #b5a27a;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
