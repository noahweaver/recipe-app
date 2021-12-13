import React from 'react'
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <Nav className="justify-content-end">
            <Nav.Item>
                <Nav.Link href="#/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#/home">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#/home">Submit</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
