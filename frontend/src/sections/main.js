import React, { Component } from "react";
import styled from "styled-components";
import mainPhoto from "../images/jumboPhoto.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
const Styling = styled.div`
     {
        @import url('https://fonts.googleapis.com/css?family=Lexend+Tera&display=swap');

        .main-section {
            height: 600px;
            position: relative;
            z-index: -2;
        }

        .Jumbo {
            height: 100%;
            width: 100%;
            background: url(${mainPhoto}) no-repeat fixed bottom;
            background-size: cover;
            color: #efefef;
            position: relative;
            float: left;
            z-index: -2;
            font-family: 'Lexend Tera', sans-serif;
        }

        .overlay {
            background-color: #000;
            opacity: 0.7;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
        }

    }
`;
class Home extends Component {
    render() {
        return (
            <Styling>
                <div className="main-section" id="home">
                    <Jumbotron className="Jumbo" fluid>
                        <div className="overlay" />
                        <Container>
                            <h1>Hi! My name is Quan Le</h1>
                            <p>
                                Web Design
                                <br />
                                Front End
                                <br />
                                Full-Stack
                                <br />
                                Scrum/Agile
                            </p>
                        </Container>
                    </Jumbotron>
                </div>
            </Styling>
        );
    }
}

export default Home;
