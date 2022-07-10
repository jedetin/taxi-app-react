import React from "react";
import { Navbar, Nav,  Container, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="warning" className="p-3 text-white" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><h2>BitCab.</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">


                        <Nav className="me-auto my-2 my-lg-0">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/book">Find Ride</Nav.Link>
                            <Nav.Link href="/view">View Rides</Nav.Link>
                        </Nav>
                        <div className="d-flex">
                            <Nav className="me-auto my-2 my-lg-0">
                                <Button className="btn btn-danger">Account</Button>
                            </Nav>
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;