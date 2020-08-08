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
import '../styling/custom_styling.css';


class Header extends Component {


    render() {
        return (
                <Navbar className="navbar" variant="dark" expand="lg">
                    <Navbar.Brand href="/home"><HouseDoorFill /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href=""><p className="navItem-text">My Music</p></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" ><p className="navItem-text">About Me</p></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" ><p className="navItem-text">Events</p></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" ><p className="navItem-text">Store</p></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" ><p className="navItem-text">Support Me</p></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }


}

export default Header;