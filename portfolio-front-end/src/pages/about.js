import React, { Component } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Container } from "react-bootstrap";
const Styling = styled.div`
    .about {
        background-color: white;
        display: flex;
        flex-direction: row;
        padding:1em 1em;
    }
    .left {
        width: 33%;
        float: left;
        text-align:left;
    }
    .right {
        width: 66%;
        font-size: 1.2em;
        margin-left: 1%;
    }

    @media (max-width: 767px) {
        .about {
            flex-direction: column;
        }
        .left,
        .right {
            text-align:center;
            width: 100%;
            margin: 1% 0;
        }
    }
`;

class About extends Component {
    render() {
        return (
            <Styling>
                <Container className="about" id="about">
                    <div className="left">
                        <h1>My Story</h1>
                        <h5>What I am all about</h5>
                    </div>
                    <div className="right">
                        My Name is Quan, I Studied at Victoria University of
                        Wellington and graduated at 2018 with a Bachelor's
                        Degree majoring in Computer Science.
                    </div>
                </Container>
            </Styling>
        );
    }
}

export default About;
