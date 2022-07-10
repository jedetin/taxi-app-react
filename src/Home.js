import React from "react";
import { Button, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <div style={{ height: "100vh" }}>
            <div className="container my-4">
                <Card className="p-3">
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button bsStyle="primary">Learn more</Button>
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default Home;