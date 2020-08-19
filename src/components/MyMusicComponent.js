import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../styling/custom_styling.css';
import '../styling/mymusic_styling.css';
import {
    Card,
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import { propTypes } from 'react-bootstrap/esm/Image';


class MyMusic extends Component {

    render() {
        return (
            <div>
                <h1>My Music</h1>
                <Container fluid>
                    <Card className="card-music">
                        <Card.Body>
                            <Row>
                                <Col>
                                <Card.Img src={require("../assets/images/kanyealbumcover.jpg")} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Card.Title><h3 className="h3-song-title">Song Title Here</h3></Card.Title>
                                    </Row>
                                    <Row>
                                        <Card.Subtitle className="h3-song-album"><h3>Song Album or Single</h3></Card.Subtitle>
                                    </Row>
                                    <Row>
                                        <Button className="song-button-sc"><span>SoundCloud</span></Button>
                                        <Button className="song-button-sp"><span>Spotify</span></Button>
                                        <Button className="song-button-yt"><span>YouTube</span></Button>
                                    </Row>
                                    <br/>
                                    <Row className="justify-content-center">
                                    <ReactAudioPlayer className="audio_player" src={require("C:/Users/maxwe/Desktop/consulting_work/phoenix_music/src/assets/audio/BabyElephantWalk60.wav")} controls currentTime/>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="card-music">
                        <Card.Body>
                        <Row>
                                <Col>
                                <Card.Img src={require("../assets/images/kanyealbumcover.jpg")} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Card.Title><h3 className="h3-song-title">Song Title Here</h3></Card.Title>
                                    </Row>
                                    <Row>
                                        <Card.Subtitle className="h3-song-album"><h3>Song Album or Single</h3></Card.Subtitle>
                                    </Row>
                                    <Row>
                                        <Button className="song-button-sc"><span>SoundCloud</span></Button>
                                        <Button className="song-button-sp"><span>Spotify</span></Button>
                                        <Button className="song-button-yt"><span>YouTube</span></Button>
                                    </Row>
                                    <br/>
                                    <Row className="justify-content-center">
                                    <ReactAudioPlayer className="audio_player" src={require("C:/Users/maxwe/Desktop/consulting_work/phoenix_music/src/assets/audio/BabyElephantWalk60.wav")} controls currentTime/>
                                    </Row>
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