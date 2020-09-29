import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
	return (
		<nav className='navbar navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				Home
			</Link>
			<div>
				<Link className='navbar-brand' to='/users'>
					Users
				</Link>
				<Link className='navbar-brand' to='/task'>
					Task
				</Link>
			</div>
		</nav>
	);
};

export default Menu;
