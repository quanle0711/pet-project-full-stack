import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import './App.css';


import TopBar from './components/navbar';
class App extends Component {

	render() {
		return (
			<React.Fragment>
				<TopBar />
				<Container>
					<div className="App">
						<h1>hello world</h1>
					</div>
				</Container>
			</React.Fragment>
		);
	}
}

export default App;
