import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    Container,
    Row,
    Col
} from "react-bootstrap";



class HomePage extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                <CardGroup>
                    <Card className="bg-dark text-white text-center" style={{ width: "18rem", height: "24rem" }}>
                        <Card.Img  alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white text-center" style={{ width: "18rem", height: "24rem" }}>
                        <Card.Img src="../assets/eventsimg.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card hover zoomclassName="bg-dark text-white text-center" style={{ width: "18rem", height: "24rem" }}>
                        <Card.Img src={require("../assets/eventsimg.png")} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
                </Col>
                </Row>
                <Row>
                    <Col>
                <CardGroup>
                    <Card className="bg-dark text-white text-center" style={{ width: "18rem", height: "24rem" }}>
                        <Card.Img src="../assets/eventsimg.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white text-center" style={{ width: "18rem", height: "24rem" }}>
                        <Card.Img src="../assets/eventsimg.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white text-center" style={{ width: "18rem", height: "24rem" }}>
                        <Card.Img src="../assets/eventsimg.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
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