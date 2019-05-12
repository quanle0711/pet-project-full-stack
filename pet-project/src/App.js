import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//router imports
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import PayPalApi from "./components/PayPal";
import Error from "./components/Error";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/About" component={About} />
                            <Route path="/PayPal" component={PayPalApi} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
