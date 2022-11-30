import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    padding: 0px;
    margin: 0px;
`;

// The Navigation component will be used on all pages: Home, Products, 
// ProductList, Login, Registration, Cart and Contact.
const NavbarTop = () => {
    return (
      <Container>
      <nav>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Home
        </NavLink>

        <NavLink
          to="/pages/Cart"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Cart
        </NavLink>

        <NavLink
          to="/pages/Product"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Product
        </NavLink>

        <NavLink
          to="/pages/ProductList"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Product List
        </NavLink>

        <NavLink
          to="/pages/register"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Register
        </NavLink>
        <NavLink
          to="/pages/login"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Login
        </NavLink>

        <NavLink
          to="/pages/ContactUs"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Contact
        </NavLink>

      </nav>
      </Container>
    );
  };
  
export default NavbarTop;  