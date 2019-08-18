import React, { Component } from "react";
import "./App.css";

import Topnav from "./components/navbar";
import Container from "react-bootstrap/Container";
import Home from "./sections/main";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contacts from "./sections/contact";
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Topnav />
                <Home />
                <About />
                <Projects />
                <Contacts />
            </React.Fragment>
        );
    }
}

export default App;
