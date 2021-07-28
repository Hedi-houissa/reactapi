import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom'


const NavBar = ({isAuth,setIsAuth}) => {
  return (
    <Navbar bg="dark" variant="dark" style={{padding:'1% 2%'}}>
      <Navbar.Brand>API</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink exact to="/" className="appLink" activeClassName="activeLink" >Home</NavLink>
        <NavLink to="/ListUsers" className="appLink" activeClassName="activeLink"  >Users</NavLink>
        <NavLink to="/Admin" className="appLink" activeClassName="activeLink">Admin</NavLink>
      </Nav>
      <Form inline>
        <Button onClick={()=> setIsAuth(!isAuth)}>
          {isAuth?"Logout":"Login"}
        </Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;
