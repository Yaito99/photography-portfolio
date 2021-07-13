import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Navbar , Nav  } from 'react-bootstrap';



const Layout = ({  nav , children }) => {
  return (
    <main>
      <Navbar bg="black" expand="lg">
        <Navbar.Brand href="#home">
          <StaticImage
            src="../images/logo-sm.png"
            width={50}
            height={50}
            className="d-inline-block align-top"
            alt="Waleed Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <Nav.Link active={nav === 0} href="#home">Home</Nav.Link>
            <Nav.Link active={nav === 1} href="#link">About</Nav.Link>
            <Nav.Link active={nav === 2} href="#link">Portfolio</Nav.Link>
            <Nav.Link active={nav === 3} href="#link">Contact</Nav.Link>
            <Nav.Link active={nav === 4} href="#link">Client Albums</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}    
    </main>
  )
}
export default Layout