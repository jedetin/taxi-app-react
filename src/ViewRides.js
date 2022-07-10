import React from "react";
import { Card, Container, Button } from 'react-bootstrap';
import './style.css';

const ViewRides = () => {

    return (
        <div>
            <Container className="py-5" style={{ height: "100vh" }}>
                <h1>View Previous Rides</h1>
                <Card style={{ width: '25rem' }}>
                    <Card.Header>TRIP #893903</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-black">Source  - Destination</Card.Title>
                        <Card.Text>
                            <div className="row">
                                <div className="col-lg-6">
                                    <b>Journey:</b> <br />
                                    <b>Total Fare :</b><br />
                                    <b>Rating: </b><br />
                                </div>
                                <div className="col-lg-6">
                                    <b>Driver: </b><br />
                                    <b>Car :</b><br />
                                    <b>Number:</b> <br />
                                </div>
                            </div>
                        </Card.Text>
                        <Button variant="danger" type="submit">Support</Button>

                    </Card.Body>
                </Card>


            </Container>
        </div>

    )
}

export default ViewRides