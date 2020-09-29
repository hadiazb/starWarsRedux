import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
	return (
		<div className='card-footer navbar-dark bg-dark footer'>
			<Link className='navbar-brand' to='/users'>
				Users
			</Link>
			<Link className='navbar-brand' to='/task'>
				Task
			</Link>
		</div>
	);
};

export default Footer;
