# React Router Demo

## Installation

```sh
npm install react-router-dom
```

## What do I import?

```js
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
```

## How do I create "pages" with React Rotuer?

Create some components, for example:

- Home
- About
- Contact

## How do I use Router?

Wrap you _entire_ App with it.

```js
	return (
		<Router>
			<div className="App">
				<Home />
				<About />
				<Contact />
			</div>
		</Router>
```

## How do I create a nav with react router?

```js
<nav>
	<Link to="/">Home</Link>
	<Link to="/contact">Contact</Link>
	<Link to="/about">About</Link>
</nav>
```
