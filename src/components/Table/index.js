import React from 'react';
import { connect } from 'react-redux';

const Table = (props) => {
	const putRows = () =>
		props.users.map((user) => (
			<tr key={user.name}>
				<td>{user.name}</td>
				<td>{user.height}</td>
				<td>{user.mass}</td>
			</tr>
		));
	return (
		<table className='table table-striped table-dark table-bordered table-hover table-responsive-sm '>
			<thead className='thead-dark'>
				<tr>
					<th>Name</th>
					<th>Height</th>
					<th>Mass</th>
				</tr>
			</thead>
			<tbody>{putRows()}</tbody>
		</table>
	);
};

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};

export default connect(mapStateToProps)(Table);
