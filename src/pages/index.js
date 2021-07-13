import React , { useState } from 'react'

import "@fontsource/encode-sans-sc" 


import { StaticImage } from 'gatsby-plugin-image'
import { Container , Row , Col ,  Navbar , Nav } from 'react-bootstrap';

import '../stylesheets/main.scss'


const IndexPage = () => {
  const [nav , setNav] = useState(0)
  return (
      <main>
        <section id="home">
          <div className="bg-overlay">
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
            <Container>
              <Row>
                <Col lg={3} />
                <Col className="text-center intro">
                  <StaticImage
                    src="../images/logo-md.png"
                    width={80}
                    height={80}
                    alt="Waleed Logo"
                  />
                  <div className="mb-2" style={{textTransform:'uppercase',fontSize:'50px',letterSpacing:'6px'}}>Waled Hamdy</div>
                  <div className="job-title" >Professional Photographer</div>
                </Col>
                <Col lg={3} />              
              </Row>
            </Container>
          </div>
        </section>
        <section id="about">
        
        </section>
      </main>    
  )
}

export default IndexPage