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
		const responseOne = await axios.get(
			'http://swapi.dev/api/people/?page=1'
		);
		const responseTwo = await axios.get(
			'http://swapi.dev/api/people/?page=2'
		);
		const responseThree = await axios.get(
			'http://swapi.dev/api/people/?page=3'
		);
		const responseFour = await axios.get(
			'http://swapi.dev/api/people/?page=4'
		);
		const responseFive = await axios.get(
			'http://swapi.dev/api/people/?page=5'
		);
		const responseSix = await axios.get(
			'http://swapi.dev/api/people/?page=6'
		);
		const responseSeven = await axios.get(
			'http://swapi.dev/api/people/?page=7'
		);
		const responseEight = await axios.get(
			'http://swapi.dev/api/people/?page=8'
		);
		const responseNine = await axios.get(
			'http://swapi.dev/api/people/?page=9'
		);
		const allData = [
			...responseOne.data.results,
			...responseTwo.data.results,
			...responseThree.data.results,
			...responseFour.data.results,
			...responseFive.data.results,
			...responseSix.data.results,
			...responseSeven.data.results,
			...responseEight.data.results,
			...responseNine.data.results,
		];
		dispatch({
			type: GET_ALL,
			payload: allData,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: `Character notfound, error: ${error.message}`,
		});
	}
};
