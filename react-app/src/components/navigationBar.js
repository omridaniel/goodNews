import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function navigationBar() {
    return (
        <div expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </div>
    )
}

export default navigationBar
