import React, { Component } from 'react';
import '../styling/custom_styling.css';
import {
    Card,
    Container,
    Row,
    Col,
    Button,
    ListGroup
} from "react-bootstrap";


class Events extends Component {

    render() {
        return (
            <div>
                <h1>Events</h1>
                <Container>
                    <h2>Recurring</h2>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="" target="_blank" href="https://www.google.com/maps/place/Cool+Beanz+Coffee+House/@41.49775,-90.5590737,17z/data=!3m1!4b1!4m5!3m4!1s0x87e233a256aaad1d:0xa3199cddab4a0088!8m2!3d41.497746!4d-90.556885" >See on Map</Button></Col>
                                <Col>Location: Cool Beans Coffee Shop</Col>
                                <Col>When: Every Tuesday from 7-9pm</Col>
                                <Col><Button>Tickets?</Button></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="" target="_blank" href="https://www.google.com/maps/place/Cool+Beanz+Coffee+House/@41.49775,-90.5590737,17z/data=!3m1!4b1!4m5!3m4!1s0x87e233a256aaad1d:0xa3199cddab4a0088!8m2!3d41.497746!4d-90.556885" >See on Map</Button></Col>
                                <Col>Location: Cool Beans Coffee Shop</Col>
                                <Col>When: Every Tuesday from 7-9pm</Col>
                                <Col><Button>Tickets?</Button></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="" target="_blank" href="https://www.google.com/maps/place/Cool+Beanz+Coffee+House/@41.49775,-90.5590737,17z/data=!3m1!4b1!4m5!3m4!1s0x87e233a256aaad1d:0xa3199cddab4a0088!8m2!3d41.497746!4d-90.556885" >See on Map</Button></Col>
                                <Col>Location: Cool Beans Coffee Shop</Col>
                                <Col>When: Every Tuesday from 7-9pm</Col>
                                <Col><Button>Tickets?</Button></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="" target="_blank" href="https://www.google.com/maps/place/Cool+Beanz+Coffee+House/@41.49775,-90.5590737,17z/data=!3m1!4b1!4m5!3m4!1s0x87e233a256aaad1d:0xa3199cddab4a0088!8m2!3d41.497746!4d-90.556885" >See on Map</Button></Col>
                                <Col>Location: Cool Beans Coffee Shop</Col>
                                <Col>When: Every Tuesday from 7-9pm</Col>
                                <Col><Button>Tickets?</Button></Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    <br />
                    <h2>One-Time</h2>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="" target="_blank" href="https://www.google.com/maps/place/Radio+City+Music+Hall/@40.75998,-73.9821659,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258f8d61b2f3d:0x92c4e681d9aada95!8m2!3d40.759976!4d-73.9799772" >See on Map</Button></Col>
                                <Col>Location: Radio City Music Hall</Col>
                                <Col>When: July 4th 7-10pm EST</Col>
                                <Col><Button>Tickets?</Button></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="" target="_blank" href="https://www.google.com/maps/place/Radio+City+Music+Hall/@40.75998,-73.9821659,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258f8d61b2f3d:0x92c4e681d9aada95!8m2!3d40.759976!4d-73.9799772" >See on Map</Button></Col>
                                <Col>Location: Radio City Music Hall</Col>
                                <Col>When: July 4th 7-10pm EST</Col>
                                <Col><Button>Tickets?</Button></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="" target="_blank" href="https://www.google.com/maps/place/Radio+City+Music+Hall/@40.75998,-73.9821659,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258f8d61b2f3d:0x92c4e681d9aada95!8m2!3d40.759976!4d-73.9799772" >See on Map</Button></Col>
                                <Col>Location: Radio City Music Hall</Col>
                                <Col>When: July 4th 7-10pm EST</Col>
                                <Col><Button>Tickets?</Button></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col><Button className="" target="_blank" href="https://www.google.com/maps/place/Radio+City+Music+Hall/@40.75998,-73.9821659,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258f8d61b2f3d:0x92c4e681d9aada95!8m2!3d40.759976!4d-73.9799772" >See on Map</Button></Col>
                                <Col>Location: Radio City Music Hall</Col>
                                <Col>When: July 4th 7-10pm EST</Col>
                                <Col><Button>Tickets?</Button></Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    <br />
                </Container>
            </div>

        );
    }



}

export default Events;