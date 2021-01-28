import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
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
