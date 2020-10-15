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
		const responseTwo = await axios.get(
			'http://swapi.dev/api/planets/?page=2'
		);
		const responseThree = await axios.get(
			'http://swapi.dev/api/planets/?page=3'
		);
		const responseFour = await axios.get(
			'http://swapi.dev/api/planets/?page=4'
		);
		const responseFive = await axios.get(
			'http://swapi.dev/api/planets/?page=5'
		);
		const responseSix = await axios.get(
			'http://swapi.dev/api/planets/?page=6'
		);
		const allData = [
			...responseOne.data.results,
			...responseTwo.data.results,
			...responseThree.data.results,
			...responseFour.data.results,
			...responseFive.data.results,
			...responseSix.data.results,
		];
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
