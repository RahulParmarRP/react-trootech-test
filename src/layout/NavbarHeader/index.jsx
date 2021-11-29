import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
const NavbarHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Todo App</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader
