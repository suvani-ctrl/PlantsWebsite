import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../src/App.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="/images/images.png" alt="Logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color:#283730; /* Light pink */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  color: white;
  
.logo{
  height: 7rem;
   background-color:#283730;
  
}
  `;


export default Header;
