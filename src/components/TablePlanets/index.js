import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TableCharacters = (props) => {
	const { planets } = props;
	const putRows = () =>
		planets.map((planet, key) => (
			<tr key={key}>
				<td>{planet.name}</td>
				<td>{planet.population}</td>
				<td>{planet.climate}</td>
				<td>{planet.terrain}</td>
				<td>{planet.gravity}</td>
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
					<th>Populations</th>
					<th>Climate</th>
					<th>Terrain</th>
					<th>Gravity</th>
					<th>View</th>
				</tr>
			</thead>
			<tbody>{putRows()}</tbody>
		</table>
	);
};
// <tbody>{putRows()}</tbody>

const mapStateToProps = (reducers) => {
	return reducers.planetsReducer;
};

export default connect(mapStateToProps)(TableCharacters);
