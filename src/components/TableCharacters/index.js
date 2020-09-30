import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const TableCharacters = (props) => {
	const putRows = () =>
		props.users.map((user, key) => (
			<tr key={key}>
				<td>{user.name}</td>
				<td>{user.height}</td>
				<td>{user.mass}</td>
				<td>{user.gender}</td>
				<td>{user.birth_year}</td>
				<td className='d-flex justify-content-center align-items-center'>
					<Link to={`/user/${key}`}>
						<div className='eye-solid icon box'></div>
					</Link>
				</td>
			</tr>
		));
	return (
		<table className='table-sm table table-striped table-dark table-bordered table-hover table-responsive-sm '>
			<thead className='thead-dark'>
				<tr>
					<th>Name</th>
					<th>Height [cm]</th>
					<th>Mass [kg]</th>
					<th>Gender</th>
					<th>Birth Year</th>
					<th className='d-flex justify-content-center align-items-center'>
						View
					</th>
				</tr>
			</thead>
			<tbody>{putRows()}</tbody>
		</table>
	);
};

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};

export default connect(mapStateToProps)(TableCharacters);
