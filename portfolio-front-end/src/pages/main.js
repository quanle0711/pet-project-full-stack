import React, { Component } from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import MainImage from "../images/jumboPhoto.jpg";
import { Container } from "react-bootstrap";
const Styling = styled.div`
    .main {
        height: auto;
        background: url(${MainImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        box-shadow: inset 0 0 80px 1px #222;
        position: relative;
        z-index: -2;
        margin-bottom:0px;
        
    }
    .overlay {
        background-color: #000;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .fillerdiv {
        height:180px;
        width:100%;
    }
    .wrapper {
        margin: auto;
        width: 80vw;
        padding-bottom:5em;
    }

    .wrapper h1 {
        font-size: 3.5em;
    }
    .wrapper h2 {
        font-size: 2em;
    }
    .accent2 {
        
        color: #69f0ae;
    }

    .wrapper p {
        font-size: 1.5em;
    }

    .accent {
        background: linear-gradient(to right, #9c27b0 0%, #e91e63 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

class Main extends Component {
    render() {
        return (
            <Styling>
                <Jumbotron fluid className="main" id="main">
                    <div className="overlay" />
                    <Container className="wrapper">
                        <div className="fillerdiv" />
                        <h2><span className="accent2">Hi there</span></h2>
                        <h1>
                            My name is <span className="accent">Quan Le</span>.
                        </h1>
                        <p>I am a <span className="accent2">&lt;Software Programmer&gt;</span> and a <span className="accent2">&lt;/Full Stack Developer&gt;</span></p>
                    </Container>
                </Jumbotron>
            </Styling>
        );
    }
}

export default Main;
