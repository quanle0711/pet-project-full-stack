import React, { Component } from "react";
import styled from "styled-components";
const Styling = styled.div`
     {
        .about-section {
            height:100vh;
            background-color:#2C3059;  
        }
    }
`;
class About extends Component {
    render() {
        return (
            <Styling>
                <div className="about-section" id="about">
                    <p>Hello world</p>
                </div>
            </Styling>
        );
    }
}

export default About;