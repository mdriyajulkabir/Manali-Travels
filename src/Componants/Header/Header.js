import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap"
const Header = () => {
    return (
        <>
          <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  href="#home">Home</Nav.Link>
        <Nav.Link  href="#link">Contact Us</Nav.Link>
        <Nav.Link  href="#link">About</Nav.Link>
        <Nav.Link  href="#link">Blogs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  
        </>
    );
};

export default Header;