import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import "../components/navigation.css"
export default function Navigation() {
    return (
        <div className='navigation'>
            <>
 
  <Navbar  className='nav' >
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        </div>
    )
}
