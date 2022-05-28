import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './Navbar.css'
const Navbarh = props => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">

                        Nepilson
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">NFA TO DFA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbarh;
