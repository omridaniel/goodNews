import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavTop = ({ city, country }) => {
    return (
        <>
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <p style={{paddingTop: '1rem'}}>
              Location: {city}, {country}
            </p>
            </Container>
        </Navbar>
        </>
    )
}

export default NavTop
