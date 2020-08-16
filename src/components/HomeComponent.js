import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    Container,
    Row,
    Col
} from "react-bootstrap";
import '../styling/custom_styling.css';




class HomePage extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                <CardGroup>
                <Card className="bg-dark text-center hover_container">
                        <Card.Img className="card-img" src={require("../assets/crop_output.jpg")} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h2>Music</h2></Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-center hover_container">
                        <Card.Img className="card-img" src={require("../assets/crop_output.jpg")} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h2>About Me</h2></Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-center hover_container">
                        <Card.Img className="card-img" src={require("../assets/eventsimg.png")} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h2>Events</h2></Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
                </Col>
                </Row>
                <Row>
                    <Col>
                <CardGroup>
                <Card className="bg-dark text-center hover_container">
                        <Card.Img className="card-img" src={require("../assets/crop_output.jpg")} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h2>Support Me</h2></Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-center hover_container">
                        <Card.Img className="card-img" src={require("../assets/crop_output.jpg")} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h2>Social Media</h2></Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-center hover_container">
                        <Card.Img className="card-img" src={require("../assets/crop_output.jpg")} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h2>Store</h2></Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
                </Col>
                </Row>
            </Container>
        );
    }
}


export default HomePage;