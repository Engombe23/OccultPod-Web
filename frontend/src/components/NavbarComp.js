import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Episodes from './Episodes';
import Guests from '../pages/Guests';
import Listen from '../pages/Listen';
import Contact from '../pages/Contact';

function NavbarComp(){
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">OccultPod</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              <NavDropdown title="Themes" id='basic-nav-dropdown'>
                <NavDropdown.Item href='#'>Occult</NavDropdown.Item>
                <NavDropdown.Item href='#'>Conspiracies</NavDropdown.Item>
                <NavDropdown.Item href='#'>Decoding Reality</NavDropdown.Item>
                <NavDropdown.Item href='#'>Movie & TV Show Reviews</NavDropdown.Item>
                <NavDropdown.Item href='#'>Guests</NavDropdown.Item>
                <NavDropdown.Item href='#'>Self Improvement</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/episodes"}>Episodes</Nav.Link>
              <Nav.Link as={Link} to={"/guests"}>Guests</Nav.Link>
              <Nav.Link as={Link} to={"/listen"}>Where to Listen</Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/episodes' element={<Episodes />}></Route>
        <Route path='/guests' element={<Guests />}></Route>
        <Route path='/listen' element={<Listen />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default NavbarComp;