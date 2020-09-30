import React from 'react';
import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';

const Layout = (props) => {
	const { children } = props;
	return (
		<div>
			<Menu />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
