import axios from 'axios';
import {
	LOADING,
	ERROR,
	GET_ALL,
} from '../types/planetsTypes';

export const getAll = () => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	try {
		const responseOne = await axios.get(
			'http://swapi.dev/api/planets/?page=1'
		);
		const allData = [...responseOne.data.results];
		dispatch({
			type: GET_ALL,
			payload: allData,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: `Planet notfound, error: ${error.message}`,
		});
	}
};
