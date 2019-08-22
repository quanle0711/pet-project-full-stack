
import React, { Component } from "react";
import styled from "styled-components";

import { Jumbotron, Card, Button, ButtonToolbar, CardDeck } from "react-bootstrap";
import { Container } from "react-bootstrap";

import MainImage from "../images/projectsJumbo.jpg";
import project1Img from "../images/projects/projects-mocksenger.jpg";

const Styling = styled.div`
.projects {
    height: auto;
    background: url(${MainImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    box-shadow: inset 0 0 80px 1px #222;
    z-index: -2;
    margin-bottom:0px;
    padding:2em;
}

.cards {
    background:rgba(0, 0, 0, 0.6);
}

.buttons * {
    margin-right:1em;
}

.bottom-text {
    text-align:center;
    width:100%;
    padding-top: 2em;
}
`;

class Projects extends Component {
    render() {
        return (
            <Styling>
                <Jumbotron fluid className="projects" id="projects" >
                    <Container>
                        <CardDeck style={{ padding: "0" }}>

                            <Card className="cards">
                                <Card.Img src="#" style={{ height: '16em' }} alt="Card image" />
                                <Card.Body>

                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                    <ButtonToolbar className="buttons">
                                        <Button href="#">View Live</Button>
                                        <Button href="#">Github</Button>
                                    </ButtonToolbar>
                                </Card.Body>
                            </Card>
                            <Card className="cards">
                                <Card.Img src="#" style={{ height: '16em' }} alt="Card image" />
                                <Card.Body>

                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                    <ButtonToolbar className="buttons">
                                        <Button href="#">View Live</Button>
                                        <Button href="#">Github</Button>
                                    </ButtonToolbar>
                                </Card.Body>
                            </Card>
                            <Card className="cards">
                                <Card.Img src="#" style={{ height: '16em' }} alt="Card image" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                    <ButtonToolbar className="buttons">
                                        <Button href="#">View Live</Button>
                                        <Button href="#">Github</Button>
                                    </ButtonToolbar>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <div className="bottom-text">
                            <h4>And theres more to come...</h4>
                        </div>
                    </Container>
                </Jumbotron>
            </Styling>
        );
    }
}

export default Projects;