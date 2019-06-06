import React from "react";
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import coffeeImage from '../Assets/Images/coffee.jpg';

const Styling = styled.div`
    .jumbo {
        background: url(${coffeeImage}) no-repeat fixed bottom;
        background-size:cover;
        color:#efefef;
        height: 600px;
        position:relative;
        z-index : -2;
    }

    .overlay {
        background-color:#000;
        opacity:0.5;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: -1;
    }

    .buffer {
        margin-top:5em;
    }
`;

const Jumbotron = () => (
    <Styling>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container className="buffer">
                <h1>Welcome</h1>
                <p>My website that stores my learning shenanigans and mischief</p>
            </Container>
        </Jumbo>
    </Styling>
)

export default Jumbotron;