import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavTop = ({ city, country }) => {
    return (
        <>
        <Navbar expand="lg" style={{ backgroundColor: "#d1d1d1", paddingBottom: "15px" }}>
            <Container>
                <Navbar.Brand style={{ fontSize: "32px", fontFamily: "'Pacifico', cursive" }} href="#">The Good News</Navbar.Brand>
                <p style={{ paddingTop: '1rem', fontSize: "18px" }}>
              <strong>Location:</strong> {city}, {country}
            </p>
            </Container>
        </Navbar>
        </>
    )
}

export default NavTop