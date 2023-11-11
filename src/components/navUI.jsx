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
          <h1 className="display-4" style={{ color: "#fff" }}><SiIfood/> AyurEase</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "#fff" }} href="/">
              <h2>Home</h2>
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="products">
              <h2>Products</h2>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
  );
}

export default NavUI;