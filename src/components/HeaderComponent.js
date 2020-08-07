import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Row,
    Container,
} from "react-bootstrap";
import { HouseDoorFill } from 'react-bootstrap-icons';
import styles from '../styling/custom_styling.css';



class Header extends Component {


    render() {
        return (
                <Navbar className={styles.header} bg="light" expand="lg">
                    <Navbar.Brand href="/home"><HouseDoorFill /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link className="App-link" href="/home">My Music</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" >About Me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" >Events</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" >Social Media</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" >Store</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" >Support Me</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }


}

export default Header;