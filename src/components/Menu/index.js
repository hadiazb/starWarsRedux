import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className='navbar navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				Home
			</Link>
			<div>
				<Link className='navbar-brand ' to='/characters'>
					<h6 className='pt-2'>Characters</h6>
				</Link>
				<Link className='navbar-brand' to='/planets'>
					<h6 className='pt-2'>Planets</h6>
				</Link>
				<Link className='navbar-brand' to='/task'>
					<h6 className='pt-2'>Films</h6>
				</Link>
			</div>
		</nav>
	);
};

export default Menu;
