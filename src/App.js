import { useState, useEffect } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import axios from 'axios';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
	const [data, setData] = useState({});

	// arrow function is what I want to do
	// [] control when I do it (empty means "on page load")
	useEffect(() => {
		axios.get('/api').then((response) => {
			console.log(response.data);
			setData(response.data);
		});
	}, []);

	async function getValue() {
		const response = await axios.get('/api/counter');
		setData(response.data);
	}

	async function increaseValue() {
		const response = await axios.post('/api/counter');
		setData(response.data);
	}

	async function decreaseValue() {
		const response = await axios.put('/api/counter');
		setData(response.data);
	}

	async function resetValue() {
		const response = await axios.delete('/api/counter');
		setData(response.data);
	}

	return (
		<Router>
			<div className="App">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/about">About</Link>
				</nav>

				<Switch>
					<Route exact path="/">
						<Home />
						<p>data is: {data.value ? data.value : 0}</p>
						<button onClick={getValue}>get</button>
						<button onClick={increaseValue}>+</button>
						<button onClick={decreaseValue}>-</button>
						<button onClick={resetValue}>reset</button>
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
