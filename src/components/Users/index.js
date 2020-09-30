import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style.css';
import TableCharacters from '../TableCharacters/index';
import Loading from '../Loading/index';

import * as usersActions from '../../actions/usersActions';

const Users = (props) => {
	const { getAll, users, loading, error } = props;

	useEffect(() => {
		if (!users.length) {
			getAll();
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const putContent = () => {
		if (loading) {
			return <Loading />;
		}

		if (error) {
			return <h1>NotFound</h1>;
		}
		return <TableCharacters />;
	};
	return (
		<div className='container-fluid pt-2 view'>
			<h3 className='pt-1 pb-1 d-flex justify-content-center align-items-center'>
				Star Wars Characters
			</h3>
			{putContent()}
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { usersReducer } = reducers;
	return usersReducer;
};

export default connect(
	mapStateToProps,
	usersActions
)(Users);
