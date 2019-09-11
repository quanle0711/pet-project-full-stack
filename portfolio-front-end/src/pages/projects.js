
import React, { Component } from "react";
import styled from "styled-components";

import { Jumbotron, Card, Button, ButtonToolbar, CardDeck, Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

import MainImage from "../images/projectsJumbo.jpg";

const Styling = styled.div`


.projects {
    height: auto;
    background: url(${MainImage}) no-repeat fixed bottom;
    background-size: cover;
    color: black;
    box-shadow: inset 0 0 80px 1px #222;
    z-index: -2;
    font-size: 1.2em;
    margin-bottom:0px;
    padding:1em;
    text-align:justify;
    text-justify:inter-character;
}

.project {
    background:rgba(255, 255, 255, 1);
    padding:1em;
}

h2 {
    background: linear-gradient(to right, #9c27b0 0%, #e91e63 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.buttons * {
    margin:0.5em;
    margin-left:0;
}

.bottom-text {
    padding-top:1em;
    background:rgba(200, 200, 200, 0.8);
}


@media (max-width: 990px) { 
    .projects {
        font-size:0.8em;
    }
    .buttons {
        flex-direction:column;
    }
}

`;

class Projects extends Component {
    render() {
        return (
            <Styling>
                <Jumbotron fluid className="projects" id="projects" >
                    <Container>
                        <Row className="project">
                            <Col md="4">
                                <h2>
                                    Mock Messenger
                                </h2>
                            </Col>
                            <Col md="8">
                                <p>
                                    An Android and IOS compatible messaging app. Data storage is hosted on the Google Firebase cloud platform.
                                </p>
                                <p>
                                    The app was developed twice, once leveraging the Ionic framework and once using the React Native library.
                                </p>
                                <p>
                                    This project created from 2 assignments as part of SWEN325 - a mobile development course from VUW (Victoria University of Wellington) - 3rd Year 2nd Trimester - 2018
                                </p>

                                <ButtonToolbar className="buttons">
                                    <Button size="sm" disabled variant="primary">Code not live</Button>
                                    <Button size="sm" variant="success" href="https://github.com/quanle0711/Mock-Messenger-React" target="_blank" >View Source(React)</Button>
                                    <Button size="sm" variant="success" href="https://github.com/quanle0711/MockMessengerIonic" target="_blank" >View Source(Ionic)</Button>

                                </ButtonToolbar>
                            </Col>
                        </Row>
                        {/** first project done*/}
                        <hr />
                        <Row className="project">
                            <Col md="4">
                                <h2>
                                    TwentyTwo Beacons
                                </h2>
                            </Col>
                            <Col md="8">
                                <p>
                                    A full Stack development project for <a href="https://www.twentytwo.co.nz/">TwentyTwo Property Advisors</a> using Bluetooth Beacons to track usage of building spaces.
                                    </p><p>
                                    The project required development of a NodeJS back-end server, a PostgreSQL database for data-storage,
                                    a AngularJS driven web-portal that enables visualization and manipulation of that data and an IOS app that
                                    tracks user location in accordance of the BLE Beacons for data entry.
                                    </p><p>
                                    The project was part of a full-year 3rd year course that was enabling students to work with real clients.
                                </p>


                                <ButtonToolbar className="buttons">
                                    <Button size="sm" disabled variant="success" href="#" target="_blank" >GitHub/Source private</Button>


                                </ButtonToolbar>
                            </Col>
                        </Row>
                        {/** 2nd project done*/}
                        <hr />
                        <Row className="project">
                            <Col md="4">
                                <h2>
                                    API Gallery
                                </h2>
                            </Col>
                            <Col md="8">
                                <p>
                                    A pet project which showcases a gallery of API interactions (such as searching up videos with the Youtube API) through a webpage.
                                </p>
                                <p>
                                    The project is created as a means for my learning of REST APIs and Javascript callbacks.
                                </p>
                                <p>
                                    The webpage is developed using React and is still in the works...
                                </p>

                                <ButtonToolbar className="buttons">
                                    <Button size="sm" variant="success" href="https://github.com/quanle0711/pet-project-full-stack/tree/master/pet-project" target="_blank" >View Source</Button>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                        <hr />

                        <Row className="bottom-text">
                            <Col md="12">
                                <p>
                                    Currently still learning and making more projects, so stay tuned...
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Styling >
        );
    }
}

export default Projects;