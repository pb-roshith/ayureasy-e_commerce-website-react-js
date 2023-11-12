import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {SiIfood} from 'react-icons/si'

function NavUI() {
  return (
    <Navbar
      style={{ backgroundColor: "#00FF00" }}
      expand="lg"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="/">
          <h1 className="display-6" style={{ color: "#fff" }}><SiIfood/> AyurEase</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "#fff" }} href="/">
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="products">
              <h5>Products</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
  );
}

export default NavUI;