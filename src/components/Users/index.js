import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';
import Table from '../Table/index';

const Users = (props) => {
	console.log(props);
	const { getAll, users } = props;

	useEffect(() => {
		if (users.length === 0) {
			getAll();
		}
	}, [users, getAll]);

	const putTable = () => {
		return <Table />;
	};

	return (
		<div className='container-fluid pt-3'>
			<h3 className='pt-1 pb-2 d-flex justify-content-center align-items-center'>
				We are User!!!
			</h3>
			{putTable()}
		</div>
	);
};

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};

export default connect(
	mapStateToProps,
	usersActions
)(Users);
