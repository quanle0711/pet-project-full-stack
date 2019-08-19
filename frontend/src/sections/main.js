/**
 import React, { Component } from "react";
 import styled from "styled-components";
 import mainPhoto from "../images/jumboPhoto.jpg";
 import Jumbotron from "react-bootstrap/Jumbotron";
 import Container from "react-bootstrap/Container";
 const Styling = styled.div`
 {
     @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
     .main-section {
         height: 60vh;
         z-index: -2;
         
        }
        
        .Jumbo {
            height: 100%;
            width: 100%;
            background: url(${mainPhoto}) no-repeat fixed bottom;
            background-size: cover;
            color: #efefef;
            float: left;
            z-index: -2;
            font-family: 'Open Sans', sans-serif;
        }
        
        .Jumbo h1 {
            font-size:2.5rem;
        }
        .Jumbo p {
            font-size:1.5rem;
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
                            <h1>Hi, I'm Quan - I am a developer who specializes in</h1>
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
    
    *  */

import React, { Component } from "react";
import styled from "styled-components";
import mainPhoto from "../images/jumboPhoto.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
const Styling = styled.div`
     {
        @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
        .main-section {
            height: 60vh;
            background: url(${mainPhoto}) no-repeat fixed bottom;
            background-size: cover;
            color: #efefef;
            float: left;
            z-index: -2;
            font-family: "Open Sans", sans-serif;
        }

        .Jumbo h1 {
            font-size: 2.5rem;
        }
        .Jumbo p {
            font-size: 1.5rem;
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
                <Jumbotron className="Jumbo main-section" fluid id="home">
                    <div className="overlay" />
                    <Container>
                        <h1>
                            Hi, I'm Quan - I am a developer who specializes in
                        </h1>
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
            </Styling>
        );
    }
}

export default Home;
