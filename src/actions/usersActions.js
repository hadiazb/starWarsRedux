import axios from 'axios';
import {
	LOADING,
	ERROR,
	GET_ALL,
} from '../types/usersTypes';

export const getAll = () => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	try {
		const response = await axios.get(
			'https://swapi.dev/api/people/'
		);
		// console.log(response);
		dispatch({
			type: GET_ALL,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: `Character notfound, error: ${error.message}`,
		});
	}
};
