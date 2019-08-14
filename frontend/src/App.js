import React, { Component } from "react";
import "./App.css";


import Jumbo from "./components/jumbotron";

class App extends Component {
    render() {
        return (
            <React.Fragment>
				<Jumbo/>
            </React.Fragment>
        );
    }
}

export default App;
