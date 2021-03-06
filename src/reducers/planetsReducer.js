import {
	GET_ALL,
	LOADING,
	ERROR,
} from '../types/planetsTypes';

const INITIAL_STATE = {
	planets: [],
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ALL:
			return {
				...state,
				planets: action.payload,
				loading: false,
				error: '',
			};

		case LOADING:
			return {
				...state,
				loading: true,
			};

		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
