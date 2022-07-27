import React from "react";
import { Card, Container, Button } from 'react-bootstrap';
import './style.css';

const RideCard = (props) => {
    console.log(props)
    const renderRideCard = props.rides.map((ride) => {
        return (
            <Card style={{width: '25rem' }}>
                <Card.Header>TRIP #{ride.trip}</Card.Header>
                <Card.Body>
                    <Card.Title className="text-black">{ride.journey.from}  - {ride.journey.to}</Card.Title>
                    <Card.Text>
                        <div className="row">
                            <div className="col-lg-6">
                                <b>Journey:</b> {ride.journey.to}<br />
                                <b>Total Fare :</b>{ride.fare}<br />
                                <b>Rating: </b>{ride.rating}<br />
                            </div>
                            <div className="col-lg-6">
                                <b>Driver: </b>{ride.driver.name}<br />
                                <b>Car :</b>{ride.driver.car}<br />
                                <b>Number:</b> {ride.driver.number}<br />
                            </div>
                        </div>
                    </Card.Text>
                    <Button variant="danger" type="submit">Support</Button>

                </Card.Body>
            </Card>
        );
    });
    return renderRideCard
        /*(<Card style={{ width: '25rem' }} >
            <Card.Header>TRIP #ride.trip</Card.Header>
            <Card.Body>
                <Card.Title className="text-black">ride.journey.from  - ride.journey.to</Card.Title>
                <Card.Text>
                    <div className="row">
                        <div className="col-lg-6">
                            <b>Journey:</b> ride.journey.to<br />
                            <b>Total Fare :</b>ride.fare<br />
                            <b>Rating: </b>ride.rating<br />
                        </div>
                        <div className="col-lg-6">
                            <b>Driver: </b>ride.driver.name<br />
                            <b>Car :</b>ride.driver.car<br />
                            <b>Number:</b> ride.driver.number<br />
                        </div>
                    </div>
                </Card.Text>
                <Button variant="danger" type="submit">Support</Button>

            </Card.Body>
        </Card>)*/
    
}
export default RideCard