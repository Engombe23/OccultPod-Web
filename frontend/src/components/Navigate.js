import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

function Navigate() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>OccultPod</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/episodes"}>Episodes</Nav.Link>
            <Nav.Link as={Link} to={"/listen"}>Where To Listen</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            <SocialIcon url='https://twitter.com/OccultPod_13'/>
            <SocialIcon url='https://instagram.com/occultpod_13'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigate
