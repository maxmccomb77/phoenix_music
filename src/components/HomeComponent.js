import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { Link } from 'react-router-dom';
import '../styling/custom_styling.css';




class HomePage extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <h1>Kevin Phoenix Music</h1>
                </Row>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card className="card-home bg-dark text-center hover_container">
                                <Link to="/mymusic" className="a-home">
                                    <Card.Img className="card-img-home" src={require("../assets/images/crop_output.jpg")} alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h2>Music</h2></Card.Title>
                                    </Card.ImgOverlay>
                                </Link>
                            </Card>
                            <Card className="card-home bg-dark text-center hover_container">
                                <Link to="/aboutme" className="a-home">
                                <Card.Img className="card-img-home" src={require("../assets/images/crop_output.jpg")} alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h2>About Me</h2></Card.Title>
                                    </Card.ImgOverlay>
                                </Link>
                            </Card>
                            <Card className="card-home bg-dark text-center hover_container">
                                <Link to="/events" className="a-home">
                                    <Card.Img className="card-img-home" src={require("../assets/images/eventsimg.png")} alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h2>Events</h2></Card.Title>
                                    </Card.ImgOverlay>
                                </Link>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card className="card-home bg-dark text-center hover_container">
                                <Link to="/supportme" className="a-home">
                                <Card.Img className="card-img-home" src={require("../assets/images/crop_output.jpg")} alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h2>Support Me</h2></Card.Title>
                                    </Card.ImgOverlay>
                                </Link>
                            </Card>
                            <Card className="card-home bg-dark text-center hover_container">
                                <Card.Body>
                                    <Row className="justify-content-md-center">
                                        <div >
                                            <h3 className="h3_social">Social Media</h3>
                                        </div>

                                    </Row>
                                    <br/>
                                    <Row className="justify-content-center">
                                        <Col>
                                        <SocialMediaIconsReact icon="facebook" url="https://www.facebook.com/kevinphoenixmusic/" target="_blank" iconSize="10" size="80"/>
                                        </Col>
                                        <Col>
                                        <SocialMediaIconsReact icon="youtube" url="https://www.youtube.com/user/TheXenonPhoenix" target="_blank" iconSize="10" size="80"/>
                                        </Col>
                                        <Col>
                                        <SocialMediaIconsReact icon="instagram" url="https://facebook.com"  target="_blank" iconSize="10" size="80"/>
                                        </Col>
                                        <Col>
                                        <SocialMediaIconsReact icon="twitter" url="https://facebook.com"  target="_blank" iconSize="10" size="80"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="card-home bg-dark text-center hover_container">
                                <Link to="/store" className="a-home">
                                <Card.Img className="card-img-home" src={require("../assets/images/crop_output.jpg")} alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h2>Store</h2></Card.Title>
                                    </Card.ImgOverlay>
                                </Link>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default HomePage;