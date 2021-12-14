import React from 'react'
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <Nav className="justify-content-end p-1">
            <Nav.Item >
                <Nav.Link className="text-light-grey" href="#/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-light-grey" href="#/home">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-light-grey" href="#/home">Submit</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
