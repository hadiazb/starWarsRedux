import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading/index';
import TablePlanets from '../TablePlanets/index';

import * as planetActions from '../../actions/planetsActions';
import * as usersActions from '../../actions/usersActions';

const { getAll: usersGetAll } = usersActions;
const { getAll: planetsGetAll } = planetActions;

const Planets = (props) => {
	const {
		planetsGetAll,
		usersGetAll,
		usersReducer,
		planetsReducer,
		planetsReducer: { loading },
		planetsReducer: { error },
	} = props;

	useEffect(() => {
		const getData = async () => {
			if (!usersReducer.users.length) {
				await usersGetAll();
			}

			if (!planetsReducer.planets.length) {
				await planetsGetAll();
			}
		};
		getData();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const putContent = () => {
		if (loading) {
			return <Loading />;
		}

		if (error) {
			return <h3>Error...</h3>;
		}

		return <TablePlanets />;
	};

	return (
		<div className='container-fluid pt-2 view'>
			<h3 className='pt-1 pb-1 d-flex justify-content-center align-items-center'>
				Planets
			</h3>
			{putContent()}
		</div>
	);
};

const mapStateToProps = ({
	usersReducer,
	planetsReducer,
}) => {
	return { usersReducer, planetsReducer };
};

const mapDispatchToProps = {
	planetsGetAll,
	usersGetAll,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Planets);
