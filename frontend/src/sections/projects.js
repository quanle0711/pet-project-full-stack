import React, { Component } from "react";
import styled from "styled-components";
const Styling = styled.div`
     {
        .projects-section {
            height:100vh;
            background-color:#92B69F;  
        }
    }
`;
class Projects extends Component {
    render() {
        return (
            <Styling>
                <div className="projects-section" id="projects">
                    <p>Hello world</p>
                </div>
            </Styling>
        );
    }
}

export default Projects;