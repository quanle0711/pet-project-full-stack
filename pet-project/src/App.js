import React, { Component } from "react";
import "./App.css";

//router imports
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import PayPalApi from "./Pages/PayPal";
import Error from "./Pages/Error";
import YoutubeAPI from "./Pages/YoutubeAPITest";

import Layout from "./Components/Layout";
import NavigationBar from "./Components/Navigation-topbar";
import Jumbotron from "./Components/Jumbotron";


class App extends Component {
    render() {
        return (
            <React.Fragment>
				<NavigationBar/>
				<Jumbotron/>
                <Layout>
                    <Router>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/About" component={About} />
                                <Route path="/PayPal" component={PayPalApi} />
                                <Route path="/YoutubeApi" component={YoutubeAPI} />
                                <Route component={Error} />
                            </Switch>
                        </div>
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
