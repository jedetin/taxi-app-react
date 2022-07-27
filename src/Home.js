import React from "react";
import { Button, Card } from 'react-bootstrap';
import crt1 from "./images/crt1.jpg";
import crt2 from "./images/crt2.jpg";

const Home = () => {
    return (
        // <div style={{ height: "100vh" }}>
        <div>
            <div className="container my-5 px-5">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h1>BitCab &mdash; Bid for your ride</h1>
                        <p style={{fontFamily: "Poppins"}}>
                            <p className="lead">Gone are those days when we would book cab on prices set for us.</p>  


                        </p>
                        <h4>With BitCab, bid a price for your taxi ride, and we give 100% of earnings to the driver, therefore they dont charge extra from you.</h4>                            <br />
                        <p>
                            <Button className="btn btn-warning btn-lg rounded">Book now</Button>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={crt1}></img>
                    </div>

                </div>
                    <hr className="mt-5 mb-5"/>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <img src={crt2}></img>

                        
                    </div>
                    <div className="col-md-6">
                                                <h2>Getting drivers their worth</h2>
                        <p style={{fontFamily: "Poppins"}}>

                            Pandemic hit cab drivers hard. It threw them out of business for not one or two months but more than two years. Petrol/Diesel prices are at an all-time high. Ride commissions charged by ride-hailing companies are at unimaginable levels. <br/><h5>To give you a perspective, If you book a cab of ₹ 100 driver get only ₹ 70 that includes driver will pick you up, will wait for you and drop you. It has become next to impossible to be a cab driver and, earn living. </h5>
                        </p>

                        <p>
                            <Button className="btn btn-warning btn-lg">View Rides
                            
                            </Button>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;