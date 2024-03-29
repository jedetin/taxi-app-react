import React from "react";
import { Card, Container, Button } from 'react-bootstrap';
import './style.css';
import RideCard from "./RideCard";

const rides = [
    {
        "trip": 98788,
        "journey": {
            "to": "Kala Ghoda",
            "from": "Raj Bhawan"
        },
        "fare": 123,
        "rating": 5,
        "driver": {
            "name": "Rakesh Meena",
            "car": "Sonata",
            "number": "22BH4537"
        }
    },
    {
        "trip": 98675,
        "journey": {
            "to": "MG Road",
            "from": "Business Park"
        },
        "fare": 234,
        "rating": 4.5,
        "driver": {
            "name": "Aslam Atif",
            "car": "Dzire",
            "number": "22BH9203"
        }
    },
    {
        "trip": 97866,
        "journey": {
            "to": "IT Hub",
            "from": "Sanjeevni nagar"
        },
        "fare": 345,
        "rating": 5,
        "driver": {
            "name": "Unmukt Ghadge",
            "car": "Camry",
            "number": "22BH1340"
        }
    }
];

console.log(rides.map)

const ViewRides = () => {

    return (
        <div>
            <Container className="py-5" style={{ height: "100vh" }}>
                <h1>View Previous Rides</h1>
                <div className="row">
                    <RideCard rides={rides} />
                </div>
            </Container>
        </div>

    )
}

export default ViewRides