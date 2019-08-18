import React, { Component } from "react";
import styled from "styled-components";
const Styling = styled.div`
     {
        .contacts-section {
            height:100vh;
            background-color:#F2766E;  
        }
    }
`;
class Contacts extends Component {
    render() {
        return (
            <Styling>
                <div className="contacts-section" id="contacts">
                    <p>Hello world</p>
                </div>
            </Styling>
        );
    }
}

export default Contacts;