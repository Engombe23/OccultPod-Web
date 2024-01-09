import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navigate() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary justify-content-center" fixed='top'>
        <Nav className="justify-content-center" activeKey="/home">
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
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigate