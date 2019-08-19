import React, { Component } from "react";
import "./App.css";
import NavigationTop from "./components/navbar";
import Main from "./pages/main";
import About from "./pages/about";
import Projects from "./pages/projects";
import { Container } from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <>
            <NavigationTop/>

            <Main/>
            <About/>
            <Projects/>
            </>
        );
    }
}

export default App;
