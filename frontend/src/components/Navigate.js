import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../styles/Navigate.css';

function Navigate() {
  return (
    <>
      <Navbar expand="lg" bg='myColour' fixed='top'>
        <Container>
          <Navbar.Brand as={Link} to={"/"}>OccultPod</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse>
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/episodes"}>Episodes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/listen"}>Where to Listen</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/dashboard"}>Dashboard</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigate