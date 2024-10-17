import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavigationBar() {
  return (

   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      
        
        <Navbar.Brand as= {Link} to=  "/"><img src={""}
          width="150" height="auto"
          alt="Logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact-us">{("Contact")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{("Cart")}</Nav.Link>
            <Nav.Link as={Link} to="/custom-pc">{("Custom pc")}</Nav.Link>
            <Nav.Link as={Link} to="/pre-configured-pc">{("Preconfigured pc")}</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar