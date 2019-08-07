import React, { Component } from "react";

//Styling imports
import Container from "react-bootstrap/Container";
import styled from "styled-components";

//Image imports
import coffeeImage from "./Assets/Images/stock-photo-main.jpg";

//router imports
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from "react-router-dom";
//file imports
import Jumbotron from "./Components/Jumbotron";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron />
            </React.Fragment>
        );
    }
}

export default App;
