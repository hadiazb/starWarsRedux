import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Layout from './containers/Layout/index';
import User from './components/Users/index';
import Planets from './components/Planets/index';

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact component={User} path='/characters' />
					<Route exact component={Planets} path='/planets' />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
