import React from "react";
import { Card, Container, Form, Button } from 'react-bootstrap';
import './style.css';

class BookRides extends React.Component {
    state = {
        src: "",
        dest: ""
    }

    submitReq = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState = { src: "", dest: "" }
    }

    render() {
        return (
            <div>
                <Container className="py-5" style={{ height: "100vh" }}>
                    <Form onSubmit={this.submitReq}>
                        <Card>
                            <Card.Header>Find Cabs here</Card.Header>
                            <Card.Body>
                                <Card.Title className="text-black">Enter the nearest landmark at the addresses</Card.Title>
                                <Card.Text>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control size="lg" type="text" placeholder="Source Address" onChange={(e) => this.setState({ src: e.target.value })} value={this.state.src} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control size="lg" type="text" placeholder="Destination Address" onChange={(e) => this.setState({ dest: e.target.value })} value={this.state.dest} />
                                    </Form.Group>
                                </Card.Text>
                                <Button variant="warning" type="submit">Find Cabs</Button>
                                <Button variant="danger" disabled>Find Drivers</Button>
                            </Card.Body>
                        </Card>
                    </Form>


                </Container>
            </div>
        )
    }
}

export default BookRides