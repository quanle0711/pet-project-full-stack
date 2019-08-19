import React, { Component } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const Styling = styled.div`
     {
        .about-section {
            height:60vh;
            background-color:#efefef;  
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .card {
            position:absolute:
            top: - 50px;
        }
    }
`;
class About extends Component {
    render() {
        return (
            <Styling>

                <div className="about-section" id="about">
                    <Container>
                        <Card style={{ width: '60vw' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </Styling>
        );
    }
}

export default About;