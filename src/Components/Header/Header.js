import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auhref ">
            <Link className="nav" to="/home">Home </Link>
            {/* <Link className="nav" to="/shop"> Shop </Link> */}
            <Link className="nav" to="/OrderReview"> Order Review </Link>
            <Link className="nav" to="/inventory"> Inventory </Link>
            <Link className="nav" to="/about"> About </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
