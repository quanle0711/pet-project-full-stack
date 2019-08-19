
import React, { Component } from "react";
import styled from "styled-components";

const Styling = styled.div`
    .projects {
        height:600px;
        background-color:#eab;
    }
`;

class Projects extends Component {
    render() {
        return (
            <Styling>
                <div className="projects" id="projects" >
                    This is the projects section
                </div>
            </Styling>
        );
    }
}

export default Projects;