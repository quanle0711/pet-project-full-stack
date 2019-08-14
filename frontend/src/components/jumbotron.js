import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import styled from "styled-components";
import image from "../images/jumboPhoto.jpg";
import Topnav from "./navbar";

const Styling = styled.div`

    .wrapper {
        background-color:transparent !important;
    }
    .JumbotronMain {
        background: url(${image}) no-repeat fixed bottom;
        background-size: cover;
        color: #fff;
        height: 100vh;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .sizer {
        margin: 0;
        width: 67vw;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .sizer h1 {
        font-weight: bold;
        font-size:2.5em;
        text-align:center;
    }
`;

const Jumbo = () => {
    return (
        <Styling>
            <div className="wrapper">
                <Topnav />
            </div>
            <Jumbotron fluid className="JumbotronMain">
                <div className="overlay" />
                <Container className="sizer">
                    <h1>Hello there.<br/>
                     My name is Quan. <br/>
                     I am a software Developer.</h1>
                </Container>
            </Jumbotron>
        </Styling>
    );
};

export default Jumbo;
