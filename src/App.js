import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Layout from './Containers/Layout/index';
import User from './components/Users/index';

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact component={User} path='/users' />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
