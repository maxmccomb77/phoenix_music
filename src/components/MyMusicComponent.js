import React, { Component } from 'react';
import '../styling/custom_styling.css';
import '../styling/mymusic_styling.css';

import {
    Card,
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";


class MyMusic extends Component {

    render() {
        return (
            <div>
                <h1>My Music</h1>
                <Container>
                    <Card className="card-music">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Img src={require("../assets/kanyealbumcover.jpg")}/>
                                </Col>
                                <Col>
                                    <Card.Title><h3 className="h3-song-title">Song Title Here</h3></Card.Title>
                                    <Card.Subtitle className="h3-song-album"><h3>Song Album or Single</h3></Card.Subtitle>
                                    <Button className="song-button-sc"><span>SoundCloud</span></Button>
                                    <Button className="song-button-sp"><span>Spotify</span></Button>

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="card-music">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Img src={require("../assets/kanyealbumcover.jpg")}/>
                                </Col>
                                <Col>
                                    <Card.Title><h3 className="h3-song-title">Song Title Here</h3></Card.Title>
                                    <Card.Subtitle className="h3-song-album"><h3>Song Album or Single</h3></Card.Subtitle>
                                    <Button className="song-button-sc"><span>SoundCloud</span></Button>
                                    <Button className="song-button-sp"><span>Spotify</span></Button>

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }



}

export default MyMusic;